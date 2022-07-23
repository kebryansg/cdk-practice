import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tmp-modal',
  templateUrl: './tmp-modal.component.html',
  styleUrls: ['./tmp-modal.component.scss']
})
export class TmpModalComponent implements OnInit {

  @Input() title!: string
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {
  }

  ngOnInit(): void {
  }

}
