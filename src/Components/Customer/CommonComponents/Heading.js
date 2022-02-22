import React from 'react';

const Heading = (props) =>
{
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className='wrapper py-4'>
                        <p className='h1 text-center'>{props.heading}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Heading
