import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLoginForm:any;

  constructor(private router:Router ,
    private fb:FormBuilder , private authSer:AuthService){
      this.userLoginForm = this.fb.group({
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(4)]]
      })
    }

// onSubmit(){
//   console.log(this.userLoginForm.value);
// }

 onSubmit(): void {
  if (this.userLoginForm.valid) {
    const { email, password } = this.userLoginForm.value;

    // 🔍 Step 1: Check if email exists
    this.authSer.checkUserByEmail(email).subscribe(users => {
      if (users.length === 0) {
        alert('Email not registered!');
      } else {
        const user = users[0];  // email is unique, so only one user

        // 🔒 Step 2: Check password
        if (user.password === password) {
          alert('Login successful!');
          localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5');  // dummy token
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/home']);
        } else {
          alert('Invalid password!');
        }
      }
    });

  } else {
    this.userLoginForm.markAllAsTouched();
  }
}


}
