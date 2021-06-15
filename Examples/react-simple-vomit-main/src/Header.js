import React, { Component } from 'react';
import './Header.css';

// component with prop - definition class based
class Header extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
