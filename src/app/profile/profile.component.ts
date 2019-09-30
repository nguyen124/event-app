import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: FormControl;
  lastName: FormControl;
  profileForm: FormGroup;

  constructor(private authSvc: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    if (this.authSvc.currentUser) {
      this.firstName = new FormControl(this.authSvc.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
      this.lastName = new FormControl(this.authSvc.currentUser.lastName, Validators.required);
    }

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authSvc.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
      this.router.navigate(['events']);
    }
  }

  validateFirstName() {
    if (!!this.firstName) {
      return this.firstName.valid || this.firstName.untouched;
    }
    return !!this.firstName;
  }

  validateLastName() {
    if (!!this.lastName) {
      return this.lastName.valid || this.lastName.untouched;
    }
    return !!this.lastName;
  }
}
