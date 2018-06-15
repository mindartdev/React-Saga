import { makeActionCreator } from "../utility";
export const SHOW_PICTURES = "SET_USERS";
export const showPictures = makeActionCreator(SHOW_PICTURES, "pics");
