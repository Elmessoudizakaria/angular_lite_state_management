/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 9:03:34 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { ClientContainerComponent } from './client/client.container';
import { CarContainerComponent } from './car/car.container';
import { CarFacade } from './car/car.facade';

export const ManageCarRantalContainers: any[] = [
  ClientContainerComponent,
  CarContainerComponent,
];
export const ManageCarRantalFacades: any[] = [CarFacade];
