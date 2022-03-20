import React from "react";
import { Container } from 'react-bootstrap';
import { ImTwitter } from "react-icons/im";
import { BsTelegram } from "react-icons/bs";

export default function Footer() {
    return(
        <Container className="footer-container">
            <p style={{fontSize:'70%'}}>LATEST BLOCK: 2891298  TERMS</p>
            <div className="footericon-container">
                <ImTwitter />
                <BsTelegram />
                <p style={{fontSize:'70%'}}>DOCS</p>
            </div>
        </Container>
    )
}