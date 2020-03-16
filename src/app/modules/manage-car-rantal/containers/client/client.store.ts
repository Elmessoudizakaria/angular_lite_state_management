/*
 * Created Date: Monday March 16th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 16th 2020 9:36:30 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Injectable } from '@angular/core';
import { ManageCarRantalFacade } from '../../shared/services/manage-car-rantal-facade.service';
import { Store } from 'src/app/core/store';
import { ClientState } from '../../shared/store';
import { Subscription, BehaviorSubject } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Client, Car } from '../../shared/interfaces';
import { map } from 'rxjs/operators';
@Injectable()
export class ClientStore extends Store<ClientState> {
  private subscriptions: Subscription[] = [];
  public form$ = new BehaviorSubject<FormGroup>(
    this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      car: ['', Validators.required],
    })
  );
  public clients$ = new BehaviorSubject<Client[]>([]);
  public cars$ = new BehaviorSubject<Car[]>([]);
  constructor(
    private manageCarRantalFacadeService: ManageCarRantalFacade,
    private fb: FormBuilder
  ) {
    super(new ClientState());
  }

  addClient$(client: Client) {
    client.id = this.state.currentId;
    this.subscriptions.push(
      this.manageCarRantalFacadeService.clientService
        .create(client)
        .pipe(
          map(clients => {
            this.clients$.next(clients);
            return this.setState({
              ...this.state,
              clients,
              currentId: this.state.currentId + 1,
            });
          })
        )
        .subscribe()
    );
  }
  removeClient$(client: Client) {
    this.subscriptions.push(
      this.manageCarRantalFacadeService.clientService
        .remove(client)
        .pipe(
          map(clients => {
            this.clients$.next(clients);
            return this.setState({
              ...this.state,
              clients,
            });
          })
        )
        .subscribe()
    );
  }

  getCars$() {
    this.cars$.next(this.state.cars);
  }
  updateCardDispo(carId: number) {
    this.manageCarRantalFacadeService.carService
      .updateDispo(carId)
      .pipe(
        map(cars => {
          this.cars$.next(cars);
          this.setState({
            ...this.state,
            cars,
          });
        })
      )
      .subscribe();
  }
}
