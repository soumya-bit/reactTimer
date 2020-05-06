import React, { Component } from "react";
import Header from "./components/header";
import Timer from "./components/timer";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "React Timer"
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Timer />
        </div>
      </div>
    );
  }
}
