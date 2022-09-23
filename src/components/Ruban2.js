
import '../App.css';
import React from 'react';
import '../Ruban.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AutresServices from './AutresServices';

class Ruban2 extends React.Component{
    render(){
        return (
            
        <Row style={{marginBottom: 50}}>
            <Col>
                <div className="ruban2 moved2 rounded">     
                <h2 className='text-ruban'>Nos autres services: </h2>  
                <AutresServices/>
                </div> 
                
            </Col>
        </Row>

         
        );
    }
}
export default Ruban2;