/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 9:56:55 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Injectable } from '@angular/core';
import { Client } from '../interfaces';
@Injectable()
export class ClientApi {
  private clients: Client[] = [];
  constructor() {}

  create(client: Client) {
    this.clients.push(client);
    return this.clients;
  }
  remove(index: number) {
    this.clients.splice(index, 1);
    return this.clients;
  }
}
