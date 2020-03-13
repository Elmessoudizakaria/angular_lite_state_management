import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/store';
import { ClientState } from './client.state';
import { Client } from '../../interfaces';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientApi } from '../../apis';

/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 9:45:24 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */

@Injectable()
export class ClientStore extends Store<ClientState> {
  private subscriptions: Subscription[] = [];
  public form$ = new BehaviorSubject<FormGroup>(
    this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  );
  constructor(private fb: FormBuilder, private clientApi: ClientApi) {
    super(new ClientState());
  }
  /**
   * action to add client
   */
  addClient$(client: Client) {
    client.id = this.state.currentId;
    this.subscriptions.push(
      this.clientApi
        .create(client)
        .pipe(
          map(el =>
            this.setState({
              ...this.state,
              clients: el,
              currentId: this.state.currentId + 1,
            })
          )
        )
        .subscribe()
    );
  }
  /**
   * action to remove a client from client list
   */
  removeClient$(client: Client) {
    this.subscriptions.push(
      this.clientApi
        .remove(client)
        .pipe(
          map(el =>
            this.setState({
              ...this.state,
              clients: el,
            })
          )
        )
        .subscribe()
    );
  }

  onNgDetroy() {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
