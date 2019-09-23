import React, { Component } from "react";
import HomePage from "./components/HomePage";
import SideDrawer from "./components/SideDrawer";
import AddItemPage from "./components/AddItemPage";
import DisplayFilteredItemsPage from "./components/DisplayFilteredItemsPage";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      displayAddItem: false,
      display: "",
      category: "",
      date: "",
      time: "",
      place: "",
      desc: "",

      minTime: "00:00:00",

      todoitems: []
    };
  }

  displayFilteredItemsPage = filter => {
    this.setState({
      displayDrawer: false,
      display: (
        <DisplayFilteredItemsPage
          filter={filter}
          displayHomefromFilteredItems={this.displayHomefromFilteredItems}
          todoItems={this.state.todoitems}
        />
      )
    });
  };

  displayHomefromFilteredItems = () => {
    this.setState({
      display: (
        <HomePage
          completeItem={this.completeItem}
          todoItems={this.state.todoitems}
          addItemHandler={this.addItemHandler}
          sideDrawerHandler={this.sideDrawerHandler}
        />
      )
    });
  };

  completeItem = index => {
    let newtodoItems = [...this.state.todoitems];
    newtodoItems[index].completed = !newtodoItems[index].completed;
    this.setState(
      {
        todoItems: newtodoItems
      },
      prevState => {
        this.setState({
          display: (
            <HomePage
              completeItem={this.completeItem}
              todoItems={this.state.todoitems}
              addItemHandler={this.addItemHandler}
              sideDrawerHandler={this.sideDrawerHandler}
            />
          )
        });
      }
    );
  };

  addtodoItemHandler = e => {
    let newItem = {
      id: new Date().getTime(),
      category: this.state.category,
      time: this.state.time,
      date: this.state.date,
      place: this.state.place,
      desc: this.state.desc,
      completed: false
    };
    let todoitems = [...this.state.todoitems, newItem];
    this.setState(
      prevState => {
        return {
          displayAddItem: !prevState.displayAddItem,
          todoitems: todoitems
        };
      },
      () => {
        this.setState({
          display: (
            <HomePage
              completeItem={this.completeItem}
              todoItems={this.state.todoitems}
              addItemHandler={this.addItemHandler}
              sideDrawerHandler={this.sideDrawerHandler}
            />
          )
        });
        this.initializeState();
      }
    );
    e.preventDefault();
  };

  initializeState = () => {
    const date = new Date();
    this.setState({
      display: (
        <HomePage
          completeItem={this.completeItem}
          todoItems={this.state.todoitems}
          addItemHandler={this.addItemHandler}
          sideDrawerHandler={this.sideDrawerHandler}
        />
      ),
      category: "Business",
      desc: "",
      place: "",
      date:
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) +
        "-" +
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()),

      minTime:
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":00",

      time:
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
        ":" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":00"
    });
  };

  componentDidMount() {
    this.initializeState();
  }

  dateHandler = e => {
    const date = new Date();
    let selectedDate = document.getElementById("date").value.slice(-2);
    if (selectedDate > date.getDate()) {
      this.setState(
        {
          date: e.target.value,
          minTime: "00:00:00"
        },
        () => {
          this.setState({
            display: (
              <AddItemPage
                addtodoItemHandler={this.addtodoItemHandler}
                category={this.state.category}
                date={this.state.date}
                time={this.state.time}
                mintime={this.state.minTime}
                place={this.state.place}
                desc={this.state.desc}
                timeHandler={this.timeHandler}
                dateHandler={this.dateHandler}
                todoHandler={this.todoHandler}
                addItemHandler={this.addItemHandler}
              />
            )
          });
        }
      );
    } else if (selectedDate == date.getDate()) {
      this.setState(
        {
          minTime:
            (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
            ":" +
            (date.getMinutes() < 10
              ? "0" + date.getMinutes()
              : date.getMinutes()) +
            ":00",
          date: e.target.value
        },
        () => {
          this.setState({
            display: (
              <AddItemPage
                addtodoItemHandler={this.addtodoItemHandler}
                category={this.state.category}
                date={this.state.date}
                time={this.state.time}
                mintime={this.state.minTime}
                place={this.state.place}
                desc={this.state.desc}
                timeHandler={this.timeHandler}
                dateHandler={this.dateHandler}
                todoHandler={this.todoHandler}
                addItemHandler={this.addItemHandler}
              />
            )
          });
        }
      );
    }
  };

  timeHandler = e => {
    this.setState(
      {
        time: e.target.value + ":00"
      },
      () => {
        this.setState({
          display: (
            <AddItemPage
              addtodoItemHandler={this.addtodoItemHandler}
              category={this.state.category}
              date={this.state.date}
              time={this.state.time}
              mintime={this.state.minTime}
              place={this.state.place}
              desc={this.state.desc}
              timeHandler={this.timeHandler}
              dateHandler={this.dateHandler}
              todoHandler={this.todoHandler}
              addItemHandler={this.addItemHandler}
            />
          )
        });
      }
    );
  };

  todoHandler = e => {
    let name = e.target.name;
    this.setState(
      {
        [name]: e.target.value
      },
      () => {
        this.setState({
          display: (
            <AddItemPage
              addtodoItemHandler={this.addtodoItemHandler}
              category={this.state.category}
              date={this.state.date}
              time={this.state.time}
              mintime={this.state.minTime}
              place={this.state.place}
              desc={this.state.desc}
              timeHandler={this.timeHandler}
              dateHandler={this.dateHandler}
              todoHandler={this.todoHandler}
              addItemHandler={this.addItemHandler}
            />
          )
        });
      }
    );
  };

  sideDrawerHandler = () => {
    this.setState(
      prevState => {
        return {
          displayDrawer: !prevState.displayDrawer
        };
      },
      () => {
        let result = "";
        result = this.state.displayDrawer ? (
          <SideDrawer
            displayFilteredItemsPage={this.displayFilteredItemsPage}
            sideDrawerHandler={this.sideDrawerHandler}
            addItemHandler={this.addItemHandler}
          />
        ) : (
          <HomePage
            completeItem={this.completeItem}
            todoItems={this.state.todoitems}
            addItemHandler={this.addItemHandler}
            sideDrawerHandler={this.sideDrawerHandler}
          />
        );

        this.setState({
          display: result
        });
      }
    );
  };

  addItemHandler = () => {
    this.setState(
      prevState => {
        return {
          displayAddItem: !prevState.displayAddItem,
          displayDrawer: false
          //displayDrawer: !prevState.displayDrawer
        };
      },
      () => {
        let result = this.state.displayAddItem ? (
          <AddItemPage
            addtodoItemHandler={this.addtodoItemHandler}
            category={this.state.category}
            date={this.state.date}
            time={this.state.time}
            mintime={this.state.minTime}
            place={this.state.place}
            desc={this.state.desc}
            timeHandler={this.timeHandler}
            dateHandler={this.dateHandler}
            todoHandler={this.todoHandler}
            addItemHandler={this.addItemHandler}
          />
        ) : (
          <HomePage
            completeItem={this.completeItem}
            todoItems={this.state.todoitems}
            addItemHandler={this.addItemHandler}
            sideDrawerHandler={this.sideDrawerHandler}
          />
        );
        this.setState(prevState => {
          return { display: result };
        });
      }
    );
  };

  render() {
    return <div className="App">{this.state.display}</div>;
  }
}

export default App;