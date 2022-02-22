import React from 'react'
import drop from "../../../Image/caret-down.png"

const Navigation = () => 
{
    return (
        <>
            <nav className='bg-1 py-2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='wrapper'>
                                <ul className='nav'>
                                    <li><a className='nav-link first' href='#'>Best Deals</a></li>
                                    <li className='nav-link cursor-pointer position-relative categories-nav-pa'>Categories<img className='drop-img' src={drop} />
                                        <ul className='nav flex-column position-absolute categories-nav bg-1'>
                                            <li><a className='nav-link' href='#'>Categories 1</a></li>
                                            <li><a className='nav-link' href='#'>Categories 2</a></li>
                                            <li><a className='nav-link' href='#'>Categories 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a className='nav-link' href='#'>Locactions</a></li>
                                    <li><a className='nav-link' href='#'>Top Rated</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
