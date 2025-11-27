import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cartUrl = 'http://localhost:3000/cart';
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  constructor(private http: HttpClient) {
    this.updateCartCount();
  }

  // Generate serial ID based on existing items
  private getNextSerialId(): Observable<number> {
    return this.getCartItems().pipe(
      map((items) => {
        const numericIds = items
          .map(item => parseInt(item.id, 10))
          .filter(id => !isNaN(id));
        const maxId = numericIds.length ? Math.max(...numericIds) : 0;
        return maxId + 1;
      })
    );
  }

  //Add to cart using serial ID instead of random string
  addToCart(product: any): Observable<any> {
    return this.getNextSerialId().pipe(
      switchMap((nextId) => {
        const cartItem = {
          ...product,
          productId: product.id,
          id: nextId.toString(),  //serial ID as string 
          quantity: product.quantity || 1
        };
        return this.http.post(this.cartUrl, cartItem);
      })
    );
  }

  // Get all cart items
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(this.cartUrl);
  }

  // Delete cart item by serial string ID
  deleteCartItem(cartItemId: string): Observable<any> {
    return this.http.delete(`${this.cartUrl}/${cartItemId}`);
  }

  // Update quantity in header
  updateCartCount(): void {
    this.getCartItems().subscribe((items) => {
      const totalQty = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
      this.cartCount.next(totalQty);
    });
  }

  refreshCartCount(): void {
    this.updateCartCount();
  }
}
