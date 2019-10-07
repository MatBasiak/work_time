import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Input from "../components/input";
import DateDisplay from "../components/date";
import Clock from "../components/clock";
import moment from "moment";

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
            temporaryResult: " ",
            listOfRecords: [],
            date: moment().format("DD:MM:YYYY")
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    componentDidMount() {
        this.clickHandler();
    }
    /**
   *
   * @param {string} start '11:11'
   * @param {string} end   '11:11'
   * convert them to array of strings
   
   *@return result string 11:11
   */
    timeDifference(start, end) {
        start = [...start];
        end = [...end];

        let startHours = start[0].concat(start[1]);
        let startMinutes = start[3].concat(start[4]);
        let endHours = end[0].concat(end[1]);
        let endMinutes = end[3].concat(end[4]);
        let resultHours = endHours - startHours;
        let resultMinutes = endMinutes - startMinutes;

        if (startMinutes > endMinutes) {
            resultMinutes = 60 - -resultMinutes;
            resultHours--;
        }
        if (+endHours >= 0 && +endHours < startHours) {
            resultHours = 24 - startHours + +endHours;
        }

        return `${resultHours}:${resultMinutes}`;
    }

    clickHandler() {
        let result = this.timeDifference(
            this.state.startValue,
            this.state.endValue
        );
        this.setState({
            temporaryResult: result
        });

        // TODO create array of objects , now is array of results
        this.setState(state => {
            const listOfRecords = state.listOfRecords.concat(
                state.date,
                state.temporaryResult,
                state.startValue,
                state.endValue
            );
            return {
                listOfRecords
            };
        });

        console.log(this.state.listOfRecords);
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
                <Clock />
                <DateDisplay />
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
                <p>{this.state.temporaryResult}</p>
                <ul>
                    {this.state.listOfRecords.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </ul>
            </Container>
        );
    }
}
