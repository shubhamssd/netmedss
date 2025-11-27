import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCareComponent } from './personal-care.component';

describe('PersonalCareComponent', () => {
  let component: PersonalCareComponent;
  let fixture: ComponentFixture<PersonalCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalCareComponent]
    });
    fixture = TestBed.createComponent(PersonalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
