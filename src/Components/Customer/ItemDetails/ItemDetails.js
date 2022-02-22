import React, { useContext, useState } from 'react'

const ItemDetails = (prop) =>
{

    // creating state for small images 
    let [image, setImage] = useState('https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
    let [image1, setImage1] = useState('https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80')
    let [image2, setImage2] = useState('https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')
    let [image3, setImage3] = useState('https://images.unsplash.com/photo-1558171813-4c088753af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')

    // and this is the big image state 
    let [bigImage, setBigImage] = useState(image)

    // this is the function for changing big image on hover on small images
    let changeImg = (e) =>
    {
        setBigImage(e.target.src)
    }
    return (
        <>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            {/* item other images */}
                            <div className='col-2'>
                                <div className='d-flex flex-column'>
                                    <div className='item-small-img d-flex justify-content-center mb-3' >
                                        <img onMouseEnter={changeImg} className='h-100' src={image} />
                                    </div>
                                    <div className='item-small-img d-flex justify-content-center mb-3'>
                                        <img onMouseEnter={changeImg} className='h-100' src={image1} />
                                    </div>
                                    <div className='item-small-img d-flex justify-content-center mb-3'>
                                        <img onMouseEnter={changeImg} className='h-100' src={image2} />
                                    </div>
                                    <div className='item-small-img d-flex justify-content-center'>
                                        <img onMouseEnter={changeImg} className='h-100' src={image3} />
                                    </div>
                                </div>
                            </div>

                            {/* Item main image */}

                            <div className='col-10'>
                                <div className='item-img-wrapper border d-flex justify-content-center'>
                                    <img className='' src={bigImage} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='wrapper'>
                            <h2>Item name</h2>
                            <p className='fw-bold'>Category: Name </p>
                            <p className='lean'>
                                <span className='fw-bold'>description:</span>
                                The lorem ipsum is a placeholder text used in publishing and graphic design
                            </p>

                            <p className='fw-bold '>
                                <span className='fw-bold'>Prize:</span>
                                <span className='text-decoration-line-through mx-2 h4'>Rs.500/-</span>
                                <span className='fw-bold'>10% OFF</span>
                                <span className='fw-bold d-block h4'>Rs.400/-</span>
                            </p>

                            <p className='fw-bold'>Shop Name</p>
                            <p className='fw-bold'>Shop Address</p>
                            <p className='fw-bold'>Shop ownername Contact No.XXXXXXXXXX</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetails
