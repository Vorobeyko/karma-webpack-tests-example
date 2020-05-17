import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];
    console.log(this.props.style.backgroundColor)

    return (
      <div className={className.join(" ").trim()}>
        <button style={{backgroundColor: this.props.style.backgroundColor}} onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
