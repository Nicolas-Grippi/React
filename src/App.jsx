import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/itemDetailsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greetings="Bienvenido a la tienda!"/>
        <ItemDetailsContainer />

        <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailsContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
