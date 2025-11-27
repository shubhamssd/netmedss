import { Component } from '@angular/core';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent {
public sections = [
  {
    title: 'Shop by Category',
    items: [
      { path: '/FaceCare', img: '/assets/Beauty/face_wash_cleansers.png', alt: 'Face Wash' },
      { path: '/body-care', img: '/assets/Beauty/body_care_4.jpeg', alt: 'Body Care' },
      { path: '/nail-care', img: '/assets/Beauty/nail_care.png', alt: 'Nail Care' },
      { path: '/skin-care', img: '/assets/Beauty/skin_care.png', alt: 'Skin Care' },
      { path: '/hair-care', img: '/assets/Beauty/hair_care.png', alt: 'Hair Care' }
    ]
  },
  {
    title: 'Skin care Essentials',
    items: [
      { path: '/FaceCare', img: '/assets/Beauty/face_wash_cleansers.png', alt: 'Face Wash' },
      { path: '/body-care', img: '/assets/Beauty/facial_kits.png', alt: 'Facial Kits' },
      { path: '/nail-care', img: '/assets/Beauty/face_skin_care.png', alt: 'Face Skin Care' },
      { path: '/skin-care', img: '/assets/Beauty/make-up.png', alt: 'Make-up' },
      { path: '/hair-care', img: '/assets/Beauty/day_cream.png', alt: 'Day Cream' }
    ]
  },
  {
    title: 'Hair care Essentials',
    items: [
      { path: '/FaceCare', img: '/assets/Beauty/hair_oils.png', alt: 'hairoil' },
      { path: '/body-care', img: '/assets/Beauty/hair_treatment.png', alt: 'hairtreatment' },
      { path: '/nail-care', img: '/assets/Beauty/hair_gels_waxes.png', alt: 'New 3' },
      { path: '/skin-care', img: '/assets/Beauty/hair_perms_texturizers.png', alt: 'New 4' },
      { path: '/hair-care', img: '/assets/Beauty/hair_sprays_mists.png', alt: 'New 5' }
    ]
  },
   {
    title: 'Men’s Grooming',
    items: [
      { path: '/FaceCare', img: '/assets/Beauty/shaving.png', alt: 'hairoil' },
      { path: '/body-care', img: '/assets/Beauty/razors_cartridges.png', alt: 'hairtreatment' },
      { path: '/nail-care', img: '/assets/Beauty/hair_gels_waxes.png', alt: 'New 3' },
      { path: '/skin-care', img: '/assets/Beauty/beard_oil.png', alt: 'New 4' },
      { path: '/hair-care', img: '/assets/Beauty/beard_wash.png', alt: 'New 5' }
    ]
  }
];
 latestBeauty = [
    {
      id: 1,
      title: "Beeswax for Hair: Benefits, How To Use It And Precaution",
      image: "/assets/Beauty/1753857606_Header-Banner_480x180.jpg"
    },
    {
      id: 2,
      title: "Kewra Water: Brilliant Beauty Benefits Of This Flower",
      image: "/assets/Beauty/1598857354_Kewra_features_480.jpg"
    },
    {
      id: 3,
      title: "Do Regular Morning Habits Fuel Your Day And Keep You Young?",
      image: "/assets/Beauty/1753690567_Morning-routine_480x180.jpg"
    },
    {
      id: 4,
      title: "Marine Skincare: 5 Must-Have Aquatic Ingredients",
      image: "/assets/Beauty/1718165385_Header-Banner_480x180.jpg"
    }
  ];
 faqList = [
    {
      question: '1. What are the five main categories of cosmetic products?',
      answer: 'The main categories of cosmetic products are cosmetics, sun care, skin care, hair care, nail care and body care.'
    },
    {
      question: '2. What are the most popular beauty products?',
      answer: `Each woman has individual preferences and customised shopping habits. Herbal & natural products are very popular. Many women with sensitive skin avoid chemicals and prefer natural and herbal beauty items. Brand values also influence popularity, with global and Indian brands being favoured for reliability and safety.`
    },
    {
      question: '3. What are the must-have beauty products for women?',
      answer: `Experts suggest every woman should have a sunscreen, a daily moisturiser, and products for both morning and night routines. Other must-haves include foundation, quality shampoo & conditioner, body oil, scrub, nail polish, and a neutral eyeshadow palette.`
    },
    {
      question: '4. How many beauty products should a woman own?',
      answer: `On average, an Indian woman uses 8–10 beauty products such as cosmetics, cleansers, conditioners, henna, hair dyes, fragrances, skin & nail care items, and scented lotions.`
    }
  ];
}
