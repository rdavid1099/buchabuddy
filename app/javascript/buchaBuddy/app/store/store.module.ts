import { DevToolsExtension, NgRedux, NgReduxModule } from "@angular-redux/store";
import { NgModule } from "@angular/core";

import { NavbarActions } from "../navbar/api/navbar.actions";
import { IAppState } from "./store.model";
import { INITIAL_STATE } from "./store.reducers";
import { rootReducer } from "./store.reducers";

@NgModule({
  imports: [NgReduxModule],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
  ) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [ ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : [],
    );
  }
}
