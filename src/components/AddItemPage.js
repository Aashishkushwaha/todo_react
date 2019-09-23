import React, { Component } from "react";

class AddItemPage extends Component {
  componentDidMount() {
    const date = new Date();
    this.setState({
      minTime:
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":00"
    });
  }

  render() {
    const date = new Date();
    //2019-09-20
    let today =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    today.trim();

    return (
      <div className="home">
        <div className="header margin-bottom-small">
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
        <main
          style={{
            maxHeight: "57vh",
            overflowY: "auto"
          }}
        >
          <form onSubmit={this.props.addtodoItemHandler}>
            <div className="form-group margin-bottom-small">
              <label>Category</label>
              <select
                name="category"
                value={this.props.category}
                onChange={this.props.todoHandler}
              >
                <option className="option">Business</option>
                <option className="option">Study</option>
                <option className="option">General</option>
                <option className="option">Other</option>
              </select>
            </div>
            <div className="form-group margin-bottom-small">
              <label>Date</label>
              <input
                name="date"
                id="date"
                value={this.props.date}
                onChange={this.props.dateHandler}
                type="date"
                min={today}
                required
              />
            </div>
            <div className="form-group margin-bottom-small">
              <label>Time</label>
              <input
                name="time"
                id="time"
                type="time"
                value={this.props.time}
                onChange={this.props.timeHandler}
                min={this.props.mintime}
                required
              />
            </div>
            <div className="form-group margin-bottom-small">
              <label>Place</label>
              <input
                name="place"
                onChange={this.props.todoHandler}
                value={this.props.place}
                type="text"
                maxLength="25"
              />
            </div>
            <div className="form-group margin-bottom-small">
              <label>Description</label>
              <input
                name="desc"
                onChange={this.props.todoHandler}
                value={this.props.desc}
                type="text"
                maxLength="25"
                required
              />
            </div>
            <button type="submit">
              {/* onClick={this.props.addItemHandler}> */}
              <div className="add-item-box">
                <i className="material-icons add-item--icon">add</i>
              </div>
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default AddItemPage;