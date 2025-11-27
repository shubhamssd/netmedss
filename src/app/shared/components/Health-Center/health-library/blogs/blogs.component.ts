import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnChanges {

    @Input() catkey: string = '';
    public products: any = {};
    public catdata: any[] = [];

    constructor(private service1: ProductService) {

    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['catkey'] && changes['catkey'].currentValue) {
            this.service1.getAllProducts("HealthLibrary").subscribe((res: any) => {
                this.products = res;
                console.log('All Products:', this.products);
                this.getdata();
            });
        }
    }

    getdata() {
        if (this.catkey === 'all') {
            // Merge all arrays from categories
            this.catdata = Object.values(this.products).flat();
        } else if (this.products[this.catkey]) {
            this.catdata = this.products[this.catkey];
        } else {
            console.warn(`Category key "${this.catkey}" not found in products.`);
            this.catdata = [];
        }
    }

}
