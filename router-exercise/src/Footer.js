import React from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Feed">Feed</NavLink>
                <NavLink to="/FAQ">FAQ</NavLink>
            </div>
        );
    }
}

export default Footer