import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/core/guards/auth.guard';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, CanComponentDeactivate {
  user: any;

  editMode = false;

  profileForm!: FormGroup;
  isFormDirty:boolean = false;

constructor(private fb: FormBuilder, private autSer: AuthService, private router: Router) {}

  ngOnInit(): void {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.initForm();
    } else {
      this.router.navigate(['/login']);
    }
  }
  onInputChange() {
    this.isFormDirty = true;
  }
  canDeactivate() {
    return this.isFormDirty
      ? confirm("You haven't saved your data. Do you really want to leave the page?")
      : true;
  }

initForm(): void {
  this.profileForm = this.fb.group({
    fullName: [this.user.fullName, Validators.required],
    email: [this.user.email, [Validators.required, Validators.email]],
    address: [this.user.address, Validators.required],
    gender: [this.user.gender, Validators.required],  
    phone: [
      this.user.phone,
      [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
    ]
  });
}


  enableEdit(): void {
    this.editMode = true;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.initForm(); // reset values
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      const updatedUser = { ...this.user, ...this.profileForm.value };
      this.autSer.updateUser(updatedUser.id, updatedUser).subscribe(res => {
        alert('Profile updated successfully!');
        this.user = res;
        sessionStorage.setItem('user', JSON.stringify(res));
        this.editMode = false;
      });
    }
  }
}