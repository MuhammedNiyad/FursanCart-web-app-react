import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Categories from './Pages/Categories';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/items" element={<Categories />}/>
        <Route path="/items/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
