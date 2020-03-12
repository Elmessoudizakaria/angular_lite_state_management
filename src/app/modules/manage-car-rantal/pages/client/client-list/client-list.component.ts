/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:54:50 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../../shared/interfaces';
@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListPageComponent {
  @Input() clients: Client[];

  @Output() remove = new EventEmitter();
  removeClient(index: number) {
    this.remove.emit(index);
  }
}
