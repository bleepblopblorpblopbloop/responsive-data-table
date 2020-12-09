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
  // constructor(props) {
  // super(props);

  state = {
    users: [],
    query: "",
    sortAscending: true,
  };
  // }

  // "get" request which retrieves data from the supplied API and then sets the state
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res);
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
          newObj.address = el.address.suite + ", " + el.address.street;
          newObj.zipcode = el.address.zipcode;
          newObj.city = el.address.city;
          newObj.lat = "lat: " + el.address.geo.lat;

          newObj.lng = "lng:" + el.address.geo.lng;
          return newObj;
        })
        .flat();
      this.setState({ users: users });
    });
  }

  /** Function that allows you to delete users from the user list */
  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((user) => {
        return user.id !== userId;
      }),
    });
  };

  /** Function that accepts data provided through the onChange handler for the search bar
   * and and then uses it to set state.query */
  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  /**  Function that sorts users by their Id number */
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
  // Function to sort table columns alphabetically 
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

  /** Function to sort users by their phone numbers area code */
  sortByPhone = (el) => {
    const sorted = [...this.state.users];

    sorted.sort((a, b) => {
      /** Function to remove all  non-digit characters except 'x' */
      const aOnlyX = a.phone.replace(/[^0-9\x]/g, "");

      /** Functions to remove all phone extensions */
      let noXA = "";
      if (aOnlyX.includes("x") === true) {
        noXA = aOnlyX.slice(0, aOnlyX.indexOf("x"));
      } else if (aOnlyX.includes("x") === false) {
        noXA = aOnlyX;
      }
      const bOnlyX = b.phone.replace(/[^0-9\x]/g, "");
      let noXB = "";
      if (bOnlyX.includes("x") === true) {
        noXB = bOnlyX.slice(0, bOnlyX.indexOf("x"));
      } else if (bOnlyX.includes("x") === false) {
        noXB = bOnlyX;
      }

      /** Functions to remove the country code */
      let newA = noXA.slice(-10);
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
            sortById={this.sortById}
            dynamicSort={this.dynamicSort}
            sortByPhone={this.sortByPhone}
          />
        </div>
      </div>
    );
  }
}

export default Main;
