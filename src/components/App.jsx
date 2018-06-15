import { getStore } from "../getStore";
import React from "react";
import { Provider } from "react-redux";
// import {
//   UserInfoContainer,
//   UsersContainer,
//   PicturesContainer,
//   GridList
// } from "../components";
import {
  UsersContainer,
  PicturesContainer,
  GridList
} from "../components";
//import { getCurrentUserInfo, getUsers, getPictures } from "../actions";
import { getUsers, getPictures } from "../actions";
const store = getStore();
export const App = () => (
  <div>
    <Provider store={store}>
      <React.Fragment>
        <GridList />
        <PicturesContainer />
        <UsersContainer />
      </React.Fragment>
    </Provider>
  </div>
);

//store.dispatch(getCurrentUserInfo("1"));
//store.dispatch(getUsers({ id: 1 }));
store.dispatch(getUsers());
store.dispatch(getPictures());
