import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: { },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473',
            }
        });
        return next.handle(req);
    }

}

