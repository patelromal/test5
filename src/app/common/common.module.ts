import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageActionComponent } from "./components/page-action/page-action.component";
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [PageActionComponent],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class SmuCommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule : SmuCommonModule,
            providers : [],
        };
    }
}
