import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "@app/app.component";

const routes: Routes = [
  {
    path: 'drag-and-drop',
    loadChildren: () => import('@drag/drag-and-drop.module').then((m) => m.DragAndDropModule),
  },
  {
    path: '',
    component:AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
