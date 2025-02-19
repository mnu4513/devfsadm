import React from 'react';
import { Link } from 'react-router-dom';

const NavDocker = ({ toggleSidebar }) => {
    return (
        <nav className='flex flex-row justify-between bg-gray-900 text-white pr-6 pl-1'>
            <button className="p-2" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-300">
                    <rect width="352" height="32" x="80" y="96"></rect>
                    <rect width="352" height="32" x="80" y="240"></rect>
                    <rect width="352" height="32" x="80" y="384"></rect>
                </svg>
            </button>
            <button> <Link to='/course/solaris/videos'> Videos </Link> </button>
        </nav>
    );
};

export default NavDocker;