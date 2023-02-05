import React from "react";
import { Container } from "reactstrap";
import './workHistory.css';
import data from '../../data.json';
function Histories() {
    const workHistory = data.myData.work_history;
    console.log(workHistory);
    return (
        <Container className="work-history-container">
            <Container className='work-item-list-container' >
                {Object.keys(workHistory).map((workHistoryItem) => (
                    <div key={workHistoryItem} className="work-history-item-container">
                        <div className="work-history-item-header">
                            <img src={workHistory[workHistoryItem].logo} alt="logo" className="work-history-item-logo" />
                            <h2 className='institution-name' >{workHistoryItem}</h2>
                        </div>
                        <div className="work-history-item-body">

                            <div className="work-position-item-list-container">
                                {workHistory[workHistoryItem].positions.map((position, index) => (

                                    <div key={position.name} className="work-position-item-container">
                                        {/* verifica se é o ultimo da lista, se não for cria uma div */}
                                        <div key={index} className="bullet-container">
                                            {/* desenha uma linha ao lado do item com um circulo */}
                                            <div className="bullet" />
                                            {index !== workHistory[workHistoryItem].positions.length - 1 && <div className="line" />}

                                        </div>
                                        <div className="position-item-content">
                                            <div className="work-position-item-header">
                                                <h3 className='position-name' >{position.name}</h3>
                                            </div>
                                            <div className="work-position-item-body">
                                                <p className='position-duration' >{position.time[0]} - {position.time[1]}</p>
                                                <p className='position-description' >{position.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </Container>

    );
}

export default Histories;