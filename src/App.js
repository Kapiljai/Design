import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Login from './component/auth/login';
import HomePage from './component/Home/Home'; 
import Register from './component/auth/Signup';
import Footer from './component/Footer';
import { AuthProvider } from './component/auth/AuthProvider';
import Product from './component/Product/Product';
import AIToolProduct from './component/Product/AIToolProduct';
import ListingToolProduct from './component/Product/ListingToolProduct';
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('ai_companies');

  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Routes>
            <Route path="/" element={<HomePage activeTab={activeTab} />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path='/product' element={<Product />} />
            <Route path='/aitoolproduct' element={<AIToolProduct />} />
            <Route path='/listing' element={<ListingToolProduct />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
