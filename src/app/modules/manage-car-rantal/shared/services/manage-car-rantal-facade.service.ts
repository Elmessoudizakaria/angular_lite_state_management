/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:57:06 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Injectable, Injector                          } from '@angular/core';
import { CarApi    , ClientApi                         } from '../apis'      ;
import { Car       , Client   , IManageCarRantalFacade } from '../interfaces';
@Injectable()
export class ManageCarRantalFacade implements IManageCarRantalFacade {
  private _clientService: ClientApi;
  public get clientService() {
    if (!this._clientService) {
      this._clientService = this.injector.get(ClientApi);
    }
    return this._clientService;
  }

  private _carService: CarApi;
  public get carService() {
    if (!this._carService) {
      this._carService = this.injector.get(CarApi);
    }
    return this._carService;
  }
  constructor(private injector: Injector) {}

  createCar(car: Car) {
    return this.carService.create(car);
  }
  removeCar(car: Car) {
    return this.carService.remove(car);
  }

  createClient(client: Client) {
    return this.clientService.create(client);
  }
  removeClient(client: Client) {
    return this.clientService.remove(client);
  }
}
