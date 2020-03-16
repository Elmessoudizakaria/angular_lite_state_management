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
  private cars: Car[] = [
    {
      id: 0,
      brand: 'Audi',
      name: 'A4',
      price: 369850,
      dispo: true,
    },
    {
      id: 1,
      brand: 'Audi',
      name: 'A3',
      price: 764432,
      dispo: true,
    },
    {
      id: 2,
      brand: 'Audi',
      name: 'A8',
      price: 865975,
      dispo: true,
    },
  ];
  constructor() {}

  create(car: Car) {
    this.cars.push(car);
    return of(this.cars);
  }
  remove(car: Car) {
    this.cars = this.cars.filter(el => el.name !== car.name);
    return of(this.cars);
  }
  updateDispo(carId: number) {
    this.cars = this.cars.map(el => {
      if (el.id === carId) {
        return Object.assign({}, el, { dispo: false });
      }
      return el;
    });
    console.log('service cars', this.cars);

    return of(this.cars);
  }
}
