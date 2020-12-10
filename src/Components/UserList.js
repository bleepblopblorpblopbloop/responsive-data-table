import React from "react";

// components
import Table from "react-bootstrap/Table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

// stylesheets
import "../Assets/stylesheets/UserList.css";

const UserList = (props) => {
  console.log(props);

  const {
    html,
    query,
    filterUsers,
    textChanged,
    sortById,
    sortByPhone,
    dynamicSort,
  } = props;

  return (
    <div className="table-responsive">
      <Table className="table" responsive borderless size="sm">
        <TableHead
          sortById={sortById}
          sortByPhone={sortByPhone}
          dynamicSort={dynamicSort}
          user={html}
        />
        <TableBody
          query={query}
          deleteUser={filterUsers}
          textChanged={textChanged}
          html={html}
        />
      </Table>
    </div>
  );
};

export default UserList;
