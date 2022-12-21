
import React, { useEffect, useState } from 'react';
import { Container, Badge, List, Row, Col } from 'reactstrap';
import './personalinfo.css';
import data from '../../data.json';


function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState(data.myData);
    useEffect(() => {
        setPersonalInfo(data.myData);
    }, []);

    function renderbadges() {
        let keys = Object.keys(personalInfo.skillList);
        return (<>

        </>)
    }


    return (
        <Container className="personal-info-container">
            {/* Minhas informações e um foto minha
            ROdrigo Ferraz Souza
            principais skills:
              - Front com ReacJS e Angular9+
              - backend com NodeJS
              - baco de dados com mongoDB, mysql e postgresql
              - visão computacional com python e opencv
              - treinamento de modelos de rede neural com Keras (tensorflow)
              - Síntese de hardware+ em VHDL
           */}
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

                                            key={skill}
                                        >
                                            <div className="badge-item-container">
                                                <Badge
                                                    className="skills-badge" color="primary">{skill}</Badge>
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
