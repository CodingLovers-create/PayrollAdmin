import { Component } from '@angular/core';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { APP_CONFIG } from '../../../core/config/app.config';

@Component({
  selector: 'app-login',
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  appName = APP_CONFIG.name;
  appSubName = APP_CONFIG.subName;

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
