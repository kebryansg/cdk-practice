import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogModule as CdkDialogModule} from'@angular/cdk/dialog'
import {DialogRoutingModule} from './dialog-routing.module';
import {DialogComponent} from './dialog.component';
import {ModalExampleComponent} from './modal-example/modal-example.component';
import { TmpModalComponent } from './tmp-modal/tmp-modal.component';
import { ModalDsComponent } from './modal-ds/modal-ds.component';


@NgModule({
  declarations: [
    DialogComponent,
    ModalExampleComponent,
    TmpModalComponent,
    ModalDsComponent
  ],
  imports: [
    CommonModule,
    CdkDialogModule,
    DialogRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DialogModule {
}
