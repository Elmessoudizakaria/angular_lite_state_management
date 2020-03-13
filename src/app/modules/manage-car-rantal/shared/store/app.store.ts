import { Store } from 'src/app/core/store';
import { AppState } from './app.state';

/*
 * Created Date: Thursday March 12th 2020
 * Author: zakaria EL MESSOUDI
 * -----
 * Last Modified: Thursday March 12th 2020 3:07:08 pm
 * Modified By: zakaria EL MESSOUDI
 * HISTORY:
 */
export class AppStore extends Store<AppState> {
  constructor() {
    super(new AppState());
  }
}
