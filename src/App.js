// import logo from './logo.svg';
import { Container } from "react-bootstrap";
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './pages/ProductList';
import Header from './components/Header';
import ProductDetail from "./pages/ProductDetail";
import CartScreen from "./pages/CartScreen";
import CartModal from "./pages/CartModal";
import OrderDetail from "./pages/OrderDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<ProductList />} exact />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/orderdetails" element={<OrderDetail />} />
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
