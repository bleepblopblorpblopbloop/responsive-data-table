import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

// components
import UserList from "../Components/UserList";
import SearchBar from "../Components/Searchbar";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      query: "",
      sortAscending: true,
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
        <Jumbotron fluid>
          <Container>
            <div>
              <img
                src="../Assets/images/grapes.svg"
                alt="grapes"
                width="500"
                height="600"
              ></img>
              <h1>GrapeAlliance Coding Task</h1>
            </div>
          </Container>
        </Jumbotron>
        <SearchBar setQuery={this.setQuery} query={this.state.query} />
        <Button variant="outline-secondary" onClick={this.sortById}>
          User Id
        </Button>
        <Button variant="outline-secondary" onClick={this.sortByName}>
          Name
        </Button>
        <Button variant="outline-secondary" onClick={this.sortByBusinessName}>
          Company
        </Button>

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
