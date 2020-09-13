import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";
import GlobalStyles from "../GlobalStyles";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = (id) => {
      this.setState((currentState) => {
        const newState = delete currentState.notifications[id];
        return newState;
      });
    };
    this._seeNotification = (id) => {
      this.setState((currentState) => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: {
              ...currentState.notifications[id],
              seen: true,
            },
          },
        };
      });
    };
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "something",
          seen: false,
        },
        "2": {
          id: 2,
          text: "something else",
          seen: false,
        },
        "3": {
          id: 3,
          text: "another",
          seen: false,
        },
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification,
    };
  }
  render() {
    return (
      <>
        <GlobalStyles />
        <Store.Provider value={this.state}>
          <AppPresenter />
        </Store.Provider>
      </>
    );
  }
}

export default AppContainer;
