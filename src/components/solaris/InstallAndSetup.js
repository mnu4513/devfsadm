import React from 'react';
import telegram_icon from '../../assets/ico/telegram_icon.png';
import drive_icon from '../../assets/ico/drive_icon.webp';

const InstallAndSetup = () => (
  <div className='flex flex-col px-5 space-y-5 lg:max-w-6xl mx-auto mb-5'>
    <h3 className='text-2xl my-5 font-bold'>Installation and setup</h3>
    <div className='ml-4'>
      <h2 className='text-xl font-bold'> Tools we required </h2>
      <p className='mt-2'> Download by visiting official website or on telegram or on google drive </p>
      <ul className='ml-4 space-y-2 mt-2'>
        <button className='flex flex-row w-60 border-2 px-2 py-1 items-center justify-between rounded-md bg-gray-300 text-blue-400'>    <span> Oracle Solaris 11 </span>
          <a rel='noreferrer' href='https://t.me/solaris_adm/2' target='_blank'> <img src={telegram_icon} alt='' className='h-5 mx-3' /></a>
          <a rel='noreferrer' href='https://drive.google.com/file/d/1zOC1PiW2J2lMag35V0DyYd4pNoKPchhQ/view?usp=drivesdk' target='_blank'> <img src={drive_icon} alt='' className='h-5 ' /></a>
        </button>
        <button className='flex flex-row w-60 border-2 px-2 py-1 items-center justify-between rounded-md bg-gray-300 text-blue-400'>    <span> VMware 17 pro </span>
          <a rel='noreferrer' href='https://t.me/solaris_adm/3' target='_blank'> <img src={telegram_icon} alt='' className='h-5 mx-3' /></a>
          <a rel='noreferrer' href='https://drive.google.com/file/d/1zPuYdHrvtzbfIf-qcS3wS6XVd6-p4Zn7/view?usp=drivesdk' target='_blank'> <img src={drive_icon} alt='' className='h-5' /></a>
        </button>
        <button className='flex flex-row w-60 border-2 px-2 py-1 items-center justify-between rounded-md bg-gray-300 text-blue-400'>    <span> Putty Terminal </span>
          <a rel='noreferrer' href='https://t.me/solaris_adm/4' target='_blank'> <img src={telegram_icon} alt='' className='h-5 mx-3' /></a>
          <a rel='noreferrer' href='https://drive.google.com/file/d/1zWYAp65GrlOCbBAkNiVUQDT5-boNcq0h/view?usp=drivesdk' target='_blank'> <img src={drive_icon} alt='' className='h-5' /></a>
        </button>

      </ul>
    </div>
    <div className='ml-5'>
      <h2 className='text-xl font-bold mt-4  '> Process to Installation </h2>
      <p className='mt-2 '>
        Fitst of all we need to download the ISO image file of Oracle Solaris 11.
        Then we need to download VMware or Virtual Box to run ISO image on our windows pc or on linux or macbook.
      </p>
      <p className='mt-2'>Download links of all tools are provided already. </p>
      <p className='mt-2'> After the Installation of VMware, open VMware and start the setup. If you are having any issue in setup, you can refer the video for setup and isntallation.</p>
    </div>
    <div>
      <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/DjsxadCnijI?si=mV51f6M4rTlD-Jx4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>

    <div>
      <p className='mt-2 ml-4'> While installing VMware pro 17 or higher version of VMware pro user key for pro version <span className='font-bold' >'MC60H-DWHD5-H80U9-6V85M-8280D'</span> </p>

      <p className='mt-2 ml-4'>After downloading and installing VMware we will install Solaris iso file on this app.
        For this we won't use advance custom setting, we will use normal setting provided by VMware application.
        We will select our iso image file and will proceed with genral configuration.
        We will wait for Installation of Solaris iso image and then we will let it reboot.
        After rebooting process our OS will work smoothly.
      </p>
    </div>


  </div>
)

export default InstallAndSetup;