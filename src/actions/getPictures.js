import { makeActionCreator } from "../utility";
export const GET_PICTURES = "GET_PICTURES";
export const getPictures = makeActionCreator(GET_PICTURES, "searchKey");
