import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-corona-awareness',
  templateUrl: './corona-awareness.component.html',
  styleUrls: ['./corona-awareness.component.css']
})
export class CoronaAwarenessComponent implements OnInit {
  coronaData: any = null;
  selectedTab = 'all'; 

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts('coronaAwareness').subscribe({
      next: (data) => {
        this.coronaData = data;
      },
      error: (err) => {
        console.error('Error fetching corona data:', err);
      }
    });
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + '?rel=0&autoplay=0');
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
