import {Component, OnInit} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ModalExampleComponent} from "./modal-example/modal-example.component";
import {ModalDsComponent} from "./modal-ds/modal-ds.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: Dialog) {
  }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(ModalExampleComponent, {
      minWidth: '250px',
      disableClose: true,
      hasBackdrop: true
    })
  }

  openModalDesign() {
    this.dialog.open(ModalDsComponent, {
      minWidth: '250px',
      disableClose: true,
      hasBackdrop: true
    })
  }

}
