import React, { useState } from 'react'
import srimg from '../../Image/Srimg.png'
import checkbox from '../../Image/checkbox.png'
import contact from '../../Image/contact-book.png'
import message from '../../Image/message.png'
import bell from '../../Image/bell.png'

export default function AdminHeader()
{
    const [search, setSearch] = useState("")

    return (
        <>
            <div className='container-fluid border-bottom fixed-top z-index bg-white'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='wrapper d-flex justify-content-between align-items-center py-3 '>
                            <div className='w-25'>
                                <h1 className='text-center text-secondary'>LOGO</h1>
                            </div>

                            <div className='w-25 d-flex'>
                                <form className='d-flex border align-self-center rounded overflow-hidden'>
                                    <input value={search} 
                                        className='border-0 px-3 bg-white'
                                        type='text'
                                        placeholder='Search for shops'
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }></input>
                                    <button className='btn btn-primary rounded-0'><img className='search-img' src={srimg} alt='Img'></img></button>
                                </form>
                            </div>

                            <div className='headericons w-25 py-3 d-flex justify-content-between px-5'>
                                <div>
                                    <img className='w-100' src={checkbox} />
                                </div>
                                <div>
                                    <img className='w-100' src={contact} />
                                </div>
                                <div>
                                    <img className='w-100' src={message} />
                                </div>
                                <div>
                                    <img className='w-100' src={bell} />
                                </div>
                            </div>
                            <div className='w-25 d-flex justify-content-end px-5'>
                                <div className='d-flex flex-column'>
                                    <p className='mb-0 '>Admin Name</p>
                                    <p className='mb-0'>Kuchbhi</p>
                                </div>
                                <div className='border rounded-circle profile-icon mx-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
