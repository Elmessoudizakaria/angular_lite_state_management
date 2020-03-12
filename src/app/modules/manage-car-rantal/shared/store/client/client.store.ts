import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/store';
import { ClientState } from './client.state';
import { Client } from '../../interfaces';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public form$ = new BehaviorSubject<FormGroup>(
    this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  );
  constructor(private fb: FormBuilder) {
    super(new ClientState());
  }
  /**
   * action to add client
   */
  addClient(client: Client): void {
    this.setState({
      ...this.state,
      clients: [...this.state.clients, client],
    });
  }
  removeClient(client: Client): void {
    this.setState({
      ...this.state,
      clients: this.state.clients.filter(el => el.name !== client.name),
    });
  }
}
