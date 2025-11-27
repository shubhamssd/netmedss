import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragranceComponent } from './fragrance.component';

describe('FragranceComponent', () => {
  let component: FragranceComponent;
  let fixture: ComponentFixture<FragranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FragranceComponent]
    });
    fixture = TestBed.createComponent(FragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
