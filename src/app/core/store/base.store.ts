/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 9:38:21 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
  state$: Observable<T>;
  // tslint:disable-next-line: variable-name
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }
  get state(): T {
    return this._state$.getValue();
  }
  setState(nextState: T): void {
    this._state$.next(nextState);
  }
}
