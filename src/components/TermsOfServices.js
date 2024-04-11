import React from 'react'
import { Link } from 'react-router-dom';

const TermsOfServices = () => {
    return (
        <div className="container mx-auto mt-8 px-4 lg:max-w-7xl mb-5">
            <h1 className="text-3xl text-red-500 font-semibold mb-4">Terms of Service</h1>

            <p className='mb-2'>
                Last updated: 05/03/2024
            </p>



            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Acceptance of Terms</h2>

            <p className='mb-2'>
                Welcome to DevFsAdm! By using our website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.
            </p>


            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Description of Services</h2>

            <p className='mb-2'>
                DevFsAdm offers free online courses in Solaris, Linux administration, HTML, CSS, JavaScript, and Node.js programming. These courses include video tutorials, written content, and other educational resources. Our services are provided free of charge.
            </p>



            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">User Responsibilities</h2>

            <p className='mb-2'>
                You are responsible for your use of our services. This includes maintaining the confidentiality of your account information and being aware of and compliant with applicable laws and regulations.
            </p>



            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Course Content</h2>

            <p className='mb-2'>
                The course content provided on DevFsAdm is intended for educational purposes only. We make no guarantees regarding the accuracy, completeness, or suitability of the information. Courses and content may be updated, modified, or discontinued without prior notice.
            </p>




            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">User Conduct</h2>

            <p className='mb-2'>
                While using our services, you agree not to engage in activities that may:
            </p>
            <ul>
                <li>
                    Violate any laws or regulations.
                </li>
                <li>
                    Infringe on the rights of others.
                </li>
                <li>
                    Disrupt the normal functioning of our platform.
                </li>
                <li>
                    Upload or share harmful content.
                </li>
            </ul>




            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Privacy</h2>

            <p className='mb-2'>
                We respect your privacy. Our <Link to="/privacy-policy" className='text-blue-500 mr-1'>
                    Privacy Policy
                </Link>
                outlines how we collect, use, and protect your personal information.
            </p>




            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Termination of Services</h2>

            <p className='mb-2'>
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause and without notice.
            </p>




            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">
                Changes to Terms
            </h2>

            <p className='mb-2'>
                We may update or modify these terms from time to time. You will be notified of significant changes, but it is your responsibility to review and comply with the latest terms.
            </p>




            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Intellectual Property</h2>

            <p className='mb-2'>
                All content provided on DevFsAdm, including text, images, videos, and course materials, is the intellectual property of DevFsAdm. Unauthorized use or reproduction is prohibited.
            </p>


            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Contact Information</h2>

            <p className='mb-2'>
                If you have any questions or concerns about these terms, please contact us at <a href="mailto:contact@devfsadm.com" className='text-blue-500'>contact@devfsadm.com</a>.

                Thank you for choosing DevFsAdm for your online learning journey!
            </p>

        </div>
    );
};

export default TermsOfServices;