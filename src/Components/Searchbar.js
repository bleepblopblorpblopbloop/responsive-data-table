import React, { Component } from "react";

class Searchbar extends Component {
  handleChange = (event) => {
    this.props.setQuery(event.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          name="query"
          value={this.props.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Searchbar;
