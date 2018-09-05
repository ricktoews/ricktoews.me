import React, { Component } from 'react';
import NavItem from './NavItem';

class NavOptions extends Component {

  render() {
    return (
      <div>
        <NavItem id="home" />
        <NavItem id="professional" />
        <NavItem id="bookshelf" />
        <NavItem id="travel" />
        <NavItem id="arithmophile" />
      </div>
    );
  }
}

export default NavOptions; 

