import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-10/11 mx-auto' >
           <Navbar></Navbar>
        
   <main  >
           <Outlet></Outlet> 
           </main>
        
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;