import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { PageActionComponent} from '../../common/components/page-action/page-action.component';
import { AlertService } from '../../common/services/alert.service';
import { ConfirmationDialogService } from '../../common/services/confirmation-dialog.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
//https://stackblitz.com/angular/dnbermjydavk?file=app%2Ftable-overview-example.ts
//https://code-maze.com/angular-material-table/
//https://www.gistia.com/custom-elements-angular-modularization-html5/

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public dataForm: FormGroup;
    rowData: any;
    
    public gridOptions: GridOptions;
    private gridApi;
    public columnDefs;
    
    modalRef: NgbModalRef;
    
    @ViewChild(TemplateRef, {static: false}) dataModal: TemplateRef<any>;
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    
    
    dataSource: MatTableDataSource<any>;
    displayedColumns = ['name','detail','update','delete'];
  
    count: number = null;
    
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private modalService: NgbModal,
              private confirmationDialogService: ConfirmationDialogService,
              private alertService: AlertService) { 
    this.createForm();
  }
              
  handleCountChanged($event) {
    this.count = $event;
      console.log('count: ' + this.count);
  }

  ngOnInit() {
    this.getData();
  }
    
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createForm() {
    this.dataForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required as any]],
        details: ['', [Validators.required as any]],
    });
  }

  public getData() {
    this.productService.get().subscribe(res => {
        this.rowData = res;
        this.dataSource = new MatTableDataSource(this.rowData);
    });
  }

  public onGridReady(params) {
      this.columnDefs = [
      {headerName: 'Name', field: 'name'},
      {headerName: 'Details', field: 'details' },
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

  public openModal() {
      this.dataForm.reset();
      this.modalRef =  this.modalService.open(this.dataModal);
  }

  public closeModal() {
      this.modalRef.close();
  }
  
  public edit(selectedData) {
      this.dataForm.setValue({
          id: selectedData._id,
          name: selectedData.name,
          details: selectedData.details
      });
      this.modalRef =  this.modalService.open(this.dataModal);
  }
  
  public editSubmit(dataForm) {
      const formData = dataForm.value;
      if (formData.id !== null) {
          this.update(formData);
          this.closeModal();
          this.alertService.openSnackBar('Successfully updated product information ' + formData.name,'','success');
      } else {
          this.create(formData);
          this.alertService.showSuccessMessage('Successfully Added product information','top',2000);
      }
  }
    
  update(formData) {
      this.productService.update(formData).subscribe(() => {
          this.getData();
      });
  }
    
  create(formData){
        this.productService.create(formData).subscribe((res) => {
            this.closeModal();
            this.getData();
        }, (error) => {
            // this.errorMessage = error;
            // console.log('this.errorMessage : ' + error);
            // this.alertService.showError(error);
            // this.alertService.danger({message: this.errorMessage, timed: false, closeable: true});
        });
  }
  
  public delete(selectedRow) {
        this.confirmationDialogService.confirm(
        'Please confirm..', 
        'Do you want to delete this product information ... ? ' + selectedRow.name,
        'Ok','Cancel','sm')
        .then( (confirmed) => {
            if(confirmed){
                this.productService.delete(selectedRow._id).subscribe(() => {
                    this.getData();
                    this.alertService.showSuccessMessage('Successfully deleted product information ' +  selectedRow.name,'top',2000);
                })
            }
        })
        .catch(() => console.log('User dismissed the confirm delete dialog....'));   
  }  

}
