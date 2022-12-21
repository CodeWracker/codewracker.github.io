import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
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
