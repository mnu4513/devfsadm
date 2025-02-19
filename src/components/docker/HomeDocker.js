import React, { useState } from 'react';
import NavDocker from './NavDocker';
import SidebarDocker from './SidebarDocker';
import { Outlet } from 'react-router-dom';

const HomeDocker = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div>
            <NavDocker toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className='flex'>
                <SidebarDocker toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeDocker;