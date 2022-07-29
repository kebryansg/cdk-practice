import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTextExerciseComponent } from './order-text-exercise.component';

describe('OrderTextExerciseComponent', () => {
  let component: OrderTextExerciseComponent;
  let fixture: ComponentFixture<OrderTextExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTextExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTextExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
