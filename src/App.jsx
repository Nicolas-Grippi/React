import React from 'react';
import NavBar from './components/NavBar';
//import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import ProductView from './views/ProductView/ProductView';
import ContactView from './views/ContactView/ContactView';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomeView />} />
          <Route exact path='/products' element={<ProductView />} />
          <Route exact path='/contact' element={<ContactView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
