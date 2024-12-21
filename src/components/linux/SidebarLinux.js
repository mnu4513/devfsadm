import React from 'react';
import { Link } from 'react-router-dom';
import learn_icon from '../../assets/ico/learn.svg';

const SidebarSolaris = ({ toggleSidebar, sidebarVisible }) => {

    const content = [{
        name: 'Introduction to Linux',
        link: '/course/linux/intro-to-linux' // done 
    }, {
        name: 'Installation and Setup',
        link: '/course/linux/installation-and-setup' // not done 
    }, {
        name: 'Login Mode in Linux',
        link: '/course/linux/login-modes' // done 
    }, {
        name: 'File Hierarchy Structure',
        link: '/course/linux/fhs' // done 
    }, {
        name: 'Basic Data Creation Rules',
        link: '/course/linux/data-creation-rules' // done 
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
        link: '/course/linux/vi-vim' // not done 
    }, {
        name: 'User Management',
        link: '/course/linux/user-management' // done 
    }, {
        name: 'Group Management',
        link: '/course/linux/group-management'
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
        link: '/course/linux/acl' // done 
    }, {
        name: 'chattr',
        link: '/course/linux/chattr' // done 
    }, {
        name: 'Archive',
        link: '/course/linux/archive' // not done 
    }, {
        name: 'Inode & Link',
        link: '/course/linux/inode-link' // done 
    }, {
        name: 'Crontab',
        link: '/course/linux/crontab' // done
    }, {
        name: 'Service Management',
        link: '/course/linux/service-management' //done
    }, {
        name: 'Booting Process',
        link: '/course/linux/booting-process'
    }, {
        name: 'RPM',
        link: '/course/linux/RPM' // done
    }, {
        name: 'YUM Repos',
        link: '/course/linux/dnf'
    }, {
        name: 'Network',
        link: '/course/linux/network'
    }, {
        name: 'Network Configuration', 
        link: '/course/linux/network-configuration'
    }, {
        name: 'Storage',
        link: '/course/linux/storage'
    }, {
        name: 'Storage Partition',
        link: '/course/linux/partition'
    }, {
        name: 'SWAP',
        link: '/course/linux/swap'  // 
    }, {
        name: 'LVM', 
        link: '/course/linux/LVM'
    }, {
        name: 'ISCSI',
        link: '/course/linux/iscsi'
    }, {
        name: 'SSH',
        link: '/course/linux/ssh'
    }, {
        name: 'DNS',
        link: '/course/linux/dns'
    }, {
        name: 'FTP',
        link: '/course/linux/ftp'
    }, {
        name: 'Apache',
        link: '/course/linux/apache'
    }, {
        name: 'DHCP',
        link: '/course/linux/dhcp'
    }, {
        name: 'NFS',
        link: '/course/linux/nfs'
    }, {
        name: 'Samba',
        link: '/course/linux/samba'
    }, {
        name: 'IP Tables',
        link: '/course/linux/ip-tables'
    }, {
        name: 'Firewall',
        link: '/course/linux/firewall'
    }, {
        name: 'SELinux',
        link: '/course/linux/selinux'
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