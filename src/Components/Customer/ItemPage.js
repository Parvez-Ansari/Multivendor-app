import React from 'react';
import Footer from './CommonComponents/Footer';
import Header from './CommonComponents/Header';
import Navigation from './CommonComponents/Navigation';
import ItemDetails from './ItemDetails/ItemDetails';
import RelatedItems from './ItemDetails/RelatedItems';

const ItemPage = () =>
{
    return (
        <>
            <Header />
            <Navigation />
            <ItemDetails />
            <RelatedItems />
            <Footer />
        </>
    );
}

export default ItemPage
