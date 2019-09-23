import React, { Component } from "react";

class DisplayFilteredItemsPage extends Component {
  render() {
    let label =
      this.props.filter === "SHOW_ACTIVE"
        ? "Active Items"
        : this.props.filter === "SHOW_ALL"
        ? "All Items"
        : "Completed Items";

    let showItems =
      this.props.filter === "SHOW_ACTIVE"
        ? this.props.todoItems.filter(todoitem => {
            if (!todoitem.completed) return todoitem;
          })
        : this.props.filter === "SHOW_COMPLETED"
        ? this.props.todoItems.filter(todoitem => {
            if (todoitem.completed) return todoitem;
          })
        : this.props.todoItems;

    return (
      <div className="home">
        <div className="header">
          <div className="hamburger-box">
            <i
              onClick={this.props.displayHomefromFilteredItems}
              className="material-icons hemburger-box--icon"
            >
              keyboard_backspace
            </i>
          </div>
          <h2 className="header__logo-box">
            <span>{label}</span>
          </h2>
        </div>
        <main>
          <div className="todos__container">
            {showItems.map((todoItem, index) => {
              return (
                <div className="todo-item-box" key={todoItem.id}>
                  <div className="checkbox-div">
                    {/* <input type="radio" /> */}
                    {todoItem.completed ? (
                      <span className="virtual-radio-button">&nbsp;</span>
                    ) : (
                      <span className="virtual-radio-button-invisible">
                        &nbsp;
                      </span>
                    )}
                  </div>
                  <div className="todo-item-details-div">
                    <div className="time-date-details">
                      <p>{todoItem.date}</p>
                      <p>{todoItem.time}</p>
                    </div>
                    <h1>{todoItem.desc}</h1>
                    <div className="category-place-details">
                      <p>{todoItem.category}</p>
                      <p>{todoItem.place ? todoItem.place : "N/A"}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default DisplayFilteredItemsPage;