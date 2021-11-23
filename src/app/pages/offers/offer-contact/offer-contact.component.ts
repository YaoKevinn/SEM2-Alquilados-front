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

  constructor(private router: Router, private dialog: MatDialog, private activatedRoute: ActivatedRoute, private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.id) {
        this.publicationService.getOfferById(params.id).subscribe((res) => {
          this.offer = res;

          this.publicationService.getPublicationById(res.publicacion_id).subscribe((publication) => {
            this.publication = publication;
          })
        })
      }
      this.isProduct = params.isProduct === 'true'
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
    });
  }
}
