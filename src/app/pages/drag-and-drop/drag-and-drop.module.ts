import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragAndDropComponent} from "./drag-and-drop.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {RouterModule, Routes} from "@angular/router";
import {KanbanComponent} from './kanban/kanban.component';
import {OrderTextExerciseComponent} from './order-text-exercise/order-text-exercise.component';
import {HorizontalListsComponent} from './horizontal-lists/horizontal-lists.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DragAndDropComponent,
            },
            {
                path: 'horizontal',
                component: HorizontalListsComponent,
            },
            {
                path: 'kanban',
                component: KanbanComponent,
            },
            {
                path: 'exercise',
                component: OrderTextExerciseComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [DragAndDropComponent, KanbanComponent, OrderTextExerciseComponent, HorizontalListsComponent],
    imports: [
        CommonModule,
        DragDropModule,
        RouterModule.forChild(routes),
    ]
})
export class DragAndDropModule {
}
