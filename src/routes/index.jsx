import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

const isLoggedIn = false;

function PrivateRoute() {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/teste" element={<div>Teste</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
