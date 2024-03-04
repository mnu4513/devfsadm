import React from 'react'

const InstallAndSetup = () => {
  return (
    <div className='flex flex-col px-5 space-y-5 lg:max-w-6xl mx-auto'>
      <h3 className='text-3xl my-2'>Installation and setup</h3>
      <div className='ml-5'>
        <h2 className='text-2xl'> Tools we required </h2>
        <ul className='ml-4 space-y-2 mt-2'>
          <li>* Oracle Solaris 11 </li>
          <li>* VMware or Virtual Box </li>
          <li>* Putty Terminal</li>
        </ul>
      </div>
      <div className='ml-5'>
        <h2 className='text-2xl'> Process to Installation </h2>
    <p>
      Fitst of all we need to download the ISO image file of Oracle Solaris 11.
      Then we need to download VMware or Virtual Box to run ISO image on our windows pc or on linux or macbook.
    </p>
    <p>Download links of all tools are provided already. </p>
    <p> After the Installation of VMware, open VMware and start the setup. If you are having any issue in setup, you can refer the video for setup and isntallation.</p>
      </div>

    </div>
  )
}

export default InstallAndSetup;