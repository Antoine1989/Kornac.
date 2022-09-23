import '../App.css';
import React from 'react';
import '../Ruban.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Ruban extends React.Component{
    render(){
        return (
            
        <Row style={{marginBottom: 50}}>
            <Col>
                <div className="ruban moved rounded">     
                <h2 className='text-ruban'>Gestion de déchets et logistique de chantiers</h2>     
                </div> 
            </Col>
        </Row>

         
        );
    }
}
export default Ruban;