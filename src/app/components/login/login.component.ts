import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private notification: NzNotificationService) { }

  login() {
    this.errorMessage = '';
    if (this.username === 'cmed@cmed.com' && this.password === 'cmed') {
      this.authService.setAuthenticated(true);
      this.router.navigate(['/home']);
    } else {
      this.showErrorMessage();
    }
  }
  private showErrorMessage() {
    this.notification.remove();
    this.notification.error(
      'Invalid Credentials',
      'The username or password is incorrect. Please try again.'
    );
  }
}
