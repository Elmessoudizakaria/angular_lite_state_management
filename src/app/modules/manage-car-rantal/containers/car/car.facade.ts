import { Injectable } from '@angular/core';
import { CarStore } from '../../shared/store';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../../shared/interfaces';

/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 4:56:28 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
@Injectable()
export class CarFacade {
  public cars$ = new BehaviorSubject<Car[]>(this.carStore.state.cars);
  constructor(public carStore: CarStore) {}

  getCars() {
    this.cars$.next(this.carStore.state.cars);
  }
}
