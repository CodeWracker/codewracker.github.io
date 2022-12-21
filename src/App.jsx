import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  UncontrolledAccordion, AccordionItem, AccordionBody,
  AccordionHeader, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, Accordion
} from 'reactstrap';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
// import ProjectsList from './components/ProjectsList';

function App() {
  return (
    
    <Container className="app-container">
    
      <Header />
      <PersonalInfo />



    </Container >
  );
}

export default App;
