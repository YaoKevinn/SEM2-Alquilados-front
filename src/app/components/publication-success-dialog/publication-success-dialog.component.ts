import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-publication-success-dialog',
  templateUrl: './publication-success-dialog.component.html',
  styleUrls: ['./publication-success-dialog.component.scss']
})
export class PublicationSuccessDialogComponent implements OnInit {
  qualityControl: FormControl = new FormControl(5, [Validators.required]);
  productQualityControl: FormControl = new FormControl(5, [Validators.required]);
  commentControl: FormControl = new FormControl('', [Validators.required]);
  productCommentControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<PublicationSuccessDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeModal() {
    this.dialogRef.close();
  }

  qualify() {
    this.authService.rateUser(this.data.publication.user.id, this.qualityControl.value, this.commentControl.value).subscribe((res) => {
      this.dialogRef.close(true);
    });
    this.authService.rateProduct(this.data.publication.id, this.productQualityControl.value, this.productCommentControl.value).subscribe((res) => {
      this.dialogRef.close(true);
    });
  }


}
