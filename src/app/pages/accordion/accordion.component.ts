import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FaqService} from "@accordion/services/faq.service";
import {Observable} from 'rxjs';
import {Country} from '@accordion/interfaces/country.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {

  country$ = this.faqService.getCountry()
  countryFlag$!: Observable<string>
  expandedIndex = 0;

  constructor(private faqService: FaqService) {
  }

  ngOnInit(): void {
  }

  openItem(code: string) {
    this.countryFlag$ = this.faqService.getFlagByCodeCountry(code)
  }

  trackByItems(index: number, item: Country) {
    return item.id
  }

}
