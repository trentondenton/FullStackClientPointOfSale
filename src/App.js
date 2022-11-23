import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { UserProvider } from './utils/UserProvider';
import { CompanyProvider } from './utils/CompanyProvider';
import { ItemProvider } from './utils/ItemProvider';

import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import POS from './pages/pos/pos';
import Settings from './pages/settings/settings';


function App() {

  return (
    <CompanyProvider>
      <UserProvider>
        <ItemProvider>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="/pos" element={<POS />} />
            </Route>
          </Routes>
        </ItemProvider>
      </UserProvider>
    </CompanyProvider>
  );
}

export default App;
