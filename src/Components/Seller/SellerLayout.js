import React from 'react'
import Footer from '../Customer/CommonComponents/Footer'
import SellerItems from './SellerLayoutComponents/SellerItems'
import SellerProfile from './SellerProfile'

const SellerLayout = () =>
{

    return (
        <>
            <SellerProfile />
            <SellerItems />
            <Footer />
        </>
    )
}

export default SellerLayout