

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Header from './Header';
import Ruban from './Ruban';
import Description from './Description';
import LogoStart from './LogoStart';
import Services from './Services';
import Ruban2 from './Ruban2';
import Section from './Section';
import Avantages from './Avantages';
import FooterBootstrap from './FooterBootstrap';

function Home() {
    return (
        <div>
        <Header />
        <LogoStart/> 
        <Ruban/>
        <Description/>
        <Services/>
        <Ruban2/>
        <Section/>
        <br/><br/><br/>
        <Avantages/>    
       {/* <Footer/>*/}
       <FooterBootstrap/>
        </div>
        );
    }
    
    export default Home;
    