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
            date: new Date()
        };
    }
    // componentWillMount() {
    //     this.tick();
    // }

    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }
    render() {
        return (
            <Container>
                <p>{moment().format("DD:MM:YYYY")}</p>
            </Container>
        );
    }
}

export default DateDisplay;
