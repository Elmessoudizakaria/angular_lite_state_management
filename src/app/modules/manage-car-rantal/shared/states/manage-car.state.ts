import { ClientState } from './client.state';
import { CarState } from './car.state';

/*
 * Created Date: Monday March 16th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 16th 2020 11:07:21 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
export class AppState {
  clientState: ClientState;
  carState: CarState;

  public getClients = () => this.clientState.clients;
}
