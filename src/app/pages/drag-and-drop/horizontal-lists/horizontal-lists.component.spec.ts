import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalListsComponent } from './horizontal-lists.component';

describe('HorizontalListsComponent', () => {
  let component: HorizontalListsComponent;
  let fixture: ComponentFixture<HorizontalListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
