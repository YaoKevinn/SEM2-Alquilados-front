import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ProfileDialogComponent } from 'src/app/profile-dialog/profile-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-qualification-dialog',
  templateUrl: './qualification-dialog.component.html',
  styleUrls: ['./qualification-dialog.component.scss']
})
export class QualificationDialogComponent implements OnInit {
  user: User;

  constructor(private dialogRef: MatDialogRef<QualificationDialogComponent>, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

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

  profileDialogBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(ProfileDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        user: this.user
      }
    })
  }
}
