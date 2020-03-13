import { Component, Input } from '@angular/core';
import { Car } from '../../../shared/interfaces';

/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 4:38:07 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
})
export class CarListPageComponent {
  @Input() cars: Car[];
}
