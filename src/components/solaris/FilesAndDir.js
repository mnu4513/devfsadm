import React from 'react';
import { img_base_url } from '../Config';
import YouTubeVideo from '../utils/YouTubeVideo';

const FilesAndDir = () => {

  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold my-5 text-red-500 ml-4'>Files and Directories in Solaris</h2>
        <p className='ml-4'>
          In Solaris, service management involves the management of services, daemons, and system processes. Solaris uses the Service Management Facility (SMF) to manage system services. SMF replaces traditional init scripts and provides a more sophisticated and flexible mechanism for managing services.
        </p>
      </div>

      <YouTubeVideo video_id={`yVwCHpj3aOI`} />
   

      {/* files */}
      <h2 className='ml-4 mr-2 mt-8 text-teal-500 font-bold text-xl'> Files </h2>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>1. To create an empty file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`touch <file_name>`} </p>
        <img src={`${img_base_url}hxcpxfe1vdbcxcu2peaa.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>2. To create a size file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`mkfile <file_size> <file_name>`} </p>
        <img src={`${img_base_url}hdlfemirjoiyputyz3n2.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>3. To create a text file in editor mode</p>
        <p className=' font-bold ml-5 text-violet-600'> {`vi <file_name>`} </p>
        <img src={`${img_base_url}itob7nrph9jnhzqedtak.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'> 4. To read a text file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`cat <file_name>`} </p>
        <img src={`${img_base_url}ky8deydv4lcupvygawsy.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>5. To list down files</p>
        <p className=' font-bold ml-5 text-violet-600'> {`ls`} </p>
        <img src={`${img_base_url}h3o5hp4iiaujavtaykou.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>6. To list down files including hidden files</p>
        <p className=' font-bold ml-5 text-violet-600'> {`ls -la`} </p>
        <img src={`${img_base_url}uzlevdjrousravmm42sa.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>7. To list down all files with permission and size</p>
        <p className=' font-bold ml-5 text-violet-600'> {`ls -larth`} </p>
        <img src={`${img_base_url}f2vhc6xg2ukag2mbc7vf.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>8. To remove a file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`rm <file_name>`} </p>
        <img src={`${img_base_url}wbo5qzsmxdmcygletec6.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'> 9. To remove a file forcefully</p>
        <p className=' font-bold ml-5 text-violet-600'> {`rm -rf <file_name>`} </p>
        <img src={`${img_base_url}deaokyap4moix1mklx1t.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>10. To remove multiple files at a time </p>
        <p className=' font-bold ml-5 text-violet-600'> {`rm -rf <file1> <file2> <file3>`} </p>
        <img src={`${img_base_url}htqkac3ty4mxewijuoif.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>11. To copy a file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`cp <source_file> <destination>`} </p>
        <img src={`${img_base_url}eva6bbeayfcdvx4gpplv.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>12. To move a file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`mv <source_file> <destination>`} </p>
        <img src={`${img_base_url}n9xcdzsjx8i7ubdd9vsv.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>13. To rename a file</p>
        <p className=' font-bold ml-5 text-violet-600'> {`mv <file_name> <new_name>`} </p>
        <img src={`${img_base_url}b6iitabyjadilljn1uz1.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

<hr className='my-5 ml-4'/>
  {/* dir */}
  <h2 className='ml-4 mr-2 mt-4 text-teal-500 font-bold text-xl'> Directories </h2>
      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>1. To create a directory</p>
        <p className=' font-bold ml-5 text-violet-600'> {`mkdir <dir_name>`} </p>
        <img src={`${img_base_url}pgrbjpkxx3gzy07ac9xg.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>2. To create a children directory</p>
        <p className=' font-bold ml-5 text-violet-600'> {`mkdir -p <dir_name/chilid_dir/more_inner_dir>`} </p>
        <img src={`${img_base_url}x4t4g7ro00l5b1rgpij2.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>3. To delete an empty directory</p>
        <p className=' font-bold ml-5 text-violet-600'> {`rmdir <dir_name>`} </p>
        <img src={`${img_base_url}kzxtmwjizewomqgztm92.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-3 font-bold text-red-500'>4. To delete a non-empty directory</p>
        <p className=' font-bold ml-5 text-violet-600'> {`rm -rf <dir_name>`} </p>
        <img src={`${img_base_url}ual8pigkhmjhhth1uegh.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>



    </div>
  );
};

export default FilesAndDir;