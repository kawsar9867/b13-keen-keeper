import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Id from '../API/Id';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Id></Id>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;