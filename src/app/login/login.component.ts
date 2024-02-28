// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  login() {
    
    console.log('Login - Username:', this.username);
    console.log('Login - Password:', this.password);
    
  }

  register() {
    
    console.log('Register - Username:', this.username);
    console.log('Register - Password:', this.password);
    console.log('Register - Confirm Password:', this.confirmPassword);
    
  }
}
