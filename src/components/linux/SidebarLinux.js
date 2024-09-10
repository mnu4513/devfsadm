import React from 'react';
import { Link } from 'react-router-dom';
import learn_icon from '../../assets/ico/learn.svg';

const SidebarSolaris = ({ toggleSidebar, sidebarVisible }) => {

    const content = [{
        name: 'Introduction to Linux',
        link: '/course/linux/intro-to-linux' // not done 
    }, {
        name: 'Installation and Setup',
        link: '/course/linux/installation-and-setup' // not done 
    }, {
        name: 'Login Mode in Linux',
        link: '/course/linux/login-modes' // not done 
    }, {
        name: 'File Hierarchy Structure',
        link: '/course/linux/fhs' // not done 
    }, {
        name: 'Basic Data Creation Rules',
        link: '/course/linux/data-creation-rules' // not done 
    }, {
        name: 'Basic Commands',
        link: '/course/linux/basic-commands' // done 
    }, {
        name: 'Date and Time',
        link: '/course/linux/date-time' // done 
    }, {
        name: 'Files and Directories',
        link: '/course/linux/files-and-directories' // done 
    }, {
        name: 'Copy or Move Data',
        link: '/course/linux/copy-move' // done 
    }, {
        name: 'Symbols',
        link: '/course/linux/symbols' // done 
    }, {
        name: 'Filter Data Using Grep Command',
        link: '/course/linux/grep' // done
    }, {
        name: 'Head, Tail & Sed Commands',
        link: '/course/linux/head-tail-sed' // done 
    }, {
        name: 'Locate & Find Commands',
        link: '/course/linux/locate-find' // done 
    }, {
        name: 'Vi Editor',
        link: '/course/linux/vi-vim' // done 
    }, {
        name: 'User Management',
        link: '/course/linux/user-management' // not done 
    }, {
        name: 'Sudo & SUID',
        link: '/course/linux/sudo-suid'
    }, {
        name: 'Run Level & Target',
        link: '/course/linux/run-level-target' // done 
    }, {
        name: 'Basic Permissions',
        link: '/course/linux/permissions' // not done 
    }, {
        name: 'ACL',
        link: '/course/linux/acl' // not done 
    }, {
        name: 'Control Root User [chattr]',
        link: '/course/linux/chattr' // not done 
    }, {
        name: 'Archive',
        link: '/course/linux/archive' // not done 
    }, {
        name: 'Inode & Link',
        link: '/course/linux/inode-link' // not done 
    },  {
        name: 'Group Management',
        link: '/course/solaris/group-management'
    }, {
        name: 'SSH',
        link: '/course/solaris/ssh'
    }, {
        name: 'Super User',
        link: '/course/solaris/super-user'
    }, {
        name: 'Process Management',
        link: '/course/solaris/process-management'
    }, {
        name: 'Service Management',
        link: '/course/solaris/service-management'
    }, {
        name: 'System Monitoring',
        link: '/course/solaris/system-monitoring'
    }, {
        name: 'Nerwork Configuration',
        link: '/course/solaris/network-configuration'
    }, {
        name: 'ZFS',
        link: '/course/solaris/zfs'
    }, {
        name: 'Patch Management',
        link: '/course/solaris/patch-management'
    }, {
        name: 'Virtulization',
        link: '/course/solaris/virtulization'
    }, {
        name: 'LDOM',
        link: '/course/solaris/ldom'
    }, {
        name: 'Cron Job',
        link: '/course/solaris/cron-job'
    }, {
        name: 'Interview Preparation',
        link: '/course/solaris/interview-preparation'
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

export default SidebarSolaris;