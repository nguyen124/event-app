import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName = new FormControl(this.authSvc.currentUser.firstName);
  lastName = new FormControl(this.authSvc.currentUser.lastName);
  profileForm: FormGroup;

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    this.authSvc.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }
}
