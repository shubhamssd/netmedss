import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthLibraryComponent } from './health-library.component';

describe('HealthLibraryComponent', () => {
  let component: HealthLibraryComponent;
  let fixture: ComponentFixture<HealthLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthLibraryComponent]
    });
    fixture = TestBed.createComponent(HealthLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
