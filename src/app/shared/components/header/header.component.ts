import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public imgsize1: any = 24;
    public imgsize2: any = 42;
    cartCount: number = 0;

    public dropdownstyle = "color: #32aeb1;";
    // cart
    constructor(private router: Router, private cartService: CartserviceService, private authService: AuthService) { }
    userName: string = '';
    ngOnInit(): void {
        const user = sessionStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            this.userName = parsedUser.fullName;
        }
        this.cartService.cartCount$.subscribe((count) => {
            this.cartCount = count;
        });
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
        location.reload(); // OR this.router.navigate(['/login']);
    }

    // Wellness component routes
    public ayushroutes: any = [
        { routepath: "ayurvedic", category: "Ayurvedic" },
        { routepath: "unani", category: "Unani" },
        { routepath: "homeopathy", category: "Homeopathy" },
        { routepath: "siddha", category: "Siddha" }
    ];

    public covidroutes: any = [
        { routepath: "", category: "Oxygen Can" },
        { routepath: "", category: "Personal & Home Essentials" },
        { routepath: "", category: "Business Essentials" },
        { routepath: "", category: "Mask, Gloves & Protective Equipment" },
        { routepath: "", category: "Travel Essentials" },
    ];

    public devicesroutes: any = [
        { routepath: "", category: "Breathe Easy" },
        { routepath: "", category: "Surgical Accessories" },
        { routepath: "", category: "Measurements" },
        { routepath: "", category: "Orthopaedics" }
    ];

    public diabetesroutes: any = [
        { routepath: "glucometers", category: "Glucometers" },
        { routepath: "sugar-substitutes", category: "Sugar Substitutes" },
        { routepath: "diabetes-management-supplement", category: "Diabetes Management Supplements" },
        { routepath: "diabetes_care_ayurveda", category: "Diabetes Care Ayurveda" },
        { routepath: "", category: "Lancets & Test Strips" }
    ];

    public fitnessroutes: any = [
        { routepath: "", category: "Weight Management" },
        { routepath: "", category: "Sports Supplements" },
        { routepath: "", category: "Smoking Cessation Support" },
        { routepath: "", category: "Vitamins And Supplements" },
        { routepath: "", category: "Family Nutrition" },
        { routepath: "", category: "Health Food And Drinks" },
        { routepath: "", category: "Ayurvedic Supplements" }
    ];

    public healthroutes: any = [
        { routepath: "women's_care", category: "Women's Care" },
        { routepath: "bone_and_joint_care", category: "Bone And Joint Pain" },
        { routepath: "liver_care", category: "Liver Care" },
        { routepath: "piles_care", category: "Piles Care" },
        { routepath: "", category: "Weight Care (EW)" },
        { routepath: "", category: "Stomach Care" },
        { routepath: "", category: "Mental Care" },
        { routepath: "", category: "De-Addiction" },
        { routepath: "", category: "Diabetic Care" },
        { routepath: "", category: "Cardiac Care" },
        { routepath: "", category: "Cold And Fever" },
        { routepath: "", category: "Immunity Care" },
        { routepath: "", category: "Lung Care" }
    ];

    public mombabyroutes: any = [
        { routepath: "", category: "Baby Care" },
        { routepath: "", category: "Feminine Hygiene" },
        { routepath: "", category: "Maternity Care" },
        { routepath: "", category: "Baby Bath Time" },
        { routepath: "", category: "Maternity Accessories" }
    ];


    public personalcareroutes: any = [
        { routepath: "Home&HealthProducts", category: "Home & Health" },
        { routepath: "SeniorCareProducts", category: "Senior Care" },
        { routepath: "FacePersonalCareProducts", category: "Face Personal Care" },
        { routepath: "", category: "Hands & Feet" },
        { routepath: "", category: "Oral Care" },
        { routepath: "", category: "Bath & Shower" },
        { routepath: "BodyCareProducts", category: "Body Care" },
        { routepath: "", category: "Personal Care Tools & Accessories" },
        { routepath: "", category: "Lip Care" },
        { routepath: "", category: "Bathing Accessories" }
    ];

    public sexualwellnessroutes: any = [
        { routepath: "", category: "Condoms" },
        { routepath: "", category: "Massagers/Vibrators" },
        { routepath: "", category: "Sexual Health Supplements" },
        { routepath: "", category: "Lubricants" },
        { routepath: "", category: "Sprays/Gels" }
    ];

    public surgicalroutes: any = [
        { routepath: "", category: "Respiratory Supplies" },
        { routepath: "", category: "Surgical Consumables" },
        { routepath: "", category: "Iv Infusion" },
        { routepath: "", category: "Surgical Instrument" },
        { routepath: "", category: "Dressing" },
        { routepath: "", category: "Gi Care" },
        { routepath: "", category: "Urinary Care" },
        { routepath: "", category: "Wound Treatment" }
    ];

    // Beauty component routes
    public hairroutes: any = [
        { routepath: "", category: "Hair Care" },
        { routepath: "", category: "Hair Color" },
        { routepath: "", category: "Hair Styling" },
        { routepath: "", category: "Hair Tools & Accessories" },
        { routepath: "", category: "Scalp Treatments" },
        { routepath: "", category: "Shop By Hair Type" }
    ];

    public makeuproutes: any = [
        { routepath: "eyesProducts", category: "Eyes" },
        { routepath: "FaceMakeupProduct", category: "Face Makeup" },
        { routepath: "LipsProduct", category: "Lips" },
        { routepath: "NailsProduct", category: "Nails" },
        { routepath: "", category: "Make-Up Tools & Brushes" },

    ];

    public momnbabyroutes: any = [
        { routepath: "", category: "Baby Bath Time" },
        { routepath: "", category: "Baby Care" },
        { routepath: "", category: "Feminine Hygiene" },
        { routepath: "", category: "Maternity Accessories" },
        { routepath: "", category: "Maternity Care" },
        { routepath: "", category: "Toys & Games" }
    ];

    public skincareroutes: any = [
        { routepath: "skinCareProducts", category: "Aromatherapy" },
        { routepath: "CleansersProduct", category: "Cleansers" },
        { routepath: "EyeCare", category: "Eye Care" },
        { routepath: "FaceCare", category: "Face Skin Care" },
        { routepath: "", category: "Masks" },
        { routepath: "", category: "Moisturizers" },
        { routepath: "", category: "Sunscreen" },
        { routepath: "", category: "Toners & Serums" }
    ];

    // second navbar routes
    public secondnav: any = [
        { routepath: "", category: "Covid Essentials" },
        { routepath: "", category: "Diabetes" },
        { routepath: "", category: "Cardiac Care" },
        { routepath: "", category: "Stomach Care" },
        { routepath: "ayurvedic", category: "Ayurvedic" },
        { routepath: "homeopathy", category: "Homeopathy" },
        { routepath: "", category: "Fitness" },
        { routepath: "", category: "Mom & Baby" },
        { routepath: "", category: "Devices" },
        { routepath: "", category: "Surgicals" },
        { routepath: "", category: "Sexual Wellness" },
        { routepath: "", category: "Treatments" },
        { routepath: "", category: "Skin Care" },
        { routepath: "", category: "Personal Care" }
    ]
}
