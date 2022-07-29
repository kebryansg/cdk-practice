import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDsComponent } from './modal-ds.component';

describe('ModalDsComponent', () => {
  let component: ModalDsComponent;
  let fixture: ComponentFixture<ModalDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
