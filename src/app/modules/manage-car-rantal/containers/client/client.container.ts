/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:52:20 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Component   , OnDestroy, OnInit } from '@angular/core'          ;
import { Client                          } from '../../shared/interfaces';
import { ClientFacade                    } from './client.facade'        ;
@Component({
  templateUrl: './client.container.html',
  styleUrls: ['./client.container.scss'],
})
export class ClientContainerComponent implements OnInit, OnDestroy {
  constructor(public clientFacade: ClientFacade) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clientFacade.onNgDetroy();
  }

  create(client: Client) {
    this.clientFacade.create(client);
  }
  removeClient(client: Client) {
    this.clientFacade.remove(client);
  }
}
