import react, { useState, useEffect, createContext, useContext } from 'react';
import { shopsDetailContext } from '../../../App'
import Heading from '../CommonComponents/Heading';
import Merchantscard from '../CommonComponents/Merchantscard';




const Shops = () =>
{
    let heading = "See collections/Stocks in your favorite shops nearby you"
    const shopsDetailsForCards = useContext(shopsDetailContext)
    console.log(shopsDetailsForCards)

    return (
        <>
            <div className='container'>

                <Heading heading={heading} />

                <div className='row'>
                    {shopsDetailsForCards.map((e, i) =>
                    {
                        return <Merchantscard key={i} shopsDetail={e} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Shops;
