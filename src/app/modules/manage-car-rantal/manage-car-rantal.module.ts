/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:50:41 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ManageCarRantalContainers,
  ManageCarRantalFacades,
} from './containers';
import { ManageCarRantalRoutingModule } from './manage-car-rantal-routing.module';
import { ManageCarRantalPages } from './pages';
import { ClientApi } from './shared/apis';
import { ClientStore } from './shared/store';
@NgModule({
  declarations: [...ManageCarRantalPages, ...ManageCarRantalContainers],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManageCarRantalRoutingModule,
  ],
  providers: [...ManageCarRantalFacades, ClientApi, ClientStore],
})
export class ManageCarRantalModule {}
