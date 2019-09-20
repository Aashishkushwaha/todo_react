import React, { Component } from "react";
import Backdrop from "./Backdrop";

class SideDrawer extends Component {
  render() {
    return (
      <div className="sidedrawer--wrapper">
        <div className="sidebar__content--container">
          <div className="sidebar__header">
            <div className="sidebr__back-box">
              <i
                onClick={this.props.sideDrawerHandler}
                className="material-icons sidebar__back-box--icon"
              >
                keyboard_backspace
              </i>
            </div>
            <h2 className="sidebar__header--logo-box">
              <span>Todo List</span>
            </h2>
          </div>
          <ul className="sidebar__items">
            <li>
              <div className="flex-layout">
                <div className="bullet bullet--white bullet--diamond" />
                <span onClick={this.props.addItemHandler}>Add Item</span>
              </div>
            </li>
            <li>
              <div className="flex-layout">
                <div className="bullet bullet--white bullet--diamond" />
                <span>Show Active Items</span>
              </div>
            </li>
            <li>
              <div className="flex-layout">
                <div className="bullet bullet--white bullet--diamond" />
                <span>Show Completed Items</span>
              </div>
            </li>
            <li>
              <div className="flex-layout">
                <div className="bullet bullet--white bullet--diamond" />
                <span>Show All Items</span>
              </div>
            </li>
          </ul>
        </div>
        <Backdrop sideDrawerHandler={this.props.sideDrawerHandler} />
      </div>
    );
  }
}

export default SideDrawer;
