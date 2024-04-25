import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import Review from './components/Review';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useMemo } from 'react';

const App = () => {

  const prices = useMemo(() => Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => parseFloat(Math.random() * 60 + 10).toFixed(2))), []);

  const [allBooks, setAllBooks] = useState([]);
  const [cart, setCart] = useState([{}]);

  return (
    <div className='App'>
    <Router>
    <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home setBooks={setAllBooks}/>} />
          <Route path="/books" element={<Books prices={prices} allBook={allBooks} addCart={cart} setNewCart={setCart} />} />
          <Route path="/review" element={<Review />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart addCart={cart} setNewCart={setCart}/>} />
        </Routes>
    <Footer />
    </Router>
    </div>
  );
}

export default App;