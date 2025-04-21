import React, { useState } from 'react';
import NavAnsible from './NavAnsible';
import SidebarAnsible from './SidebarAnsible';
import { Outlet } from 'react-router-dom';

const HomeAnsible = () => {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div>
            <NavAnsible toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
            <div className='flex'>
                <SidebarAnsible toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeAnsible;