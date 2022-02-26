import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () =>
{
    return (
        <>
            <div className='sidebar-wrapper  border-right h-100'>
                <div className='d-flex flex-column'>
                    <img className='side-bar-img' src='https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png' alt='admin Image ' />
                    <p className='text-center'>Admin Name</p>
                </div>

                <h2 className='text-center'>Menu</h2>

                <ul className='navbar nav d-block'>
                    <li className='sidebar-nav fw-bold'>
                        <Link to="/admin" className='d-block p-3 text-decoration-none text-dark'>Home</Link>
                    </li>
                    <li className='sidebar-nav fw-bold'>
                        <Link to="/adminShops" className='d-block p-3 text-decoration-none text-dark'>Shops</Link>
                    </li>
                    <li className='sidebar-nav fw-bold'>
                        <Link to="/adminUsers" className='d-block p-3 text-decoration-none text-dark'>Users</Link>
                    </li>
                    <li className='sidebar-nav fw-bold'>
                        <Link to="/adminProducts" className='d-block p-3 text-decoration-none text-dark'>Products</Link>
                    </li>
                    {/* <li className='sidebar-nav fw-bold'>
                        <Link to="#" className='d-block p-3 text-decoration-none text-dark'>Home</Link>
                    </li> */}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
