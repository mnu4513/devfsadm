import React from 'react';
import { Link } from 'react-router-dom';
import learn_icon from '../../assets/ico/learn.svg';

const SidebarShell = ({ toggleSidebar, sidebarVisible }) => {

    const content = [{
        name: 'Introduction to Shell',
        link: '/course/shell/intro-to-shell'
    }, {
        name: 'Types of shell',
        link: '/course/shell/types-of-shell'
    }, {
        name: 'Shell Scripting',
        link: '/course/shell/shell-scripting'
    }, {
        name: 'Creating and Running a Scripting File',
        link: '/course/shell/running-sh-file'
    }, {
        name: 'Comments in Shell Script',
        link: '/course/shell/comments'
    }, {
        name: 'Variables',
        link: '/course/shell/variables'
    }, {
        name: 'Array',
        link: '/course/shell/array'
    }, {
        name: 'String',
        link: '/course/shell/string'
    }, {
        name: 'Value Prompt',
        link: '/course/shell/value-prompt'
    }, {
        name: 'Arithmetic Operation',
        link: '/course/shell/arithmetic-operation'
    }, {
        name: 'If Else Conditions',
        link: '/course/shell/if-else'
    }, {
        name: 'Switch Case',
        link: '/course/shell/switch-case'
    }, {
        name: 'Logical Operators',
        link: '/course/shell/logical-operators'
    }, {
        name: 'For Loop',
        link: '/course/shell/for-loop'
    }, {
        name: 'While Loop',
        link: '/course/shell/while-loop'
    }, {
        name: 'Functions',
        link: '/course/shell/functions'
    }, {
        name: 'Bash Variables',
        link: '/course/shell/bash-variables'
    }, {
        name: 'Automation',
        link: '/course/shell/automation'
    }, {
        name: 'Projects',
        link: '/course/shell/projects'
    },  {
        name: 'Interview Preparation',
        link: '/course/shell/interview-preparation'
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