import { all, takeLatest } from "redux-saga/effects";

import { PlanetsTypes } from "./planets/types";

import { load } from "./planets/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(PlanetsTypes.LOAD_REQUEST, load)]);
}
