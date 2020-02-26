import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                <h1>Header</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Feed">Feed</NavLink>
                <NavLink to="/FAQ">FAQ</NavLink>
                </Card>
            </div>
        );
    }
}

export default Header