import React from 'react';
import { img_base_url } from '../Config';

const Archive = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold my-5 ml-4'>Archive in Solaris</h2>
        <p className='mt-4 ml-4'>
          An archive is a file that contains one or more other files, along with information about them, such as their names, permissions, and directory structure. Archiving is the process of gathering multiple files into a single file for easier storage, organization, and transportation. Archives are commonly used for backup, data transfer, and software distribution.
        </p>
        <p className='mt-4 ml-4'>
          The archive file itself can take various formats, and different tools may be used to create, extract, or manipulate archives. Some common archive formats include:
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold ml-5'>1. Tar (Tape Archive): </span>
          Originally designed for tape backups, the tar command is commonly used to create uncompressed archives. It bundles files together without compression, and a separate compression tool (like gzip or bzip2) is often used in conjunction with tar to create compressed archives.
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold ml-5'>2. Zip: </span>
          This is a widely used archive format that supports compression. Zip archives are common in both Windows and Unix-like operating systems. Tools like zip and unzip are used for creating and extracting Zip archives.
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold ml-5'>3. gzip and bzip2: </span>
          While not traditional archive formats, these are compression tools commonly used in conjunction with tar. They compress a single file and are often used to create compressed archives with the .gz or .bz2 extensions.
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold ml-5'>4. 7-Zip:</span>
          This is a versatile archive format and compression tool that supports various compression algorithms. It is known for its high compression ratio and is widely used on Windows and other platforms.
        </p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      {/* files */}
      <h2 className='ml-4 mr-2 mt-8 font-bold text-xl'> Tar: </h2>
      <div className='ml-4'>
        <p className='mt-3'>1. To create a tar archive</p>
        <p className=' font-bold ml-5'> {`tar -cvf archive.tar files/directories`} </p>
        <img src={`${img_base_url}hxcpxfe1vdbcxcu2peaa.png`} alt='' className='mt-5 mb-4 md:w-2xl lg:max-w-5xl' />
        <p className='mt-2'>
          <span className='font-bold ml-5'> -c: </span>
          Create a new archive.
        </p>
        <p className='mt-2'>
          <span className='font-bold ml-5'> -v: </span>
          Verbose mode, display the files being archided.
        </p>
        <p className='mt-2'>
          <span className='font-bold ml-5'> -f: </span>
          Specify the archive file name.
        </p>
      </div>

      <div className='ml-4'>
        <p className='my-3'>1. To add files to an Exiting Archive</p>
        <p className=' font-bold ml-5'> {`tar -rvf archive.tar new_files`} </p>
        <img src={`${img_base_url}hxcpxfe1vdbcxcu2peaa.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      {/* files */}
      <h2 className='ml-4 mr-2 mt-4 font-bold text-xl'> Files </h2>
      <div className='ml-4'>
        <p className='my-3'>1. To create an empty file</p>
        <p className=' font-bold ml-5'> {`touch <file_name>`} </p>
        <img src={`${img_base_url}hxcpxfe1vdbcxcu2peaa.png`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
    </div>
  );
};

export default Archive;