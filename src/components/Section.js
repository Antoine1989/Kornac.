
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Ruban.css';
class Section extends React.Component {
   

    render() {
        return (
            <Container fluid className="section rounded-section" style={{ marginTop:50, padding:20}}>
            <Row>
            <Col>
            <h2><b>Pourquoi faire appel à Kornac ?</b></h2>
            <p >
                Kornac apporte une offre de services
                adaptés et personnalisés aux acteurs
                de la construction et de la rénovation, mais aussi aux entreprises productrices de déchets non-dangereux.
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