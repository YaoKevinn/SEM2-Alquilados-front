import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
}
