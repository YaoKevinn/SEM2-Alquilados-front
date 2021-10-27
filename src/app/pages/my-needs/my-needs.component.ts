import { PublicationService } from './../../services/publication.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { NeedService } from 'src/app/services/need.service';

@Component({
  selector: 'app-my-needs',
  templateUrl: './my-needs.component.html',
  styleUrls: ['./my-needs.component.scss']
})
export class MyNeedsComponent implements OnInit {

  showCompleted: boolean = false;
  allNeeds: any[] = [];

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private publicationService: PublicationService,
    private needService: NeedService
) { }

  ngOnInit(): void {
    this.publicationService.getMyPublications(1, 6, true, true);
    this.publicationService.myNeedsPublications.subscribe((data) => {
      this.allNeeds = data;
    });
    // this.filterNeeds();
  }

  toggleFilter() {
    this.showCompleted = !this.showCompleted;
    this.allNeeds = [];
    if (this.showCompleted) {
      this.publicationService.getMyPublications(1, 6, true, false);
    } else {
      this.publicationService.getMyPublications(1, 6, true, true);
    }
    // this.filterNeeds();
  }

  filterNeeds() {
    this.allNeeds =  this.publicationService.myNeedsPublications.value.filter(nee => nee.finalizado === !this.showCompleted)
}

}
