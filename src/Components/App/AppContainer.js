import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";
import GlobalStyles from "../GlobalStyles";

class AppContainer extends Component {
  constructor(props) {
    super(props);
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
