import { createReducer } from "./../utility";
import { fromJS } from "immutable";
import { SET_USERS } from "../actions";

export const users = createReducer([], {
  [SET_USERS](state, { users }) {
    return fromJS(users);
  }
});
