/*
 * Created Date: Monday March 16th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 16th 2020 9:39:10 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Client, Car } from '../interfaces';
export class ClientState {
  clients: Client[] = [];
  currentId = 0;
  cars: Car[] = [
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
}
