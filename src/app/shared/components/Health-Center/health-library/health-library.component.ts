import { Component } from '@angular/core';

@Component({
    selector: 'app-health-library',
    templateUrl: './health-library.component.html',
    styleUrls: ['./health-library.component.css']
})
export class HealthLibraryComponent {
  public category: any;
  public allCatagory: any = [
    'Ailments (1263)',
    'Ayurvedic & Home Remedies (982)',
    'Beauty & Fitness (1087)',
    'Blogs in Hindi (42)',
    'Blogs in Tamil (36)',
    'Breast Cancer (2)',
    'Cancer (80)',
    'Cervical Cancer (2)',
    'Disease & Disorder (1408)',
    'Eye care (24)',
    'Food (1432)',
    'Food & Nutrition (1494)',
    'Hair care (60)',
    'Health Day (410)',
    'Health News (767)',
    'In Season (1068)',
    'Mental Health (23)',
    'Mind & Body (33)',
    'Personal Care (1139)',
    'Pet Care (120)',
    'Sexual Wellness (14)',
    'Specialist speak (174)',
    'Videos (1369)',
    'Wellness (1489)'
  ];

  public allyears: any = [
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016"
  ];

  allData(key: any) {
    this.category = key;
    console.log(this.category);
  }
}
