import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Footer from './Footer';
import Header from './Header';
import Ruban from './Ruban';
import Description from './Description';
import LogoStart from './LogoStart';
import Services from './Services';
import Ruban2 from './Ruban2';
import Section from './Section';


function App() {
  return (
    
   <div className="App background-kornac">
    <Header />
    <LogoStart/>
      <h1></h1>
    <Ruban/>
    <Description/>
    <Services/>
    <Ruban2/>
    <Section/>
    <br/><br/><br/>

    <Footer/>
    </div>
   
  );
}

export default App;
