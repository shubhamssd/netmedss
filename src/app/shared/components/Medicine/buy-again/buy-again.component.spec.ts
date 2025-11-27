import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAgainComponent } from './buy-again.component';

describe('BuyAgainComponent', () => {
  let component: BuyAgainComponent;
  let fixture: ComponentFixture<BuyAgainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyAgainComponent]
    });
    fixture = TestBed.createComponent(BuyAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
