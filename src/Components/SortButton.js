import React from "react";
import Button from "react-bootstrap/Button";

function SortButton(props) {
  return (
    <div>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("name")}
      >
        Name
      </Button>
    </div>
  );
}

export default SortButton;
