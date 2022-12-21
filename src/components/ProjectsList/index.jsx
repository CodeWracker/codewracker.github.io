import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import projectsData from '../../projects_data.json'; // Arquivo JSON com os dados dos projetos

function ProjectsList() {
    // Estado para armazenar os projetos filtrados
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Estado para armazenar as tags selecionadas para filtrar
    const [selectedTags, setSelectedTags] = useState([]);



    return (
        <div>
            
        </div>
    );
}

export default ProjectsList;