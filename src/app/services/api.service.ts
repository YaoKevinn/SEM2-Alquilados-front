import { PublicationPageInfo } from './../models/Publication';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { share } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
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

  loginWithSavedToken(token: string) {
    if (this.token) {
      // users/current
      const headers = new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Authorization', 'Bearer ' + token);
      return this.http
        .get<User>(this.baseApiUrl + `users/current`, { headers })
        .pipe(share());
    }
    return null;
  }

  // ---------------- USERS -----------------------
  login(email: string, password: string) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const obs = this.http
      .post<User>(
        this.baseApiUrl + 'users/authenticate',
        { email, password },
        { headers }
      )
      .pipe(share());
    obs.subscribe((user) => {
      this.token = user.token;
    });
    return obs;

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

  register(
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    fecha_nacimiento: string,
    telefono: string,
    is_empresa: boolean
  ) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.http
      .post<any>(
        this.baseApiUrl + 'users/register',
        {
          nombre,
          apellido,
          email,
          password,
          fecha_nacimiento,
          telefono,
          is_empresa,
        },
        { headers }
      )
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

  editUser(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    fecha_nacimiento: string,
    telefono: string
  ) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.http
      .post<any>(
        this.baseApiUrl + `users/${id}`,
        {
          nombre,
          apellido,
          email,
          password,
          fecha_nacimiento,
          telefono,
        },
        { headers }
      )
      .pipe(share());
  }

  showFullUserInfo(userId: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .get<User>(this.baseApiUrl + `users/${userId}`, { headers })
      .pipe(share());
  }

  addFriend(telefono_friend: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `users/addFriend`,
        {
          telefono_friend,
        },
        { headers }
      )
      .pipe(share());
  }

  deleteFriend(userId: number, telefono_friend: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `users/deleteFriend/${userId}`,
        {
          telefono_friend,
        },
        { headers }
      )
      .pipe(share());
  }

  // ---------------- USERS ENDS -----------------------

  // ---------------- PUBLICATIONS ENDS -----------------------
  getAllPublications(
    page: number = 1,
    size: number = 6,
    es_necesidad: boolean = true
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .get<PublicationPageInfo>(
        this.baseApiUrl +
          `publicaciones?page=${page}&size=${size}&es_necesidad=${es_necesidad}`,
        { headers }
      )
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

  createPublication(
    descripcion: string,
    cantidad_tiempo: number,
    unidad_tiempo: string,
    precio: number,
    fecha_limite: string,
    ver_todos: boolean,
    es_necesidad: boolean,
    foto: string
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `publicaciones/store`,
        {
          descripcion,
          categoria_id: 0,
          cantidad_tiempo,
          unidad_tiempo,
          precio,
          fecha_limite,
          ver_todos,
          es_necesidad,
          foto,
          activa: true,
        },
        { headers }
      )
      .pipe(share());
  }

  // publicaciones/mis_publicaciones?page=1&size=10&es_necesidad=true&activa=true
  getMyPublications(
    page: number,
    size: number,
    es_necesidad: boolean,
    activa: boolean
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .get<PublicationPageInfo>(
        this.baseApiUrl +
          `publicaciones/mis_publicaciones?page=${page}&size=${size}&es_necesidad=${es_necesidad}&activa=${activa}`,
        { headers }
      )
      .pipe(share());
  }

  editPublication(publication: any) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .put<any>(
        this.baseApiUrl + `publicaciones/${publication.id}`,
        publication,
        {
          headers,
        }
      )
      .pipe(share());
  }

  getPublicationById(publicationId: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .get<PublicationPageInfo>(
        this.baseApiUrl + `publicaciones/${publicationId}`,
        { headers }
      )
      .pipe(share());
  }

  getOffersByPublicationId(publicationId: number, page: number, size: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .get<PublicationPageInfo>(
        this.baseApiUrl +
          `ofertas/getOfertaPublicacion/${publicationId}?page=${page}&size=${size}`,
        { headers }
      )
      .pipe(share());
  }

  createOffer(
    publicationId: number,
    descripcion: string,
    cantidad_tiempo: number,
    unidad_tiempo: string,
    precio: number,
    foto: string
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `ofertas/store/${publicationId}`,
        {
          descripcion,
          cantidad_tiempo,
          unidad_tiempo,
          precio,
          foto,
        },
        {
          headers,
        }
      )
      .pipe(share());
  }

  acceptOffer(
    publicationId: number,
    descripcion: string,
    cantidad_tiempo: number,
    unidad_tiempo: string,
    precio: number,
    foto: string
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `ofertas/elegir_oferta/${publicationId}`,
        {
          descripcion,
          categoria_id: 0,
          cantidad_tiempo,
          unidad_tiempo,
          precio,
          foto,
        },
        {
          headers,
        }
      )
      .pipe(share());
  }

  rejectOffer(
    publicationId: number,
    descripcion: string,
    cantidad_tiempo: number,
    unidad_tiempo: string,
    precio: number,
    foto: string
  ) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `ofertas/rechazar_oferta/${publicationId}`,
        {
          descripcion,
          categoria_id: 0,
          cantidad_tiempo,
          unidad_tiempo,
          precio,
          foto,
        },
        {
          headers,
        }
      )
      .pipe(share());
  }

  getOfferById(offerId: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .get<any>(this.baseApiUrl + `ofertas/${offerId}`, { headers })
      .pipe(share());
  }

  reactivatePublication(publicationId: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http
      .post<any>(
        this.baseApiUrl + `publicaciones/reactivar/${publicationId}`,
        {},
        {
          headers,
        }
      )
      .pipe(share());
  }
}
