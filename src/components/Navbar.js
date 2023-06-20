import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
// import {
//   faHome,
//   faInfoCircle,
//   faBriefcase,
//   faAddressBook
// } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ASAP Partners</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="nav-menu"></div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.title}></i>
                  {item.title}
                  <FontAwesomeIcon icon={item.icon} />
                </Link>
              </li>
            );
          })}
          <button> Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
