import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from "react-redux";
import { ApplicationState } from "../store";

export const useSelector: TypedUseSelectorHook<ApplicationState> = useReduxSelector;
