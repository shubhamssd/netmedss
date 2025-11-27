import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaAwarenessComponent } from './corona-awareness.component';

describe('CoronaAwarenessComponent', () => {
  let component: CoronaAwarenessComponent;
  let fixture: ComponentFixture<CoronaAwarenessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoronaAwarenessComponent]
    });
    fixture = TestBed.createComponent(CoronaAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
