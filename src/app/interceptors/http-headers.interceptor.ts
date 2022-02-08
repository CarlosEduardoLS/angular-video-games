import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'd48ab3081emsh5cb2b509865e44dp1d107bjsn1d52756b1a7b',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '548fddd85a984c3a8c960b813ecbf45c',
      },
    });
    return next.handle(req);
  }
}
