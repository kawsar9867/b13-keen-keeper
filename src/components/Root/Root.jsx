
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Home from '../NavBar/Home/Home';
import { Mycontext } from '../API/Context';
import { useState } from 'react';


const Root = () => {
  const [card, setCard] = useState([]);
  return (
    <Mycontext.Provider value={{card, setCard}}>
    <div>
      <Navbar></Navbar>
      <Outlet ></Outlet>
      <Footer></Footer>
    </div>
    </Mycontext.Provider>
  );
};

export default Root;