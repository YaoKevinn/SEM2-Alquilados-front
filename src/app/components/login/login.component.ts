import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userControl: FormControl = new FormControl('', [Validators.required]);
  passwordControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
  }

  checkLoginBtnAvailable() {
    if (
      this.userControl.valid &&
      this.passwordControl.valid
    ) {
      return true;
    }
    return false;
  }

  registerBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(SignUpComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    });
  }

  login() {
    this.dialogRef.close();
    this.authService.isUserLogged = true;
    // LOGIN LOGIC
  }


}
