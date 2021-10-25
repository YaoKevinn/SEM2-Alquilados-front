import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-offer-dialog',
  templateUrl: './confirm-offer-dialog.component.html',
  styleUrls: ['./confirm-offer-dialog.component.scss']
})
export class ConfirmOfferDialogComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<ConfirmOfferDialogComponent>) { }

  ngOnInit(): void {
  }

  confirmFinalOffer() {
    this.dialogRef.close();
    this.router.navigate(['my-needs-contact']);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
