import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#search" onClick={() => props.handlePageChange("Search")} className="nav-link">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a href="#saved" onClick={() => props.handlePageChange("Saved")} className="nav-link">
          Saved
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
