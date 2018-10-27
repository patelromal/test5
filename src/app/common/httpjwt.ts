import { Injectable } from "@angular/core";
import { ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from "@angular/http";
import { appConfig } from "../app.config";

import { LoaderService } from "./services/loader.service";

import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { Cookie } from "ng2-cookies/ng2-cookies";

@Injectable()
export class HttpJWT extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private loaderService: LoaderService) {
        super(backend, defaultOptions);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.onStart();

        return super.get(appConfig.apiUrl + url, options)
            .catch((err) => this.handleError(err)).finally(() => this.onEnd());
    }

    public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.onStart();

        return super.post(appConfig.apiUrl + url, body, options)
            .catch((err) => this.handleError(err)).finally(() => this.onEnd());
    }

    public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.onStart();

        return super.put(appConfig.apiUrl + url, body, options)
            .catch((err) => this.handleError(err)).finally(() => this.onEnd());
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.onStart();

        return super.delete(appConfig.apiUrl + url, options)
            .catch((err) => this.handleError(err)).finally(() => this.onEnd());
    }

    // private helper methods

    private onStart() {
        this.loaderService.start();
    }

    private onEnd() {
        this.loaderService.end();
    }

    private handleError(error: any) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = "/login";
        }

        return Observable.throw(error._body);
    }
}

export function httpJWTFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, loaderService: LoaderService): Http {
    return new HttpJWT(xhrBackend, requestOptions, loaderService);
}

export let httpJWTProvider = {
    provide: HttpJWT,
    useFactory: httpJWTFactory,
    deps: [XHRBackend, RequestOptions, LoaderService],
};
