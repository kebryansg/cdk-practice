import {Component, OnInit} from '@angular/core';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-order-text-exercise',
    templateUrl: './order-text-exercise.component.html',
    styleUrls: ['./order-text-exercise.component.scss']
})
export class OrderTextExerciseComponent implements OnInit {
    timePeriods = [
        'the direction of the wind',
        "I can't change",
        'but I can adjust',
        'my destination',
        'my sails to always reach'
    ];


    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    validar() {
        let correctMessage = "I can't change the direction of the wind but I can adjust my sails to always reach my destination";
        let message = this.convertArrayToString(this.timePeriods)
        console.log(message);
        console.log(correctMessage);
        if (message == correctMessage) {
            alert("¡Felicidades! Has terminado");
        } else {
            alert("¡Inténtalo de nuevo!");
        }

    }

    convertArrayToString(array: string[]) {
        return array.join(' ');
    }
}
