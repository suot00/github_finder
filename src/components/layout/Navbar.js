import React from 'react';
import ProTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github',
};
Navbar.ProTypes = {
  title: ProTypes.string.isRequired,
  icon: ProTypes.string.isRequired,
};
export default Navbar;
