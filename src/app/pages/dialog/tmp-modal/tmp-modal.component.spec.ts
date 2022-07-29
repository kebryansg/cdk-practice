import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpModalComponent } from './tmp-modal.component';

describe('TmpModalComponent', () => {
  let component: TmpModalComponent;
  let fixture: ComponentFixture<TmpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmpModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
