import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllMedicineComponent } from './components/Medicine/all-medicine/all-medicine.component';
import { BuyAgainComponent } from './components/Medicine/buy-again/buy-again.component';
import { OrderOnlineComponent } from './components/Medicine/order-online/order-online.component';
import { AyushComponent } from './components/Wellness/ayush/ayush.component';
import { DiabetesSupportComponent } from './components/Wellness/diabetes-support/diabetes-support.component';
import { HealthConditionComponent } from './components/Wellness/health-condition/health-condition.component';
import { PersonalCareComponent } from './components/Wellness/personal-care/personal-care.component';
import { FragranceComponent } from './components/Beauty/fragrance/fragrance.component';
import { MakeUpComponent } from './components/Beauty/make-up/make-up.component';
import { SkinCareComponent } from './components/Beauty/skin-care/skin-care.component';
import { HealthLibraryComponent } from './components/Health-Center/health-library/health-library.component';
import { CancerComponent } from './components/Health-Center/cancer/cancer.component';
import { CoronaAwarenessComponent } from './components/Health-Center/corona-awareness/corona-awareness.component';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { EyesComponent } from './components/Beauty/make-up/eyes/eyes.component';
import { LoginComponent } from '../auth/login/login.component';
import { SupplementsComponent } from './components/Health-Center/cancer/supplements-for-cancer/supplements.component';
import { AcidsComponent } from './components/Health-Center/cancer/supplements-for-cancer/amino-acids/acids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './components/Health-Center/health-library/blogs/blogs.component';
import { BeautyComponent } from './components/Beauty/beauty/beauty.component';
import { UploadComponent } from './components/upload/upload.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomPipe } from './pipes/custom.pipe';
import { WellnessComponent } from './components/Wellness/wellness/wellness.component';
import { SwiperModule } from 'swiper/angular';
import { PrescriptionMedicinesComponent } from './components/Medicine/all-medicine/prescription-medicines/prescription-medicines.component';
import { LabTestComponent } from './components/lab-test/lab-test.component';
import { OffersComponent } from './components/offers/offers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';


const routes: Routes = [
  { path: 'BuyAgain', component: BuyAgainComponent },
  { path: 'OrderOnline', component: OrderOnlineComponent },
  { path: 'cancer', component: CancerComponent },
  { path: 'supplements', component: SupplementsComponent },
  { path: 'amino-acids', component: AcidsComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'category/:keyName', component: CategoryComponent },
  { path: 'HealthLibrary', component: HealthLibraryComponent },
  { path: 'wellness', component: WellnessComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'allmedicine', component: AllMedicineComponent },
  { path: 'labTest', component: LabTestComponent },
  {
    path: 'prescriptionMedicines/:category',
    component: PrescriptionMedicinesComponent,
  },
  { path: 'upload', component: UploadComponent },
  { path: 'order-review', component: OrderReviewComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'corona-awareness', component: CoronaAwarenessComponent },
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AllMedicineComponent,
    BuyAgainComponent,
    OrderOnlineComponent,
    AyushComponent,
    DiabetesSupportComponent,
    HealthConditionComponent,
    PersonalCareComponent,
    FragranceComponent,
    MakeUpComponent,
    SkinCareComponent,
    HealthLibraryComponent,
    CancerComponent,
    CoronaAwarenessComponent,
    SideBarComponent,
    EyesComponent,
    SupplementsComponent,
    AcidsComponent,
    BlogsComponent,
    BeautyComponent,
    UploadComponent,
    OrderReviewComponent,
    WellnessComponent,
    CustomPipe,
    CategoryComponent,
    PrescriptionMedicinesComponent,
    OffersComponent,
    LabTestComponent,
    SupplementsComponent,
    AcidsComponent,
    CoronaAwarenessComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    NgxPaginationModule,
    MatListModule,
    MatExpansionModule,
    // MatIconModule,
    // MatButtonModule,
    // MatRadioModule,
    // MatSliderModule,
    // SliderModule,
    // CarouselModule
    // CustomPipe
  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    OrderReviewComponent,
    ReactiveFormsModule,
    FormsModule,
    CustomPipe,
    MatListModule,
    SideBarComponent,
  ],
})
export class SharedModule {}
