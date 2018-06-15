import { createReducer } from "./../utility";
import { fromJS } from "immutable";
import { SHOW_PICTURES } from "../actions";

export const pics = createReducer([], {
  [SHOW_PICTURES](state, { pics }) {
    debugger;
    return fromJS(pics);
  }
});
