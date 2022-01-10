import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';
import Home from '../components/home/Home';

export default (props) => (
  <BrowserRouter>
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  </BrowserRouter>
);
