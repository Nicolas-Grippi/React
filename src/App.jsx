import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView/Home';
import InfoView from './views/InfoView/Info';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import CheckOut from './components/Checkout';
import { CartProvider } from "../context/CartContext";
import ItemDetailsContainer from './components/ItemDetailsContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className='contenedor-principal'>
            <Routes>
              <Route exact path="/" element={<HomeView />} />
              <Route exact path="/infobuyer" element={<InfoView />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailsContainer/>} />
              <Route exact path="/cart" element={<Cart />} />
              <Route path="/checkout/:orderId" element={<CheckOut />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
