import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-success-dialog',
  templateUrl: './offer-success-dialog.component.html',
  styleUrls: ['./offer-success-dialog.component.scss']
})
export class OfferSuccessDialogComponent implements OnInit {
  qualityControl: FormControl = new FormControl(5, [Validators.required]);
  productQualityControl: FormControl = new FormControl(5, [Validators.required]);
  commentControl: FormControl = new FormControl('', [Validators.required]);
  productCommentControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<OfferSuccessDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeModal() {
    this.dialogRef.close();
  }

  qualify() {
    this.authService.rateUser(this.data.publication.user.id, this.qualityControl.value, this.commentControl.value, this.data.offer.id).subscribe((res) => {
      this.dialogRef.close(true);
    });
    if (this.data.isProduct) {
      this.authService.rateProduct(this.data.publication.id, this.productQualityControl.value, this.productCommentControl.value,  this.data.offer.id).subscribe((res) => {
        this.dialogRef.close(true);
      });
    }
  }

}
