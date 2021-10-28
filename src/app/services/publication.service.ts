
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PublicationPageInfo } from '../models/Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private _allPublications$ = new BehaviorSubject<any[]>([]);
  private _publicationsPageInfo$ = new BehaviorSubject<any>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });
  private _myNeedsPublications$ = new BehaviorSubject<any[]>([]);
  private _myNeedsPublicationsPageInfo$ = new BehaviorSubject<any>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  constructor(private apiService: ApiService) {
    this.getAllPublications(1, 6, true);
    // this._allPublications$.next([
    //     {
    //       id: 1,
    //       nombre: 'Juan',
    //       apellido: 'Perez',
    //       descripcion: 'Martillo',
    //       fecha_limite: '10/11/2021'
    //     },
    //     {
    //       id: 2,
    //       nombre: 'Juan',
    //       apellido: 'Perez',
    //       descripcion: 'Martillo',
    //       fecha_limite: '10/11/2021'
    //     },
    //     {
    //       id: 3,
    //       nombre: 'Juan',
    //       apellido: 'Perez',
    //       descripcion: 'Martillo',
    //       fecha_limite: '10/11/2021'
    //     },
    //     {
    //       id: 4,
    //       nombre: 'Juan',
    //       apellido: 'Perez',
    //       descripcion: 'Martillo',
    //       fecha_limite: '10/11/2021'
    //     },
    //     {
    //       id: 5,
    //       nombre: 'Juan',
    //       apellido: 'Perez',
    //       descripcion: 'Martillo',
    //       fecha_limite: '10/11/2021'
    //     },
    //     {
    //       id: 6,
    //       nombre: 'Juan',
    //       apellido: 'Perez',
    //       descripcion: 'Martillo',
    //       fecha_limite: '10/11/2021'
    //     },
    // ]);
  }

  get allPublications() {
    return this._allPublications$;
  }

  get publicationsPageInfo() {
    return this._publicationsPageInfo$;
  }

  get myNeedsPublications() {
    return this._myNeedsPublications$;
  }

  get myNeedsPublicationsPageInfo() {
    return this._myNeedsPublicationsPageInfo$;
  }

  getAllPublications(page: number, size: number, es_necesidad: boolean) {
    const obs = this.apiService.getAllPublications(page, size, es_necesidad);
    obs.subscribe((data: PublicationPageInfo) => {
      this._allPublications$.next(data.registros);
      this._publicationsPageInfo$.next({
        totalItems: data.totalItems,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      });
    });
    return obs;
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
    const obs = this.apiService.createPublication(
      descripcion,
      cantidad_tiempo,
      unidad_tiempo,
      precio,
      fecha_limite,
      ver_todos,
      es_necesidad,
      foto
    )
    // obs.subscribe((data) => {
    //   const newPublications = this._myNeedsPublications$.value;
    //   console.log(data);
    // });
    return obs;
  }

  getMyPublications(page: number, size: number, es_necesidad: boolean, activa: boolean) {
    const obs = this.apiService.getMyPublications(page, size, es_necesidad, activa);
    obs.subscribe((data) => {
      this._myNeedsPublications$.next(data.registros);
      this._myNeedsPublicationsPageInfo$.next({
        totalItems: data.totalItems,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      })
    });
    return obs;
  }

  editPublication(publication: any) {
    console.log('LLEGOOO')
    const obs = this.apiService.editPublication(publication);
    return obs;
  }

  getPublicationById(publicationId: number) {
    const obs = this.apiService.getPublicationById(publicationId);
    return obs;
  }

  getOffersByPublicationId(publicationId: number, page: number, size: number) {
    const obs = this.apiService.getOffersByPublicationId(publicationId, page, size);
    return obs;
  }

  createOffer(publicationId: number, descripcion: string, cantidad_tiempo: number, unidad_tiempo: string, precio: number, foto: string) {
    const obs = this.apiService.createOffer(publicationId, descripcion, cantidad_tiempo, unidad_tiempo, precio, foto);
    return obs;
  }

  acceptOffer(publicationId: number, descripcion: string, cantidad_tiempo: number, unidad_tiempo: string, precio: number, foto: string) {
    const obs = this.apiService.acceptOffer(publicationId, descripcion, cantidad_tiempo, unidad_tiempo, precio, foto);
    return obs;
  }

  rejectOffer(publicationId: number, descripcion: string, cantidad_tiempo: number, unidad_tiempo: string, precio: number, foto: string) {
    const obs = this.apiService.rejectOffer(publicationId, descripcion, cantidad_tiempo, unidad_tiempo, precio, foto);
    return obs;
  }

  getOfferById(offerId: number) {
    const obs = this.apiService.getOfferById(offerId);
    return obs;
  }

  reactivatePublication(publicationId: number) {
    const obs = this.apiService.reactivatePublication(publicationId);
    return obs;
  }


}
