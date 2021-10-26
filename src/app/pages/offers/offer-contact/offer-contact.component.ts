import { OfferSuccessDialogComponent } from './../offer-success-dialog/offer-success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-contact',
  templateUrl: './offer-contact.component.html',
  styleUrls: ['./offer-contact.component.scss']
})
export class OfferContactComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  backBtnClicked() {
    this.router.navigate(['offers']);
  }

  openSuccessDialog() {
    this.dialog.open(OfferSuccessDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
    })
  }
}
