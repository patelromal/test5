import { SubproductService } from '../../services/subproduct.service';
import { ProductService } from '../../services/product.service';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormArray } from '@angular/forms';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

//import { saveAs } from "file-saver";
//import { FileItem } from "ng2-file-upload/file-upload/file-item.class";
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.css']
})
export class SubproductComponent implements OnInit {
   
  public dataForm: FormGroup;
    rowData: any;
    products: any;
    modalContent = 'margin-left: 20px !important';
    public gridOptions: GridOptions;
    private gridApi;
    public columnDefs;

    modalRef: NgbModalRef;

    orderForm: FormGroup;
    items: FormArray;
    public show:boolean = false;
    
    public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    dataSource: MatTableDataSource<any>;
    displayedColumns = ['name','detail','update','delete'];
    
    @ViewChild(TemplateRef, {static: false}) dataModal: TemplateRef<any>;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;  

    constructor(private fb: FormBuilder,
                private subProductService: SubproductService,
                private productService: ProductService,
                private modalService: NgbModal,
                private confirmationDialogService: ConfirmationDialogService,
                private alertService: AlertService){
    }
  ngOnInit(){
    this.createForm();
    this.getData();
    this.getProducts();
      
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
        product: '',
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
    let control = <FormArray>this.dataForm.controls.items;
    items.forEach(x => {
        control.push(this.fb.group({
            label: x.label,
            description: x.description
            }))
    })  
}  
   
  public edit(selectedData) {
      console.log('------------------');
      let element: HTMLElement = document.getElementById('pills-profile-tab') as HTMLElement;
      element.click();
      this.show = true;
      console.log('selectedData._id : ' + selectedData._id);
      this.dataForm.patchValue({
          id: selectedData._id,
          name: selectedData.name,
          product: selectedData.product._id,
          details: selectedData.details
      });
      this.setItems(selectedData.items);
      
  }
    
  deleteFieldValue(index) {
     this.items.removeAt(index);
  }  

  public getData() {
    this.subProductService.get().subscribe(res => {
        this.rowData = res;
        this.dataSource = new MatTableDataSource(this.rowData);
    });
  }

  create(formData){
      console.log('create formData: ' + formData);
        this.subProductService.create(formData).subscribe((res) => {
            this.getData();
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });
  }

  public getProducts() {
    this.productService.get().subscribe(res => {
        this.products = res;
    });
  }
    
  public delete(selectedRow) {
        this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this product information ... ? ' + selectedRow.name,
        'Ok','Cancel','sm')
        .then( (confirmed) => {
            if(confirmed){
                this.subProductService.delete(selectedRow._id).subscribe(() => {
                    this.getData();
                    this.alertService.showSuccessMessage('Successfully deleted product information ' +  selectedRow.name,'top',2000);
                })
            }
        })
        .catch(() => console.log('User dismissed the confirm delete dialog....'));   
  }

  public editSubmit(dataForm) {  
      const formData = dataForm.value;
      console.log('formData ' + formData.id);      
//    for (let i = 0; i < dataForm.controls.items.controls.length; i++) {
//      console.log(dataForm.controls.items.controls[i].controls.label.value);
//      console.log(dataForm.controls.items.controls[i].controls.description.value);
//    }
//      const formData = dataForm.value;
      if (formData.id !== null) {
          this.update(formData);
          this.alertService.showSuccessMessage('Successfully Updated sub product information','top',2000);
      } else {
          this.create(formData);
          this.alertService.showSuccessMessage('Successfully Added sub product information','top',2000);
      }
//      this.createForm();
  }

  update(formData) {
      this.subProductService.update(formData).subscribe(() => {
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