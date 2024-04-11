import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto pt-8 px-4 lg:max-w-7xl pb-6 dark:bg-gray-800 dark:text-white">
            <h1 className="text-3xl font-semibold text-red-500 mb-4">Privacy Policy</h1>

            <p className='mb-2'>
                Last updated: 05/03/2024
            </p>

            <p>
                Welcome to DevFsAdm! We are committed to protecting your privacy and maintaining the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect the information you provide when using our free online learning platform.
            </p>

            <h2 className="text-xl font-semibold text-red-500 mb-2 mt-4">Information We Collect</h2>

            <p className='mb-2'>
                <strong className='text-blue-500'>Account Information:</strong> When you register for an account on DevFsAdm, we collect personal information such as your name, email address, and any other details you provide during the registration process.
            </p>

            <p className='mb-2'>
                <strong className='text-blue-500'>Learning Data:</strong> To enhance your learning experience, we collect information about your interactions with our platform, including courses taken, progress, quizzes, and other learning activities.
            </p>

            <p className='mb-2'>
                <strong className='text-blue-500'>Usage Data:</strong> We may collect non-personal information about how you use our platform, including your IP address, browser type, device information, and other usage statistics.
            </p>

            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">How We Use Your Information</h2>

            <p>
                We use the information we collect for the following purposes:
            </p>

            <ul className="list-disc ml-6 mb-4">
                <li><strong className='text-blue-500'>Personalization:</strong> To provide a personalized learning experience tailored to your preferences and needs.</li>
                <li><strong className='text-blue-500'>Communication:</strong> To communicate with you regarding your account, updates, and important announcements.</li>
                <li><strong className='text-blue-500'>Improvement:</strong> To analyze user behavior and feedback, helping us improve our platform, content, and services.</li>
                <li><strong className='text-blue-500'>Security:</strong> To maintain the security and integrity of our platform, protecting against unauthorized access and abuse.</li>
            </ul>

            <h2 className="text-xl text-red-500 font-semibold mb-2">Sharing Your Information</h2>

            <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
            </p>

            <ul className="list-disc ml-6 mb-4">
                <li><strong className='text-blue-500'>With Instructors:</strong> Information related to your course progress may be shared with instructors to enhance the learning experience.</li>
                <li><strong className='text-blue-500'>Service Providers:</strong> We may engage third-party service providers to assist us in delivering our services, subject to confidentiality agreements.</li>
                <li><strong className='text-blue-500'>Legal Compliance:</strong> We may disclose your information if required by law, regulatory authorities, or to protect our rights and interests.</li>
            </ul>

            <h2 className="text-xl  text-red-500 font-semibold mb-2">Your Choices</h2>

            <p>
                You have the right to:
            </p>

            <ul className="list-disc ml-6 mb-4">
                <li><strong className='text-blue-500'>Access and Update:</strong> Access and update your account information at any time through your profile settings.</li>
                <li><strong className='text-blue-500'>Opt-out:</strong> Opt-out of non-essential communications by adjusting your email preferences.</li>
            </ul>

            <h2 className="text-xl text-red-500 font-semibold mb-2">Data Security</h2>

            <p>
                We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Changes to this Privacy Policy</h2>

            <p>
                We reserve the right to update this Privacy Policy periodically. We will notify you of any significant changes through our platform or by email.
            </p>

            <h2 className="text-xl text-red-500 font-semibold mb-2 mt-4">Contact Us</h2>

            <p>
                If you have any questions or concerns regarding our Privacy Policy, please contact us at <a href="mailto:contact@devfsadm.com" className='text-blue-500'>contact@devfsadm.com</a>.
            </p>

            <p>
                Thank you for choosing DevFsAdm for your online learning journey!
            </p>
        </div>
    );
};

export default PrivacyPolicy;
