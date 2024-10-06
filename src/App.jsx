import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
    
      <BrowserRouter>
    
        <NavBar />
       
        <Routes>
       
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
         
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;
