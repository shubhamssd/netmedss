import { Component } from '@angular/core';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.component.html',
  styleUrls: ['./cancer.component.css']
})
export class CancerComponent {
  cancerInfo = [
    {
      title: 'Breast Cancer',
      image: 'assets/images/cancer/istockphoto-897593850-612x612.jpg',
      description: 'Learn about symptoms, early detection, and treatment options for breast cancer.'
    },
    {
      title: 'Lung Cancer',
      image: 'assets/images/cancer/abstract-silhouette-lungs-against-background-600nw-1755422126.jpg',
      description: 'Understand the causes, stages, and therapies for lung cancer.'
    },
    {
      title: 'Skin Cancer',
      image: 'assets/images/cancer/New-Project-45-767x295@2x.jpg',
      description: 'Skin cancer types, signs, and prevention methods you need to know.'
    }
  ];
}
