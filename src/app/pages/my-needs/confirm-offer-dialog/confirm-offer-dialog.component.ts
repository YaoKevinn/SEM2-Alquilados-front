import { PublicationService } from './../../../services/publication.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-offer-dialog',
  templateUrl: './confirm-offer-dialog.component.html',
  styleUrls: ['./confirm-offer-dialog.component.scss'],
})
export class ConfirmOfferDialogComponent implements OnInit {
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ConfirmOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private publicationService: PublicationService,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  confirmFinalOffer() {
    this.publicationService.acceptOffer(
      this.data.offer.id,
      this.data.offer.descripcion,
      this.data.offer.cantidad_tiempo,
      this.data.offer.unidad_tiempo,
      this.data.offer.precio,
      this.data.offer.foto,
    ).subscribe((res) => {
      this.router.navigate(['my-needs-contact'], {
        queryParams: {
          id: this.data.offer.id,
          isProduct: true,
        }
      });
      this.dialogRef.close();
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
