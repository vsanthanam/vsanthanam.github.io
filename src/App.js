import React, { Component } from 'react';

import projectList from './dataSources/projectList.json';
import serviceList from './dataSources/serviceList.json';

import LinkController, { urlForLink } from './linkController.js';

import HeaderBar from './components/headerBar/headerBar.js';
import LinkSelector from './components/linkSelector/linkSelector.js';
import LinkTable from './components/linkTable/linkTable.js';
import FooterBar from './components/footerBar/footerBar.js';


import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    var initialController = new LinkController("projects", projectList);
    this.state = {currentController:initialController, dataSource:initialController.links};

    this.searchDataSource = this.searchDataSource.bind(this);
    this.showProjects = this.showProjects.bind(this);
    this.showServices = this.showServices.bind(this);

  }

  searchDataSource(event) {

    var filterString = document.getElementById("link-search-field").value;

    if (filterString !== "" && event.keyCode === 13 && this.state.dataSource.length > 0) {

      var link = this.state.dataSource[0];
      window.location = urlForLink(link);

    }

    var results = this.state.currentController.filteredLinks(filterString);

    this.setState({currentData:this.state.currentController, dataSource:results});

  }

  showProjects(event) {

    if (this.state.currentController.name !== "projects") {

      var controller = new LinkController("projects", projectList);

      this.setState({currentController:controller, dataSource:controller.links});

      this.clearSearchInput();
      this.focusSearchInput();

    }

  }

  showServices(event) {

    if (this.state.currentController.name !== "services") {

      var controller = new LinkController("services", serviceList);

      this.setState({currentController:controller, dataSource:controller.links});

      this.clearSearchInput();
      this.focusSearchInput();

    }

  }

  clearSearchInput() {

    document.getElementById("link-search-field").value = "";

  }

  focusSearchInput() {

    document.getElementById("link-search-field").focus();

  }

  componentDidMount() {

    this.focusSearchInput();

  }

  render() {

    var subtitle = "https://{" + this.state.currentController.name + "}.vsanthanam.com";

    return (

      <div>
        <HeaderBar title={this.state.currentController.name} subtitle={subtitle}/>
        <div className="content-container" filter="">
          <input type="text" className="link-table-search-input" id="link-search-field" placeholder="Type something and press return" onKeyUp={this.searchDataSource} />
          <LinkSelector name="Projects" emphasized={this.state.currentController.name === "projects"} onClick={this.showProjects}/>
          <LinkSelector name="Services" emphasized={this.state.currentController.name === "services"} onClick={this.showServices}/>
          <LinkTable dataSource={this.state.dataSource}/>
        </div>
        <FooterBar />
      </div>

    );

  }

}


export default App;
