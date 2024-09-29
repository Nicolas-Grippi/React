import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductView from './components/ProductView';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/products' element={<ItemListContainer greetings="Bienvenidos a tienda Scaloneta" />} />
          <Route path="/product/:id" element={<ProductView/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
