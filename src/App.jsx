import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
    
      <BrowserRouter>
    
        <NavBar />
        
        <Routes>
       
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
