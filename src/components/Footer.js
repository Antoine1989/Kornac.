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
          

<footer className="page-footer fixed-bottom" style={{marginTop:100, paddingTop:20}}>
        <div className="container">
          <div className="row">
           
            <div className="col l6 offset-l2 s12">
              
              <ul>

          <div className='footer-line'>
            <li className="text-white li-footer">
                  <FontAwesomeIcon icon={faMobileAndroid} /> 06.65.59.32.34
                  </li>
                  <li className="text-white li-footer">
                  <FontAwesomeIcon icon={faEnvelopeOpen}  style={{marginLeft:10}}/>contact@kornac.fr  
                  </li>
                  {/*<NavLink to="/mentions" ><Mentions/> Mentions Légales</NavLink>*/}
                  <li className="text-white li-footer">
                  <a href="/mentions" style={{marginLeft:10}}>Mentions légales</a>
                  </li>
          </div>
                
             
               
               
                <li className="text-white li-footer"><FontAwesomeIcon icon={faLocationPin} />  Rue Victor Schoelcher - Z.I des Noës, 44550 MONTOIR-DE-BRETAGNE
                </li>
                <div className='footer-line'>
                <li className="li-footer">
                <a href="https://www.facebook.com/profile.php?id=100082932746672" className="text-white " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faFacebookF}  className="icones-footer"/>
                </a>
                </li>
                <li className="li-footer">
                <a href="https://www.linkedin.com/company/kornac/" className="text-white reseaux " target="_blank" rel="noopener noreferrer"><FontAwesomeIcon   icon={faLinkedin} style={{marginLeft:20}} className="icones-footer"/>{/*<Link to="https://www.linkedin.com/company/kornac/"/>*/}
                </a>
                </li>
                </div>
                
              
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