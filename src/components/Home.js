

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
import Avantages from './Avantages';


function Home() {
    return (
        <div className="App background-kornac">
        <Header />
        <LogoStart/> 
        <Ruban/>
        <Description/>
        <Services/>
        <Ruban2/>
        <Section/>
        <br/><br/><br/>
        <Avantages/>    
        <Footer/>
        </div>
        );
    }
    
    export default Home;
    