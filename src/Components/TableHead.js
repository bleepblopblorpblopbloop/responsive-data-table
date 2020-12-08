import React from "react";

function TableHead() {
  return (
    <thead>
      <tr className="column-heading-row">
        <th className="column-headings">ID</th>
        <th className="column-headings">Name</th>
        <th className="column-headings">Username</th>
        <th className="column-headings">Company</th>
        <th className="column-headings">Focus</th>
        <th className="column-headings">Catchphrase</th>
        <th className="column-headings">Website</th>
        <th className="column-headings">Email</th>
        <th className="column-headings">Phone</th>
        <th className="column-headings">City</th>
        <th className="column-headings">Address</th>
        <th className="column-headings">Zipcode</th>
        <th className="column-headings">Latitude</th>
        <th className="column-headings">Longitude</th>
      </tr>
    </thead>
  );
}

export default TableHead;
