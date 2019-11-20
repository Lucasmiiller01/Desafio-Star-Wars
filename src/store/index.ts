import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";

import { PlanetsState } from "./ducks/planets/types";
import { GameState } from "./ducks/game/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  planets: PlanetsState;
  game: GameState;
}

const sagaMiddleware = createSagaMiddleWare();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;
