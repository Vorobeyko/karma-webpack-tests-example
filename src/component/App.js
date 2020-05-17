import React from "react";
import Button from "../component/Button"
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    backgroundColor: "red"
  };

  handleClick = buttonName => {
    if (this.state.backgroundColor === "blue") 
    {
      this.setState({backgroundColor: "red"})
    }
    else {
      this.setState({backgroundColor: "blue"})
    }
  };

  render() {
    return (
      <div className="component-app">
        <Button name="AC" style={{backgroundColor: this.state.backgroundColor}} clickHandler={this.handleClick} />
      </div>
    );
  }
}
