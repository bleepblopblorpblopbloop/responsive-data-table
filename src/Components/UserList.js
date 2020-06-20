import React from "react";
import ContentEditable from "react-contenteditable";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

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
    <Table responsive borderless hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Company</th>
          <th>Website</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
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
                    //   onChange={updateCell}
                    onChange={() => props.textChanged(user.company)}
                    html={user.company}
                  />
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    //   onChange={updateCell}
                    onChange={() => props.textChanged(user.catchPhrase)}
                    html={user.catchPhrase}
                  />
                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    //   onChange={updateCell}
                    onChange={() => props.textChanged(user.bs)}
                    html={user.bs}
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
                    onChange={() => props.textChanged(user.address)}
                    html={user.address}
                  />

                  <ContentEditable
                    innerRef={props.contentEditable}
                    disabled={false}
                    // onChange={updateCell}
                    onChange={() => props.textChanged(user.address)}
                    html={user.latLng}
                  />
                </div>
              </td>
              <td>
                <>
                  {/* this onClick triggers the deleteUser method in Main.js, thus removing the user from the list */}
                  <Button
                    variant="outline-danger"
                    onClick={() => props.filterUsers(user.id)}
                  >
                    X
                  </Button>
                </>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserList;
