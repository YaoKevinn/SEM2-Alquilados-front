import { PublicationService } from './../../services/publication.service';
import { NeedService } from '../../services/need.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-need-card',
  templateUrl: './need-card.component.html',
  styleUrls: ['./need-card.component.scss']
})
export class NeedCardComponent implements OnInit {

  @Input() neeData: any;

  reactivated = false;

  constructor(private router: Router, private publicationService: PublicationService) { }

  ngOnInit(): void {
  }

  goToNeedsDetail() {
    this.router.navigate(['/my-needs-detail'], { queryParams: { id: this.neeData.id } });
  }

  goToNeedsContact() {
    this.router.navigate(['my-needs-contact'], {
      queryParams: {
        id: this.neeData.oferta_aceptada.id,
        isProduct: false,
      }
    });
  }

  removeNeed() {
    const publication = {...this.neeData};
    publication.activa = false;
    this.publicationService.editPublication(publication).subscribe((data) => {
      this.neeData.activa = false;
    });
  }

  reactivateNeed(neeId: number) {
    this.publicationService.reactivatePublication(neeId).subscribe(res => {
      this.reactivated = true;
    });
  }
}
