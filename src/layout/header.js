import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Input from "../components/input";
import DateDisplay from "../components/date";
import Clock from "../components/clock";
import moment from "moment";
import ListOfRecords from "./listOfRecords";
import uuid from "uuid/v1";
import timeDifference from "../functions/time";

const Container = styled.div`
    background-color: red;
    color: white;
`;

class Header extends Component {
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

    clickHandler() {
        let result = timeDifference(this.state.startValue, this.state.endValue);
        this.setState({
            temporaryResult: result
        });

        this.setState(state => {
            const listOfRecords = [
                ...state.listOfRecords,
                {
                    date: state.date,
                    result: state.temporaryResult,
                    startValue: state.startValue,
                    endValue: state.endValue,
                    id: uuid()
                }
            ];
            return {
                listOfRecords
            };
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
        console.log(this.state.listOfRecords);
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
                <ListOfRecords records={this.state.listOfRecords} />>
            </Container>
        );
    }
}

export default Header;
