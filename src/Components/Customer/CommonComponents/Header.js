import React, { useState } from 'react';
import srimg from '../../../Image/Srimg.png'

const Header = () =>
{
    const [search, setSearch] = useState("")
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='wrapper d-flex justify-content-between py-3'>
                                <a className='navbar-brand fs-1' href='#'>LOGO</a>
                                <form className='d-flex border align-self-center rounded overflow-hidden'>
                                    <input value={search}
                                        className='border-0 px-3'
                                        type='text'
                                        placeholder='Search for shops'
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }></input>
                                    <button className='btn btn-primary rounded-0'><img className='search-img' src={srimg} alt='Img'></img></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;

