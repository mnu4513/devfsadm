import React from 'react'; 
import { Heading, Text, Subheading, Line, Supersubheading } from '../utils/Comps'; 
const AboutTheCourse = () => { 
    return ( 
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`Linux System Admin Course in Hindi`}/>
            <Heading text={`(Linux Course for Beginners)`}/>
            <Text text={`Welcome to [Your Course Name], the ultimate destination for mastering Linux – the operating system that powers servers, supercomputers, smartphones, and much more. Whether you’re a complete beginner or looking to expand your existing skills, this course will guide you through every step of your Linux journey with expert-led video lectures and practical exercises.`}/>
            <Line />
            <Subheading text={`Why Learn Linux?`} />
            <Text text={`Linux is the backbone of modern technology, widely used in everything from web servers to embedded systems. As one of the most versatile, secure, and open-source operating systems, learning Linux will open doors to career opportunities in:`}/>
            <ul className="list-disc pl-5 space-y-2 pb-3">
                <li> System Administration </li>
                <li> Cloud Computing </li>
                <li> Cybersecurity </li>
                <li> Software Development </li>
                <li> Data Science & AI </li>
            </ul>

            <Text text={`With hands-on labs and real-world applications, this course empowers you with the practical knowledge to tackle any Linux challenge.`}/>


            <Line /> 
            <Subheading text={`What You'll Learn`} /> 
            <Text text={`Our comprehensive, step-by-step lessons cover everything you need to become proficient in Linux. Here’s a glimpse of the key topics:`}/> 

                <Supersubheading text={`Introduction to Linux:`}/>
                <Text text={`Understand Linux fundamentals and its distributions.`}/>
                <Supersubheading text={`Linux File System & Navigation:`}/>
                <Text text={`Learn how to navigate directories, manage files, and control permissions.`}/>
                <Supersubheading text={`Advanced Command-Line Skills:`}/>
                <Text text={`Master the powerful Linux terminal to automate tasks, manage processes, and troubleshoot systems.`}/>
                <Supersubheading text={`Package Management & Software Installation`}/>
                <Text text={`Install and configure software using package managers like apt, yum, and dnf.`}/>
                <Supersubheading text={`System Administration:`}/>
                <Text text={`Learn how to manage users, configure networking, and handle system security.`}/>
                <Supersubheading text={`Storage`}/>
                <Text text={`Understanding of storage, partitions, volumes and storage types.`}/>
                <Supersubheading text={`Troubleshooting & Performance Optimization:`}/>
                <Text text={`Diagnose and solve common Linux problems and optimize system performance.`}/>
                <Supersubheading text={`Virtualization & Containers:`}/>
                <Text text={`Understand how to use Docker and virtual machines to build scalable, isolated environments.`}/>
             
                <Text text={`With hands-on labs and real-world applications, this course empowers you with the practical knowledge to tackle any Linux challenge.`}/>

                



                <Line /> 
                <Subheading text={`Why Choose Our Course?`} /> 
                
                <Supersubheading text={`Video Lectures: `}/> <Text text={`Learn from experienced instructors who break down complex topics into easy-to-understand lessons.`}/> 

                <Supersubheading text={`Hands-On Labs:`}/> <Text text={`Apply your knowledge with interactive exercises and real-world scenarios that reinforce your learning.`}/> 

                <Supersubheading text={`Comprehensive Curriculum:`}/> 
                <Text text={`MFrom beginner basics to advanced topics, our course offers everything you need to become a Linux expert.`}/> 
                
                <Supersubheading text={`Lifetime Access:`}/> <Text text={`Learn at your own pace, with lifetime access to all course materials and updates.`}/> 





                <Line /> 
                <Subheading text={`Who is This Course For?`} /> 
                
                <Supersubheading text={`Beginners: `}/> <Text text={`New to Linux? This course starts with the basics and walks you through everything you need to get started.`}/> 
                
                <Supersubheading text={`IT Professionals:`}/> <Text text={`Enhance your skills and stay ahead in the ever-evolving world of Linux administration.`}/> 
                
                <Supersubheading text={`Developers & SysAdmins:`}/> <Text text={`Learn to leverage Linux for server management, automation, and development workflows.`}/> 
                
                <Supersubheading text={`Tech Enthusiasts:`}/> <Text text={`Curious about how Linux works and why it’s so powerful? This course will give you the insights you need to dive deeper into the world of Linux.`}/>


                <Line /> 
                <Subheading text={`Enroll Today and Start Your Journey to Linux Mastery`} />
                <Text text={`Don’t just learn Linux—master it. Join thousands of learners who have transformed their careers with the power of Linux. Enroll now and take the first step towards mastering one of the most essential skills in tech today.`}/>
                 <Supersubheading text={`Start your Linux journey now!`}/> 



                 <Line /> 
                 <Subheading text={`Contact Us`} />

                <Text text={`For more information or support, feel free to contact us at [contact@yourwebsite.com]. We're here to help!`}/>
                </div>
    );
};

export default AboutTheCourse;