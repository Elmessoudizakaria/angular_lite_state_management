/*
 * Created Date: Monday March 9th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Monday March 9th 2020 8:55:57 am
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientContainerComponent } from './containers/client/client.container';
import { ManageCarRantalRoutesNames } from './manage-car-rantal.routes.names';

const routes: Routes = [
  {
    path: ManageCarRantalRoutesNames.ROOT,
    component: ClientContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCarRantalRoutingModule {}
