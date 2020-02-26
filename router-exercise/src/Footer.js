import React from 'react';
import Card from 'react-bootstrap/Card';

class Footer extends React.Component {
    render() {
        return (
            <div>
              <Card.Footer className="text-muted"><h1>Footer</h1></Card.Footer>   
            </div>
        );
    }
}

export default Footer