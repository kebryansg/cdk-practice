import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  },
  {
    path: 'accordion',
    title: 'Accordion',
    loadChildren: () => import('./pages/accordion/accordion.module').then(module => module.AccordionModule)
  },
  {
    path: 'dialog',
    title: 'Dialog',
    loadChildren: () => import('./pages/dialog/dialog.module').then(module => module.DialogModule)
  },
  {
    path: 'table',
    title: 'Table',
    loadChildren: () => import('./pages/table/table.module').then(module => module.TableModule)
  }
];
  {
    path: 'drag-and-drop',
    loadChildren: () => import('@drag/drag-and-drop.module').then((m) => m.DragAndDropModule),
  },
  {
    path: '',
    component:AppComponent,
  },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
