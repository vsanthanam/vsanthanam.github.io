import React, { Component } from 'react';

import './headerBar.css';

class HeaderBar extends Component {

  render() {

    return (

      <div className="header-bar-container">
        <h1 className="header-bar-title">{this.props.title}</h1>
        <h2 className="header-bar-subtitle">{this.props.subtitle}</h2>
      </div>

    );

  }

}

export default HeaderBar;
