import { QualificationDialogComponent } from './../../components/qualification-dialog/qualification-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileDialogComponent } from 'src/app/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild('fileUploadInput') fileUploadInput: any;

  amountControl: FormControl = new FormControl('', [Validators.required]);
  commentControl: FormControl = new FormControl('', [Validators.required]);
  phoneControl: FormControl = new FormControl('', [Validators.required]);

  fileBase64: string = '';
  imageShown: any;
  changedImage = false;

  showSuccessfulMessage = false;

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  backBtnClicked() {
    this.showSuccessfulMessage = false;
    this.router.navigate(['/home']);
  }

  profileDialogBtnClicked() {
    this.dialog.open(ProfileDialogComponent, {
      panelClass: 'modal-container',
      backdropClass: 'modal-backdrop',
    })
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

  openQualificationDialog() {
    this.dialog.open(QualificationDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
    })
  }
}
