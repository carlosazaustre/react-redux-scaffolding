import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ appName }) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-4">
        <div className="container">
          <a href="/" className="brand-logo">{appName}</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Main</Link></li>
            <li><Link to="/section">Section</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  appName: PropTypes.string
};

Header.defaultProps = {
  appName: 'App Name'
};

export default Header;
