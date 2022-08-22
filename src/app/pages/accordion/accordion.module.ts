import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccordionRoutingModule} from './accordion-routing.module';
import {AccordionComponent} from './accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FaqService} from "@accordion/services/faq.service";
import {HttpClientModule} from '@angular/common/http';
import { ImgErrorDirective } from './directive/img-error.directive';


@NgModule({
  declarations: [
    AccordionComponent,
    ImgErrorDirective
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    CdkAccordionModule,
    HttpClientModule
  ],
  providers: [
    FaqService
  ]

})
export class AccordionModule {
}
