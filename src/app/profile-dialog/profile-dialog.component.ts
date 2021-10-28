import { User } from './../models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QualificationDialogComponent } from '../components/qualification-dialog/qualification-dialog.component';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {
  user: User;

  constructor(private dialogRef: MatDialogRef<ProfileDialogComponent>, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.data.user;
    if (!this.user.promedio) {
      this.authService.getFullUserInfo(this.user.id).subscribe((data) => {
        this.user = data;
      });
    }
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }

  qualificationBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(QualificationDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        user: this.user
      }
    })
  }
}
