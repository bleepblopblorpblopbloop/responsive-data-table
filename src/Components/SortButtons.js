import React from "react";

// components
import Button from "react-bootstrap/Button";

// stylesheets
import "../Assets/stylesheets/SortButtons.css";

const SortButtons = (props) => {
  const { id, phone } = props.users;

  return (
    <div>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.sortById(id)}
      >
        User Id
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("name")}
      >
        Name
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("username")}
      >
        Username
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("company")}
      >
        Company
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("website")}
      >
        Website
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("email")}
      >
        Email
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.sortByPhone(phone)}
      >
        Phone
      </Button>
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.dynamicSort("city")}
      >
        City
      </Button>
    </div>
  );
};

export default SortButtons;
