import React from 'react';
import { img_base_url } from '../Config';

const NetworkConfiguratin = () => {
  return (

    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-2'>Network Configuratin in Solaris</h2>
        <p className='ml-2 mt-3'>
          Configuring network settings in Solaris involves using the ipadm and dladm commands.
        </p>
       
        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            1. Username:
          </span>
          The superuser's username is typically "root".
        </p>
      </div>


      <div className='mt-10' >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <p className='ml-2 mt-10 '>
        Here are the basic steps to configure network settings in Solaris:
        </p>

      <div className='mb-4 ml-4 mt-6'>
        <p className='mt-5 font-bold'>
          1. To Switch the User:
        </p>
        <p className=' font-bold ml-5'> {`su - <user_name>`} </p>
        <img src={`${img_base_url}yrf6tlynpn2irmotepui.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
    </div>
  );
};

export default NetworkConfiguratin;