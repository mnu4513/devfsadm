import React, { useState } from 'react';
import NavLinux from './NavLinux';
import SidebarLinux from './SidebarLinux';
import { Outlet } from 'react-router-dom';

const HomeLinux = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div>
            <NavLinux toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className='flex'>
                <SidebarLinux toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <Outlet/>
            </div>
        </div>
    )
}

export default HomeLinux;