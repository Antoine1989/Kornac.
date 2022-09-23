
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Ruban.css';
class Section extends React.Component {
   

    render() {
        return (
            <Container fluid className="section rounded" style={{marginBottom : 100, padding:15}}>
            <Row>
            <Col>
            <h2 className="text-ruban">Pourquoi faire appel à Kornac ?</h2>
            <p >
                Kornac apporte une offre de services
                adaptés et personnalisés aux acteurs
                de la construction et de la rénovation.
            </p>
            <b >Confiez-nous la gestion de vos
            déchets et ainsi :</b>
            </Col>
            </Row>
            </Container>  
        );
    }
}



export default Section;