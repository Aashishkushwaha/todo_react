import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage";
import SideDrawer from "./components/SideDrawer";
import AddItemPage from "./components/AddItemPage";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: true,
      displayAddItem: true
    };
  }

  sideDrawerHandler = () => {
    this.setState(
      prevState => {
        return {
          displayDrawer: !prevState.displayDrawer
        };
      },
      () => {}
    );

    this.display = this.state.displayDrawer ? (
      <SideDrawer
        sideDrawerHandler={this.sideDrawerHandler}
        addItemHandler={this.addItemHandler}
      />
    ) : (
      <HomePage
        addItemHandler={this.addItemHandler}
        sideDrawerHandler={this.sideDrawerHandler}
      />
    );
  };

  addItemHandler = () => {
    this.setState(
      prevState => {
        return {
          displayAddItem: !prevState.displayAddItem,
          displayDrawer: true
        };
      },
      () => {}
    );
    this.display = this.state.displayAddItem ? (
      <AddItemPage addItemHandler={this.addItemHandler} />
    ) : (
      <HomePage
        addItemHandler={this.addItemHandler}
        sideDrawerHandler={this.sideDrawerHandler}
      />
    );
  };

  display = (
    <HomePage
      addItemHandler={this.addItemHandler}
      sideDrawerHandler={this.sideDrawerHandler}
    />
  );

  render() {
    return <div className="App">{this.display}</div>;
  }
}

export default App;