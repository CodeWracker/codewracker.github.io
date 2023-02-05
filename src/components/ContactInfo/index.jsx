import React from 'react';
import { Container } from 'reactstrap';
import './contactInfo.css';
import data from '../../data.json';

function ContactInfo() {
    const contactInfo = data.myData.contact_info;
    return (
        <Container className="page-section contact-info-container">

            <Container className="contact-info-row-container">
                {Object.keys(contactInfo[0]).map((contactInfoItem) => (
                    <div className="contact-info-item-container">
                        <img src={contactInfo[0][contactInfoItem].logo} alt="logo" className="contact-info-item-logo" />
                        <p className="contact-info-item-text">{contactInfo[0][contactInfoItem].value}</p>
                    </div>
                ))}
            </Container>
            <Container className="contact-info-row-container">
                {Object.keys(contactInfo[1]).map((contactInfoItem) => (
                    <div className="contact-info-item-container">
                        <a
                            href={contactInfo[1][contactInfoItem].value}
                            target="_blank"
                        >
                            <img src={contactInfo[1][contactInfoItem].logo} alt="logo" className="contact-info-item-logo" />
                        </a>

                    </div>
                ))}
            </Container>

        </Container>
    );
}
export default ContactInfo;