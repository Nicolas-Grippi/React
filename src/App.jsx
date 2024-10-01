import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import CamisetaView from './views/CamisetaView/CamisetaView';
import PantalonView from './views/PantalonView/PantalonView';
import CamperaView from './views/CamperaView/CamperaView';



function App() {
  return (
    <>
    
      <BrowserRouter>
    
        <NavBar />
        
        <Routes>
       
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/camiseta' element={<CamisetaView />} />
          <Route exact path='/pantalon' element={<PantalonView />} />
          <Route exact path='/campera' element={<CamperaView />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
