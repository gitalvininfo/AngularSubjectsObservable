import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  data = new Subject<number>();

  dataBehaviour = new BehaviorSubject<number>(1232131);

  dataReplay = new ReplaySubject<number>(3);

  dataAsync = new AsyncSubject<number>();

  setData(value: number) {
    this.data.next(value);
  }

  setDataBehaviour(value: number) {
    this.dataBehaviour.next(value);
  }

  setDataReplay(value: number) {
    this.dataReplay.next(value);
  }

  setDataAsync(value: number) {
    this.dataAsync.next(value);
  }

}
