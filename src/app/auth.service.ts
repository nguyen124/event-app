import { Injectable } from '@angular/core';
import { UserManager, User, WebStorageStateStore } from 'oidc-client';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userManager: UserManager;
  private _user: User;
  private isAuthenticated: boolean = false;

  constructor() {
    var config = {
      authority: 'https://accounts.google.com/',
      client_id: '255336538802-2o65hm0fv0ag6ds098lpa8118s9kdo43.apps.googleusercontent.com',
      redirect_uri: 'http://localhost:4200/assets/oidc-login-redirect.html',
      scope: 'openid email profile',
      reponse_type: 'id_token token',
      post_logout_redirect_uri: 'http://localhost:4200/',
      userStore: new WebStorageStateStore({ store: window.localStorage })
      // metadata: {
      //   authorization_endpoint: 'https://accounts.google.com/login/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin',
      //   issuer: 'https://accounts.google.com/',
      //   jwks_uri: 'https://www.googleapis.com/service_accounts/v1/metadata/x509/securetoken@system.gserviceaccount.com',
      //   end_session_endpoint: 'https://accounts.google.com/v2/logout?returnTo=http://localhost:4200/'
      // }
    }

    this._userManager = new UserManager(config);

    from(this._userManager.getUser()).pipe(map(user => this.extractData(user))).subscribe(res => {
    });
  }

  private extractData(user: User) {
    this._user = user;
    this.isAuthenticated = user && user.id_token && !user.expired;
  }

  loginUser() {
    this._userManager.signinRedirect();
  }

  logout(): Promise<any> {
    return this._userManager.signoutRedirect();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getAccessToken(): string {
    return this._user ? this._user.access_token : '';
  }

  getIdToken(): string {
    return this._user ? this._user.id_token : '';
  }
}
