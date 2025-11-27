import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMedicineComponent } from './all-medicine.component';

describe('AllMedicineComponent', () => {
  let component: AllMedicineComponent;
  let fixture: ComponentFixture<AllMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMedicineComponent]
    });
    fixture = TestBed.createComponent(AllMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
