import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './adminpanel/Component/Sidebar'
import AdminHeader from './adminpanel/Component/Header'

const Admin = () => {
    return (
        <div class="flex h-screen">
            <div class="bg-gray-800 w-64 h-screen fixed">
                <AdminSidebar />
            </div>
            <div class="flex-1 ml-64 overflow-y-auto">
                <AdminHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default Admin