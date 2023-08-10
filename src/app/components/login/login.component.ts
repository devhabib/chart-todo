import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.errorMessage = '';
    if (this.username === 'cmedHealth' && this.password === 'cmed') {
      setTimeout(() => {
        this.authService.setAuthenticated(true);
        this.router.navigate(['/home']);
      }, 1000);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
