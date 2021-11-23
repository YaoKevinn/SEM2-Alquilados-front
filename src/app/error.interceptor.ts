import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  constructor( private dialog: MatDialog) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.dialog.open(ConfirmDialogComponent, {
            panelClass: 'user-modal-container',
            backdropClass: 'modal-backdrop',
            data: {
              title: 'Oops, algo salió mal',
              body: 'Por favor intentar nuevamente.'
            }
          });
        }
        return throwError(error);
      }),
    );
  }

}
