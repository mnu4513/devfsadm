import React from 'react';
import { Link } from 'react-router-dom';
import learn_icon from '../../assets/ico/learn.svg';

const SidebarAnsible = ({ toggleSidebar, sidebarVisible }) => {

    const content = [{
        name: 'Intro to Shell Scripting',
        link: '/course/ansible/intro-to-shell'
    },  {
        name: 'Basic of Linux Shell',
        link: '/course/ansible/basic-of-shell'
    }, {
        name: 'Variables and User Input',
        link: '/course/ansible/variables-and-user-input'
    }, {
        name: 'String and Array',
        link: '/course/ansible/string-and-array'
    }, {
        name: 'Arithmetic Operations',
        link: '/course/ansible/arithmetic-operations'
    }, {
        name: 'Conditional Statements',
        link: '/course/ansible/conditional-statements'
    }, {
        name: 'Loops in Shell Scripting',
        link: '/course/ansible/loops-in-shell-scripting'
    }, {
        name: 'Functions and Arguments',
        link: '/course/ansible/functions-and-arguments'
    }, {
        name: 'File Handling Redirection',
        link: '/course/ansible/file-handling-redirection'
    }, {
        name: 'Automating Script',
        link: '/course/ansible/script-automation'
    },  {
        name: 'Interview Preparation',
        link: '/course/ansible/interview-prep'
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
                                        <span className='font-cambria'> {e.name} </span>
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

export default SidebarAnsible;