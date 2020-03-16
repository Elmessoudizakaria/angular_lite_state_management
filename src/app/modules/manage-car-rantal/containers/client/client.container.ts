/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:52:20 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from '../../shared/interfaces';
import { ClientStore } from './client.store';
@Component({
  templateUrl: './client.container.html',
  styleUrls: ['./client.container.scss'],
})
export class ClientContainerComponent implements OnInit, OnDestroy {
  constructor(public clientStore: ClientStore) {}

  ngOnInit(): void {
    this.clientStore.getCars$();
  }

  ngOnDestroy(): void {
    // this.clientStore.onNgDetroy();
  }

  create(client: { name: string; email: string; car: string }) {
    this.clientStore.updateCardDispo(parseInt(client.car, 10));
    this.clientStore.addClient$({ name: client.name, email: client.email });
  }
  removeClient(client: Client) {
    this.clientStore.removeClient$(client);
  }
}
