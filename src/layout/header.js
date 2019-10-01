import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Input from "../components/input";

const Container = styled.div`
  background-color: red;
  color: white;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: "11:12",
      endValue: "12:12"
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.setTime = this.setTime.bind(this);
  }
  timeDifference(start, end) {
    console.log(end - start);
  }

  clickHandler() {
    this.timeDifference(this.state.endValue, this.state.startValue);
  }
  setTime(e) {
    switch (e.target.name) {
      case "start":
        this.setState({
          startValue: e.target.value
        });
        break;
      case "end":
        this.setState({
          endValue: e.target.value
        });
        break;

      default:
        break;
    }
  }
  render() {
    return (
      <Container>
        start
        <Input
          name="start"
          type="time"
          value={this.state.startValue}
          onChange={e => this.setTime(e)}
        />
        end
        <Input
          name="end"
          type="time"
          value={this.state.endValue}
          onChange={e => this.setTime(e)}
        />
        <Button onClick={this.clickHandler}>ADD</Button>
        <p>{this.state.startValue}</p>
        <p>{this.state.endValue}</p>
        <p></p>
      </Container>
    );
  }
}
