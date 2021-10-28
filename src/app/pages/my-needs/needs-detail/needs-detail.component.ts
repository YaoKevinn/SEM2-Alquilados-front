import { PublicationService } from './../../../services/publication.service';
import { ConfirmOfferDialogComponent } from './../confirm-offer-dialog/confirm-offer-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-needs-detail',
  templateUrl: './needs-detail.component.html',
  styleUrls: ['./needs-detail.component.scss'],
})
export class NeedsDetailComponent implements OnInit {
  publication: any;
  offers: any[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private publicationService: PublicationService,
    private activatedRoute: ActivatedRoute,
  ) {}

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
    this.router.navigate(['/my-needs']);
  }

  confirmOffer(offer: any) {
    this.dialog.open(ConfirmOfferDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        publication: this.publication,
        offer,
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
