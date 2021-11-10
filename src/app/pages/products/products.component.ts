import { PublicationService } from './../../services/publication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isActive: boolean = true;
  allProducts = [];

  constructor(public publicationService: PublicationService) { }

  ngOnInit(): void {
    this.publicationService.getMyPublications(1, 6, false, this.isActive);
    this.publicationService.myProductsPublications.subscribe((data) => {
      this.allProducts = data;
    });
  }

  toggleFilter() {
    this.isActive = !this.isActive;
    this.allProducts = [];
    this.publicationService.getMyPublications(1, 6, false, this.isActive);
  }

  getPreviousPage() {
    this.publicationService.getMyPublications(this.publicationService.publicationsPageInfo.value.currentPage - 1, 6, false, this.isActive);
  }

  getNextPage() {
    this.publicationService.getMyPublications(this.publicationService.publicationsPageInfo.value.currentPage + 1, 6, false, this.isActive);
  }

}
