import styled from "styled-components";
import React, { Component } from "react";

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

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <Container>
                <h2> {this.state.date.toLocaleTimeString()}.</h2>
            </Container>
        );
    }
}

export default Clock;
