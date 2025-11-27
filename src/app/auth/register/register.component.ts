import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  public registerForm:any;

  constructor(private fb: FormBuilder , private authSer:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }


  onSubmit(): void {
  if (this.registerForm.valid) {
    const formData = this.registerForm.value;

    // 🔍 Step 1: First check if email already exists
    this.authSer.checkUserByEmail(formData.email).subscribe(users => {
      if (users.length > 0) {
        // Email already exists
        alert('Email already exists , Plz Enter New Email !');
      } else {
        // ✅ Proceed with registration
        this.authSer.addUser(formData).subscribe({
          next: () => {
            alert('User registered successfully!');
            this.registerForm.reset();
            this.router.navigate(['auth/login']);
          },
          error: (err) => {
            alert('Error while registering user!');
            console.error(err);
          }
        });
      }
    });
  } else {
    this.registerForm.markAllAsTouched();
  }
}


}
