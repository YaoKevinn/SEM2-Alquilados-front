import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-qualification-dialog',
  templateUrl: './product-qualification-dialog.component.html',
  styleUrls: ['./product-qualification-dialog.component.scss']
})
export class ProductQualificationDialogComponent implements OnInit {
  publication;

  constructor(private dialogRef: MatDialogRef<ProductQualificationDialogComponent>, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

  ngOnInit(): void {
    this.publication = this.data.publication;
    if (!this.publication.promedio) {
      this.authService.getFullUserInfo(this.publication.id).subscribe((data) => {
        this.publication = data;
      });
    }
  }

  closeBtnClicked() {
    this.dialogRef.close();
  }
}
