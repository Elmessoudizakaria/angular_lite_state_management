import { ClientState } from './client';
import { CarState } from './car';

/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 3:10:40 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
export class AppState {
  clientState = new ClientState();
  carState = new CarState();
}
