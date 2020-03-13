/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 4:30:36 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Car } from '../interfaces';
@Injectable()
export class CarApi {
  private cars: Car[] = [];
  constructor() {}

  create(car: Car) {
    this.cars.push(car);
    return of(this.cars);
  }
  remove(car: Car) {
    this.cars = this.cars.filter(el => el.name !== car.name);
    return of(this.cars);
  }
}
