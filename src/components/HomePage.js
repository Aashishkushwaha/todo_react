import React, { Component } from "react";

// design -- https://cdn.dribbble.com/users/3718850/screenshots/6635602/todo_list_app.jpg

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="hamburger-box">
            <i
              onClick={this.props.sideDrawerHandler}
              className="material-icons hemburger-box--icon"
            >
              sort
            </i>
          </div>
          <h2 className="header__logo-box">
            <span>Todo List</span>
          </h2>
        </div>
        <main>
          <div className="todos__container" />
          <div className="footer" />
          <div className="add-item-box">
            <i
              onClick={this.props.addItemHandler}
              className="material-icons add-item--icon"
            >
              add
            </i>
          </div>
        </main>
      </div>
    );
  }
}

export default HomePage;
