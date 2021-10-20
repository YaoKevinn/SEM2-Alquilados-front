import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  private _allNeeds$ = new BehaviorSubject<any[]>([]);

  constructor() {
    this._allNeeds$.next([
        {
          id: 4,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Microondas',
          fecha_limite: '10/12/2021',
          finalizado: false
        },
        {
          id: 5,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Tostadora',
          fecha_limite: '15/12/2021',
          finalizado: false
        },
        {
          id: 6,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Destornillador',
          fecha_limite: '20/12/2021',
          finalizado: false
        },
        {
          id: 1,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Martillo',
          fecha_limite: '10/11/2021',
          finalizado: true
        },
        {
          id: 2,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Caña de Pescar',
          fecha_limite: '22/11/2021',
          finalizado: true
        },
        {
          id: 3,
          nombre: 'Juan',
          apellido: 'Perez',
          descripcion: 'Micrófono',
          fecha_limite: '08/12/2021',
          finalizado: true
        }
    ]);
  }

  get allNeeds() {
    return this._allNeeds$;
  }

}
