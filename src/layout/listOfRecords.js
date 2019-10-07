import React, { Component } from "react";

class ListOfRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <div>{this.props.records}</div>;
    }
}

export default ListOfRecords;
