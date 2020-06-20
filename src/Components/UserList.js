import React from "react";
import ContentEditable from "react-contenteditable";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Assets/stylesheets/UserList.css";

const UserList = (props) => {
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

  return (
    <Table className="table" responsive borderless size="sm">
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
          return (
            <tr key={user.id} style={{ marginBottom: "100px" }}>
              <td>{user.id}</td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) => props.textChanged(evt, "name", user.id)}
                    html={user.name}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "username", user.id)
                    }
                    html={user.username}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "company", user.id)
                    }
                    html={user.company}
                  />
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "catchPhrase", user.id)
                    }
                    html={user.catchPhrase}
                  />
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) => props.textChanged(evt, "bs", user.id)}
                    html={user.bs}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "website", user.id)
                    }
                    html={user.website}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) => props.textChanged(evt, "email", user.id)}
                    html={user.email}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) => props.textChanged(evt, "phone", user.id)}
                    html={user.phone}
                  />
                </div>
              </td>
              <td>
                <div>
                  <ContentEditable
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "address", user.id)
                    }
                    html={user.address}
                  />

                  <ContentEditable
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "latlng", user.id)
                    }
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
