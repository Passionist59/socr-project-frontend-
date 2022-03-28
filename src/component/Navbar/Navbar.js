import React from 'react';
import { Container, Navbar, Nav  } from "react-bootstrap";
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <>
            <Navbar expand="lg" sticky="top">
                <Container className='navigation-container'>
                    <Nav.Link href="dashboard">DASHBOARD</Nav.Link>
                    <Nav.Link href="mypage">MYPAGE</Nav.Link>
                    <Nav.Link href="earn">EARN</Nav.Link>
                    <Nav.Link href="utility">UTILITY+</Nav.Link>
                    <div className='connect-wallet-container'>
                        <Button className='recent-button-light'>Connect Wallet</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;