import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {  faLocationPin,  faMobileAndroid} from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component{
    render(){
        return (

<footer className="page-footer fixed-bottom" style={{marginTop:100, paddingTop:20}}>
        <div className="container">
          <div className="row">
           
            <div className="col l6 offset-l2 s12">
              
              <ul>
                <li className="text-white li-footer"style={{ paddingBottom:10}}><FontAwesomeIcon icon={faMobileAndroid} />  06.65.59.32.34        | <FontAwesomeIcon icon={faEnvelopeOpen} />      contact@kornac.fr</li>
                
                <li className="text-white li-footer"><FontAwesomeIcon icon={faLocationPin} />  Rue Victor Schoelcher - Z.I des Noës, 44550 MONTOIR-DE-BRETAGNE</li>
               
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            A.Guillou &copy;2022
          </div>
        </div>
     
     
      </footer>
        );

        }
    }
export default Footer;