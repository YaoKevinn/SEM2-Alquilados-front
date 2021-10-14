import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  @ViewChild('fileUploadInput') fileUploadInput: any;

  amountControl: FormControl = new FormControl('', [Validators.required]);
  commentControl: FormControl = new FormControl('', [Validators.required]);
  phoneControl: FormControl = new FormControl('', [Validators.required]);

  fileBase64: string = '';
  imageShown: any;
  changedImage = false;

  showSuccessfulMessage = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  backBtnClicked() {
    this.showSuccessfulMessage = false;
    this.router.navigate(['/home']);
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
    this.fileUploadInput.nativeElement.click();
  }

  readImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (onloadEvent: any) => {
        this.fileBase64 = onloadEvent.target.result;
        // Result image
        this.imageShown = onloadEvent.target.result;
        this.changedImage = true;
        console.log()
      };
      reader.onerror = (err) => {
        console.log(err);
        this.changedImage = false;
        event.target.value = '';
      };
    }
  }

  sendProposal() {
    this.showSuccessfulMessage = true;
  }

}
