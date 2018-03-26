import React, { Component } from 'react';

import './linkTable.css';
import { urlForLink, imageUrlForLink } from '../../linkController.js';

class LinkTable extends Component {

  render() {

    var rows = [];

    for (var i = 0; i < this.props.dataSource.length; i++) {

      rows.push(<LinkRow key={this.props.dataSource[i].name} link={this.props.dataSource[i]} />);

    }

    return(

      <div>
        <table className="link-table">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>

    )

  }

}

class LinkRow extends Component {

  launch() {

    window.location = urlForLink(this.props.link);

  }

  render() {

    return(

      <tr className="link-row" onClick={() => this.launch()}>
        <LinkIconCell link={this.props.link} />
        <LinkDetailCell link={this.props.link} />
      </tr>

    );

  }

}

class LinkIconCell extends Component {

  render() {

    var url = imageUrlForLink(this.props.link);

    return(

      <td className="link-cell link-icon-cell">
        <img className="link-icon-image" src={url} alt={this.props.link.name} />
      </td>

    );

  }

}

class LinkDetailCell extends Component {

  descriptionForLink(link) {

    if (link.desc === undefined) {

      return urlForLink(link);

    }

    return link.desc + " | " + urlForLink(link);

  }


  render() {

    return(

      <td className="link-cell link-detail-cell">
        <b>{this.props.link.name}</b>
        <br />
        {this.descriptionForLink(this.props.link)}
      </td>

    );

  }

}

export default LinkTable;
