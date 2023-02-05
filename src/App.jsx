import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Histories from './components/Histories';
import ProjectsList from './components/ProjectsList';
import ContactInfo from './components/ContactInfo';

function App() {
  return (

    <Container className="app-container">

      <Header />
      <PersonalInfo />
      <ContactInfo />
      <Histories />
      <ProjectsList />
    </Container >
  );
}

export default App;
