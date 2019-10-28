import React, { createContext, useState } from "react";
//  create a context
export const TimeRecordContext = createContext();

// creating component which keep data  want to  share
// TODO remember that record need to be an object

const TimeRecordContextProvider = props => {
    const [timeRecords, setTimeRecord] = useState([]);
    const addRecord = record => {
        setTimeRecord([...timeRecords, record]);
    };
    const deleteRecord = id => {
        setTimeRecord(timeRecords.filter(record => record.id !== id));
    };

    return (
        <TimeRecordContext.Provider
            value={{ timeRecords, addRecord, deleteRecord }}
        >
            {props.children}
        </TimeRecordContext.Provider>
    );
};

export default TimeRecordContextProvider;
