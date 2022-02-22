import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
