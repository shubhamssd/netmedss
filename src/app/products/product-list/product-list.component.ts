import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public key: any;
  public products: any[] = [];
  public bannerImg: any = '';
  public bannerText: any = '';
  public filteredProducts: any[] = [];


  constructor(
    private prodServ: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartserviceService
  ) {

  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.key = params['keyName'];
      console.log("keyName :", this.key);
      this.getAllProducts(this.key);
    });
  }

  getAllProducts(key: any) {
    // debugger
    this.prodServ.getAllProducts(key).subscribe({
      next: (res: any) => {
        this.products = res.items;
        this.bannerImg = res.banner;
        this.bannerText = res.bannerTxt;
        console.log(res.items);
      },
      error: (error) => {
        console.log('error: ', error);
      }
    })
  }
  addToCart(product: any) {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        alert(`${product.name} added to cart!`);
        this.cartService.updateCartCount();
      },
      error: err => {
        alert(err.message);
      }
    });
  }

  applyFilters(event: any) {
    console.log('Received Filters:', event);
    if (!event.brands || event.brands.length === 0) {
      this.filteredProducts = this.products
      return
    }
    this.filteredProducts = this.products.filter(product => {
      const matchesBrand = !event.brands?.length || event.brands.includes(product.brand);
      return matchesBrand;
    });
  }

  goToDetail(productId: string) {
    this.router.navigate(['/products/product-details', this.key, productId]);
  }

}
