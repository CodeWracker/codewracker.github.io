
import React, { useEffect, useState } from 'react';
import { Container, Badge, Row } from 'reactstrap';
import './personalinfo.css';
import data from '../../data.json';


function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState(data.myData);
    const [skillListVisible, setSkillListVisible] = useState(Object.keys(data.myData.skillList).map((skill) => false))
    useEffect(() => {
        setPersonalInfo(data.myData);
        // check the size of screen, if its greater than 768px, set the skillListVisible to true
        if (window.innerWidth > 1100) {
            setSkillListVisible(Object.keys(data.myData.skillList).map((skill) => true))
        }
        else if (window.innerWidth < 768) {
            setSkillListVisible(Object.keys(data.myData.skillList).map((skill) => false))
        }
        else {
            // apenas o primeiro da lista é true
            setSkillListVisible(Object.keys(data.myData.skillList).map((skill, index) => index === 0 ? true : false))
        }
    }, []);



    return (
        <Container id='home' className="page-section personal-info-container ">

            <Container className="about-text-container">
                <Container className="skills-container">

                    {Object.keys(personalInfo.skillList).map(key => (
                        <Container key={key} className="skill-badge-container" >
                            <div
                                onClick={() => {
                                    const newSkillListVisible = [...skillListVisible];
                                    newSkillListVisible[Object.keys(personalInfo.skillList).indexOf(key)] = !newSkillListVisible[Object.keys(personalInfo.skillList).indexOf(key)];
                                    setSkillListVisible(newSkillListVisible);
                                }}
                                className={(skillListVisible[Object.keys(personalInfo.skillList).indexOf(key)] ? "active-skill-toggle" : "") + " skill-toggler-container"}>
                                <p className="skill-type-label">{key}</p>
                                {/* botão que é um + quando a lista não esta aparecendo e um - quando está */}
                                <span
                                    className="skill-list-button"

                                >
                                    {skillListVisible[Object.keys(personalInfo.skillList).indexOf(key)] ? '-' : '+'}
                                </span>
                            </div>

                            {skillListVisible[Object.keys(personalInfo.skillList).indexOf(key)] ? (
                                <Row
                                    className="skill-badge-list-container">

                                    {
                                        personalInfo.skillList[key].map((skill) => (
                                            <div

                                                key={skill.skillName}
                                            >
                                                <div className="badge-item-container">
                                                    <Badge
                                                        className="skills-badge"
                                                        style={{
                                                            background: `linear-gradient(to right, var(--primary-color) ${skill.skillPoints}%, 
                                                        var(--quaternary-color) 
                                                        ${skill.skillPoints}%)`,
                                                            transition: 'background 20s ease-in-out'
                                                        }}
                                                        color="primary">
                                                        {skill.skillName}
                                                    </Badge>
                                                </div>
                                            </div>

                                        ))
                                    }

                                </Row>
                            ) : <></>}
                        </Container>
                    ))}

                </Container>
                <Container className="description-container">
                    <p className="description-text">
                        {personalInfo.description}
                    </p>
                </Container>
                <Container className="social-media-container">
                </Container >
            </Container>
            <Container className="profile-picture-container">
                {/* imagem imagem de perfim co um circulo com a cor primaria atras */}
                <div className='image-with-circle-container' >
                    <div
                        className="circle-background"
                    ></div>
                    <img alt="imagem de perfil" src={personalInfo.profile_image} className="profile-picture" />
                </div>
            </Container>


        </Container>
    );
}

export default PersonalInfo;
