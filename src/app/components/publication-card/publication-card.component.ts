import { PublicationService } from './../../services/publication.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss']
})
export class PublicationCardComponent implements OnInit {

  @Input() pubData: any;

  constructor(private router: Router, private publicationService: PublicationService) { }

  ngOnInit(): void {
  }

  removeCard() {
    this.publicationService.allPublications.next(
      this.publicationService.allPublications.value.filter(pub => pub.id !== this.pubData.id)
    );
  }

  goToDetail() {
    this.router.navigate(['/detail']);
  }

}
