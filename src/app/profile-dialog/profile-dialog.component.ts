import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QualificationDialogComponent } from '../components/qualification-dialog/qualification-dialog.component';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProfileDialogComponent>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }

  qualificationBtnClicked() {
    this.dialogRef.close();
    this.dialog.open(QualificationDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
    })
  }
}
