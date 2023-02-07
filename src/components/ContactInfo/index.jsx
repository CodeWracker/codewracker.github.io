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
                    <div key={contactInfo[0][contactInfoItem].link} className="contact-info-item-container">
                        <a
                            href={contactInfo[0][contactInfoItem].link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={contactInfo[0][contactInfoItem].logo} alt="logo" className="contact-info-item-logo" />
                        </a>
                        <div className="text-container" onClick={() => navigator.clipboard.writeText(contactInfo[0][contactInfoItem].value)}>
                            <p className="contact-info-item-text" >{contactInfo[0][contactInfoItem].value}</p>
                            {/* icone de clipboar */}
                            <img className="contact-info-item-clipboard" src="https://img.icons8.com/ios/50/000000/copy.png" alt="copy" />


                        </div>
                    </div>
                ))}
            </Container>
            <Container className="contact-info-row-container row-2">
                {Object.keys(contactInfo[1]).map((contactInfoItem) => (
                    <div key={contactInfo[1][contactInfoItem].link} className="contact-info-item-container">
                        <a
                            href={contactInfo[1][contactInfoItem].link}
                            target="_blank"
                            rel="noopener noreferrer"
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