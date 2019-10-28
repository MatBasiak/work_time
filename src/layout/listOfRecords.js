import React, { useContext, useState, useEffect } from "react";
import { TimeRecordContext } from "../contexts/TimeRecordContext";

const ListOfRecords = () => {
    const { timeRecords } = useContext(TimeRecordContext);

    return "list of records";
};

export default ListOfRecords;
