import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService:CartserviceService
  ) {}

  async ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type')!;
    const id = this.route.snapshot.paramMap.get('id')!;
    try {
      this.product = await this.productService.getProductById(type, id)
      console.log(this.product);
    } catch (error) {
      console.error('Error:', error);
    }
  
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

  onThumbnailClick(imgUrl: string) {
    this.selectedImage = imgUrl;
  }
}
