import { PublicationService } from './../../services/publication.service';
import { QualificationDialogComponent } from './../../components/qualification-dialog/qualification-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileDialogComponent } from 'src/app/profile-dialog/profile-dialog.component';
import { Publication } from 'src/app/models/Publication';
import { ProductQualificationDialogComponent } from 'src/app/components/product-qualification-dialog/product-qualification-dialog.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild('fileUploadInput') fileUploadInput: any;

  publication: any;
  isProduct: boolean;

  amountControl: FormControl = new FormControl('', [Validators.required]);
  timeControl: FormControl = new FormControl('', [Validators.required]);
  timeUnitControl: FormControl = new FormControl('días', [Validators.required]);
  commentControl: FormControl = new FormControl('', [Validators.required]);
  // phoneControl: FormControl = new FormControl('', [Validators.required]);

  fileBase64: string = '';
  imageShown: any;
  changedImage = false;

  showSuccessfulMessage = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dialog: MatDialog, private publicationService: PublicationService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    this.activatedRoute.queryParams.subscribe((params) => {
      this.publicationService.getPublicationById(params.id).subscribe((data) => {
        this.publication = data;
      });
      this.isProduct = params.isProduct === 'true';
    });
  }

  backBtnClicked() {
    this.showSuccessfulMessage = false;
    this.router.navigate(['/home']);
  }

  profileDialogBtnClicked() {
    if (this.publication?.user) {
      this.dialog.open(ProfileDialogComponent, {
        panelClass: 'user-modal-container',
        backdropClass: 'modal-backdrop',
        data: {
          user: this.publication.user
        }
      })
    }
  }

  checkIfSendBtnClickeable() {
    if (this.isProduct) {
      return this.commentControl.valid;
    } else {
      return (
        this.amountControl.valid &&
        this.commentControl.valid &&
        // this.phoneControl.valid &&
        this.timeControl.valid &&
        this.imageShown
      );
    }
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
    this.publicationService.createOffer(
      this.publication.id,
      this.commentControl.value,
      +this.timeControl.value,
      this.timeUnitControl.value,
      +this.amountControl.value,
      this.imageShown
    ).subscribe((res) => {
      this.showSuccessfulMessage = true;
    });
  }

  confirmProposal() {
    this.publicationService.createOffer(
      this.publication.id,
      this.commentControl.value,
      this.publication.cantidad_tiempo,
      this.publication.unidad_tiempo,
      this.publication.precio,
      this.publication.foto
    ).subscribe((res) => {
      this.showSuccessfulMessage = true;
    });
  }

  openQualificationDialog() {
    this.dialog.open(QualificationDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        user: this.publication.user
      }
    })
  }

  openProductQualificationDialog() {
    this.dialog.open(ProductQualificationDialogComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        publication: this.publication
      }
    })
  }

}
