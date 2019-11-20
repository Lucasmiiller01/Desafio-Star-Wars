import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {

}

const sagaMiddleware = createSagaMiddleWare();
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;