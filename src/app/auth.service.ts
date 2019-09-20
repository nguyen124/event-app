import { Injectable } from '@angular/core';
import { IUser } from './shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'hai',
      firstName: 'Hai',
      lastName: 'Nguyen'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
