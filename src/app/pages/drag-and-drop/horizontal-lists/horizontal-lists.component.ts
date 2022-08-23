import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-horizontal-lists',
    templateUrl: './horizontal-lists.component.html',
    styleUrls: ['./horizontal-lists.component.scss']
})
export class HorizontalListsComponent implements OnInit {
    todo = ['mariposa', 'vaca', 'ballena', 'tortuga'];

    done = ['perro', 'hormiga', 'pescado', 'ratón', 'araña'];

    constructor() {
    }

    ngOnInit(): void {
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

}
