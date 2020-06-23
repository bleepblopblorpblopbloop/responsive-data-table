import React from "react";

// components
import ContentEditable from "react-contenteditable";
import DeleteButton from "./DeleteButton";

function TableRows(props) {
  console.log(props);

  const { query, html, deleteUser } = props;

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
    <tbody className="table-body">
      {/* maps over the users that match the string typed into the search bar */}
      {filtered.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              {/* the onChange handler function "textChanged", triggers the 
                    corresponding method in Main.js, */}
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "name", user.id)}
                html={user.name}
              />
            </td>
            <td>
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "username", user.id)}
                html={user.username}
              />
            </td>
            <td>
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "company", user.id)}
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
            </td>
            <td>
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "website", user.id)}
                html={user.website}
              />
            </td>
            <td>
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "email", user.id)}
                html={user.email}
              />
            </td>
            <td>
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "phone", user.id)}
                html={user.phone}
              />
            </td>
            <td>
              <ContentEditable
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "city", user.id)}
                html={user.city}
              />
              <ContentEditable
                className="shrunken-text"
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "address", user.id)}
                html={user.address}
              />
              <ContentEditable
                className="shrunken-text"
                disabled={false}
                onChange={(evt) => props.textChanged(evt, "latlng", user.id)}
                html={user.latLng}
              />
            </td>
            <td>
              <DeleteButton user={user} deleteUser={deleteUser} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableRows;
