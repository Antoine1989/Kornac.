import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {  faLocationPin,  faMobileAndroid} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//import Link from "@material-ui/core/Link";

class Footer extends React.Component{
    render(){
        return (

<footer className="page-footer fixed-bottom" style={{marginTop:100, paddingTop:10}}>
        <div className="container">
          <div className="row">
           
            <div className="col l6 offset-l2 s12">
              
              <ul>
                <li className="text-white li-footer"><FontAwesomeIcon icon={faMobileAndroid} />  06.65.59.32.34        | <FontAwesomeIcon icon={faEnvelopeOpen} />      contact@kornac.fr</li>
                
                <li className="text-white li-footer"><FontAwesomeIcon icon={faLocationPin} />  Rue Victor Schoelcher - Z.I des Noës, 44550 MONTOIR-DE-BRETAGNE
                </li>
                <li className="reseaux"><a href="https://www.facebook.com/profile.php?id=100082932746672" className="text-white " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faFacebookF} style={{ marginRight: 20}} className="icones-footer"/></a>
                <a href="https://www.linkedin.com/company/kornac/" className="text-white " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon   icon={faLinkedin} style={{ marginRight: 100}} className="icones-footer"/>{/*<Link to="https://www.linkedin.com/company/kornac/"/>*/}
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*<div className="footer-copyright">
          <div className="container">
            A.Guillou &copy;2022
          </div>
        </div>*/}
     
     
      </footer>
        );

        }
    }
export default Footer;