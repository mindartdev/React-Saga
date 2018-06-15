import { makeActionCreator } from "../utility";
export const GET_USERS = "GET_USERS";
export const getUsers = makeActionCreator(GET_USERS, "filters");
