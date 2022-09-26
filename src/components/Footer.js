import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {  faLocationPin,  faMobileAndroid} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import Mentions from './Mentions';
//import {NavLink} from "react-router-dom";



//import Link from "@material-ui/core/Link";

class Footer extends React.Component{
    render(){
        return (
          

<footer className="page-footer fixed-bottom" style={{marginTop:100, paddingTop:15}}>
        <div className="container">
          <div className="row">
           
            <div className="col l6 offset-l2 s12">
              
              <ul>
                <li className="text-white li-footer"><FontAwesomeIcon icon={faMobileAndroid} />  06.65.59.32.34
                <FontAwesomeIcon icon={faEnvelopeOpen}  style={{marginLeft:10}}/>contact@kornac.fr  
                
                  {/*<NavLink to="/mentions" ><Mentions/> Mentions Légales</NavLink>*/}
              <a href="/mentions" style={{marginLeft:10}}>Mentions légales</a>
                </li>
               
                <li className="text-white li-footer"><FontAwesomeIcon icon={faLocationPin} />  Rue Victor Schoelcher - Z.I des Noës, 44550 MONTOIR-DE-BRETAGNE
                <a href="https://www.facebook.com/profile.php?id=100082932746672" className="text-white " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faFacebookF} style={{marginLeft:200}}className="icones-footer"/></a>
                <a href="https://www.linkedin.com/company/kornac/" className="text-white reseaux " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon   icon={faLinkedin} style={{marginLeft:20}} className="icones-footer"/>{/*<Link to="https://www.linkedin.com/company/kornac/"/>*/}
                </a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            A.Guillou &copy;2022
          </div>
        </div>
     
     
      </footer>
        );

        }
    }
export default Footer;