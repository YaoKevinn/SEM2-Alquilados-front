import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProfileDialogComponent } from 'src/app/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-qualification-dialog',
  templateUrl: './qualification-dialog.component.html',
  styleUrls: ['./qualification-dialog.component.scss']
})
export class QualificationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<QualificationDialogComponent>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }

  profileDialogBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(ProfileDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
    })
  }
}
