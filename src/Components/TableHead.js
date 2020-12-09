import React from "react";

function TableHead(props) {
  const { sortById, sortByPhone, dynamicSort, user } = props;

  return (
    <thead>
      <tr className="column-heading-row">
        <th onClick={() => sortById(user.id)}>ID</th>
        <th onClick={() => dynamicSort("name")}>Name</th>
        <th onClick={() => dynamicSort("username")}>Username</th>
        <th onClick={() => dynamicSort("company")}>Company</th>
        <th>Focus</th>
        <th>Catchphrase</th>
        <th onClick={() => dynamicSort("website")}>Website</th>
        <th onClick={() => dynamicSort("email")}>Email</th>
        <th onClick={() => sortByPhone(user.phone)}>Phone</th>
        <th onClick={() => dynamicSort("city")}>City</th>
        <th onClick={() => dynamicSort("address")}>Address</th>
        <th onClick={() => dynamicSort("zipcode")}>Zipcode</th>
        <th onClick={() => dynamicSort("lat")}>Latitude</th>
        <th onClick={() => dynamicSort("lng")}>Longitude</th>
      </tr>
    </thead>
  );
}

export default TableHead;
