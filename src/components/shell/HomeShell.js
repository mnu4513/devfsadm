import React, { useState } from 'react';
import NavShell from './NavShell';
import SidebarShell from './SidebarShell';
import { Outlet } from 'react-router-dom';

const HomeShell = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div>
            <NavShell toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className='flex'>
                <SidebarShell toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeShell;