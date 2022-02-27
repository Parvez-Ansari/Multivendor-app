import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shops = () =>
{

    const [shopName, setShopName] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [category, setCategory] = useState('')
    const [shopImage, setShopImage] = useState(null)

    useEffect(() =>
    {
        console.log(shopImage)
    }, [shopImage])

    return (
        <>
            <h5 className='mt-2'>Add Merchant</h5>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Shop Image</th>
                        <th>Shop Name</th>
                        <th>Owner Name</th>
                        <th>Full address</th>
                        <th>Contact No.</th>
                        <th>category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-0'>
                            <input className='w-100 '
                                type='file'
                                onChange={(e) =>
                                {
                                    setShopImage(e.target.files[0])
                                    console.log(e.target.files[0], shopImage)
                                }}
                            />
                        </td>
                        <td className='p-0'>
                            <input className='w-100 align-self-stratch p-2 border-0 inp-active'
                                type='text'
                                placeholder='Enter Shop name'
                                value={shopName}
                                onChange={(e) =>
                                {
                                    setShopName(e.target.value)
                                }}
                            />
                        </td>
                        <td className='p-0'>
                            <input className='w-100 align-self-stratch p-2 border-0 inp-active'
                                type='text'
                                placeholder='Enter Shop name'
                                value={ownerName}
                                onChange={(e) =>
                                {
                                    setOwnerName(e.target.value)
                                }}
                            />
                        </td>
                        <td className='p-0'>
                            <input className='w-100 align-self-stratch p-2 border-0 inp-active'
                                type='text'
                                placeholder='Enter Shop name'
                                value={address}
                                onChange={(e) =>
                                {
                                    setAddress(e.target.value)
                                }}
                            />
                        </td>
                        <td className='p-0'>
                            <input className='w-100 align-self-stratch p-2 border-0 inp-active'
                                type='text'
                                placeholder='Enter Shop name'
                                value={contact}
                                onChange={(e) =>
                                {
                                    setContact(e.target.value)
                                }}
                            />
                        </td>
                        <td className='p-0'>
                            <input className='w-100 align-self-stratch p-2 border-0 inp-active'
                                type='text'
                                placeholder='Enter Shop name'
                                value={category}
                                onChange={(e) =>
                                {
                                    setCategory(e.target.value)
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'
                    onClick={(e) =>
                    {
                        const shopImg = new FormData()
                        shopImg.append('ImageShop', shopImage, shopImage.name)
                    }}
                >Add Shop</button>
            </div>

        </>
    )
}

export default Shops;   