import React from 'react';
import telegram_icon from '../../assets/ico/telegram_icon.png';
import drive_icon from '../../assets/ico/drive_icon.webp';
import YouTubeVideo from '../utils/YouTubeVideo';
import { Heading, Line, Subheading, Text, TerminalOutput } from '../utils/Comps';

const InstallAndSetup = () => {
  return (
    <div className='flex flex-col px-5 space-y-5 lg:max-w-4xl mx-auto mb-5'>
      <Heading text={`Solaris Lab Installation and Setup`} />

      <Text text={`In this guide, we will walk you through the process of installing Oracle Solaris 11 and setting it up with VMware or VirtualBox. The necessary tools and steps for installation are outlined below.`} />

      <Line />
      
      <Subheading text={`Tools We Require`} />
      <Text text={`You can download the required tools by visiting the official websites or through the links provided below. The tools include Oracle Solaris 11, VMware 17 Pro, and Putty Terminal.`} />
      <ul className='ml-8 space-y-2 mt-2'>
        <button className='flex flex-row w-60 border-2 px-2 py-1 items-center justify-between rounded-md bg-gray-300 text-blue-400'>
          <span> Oracle Solaris 11 </span>
          <a rel='noreferrer' href='https://t.me/solaris_adm/2' target='_blank'> <img src={telegram_icon} alt='' className='h-5 mx-3' /></a>
          <a rel='noreferrer' href='https://drive.google.com/file/d/1zOC1PiW2J2lMag35V0DyYd4pNoKPchhQ/view?usp=drivesdk' target='_blank'> <img src={drive_icon} alt='' className='h-5' /></a>
        </button>

        <button className='flex flex-row w-60 border-2 px-2 py-1 items-center justify-between rounded-md bg-gray-300 text-blue-400'>
          <span> VMware 17 Pro </span>
          <a rel='noreferrer' href='https://t.me/solaris_adm/3' target='_blank'> <img src={telegram_icon} alt='' className='h-5 mx-3' /></a>
          <a rel='noreferrer' href='https://drive.google.com/file/d/1zPuYdHrvtzbfIf-qcS3wS6XVd6-p4Zn7/view?usp=drivesdk' target='_blank'> <img src={drive_icon} alt='' className='h-5' /></a>
        </button>

        <button className='flex flex-row w-60 border-2 px-2 py-1 items-center justify-between rounded-md bg-gray-300 text-blue-400'>
          <span> Putty Terminal </span>
          <a rel='noreferrer' href='https://t.me/solaris_adm/4' target='_blank'> <img src={telegram_icon} alt='' className='h-5 mx-3' /></a>
          <a rel='noreferrer' href='https://drive.google.com/file/d/1zWYAp65GrlOCbBAkNiVUQDT5-boNcq0h/view?usp=drivesdk' target='_blank'> <img src={drive_icon} alt='' className='h-5' /></a>
        </button>
      </ul>

      <Line />

      <Subheading text={`Process to Installation`} />
      <Text text={`First, you need to download the ISO image file of Oracle Solaris 11.`} />
      <Text text={`After downloading the ISO image, you will need VMware or VirtualBox to run the ISO image on your Windows PC, Linux, or MacBook.`} />
      <Text text={`The download links for all the necessary tools have been provided above.`} />

      <Text text={`Once VMware is installed, open VMware and start the setup process. If you encounter any issues during the setup, you can refer to the setup video below for guidance.`} />

      <YouTubeVideo video_id='tomhp3foV60' />

      

      <Text text={`While installing VMware Pro 17 or higher, use the following user key for the Pro version:`} />
      <TerminalOutput content={`MC60H-DWHD5-H80U9-6V85M-8280D`} />

      <Text text={`After downloading and installing VMware, you will need to install the Solaris ISO file using VMware.`} />
      <Text text={`For this, we will use the default settings provided by VMware. There is no need for advanced custom configuration. Select the ISO image file and proceed with the general configuration.`} />
      <Text text={`Once you have completed the installation of the Solaris ISO image, let it reboot.`} />
      <Text text={`After the reboot, your OS should work smoothly without any issues.`} />
    </div>
  );
};

export default InstallAndSetup;
