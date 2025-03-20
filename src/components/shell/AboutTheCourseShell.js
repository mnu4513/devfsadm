import React from 'react'
import { Link } from 'react-router-dom';

const AboutTheCouseShell = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            <div>
                <h2 className='text-2xl font-bold mt-5 ml-2'>  Shell Scripting Course </h2>
                <p className='ml-2 my-3'>
                    Welcome to the Shell Scripting Essentials course! This course is designed to provide you with the fundamental knowledge and practical skills needed to become proficient in shell scripting. Whether you're a beginner or looking to enhance your scripting abilities, this course will guide you through the essentials of shell scripting and empower you to automate tasks, streamline processes, and unlock the full potential of the command line.
                </p>

            </div>

            <div className='mt-10' >
                <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/TVhAvaln-MA?si=pHc46WB5cMEMtdD5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>


            <div >

                <h2 className='ml-2 mt-6 text-xl font-bold'> Prerequisites:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        Basic knowledge of Unix/Linux operating systems commands.
                    </li>
                    <li className='mt-2'>
                        Familiarity with command-line interfaces and system administration concepts.
                    </li>
                    <li className='mt-2'>
                        You would be better if you have knowledge of any programming language or the concepts of a programming language, like variables, arrays, string, functions, etc.
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
                        System administrators responsible for managing unix environments or responsible for monitoring or sheduling jobs or to manage any task.
                    </li>
                    <li className='mt-2'>
                        IT professionals seeking to enhance their skills in Shell Scripting.
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
                        <Link to='/course/shell/intro-to-shell'>
                            Introduction to Shell Scripting
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/setup-env'>
                            Setting Up Your Environments
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/scripting-concept'>
                            Basic Scripting Concepts
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/control'>
                            Control Structures
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/files-and-dir'>
                            Working with Files and Directories
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/text-processing'>
                            Text Processing
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/functions'>
                            Functions and Script Organization
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/error-handling'>
                            Error Handling and Debugging
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/advance-topics'>
                            Advance Topics
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/projects'>
                            Real World Porjects
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to='/course/shell/interview-prep'>
                            Interview Preparation
                        </Link>
                    </li>
                </p>

                <h2 className='ml-2 mt-6 text-xl font-bold'>
                    Duration:
                </h2>
                <p className='ml-2'>
                    <li className='mt-2'>
                        The course is designed to be completed in 2 weeks, with one hours of study per week.
                    </li>
                </p>
            </div>

            <p className='ml-2 mt-6 mb-4'>
                By the end of this course, you will have gained a solid understanding of shell scripting fundamentals and the ability to create powerful scripts to automate tasks and streamline your workflow. Whether you're managing servers, processing data, or performing routine system administration, the skills you acquire in this course will be invaluable. Get ready to unlock the full potential of shell scripting and take your automation game to the next level!
            </p>

        </div>
    );
};

export default AboutTheCouseShell;