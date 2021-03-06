import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'drag-and-drop',
    pathMatch: 'full'
  },
  {
    path: 'accordion',
    title: 'Accordion',
    loadChildren: () => import('@accordion/accordion.module').then(module => module.AccordionModule)
  },
  {
    path: 'dialog',
    title: 'Dialog',
    loadChildren: () => import('@dialog/dialog.module').then(module => module.DialogModule)
  },
  {
    path: 'drag-and-drop',
    loadChildren: () => import('@drag/drag-and-drop.module').then((m) => m.DragAndDropModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
