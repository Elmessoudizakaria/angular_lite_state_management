/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 11:27:46 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Car } from '../../../shared/interfaces';
@Component({
  selector: 'app-client-form-page',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormPageComponent {
  @Input() form: FormGroup;
  @Input() cars: Car[];
  @Output() create = new EventEmitter();

  createClient() {
    this.create.emit(this.form.value);
  }
}
