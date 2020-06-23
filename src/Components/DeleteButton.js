import React from "react";
import Button from "react-bootstrap/Button";

function DeleteButton(props) {
  const { user } = props;
  return (
    <>
      {/* the onClick  function "filterUsers" triggers the deleteUser 
      method in Main.js, thus removing the user from the list */}
      <Button
        variant="outline-light"
        size="sm"
        onClick={() => props.deleteUser(user.id)}
      >
        Delete User
      </Button>
    </>
  );
}

export default DeleteButton;
