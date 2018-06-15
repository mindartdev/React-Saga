import { connect } from "react-redux";
import { UsersDisplay } from "./UsersDisplay";

import { usersSelector } from "./../../selectors";

const mapStateToProps = state => {
  const users = usersSelector(state);
  debugger;
  return users
    ? {
        users: [...users.toJS()],
        fetched: true
      }
    : {
        fetched: false
      };
};

export const UsersContainer = connect(mapStateToProps)(UsersDisplay);
