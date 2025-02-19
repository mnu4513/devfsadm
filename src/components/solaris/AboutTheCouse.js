import React from 'react';
import { Link } from 'react-router-dom';
// import YouTubeVideo from '../utils/YouTubeVideo';
import { Heading, Subheading, Text } from '../utils/Comps';

const AboutTheCourse = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto dark:text-white dark:bg-gray-800'>
      {/* Heading */}
      <Heading text="Solaris System Administration Course in Hindi" />
      <Heading text="(Solaris Administration Course for Beginners)" />

      {/* Course Description */}
      <Text text="Learn essential skills and techniques for efficiently managing Solaris 11 systems with our comprehensive System Administration course." />
      <Text text="Whether you're a beginner or an experienced professional, this course will equip you with the knowledge and hands-on experience needed to effectively administer Solaris environments." />

      {/* Course Preview Video */}
      {/* <YouTubeVideo video_id="uh7qptFsO90" /> */}

      
      {/* Prerequisites */}
      <Subheading text="Prerequisites:" />
      <ul className='ml-4 mt-2'>
        <li className='mt-2'>Basic knowledge of Unix/Linux operating systems.</li>
        <li className='mt-2'>Familiarity with command-line interfaces and system administration concepts.</li>
      </ul>

      
      {/* Who Should Enroll */}
      <Subheading text="Who Should Enroll:" />
      <ul className='ml-4 mt-2'>
        <li className='mt-2'>Students interested in pursuing a career in Unix/Linux system administration.</li>
        <li className='mt-2'>System administrators responsible for managing Solaris 11 environments.</li>
        <li className='mt-2'>IT professionals seeking to enhance their skills in Solaris system administration.</li>
      </ul>

      
      {/* Course Format */}
      <Subheading text="Course Format:" />
      <ul className='ml-4 mt-2'>
        <li className='mt-2'>Real-world scenarios and case studies for practical learning.</li>
        <li className='mt-2'>Access to course materials, resources, and community support.</li>
        <li className='mt-2'>Video lectures, demonstrations, and hands-on lab exercises, written notes with commands and their output.</li>
      </ul>

      
      {/* Course Topics */}
      <Subheading text="Topics:" />
      <ul className='ml-4 text-blue-500 mt-2'>
        <li className='mt-2'>
          <Link to='/course/solaris/installation-and-setup'>Installation and Setup</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/basic-commands'>Basic Commands</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/user-management'>User Management</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/group-management'>Group Management</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/files-and-directories'>Files and Directories</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/vi-editor'>VI Editor</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/ssh'>SSH</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/super-user'>Super User</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/process-management'>Process Management</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/service-management'>Service Management</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/system-monitoring'>System Monitoring</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/archive'>Archive</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/link'>Link</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/network-configuration'>Network Configuration</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/zfs'>ZFS (Zettabyte File System)</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/patch-management'>Patch Management</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/virtulization'>Virtualization</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/ldom'>LDOM</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/cron-job'>Cron Job (Crontab)</Link>
        </li>
        <li className='mt-2'>
          <Link to='/course/solaris/interview-preparation'>Interview Preparation</Link>
        </li>
      </ul>

      
     

      <Text text={``}/>
      {/* Course Closing Statement */}
      <Text text="By covering these topics in your Solaris 11 System Administration course, students will gain a comprehensive understanding of Solaris administration principles and acquire valuable skills for managing Solaris environments effectively." />
    </div>
  );
};

export default AboutTheCourse;
