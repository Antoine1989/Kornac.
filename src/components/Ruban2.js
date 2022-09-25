
import '../App.css';
import React from 'react';
import '../Ruban.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AutresServices from './AutresServices';

class Ruban2 extends React.Component{
    render(){
        return (
            
        <Row style={{marginBottom:100 }}>
            <Col>
                <div className="ruban2  ">  
                <img src="./img/plus.png" alt="autres service" style={{marginLeft:50, marginBottom:10}}/>   
                <h2 className='text-ruban2'>Nos autres services:  </h2>  
                <AutresServices/>
                </div> 
                
            </Col>
        </Row>

         
        );
    }
}
export default Ruban2;