import { PublicationService } from './../../../services/publication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-needs-contact',
  templateUrl: './needs-contact.component.html',
  styleUrls: ['./needs-contact.component.scss']
})
export class NeedsContactComponent implements OnInit {
  publication: any;
  offer: any
  isProduct: boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.id) {
        this.publicationService.getOfferById(params.id).subscribe((res) => {
          this.publication = res.publicacion;
          this.offer = res;
        })
      }
      this.isProduct = params.isProduct === 'true'
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

}
