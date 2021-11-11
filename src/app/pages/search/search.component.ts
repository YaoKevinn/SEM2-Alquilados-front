import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTextControl: FormControl = new FormControl('', [Validators.required]);
  pubList = [];

  constructor() { }

  ngOnInit(): void {
  }

}
