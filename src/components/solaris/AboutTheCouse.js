import React from 'react';
import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';

const AboutTheCourse = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto dark:text-white dark:bg-gray-800'>
      
      {/* Course Title */}
      <Heading text="Solaris System Administration Course in Hindi" />
      <Supersubheading text="(Solaris Administration Course for Beginners)" />
      <Line />

      {/* Course Introduction */}
      <Text text="Learn essential skills and techniques for efficiently managing Solaris 11 systems with our comprehensive System Administration course." />
      <Text text="Whether you're a beginner or an experienced professional, this course will equip you with the knowledge and hands-on experience needed to effectively administer Solaris environments." />
      <Line />

      {/* Prerequisites */}
      <Subheading text="Prerequisites" />
      <Text text="To get the most out of this course, you should have:" />
      <ul className='ml-4 mt-2 list-disc'>
        <li className='mt-2'>Basic knowledge of Unix/Linux operating systems.</li>
        <li className='mt-2'>Familiarity with command-line interfaces and system administration concepts.</li>
      </ul>
      <Line />

      {/* Who Should Enroll */}
      <Subheading text="Who Should Enroll?" />
      <Text text="This course is ideal for:" />
      <ul className='ml-4 mt-2 list-disc'>
        <li className='mt-2'>Students interested in Unix/Linux system administration careers.</li>
        <li className='mt-2'>System administrators managing Solaris 11 environments.</li>
        <li className='mt-2'>IT professionals looking to enhance their Solaris system administration skills.</li>
      </ul>
      <Line />

      {/* Course Format */}
      <Subheading text="Course Format" />
      <Text text="This course includes:" />
      <ul className='ml-4 mt-2 list-disc'>
        <li className='mt-2'>Real-world scenarios and case studies for practical learning.</li>
        <li className='mt-2'>Access to course materials, resources, and community support.</li>
        <li className='mt-2'>Video lectures, demonstrations, hands-on lab exercises, and written notes with commands and their output.</li>
      </ul>
      <Line />

      {/* Conclusion */}
      <Text text="By covering these topics in the Solaris 11 System Administration course, students will gain a deep understanding of Solaris administration principles and acquire valuable skills for managing Solaris environments effectively." />
      
    </div>
  );
};

export default AboutTheCourse;
