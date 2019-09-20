import React, { Component } from "react";

class AddItemPage extends Component {
  render() {
    return (
      <div className="home">
        <div className="header margin-bottom-medium">
          <div className="hamburger-box">
            <i
              onClick={this.props.addItemHandler}
              className="material-icons hemburger-box--icon"
            >
              keyboard_backspace
            </i>
          </div>
          <h2 className="header__logo-box">
            <span>Todo List</span>
          </h2>
        </div>
        <main>
          <form>
            <div className="form-group margin-bottom-small">
              <label>Category</label>
              <select valus="react">
                <option className="option" value="Business">
                  Business
                </option>
                <option className="option" value="Business">
                  Study
                </option>
                <option className="option" value="Business">
                  General
                </option>
                <option className="option" value="Business">
                  Other
                </option>
              </select>
            </div>
            <div className="form-group margin-bottom-small">
              <label>Time</label>
              <input type="time" />
            </div>
            <div className="form-group margin-bottom-small">
              <label>Place</label>
              <input type="text" maxLength="25" />
            </div>
            <div className="form-group margin-bottom-small">
              <label>Description</label>
              <input type="text" maxLength="25" />
            </div>
          </form>
        </main>
        <div className="add-item-box">
            <i
              onClick={this.props.addItemHandler}
              className="material-icons add-item--icon"
            >
              add
            </i>
          </div>
      </div>
    );
  }
}

export default AddItemPage;
