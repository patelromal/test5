import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";

@Injectable()
export class LoaderService {
    private loaderState$ = new Subject<number>();
    public readonly loaderState: Observable<number> = this.loaderState$.asObservable();

    // Track the number of outstanding AJAX requests.  Cannot use a boolean here
    // because during overlapping requests, the first request to return will update
    // the state to false.
    private inProgress: number = 0;
    private subscriptions: Subscription[] = [];

    constructor() { }

    public start() {
        // The loading animation should only appear if the request has been outstanding
        // for 200ms or more to avoid flickering.
        this.subscriptions.push(Observable.timer(200).subscribe(() => {
            this.inProgress += 1;
            this.loaderState$.next(this.inProgress);
        }));
    }

    public end() {
        if (this.inProgress > 0) {
            this.inProgress -= 1;
        }

        this.loaderState$.next(this.inProgress);

        const subscription = this.subscriptions.pop();
        subscription.unsubscribe();
    }
}
