import React from 'react';
import { Heading, Text, Subheading, Supersubheading, Line, TextWithLinks } from './utils/Comps';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto pt-8 px-4 lg:max-w-4xl pb-6 dark:bg-gray-800 dark:text-white">
            <Heading text={`Privacy Policy`}/>
            

            <Text text={`Last updated: 05/03/2024`}/>
            <Text text={`Welcome to infoUnix! We are committed to protecting your privacy and maintaining the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect the information you provide when using our free online learning platform.`}/>

            <Line/>

            <Subheading text={`Information we collect`}/>
            <Supersubheading text={`Account Information:`}/>
            <Text text={`When you register for an account on infoUnix, we collect personal information such as your name, email address, and any other details you provide during the registration process.`}/>
          
          <Supersubheading text={`Learning Data:`}/>
            <Text text={`To enhance your learning experience, we collect information about your interactions with our platform, including courses taken, progress, quizzes, and other learning activities.`}/>
            
            <Supersubheading text={`Usage Data:`}/>
            <Text text={`We may collect non-personal information about how you use our platform, including your IP address, browser type, device information, and other usage statistics.`}/>
           

           <Line />
           <Subheading text={`How We Use Your Information`}/>
            <Text text={`We use the information we collect for the following purposes:`}/>
            
            <Supersubheading text={`Personalization:`}/>
            <Text text={`To provide a personalized learning experience tailored to your preferences and needs.`}/>
            <Supersubheading text={`Communication:`}/>
            <Text text={`To communicate with you regarding your account, updates, and important announcements.`}/>
            <Supersubheading text={`Improvement:`}/>
            <Text text={`To analyze user behavior and feedback, helping us improve our platform, content, and services.`}/>
            <Supersubheading text={`Security:`}/>
            <Text text={`To maintain the security and integrity of our platform, protecting against unauthorized access and abuse.`}/>
            

            <Line />
            <Subheading text={`Sharing Your Information`}/>
            <Text text={`We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:`}/>
         
            <Supersubheading text={`With Instructors:`}/>
            <Text text={`Information related to your course progress may be shared with instructors to enhance the learning experience.`}/>
            <Supersubheading text={`Service Providers:`}/>
            <Text text={`We may engage third-party service providers to assist us in delivering our services, subject to confidentiality agreements.`}/>
            <Supersubheading text={`Legal Compliance:`}/>
            <Text text={`We may disclose your information if required by law, regulatory authorities, or to protect our rights and interests.`}/>
            
            
            <Line />
            <Subheading text={`Your Choices`}/>
            <Text text={` You have the right to:`}/>
            <Supersubheading text={`Access and Update:`}/>
            <Text text={`Access and update your account information at any time through your profile settings.`}/>
            <Supersubheading text={`Opt-out:`}/>
            <Text text={`Opt-out of non-essential communications by adjusting your email preferences.`}/>
            

            <Line />
            <Subheading text={`Data Security`}/>
         
            <Text text={`We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.`}/>
           

            <Line />
            <Subheading text={`Changes to this Privacy Policy`}/>
     
      
            <Text text={`We reserve the right to update this Privacy Policy periodically. We will notify you of any significant changes through our platform or by email.`}/>
           

            <Line />
            <Subheading text={`Contact Us`}/>
            
            <TextWithLinks>
            If you have any questions or concerns regarding our Privacy Policy, please contact us at <Link to="mailto:support@infounix.com" className='text-blue-500'> support@infounix.com </Link>
            </TextWithLinks>
     
            
            <Text text={`Thank you for choosing infoUnix for your online learning journey!`}/>
          
        </div>
    );
};

export default PrivacyPolicy;
