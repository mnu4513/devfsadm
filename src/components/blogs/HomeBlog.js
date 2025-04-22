import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeBlog = () => {

    return (
        <div>
            <div className='flex'>
                <Outlet />
            </div>
        </div>
    );
};

export default HomeBlog;