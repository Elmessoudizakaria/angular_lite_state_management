/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 3:59:02 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Component } from '@angular/core';
import { CarFacade } from './car.facade';
@Component({
  templateUrl: './car.container.html',
  styleUrls: ['./car.container.scss'],
})
export class CarContainerComponent {
  constructor(public carFacade: CarFacade) {}
  ngOnInit(): void {
    this.carFacade.getCars();
  }
}
