import { PublicationService } from './../../../services/publication.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productData: any;
  reactivated: boolean = false;

  constructor(public publicationService: PublicationService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.productData);
  }

  goToOfferContact() {
    this.router.navigate(['my-needs-contact'], {
      queryParams: {
        id: this.productData.oferta_aceptada.id,
        isProduct: true,
      }
    });
  }

  removeProduct() {
    const publication = {...this.productData};
    publication.activa = false;
    this.publicationService.editPublication(publication).subscribe((data) => {
      this.productData.activa = false;
    });
  }

  reactivateProduct(neeId: number) {
    this.publicationService.reactivatePublication(neeId).subscribe(res => {
      this.reactivated = true;
    });
  }

  goToDetail() {
    this.router.navigate(['/products-detail'], { queryParams: { id: this.productData.id } });
  }
}
