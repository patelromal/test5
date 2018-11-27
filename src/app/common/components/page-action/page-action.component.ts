import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'page-action',
    template: `
        <button *ngIf="pageAction === 'edit'" class='no-style' (click)='edit($event)'
        tooltip="Edit">
            <i class='fa fa-pencil text-primary' style="transform: scale(1.2)"></i>
        </button>
        <button *ngIf="pageAction === 'save'" class='no-style' (click)='save($event)'
        tooltip="Save">
            <i class='fa fa-save text-primary' style="transform: scale(1.2)"></i>
        </button>
        <button *ngIf="pageAction === 'open'" class='no-style' (click)='open($event)'
        tooltip="Open">
            <i class='fa fa-openid text-primary' style="transform: scale(1.2)"></i>
        </button>
        <button *ngIf="pageAction === 'delete'" class='no-style' (click)='delete($event)'
        tooltip="Save">
            <i class='fa fa-trash text-danger' style="transform: scale(1.2)"></i>
        </button>
        <button *ngIf="pageAction === 'notes'" class='no-style'
        tooltip="Notes">
            <span class="fa-stack">
                <span class="fa fa-sticky-note text-warning fa-stack-2x"></span>
                <strong class="fa-stack" style="font-family:Roboto; font-size:xx-small">
                    {{params.data.notes}}</strong>
            </span>
        </button>
    `,
})
export class PageActionComponent implements ICellRendererAngularComp {
    public params: any;
    public pageAction: any;

    public agInit(params: any): void {
        this.params = params;
        this.pageAction = params.pageAction;
    }

    public refresh(params: any): boolean {
        this.params = params;
        return true;
    }

    public save() {
        this.params.api.gridOptions.context.componentParent.save(this.params.data);
    }

    public edit(ev) {
        this.params.api.gridOptions.context.componentParent.edit(this.params.data);
        ev.stopPropagation();
    }

    public open() {
        this.params.api.gridOptions.context.componentParent.open(this.params);
    }

    public delete() {
        this.params.api.gridOptions.context.componentParent.delete(this.params.data);
    }
}
