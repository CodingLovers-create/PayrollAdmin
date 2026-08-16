import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '../../../core/config/app.config';

@Component({
  selector: 'app-login',
  imports: [
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

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Email Login:", this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }
  }
}
