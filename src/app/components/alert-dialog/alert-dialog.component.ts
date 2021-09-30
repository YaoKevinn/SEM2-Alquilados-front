import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AlertDialogComponent>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  registerBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(SignUpComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
  }

  loginBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
  }

}
