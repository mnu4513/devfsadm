import React, { useContext, Fragment, useState } from 'react';
import ThemeContext from './ThemeContext';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    CursorArrowRaysIcon,
    XMarkIcon,
    SunIcon,
    MoonIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import icon from '../assets/img/logoVP.png';


const courses = [
    { name: 'Solaris', description: 'Oracle Solaris 11 System Administrator Course', href: '/course/solaris', icon: CursorArrowRaysIcon },
    { name: 'Linux', description: 'Speak directly to your customers', href: '/course/linux', icon: CursorArrowRaysIcon },
    { name: 'Shell Scripting', description: 'Speak directly to your customers', href: '/course/shell', icon: CursorArrowRaysIcon },
    { name: 'Ansible', description: 'Your customers’ data will be safe and secure', href: '/course/ansible', icon: CursorArrowRaysIcon },
];

const exams = [
    { name: 'Solaris', description: 'Oracle Solaris 11 Administrator 1Z0-821', href: '/exam/solaris-1Z0-821', icon: CursorArrowRaysIcon },
    { name: 'MySQL', description: 'MySQL 8.0 Database Administrator 1Z0-908', href: '/exam/MySQL-1Z0-908', icon: CursorArrowRaysIcon},
    { name: 'Oracle Linux', description: 'Oracle Linux 8 Administration 1Z0-106', href: '/exam/Oracle-Linux-1Z0-106', icon: CursorArrowRaysIcon },
    { name: 'Exadata', description: 'Oracle Exadata Database Machine X9M 1Z0-902', href: '/exam/exadata-1Z0-902', icon: CursorArrowRaysIcon },
    { name: 'Oracle Database', description: 'Oracle Database Machine X9M 1Z0-902', href: '/exam/database', icon: CursorArrowRaysIcon }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

export default function Navbar() {


    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setMobileMenuOpen(false);
        if (theme.mode === 'light') {
            setTheme({
                ...setTheme,
                mode: 'dark',
                value: 'bg-gray-800 text-white'
            });
        } else {
            setTheme({
                ...setTheme,
                mode: 'light',
                value: 'bg-white text-gray-800'
            });
        };
    };


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className=' dark:bg-gray-800 dark:text-white'>
            {/* desktop view */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">infoUnix</span>
                        <img className="h-8 w-auto rounded-full" src={icon} alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {/* Courses */}
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 ">
                            Courses
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {courses.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link to={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </Popover.Panel>
                        </Transition>
                    </Popover>

 {/* Exams */}
 <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 ">
                            Exams
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {exams.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link to={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link to='/features' className="text-sm font-semibold leading-6 " >
                        Features
                    </Link>
                    <Link to='/about-us' className="text-sm font-semibold leading-6 ">
                        About Us
                    </Link>
                    <Link to='/contact-us' className="text-sm font-semibold leading-6 ">
                        Contact Us 
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className='mr-3' onClick={() => toggleTheme()}> {theme.mode === 'dark' ?
                        <SunIcon className='h-6 w-6' aria-hidden='true' /> :
                        <MoonIcon className='h-6 w-6' aria-hidden='true' />
                    }</button>
                    <Link to='/user/login' className="text-sm font-semibold leading-6 ">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>


            {/* Mobile view */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to='/' className="-m-1.5 p-1.5">
                            <span className="sr-only">infoUnix</span>

                            <img
                                className="h-8 w-auto rounded-full"
                                src={icon}
                                alt=""
                            />
                        </Link>
                        <button onClick={() => toggleTheme()}>
                            {theme.mode === 'dark' ?
                                <SunIcon className='h-6 w-6' aria-hidden='true' /> :
                                <MoonIcon className='h-6 w-6' aria-hidden='true' />}
                        </button>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* Courses */}
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Courses
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...courses].map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href} // Use "to" instead of "href"
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                 {/* Exams */}
                                 <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Exams
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...exams].map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href} // Use "to" instead of "href"
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    to='/features'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Features
                                </Link>
                                <Link
                                    to='/about-us'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to='/contact-us'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className="py-6">

                                <Link
                                    to='/user/login'
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
};