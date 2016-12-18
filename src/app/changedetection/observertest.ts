import {Injectable, } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class CalendarService {

dataChange: Observable<any>;
dataChangeObserver: Observer<any>;

constructor() {
    this.dataChange = new Observable((observer) => {
        this.dataChangeObserver = observer;
    }).share();
}

setDate(date: any) {
    this.dataChangeObserver.next(date);
}
}