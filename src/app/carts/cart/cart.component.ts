import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartserviceService } from '../servicecart/cartservice.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  cartSubscription!: Subscription;

  totalMRP: number = 0;
  totalDiscount: number = 0;
  totalPayable: number = 0;
  totalSavings: number = 0;
  packagingCharge: number = 49;

  images: string[] = [
    '/assets/cart/add1.jpg',
    '/assets/cart/add2.jpg',
    '/assets/cart/add4.jpg'
  ];
  currentIndex: number = 0;
  autoSlideInterval: any;

  slideContent = [
    {
      img: '/assets/cart/savemore.png',
      title: 'Additional 2% NMS cash',
      desc: 'Maximum Rs.100 on prepaid medicine'
    },
    {
      img: '/assets/cart/unlimitatedfree.png',
      title: 'Unlimited Free Delivery',
      desc: 'Free delivery on order Rs.99'
    },
    {
      img: '/assets/cart/superfastDelivery.png',
      title: 'SuperFast Delivery',
      desc: 'High priority to all orders'
    }
  ];
  currentIndex1 = 0;
  autoSlideInterval1: any;

  showDropdown = true;

  constructor(
    private cartService: CartserviceService,
    private http: HttpClient,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
    this.startAutoSlide();
    this.startAutoSlide1();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
    clearInterval(this.autoSlideInterval1);
    if (this.cartSubscription) this.cartSubscription.unsubscribe();
  }

  // Load cart from server
  loadCart(): void {
    this.cartSubscription = this.cartService.getCartItems().subscribe((res: any) => {
      this.cartItems = res.map((item: any) => ({
        ...item,
        quantity: item.quantity ?? 1
      }));
      this.calculateTotals();
    });
  }

  //Calculate totals for billing
  calculateTotals(): void {
    this.totalMRP = 0;
    this.totalDiscount = 0;
    this.totalPayable = 0;
    this.totalSavings = 0;

    this.cartItems.forEach(item => {
      const quantity = item.quantity || 1;
      const itemMRP = item.price * quantity;
      const itemDiscPrice = item.disc_price * quantity;
      const itemSavings = itemMRP - itemDiscPrice;

      this.totalMRP += itemMRP;
      this.totalDiscount += itemSavings;
      this.totalPayable += itemDiscPrice;
      this.totalSavings += itemSavings;
    });

    // Round values
    this.totalMRP = +this.totalMRP.toFixed(2);
    this.totalDiscount = +this.totalDiscount.toFixed(2);
    this.totalPayable = +this.totalPayable.toFixed(2);
    this.totalSavings = +this.totalSavings.toFixed(2);
  }

  // Quantity change
  updateQuantity(): void {
    this.calculateTotals();
  }

removeFromCart(item: any) {
  if (!item?.id) {
    console.error('Missing cart item ID:', item);
    return;
  }

  this.cartService.deleteCartItem(item.id).subscribe(() => {
    this.loadCart();
    this.cartService.refreshCartCount();
  });
}


  // Slider 1
  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  //Slider 2
  startAutoSlide1(): void {
    this.autoSlideInterval1 = setInterval(() => {
      this.currentIndex1 = (this.currentIndex1 + 1) % this.slideContent.length;
    }, 3000);
  }

  //Dropdown
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
 proceedToCheckout() {
  const isUserLoggedIn = !!sessionStorage.getItem('user');

  if (isUserLoggedIn) {
    // Save cart
    localStorage.setItem('cartData', JSON.stringify(this.cartItems));
    localStorage.setItem('totalMRP', this.totalMRP.toString());
    localStorage.setItem('totalDiscount', this.totalDiscount.toString());
    localStorage.setItem('totalPayable', this.totalPayable.toString());
    localStorage.setItem('totalSavings', this.totalSavings.toString());

    // Navigate
    this.router.navigate(['/carts/billing']);
  } else {
    alert("Please login before proceeding to checkout.");
    this.router.navigate(['/auth/login']);
  }
}

}