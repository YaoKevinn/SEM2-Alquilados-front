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

  showCompleted: boolean = true;
  allNeeds: any[] = [];

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private needService: NeedService
) { }

  ngOnInit(): void {
    this.needService.allNeeds.subscribe((data) => {
      this.allNeeds = data;
    });
    this.filterNeeds();
  }

  toggleFilter() {
    this.showCompleted = !this.showCompleted;
    this.filterNeeds();
  }

  filterNeeds() {
    this.allNeeds =  this.needService.allNeeds.value.filter(nee => nee.finalizado === !this.showCompleted)
}

}
