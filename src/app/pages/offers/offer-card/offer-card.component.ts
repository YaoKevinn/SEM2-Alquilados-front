import { NeedService } from 'src/app/services/need.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {

  @Input() neeData: any;

  constructor(private router: Router, private needService: NeedService) { }

  ngOnInit(): void {
  }

  filterNeeds() {
    this.needService.allNeeds.next(
      this.needService.allNeeds.value.filter(nee => nee.finalizado !== true)
    );
  }

  goToOfferContact() {
    this.router.navigate(['/offers-contact']);
  }


}
