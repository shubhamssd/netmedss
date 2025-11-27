import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyushComponent } from './ayush.component';

describe('AyushComponent', () => {
  let component: AyushComponent;
  let fixture: ComponentFixture<AyushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyushComponent]
    });
    fixture = TestBed.createComponent(AyushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
