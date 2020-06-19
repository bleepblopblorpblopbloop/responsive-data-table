import React, { Component } from "react";
import axios from "axios";

// components
import UserList from "../Components/UserList";
import SearchBar from "../Components/Searchbar";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      query: "",
    };

    // this.inputRef = React.createRef();
  }

  contentEditable = React.createRef();

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
          newObj.company =
            el.company.name +
            ", " +
            el.company.bs +
            ", " +
            el.company.catchPhrase;
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
            el.address.city +
            ", lat:" +
            el.address.geo.lat +
            ", lng:" +
            el.address.geo.lng;
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
    sorted.sort((a, b) => a.id - b.id);

    this.setState({
      users: sorted,
    });
  };

  // sortByIdReverse sorts users by their Id number and then sets state.users with the new order
  sortByIdReverse = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => b.id - a.id);

    this.setState({
      users: sorted,
    });
  };

  // sortByNameAToZ sorts users alphabetically and then sets state.users with the new order
  sortByNameAToZ = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      users: sorted,
    });
  };

  // sortByNameZToA sorts users alphabetically and then sets state.users with the new order
  sortByNameZToA = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => b.name.localeCompare(a.name));

    this.setState({
      users: sorted,
    });
  };

  // sortByBusinessNameAToZ sorts users alphabetically and then sets state.users with the new order
  sortByBusinessNameAToZ = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => a.company.localeCompare(b.company));

    this.setState({
      users: sorted,
    });
  };

  // sortByBusinessNameZToA sorts users alphabetically and then sets state.users with the new order
  sortByBusinessNameZToA = () => {
    const sorted = [...this.state.users];
    sorted.sort((a, b) => b.company.localeCompare(a.company));

    this.setState({
      users: sorted,
    });
  };

  textChanged = (user) => {
    const users = [...this.state.users];
    users[user] = user;
    this.setState({ users });
    // });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>GrapeAlliance Coding Task</h1>
        <SearchBar setQuery={this.setQuery} query={this.state.query} />
        <button onClick={this.sortById}>User Id ⬆</button>
        <button onClick={this.sortByIdReverse}>User Id ⬇</button>
        <button onClick={this.sortByNameAToZ}>Name ⬆</button>
        <button onClick={this.sortByNameZToA}>Name ⬇</button>
        <button onClick={this.sortByBusinessNameAToZ}>Business Name ⬆</button>
        <button onClick={this.sortByBusinessNameZToA}>Business Name ⬇</button>
        <UserList
          filterUsers={this.deleteUser}
          query={this.state.query}
          textChanged={this.textChanged}
          contentEditable={this.contentEditable}
          html={this.state.users}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default Main;
