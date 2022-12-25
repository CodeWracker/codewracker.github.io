
import React, { useEffect, useState } from 'react';
import { Container, Badge, Row } from 'reactstrap';
import './personalinfo.css';
import data from '../../data.json';


function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState(data.myData);
    useEffect(() => {
        setPersonalInfo(data.myData);
    }, []);




    return (
        <Container className="personal-info-container">

            <Container className="about-text-container">
                <Container className="skills-container">

                    {Object.keys(personalInfo.skillList).map(key => (
                        <Container key={key} className="skill-badge-container" >
                            <p className="skill-tipe-label">{key}</p>
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
