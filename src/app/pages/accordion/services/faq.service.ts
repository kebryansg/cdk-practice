import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

const DATA = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']

@Injectable()
export class FaqService {

  faq$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([...DATA])

  constructor() {
  }

  getItems(): Observable<any[]> {
    return this.faq$.asObservable()
  }

}
