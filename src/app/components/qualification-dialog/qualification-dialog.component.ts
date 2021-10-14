import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification-dialog',
  templateUrl: './qualification-dialog.component.html',
  styleUrls: ['./qualification-dialog.component.scss']
})
export class QualificationDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<QualificationDialogComponent>) { }

  ngOnInit(): void {
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }
}
