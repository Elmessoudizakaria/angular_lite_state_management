import { Car } from './car.interface';
import { Client } from './client.interface';
import { Observable } from 'rxjs';

/*
 * Created Date: Monday March 16th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 16th 2020 9:28:18 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
export interface IManageCarRantalFacade {
  createCar(c: Car): Observable<Car[]>;
  removeCar(c: Car): Observable<Car[]>;
  createClient(c: Client): Observable<Client[]>;
  removeClient(c: Client): Observable<Client[]>;
}
