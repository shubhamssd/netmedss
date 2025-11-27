import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';
import { ProductService } from 'src/app/core/services/product.service';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css']
})
export class WellnessComponent implements OnInit {
  carouselImages: any[] = [];
  ayurcategory: any[] = ["ayurvedic", "unani", "homeopathy", "siddha"];
  diabetescategory: any[] = ["glucometers", "sugar-substitutes", "diabetes-management-supplement", "diabetes_care_ayurveda"];
  healthcategory: any[] = ["women's_care", "piles_care", "liver_care", "bone_and_joint_care"];
  personalscategory: any[] = ["Home&HealthProducts", "SeniorCareProducts", "FacePersonalCareProducts", "BodyCareProducts"];
  ayurproducts: any;
  diabetesproducts: any;
  healthproducts: any;
  personalproducts: any;

  breakpoints = {
    120: { slidesPerView: 5 },
    60: { slidesPerView: 4 },
    30: { slidesPerView: 2 }
  };

  popularcat : any [] = [
    'assets/images/Wellness/ayush.png',
    'assets/images/Wellness/fitness.png',
    'assets/images/Wellness/devices_1.jpeg',
    'assets/images/Wellness/personal_care.png',
    'assets/images/Wellness/sexual_wellness.png'
  ];

  healthConcerns : any [] = [
    { title: "Bone And Joint Pain", img : "assets/images/Wellness/bone-and-joint-pain.jpg", routepath : "" },
    { title: "Cold And Fever", img: "assets/images/Wellness/cold-and-fever.jpg", routepath: "" },
    { title: "Liver Care", img: "assets/images/Wellness/liver-care.jpg", routepath: "liver_care" },
    { title: "Women's Care", img: "assets/images/Wellness/women-s-care.jpg", routepath: "women's_care" },
    { title: "Weight Care", img: "assets/images/Wellness/weight-care.jpg", routepath: "" },
    { title: "Stomach Care", img: "assets/images/Wellness/stomach-care.jpg", routepath: "" },
    { title: "Diabetic Care", img: "assets/images/Wellness/diabetic-care.jpg", routepath: "diabetes_care_ayurveda" },
    { title: "Lung Care", img: "assets/images/Wellness/lung-care.jpg", routepath: "" },
    { title: "Piles Care", img: "assets/images/Wellness/piles-care.jpg", routepath: "piles_care" },
    { title: "De-Addiction", img: "assets/images/Wellness/de-addiction.jpg", routepath: "" },
    { title: "Mental Care", img: "assets/images/Wellness/mental-care.jpg", routepath: "" },
  ]

  constructor(private serv : ProductService, private cartService : CartserviceService) {}

  ngOnInit() {
    this.serv.getAllProducts("wellness").subscribe((res:any)=> {
      this.carouselImages = res;
    })

    this.getproductsdata(this.ayurcategory, 'ayurproducts');
    this.getproductsdata(this.diabetescategory, 'diabetesproducts');
    this.getproductsdata(this.healthcategory, 'healthproducts');
    this.getproductsdata(this.personalscategory, 'personalproducts');
  }

  shuffleAndLimit(array: any[], limit: number): any[] {
    return array
      .map(item => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item)
      .slice(0, limit);
  }

  getproductsdata(keys: any[], target: any) {
    this.serv.getmergedata(keys).subscribe((res: any) => {
      const allItems = res.reduce((acc: any, obj: any) => acc.concat(obj.items), []);
      const limitedItems = this.shuffleAndLimit(allItems, 12);
      (this as any)[target] = limitedItems;
    });
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
}
