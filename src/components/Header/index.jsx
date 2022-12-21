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
                <p className="header-link">Home</p>
                <p className="header-link">Academic</p>
                <p className="header-link">Projects</p>
                <p className="header-link">About</p>
            </Container>
        </Container>
    );
}

export default Header;