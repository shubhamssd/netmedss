import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';

@Component({
  selector: 'app-acids',
  templateUrl: './acids.component.html',
  styleUrls: ['./acids.component.css'],
})
export class AcidsComponent implements OnInit {
  public key: string = 'aminoAcidProducts';
  public products: any[] = [];
  public bannerImg: any = '';
  public bannerText: any = '';
  public filteredProducts: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts(this.key);
  }

  getAllProducts(key: string): void {
    this.productService.getAllProducts(key).subscribe({
      next: (res: any) => {
        this.products = res.items || [];
        this.bannerImg = res.banner;
        this.bannerText = res.bannerTxt;
        console.log('Products loaded:', res.items);
      },
      error: (error) => {
        console.error('Product fetch error:', error);
      },
    });
  }

  applyFilters(event: any) {
    console.log('Received Filters:', event);
    if (!event.brands || event.brands.length === 0) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter((product) => {
      const matchesBrand =
        !event.brands?.length || event.brands.includes(product.brand);
      return matchesBrand;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        alert(`${product.name} added to cart!`);
        this.cartService.updateCartCount();
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

  goToDetail(productId: string): void {
    this.router.navigate(['/products/product-details', this.key, productId]);
  }
}
