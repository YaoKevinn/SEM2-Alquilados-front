import { AuthService } from './../../services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  step: number = 1;

  userControl: FormControl = new FormControl('', [Validators.required]);
  passwordControl: FormControl = new FormControl('', [Validators.required]);

  nameControl: FormControl = new FormControl('', [Validators.required]);
  firstNameControl: FormControl = new FormControl('', [Validators.required]);
  birthdayControl: FormControl = new FormControl('', [Validators.required]);
  telephoneControl: FormControl = new FormControl('', [Validators.required]);


  constructor(public dialogRef: MatDialogRef<SignUpComponent>, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
  }

  checkSignUpBtnAvailable() {
    if (
      this.userControl.valid &&
      this.passwordControl.valid
    ) {
      return true;
    }
    return false;
  }

  checkStepTwoBtnAvailable() {
    if (
      this.nameControl.valid &&
      this.firstNameControl.valid &&
      this.birthdayControl.valid &&
      this.telephoneControl.valid
    ) {
      return true;
    }
    return false;
  }

  goToLogin() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
  }

  toStep(stepNumber: number) {
    this.step = stepNumber;
    if (stepNumber === 3) {
      this.authService.isUserLogged = true;
    }
  }
}
