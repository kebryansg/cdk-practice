import {Component, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {

  open: boolean = true

  constructor(public dialogRef: DialogRef<string>,) {
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close()
  }

}
