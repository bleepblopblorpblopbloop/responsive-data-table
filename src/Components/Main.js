import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

// stylesheets
import "../Assets/stylesheets/Main.css";

// components
import UserList from "../Components/UserList";
import SearchBar from "../Components/Searchbar";
import LogoTag from "./LogoTag";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      query: "",
    };
  }

  // this axios "get" request retrieves data from the supplied API and then sets the state
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data
        .map((el) => {
          console.log(el);
          const newObj = {};
          newObj.id = el.id;
          newObj.name = el.name;
          newObj.username = el.username;
          newObj.company = el.company.name;
          newObj.bs = el.company.bs;
          newObj.catchPhrase = el.company.catchPhrase;
          newObj.website = el.website;
          newObj.email = el.email;
          newObj.phone = el.phone;
          newObj.address =
            el.address.suite +
            ", " +
            el.address.street +
            ", " +
            el.address.zipcode +
            " " +
            el.address.city;
          newObj.latLng =
            "lat: " + el.address.geo.lat + ", lng:" + el.address.geo.lng;
          return newObj;
        })
        .flat();
      this.setState({ users: users });
    });
  }

  // deleteUser allows the person using the website to delete users that appear in the user list
  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((user) => {
        return user.id !== userId;
      }),
    });
  };

  // setQuery sets state.query from information provided through the SearchBar
  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  // sortById sorts users by their Id number and then sets state.users with the new order
  sortById = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => {
      if (this.state.sortAscending) {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });

    this.setState({
      sortAscending: !this.state.sortAscending,
      users: sorted,
    });
  };

  // sortByNameAToZ sorts users alphabetically and then sets state.users with the new order
  sortByName = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => {
      if (this.state.sortAscending) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    this.setState({
      sortAscending: !this.state.sortAscending,
      users: sorted,
    });
  };

  // sortByBusinessNameAToZ sorts users alphabetically and then sets state.users with the new order
  sortByBusinessName = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => {
      if (this.state.sortAscending) {
        return a.company.localeCompare(b.company);
      } else {
        return b.company.localeCompare(a.company);
      }
    });

    this.setState({
      sortAscending: !this.state.sortAscending,
      users: sorted,
    });
  };

  /**
   * Function to update state with new field value from cintentEditable field
   * @param {object} evt - the target event property returns the element that triggered the event
   * @param {string} field - item field name from a specific object in users array
   * @param {number} id - item id of the target element
   */
  textChanged = (evt, field, id) => {
    this.setState((prevState) => {
      return {
        users: prevState.users.map((item) => {
          if (item.id === id) {
            return { ...item, [field]: evt.target.value };
          } else {
            return item;
          }
        }),
      };
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="main">
        <React.Fragment>
          <div>
            <div className="logo-search-container">
              <LogoTag />
              <SearchBar setQuery={this.setQuery} query={this.state.query} />
            </div>
            <Button variant="outline-light" onClick={this.sortById}>
              User Id
            </Button>
            <Button variant="outline-light" onClick={this.sortByName}>
              Name
            </Button>
            <Button variant="outline-light" onClick={this.sortByBusinessName}>
              Company
            </Button>
          </div>
        </React.Fragment>

        <UserList
          filterUsers={this.deleteUser}
          query={this.state.query}
          textChanged={this.textChanged}
          html={this.state.users}
        />
      </div>
    );
  }
}

export default Main;
