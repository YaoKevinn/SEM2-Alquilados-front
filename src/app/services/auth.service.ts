import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserLogged = false;

  constructor() { }

  get isUserLogged() {
    return this._isUserLogged;
  }

  set isUserLogged(arg: boolean) {
    this._isUserLogged = arg;
  }
}
