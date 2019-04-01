import { SubcourseService } from '../../services/subcourse.service';
import { CourseService } from '../../services/course.service';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormArray } from '@angular/forms';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

//import { saveAs } from "file-saver";
//import { FileItem } from "ng2-file-upload/file-upload/file-item.class";
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-subcourse',
  templateUrl: './subcourse.component.html',
  styleUrls: ['./subcourse.component.css']
})
export class SubcourseComponent implements OnInit {

  public dataForm: FormGroup;
    rowData: any;
    courses: any;
    modalContent = 'margin-left: 20px !important';
    public gridOptions: GridOptions;
    private gridApi;
    public columnDefs;

    modalRef: NgbModalRef;

    orderForm: FormGroup;
    items: FormArray;
    public show:boolean = false;
    
    public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    
    @ViewChild('dataModal')
    private dataModal: TemplateRef<any>;

    constructor(private fb: FormBuilder,
                private subCourseService: SubcourseService,
                private courseService: CourseService,
                private modalService: NgbModal,
                private confirmationDialogService: ConfirmationDialogService,
                private alertService: AlertService){
    }
  ngOnInit(){
    this.createForm();
    this.getData();
    this.getCourses();
      
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };  
  }
    
  createForm() {
    this.dataForm = this.fb.group({
        id: '',
        name: '',
        course: '',
        details: '',
        items: this.fb.array([])
      });
  }
    
  addItem(): void {
    this.items = this.dataForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  
  createItem(): FormGroup {
      return this.fb.group({
        id: '',  
        label: '',
        description: ''
      });
  }
    
  setItems(items) {
//    this.items = this.dataForm.get('items') as FormArray;  
//    let control = <FormArray>this.dataForm.controls.items;
//    selectedData.forEach(x => {
//      this.items.push(this.fb.group({ 
//        label: x.label, 
//        description: x.description }))
//    })
    
    let control = <FormArray>this.dataForm.controls.items;
    items.forEach(x => {
        control.push(this.fb.group({
            label: x.label,
            description: x.description
            }))
    })  
}  
   
  public edit(selectedData) {
      this.show = true;
      console.log('selectedData._id : ' + selectedData._id);
      this.dataForm.patchValue({
          id: selectedData._id,
          name: selectedData.name,
          course: selectedData.course._id,
          details: selectedData.details
      });
      this.setItems(selectedData.items);
  }
    
  deleteFieldValue(index) {
     this.items.removeAt(index);
  }  

  public getData() {
    this.subCourseService.get().subscribe(res => {
        this.rowData = res;
    });
  }

  create(formData){
      if(formData.id !== null){
        this.subCourseService.create(formData).subscribe((res) => {
            this.getData();
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });
      }else{
        this.subCourseService.update(formData).subscribe((res) => {
            this.getData();
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });  
      }
  }

  public getCourses() {
    this.courseService.get().subscribe(res => {
        this.courses = res;
    });
  }
    
  public delete(selectedRow) {
        this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this course information ... ? ' + selectedRow.name,
        'Ok','Cancel','sm')
        .then( (confirmed) => {
            if(confirmed){
                this.subCourseService.delete(selectedRow._id).subscribe(() => {
                    this.getData();
                    this.alertService.showSuccessMessage('succesfully deleted course information ' +  selectedRow.name,'top',2000);
                })
            }
        })
        .catch(() => console.log('User dismissed the confirm delete dialog....'));   
  }

  public onGridReady(params) {
      this.columnDefs = [
      {headerName: 'Course', field: 'course.name' },
       {headerName: 'Sub Course', field: 'name'},
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'edit'},
              width: 40, tooltip: () => 'Edit'},
      {cellRendererFramework: PageActionComponent,
          cellRendererParams: {pageAction: 'delete'},
              width: 40, tooltip: () => 'Delete'},
      ];

      this.gridOptions = <GridOptions> {
              rowData : this.rowData,
              rowHeight : 36,
              context : { componentParent : this } };

      this.gridApi = params.api;
      this.gridApi.gridOptions = this.gridOptions;
  }

  public editSubmit(dataForm) {  
    const formData = dataForm.value;
      console.log('formData ' + formData.items);      
//    for (let i = 0; i < dataForm.controls.items.controls.length; i++) {
//      console.log(dataForm.controls.items.controls[i].controls.label.value);
//      console.log(dataForm.controls.items.controls[i].controls.description.value);
//    }
//      const formData = dataForm.value;
//      if (formData.id !== null) {
//          this.update(formData);
//          this.closeModal();
//          this.alertService.openSnackBar('succesfully updated course information ' + formData.name,'','success');
//      } else {
          this.create(formData);
          this.alertService.showSuccessMessage('succesfully Addedd student information','top',2000);
//      }
  }

  update(formData) {
      this.subCourseService.update(formData).subscribe(() => {
          this.getData();
      });
  }

  public openModal() {
      this.dataForm.reset();
      this.modalRef =  this.modalService.open(this.dataModal);
  }

  public closeModal() {
      this.modalRef.close();
  }

}


//    this.dataForm = this.fb.group({
//        id: [''],
//        name: ['', [Validators.required as any]],
//        prerequisites: [''],
//        regular: [''],
//        fees: [''],
//        feesremark: [''],
//        online: [''],
//        home: [''],
//        centrebased: [''],
//        structure: [''],
//        course: [''],
//        label: [''],
//        labelvalue: ['']
//    });