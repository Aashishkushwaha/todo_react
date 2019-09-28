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
        <main className="todos__container">
          <div>
            {this.props.todoItems.map((todoItem, index) => {
              let time = todoItem.time.slice(0, 5);
              let hours = time.slice(0, 2);
              let minutes = time.slice(2, 6);
              let dividedHours = parseInt(hours, 10) % 12;
              let displayTime =
                hours === "00"
                  ? "12" + minutes + " AM"
                  : hours < "11"
                  ? hours + minutes + " AM"
                  : dividedHours < 10
                  ? dividedHours === 0
                    ? "12" + minutes + " PM"
                    : "0" + dividedHours + minutes + " PM"
                  : dividedHours + minutes + " PM";
              let displayDate =
                todoItem.date.slice(-2) +
                "-" +
                todoItem.date.slice(-5, -2) +
                todoItem.date.slice(0, 4);
              return (
                <div className="todo-item-box" key={todoItem.id}>
                  <div className="checkbox-div">
                    {/* <input type="radio" /> */}
                    {todoItem.completed ? (
                      <>
                        <p className="description-label">Completed</p>
                        <span
                          onClick={() => this.props.completeItem(index)}
                          className="virtual-radio-button"
                        >
                          &nbsp;
                        </span>
                      </>
                    ) : (
                      <>
                        <p className="description-label-invisible">Completed</p>
                        <span
                          onClick={() => this.props.completeItem(index)}
                          className="virtual-radio-button-invisible"
                        >
                          &nbsp;
                        </span>
                      </>
                    )}
                  </div>
                  <div className="todo-item-details-div">
                    <div className="time-date-details">
                      <div className="field-item-div">
                        <p className="feild-item-label">End Date</p>
                        <p>{displayDate}</p>
                      </div>
                      <div className="field-item-div">
                        <p className="feild-item-label">End Time</p>
                        <p>{displayTime}</p>
                      </div>
                    </div>
                    {todoItem.completed ? (
                      <del>
                        <em>
                          <h1>{todoItem.desc}</h1>
                        </em>
                      </del>
                    ) : (
                      <h1>{todoItem.desc}</h1>
                    )}
                    <div className="category-place-details">
                      <div className="field-item-div">
                        <p>{todoItem.category}</p>
                        <p className="feild-item-label">Category</p>
                      </div>
                      <div className="field-item-div">
                        <p>{todoItem.place ? todoItem.place : "N/A"}</p>
                        <p className="feild-item-label">Place</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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