import React, { Component } from 'react';
import NavItem from './NavItem';

class NavOptions extends Component {

  render() {
    return (
      <div>
        <NavItem id="home" />
        <NavItem id="arithmophile" />
      </div>
    );
  }
}

export default NavOptions; 

