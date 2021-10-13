import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpened: boolean = true;

  constructor(public authService: AuthService,  private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  loginBtnClicked() {
    this.dialog.open(LoginComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
  }

  registerBtnClicked() {
    this.dialog.open(SignUpComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
  }

  signOutBtnClicked() {
    this.menuOpened = false;
    this.authService.isUserLogged = false;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  routeToPage(page: string) {
    this.menuOpened = false;
      this.router.navigate([page]);
  }

}
