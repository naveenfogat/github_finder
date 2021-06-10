import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-success">
      <h1>
        <i className={props.icon} /> {""}
        {props.title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "fas fa-code-branch",
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
