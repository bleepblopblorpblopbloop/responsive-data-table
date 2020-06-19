import React from "react";
import ContentEditable from "react-contenteditable";
import TrashBin from "../Assets/images/trashBin.svg";

const User = (props) => {
  console.log(props);

  // filters the users by the string typed into the search bar
  const filtered = props.users.filter((user) => {
    console.log(user);
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
    <tbody>
      <tr key={props.user.id} style={{ marginBottom: "100px" }}>
        <td>{props.user.id}</td>
        {/* {data} */}
        <td>
          <div>
            {/* {user.name} */}
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.name}
            />
          </div>
        </td>
        <td>
          <div>
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.address}
            />
          </div>
        </td>
        <td>
          <div>
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.company}
            />
          </div>
        </td>
        <td>
          <div>
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.email}
            />
          </div>
        </td>
        <td>
          <div>
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.phone}
            />
          </div>
        </td>
        <td>
          <div>
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.username}
            />
          </div>
        </td>
        <td>
          <div>
            <ContentEditable
              innerRef={props.contentEditable}
              disabled={false}
              onChange={props.textChanged}
              html={props.user.website}
            />
          </div>
        </td>
        <td>
          {/* this onClick triggers the deleteUser method in Main.js, thus removing the user from the list */}
          <button>
            <img
              src={TrashBin}
              alt="delete icon"
              onClick={() => filtered(props.user.id)}
            />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
