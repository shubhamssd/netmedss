import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.scss']
})
export class LabTestComponent {


  
  healthPackages = [
    {
      title: 'Netmeds Swasthya',
      description:
        'Book Regular Health Check-up Package Netmeds Swasthya, a Basic Screening Preventive Health Check-up Profile having 64 tests includes Diabetic, Lipid, LFT, KFT, Thyroid with Vitamins, & more.',
      originalPrice: 1320,
      discountedPrice: 1100,
      bgClass: 'bg-peach',
      image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/family.png'
    },
    {
      title: 'Netmeds Shield Pack',
      description:
        'Shield Pack helps to protect against a particular danger or risk. It screens the most common diseases like CBC, Urine Routine, Creatinine, Uric Acid, FBS, HbA1c, Lipid profile, Total Bilirubin, SGPT, TSH and Calcium.',
      originalPrice: 1500,
      discountedPrice: 899,
      bgClass: 'bg-lightblue',
      image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Aarogyam-1.3.png'
    },
    {
      title: 'Netmeds Health Pack',
      description:
        'Health check-ups are very useful in the early detection of all types of illnesses and risk factors. Simple to understand and less time consuming, our Netmeds Health Pack comprises 35 parameters of regular blood tests that have been specially designed keeping your health in mind.',
      originalPrice: 799,
      discountedPrice: 439,
      bgClass: 'bg-lemon',
      image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Allergy.png'
    },
    {
      title: 'Netmeds Diabetic Checkup',
      description:
        'Meant for people who want to get regular reports to prevent/check their diabetes levels. It includes 49 tests.',
      originalPrice: 999,
      discountedPrice: 629,
      bgClass: 'bg-cyan',
      image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Diabetes.png'
    },
      {
    title: 'Aarogyam B',
    description:
      'Preventive Basic Health Check-up Package Aarogyam B Consists of 67 blood tests for screening of the health status.',
    originalPrice: 1400,
    discountedPrice: 1050,
    bgClass: 'bg-cyan',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Fever.png'
  },
  {
    title: 'Netmeds Healthy',
    description:
      'This package is specially designed for an elderly male and includes major blood tests for diagnosis, evaluation and monitoring of common chronic illnesses.',
    originalPrice: 999,
    discountedPrice: 849,
    bgClass: 'bg-lemon',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Netmeds-Health-Pack.png'
  },
  {
    title: 'Netmeds Pre-Screening',
    description:
      'Helps to evaluate against common illness, infection, and also determines blood group in cases of anaemia or identity needs.',
    originalPrice: 599,
    discountedPrice: 509,
    bgClass: 'bg-peach',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Antenatal_Care.png'
  },
  {
    title: 'Netmeds Immunity Care',
    description:
      'Health test to check for issues related to hormones, fertility, diabetes, and cardiovascular illnesses.',
    originalPrice: 1499,
    discountedPrice: 1274,
    bgClass: 'bg-lightblue',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/health-packages/pathology/Aarogyam-1.3.png'
  }
  ];
}
