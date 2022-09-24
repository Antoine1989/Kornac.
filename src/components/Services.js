import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Services extends React.Component{
    render(){
        return (
		
					<div className="col s12 m6 center" style={{marginTop:50, marginBottom: 50}}>
                        <div className="card-panel hoverable " >
		
                            <ul/>
                                <li className="text-corail servicesvert"><FontAwesomeIcon icon={faCheck} /> Tri à la source</li>
                                <li className="text-corail servicesvert"><FontAwesomeIcon icon={faCheck} />Collecte</li>
                                <li className="text-corail servicesvert"><FontAwesomeIcon icon={faCheck} />Valorisation</li>
                                <li className="text-corail servicesvert"><FontAwesomeIcon icon={faCheck} />Traçabilité</li>
                            <ul/>
                        </div>
				</div>
			
            );

        }
        }
    
export default Services;