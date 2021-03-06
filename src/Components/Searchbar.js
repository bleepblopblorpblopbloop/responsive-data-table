import React, { Component } from "react";

// components
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

// stylesheets
import "../Assets/stylesheets/Searchbar.css";

class Searchbar extends Component {
  /** this onChange handler accepts input from the searchbar
   * search field and then passes that data to the setQuery
   * method */
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    const { query } = this.props;

    return (
      <div className="search-container">
        <InputGroup value={query} onChange={this.handleChange}>
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
