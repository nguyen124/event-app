import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { usersRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(usersRoutes)
    ],
    declarations: [ProfileComponent, LoginComponent],
    providers: []
})
export class UserModule {

}