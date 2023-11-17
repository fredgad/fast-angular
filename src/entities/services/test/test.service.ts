import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public rxString$: BehaviorSubject<string> = new BehaviorSubject('Initial value');

  public setRxString(value: string): void {
    this.rxString$.next(value);
  }
}
