import React, { useContext, useState } from "react";

const TimeRecordContext = useContext();

const TimeRecordContextProvider = props => {
    const [timeRecord, setTimeRecord] = useState([{}]);

    const addRecord = record => {
        setTimeRecord([...timeRecord, record]);
    };
    const deleteRecord = id => {
        setTimeRecord(timeRecord.filter(record => record.id !== id));
    };

    return (
        <TimeRecordContext.provider
            value={(timeRecord, addRecord, deleteRecord)}
        >
            {props.children}
        </TimeRecordContext.provider>
    );
};

export default TimeRecordContextProvider;
