import React from 'react';
import { Container } from 'reactstrap';
import './header.css';

function Header() {

    return (
        <Container className='header-container' >
            <Container className="header-title-container">
                <p className="header-title">{"<Rodrigo Ferraz Souza/>"}</p>
            </Container>
            <Container className="header-links-container">
                <p onClick={() => document.getElementById('home').scrollIntoView()}
                    className="header-link">Home</p>
                <p
                    onClick={() => document.getElementById('histories').scrollIntoView()}
                    className="header-link">Academic/Professional</p>
                <p
                    onClick={() => document.getElementById('projects').scrollIntoView()}
                    className="header-link">Projects</p>
            </Container>
        </Container>
    );
}

export default Header;