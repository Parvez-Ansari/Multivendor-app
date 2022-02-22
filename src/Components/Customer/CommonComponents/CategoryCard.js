import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = (props) =>
{
    return (
        <>
            <div className='col-sm-6 col-md-3 py-3'>
                <Link className='text-decoration-none' to='/'>
                    <div className='wrapper'>
                        <a className='text-decoration-none text-dark' to='/itempage'>
                            <div div className='card'>
                                <div className='item-card-img'>
                                    <img className='card-img-top ' src={props.itemDetails.image} alt='image' />
                                </div>
                                <div className="card-body text-center bg-primary">
                                    <h5 className='text-white'>{props.itemDetails.category}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default CategoryCard
