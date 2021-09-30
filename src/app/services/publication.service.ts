import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private _allPublications$ = new BehaviorSubject<any[]>([]);

  constructor() {
    this._allPublications$.next([
        {
          id: 1,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021'
        },
        {
          id: 2,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021'
        },
        {
          id: 3,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021'
        },
        {
          id: 4,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021'
        },
        {
          id: 5,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021'
        },
        {
          id: 6,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021'
        },
    ]);
  }

  get allPublications() {
    return this._allPublications$;
  }

}
