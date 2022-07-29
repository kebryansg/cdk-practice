import { Component, OnInit } from '@angular/core';
import {FaqService} from "@accordion/services/faq.service";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  items$ = this.faqService.getItems()
  expandedIndex = 0;

  constructor(private faqService:FaqService) { }

  ngOnInit(): void {
  }

}
