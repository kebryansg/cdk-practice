import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragAndDropComponent} from "./drag-and-drop.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DragAndDropComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DragAndDropComponent],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes),
  ]
})
export class DragAndDropModule { }
