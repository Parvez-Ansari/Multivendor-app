import React from 'react'
import AdminHeader from './AdminHeader'
import Shops from './Shops'
import Sidebar from './Sidebar'

const AdminShops = () =>
{
    return (
        <>
            <AdminHeader />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-4 pl-0 hight-100vh overflow-auto'>
                        <Sidebar />
                    </div>

                    <div className='col-xl-9 col-8 hight-100vh overflow-auto'>
                        <div className='p-5 '></div>
                        <Shops />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminShops
