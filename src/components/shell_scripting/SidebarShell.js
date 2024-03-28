import React from 'react';
import { Link } from 'react-router-dom';
import learn_icon from '../../assets/ico/learn.svg';

const SidebarShell = ({ toggleSidebar, sidebarVisible }) => {

    const content = [{
        name: 'Introduction to Shell Scripting',
        link: '/course/shell/intro-to-shell'
    },  {
        name: 'setting up environment',
        link: '/course/shell/setup-env'
    }, {
        name: 'Scripting Concept',
        link: '/course/shell/scripting-concept'
    }, {
        name: 'Control Structure',
        link: '/course/shell/control'
    }, {
        name: 'Files and Directories',
        link: '/course/shell/files-and-dir'
    }, {
        name: 'Text Processing',
        link: '/course/shell/text-processing'
    }, {
        name: 'Functions and Script Organization',
        link: '/course/shell/functions'
    }, {
        name: 'Error Handling and Debugging',
        link: '/course/shell/error-handling'
    }, {
        name: 'Advance Topics',
        link: '/course/shell/advance-topies'
    }, {
        name: 'Projects',
        link: '/course/shell/projects'
    },  {
        name: 'Interview Preparation',
        link: '/course/shell/interview-prep'
    }];




    return (
        <div className='flex flex-col flex-wrap'>
            {/* {
                content.map((e) => <button  key={e.name} className='border-2 px-2 py-1 mr-6 mb-4 '> <Link to={e.link}> {e.name} </Link>  </button>)
            } */}


            <div className={`flex flex-col h-full p-3 w-60 bg-gray-900 text-gray-100 ${sidebarVisible ? '' : 'hidden'}`}>


                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {
                            content.map((e) => (
                                <li className="rounded-sm" key={e.name}>
                                    <Link rel="noopener noreferrer" to={e.link} onClick={() => toggleSidebar()} className="flex items-center p-2 space-x-3 rounded-md">
                                        <img src={learn_icon} alt='' className='bg-white rounded-full' />
                                        <span> {e.name} </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SidebarShell;