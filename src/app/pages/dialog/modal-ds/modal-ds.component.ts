import {Component, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-modal-ds',
  templateUrl: './modal-ds.component.html',
  styleUrls: ['./modal-ds.component.scss']
})
export class ModalDsComponent implements OnInit {


  open: boolean = true

  constructor(public dialogRef: DialogRef<string>,) {
  }

  ngOnInit(): void {
  }

  handlePrimary(evt: any) {
    console.log(evt)
    this.close()
  }

  handleSecondary(evt: any) {
    console.log(evt)
    this.close()
  }

  close() {
    this.dialogRef.close()
  }

}
