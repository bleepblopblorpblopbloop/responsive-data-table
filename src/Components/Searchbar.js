import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import "../Assets/stylesheets/Searchbar.css";

class Searchbar extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div className="search-container">
        <InputGroup
          // size="lg"
          value={this.props.query}
          onChange={this.handleChange}
        >
          <FormControl
            placeholder="Type here to search..."
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
    );
  }
}

export default Searchbar;
