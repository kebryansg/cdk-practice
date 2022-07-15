import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';


@NgModule({
  declarations: [
    DialogComponent,
    ModalExampleComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule
  ]
})
export class DialogModule { }
