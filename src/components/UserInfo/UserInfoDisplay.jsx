import React from "react";
import { UserItem } from "./UserItem";
export const UserInfoDisplay = ({ users, fetched }) => (
  <div>
    <section className="current-user">
      {fetched ? (
        users.map(u => UserItem({ user: u }))
      ) : (
        <div>
          <p>Please wait while we fetch your user info.</p>
        </div>
      )}
    </section>
  </div>
);
