import React, { Component } from "react";
import HomePage from "./components/HomePage";
import SideDrawer from "./components/SideDrawer";
import AddItemPage from "./components/AddItemPage";
import DisplayFilteredItemsPage from "./components/DisplayFilteredItemsPage";
import ThemesPage from "./components/ThemesPage";
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
      theme: "#f28f3d",
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
          addItemHandler={this.addItemHandler}
          displayHome={this.displayHome}
          todoItems={this.state.todoitems}
        />
      )
    });
  };

  displayHome = () => {
    this.setState({
      displayDrawer: false,
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

  changeTheme = primary => {
    document
      .getElementById("root")
      .style.setProperty("--bg-color-primary", primary);
    this.setState(
      {
        theme: primary
      },
      () => {
        this.setState({
          display: (
            <ThemesPage
              changeTheme={this.changeTheme}
              displayHome={this.displayHome}
              selectedTheme={this.state.theme}
            />
          )
        });
      }
    );
  };

  displayThemesPage = () => {
    this.setState({
      displayDrawer: false,
      display: (
        <ThemesPage
          changeTheme={this.changeTheme}
          displayHome={this.displayHome}
          selectedTheme={this.state.theme}
        />
      )
    });
  };

  themeChangeHandler = () => {};

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
    let today =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());

    let selectedFullDate = document.getElementById("date").value;

    if (selectedFullDate > today) {
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
    } else if (selectedFullDate <= today) {
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
            displayThemesPage={this.displayThemesPage}
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