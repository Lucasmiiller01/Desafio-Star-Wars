import { call, put } from "redux-saga/effects";
import { Action } from "redux";

import { getById } from "../../../services/planets";
import { loadFailure, loadSuccess } from "./actions";

export interface CustomAction extends Action {
  type: string;
  payload: number;
}

export function* load({ payload }: CustomAction) {
  try {
    const { data } = yield call(getById, payload);
    console.log(data);
    yield put(loadSuccess({ id: payload, ...data }));
  } catch (error) {
    yield put(loadFailure());
  }
}
