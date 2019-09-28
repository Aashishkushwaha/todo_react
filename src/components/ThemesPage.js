import React, { Component } from "react";

class ThemesPage extends Component {
  render() {
    const themes = [
      { id: "theme_1", primary: "#f28f3d" },
      { id: "theme_2", primary: "#9600FF" },
      { id: "theme_3", primary: "#F6EA41" },
      { id: "theme_4", primary: "#BB73E0" },
      { id: "theme_5", primary: "#0CCDA3" },
      { id: "theme_6", primary: "#FF0078" },
      { id: "theme_7", primary: "#E3FF73" },
      { id: "theme_8", primary: "#07A3B2" },
      { id: "theme_9", primary: "#F8D90F" },
      { id: "theme_10", primary: "#1CA7EC" },
      { id: "theme_11", primary: "#329D9C" },
      { id: "theme_12", primary: "#FF9CDA" },
      { id: "theme_13", primary: "#E7E7E7" },
      { id: "theme_14", primary: "#E80566" },
      { id: "theme_15", primary: "#4097AA" },
      { id: "theme_16", primary: "#AEBAF8" },
      { id: "theme_17", primary: "#F048C6" },
      { id: "theme_18", primary: "#FF8DDB" },
      { id: "theme_19", primary: "#C1FCD3" },
      { id: "theme_20", primary: "#F6EFA7" },
      { id: "theme_21", primary: "#E27C39" },
      { id: "theme_22", primary: "#D9ECC7" },
      { id: "theme_23", primary: "#FE7A15" },
      { id: "theme_24", primary: "#1F2F98" },
      { id: "theme_25", primary: "#56C596" },
      { id: "theme_26", primary: "#EA4492" },
      { id: "theme_27", primary: "#9B9B9B" },
      { id: "theme_28", primary: "#1c2022" }
    ];

    return (
      <div className="home">
        <div className="header">
          <div className="hamburger-box">
            <i
              onClick={this.props.displayHome}
              className="material-icons hemburger-box--icon"
            >
              keyboard_backspace
            </i>
          </div>
          <h2 className="header__logo-box">
            <span>Choose Theme</span>
          </h2>
        </div>
        <main className="theme-container">
          <div className="todos__container">
            <div className="themes-container-row">
              {themes.slice(0, 5).map(theme => {
                return (
                  <div
                    key={theme.id}
                    className="theme"
                    style={{ backgroundColor: `${theme.primary}` }}
                    onClick={() => this.props.changeTheme(theme.primary)}
                  >
                    {this.props.selectedTheme === theme.primary ? (
                      <i
                        onClick={this.props.displayHome}
                        className="selected-theme--icon material-icons"
                      >
                        done
                      </i>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="themes-container-row">
              {themes.slice(5, 10).map(theme => {
                return (
                  <div
                    key={theme.id}
                    className="theme"
                    style={{ backgroundColor: `${theme.primary}` }}
                    onClick={() => this.props.changeTheme(theme.primary)}
                  >
                    {this.props.selectedTheme === theme.primary ? (
                      <i
                        onClick={this.props.displayHome}
                        className="selected-theme--icon material-icons"
                      >
                        done
                      </i>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="themes-container-row">
              {themes.slice(10, 15).map(theme => {
                return (
                  <div
                    key={theme.id}
                    className="theme"
                    style={{ backgroundColor: `${theme.primary}` }}
                    onClick={() => this.props.changeTheme(theme.primary)}
                  >
                    {this.props.selectedTheme === theme.primary ? (
                      <i
                        onClick={this.props.displayHome}
                        className="selected-theme--icon material-icons"
                      >
                        done
                      </i>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="themes-container-row">
              {themes.slice(15, 20).map(theme => {
                return (
                  <div
                    key={theme.id}
                    className="theme"
                    style={{ backgroundColor: `${theme.primary}` }}
                    onClick={() => this.props.changeTheme(theme.primary)}
                  >
                    {this.props.selectedTheme === theme.primary ? (
                      <i
                        onClick={this.props.displayHome}
                        className="selected-theme--icon material-icons"
                      >
                        done
                      </i>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="themes-container-row">
              {themes.slice(20, 25).map(theme => {
                return (
                  <div
                    key={theme.id}
                    className="theme"
                    style={{ backgroundColor: `${theme.primary}` }}
                    onClick={() => this.props.changeTheme(theme.primary)}
                  >
                    {this.props.selectedTheme === theme.primary ? (
                      <i
                        onClick={this.props.displayHome}
                        className="selected-theme--icon material-icons"
                      >
                        done
                      </i>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="themes-container-row">
              {themes.slice(25, 29).map(theme => {
                return (
                  <div
                    key={theme.id}
                    className="theme"
                    style={{ backgroundColor: `${theme.primary}` }}
                    onClick={() => this.props.changeTheme(theme.primary)}
                  >
                    {this.props.selectedTheme === theme.primary ? (
                      <i
                        onClick={this.props.displayHome}
                        className="selected-theme--icon material-icons"
                      >
                        done
                      </i>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ThemesPage;