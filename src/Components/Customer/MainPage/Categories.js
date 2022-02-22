import react, { useState, useEffect, createContext, useContext } from 'react';
import { itemDetailContext } from '../../../App'
import CategoryCard from '../CommonComponents/CategoryCard';
import Heading from '../CommonComponents/Heading';
import ItemCard from '../CommonComponents/ItemCard'




const Categories = () =>
{
    let heading = "Categories"
    const itemDetailsForCards = useContext(itemDetailContext)

    return (
        <>
            <div className='container'>

                <Heading heading={heading} />

                <div className='row'>
                    {itemDetailsForCards.map((e, i) =>
                    {
                        return <CategoryCard key={i} itemDetails={e} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Categories;
