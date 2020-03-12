/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:56:30 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Injectable      } from '@angular/core'          ;
import { BehaviorSubject } from 'rxjs'                   ;
import { Client          } from '../../shared/interfaces';
import { ClientStore     } from '../../shared/store'     ;

@Injectable()
export class ClientFacade {
  public form = this.clientStore.form$;
  public clients$ = new BehaviorSubject<Client[]>([]);
  public state = this.clientStore.state$;

  constructor(public clientStore: ClientStore) {}

  getClients$() {
    this.clients$.next(this.clientStore.state.clients);
  }
  create(client: Client) {
    this.clientStore.addClient(client);
    this.getClients$();
  }
  remove(index: number) {
    this.clientStore.removeClient(this.clientStore.state.clients[index]);
    this.getClients$();
  }
}
