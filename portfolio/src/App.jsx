import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  UncontrolledAccordion, AccordionItem, AccordionBody,
  AccordionHeader, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, Accordion
} from 'reactstrap';
import Header from './components/Header';
// import ProjectsList from './components/ProjectsList';

function App() {
  return (
    <Container className="app-container">
      <Header />

      

      <Container className="personal-info-container">

        <Container className="social-media-container">
        </Container >

      </Container>



    </Container >
  );
}

export default App;
