import { AuthService } from './../../services/auth.service';
import { LoginComponent } from './../../components/login/login.component';
import { AlertDialogComponent } from './../../components/alert-dialog/alert-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSuccessfulForm = false;

  descriptionControl: FormControl = new FormControl('', [Validators.required]);
  categoryControl: FormControl = new FormControl('', [Validators.required]);
  ubicationControl: FormControl = new FormControl('', [Validators.required]);
  neededDateControl: FormControl = new FormControl('');
  needForSepacialDate: any = null;

  constructor(private dialog: MatDialog, public authService: AuthService) { }

  ngOnInit(): void {
  }

  checkSendBtnAvailable() {
    if (
      this.descriptionControl.valid &&
      this.categoryControl.valid &&
      this.ubicationControl.valid &&
      this.neededDateControl.valid
    ) {
      return true;
    }
    return false;
  }

  sendPublication() {
    this.dialog.open(AlertDialogComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
    this.showSuccessfulForm = true;
  }

  publishOtherPublication() {
    this.descriptionControl.setValue('');
    this.categoryControl.setValue('');
    this.ubicationControl.setValue('');
    this.neededDateControl.setValue('');
    this.needForSepacialDate = null;
    this.showSuccessfulForm = false;
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
    this.authService.isUserLogged = false;
  }
}
