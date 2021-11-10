import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublicationService } from 'src/app/services/publication.service';
import { ConfirmOfferDialogComponent } from '../../my-needs/confirm-offer-dialog/confirm-offer-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  publication: any;
  offers: any[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private publicationService: PublicationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.publicationService.getPublicationById(params.id).subscribe((data) => {
          this.publication = data;
        });
        this.publicationService.getOffersByPublicationId(params.id, 1, 10).subscribe((data) => {
          this.offers = data.registros;
        })
      }
    });
  }

  backBtnClicked() {
    this.router.navigate(['/products']);
  }

  confirmOffer(offer: any) {
    this.dialog.open(ConfirmOfferDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        publication: this.publication,
        offer,
        isProduct: true,
      }
    });
  }

  rejectOffer(offer: any) {
    this.publicationService.rejectOffer(
      this.publication.id,
      offer.descripcion,
      offer.cantidad_tiempo,
      offer.unidad_tiempo,
      offer.precio,
      offer.foto,
    ).subscribe(res => {
      this.offers = this.offers.filter(x => x.id !== offer.id);
    });
  }


}
