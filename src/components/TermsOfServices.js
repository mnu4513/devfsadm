import React from 'react'
import { Link } from 'react-router-dom';
import { Heading, Text, Subheading, TextWithLinks } from './utils/Comps';

const TermsOfServices = () => {
    return (
        <div className="container mx-auto mt-8 px-4 lg:max-w-4xl mb-5">
            <Heading text={`Terms of Service`}/>
           

           
<Text text={`Last updated: 05/03/2024`}/>

            <Subheading text={`Acceptance of Terms`}/>
            <Text text={`Welcome to infoUnix! By using our website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.`}/>

            

            <Subheading text={`Description of Services`}/>
            <Text text={`infoUnix offers free online courses in Solaris adminstration, Linux administration, Git & Github, Docker, Podman, HTML, CSS, JavaScript, and Node.js programming. These courses include video tutorials, written content, and other educational resources. Our services are provided free of charge.`}/>
       


            <Subheading text={`User Responsibilities`}/>
            <Text text={`You are responsible for your use of our services. This includes maintaining the confidentiality of your account information and being aware of and compliant with applicable laws and regulations.`}/>
      


            <Subheading text={`Course Content`}/>
            <Text text={`The course content provided on infoUnix is intended for educational purposes only. `}/>
            <Text text={`We make no guarantees regarding the accuracy, completeness, or suitability of the information. Courses and content may be updated, modified, or discontinued without prior notice.`}/>
        


            <Subheading text={`User Conduct`}/>
            <Text text={`While using our services, you agree not to engage in activities that may:`}/>


            <ul className='font-cambria list-disc ml-4'>
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



            <Subheading text={`Privacy`}/>
            <TextWithLinks>We respect your privacy. Our <Link to="/privacy-policy" className='text-blue-500 mr-1'>
                    Privacy Policy
                </Link>
                outlines how we collect, use, and protect your personal information.</TextWithLinks>
            



            <Subheading text={`Termination of Services`}/>
            <Text text={`We reserve the right to terminate or suspend your access to our services at any time, with or without cause and without notice.`}/>
           



            <Subheading text={`Changes to Terms`}/>
            <Text text={`We may update or modify these terms from time to time. You will be notified of significant changes, but it is your responsibility to review and comply with the latest terms.`}/>
            



            <Subheading text={`Intellectual Property`}/>
            <Text text={`All content provided on infoUnix, including text, images, videos, and course materials, is the intellectual property of infoUnix. Unauthorized use or reproduction is prohibited.`}/>
           
            <Subheading text={`Contact Information`}/>
            <TextWithLinks>
            If you have any questions or concerns about these terms, please contact us at <a href="mailto:support@infounix.com" className='text-blue-500'>support@infounix.com</a>.
            </TextWithLinks>
            <Text text={`Thank you for choosing infoUnix for your online learning journey!`}/>
           

        </div>
    );
};

export default TermsOfServices;