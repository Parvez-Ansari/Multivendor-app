import react, { useState, useEffect, createContext, useContext } from 'react';
import { itemDetailContext } from '../../../App.js'
import ItemCard from '../CommonComponents/ItemCard'
import Heading from '../CommonComponents/Heading'

const BestDeals = () =>
{
    let heading = "Today's Best Deals"
    const itemDetailsForCards = useContext(itemDetailContext)

    return (
        <>
            <div className='container'>

                <Heading heading={heading} />

                <div className='row'>
                    {itemDetailsForCards.map((e, i) =>
                    {
                        return <ItemCard key={i} itemDetails={e} />
                    })}
                </div>

            </div>
        </>
    )
}

export default BestDeals;
