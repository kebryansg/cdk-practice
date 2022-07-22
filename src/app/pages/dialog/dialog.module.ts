import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogModule as DialogCdkModule} from '@angular/cdk/dialog';
import {DialogRoutingModule} from './dialog-routing.module';
import {DialogComponent} from './dialog.component';
import {ModalExampleComponent} from './modal-example/modal-example.component';
import { PhoneInputDirective } from './directives/phone-input.directive';


@NgModule({
  declarations: [
    DialogComponent,
    ModalExampleComponent,
    PhoneInputDirective
  ],
  imports: [
    CommonModule,
    DialogCdkModule,
    DialogRoutingModule
  ]
})
export class DialogModule {
}
