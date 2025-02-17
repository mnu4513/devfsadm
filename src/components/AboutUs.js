import React from 'react'
import { Heading, Line, Subheading, Supersubheading, Text, TextWithLinks } from './utils/Comps';
import {Link} from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-8 px-4 lg:max-w-4xl mb-5 dark:bg-gray-800 dark:text-white">
      <Heading text={`About Us (infoUnix)`}/>
      <Text text={`Welcome to infoUnix, your premier destination for free online courses in Solaris system administration, Linux system administration, shell scripting, Git & Github, Docker, Podman, HTML, CSS, JavaScript, Node.js, React, and more.`}/>


<Line/>
      <Subheading text={`Our Mission and Values`}/>
      <Text text={`At infoUnix, our mission is to democratize education and empower learners worldwide by providing high-quality, accessible, and free online courses. We believe that education should be inclusive, affordable, and available to anyone with a desire to learn. Our core values drive everything we do:`}/>
      <Supersubheading text={`Accessibility:`}/>
      <Text text={`We are committed to breaking down barriers to education and ensuring that our courses are accessible to learners of all backgrounds and abilities.`}/>
      <Supersubheading text={`Quality:`}/>
      <Text text={`We maintain the highest standards of quality in course content, instructional design, and learner support to deliver an exceptional learning experience.`}/>
      <Supersubheading text={`Innovation:`}/>
      <Text text={`We embrace innovation and continuously explore new technologies and teaching methodologies to enhance the effectiveness of our courses.`}/>
      <Supersubheading text={`Community:`}/>
      <Text text={`We foster a supportive and inclusive learning community where learners can collaborate, share knowledge, and grow together.`}/>


      <Line/>
      <Subheading text={`Our Commitment to Learners`}/>
      <Text text={`We are dedicated to the success and satisfaction of our learners. Our commitment includes:`}/>
      <Supersubheading text={`Exceptional Content:`}/>
      <Text text={`We continually update and improve our course content to reflect the latest industry trends, best practices, and learner feedback.`}/>
      <Supersubheading text={`Responsive Support:`}/>
      <Text text={`Our dedicated support team is available to assist learners with any questions, technical issues, or concerns they may have.`}/>
      <Supersubheading text={`Lifelong Learning:`}/>
      <Text text={`We believe that learning is a lifelong journey, and we are committed to providing learners with opportunities for continuous growth and development.`}/>

 

      <Line/>
      <Subheading text={`Get in Touch`}/>
      <Text text={`Have questions or feedback? `}/>
      <TextWithLinks>We'd love to hear from you! Reach out to us at  
      <Link to="mailto:support@infounix.com" className='text-blue-500'> support@infounix.com </Link> 
      or connect with us on 
      <Link to="https://instagram.com/infounix" className='text-blue-500'> Instagram </Link>
      ,
      <Link to="https://x.com/infounix" className='text-blue-500'> Twitter </Link>
      or
      <Link to="https://linkedin.com/infounix" className='text-blue-500'> LinkedIn </Link>.          
      </TextWithLinks>
      

      <Line />
      <Subheading text={`Join Our Community`}/>
      <Text text={`Ready to start learning? `}/>
      <Text text={`Explore our free courses and join our vibrant learning community today!`}/>

      
    </div>
  );
};

export default AboutUs;