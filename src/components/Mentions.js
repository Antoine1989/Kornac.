import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Mentions = () => {
    return (
            
            <div className="body-mentions">
                <Header/>
                <ul  style={{marginBottom:250}}/>
                        <li> EURL KORNAC</li>
                        <li>Rue Victor SCHOELCHER, ZI des noës</li>
                        <li>Rue Victor SCHOELCHER, ZI des noës</li>
                        <li>06.65.59.32.34 | contact@kornac.fr</li>
                        <li>Capital social : 6000€ </li>
                        <li>SIRET : 91219460200013</li>
                        <li>TVA intra-communautaire : 30912194602</li>
                        <li>Inscription au Registre du Commerce et des Sociétés de Saint-Nazaire</li>
                 <ul/>
            <Footer/>
            </div>
        );
    }


export default Mentions;