import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import HeaderLinks from "./HeaderLinks";

// import dashboardRoutes from "routes/dashboard.jsx";

class Header extends Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a >DashBoard</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <HeaderLinks  signout={this.props.logout}/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
