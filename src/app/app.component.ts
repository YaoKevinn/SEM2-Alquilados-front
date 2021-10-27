import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sem2-alquilados-front';
  constructor(private authService: AuthService) {
    const lsToken = localStorage.getItem('alquila2UserToken');
    if (lsToken) {
      this.authService.loginWithSavedToken(lsToken);
    }
  }
}
