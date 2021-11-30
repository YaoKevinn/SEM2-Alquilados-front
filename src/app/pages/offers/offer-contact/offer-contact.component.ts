import { PublicationService } from './../../../services/publication.service';
import { OfferSuccessDialogComponent } from './../offer-success-dialog/offer-success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-contact',
  templateUrl: './offer-contact.component.html',
  styleUrls: ['./offer-contact.component.scss']
})
export class OfferContactComponent implements OnInit {
  publication: any;
  offer: any;
  isProduct;
  showQualificationBtn = false;

  constructor(private router: Router, private dialog: MatDialog, private activatedRoute: ActivatedRoute, private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isProduct = params.isProduct === 'true';
      if (params.id) {
        this.publicationService.getOfferById(params.id).subscribe((res) => {
          this.offer = res;
          if (this.isProduct) {
            this.showQualificationBtn = !this.offer.producto_calificado || !this.offer.user_calificado;
          } else {
            this.showQualificationBtn = !this.offer.user_calificado;
          }
          this.publicationService.getPublicationById(res.publicacion_id).subscribe((publication) => {
            this.publication = publication;
          })
        })
      }
    });
  }

  backBtnClicked() {
    this.router.navigate(['offers']);
  }

  openSuccessDialog() {
    this.dialog.open(OfferSuccessDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        publication: this.publication,
        offer: this.offer,
        isProduct: this.isProduct,
      }
    }).afterClosed().subscribe((rated) => {
      if (rated) {
        this.showQualificationBtn = false;
      }
    });
  }
}
