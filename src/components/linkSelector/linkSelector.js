import React, { Component } from 'react';

import './linkSelector.css';

class LinkSelector extends Component {

  render() {

    var className = this.props.emphasized ? "emphasized-selector-button" : "plain-selector-button";

    return(

      <button className={"link-selector-button " + className} onClick={this.props.onClick}>{this.props.name}</button>

    );

  }

}

export default LinkSelector;
