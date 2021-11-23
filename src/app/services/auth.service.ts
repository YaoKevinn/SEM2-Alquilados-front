import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PublicationService } from './publication.service';
import { User } from './../models/User';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedUser = new BehaviorSubject<User>(undefined);
  private _isUserLogged: boolean = false;

  // private _loggedUser: User = {
  //   id: 1,
  //   nombre: "Leandro!",
  //   apellido: "Tórtora",
  //   email: "tortoraleandro@gmail.com",
  //   fecha_nacimiento: "1997-02-01",
  //   telefono: "222222",
  //   latitud: 0,
  //   longitud: 0,
  //   is_empresa: false,
  //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYzNTIyOTc3NSwiZXhwIjoxNjM1ODM0NTc1fQ.XQueY491dJ54FBJaH6K2Xt-ptSaQM9JL7-M2qLUJQWc"
  // }
  // private _isUserLogged: boolean = true;

  constructor(private apiService: ApiService, private publicationService: PublicationService, private router: Router, private dialog: MatDialog) {}

  get loggedUser() {
    return this._loggedUser;
  }

  get isUserLogged() {
    return this._isUserLogged;
  }

  set isUserLogged(arg: boolean) {
    this._isUserLogged = arg;
  }

  login(email: string, password: string) {
    const obs = this.apiService.login(email, password);
    obs.subscribe((user: User) => {
      this._loggedUser.next(user);
      this._isUserLogged = true;
      localStorage.setItem('alquila2UserToken', user.token);
    });
    return obs;
  }

  loginWithSavedToken(token: string) {
    const obs = this.apiService.loginWithSavedToken(token);
    obs.subscribe((user) => {
      this._loggedUser.next(user);
      this._isUserLogged = true;
    });
  }

  register(nombre: string, apellido: string, email: string, password: string, fecha_nacimiento: string, telefono: string, is_empresa: boolean) {
    const obs = this.apiService.register(nombre, apellido, email, password, fecha_nacimiento, telefono, is_empresa);
    obs.subscribe((user: User) => {
      this._loggedUser.next(user);
      this._isUserLogged = true;
      localStorage.setItem('alquila2UserToken', user.token);
    });
    return obs;
  }

  logout() {
    this._loggedUser.next(undefined);
    this._isUserLogged = false;
    this.publicationService.myNeedsPublications.next([]);
    this.publicationService.myNeedsPublicationsPageInfo.next({
      totalItems: 0,
      totalPages: 0,
      currentPage: 0,
    });
    localStorage.removeItem('alquila2UserToken');
    this.router.navigate(['home']);
  }

  getFullUserInfo(userId: number) {
    const obs = this.apiService.showFullUserInfo(userId);
    obs.subscribe((user: User) => {
      if (!this._loggedUser) {
        this._loggedUser.next(user);
      }
    });
    return obs;
  }

  addFriend(telefono_friend: string) {
    const obs = this.apiService.addFriend(telefono_friend);
    return obs;
  }

  deleteFriend(userId: number, telefono_friend: string) {
    const obs = this.apiService.deleteFriend(userId, telefono_friend);
    obs.subscribe((res) => {
      let newUser = this._loggedUser.value;
      newUser.friends = newUser.friends.filter(f => f.telefono !== telefono_friend);
      this._loggedUser.next(newUser);
    });
    return obs;
  }

  editUser(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    fecha_nacimiento: string,
    telefono: string
  ) {
    const obs = this.apiService.editUser(id, nombre, apellido, email, fecha_nacimiento, telefono);
    return obs;
  }

  rateUser(userId: number, calificacion: number, comentarios: string) {
    const obs = this.apiService.rateUser(userId, calificacion, comentarios);
    return obs;
  }

  rateProduct(publicationId: number, calificacion: number, comentarios: string) {
    const obs = this.apiService.rateProduct(publicationId, calificacion, comentarios);
    return obs;
  }
}
