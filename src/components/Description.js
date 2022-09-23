import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Description extends React.Component{
    render(){
        return (
            <Container fluid="md">
            <Row>
              <Col xs={6} md={5} className="test text-ruban">
                Une solution simple et adaptée
            pour l’évacuation et la gestion
            de vos déchets de chantiers.</Col>
            </Row>
          </Container>
            
            
            );

        }
    }
export default Description;