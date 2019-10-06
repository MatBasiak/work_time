import styled from "styled-components";
import React, { Component } from "react";
import moment from "moment";

const Container = styled.div`
    color: blue;
    font-size: 25px;
    display: block;

    border: 1px solid green;
    p {
        padding: 0;
        margin: 0;
        text-align: right;
        font-size: 36px;
    }
`;

class DateDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        };
        this.saveDate = this.saveDate.bind(this);
    }
    //TODO clean this component
    saveDate() {
        this.setState({
            date: moment().format("DD:MM:YYYY")
        });
    }
    clickHandler() {
        this.saveDate();
    }

    render() {
        return (
            <Container onClick={this.saveDate}>
                <p>{moment().format("DD:MM:YYYY")}</p>
                <p>{this.state.date}</p>
            </Container>
        );
    }
}

export default DateDisplay;
