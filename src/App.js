import React from "react";

import Header from "./layout/header";
import Footer from "./layout/footer";
import TimeRecordContextProvider from "./contexts/TimeRecordContext";
import ListOfRecords from "./layout/listOfRecords";

function App() {
    return (
        <div>
            <TimeRecordContextProvider>
                <Header />
                <ListOfRecords />
                <Footer />
            </TimeRecordContextProvider>
        </div>
    );
}

export default App;
