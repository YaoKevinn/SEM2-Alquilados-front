import { User } from './../../models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FriendListComponent } from 'src/app/components/friend-list/friend-list.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  currentUserObj: User;

  mailControl: FormControl = new FormControl('', [Validators.required]);
  nameControl: FormControl = new FormControl('', [Validators.required]);
  firstNameControl: FormControl = new FormControl('', [Validators.required]);
  birthdateControl: FormControl = new FormControl('', [Validators.required]);
  phoneControl: FormControl = new FormControl('', [Validators.required]);
  // ubicationControl: FormControl = new FormControl('', [Validators.required]);

  showSuccessfulMessage = false;

  constructor(private router: Router, private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (this.authService.isUserLogged) {
      this.authService.getFullUserInfo(this.authService.loggedUser.value.id).subscribe((user) => {
        this.currentUserObj = user;
        this.mailControl.setValue(user.email);
        this.nameControl.setValue(user.nombre);
        this.firstNameControl.setValue(user.apellido);
        this.birthdateControl.setValue(user.fecha_nacimiento);
        this.phoneControl.setValue(user.telefono);
        // this.ubicationControl.setValue(user.email);
      });
    } else {
      this.authService.loggedUser.subscribe(user => {
        if (user) {
          this.currentUserObj = user;
          this.mailControl.setValue(user.email);
          this.nameControl.setValue(user.nombre);
          this.firstNameControl.setValue(user.apellido);
          this.birthdateControl.setValue(user.fecha_nacimiento);
          this.phoneControl.setValue(user.telefono);
        }
      });
    }
  }

  checkIfSendBtnClickeable() {
    if (
      this.mailControl.valid &&
      this.nameControl.valid &&
      this.firstNameControl.valid &&
      this.birthdateControl.valid &&
      this.phoneControl.valid &&
      (
        this.mailControl.value !== this.currentUserObj.email ||
        this.nameControl.value !== this.currentUserObj.nombre ||
        this.firstNameControl.value !== this.currentUserObj.apellido ||
        this.birthdateControl.value !== this.currentUserObj.fecha_nacimiento ||
        this.phoneControl.value !== this.currentUserObj.telefono
      )
    ) {
      return true;
    }
    return false;
  }

  editUserInfo() {
    // PENDING
    this.showSuccessfulMessage = true;
  }

  openFriendList() {
    this.dialog.open(FriendListComponent, {
      panelClass: 'user-modal-container',
      backdropClass: 'modal-backdrop',
      data: {
        friends: this.currentUserObj.friends,
      }
    })
  }

}
