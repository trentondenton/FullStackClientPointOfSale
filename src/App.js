import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import POS from './pages/pos/pos';
import PosItem from './pages/pos/positem';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pos" element={<POS />}>
          <Route path=":productID" element={<PosItem />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
