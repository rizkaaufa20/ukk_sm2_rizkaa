import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './admin/login';
import User from './admin/user';
import TambahUser from "./admin/tambah_user";
import EditUser from "./admin/edit_user";
import Index from './admin';
import Home from "./admin/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="adduser" element={<TambahUser />} />
          <Route path="edituser/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
