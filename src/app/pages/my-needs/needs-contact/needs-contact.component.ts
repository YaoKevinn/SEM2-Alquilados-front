import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-needs-contact',
  templateUrl: './needs-contact.component.html',
  styleUrls: ['./needs-contact.component.scss']
})
export class NeedsContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backBtnClicked() {
    this.router.navigate(['my-needs']);
  }

}
