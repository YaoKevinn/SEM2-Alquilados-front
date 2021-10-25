import { ConfirmOfferDialogComponent } from './../confirm-offer-dialog/confirm-offer-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-needs-detail',
  templateUrl: './needs-detail.component.html',
  styleUrls: ['./needs-detail.component.scss']
})
export class NeedsDetailComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  backBtnClicked() {
    this.router.navigate(['/my-needs']);
  }

  confirmOffer() {
    this.dialog.open(ConfirmOfferDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop'
    })
  }
}
