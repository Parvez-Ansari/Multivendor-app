import React, { useState, createContext } from 'react'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './CommonComponents/Header';
import Navigation from './CommonComponents/Navigation'
import Shops from './MainPage/Shops';
import Categories from './MainPage/Categories'
import BestDeals from './MainPage/BestDeals'
import Footer from './CommonComponents/Footer'
import ItemDetails from './ItemDetails/ItemDetails';



const CustomerLayout = () =>
{


    return (
        <>
            <Header />
            <Navigation />
            <Shops />
            <Categories />
            <BestDeals />
            <Footer />
        </>
    )
}

export default CustomerLayout




