import { User } from './../models/User';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _loggedUser: User = undefined;
  // private _isUserLogged: boolean = false;

  private _loggedUser: User = {
    id: 1,
    nombre: "Leandro!",
    apellido: "Tórtora",
    email: "tortoraleandro@gmail.com",
    fecha_nacimiento: "1997-02-01",
    telefono: "222222",
    latitud: 0,
    longitud: 0,
    is_empresa: false,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYzNTIyOTc3NSwiZXhwIjoxNjM1ODM0NTc1fQ.XQueY491dJ54FBJaH6K2Xt-ptSaQM9JL7-M2qLUJQWc"
  }
  private _isUserLogged: boolean = true;

  constructor(private apiService: ApiService) { }

  get loggedUser() {
    return this._loggedUser;
  }

  set loggedUser(arg: User) {
    this._loggedUser = arg;
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
      this._loggedUser = user;
      this._isUserLogged = true;
      localStorage.setItem('alquila2UserToken', user.token);
    });
    return obs;
  }

  register(nombre: string, apellido: string, email: string, password: string, fecha_nacimiento: string, telefono: string, is_empresa: boolean) {
    const obs = this.apiService.register(nombre, apellido, email, password, fecha_nacimiento, telefono, is_empresa);
    obs.subscribe((user: User) => {
      this._loggedUser = user;
      this._isUserLogged = true;
      localStorage.setItem('alquila2UserToken', user.token);
    });
    return obs;
  }

  getFullUserInfo(userId: number) {
    const obs = this.apiService.showFullUserInfo(userId);
    obs.subscribe((user: User) => {
      this.loggedUser = user;
    })
    return obs;
  }

  addFriend(telefono_friend: string) {
    const obs = this.apiService.addFriend(telefono_friend);
    return obs;
  }

  deleteFriend(userId: number, telefono_friend: string) {
    const obs = this.apiService.deleteFriend(userId, telefono_friend);
    return obs;
  }
}
