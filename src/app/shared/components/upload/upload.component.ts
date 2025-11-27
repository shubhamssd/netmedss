import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadedFile: File | null = null;
  filePreviewUrl: string | ArrayBuffer | null = null;
  selectedOrderInfo: string = '';

  testimonials: Testimonial[] = [];
  groupedTestimonials: Testimonial[][] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadTestimonials();
  }

  //  Uploading file
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG, PNG, or PDF files are allowed.');
      return;
    }

    this.uploadedFile = file;

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreviewUrl = reader.result;

        // Store base64 string in sessionStorage for order review page
        sessionStorage.setItem('uploadedPrescription', reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      this.filePreviewUrl = 'assets/pdf-icon.png';

      //  Store a static PDF icon path (you can customize this)
      localStorage.setItem('uploadedPrescription', 'assets/pdf-icon.png');
    }
  }

  onOrderInfoSelect(option: string): void {
    this.selectedOrderInfo = option;
  }

  onContinue(): void {
    if (!this.uploadedFile || !this.selectedOrderInfo) {
      alert('Please upload a prescription and select order info before continuing.');
      return;
    }

    //  Navigate to review page
    this.router.navigate(['/shared/order-review']);
  }

  loadTestimonials(): void {
    this.http.get<Testimonial[]>('http://localhost:3000/testimonials').subscribe(data => {
      this.testimonials = data;
      this.groupedTestimonials = this.chunkArray(this.testimonials, 3);
    });
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
