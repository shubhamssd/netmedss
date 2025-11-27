import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnlineComponent } from './order-online.component';

describe('OrderOnlineComponent', () => {
  let component: OrderOnlineComponent;
  let fixture: ComponentFixture<OrderOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderOnlineComponent]
    });
    fixture = TestBed.createComponent(OrderOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
