import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccordionRoutingModule} from './accordion-routing.module';
import {AccordionComponent} from './accordion.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {FaqService} from "@accordion/services/faq.service";


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    CdkAccordionModule
  ],
  providers: [
    FaqService
  ]

})
export class AccordionModule {
}
