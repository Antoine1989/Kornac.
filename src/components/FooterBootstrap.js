import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
 
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import {  faLocationPin,  faMobileAndroid} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white fixed-bottom ' >
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a  href='https://www.facebook.com/profile.php?id=100082932746672' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon  icon={faFacebookF}  className="icones-footer" style={{marginRight:20}}/>
          </a>
          <a     href='https://www.linkedin.com/company/kornac/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon   icon={faLinkedin} className="icones-footer" style={{marginRight:20}}/>
          </a>
        </section>
      </MDBContainer>
      <div className='footer-line'>
      <MDBRow>
        <MDBCol>
        <ul>
            <li className="text-white li-footer">
                <FontAwesomeIcon icon={faMobileAndroid} /> 06.65.59.32.34  |    
                <FontAwesomeIcon icon={faEnvelopeOpen} />  contact@kornac.fr
             </li>
                 
         </ul>
         </MDBCol>
         </MDBRow>
                  <ul>
                  {/*<NavLink to="/mentions" ><Mentions/> Mentions Légales</NavLink>*/}
                  
                  
                  <li className="text-white li-footer"><FontAwesomeIcon icon={faLocationPin} />  Rue Victor Schoelcher - Z.I des Noës, 44550 MONTOIR-DE-BRETAGNE
                  
                </li>
                <li className="text-white li-footer">
                  <a href="/mentions" style={{marginRight:50}} >Mentions légales</a>
                  © Antoine Guillou
                    
                  </li>
             </ul>
          </div>
     
    </MDBFooter>
  );
}