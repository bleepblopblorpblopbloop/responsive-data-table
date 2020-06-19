import React from "react";
import User from "./User";
// import ContentEditable from "react-contenteditable";

const UserList = (props) => {
  console.log(props.html);

  //   // filters the users by the string typed into the search bar
  //   const filtered = props.users.filter((user) => {
  //     if (
  //       user.name.toLowerCase().includes(props.query.toLowerCase()) ||
  //       user.username.toLowerCase().includes(props.query.toLowerCase()) ||
  //       user.address.toLowerCase().includes(props.query.toLowerCase()) ||
  //       user.company.toLowerCase().includes(props.query.toLowerCase()) ||
  //       user.email.toLowerCase().includes(props.query.toLowerCase()) ||
  //       user.phone.toLowerCase().includes(props.query.toLowerCase()) ||
  //       user.website.toLowerCase().includes(props.query.toLowerCase())
  //     ) {
  //       return true;
  //     }
  //     return null;
  //   });

  console.log(props);

  const sortThings = (a, b) => {
    return b.match(/\d+/)[0] - a.match(/\d+/)[0];
  };

  return (
    <table
      style={{
        marginLeft: "10%",
        transform: "translate(-5%)",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.users)
          .sort(sortThings)
          .map(
            (userId) => (
              console.log(userId),
              (
                <User
                  user={userId}
                  users={props.users}
                  query={props.query}
                  //   filtered={filtered}
                  textChanged={props.textChanged}
                />
              )
            )
          )}
      </tbody>
    </table>
  );
};

export default UserList;
