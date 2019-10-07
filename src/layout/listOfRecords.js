import React, { Component } from "react";

class ListOfRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    slicedData(data) {
        const arrayOfSlicedData = [];
        arrayOfSlicedData.push([data.slice(0, 4)]);
        console.log(arrayOfSlicedData);
        return arrayOfSlicedData;
    }

    render() {
        return <div>dupa</div>;
    }
}

export default ListOfRecords;
