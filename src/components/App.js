import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Home from './Home';
import Mentions from './Mentions';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
   <div  className="App background-kornac" >
    <BrowserRouter>
              <Routes>
                  <Route path="/" exact element={<Home/>}/>
                  <Route path="/mentions"  element={<Mentions/>}/>
                  <Route path="*" element={<Home />} />
              </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
