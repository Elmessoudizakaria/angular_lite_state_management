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
import { of } from 'rxjs';
@Injectable()
export class ClientApi {
  private clients: Client[] = [];
  constructor() {}

  create(client: Client) {
    this.clients = [...this.clients, client];
    return of(this.clients);
  }
  remove(client: Client) {
    this.clients = this.clients.filter(el => el.id !== client.id);
    return of(this.clients);
  }
}
