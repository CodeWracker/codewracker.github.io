import React, { useEffect, useState } from 'react';
import { Container, Badge, Row } from 'reactstrap';
import './academicHistory.css';
import data from '../../data.json';


function AcademicHistory() {
    const [academicHistory, setAcademicHistory] = useState(data.myData.academic_history);
    // useEffect(() => {
    //     //ordena a lista de forma decrescente pelo atributo time[0]
    // }, []);

    return (
        <Container className="academic-history-container page-section">
            <h1 className='academic-history-title' >Academic History</h1>
            <Container className='academic-item-list-container' >
                {academicHistory.map((academicHistoryItem) => (
                    <div key={academicHistoryItem.id} className="academic-history-item-container">
                        <div className="academic-history-item-header">
                            <img src={academicHistoryItem.logo} alt="logo" className="academic-history-item-logo" />
                            <h2 className='institution-name' >{academicHistoryItem.institution}</h2>
                        </div>
                        <div className="academic-history-item-body">

                            <p className='course-name' >{academicHistoryItem.course}</p>
                            <p className='course-duration' >{academicHistoryItem.time[0]} - {academicHistoryItem.time[1]}</p>
                        </div>
                    </div>
                ))}
            </Container>
        </Container>
    );
}

export default AcademicHistory;