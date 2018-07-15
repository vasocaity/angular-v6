import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ChildActivationStart } from '@angular/router';
// เอาไว้สร้างฟอร์มแบบreactive

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;
  loginError: '';
  constructor(private fb: FormBuilder, private service: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.logInForm = this.fb.group({
      login: '',
      password: ''
    });
    this.logInForm.markAsPristine();
    this.logInForm.markAsTouched();
  }

  login() {
    this.service.authen(this.logInForm.value).subscribe(data => {
      this.loginError = '';
      this.service.setToken(data.token);
      this.router.navigate(['/admin']); // login succes
    },
      error => this.loginError = error.error);
  }
}
