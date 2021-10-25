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

  constructor(private router: Router, private needService: NeedService) { }

  ngOnInit(): void {
  }

  filterNeeds() {
    this.needService.allNeeds.next(
      this.needService.allNeeds.value.filter(nee => nee.finalizado !== true)
    );
  }

  goToNeedsDetail() {
    this.router.navigate(['/my-needs-detail']);
  }

}
