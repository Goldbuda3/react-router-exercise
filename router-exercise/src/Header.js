import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Card.Header className="text-muted">
                <Navbar>
                <Navbar.Brand href="/">Header</Navbar.Brand>
                <Nav className="justify-content-end">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Feed">Feed</NavLink>
                    <NavLink to="/FAQ">FAQ</NavLink>
                </Nav>
               

                </Navbar>
                </Card.Header>
            </div>
        );
    }
}

export default Header