import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/itemDetailsContainer'; 

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
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
