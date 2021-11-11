import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private _allOffers$ = new BehaviorSubject<any[]>([]);
  private _offersPageInfo$ = new BehaviorSubject<any>({
    totalItems: 0,
    totalPages: 0,
    currentPage: 0,
  });

  constructor(private apiService: ApiService) { }

  get allOffers() {
    return this._allOffers$;
  }

  get offersPageInfo() {
    return this._offersPageInfo$;
  }

  getMyOffers(userId: number, page: number, size: number) {
    const obs = this.apiService.getMyOffers(userId, page, size);
    obs.subscribe((data) => {
      this._allOffers$.next(data.registros);
      this._offersPageInfo$.next({
        totalItems: data.totalItems,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      })
    });
    return obs;
  }
}
