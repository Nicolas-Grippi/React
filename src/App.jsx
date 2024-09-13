import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenidos a tienda Scaloneta" />
    </>
  );
}
export default App;
