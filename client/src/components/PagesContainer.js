import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Saved from "../pages/Saved/Saved";


class PagesContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSwitch = page => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Search":
        return <Search />;
      case "Saved":
        return <Saved />;
      default:
        return <Home />

    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {
          this.handleSwitch(this.state.currentPage)
        }
      </div>
    );
  }
}

export default PagesContainer;
