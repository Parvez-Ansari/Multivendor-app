import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

const SellerProfile = () =>
{
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='wrapper'>
                            <div className=''>
                                <div className='card-img-cust-1 d-flex justify-content-center bg-secondary'>
                                    <img className='h-100' src='https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' alt='Shop-Image' />
                                </div>
                                <div className="">
                                    <h5 className="card-title h1">Shop Name</h5>
                                    <p className="card-text mb-0">Seller name Contact No. XXXXXXXXX</p>
                                    <p className="card-text mb-0">Category :- XXXXXX</p>
                                    <p className="card-text">Address :- Rafael Tower, LG-8, 9, Greater Kailash Road, Indore, Madhya Pradesh 452001</p>
                                    <Link to="/seller" className="btn btn-primary">Edit Profile</Link>
                                    <Link to="/seller" className="btn btn-primary mx-2">Add items</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerProfile;