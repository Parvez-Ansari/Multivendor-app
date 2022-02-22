import react, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CustomerLayout from './Components/Customer/CustomerLayout';
import SellerLayout from './Components/Seller/SellerLayout';
import AdminLayout from './Components/Admin/AdminLayout';
import ItemPage from './Components/Customer/ItemPage';
import LoginPage from './Components/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './Components/SignUpPage';
const ShopsDetail = [

  {
    name: 'Ganesh',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    category: 'Food',
    address: 'vijay nagar indore'
  },
  {
    name: 'Ganesh',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    category: 'Shoes',
    address: 'vijay nagar indore'
  },
  {
    name: 'Ganesh',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    category: 'XXXXXX',
    address: 'vijay nagar indore'
  },
  {
    name: 'Ganesh',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    category: 'XXXXXX',
    address: 'vijay nagar indore'
  }
]

const ItemDetail = [
  {
    name: 'jordan',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    image1: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    image2: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    image3: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    description: "The lorem ipsum is a placeholder text used in publishing and graphic design",
    category: "Shoes",
    prize: 'XXX',
    discount: "XX",
    dilivery: "Yes",
  },
  {
    name: 'jordan',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: "The lorem ipsum is a placeholder text used in publishing and graphic design",
    category: "Shirts",
    prize: 'XXX',
    discount: "XX",
    dilivery: "Yes",
  },
  {
    name: 'jordan',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    description: "The lorem ipsum is a placeholder text used in publishing and graphic design",
    category: "Jeans",
    prize: 'XXX',
    discount: "XX",
    dilivery: "Yes",
  },
  {
    name: 'jordan',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: "The lorem ipsum is a placeholder text used in publishing and graphic design",
    category: "T-Shirts",
    prize: 'XXX',
    discount: "XX",
    dilivery: "Yes",
  }
]

const shopsDetailContext = createContext()

const itemDetailContext = createContext()


function App()
{


  return (
    <>
      <shopsDetailContext.Provider value={ShopsDetail}>
        <itemDetailContext.Provider value={ItemDetail}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CustomerLayout />} />
              <Route path="/itempage" element={<ItemPage />} />
              <Route path="/seller" element={<SellerLayout />} />
              <Route path="/admin" element={<AdminLayout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />


            </Routes>
          </BrowserRouter>

        </itemDetailContext.Provider>
      </shopsDetailContext.Provider>

    </>



  );
}

export default App;
export { shopsDetailContext, itemDetailContext };
