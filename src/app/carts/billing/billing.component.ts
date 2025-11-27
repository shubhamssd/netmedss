import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingService } from 'src/app/core/services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  billingForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private billingService: BillingService) {
    this.billingForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      landmark: [''],
    });
  }

  get f() {
    return this.billingForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.billingForm.invalid) {
      return;
    }

    const billingData = this.billingForm.value;

    //Save to localStorage
    localStorage.setItem('billingData', JSON.stringify(billingData));

    //Fetch cart + totals
    const cartData = JSON.parse(localStorage.getItem('cartData') || '[]');
    const totalMRP = Number(localStorage.getItem('totalMRP'));
    const totalDiscount = Number(localStorage.getItem('totalDiscount'));
    const totalPayable = Number(localStorage.getItem('totalPayable'));
    const totalSavings = Number(localStorage.getItem('totalSavings'));

    this.router.navigate(['/carts/pay'], {
      state: {
        cartData,
        billingData,
        totalMRP,
        totalDiscount,
        totalPayable,
        totalSavings
      }
    });
  }
}
