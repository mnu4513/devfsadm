import React from 'react';
import { img_base_url } from '../Config';

const GroupManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-4'>Group Management in Solaris</h2>
        <p className='ml-4 mt-3'>
          In Solaris, group management is handled by commands related to user and group administration. The primary commands for managing groups in Solaris are groupadd, groupmod, and groupdel.
        </p>
        <p className='ml-4 my-3'>
          Here are some common group management tasks:
        </p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          1. Creating a Group:
        </p>
        <p className=' font-bold ml-5'> {`groupadd <group_name>`} </p>
        <img src={`${img_base_url}yrf6tlynpn2irmotepui.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          2. Creating a Group with Custom Group ID:
        </p>
        <p className=' font-bold ml-5'> {`groupadd -g <GID> <group_name>`} </p>
        <img src={`${img_base_url}pip8djkh1lsmw5a8unh5.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          3. To Change the Group Name:
        </p>
        <p className=' font-bold ml-5'> {`groupmod -n <new_group_name> <old_group_name>`} </p>
        <img src={`${img_base_url}yn1r8hy0ms6h40odhdr8.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          4. To Delete a Group:
        </p>
        <p className=' font-bold ml-5'> {`groupdel <group_name>`} </p>
        <img src={`${img_base_url}vfs8wnpscumxssj46o65.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          4. To Get Detials About all Groups:
        </p>
        <p className=' font-bold ml-5'> {`cat /etc/group`} </p>
        <img src={`${img_base_url}eqxxtt0riinnz8goom4y.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
    </div>
  );
};

export default GroupManagement;