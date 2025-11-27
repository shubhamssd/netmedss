import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-prescription-medicines',
  templateUrl: './prescription-medicines.component.html',
  styleUrls: ['./prescription-medicines.component.css']
})
export class PrescriptionMedicinesComponent implements OnInit {

  public key:any;
  public allProductInfo:any;
  public allMedicineInfo:any;
  // public counterAllMed:any=1;
  public allCatagoryData:any;

  // this.allMedicineInfo = this.allProductInfo["ADHD"];

  public buttonHeading:any = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','ALL'];

constructor(private service1 : ProductService, private actRoute:ActivatedRoute, private router: Router){


}

 ngOnInit() {
    //  this.actRoute.params.subscribe(params => {
    //   this.key = params['category'];
    //   console.log("category :", this.key);
    //   this.getAllProducts();
    // });



    //  this.key = this.actRoute.snapshot.paramMap.get('category')!;
    //  console.log(this.key);
    // this.service1.getMedicineProducts().subscribe(data => {
    //   this.allProductInfo = data;
    //   console.log(this.allProductInfo);
      
    // });
    

    this.key = this.actRoute.snapshot.paramMap.get('category');
    console.log("Category param:", this.key);

    this.service1.getMedicineProducts().subscribe(data => {
      this.allProductInfo = data;
      if (this.key) {
        this.allMedicineInfo = this.allProductInfo.filter((item:any) => item.category === this.key);
      } else {
        this.allMedicineInfo = this.allProductInfo;
      }
      console.log("Filtered Medicines:", this.allMedicineInfo);
    });

    this.service1.getAllProducts(this.key).subscribe((res:any)=>{
        this.allCatagoryData=res.items;
        console.log(res.items);

    })
  }

  //  [routerLink]="['/products/product-details/'

  goToDetail(varient:any) {

  const product = this.allCatagoryData.find((item: any) => item.name === varient);

  if (product) {
    const id = product.id;
    this.router.navigate(['/products/product-details', this.key, id]);
  } else {
    console.error('Product not found with name:', varient);
  }

  }


}


