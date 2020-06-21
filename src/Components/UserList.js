import React from "react";
import ContentEditable from "react-contenteditable";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Assets/stylesheets/UserList.css";

const UserList = (props) => {
  const { html, query } = props;

  // filters the users by the string typed into the search bar
  const filtered = html.filter((user) => {
    if (
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.username.toLowerCase().includes(query.toLowerCase()) ||
      user.address.toLowerCase().includes(query.toLowerCase()) ||
      user.company.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.phone.toLowerCase().includes(query.toLowerCase()) ||
      user.website.toLowerCase().includes(query.toLowerCase())
    ) {
      return true;
    }
    return null;
  });

  return (
    <Table className="table" responsive="sm" borderless size="sm">
      <thead>
        <tr className="column-heading-row">
          <th className="column-headings">ID</th>
          <th className="column-headings">Name</th>
          <th className="column-headings">Username</th>
          <th className="column-headings">Company</th>
          <th className="column-headings">Website</th>
          <th className="column-headings">Email</th>
          <th className="column-headings">Phone</th>
          <th className="column-headings">Address</th>
        </tr>
      </thead>
      <tbody className="table-body">
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
                    className="shrunken-text"
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "catchPhrase", user.id)
                    }
                    html={user.catchPhrase}
                  />
                  <ContentEditable
                    className="shrunken-text"
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
                    // className="bolder-text"
                    disabled={false}
                    onChange={(evt) => props.textChanged(evt, "city", user.id)}
                    html={user.city}
                  />
                  <ContentEditable
                    className="shrunken-text"
                    disabled={false}
                    onChange={(evt) =>
                      props.textChanged(evt, "address", user.id)
                    }
                    html={user.address}
                  />
                  <ContentEditable
                    className="shrunken-text"
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
                    variant="outline-light"
                    size="sm"
                    onClick={() => props.filterUsers(user.id)}
                  >
                    Delete User
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
