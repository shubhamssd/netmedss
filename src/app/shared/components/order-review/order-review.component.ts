import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {
  addressForm!: FormGroup;

  // Prescription preview (image/pdf)
  prescriptionPreview: string | null = null;

  // Sidebar toggle
  showAddressSidebar: boolean = false;

  // Promo code details
  promoApplied: boolean = true;
  promoCode: string = 'NMSAVE20';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPrescriptionPreview();
  }

  // Initializing address form with validation
  private initForm(): void {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  // Load uploaded prescription from sessionstorage
  private loadPrescriptionPreview(): void {
    this.prescriptionPreview = sessionStorage.getItem('uploadedPrescription');
  }

  // getting access from form control to html
  get f() {
    return this.addressForm.controls;
  }

  //for opening the addressbar
  openAddressSidebar(): void {
    this.showAddressSidebar = true;
  }

  //for closing the addressbar
  closeAddressSidebar(): void {
    this.showAddressSidebar = false;
  }

  //  submitting address from
  submitAddress(): void {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched(); 
      return;
    }

    const addressData = this.addressForm.value;

    // address is stored in sessionstorage
    try {
      sessionStorage.setItem('userAddress', JSON.stringify(addressData));
      console.log('Address saved to localStorage:', addressData);
      alert('Address submitted successfully!');
    } catch (error) {
      console.error('Error saving address:', error);
      alert('Failed to save address. Please try again.');
    }

    this.closeAddressSidebar();
  }

 
  placeOrder(): void {
    if (!this.prescriptionPreview) {
      alert('Please upload a prescription before placing the order.');
      return;
    }

    if (!this.promoApplied) {
      alert('Please apply a promo code before placing the order.');
      return;
    }

    alert('Order placed successfully!');
  }
}
