import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { forkJoin, map } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public key: any;
  public products: any[] = [];
  public bannerImg: any = '';
  public categories: any[] = [];
  public sectionBannerImg: any = '';
  public sectionKeys: any[] = [];
  public page: number = 1;      // current page
  public itemsPerPage: number = 12;  // items per page
  public filteredProducts: any[] = [];

  constructor(
    private prodServ: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      // debugger
      this.key = params['keyName'];
      console.log("keyName :", this.key);
      this.getAllProducts(this.key)
      this.getSectionKeys(this.key);
    });
  }

  getSectionKeys(key: any) {
    if (key === "ayush") {
      this.sectionKeys = ['ayurvedic', 'homeopathy', 'unani', 'siddha',]
    } else if (key === "diabetes") {
      this.sectionKeys = ['glucometers', 'sugar-substitutes', 'diabetes-management-supplement', 'diabetes_care_ayurveda',]
    } else if (key === "healthCondition") {
      this.sectionKeys = ["women's_care", 'piles_care', 'liver_care', 'bone_and_joint_care',]
    } else if (key === "personalCare") {
      this.sectionKeys = ['Home&HealthProducts', 'SeniorCareProducts', 'FacePersonalCareProducts', 'BodyCareProducts',]
    } else if (key === "makeUp") {
      this.sectionKeys = ['eyesProducts', 'FaceMakeupProduct', 'LipsProduct', 'NailsProduct',]
    } else if (key === "skinCare") {
      this.sectionKeys = ['skinCareProducts', 'CleansersProduct', 'EyeCare', 'FaceCare',]
    } else if (key === "fragrance") {
      this.sectionKeys = ['MenProducts', 'WomenProducts', 'UnisexProducts']
    }

    if (this.sectionKeys.length != 0) {
      this.getAllCategoryProducts(this.sectionKeys)
    }
  }

  getAllCategoryProducts(sectionKeys: any) {
    try {
      const requests = sectionKeys.map((key: any) => this.prodServ.getAllProducts(key));

      forkJoin(requests).pipe(
        map((sections: any) => {
          return sections.flatMap((section: any) => section.items);
        })
      ).subscribe({
        next: (mergedProducts) => {
          this.products = mergedProducts;
          this.filteredProducts = this.products
          console.log('Merged products (forkJoin):', this.products);
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
    } catch (ex) {
      console.log(ex)
    }

  }

  getAllProducts(key: any) {
    // debugger
    try {
      this.prodServ.getAllProducts(key).subscribe((res: any) => {
        this.products = res.items;
        this.categories = res.categories;
        this.sectionBannerImg = res.bannerImage
        console.log(res.items);
      }, (err: Error) => {
          console.log(err.message);
        })
    } catch (ex) {
      console.log(ex)
    }
  }

  navigateToCategory(categoryName: any) {
    this.router.navigate([`/products/productList/${categoryName}`]);
  }

  goToDetail(product: any) {
    this.router.navigate(['/products/product-details', product.categoryName, product.id]);
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

}
