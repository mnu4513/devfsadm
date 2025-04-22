import React, { useState } from 'react';
import NavGit from './NavGit';
import SidebarGit from './SidebarGit';
import { Outlet } from 'react-router-dom';

const HomeGit = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div>
            <NavGit toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className='flex'>
                <SidebarGit toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeGit;