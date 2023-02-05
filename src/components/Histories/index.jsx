import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import './histories.css';
import data from '../../data.json';
import AcademicHistory from "../AcademicHistory";
import WorkHistory from "../WorkHistory";
function Histories() {
    const [selectedHistory, setSelectedHistory] = useState('academic');
    function handleHistorySelection(history) {
        setSelectedHistory(history);
    }
    return (
        <Container className="page-section histories-container">
            <Container className="history-selector-container">

                <Button className={"history-title " + (selectedHistory === 'academic' ? 'title-selected' : 'title-unselected')}
                    onClick={() => handleHistorySelection('academic')}
                >Academic History</Button>
                <Button
                    onClick={() => handleHistorySelection('work')}
                    className={"history-title " + (selectedHistory === 'work' ? 'title-selected' : 'title-unselected')} >Professional History</Button>
            </Container>
            <Container className="history-container">
                {selectedHistory === 'academic' ? <AcademicHistory /> : <WorkHistory />}
            </Container>
        </Container>

    );
}

export default Histories;