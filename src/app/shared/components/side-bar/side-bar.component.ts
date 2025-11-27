import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  sidebarItems = [
    {
      title: 'Ayush',
      children: [
        { label: 'Ayurvedic', route: 'ayurvedic' },
        { label: 'Homeopathy', route: 'homeopathy' },
        { label: 'Unani', route: 'unani' },
        { label: 'Siddha', route: 'siddha' }
      ]
    },
    {
      title: 'Diabetes Support',
      children: [
        { label: 'Glucometers', route: 'glucometers' },
        { label: 'Sugar Substitutes', route: 'sugar-substitutes' },
        { label: 'Diabetes Management Supplements', route: 'diabetes-management-supplement' },
        { label: 'Diabetes Care Ayurveda', route: 'diabetes_care_ayurveda' },
      ]
    },
    {
      title: 'Health Conditions',
      children: [
        { label: "Women's Care", route: "women's_care" },
        { label: 'Bone And Joint Pain', route: 'bone_and_joint_care' },
        { label: 'Liver Care', route: 'liver_care' },
        { label: 'Piles Care', route: 'piles_care' },
      ]
    },
    {
      title: 'Personal Care',
      children: [
        { label: 'Home & Health', route: 'Home&HealthProducts' },
        { label: 'Senior Care', route: 'SeniorCareProducts' },
        { label: 'Face Personal Care', route: 'FacePersonalCareProducts' },
        { label: 'Body Care', route: 'BodyCareProducts' },
      ]
    },
    {
      title: 'Fragrances',
      children: [
        { label: 'Men', route: 'MenProducts' },
        { label: 'Unisex', route: 'UnisexProducts' },
        { label: 'Women', route: 'WomenProducts' },
      ]
    },
    {
      title: 'Make-Up',
      children: [
        { label: 'Eyes', route: 'eyesProducts' },
        { label: 'Face Makeup', route: 'FaceMakeupProduct' },
        { label: 'Lips', route: 'LipsProduct' },
        { label: 'Nails', route: 'NailsProduct' },
      ]
    },
    {
      title: 'Skin Care',
      children: [
        { label: 'Aromatherapy', route: 'skinCareProducts' },
        { label: 'Cleansers', route: 'CleansersProduct' },
        { label: 'Eye Care', route: 'EyeCare' },
        { label: 'Face Skin Care', route: 'FaceCare' },
      ]
    }
  ];


  brandSearch: string = '';
  mfgSearch: string = '';
  selectedBrands: string[] = [];
  
  discountRange: number[] = [10, 60];

  @Output() filtersChanged = new EventEmitter<any>();
  // @Output() discountChanged = new EventEmitter<{ min: number; max: number }>();





  brands = [
    { name: 'Himalaya', count: 12 },
    { name: 'Pankajakasthuri', count: 9 },
    { name: 'Lama', count: 7 },
    { name: 'Planet', count: 1 },
    { name: 'Baidhyanath', count: 1 },
    { name: 'Aimil', count: 1 },

  ];
  manufacturer = [
    { name: 'Himalaya', count: 12 },
    { name: 'Pankajakasthuri', count: 9 },
    { name: 'Lama', count: 7 },
    { name: 'Planet', count: 1 },
    { name: 'Baidhyanath', count: 1 },
    { name: 'Aimil', count: 1 },

  ];

  toggleBrandSelection(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }

    this.emitFilters();
  }

  emitFilters() {
    this.filtersChanged.emit({
      brands: this.selectedBrands
    });
  }

}
