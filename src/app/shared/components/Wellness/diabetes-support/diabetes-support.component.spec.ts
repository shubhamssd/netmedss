import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesSupportComponent } from './diabetes-support.component';

describe('DiabetesSupportComponent', () => {
  let component: DiabetesSupportComponent;
  let fixture: ComponentFixture<DiabetesSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiabetesSupportComponent]
    });
    fixture = TestBed.createComponent(DiabetesSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
