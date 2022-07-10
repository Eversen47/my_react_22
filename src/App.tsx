import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import UsersPage from 'entities/UsersPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users_page" element={<UsersPage />} />
    </Routes>
  );
};

export default App;
