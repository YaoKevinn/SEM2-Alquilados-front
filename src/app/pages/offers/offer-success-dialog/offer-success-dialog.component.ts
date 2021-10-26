import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-success-dialog',
  templateUrl: './offer-success-dialog.component.html',
  styleUrls: ['./offer-success-dialog.component.scss']
})
export class OfferSuccessDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<OfferSuccessDialogComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  qualify() {
    
  }

}
