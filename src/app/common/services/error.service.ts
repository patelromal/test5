import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs/Rx";

@Injectable()
export class ErrorService {
    // Make the `subject` public here because this service is meant
    // solely to shuttle exception messages around
    public error$: BehaviorSubject<any> = new BehaviorSubject("");
    public readonly error: Observable<any> = this.error$.asObservable();

    constructor() { }
}
