import { OfferService } from './../../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { NeedService } from 'src/app/services/need.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  showCompleted: boolean = true;
  allOffers: any[] = [];
  gotItem: boolean = false;

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private needService: NeedService,
    public offerService: OfferService,
) { }

  ngOnInit(): void {
    this.authService.loggedUser.subscribe(user => {
      // console.log(user);
      if (user?.id && !this.gotItem) {
        this.offerService.getMyOffers(user.id, 1, 6).subscribe(data => {
          this.allOffers = data.registros;
          this.gotItem = true;
        });
      }
    });
    this.filterOffers();
  }

  toggleFilter() {
    this.showCompleted = !this.showCompleted;
    this.filterOffers();
  }

  filterOffers() {
    this.allOffers =  this.offerService.allOffers.value.filter(o => o.finalizado === !this.showCompleted)
  }

  getPreviousPage() {
    this.offerService.getMyOffers(this.authService.loggedUser.value.id, this.offerService.offersPageInfo.value.currentPage - 1, 6);
  }

  getNextPage() {
    this.offerService.getMyOffers(this.authService.loggedUser.value.id, this.offerService.offersPageInfo.value.currentPage + 1, 6);
    console.log('');
  }

}
