import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import HomeView from './views/HomeView/Home';
import InfoView from './views/InfoView/Info';
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailsContainer';
import { CartProvider } from "../context/CartContext";

function MainContent() {
  const location = useLocation();

  return (
    <>
      <div className='contenedor-principal'>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/infobuyer" element={<InfoView />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/checkout/:orderId" element={<Checkout />} />
        </Routes>
      </div>
      {location.pathname !== '/cart' && location.pathname !== '/infobuyer' && !location.pathname.startsWith('/Checkout') && (
        
      )}
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <MainContent /> {/* Agregado aquí para mostrar el contenido principal */}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
