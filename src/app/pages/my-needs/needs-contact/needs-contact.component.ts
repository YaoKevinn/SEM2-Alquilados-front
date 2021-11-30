import { MatDialog } from '@angular/material/dialog';
import { PublicationService } from './../../../services/publication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfferSuccessDialogComponent } from '../../offers/offer-success-dialog/offer-success-dialog.component';
import { PublicationSuccessDialogComponent } from 'src/app/components/publication-success-dialog/publication-success-dialog.component';

@Component({
  selector: 'app-needs-contact',
  templateUrl: './needs-contact.component.html',
  styleUrls: ['./needs-contact.component.scss']
})
export class NeedsContactComponent implements OnInit {
  publication: any;
  offer: any
  isProduct: boolean;
  showQualificationBtn = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private publicationService: PublicationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isProduct = params.isProduct === 'true'
      if (params.id) {
        this.publicationService.getOfferById(params.id).subscribe((res) => {
          this.offer = res;
          if (!this.isProduct) {
            this.showQualificationBtn = !this.offer.producto_calificado || !this.offer.user_calificado;
          } else {
            this.showQualificationBtn = !this.offer.user_calificado;
          }
          this.publicationService.getPublicationById(res.publicacion_id).subscribe((publication) => {
            this.publication = publication;
          });
        })
      }
    });
    // if (params.data) {
    //   console.log(params.data);
    //   this.publication = params.data.publication;
    //   this.offer = params.data.offer;
    // }
  }

  backBtnClicked() {
    if (this.isProduct) {
      this.router.navigate(['products']);
    } else {
      this.router.navigate(['my-needs']);
    }
  }

  goToWhatsapp(telefono: string) {
    window.open(`https://wa.me/${telefono}`);
  }

  openSuccessDialog() {
    this.dialog.open(PublicationSuccessDialogComponent, {
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
