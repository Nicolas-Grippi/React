import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/itemDetailsContainer'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main> 
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailsContainer />} />
            <Route path='/cart' Component={Cart}/>
            <Route path='/checkout' Component={Checkout}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
