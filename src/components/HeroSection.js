import React from 'react';
import business_img from '../assets/img/business.svg';
import iso_icon from '../assets/ico/iso.svg';
import dev_icon from '../assets/ico/dev.svg';
import { CursorArrowRaysIcon } from '@heroicons/react/20/solid';
import DropDown from './utils/DropDown';

const HeroSection = () => {

    const courses = [
        { name: 'Solaris', description: 'Get a better understanding of your traffic', href: '/course/solaris', icon: CursorArrowRaysIcon },
        { name: 'Linux', description: 'Speak directly to your customers', href: '/course/linux', icon: CursorArrowRaysIcon },
        { name: 'Shell Scripting', description: 'Shell scripting in linux and solaris', href: '/course/shell', icon: CursorArrowRaysIcon },
        { name: 'Ansible', description: 'Your customers’ data will be safe and secure', href: '/course/ansible', icon: CursorArrowRaysIcon },
    ];

    const exams = [
        { name: 'Solaris', description: 'Get a better understanding of your traffic', href: '/exam/solaris-1z0-821', icon: CursorArrowRaysIcon },
        { name: 'Linux', description: 'Speak directly to your customers', href: '/exam/solaris-1z0-821', icon: CursorArrowRaysIcon },
        { name: 'Shell Scripting', description: 'Speak directly to your customers', href: '/exam/solaris-1z0-821/shell', icon: CursorArrowRaysIcon },
        { name: 'Ansible', description: 'Your customers’ data will be safe and secure', href: '/exam/solaris-1z0-821', icon: CursorArrowRaysIcon },
    ];

    return (
        <section className=" py-24 sm:py-32 dark:bg-gray-800 dark:text-white">
            <div className="container flex flex-col justify-center p-6 mx-auto max-w-7xl px-6 lg:px-8 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center py-6 md:px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl">Learn
                        <span className="text-violet-400"> Unix Administration </span>
                        and
                        <span className="text-violet-400"> Development </span>

                    </h1>
                    <p className="mt-12 mb-8 text-2xl sm:mb-12"> A platform to learn web development and Unix administration
                        <br className="hidden md:inline lg:hidden" /> in a easy and intresting way
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <div className="flex flex-row text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                            <DropDown icon={iso_icon} name='Administration' content={courses} />
                        </div>
                        <div className="flex flex-row  text-lg font-semibold border rounded ">
                            <DropDown icon={dev_icon} name='Exams' content={exams} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={business_img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;