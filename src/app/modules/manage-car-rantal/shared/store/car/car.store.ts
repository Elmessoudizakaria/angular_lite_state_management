import { Store } from 'src/app/core/store';
import { CarState } from './car.state';
import { Car } from '../../interfaces';
import { CarApi } from '../../apis';
import { map } from 'rxjs/operators';

/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 3:01:03 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
export class CarStore extends Store<CarState> {
  constructor(private carApi: CarApi) {
    super(new CarState());
  }

  addCar(car: Car) {
    this.carApi.create(car).pipe(
      map(cars =>
        this.setState({
          ...this.state,
          cars,
        })
      )
    );
  }
  removeCar(car: Car) {
    this.carApi.remove(car).pipe(
      map(cars =>
        this.setState({
          ...this.state,
          cars,
        })
      )
    );
  }
}
