import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Container } from 'reactstrap';
import data from '../../data.json'; // Arquivo JSON com os dados dos projetos
import './projectsList.css';
function ProjectsList() {
    // Estado para armazenar os projetos filtrados
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Estado para armazenar as tags selecionadas para filtrar
    const [selectedTags, setSelectedTags] = useState([]);



    return (
        <Container className="page-section projects-list-container">
            <h1 className="projects-list-title">Projects</h1>
        </Container>
    );
}

export default ProjectsList;