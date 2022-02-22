import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Merchantscard = (props) =>
{
    return (
        <>
            <div className='col-sm-6 col-md-3 py-3'>
                <Link className='text-decoration-none text-dark' to='/'>
                    <div className='wrapper '>
                        <div className='card'>
                            <div className='card-img-cust'>
                                <img className='card-img-top ' src={props.shopsDetail.image} />
                            </div>
                            <div className="card-body">

                                <h5 className="card-title">{props.shopsDetail.name}</h5>
                                <p className="card-text mb-1">{props.shopsDetail.category}</p>
                                <p className="card-text mb-1">{props.shopsDetail.address}</p>
                                <a href="#" className="btn">More details</a>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Merchantscard
