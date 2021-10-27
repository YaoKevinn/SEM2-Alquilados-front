import { FriendListComponent } from './../../components/friend-list/friend-list.component';
import { PublicationService } from './../../services/publication.service';
import { AuthService } from './../../services/auth.service';
import { LoginComponent } from './../../components/login/login.component';
import { AlertDialogComponent } from './../../components/alert-dialog/alert-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('homeFileUploadInput') homeFileUploadInput: any;

  heroTitle: string = '';
  secondaryHeroTitle: string = '';
  isRenting: boolean = true;
  showSuccessfulForm = false;

  descriptionControl: FormControl = new FormControl('', [Validators.required]);
  // categoryControl: FormControl = new FormControl('', [Validators.required]);
  timeControl: FormControl = new FormControl('', [Validators.required]);
  timeUnitControl: FormControl = new FormControl('días', [Validators.required]);
  neededDateControl: FormControl = new FormControl('');
  needForSepacialDate: any = null;
  onlyFriendsControl: FormControl = new FormControl(false, [Validators.required]);
  priceControl:FormControl = new FormControl('', [Validators.required]);

  fileBase64: string = '';
  imageShown: any;
  changedImage = false;

  allPublications: any[] = [];

  constructor(
      private dialog: MatDialog,
      public authService: AuthService,
      private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.publicationService.allPublications.subscribe((data) => {
      this.allPublications = data;
    });
    this.setHeroTitle();
  }

  setHeroTitle() {
    if (this.isRenting) {
      this.heroTitle = 'Si ya sabes que no lo vas a usar dos veces... ';
      this.secondaryHeroTitle = 'alquilalo :)'
    } else {
      this.heroTitle = 'Si tenés algo en casa que no lo usás frecuente... ';
      this.secondaryHeroTitle = 'ponelo en alquiler :)'
    }
  }

  checkSendBtnAvailable() {
    if (this.isRenting) {
      return (
        this.descriptionControl.valid &&
        this.timeControl.valid &&
        this.timeUnitControl.valid &&
        this.neededDateControl.valid
      );
    } else {
      return (
        this.descriptionControl.valid &&
        this.timeControl.valid &&
        this.timeUnitControl.valid &&
        this.priceControl.valid &&
        this.imageShown
      )
    }
  }

  sendNeedPublication() {
    if (!this.authService.isUserLogged) {
      this.dialog.open(AlertDialogComponent, {
        panelClass: 'modal-container',
        backdropClass: 'modal-backdrop',
      })
    } else {
      this.publicationService.createPublication(
        this.descriptionControl.value,
        +this.timeControl.value,
        this.timeUnitControl.value,
        0,
        this.needForSepacialDate ? this.neededDateControl.value.replaceAll('/', '-') : '3000-12-31',
        !this.onlyFriendsControl.value,
        this.isRenting,
        '-'
      ).subscribe(data => {
        this.showSuccessfulForm = true;
      })
    }
  }

  sendProductPublication() {
    if (!this.authService.isUserLogged) {
      this.dialog.open(AlertDialogComponent, {
        panelClass: 'modal-container',
        backdropClass: 'modal-backdrop',
      })
    } else {
      this.publicationService.createPublication(
        this.descriptionControl.value,
        +this.timeControl.value,
        this.timeUnitControl.value,
        +this.priceControl.value,
        '3000-12-31',
        !this.onlyFriendsControl.value,
        this.isRenting,
        this.imageShown
      ).subscribe(data => {
        this.showSuccessfulForm = true;
      })
    }
  }

  publishOtherPublication() {
    this.descriptionControl.setValue('');
    this.timeControl.setValue('');
    this.timeUnitControl.setValue('días');
    this.neededDateControl.setValue('');
    this.priceControl.setValue('');
    this.onlyFriendsControl.setValue(false);
    this.imageShown = null;
    this.needForSepacialDate = null;
    this.showSuccessfulForm = false;
  }

  toggleOperationType(operation: string) {
    this.isRenting = operation === 'buy';
    this.setHeroTitle();
  }

  openUploadImageWindow() {
    this.homeFileUploadInput.nativeElement.click();
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
}
