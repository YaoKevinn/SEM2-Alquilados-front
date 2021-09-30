import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  amountControl: FormControl = new FormControl('', [Validators.required]);
  commentControl: FormControl = new FormControl('', [Validators.required]);
  phoneControl: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  checkIfSendBtnClickeable() {
    if (
      this.amountControl.valid &&
      this.commentControl.valid &&
      this.phoneControl.valid
    ) {
      return true;
    }
    return false;
  }

  openUploadImageWindow() {
    // pending
  }

}
