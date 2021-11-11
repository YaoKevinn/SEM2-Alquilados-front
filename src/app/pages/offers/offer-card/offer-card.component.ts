import { AuthService } from 'src/app/services/auth.service';
import { NeedService } from 'src/app/services/need.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit {
  @Input() neeData: any;

  constructor(
    private router: Router,
    private offerService: OfferService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // console.log(this.neeData);
  }

  // filterNeeds() {
  //   this.offerService.allOffers.next(
  //     this.offerService.allOffers.value.filter((o) => o.finalizado !== true)
  //   );
  // }

  goToOfferContact() {
    this.router.navigate(['/offers-contact']);
  }

  getStatusText() {
    if (this.neeData.es_vieja) {
      if (this.neeData.elegida) {
        return 'Aceptado';
      } else {
        return 'Rechazado';
      }
    } else {
      return 'Pendiente';
    }
  }
}
