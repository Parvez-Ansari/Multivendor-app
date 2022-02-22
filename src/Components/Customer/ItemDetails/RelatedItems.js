import react, { useState, useEffect, createContext, useContext } from 'react';
import { itemDetailContext } from '../../../App.js'
import ItemCard from '../CommonComponents/ItemCard'

const RelatedItems = () =>
{
    const itemDetailsForCards = useContext(itemDetailContext)
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='wrapper py-4'>
                            <p className='h1 text-center'>Related items</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    {itemDetailsForCards.map((e, i) =>
                    {
                        return <ItemCard key={i} itemDetails={e} />
                    })}
                </div>

            </div>
        </>
    );
}

export default RelatedItems
