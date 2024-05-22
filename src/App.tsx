import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Categories from './Pages/Categories';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import AuthPage from './Pages/AuthPage';
import PaymentConfm from './Pages/PaymentConfm';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/items" element={<Categories />}/>
        <Route path="/items/:id" element={<Product />}/>
        <Route path="/user/payment" element={<PaymentConfm />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/authorize" element={<AuthPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
