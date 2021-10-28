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
  companyControl: FormControl = new FormControl(false, [Validators.required]);


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
    if (stepNumber === 3) {
      // console.log(this.userControl.value);
      // console.log(this.passwordControl.value);
      // console.log(this.nameControl.value);
      // console.log(this.firstNameControl.value);
      // console.log(this.birthdayControl.value.slice(0, 2) + '/' + this.birthdayControl.value.slice(2, 4) + '/' + this.birthdayControl.value.slice(4, 8));
      // console.log(this.telephoneControl.value);
      // console.log(this.companyControl.value);
      const birthdayString = this.birthdayControl.value.replaceAll('-', '/');
      this.authService.register(
        this.nameControl.value,
        this.firstNameControl.value,
        this.userControl.value,
        this.passwordControl.value,
        birthdayString,
        this.telephoneControl.value,
        this.companyControl.value
      ).subscribe((user) => {
        this.step = stepNumber;
      });
    } else {
      this.step = stepNumber;
    }
  }
}
