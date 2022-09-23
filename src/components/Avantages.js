import React from 'react';
import '../Avantages.css';

class Avantages extends React.Component {
    render() {
        return (
            <div className="col s12 m6 center" style={{marginTop:10, marginBottom: 150}}>
            <div className="card-panel2 hoverable " >

                <ul/>
                    <li className="text-vert services2 li-avantages"><img src="./img/clock2.png" alt="productivité" className="img-avantages"/> Augmentez votre productivité</li>
                    <p>Ne perdez plus de temps à attendre votre tour
                    à la déchèterie : nous collectons régulièrement
                    vos déchets.</p>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/pansement.png" alt="santé" className="img-avantages"/> Préservez la santé des intervenants</li>
                    <p>avec des chantiers moins accidentogènes
                    et moins de manipulations manuelles :
                    nous sommes équipés de camions grue pour
                    faciliter l’évacuation de vos déchets. </p>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/leaf.png" alt="valorisation image" className="img-avantages" /> Améliorez votre image auprès de vos
                    clients</li>
                    <p>en participant à la préservation des ressources :
                    nous nous efforçons de trouver le meilleur moyen
                    de valoriser vos déchets et ainsi leur donner une
                    seconde vie.</p>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/pims.png" alt="conformité" className="img-avantages"/> Soyez en conformité avec la législation</li>
                    <p> (décret n° 2021-950 du 16 juillet 2021 relatif au tri
                        des déchets) : nous fournissons une attestation
                        de valorisation.</p>
                <ul/>
            </div>
    </div>

);
        
    }
}

export default Avantages;