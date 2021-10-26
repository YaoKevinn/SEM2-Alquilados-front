
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
}
