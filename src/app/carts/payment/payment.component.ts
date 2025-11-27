import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartData: any[] = [];
  billingData: any = {};
  totalMRP: number = 0;
  totalDiscount: number = 0;
  totalPayable: number = 0;
  totalSavings: number = 0;

  ngOnInit(): void {
    const cart = localStorage.getItem('cartData');
    const billing = localStorage.getItem('billingData');
    const mrp = localStorage.getItem('totalMRP');
    const discount = localStorage.getItem('totalDiscount');
    const payable = localStorage.getItem('totalPayable');
    const savings = localStorage.getItem('totalSavings');

    if (cart) this.cartData = JSON.parse(cart);
    if (billing) this.billingData = JSON.parse(billing);
    if (mrp) this.totalMRP = parseFloat(mrp);
    if (discount) this.totalDiscount = parseFloat(discount);
    if (payable) this.totalPayable = parseFloat(payable);
    if (savings) this.totalSavings = parseFloat(savings);
  }
}
