import React, { useContext } from 'react';
import { itemDetailContext } from '../../../App';
import Heading from '../../Customer/CommonComponents/Heading';
import SellerItemCard from '../CommonComponents/SellerItemCard';

const SellerItems = () =>
{
    let heading = "Items"
    const ItemDetailsForCard = useContext(itemDetailContext)

    return (
        <>
            <div className='container'>

                <Heading heading={heading} />

                <div className='row'>
                    {ItemDetailsForCard.map((e, i) =>
                    {
                        return <SellerItemCard key={i} itemDetails={e} />
                    })}
                </div>

            </div>
        </>
    )
}

export default SellerItems
