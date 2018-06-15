import React from "react";

export const UserItem = ({ user }) => (
  <p>
    Name: {user.name}
    <br />
    Address: {user.address.street}, {user.address.suite},
    {user.address.city}, {user.address.zipcode}
    <br />
    Phone: {user.phone}
  </p>
);
