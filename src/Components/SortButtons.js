import React from "react";

// components
import SortButton from "./SortButton";
import Button from "react-bootstrap/Button";

// stylesheets
import "../Assets/stylesheets/SortButtons.css";

const SortButtons = (props) => {
  const { id, phone } = props.users;

  return (
    <div className="buttons">
      {/* the onClick handler function "sortById", triggers the 
                corresponding method in Main.js, */}
      <Button
        className="btn"
        variant="outline-light"
        size="sm"
        onClick={() => props.sortById(id)}
      >
        User Id
      </Button>
      {/* the onClick handler function "dynamicSort", triggers the 
                corresponding method in Main.js, */}
      <SortButton
        dynamicSort={props.dynamicSort}
        onClick={() => props.dynamicSort("name")}
      >
        Name
      </SortButton>
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
      {/* the onClick handler function "sortByPhone", triggers the 
                corresponding method in Main.js, */}
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
