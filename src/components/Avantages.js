import React from 'react';
import '../Avantages.css';

class Avantages extends React.Component {
    render() {
        return (
            <div className="col s12 m6 center" style={{marginTop:50, marginBottom: 50}}>
            <div className="card-panel2 hoverable " >

                <ul/>
                    <li className="text-vert services2 li-avantages"><img src="./img/clock2.png" alt="productivité" className="img-avantages"/> Augmentez votre productivité</li>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/pansement.png" alt="santé" className="img-avantages"/> Préservez la santé des intervenants</li>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/leaf.png" alt="valorisation image" className="img-avantages" style={{marginLeft:-50}}/> Améliorez votre image auprès de vos
                    clients</li>
                    <br></br><br></br>
                    <li className="text-vert services2 li-avantages"><img src="./img/pims.png" alt="conformité" className="img-avantages"/> Soyez en conformité avec la législation</li>
                <ul/>
            </div>
    </div>

);
        
    }
}

export default Avantages;