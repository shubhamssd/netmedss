import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUpComponent } from './make-up.component';

describe('MakeUpComponent', () => {
  let component: MakeUpComponent;
  let fixture: ComponentFixture<MakeUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeUpComponent]
    });
    fixture = TestBed.createComponent(MakeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
