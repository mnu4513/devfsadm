import React, { useState } from 'react';
import NavSolaris from './NavSolaris';
import SidebarSolaris from './SidebarSolaris';
import { Outlet } from 'react-router-dom';

const HomeSolaris = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div>
            <NavSolaris toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className='flex'>
                <SidebarSolaris toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <Outlet/>
            </div>
        </div>
    )
}

export default HomeSolaris;