import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { GET_USERS, setUsers } from "./../actions";

export function* usersSaga() {
  const req = yield take(GET_USERS);

  const url = fetchUsersUrl(req.filters);
  //const url = `https://jsonplaceholder.typicode.com/users`;
  const response = yield call(fetch, url);

  const data = yield apply(response, response.json);

  yield put(setUsers(data));
}
const fetchUsersUrl = filters => {
  if (filters) {
    if (filters.id) {
      return `https://jsonplaceholder.typicode.com/users?id=${filters.id}`;
    }
  } else {
    return `https://jsonplaceholder.typicode.com/users`;
  }
  //return `https://jsonplaceholder.typicode.com/users`;
};
