import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicinesComponent } from './prescription-medicines.component';

describe('PrescriptionMedicinesComponent', () => {
  let component: PrescriptionMedicinesComponent;
  let fixture: ComponentFixture<PrescriptionMedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionMedicinesComponent]
    });
    fixture = TestBed.createComponent(PrescriptionMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
