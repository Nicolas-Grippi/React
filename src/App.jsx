import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      {<ItemListContainer greetings="Bienvenidos a tienda Scaloneta" />}
      </main>
    </div>
  );
}

export default App;
