import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Container } from 'reactstrap';
import data from '../../data.json'; // Arquivo JSON com os dados dos projetos
import './projectsList.css';
function ProjectsList() {
    const [allProjects, setAllProjects] = useState(data.projectsData.projectsList);
    // Estado para armazenar as tags selecionadas para filtrar
    const [allTags, setAllTags] = useState(data.projectsData.tags);
    const [selectedTags, setSelectedTags] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setFilteredProjects(allProjects);
        setAllTags(data.projectsData.tags);
        setAllProjects(data.projectsData.projectsList);
    }, []);
    useEffect(() => {
        // console.log(selectedTags);
        if (selectedTags.length === 0) {
            setFilteredProjects(allProjects);
        } else {
            setFilteredProjects(allProjects.filter((project) => {
                return project.tags.some((tag) => selectedTags.includes(tag));
            }));
        }

        // console.log(filteredProjects);
    }, [selectedTags]);


    function handleSelectTag(tag) {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }
    return (
        <Container className="page-section projects-list-container">
            <h1 className="projects-list-title">Projects</h1>
            <Container className="tag-filter-container">
                <Button
                    onClick={() => {
                        setShowFilter(!showFilter);
                    }}
                    className="tag-filter-btn">Select Tags</Button>
                {showFilter && (
                    <Container className="tag-filter-list-container">
                        {allTags.map((tag, index) => (
                            <Button onClick={() => handleSelectTag(index)}
                                key={tag} className={`tag-filter-item  ${selectedTags.includes(index) ? 'selected-tag' : 'disabled-tag'}`}
                            >
                                {tag}
                            </Button>
                        ))}
                    </Container>
                )}


            </Container>
            <Container className="projects-list-grid-container">
                {filteredProjects.map((project) => (
                    <Card key={project.name} className="project-card">
                        <CardHeader className="project-card-header">
                            <img src={project.image} alt="logo" className="project-card-logo" />
                            <h2 className="project-card-title">{project.name}</h2>
                        </CardHeader>
                        <CardBody className="project-card-body">
                            <CardTitle className="project-card-subtitle">{project.link}</CardTitle>
                            <CardText className="project-card-description">{project.description}</CardText>
                            <div className="project-card-tags">
                                {project.tags.map((tag) => (
                                    <Button
                                        key={tag} className="project-card-tag"
                                        color="primary" outline>{allTags[tag]}</Button>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </Container>
        </Container>
    );
}

export default ProjectsList;