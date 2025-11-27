import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import { authGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  {path:"cart", component:CartComponent},
  {path:"billing",component:BillingComponent},
  {path:'pay', component:PaymentComponent}
];
@NgModule({
  declarations: [
    CartComponent,
    BillingComponent,
    PaymentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartsModule { }
