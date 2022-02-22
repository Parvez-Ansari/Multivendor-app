import React from 'react'
import { Link } from 'react-router-dom'

const SellerItemCard = (props) =>
{
    return (
        <>

            <div className='col-sm-6 col-md-3 py-3'>
                <div className='wrapper'>
                    <Link className='text-decoration-none text-dark' to='/seller'>
                        <div div className='card'>
                            <div className='item-card-img'>
                                <img className='card-img-top ' src={props.itemDetails.image} alt='image' />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{props.itemDetails.name}</h5>
                                <p className="card-text mb-1">{props.itemDetails.description}</p>
                                <p className="card-text mb-1">{props.itemDetails.prize}</p>
                                <p className="card-text mb-1">{props.itemDetails.discount}</p>
                                <p className="card-text mb-1">Dilivery: {props.itemDetails.dilivery}</p>
                                <Link to='/seller' className="btn btn-primary mx-2 text-decoration-">Edit</Link>
                                <Link to='/seller' className="btn btn-primary mx-2 text-decoration-">Delete</Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SellerItemCard

//
// {props.itemDetails.name}
//
// {props.itemDetails.prize}
// {props.itemDetails.discount}
// {props.itemDetails.dilivery}
