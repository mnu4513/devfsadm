import React from 'react'
import { Link } from 'react-router-dom';

const AboutTheCouse = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            <div>
                <h2 className='text-2xl font-bold mt-5 ml-2'> Solaris System Administration Course </h2>
                <p className='ml-2 my-3'>
                    Learn essential skills and techniques for efficiently managing Solaris 11 systems with our comprehensive System Administration course.
                </p>
                <p className='ml-2'>
                    Whether you're a beginner or an experienced professional, this course will equip you with the knowledge and hands-on experience needed to effectively administer Solaris environments.
                </p>
            </div>

            <div className='mt-10' >
                <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/uh7qptFsO90?si=RR97w1Br2Dvmjywk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>


            <div >

                <h2 className='ml-2 mt-6 text-xl font-bold'> Prerequisites:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        Basic knowledge of Unix/Linux operating systems.
                    </li>
                    <li className='mt-2'>
                        Familiarity with command-line interfaces and system administration concepts.
                    </li>
                </p>

                <h2 className='ml-2 mt-6 text-xl font-bold'>
                    Who Should Enroll:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        Students interested in pursuing a career in Unix/Linux system administration.
                    </li>
                    <li className='mt-2'>
                        System administrators responsible for managing Solaris 11 environments.
                    </li>
                    <li className='mt-2'>
                        IT professionals seeking to enhance their skills in Solaris system administration.
                    </li>
                </p>


                <h2 className='ml-2 mt-6 text-xl font-bold'>
                    Course Format:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        Real-world scenarios and case studies for practical learning.
                    </li>
                    <li className='mt-2'>
                        Access to course materials, resources, and community support.
                    </li>
                    <li className='mt-2'>
                        Video lectures, demonstrations, and hands-on lab exercises, written notes with commadns and their output.
                    </li>
                </p>

                <h2 className='ml-2 mt-6 text-xl font-bold'>
                    Topics:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        <Link to='/course/solaris/installation-and-setup'>
                            Installation and Setup
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/basic-commands'>
                            Basic Commands
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/user-management'>
                            User Management
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/group-management'>
                            Group Management
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/files-and-directories'>
                            Files and Directories
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/vi-editor'>
                            VI Editor
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/ssh'>
                            SSH
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/super-user'>
                            Super User
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/process-management'>
                            Process Management
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/service-management'>
                            Service Management
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/system-monitoring'>
                            System Monitoring
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/archive'>
                            Archive
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/link'>
                            Link
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/network-configuration'>
                            Network Configuratin
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/zfs'>
                            ZFS (Zettabyte File System)
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/patch-management'>
                            Patch Management
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/virtulization'>
                            Virtulization
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/ldom'>
                            LDOM
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/cron-job'>
                            Cron Job (Crontab)
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/solaris/interview-preparation'>
                            Interview Preparation
                        </Link>
                    </li>
                </p>

                <h2 className='ml-2 mt-6 text-xl font-bold'>
                    Duration:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        The course is designed to be completed in 3 weeks, with 5 of study per week.
                    </li>
                </p>
            </div>

            <p className='ml-2 mt-8 mb-4'>
                By covering these topics in your Solaris 11 System Administration course, students will gain a comprehensive understanding of Solaris administration principles and acquire valuable skills for managing Solaris environments effectively.
            </p>

        </div>
    );
};

export default AboutTheCouse;