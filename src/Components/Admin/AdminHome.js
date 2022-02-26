import React from 'react'
import AdminHeader from './AdminHeader'
import Home from './Home'
import Sidebar from './Sidebar'

const AdminHome = () =>
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
                        <Home />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome
