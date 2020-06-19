import React from "react";
import TrashBin from "../Assets/images/trashBin.svg";
import ContentEditable from "react-contenteditable";

const UserList = (props) => {
  console.log(props.html);

  // filters the users by the string typed into the search bar
  const filtered = props.html.filter((user) => {
    if (
      user.name.toLowerCase().includes(props.query.toLowerCase()) ||
      user.username.toLowerCase().includes(props.query.toLowerCase()) ||
      user.address.toLowerCase().includes(props.query.toLowerCase()) ||
      user.company.toLowerCase().includes(props.query.toLowerCase()) ||
      user.email.toLowerCase().includes(props.query.toLowerCase()) ||
      user.phone.toLowerCase().includes(props.query.toLowerCase()) ||
      user.website.toLowerCase().includes(props.query.toLowerCase())
    ) {
      return true;
    }
    return null;
  });

  console.log(props);

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
        {/* maps over the users which remain relevant to the string typed into the search bar */}
        {filtered.map((user) => {
          /* const updateCell = (event) => {
            user = event.target.value;
            props.textChanged(user);
            console.log(user);
          }; */

          const ref = props.contentEditable;

          return (
            <tr key={user.id} style={{ marginBottom: "100px" }}>
              <td>{user.id}</td>
              <td>
                <div>
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.name)}
                    html={user.name}
                    ref={ref}
                  />
                </div>
              </td>
              <td>
                <ContentEditable
                  innerRef={props.contentEditable}
                  disabled={false}
                  //   onChange={updateCell}
                  onChange={() => props.textChanged(user.company)}
                  html={user.company}
                />
              </td>
              <td>
                <div>
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.address)}
                    html={user.address}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.email)}
                    html={user.email}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.phone)}
                    html={user.phone}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.username)}
                    html={user.username}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.website)}
                    html={user.website}
                  />
                </div>
              </td>
              <td>
                {/* this onClick triggers the deleteUser method in Main.js, thus removing the user from the list */}
                <button>
                  <img
                    src={TrashBin}
                    alt="delete icon"
                    onClick={() => props.filterUsers(user.id)}
                  />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
