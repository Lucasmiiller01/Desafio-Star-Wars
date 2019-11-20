import { action } from "typesafe-actions";
import { PlanetsTypes, Planet } from "./types";

export const loadRequest = (id: number) =>
  action(PlanetsTypes.LOAD_REQUEST, id);
export const loadSuccess = (data: Planet) =>
  action(PlanetsTypes.LOAD_SUCCESS, data);
export const loadFailure = () => action(PlanetsTypes.LOAD_FAILURE);
