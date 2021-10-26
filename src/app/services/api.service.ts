import { PublicationPageInfo } from './../models/Publication';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { share } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseApiUrl = 'https://sem2-alquila2.herokuapp.com/';
  token: string;

  // .append('Content-Type', 'application/json')
  // .append('Authorization', 'Bearer ' + 'token...')

  constructor(public http: HttpClient) {
    this.getCurrentUserToken();
  }

  getCurrentUserToken() {
    const token = localStorage.getItem('alquila2UserToken');
    if (token) {
      this.token = token;
    }
  }

  // ---------------- USERS -----------------------
  login(email: string, password: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
    return this.http
      .post<User>(this.baseApiUrl + 'users/authenticate', { email, password }, { headers })
      .pipe(share());

      // "id": 1,
      // "nombre": "Leandro!",
      // "apellido": "Tórtora",
      // "email": "tortoraleandro@gmail.com",
      // "fecha_nacimiento": "1997-02-01",
      // "telefono": "2216161043",
      // "latitud": 0,
      // "longitud": 0,
      // "is_empresa": false,
      // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTYzNTIyMTA5NywiZXhwIjoxNjM1ODI1ODk3fQ.ff7NtHC6ngaRXDcQFadAGOkXanqydZIVRsgbhJn0uOc"
  }

  register(nombre: string, apellido: string, email: string, password: string, fecha_nacimiento: string, telefono: string, is_empresa: boolean) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
    return this.http
      .post<any>(this.baseApiUrl + 'users/register', {
        nombre,
        apellido,
        email,
        password,
        fecha_nacimiento,
        telefono,
        is_empresa
      }, { headers })
      .pipe(share());

      // "id": 5,
      // "nombre": "Kevin",
      // "apellido": "Yao",
      // "email": "kevin1@gmail.com",
      // "fecha_nacimiento": "1996-08-17",
      // "telefono": "1123456789",
      // "is_empresa": false,
      // "latitud": 0,
      // "longitud": 0,
      // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlhdCI6MTYzNTIyODQ3NiwiZXhwIjoxNjM1ODMzMjc2fQ.lPSgALkSAvdj9ofvaxJ178FlKC2Vk4alzYoaTydyhP0"
  }

  editUser(id: number, nombre: string, apellido: string, email: string, password: string, fecha_nacimiento: string, telefono: string) {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    return this.http
      .post<any>(this.baseApiUrl + `users/${id}`, {
        nombre,
        apellido,
        email,
        password,
        fecha_nacimiento,
        telefono,
      }, { headers })
      .pipe(share());
  }

  showFullUserInfo(userId: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token)
    return this.http
      .get<User>(this.baseApiUrl + `users/${userId}`, { headers })
      .pipe(share());
  }

  addFriend(telefono_friend: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token)
    return this.http
      .post<any>(this.baseApiUrl + `users/addFriend`, {
        telefono_friend
      }, { headers })
      .pipe(share());
  }

  deleteFriend(userId: number, telefono_friend: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token)
    return this.http
      .post<any>(this.baseApiUrl + `users/deleteFriend/${userId}`, {
        telefono_friend
      }, { headers })
      .pipe(share());
  }

  // ---------------- USERS ENDS -----------------------


  // ---------------- PUBLICATIONS ENDS -----------------------
  getAllPublications(page: number = 1, size: number = 6, es_necesidad: boolean = true) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token)
    return this.http
      .get<PublicationPageInfo>(this.baseApiUrl + `publicaciones?page=${page}&size=${size}&es_necesidad=${es_necesidad}`, { headers })
      .pipe(share());

      // "totalItems": 1,
      // "registros": [
      //     {
      //         "id": 2,
      //         "descripcion": "Necesito un producto....",
      //         "categoria_id": 0,
      //         "cantidad_tiempo": 1,
      //         "unidad_tiempo": "días",
      //         "precio": 100.2,
      //         "fecha_limite": "2021-02-20",
      //         "ver_todos": true,
      //         "user_id": 1,
      //         "es_necesidad": true,
      //         "foto": "fotourl",
      //         "activa": true,
      //         "createdAt": "2021-10-26T04:09:34.621Z",
      //         "updatedAt": "2021-10-26T04:09:34.621Z",
      //         "user": {
      //             "id": 1,
      //             "nombre": "Leandro!",
      //             "apellido": "Tórtora",
      //             "email": "tortoraleandro@gmail.com",
      //             "fecha_nacimiento": "1997-02-01",
      //             "telefono": "2216161043",
      //             "latitud": 0,
      //             "longitud": 0,
      //             "is_empresa": false
      //         },
      //         "categoria": {
      //             "id": 0,
      //             "nombre": "Sin definir"
      //         }
      //     }
      // ],
      // "totalPages": 1,
      // "currentPage": 1
  }


}
