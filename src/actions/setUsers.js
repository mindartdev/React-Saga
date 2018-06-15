import { makeActionCreator } from "../utility";
export const SET_USERS = "SET_USERS";
export const setUsers = makeActionCreator(SET_USERS, "users");
