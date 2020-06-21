import React, { Component } from "react";
import axios from "axios";

// stylesheets
import "../Assets/stylesheets/Main.css";

// components
import UserList from "./UserList";
import SearchBar from "./Searchbar";
import LogoTag from "./LogoTag";
import SortButtons from "./SortButtons";

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
          const newObj = {};
          newObj.id = el.id;
          newObj.name = el.name;
          newObj.username = el.username;
          newObj.company = el.company.name;
          newObj.catchPhrase = el.company.catchPhrase;
          newObj.bs = el.company.bs;
          newObj.website = el.website;
          newObj.email = el.email;
          newObj.phone = el.phone;
          newObj.address =
            el.address.suite +
            ", " +
            el.address.street +
            " " +
            el.address.zipcode;
          newObj.city = el.address.city;
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

  /** 
  // Function to sort table columns alphabetically and then set state.users with the new order
  * @param {string} field - item field name from a specific object in users array
  */
  dynamicSort = (field) => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => {
      if (this.state.sortAscending) {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    });

    this.setState({
      sortAscending: !this.state.sortAscending,
      users: sorted,
    });
  };

  // sortByPhone sorts users by their phone number, starting with the area code, and then sets state.users with the new order
  sortByPhone = (el) => {
    const sorted = [...this.state.users];

    /** this series of functions removes all non-digit characters
     * and phone extensions allowing us to sort by the phone
     * numbers area code */
    sorted.sort((a, b) => {
      const aOnlyX = a.phone.replace(/[^0-9\x]/g, "");

      let noXA = "";
      if (aOnlyX.includes("x") === true) {
        noXA = aOnlyX.slice(0, aOnlyX.indexOf("x"));
      } else if (aOnlyX.includes("x") === false) {
        noXA = aOnlyX;
      }
      let newA = noXA.slice(-10);

      const bOnlyX = b.phone.replace(/[^0-9\x]/g, "");
      let noXB = "";
      if (bOnlyX.includes("x") === true) {
        noXB = bOnlyX.slice(0, bOnlyX.indexOf("x"));
      } else if (bOnlyX.includes("x") === false) {
        noXB = bOnlyX;
      }
      let newB = noXB.slice(-10);

      if (this.state.sortAscending) {
        return newA - newB;
      } else {
        return newB - newA;
      }
    });

    this.setState({
      sortAscending: !this.state.sortAscending,
      users: sorted,
    });
  };

  /**
   // Function to update state with new field value from contentEditable field
   * @param {object} evt - the target event property returns the element that triggered the event
   * @param {string} field- item field name from a specific object in users array
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
    const { query, users } = this.state;
    return (
      <div className="main">
        <div>
          <LogoTag />
          <div className="logo-search-container">
            <SearchBar setQuery={this.setQuery} query={query} />
          </div>
          <div className="button-container">
            <SortButtons
              users={users}
              sortById={this.sortById}
              dynamicSort={this.dynamicSort}
              sortByPhone={this.sortByPhone}
            />
          </div>
        </div>
        <div className="user-list-container">
          <UserList
            filterUsers={this.deleteUser}
            query={query}
            textChanged={this.textChanged}
            html={users}
          />
        </div>
      </div>
    );
  }
}

export default Main;
