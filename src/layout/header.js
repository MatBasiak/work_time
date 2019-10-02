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
      startValue: "11:11",
      endValue: "22:22",
      result: " "
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  /**
   *
   * @param {string} start '11:11'
   * @param {string} end   '11:11'
   * convert them to array of strings
   * calculate  difference between each elements of array
   * and return array of numbers
   * result.reduce combine array to single element
   *@return result string 11:11
   */
  timeDifference(start, end) {
    start = [...start];
    end = [...end];
    let result = start.map((item, i) => {
      if (item === ":") {
        return ":";
      }
      return item - end[i].toString();
    });
    result = result.reduce((c, i) => c + i);
    return result;
  }

  clickHandler() {
    let result = this.timeDifference(
      this.state.endValue,
      this.state.startValue
    );
    this.setState({
      result
    });
  }
  /**
   *
   * @param {event} e
   * function setting to state value of inputs
   */
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
        <p>{this.state.result}</p>
      </Container>
    );
  }
}
