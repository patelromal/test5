import { Injectable } from "@angular/core";
import { Cookie } from "ng2-cookies/ng2-cookies";
import * as jwt_decode from "jwt-decode";
import { HttpJWT } from "./httpjwt";
import { Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class EnvironmentService {
    constructor(private router: Router, private http: HttpJWT) {
    }

    public setEnvironment(client_service) {
        const headers = new Headers({"Content-Type" : "application/json"});
        const options = new RequestOptions({headers});
        const payload = JSON.stringify({client_service_id : client_service.id});

        // return this.http.post(`/environment_access/`, payload, options).map((response) => {
        //     document.cookie = "currentUser=" + encodeURIComponent(response.text()) + "; path=/";
        //     this.router.navigate(["/"]);
        // });
    }

    getCookie(): JSON | null {
        let cookie = Cookie.get('currentUser');
        if (!cookie) {
            return null;
        }

        let token = jwt_decode(cookie);
        return token;
    }

    public getUser() {
        let cookie = this.getCookie();
        if (!cookie) {
            return null;
        }

        return JSON.parse(cookie["user"]);
    }

    getClient(): JSON | null {
        let cookie = this.getCookie();
        if (!cookie) {
            return null;
        }
        return JSON.parse(cookie["client"]);
    }

    getSystemName(): string | null {
        let cookie = this.getCookie();
        if (!cookie) {
            return null;
        }
        return JSON.parse(cookie["system"]).name;
    }

    public getPermissions(): JSON | null {
        let cookie = this.getCookie();
        if (!cookie) {
            return null;
        }
        return JSON.parse(cookie["permissions"]);
    }

    public hasAccess(resource: string): boolean | false {
        let resources = [];
        let permissions = this.getPermissions();

        let cookie = this.getCookie();
        if (!cookie) {
            return null;
        }
        let system = JSON.parse(cookie["system"]);
        Object.keys(permissions).forEach((key) => {
            if (permissions[key]["resource"]["service_id"] === system.id && permissions[key]["flag_enabled"] === true) {
                resources.push(permissions[key]["resource"]["name"]);
            }
        });
        return resources.includes(resource);
    }
}
