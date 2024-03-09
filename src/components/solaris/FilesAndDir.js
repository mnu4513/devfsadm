import React from 'react';
import { img_base_url } from '../Config';

const FilesAndDir = () => {

  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold my-5 ml-4'>Files in Solaris</h2>
        <p className='ml-4'>
          In Solaris, service management involves the management of services, daemons, and system processes. Solaris uses the Service Management Facility (SMF) to manage system services. SMF replaces traditional init scripts and provides a more sophisticated and flexible mechanism for managing services.
        </p>
      </div>
      <div className='my-6'>
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      {/* files */}
      <h2 className='ml-4 mr-2 mt-4 font-bold text-xl'> Files </h2>
      <div className='ml-4'>
        <p className='my-3'>1. To create an empty file</p>
        <p className=' font-bold ml-5'> {`touch <file_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>2. To create a size file</p>
        <p className=' font-bold ml-5'> {`mkfile <file_size> <file_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>3. To create a text file in editor mode</p>
        <p className=' font-bold ml-5'> {`vi <file_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'> 4. To read a text file</p>
        <p className=' font-bold ml-5'> {`cat <file_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>5. To list down files</p>
        <p className=' font-bold ml-5'> {`ls`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>6. To list down files including hidden files</p>
        <p className=' font-bold ml-5'> {`ls -la`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='my-3'>7. To list down all files with permission and size</p>
        <p className=' font-bold ml-5'> {`ls -larth`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='my-3'>8. To remove a file</p>
        <p className=' font-bold ml-5'> {`rm <file_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='my-3'> 9. To remove a file forcefully</p>
        <p className=' font-bold ml-5'> {`rm -rf <file_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='my-3'>10. To remove multiple files at a time </p>
        <p className=' font-bold ml-5'> {`rm -rf <file1> <file2> <file3>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>11. To copy a file</p>
        <p className=' font-bold ml-5'> {`cp <source_file> <destination>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='my-3'>12. To move a file</p>
        <p className=' font-bold ml-5'> {`mv <source_file> <destination>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='my-3'>13. To rename a file</p>
        <p className=' font-bold ml-5'> {`mv <file_name> <new_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

  {/* dir */}
  <h2 className='ml-4 mr-2 mt-4 font-bold text-xl'> Directories </h2>
      <div className='ml-4'>
        <p className='my-3'>1. To create a directory</p>
        <p className=' font-bold ml-5'> {`mkdir <dir_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>2. To create a children directory</p>
        <p className=' font-bold ml-5'> {`mkdir -p <dir_name/chilid_dir/more_inner_dir>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>3. To delete an empty directory</p>
        <p className=' font-bold ml-5'> {`rmdir <dir_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='my-3'>4. To delete a non-empty directory</p>
        <p className=' font-bold ml-5'> {`rm -rf <dir_name>`} </p>
        <img src={`${img_base_url}xveulprkb9tc2ki2bfrq.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>



    </div>
  );
};

export default FilesAndDir;