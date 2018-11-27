import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ModalService {
    private subject = new Subject<any>();

    constructor() { }

	public getModalStatus() {
		return this.subject.asObservable();
	}

	public show(id) {
        this.subject.next({ elemId: id, shown: true });
	}

	public hide(id) {
        this.subject.next({ elemId: id, shown: false });
	}
}
