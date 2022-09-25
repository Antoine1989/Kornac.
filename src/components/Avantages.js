import React from 'react';
import '../Avantages.css';

class Avantages extends React.Component {
    render() {
        return (
            <div className="col s12 m6 center" style={{marginTop:10, marginBottom: 150}}>
            <div className="card-panel2 hoverable " >

                <ul/>
                    <li className="text-vert services2 li-avantages"><img src="./img/clock3.png" alt="productivité" className="img-avantages"/> Augmentez votre productivité</li>
                    <p className="p-avantages">Ne perdez plus de temps à attendre votre tour
                    à la déchèterie :<br></br> nous collectons régulièrement
                    vos déchets.</p>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/pansement.png" alt="santé" className="img-avantages"/> Préservez la santé des intervenants</li>
                    <p className="p-avantages">Avec des chantiers moins accidentogènes
                    et moins de manipulations manuelles :<br></br>
                    nous sommes équipés de camions grue pour
                    faciliter l’évacuation de vos déchets. </p>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/leaf.png" alt="valorisation" className="img-avantages" style={{width:80}}/> Améliorez votre image auprès de vos
                    clients</li>
                    <p className="p-avantages">En participant à la préservation des ressources :<br></br>
                    nous nous efforçons de trouver le meilleur moyen
                    de valoriser vos déchets et ainsi leur donner une
                    seconde vie.</p>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/pims.png" alt="conformité" className="img-avantages" style={{width:80}}/> Passez au tri « 7 flux » et soyez en conformité avec la législation</li>
                    <p className="p-avantages"> Décret n° 2021-950 du 16 juillet 2021 relatif au tri
                     des déchets : <br></br>nous fournissons une attestation
                    de valorisation.</p>
                <ul/>
            </div>
    </div>

);
        
    }
}

export default Avantages;