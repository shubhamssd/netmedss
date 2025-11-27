import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerComponent } from './cancer.component';

describe('CancerComponent', () => {
  let component: CancerComponent;
  let fixture: ComponentFixture<CancerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancerComponent]
    });
    fixture = TestBed.createComponent(CancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
