import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private billingData: any = null;

  setBillingData(data: any) {
    this.billingData = data;
  }

  getBillingData() {
    return this.billingData;
  }
}
