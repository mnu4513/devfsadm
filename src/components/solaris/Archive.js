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
          <span className='font-bold '>1. Tar (Tape Archive): </span>
          Originally designed for tape backups, the tar command is commonly used to create uncompressed archives. It bundles files together without compression, and a separate compression tool (like gzip or bzip2) is often used in conjunction with tar to create compressed archives.
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold '>2. Zip: </span>
          This is a widely used archive format that supports compression. Zip archives are common in both Windows and Unix-like operating systems. Tools like zip and unzip are used for creating and extracting Zip archives.
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold'>3. gzip and bzip2: </span>
          While not traditional archive formats, these are compression tools commonly used in conjunction with tar. They compress a single file and are often used to create compressed archives with the .gz or .bz2 extensions.
        </p>
        <p className='mt-4 ml-4'>
          <span className='font-bold '>4. 7-Zip:</span>
          This is a versatile archive format and compression tool that supports various compression algorithms. It is known for its high compression ratio and is widely used on Windows and other platforms.
        </p>
      </div>
      <div className='mt-10' >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      {/* Tar */}
      <h2 className='ml-4 mr-2 mt-10 font-bold text-xl'> Tar: </h2>
      <p className='ml-5 mt-2 mb-8'>
        In Solaris, the tar command is commonly used for creating and manipulating tar archives. Here are some basic examples of using the tar command in Solaris:
      </p>
      <div className='ml-4'>
        <p className='mt-3 font-bold'>1. To create a tar archive</p>
        <p className=' font-bold ml-5'> {`tar -cvf archive.tar files/directories`} </p>
        <img src={`${img_base_url}zyyouq4yq9a30gvpduap.png`} alt='' className='mt-3 mb-4 md:w-2xl lg:max-w-5xl' />
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
        <p className='mt-5 font-bold'>2. To add files to an Exiting Archive</p>
        <p className=' font-bold ml-5'> {`tar -rvf archive.tar new_files`} </p>
        <img src={`${img_base_url}jmjb7beyhnw0wgovf7vp.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4'>
        <p className='mt-5 font-bold'>3. View Contents of a Tar Archive:</p>
        <p className=' font-bold ml-5'> {`tar -tvf archive.tar`} </p>
        <img src={`${img_base_url}ryqeppd2dhszcjvsb26d.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>4. Extract Files from a Tar Archive</p>
        <p className=' font-bold ml-5'> {`tar -xvf archive.tar`} </p>
        <img src={`${img_base_url}jpn80d3iuom96hytbsol.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <hr className='ml-4'/>

      {/* zip */}
      <h2 className='ml-4 mr-2 mt-10 font-bold text-xl'> Zip </h2>
      <p className='ml-5 mt-2 mb-4'>
        In Solaris, you can use the zip command to create and manipulate zip archives. Below are some basic examples of using the zip command:
      </p>
      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>1. Create a Zip Archive:</p>
        <p className=' font-bold ml-5'> {`zip -r archive.zip files_or_directories`} </p>
        <img src={`${img_base_url}wdpxnu6n0cqkxtfppnyb.png`} alt='' className='mt-3 mb-3 md:w-2xl lg:max-w-5xl' />
        <p className='mt-2'>
          <span className='font-bold ml-5'> -r: </span>
          Recursively include files in subdirectories.
        </p>
      </div>


      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>2. Extract Files from a Zip Archive:</p>
        <p className=' font-bold ml-5'> {`unzip archive.zip`} </p>
        <img src={`${img_base_url}azdp6uvs1b23ogtv3f2v.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>3. View Contents of a Zip Archive:</p>
        <p className=' font-bold ml-5'> {`unzip -l archive.zip`} </p>
        <img src={`${img_base_url}xqu6ha7ebrytvy1r1v21.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>4. Update a Zip Archive:</p>
        <p className=' font-bold ml-5'> {`zip -r archive.zip new_files_or_directories`} </p>
        <img src={`${img_base_url}wi8zls3hmthxe9uqtutn.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <hr className='ml-4'/>
      
      {/* gzip */}
      <h2 className='ml-4 mr-2 mt-10 font-bold text-xl'> gzip </h2>
      <p className='ml-5 mt-2 mb-4'>
        In Solaris, you can use the gzip command to compress and decompress files using the gzip compression algorithm. Here are some basic examples:
      </p>

      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>1. Compress a File:</p>
        <p className=' font-bold ml-5'> {`gzip filename`} </p>
        <img src={`${img_base_url}wsjdrvnwk7mipbhyeewv.png`} alt='' className='mt-3 mb-3 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>2. Decompress a File:</p>
        <p className=' font-bold ml-5'> {`gunzip filename.gz`} </p>
        <img src={`${img_base_url}nkwtktf3jm8newjel5co.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <div className='ml-4 mb-4'>
        <p className='mt-5 font-bold'>3. Compress Multiple Files or Directories:</p>
        <p className=' font-bold ml-5'> {`gzip -r directory`} </p>
        <img src={`${img_base_url}emmquppeph4wodyhni79.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>



    </div>
  );
};

export default Archive;