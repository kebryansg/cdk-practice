import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import {InputModule} from "./input/input.module";


@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    DatepickerRoutingModule
  ]
})
export class DatepickerModule { }
