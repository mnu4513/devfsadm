import React from 'react';
import { img_base_url } from '../Config';
import YouTubeVideo from '../utils/YouTubeVideo';

const Link = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div className='ml-4'>
        <h2 className='text-2xl text-red-500 font-bold mt-4 mb-4'>Links in Solaris</h2>
        <p>
          In Solaris, a link is a connection between a file name and the actual data on the disk. Links enable multiple filenames to be associated with the same file or directory. There are two main types of links in Linux: hard links and symbolic (soft) links.
        </p>
        <p className='mt-2'>
          With the help of link command, we can create a link for a particular file, to assess easily.
          In that situation we don't need to provide the full path of a particular file.
          We can assess that file with the link.
        </p>
      </div>

      <YouTubeVideo video_id={`XAW6ihTO8bI`} />
     
      <div className='mt-5 ml-4'>
        <h2 className='text-xl font-bold text-red-500 mt-8'> Types of link </h2>
        <h2 className='font-bold mt-4 text-cyan-500'>1. Hard Link </h2>
        <ul className='ml-4 list-disc'>
          <li className='ml-4'>
            A hard link is an additional name (directory entry) for an existing file on the disk.
          </li>
          <li className='ml-4'>
            All hard links to a file share the same inode and disk blocks.
          </li>
          <li className='ml-4'>
            Deleting any link (including the original one) does not remove the data until the last link is deleted.
          </li>
          <li className='ml-4'>
            Hard links cannot span file systems or partitions.
          </li>
        </ul>

          <p className=' mt-2 font-bold text-red-500'>
            To create a hard link : <p className='text-violet-600'> ln source_path hard_link_name</p>
          </p>
          <img src={`${img_base_url}vthzkqpxfvw94gwqejvc`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />

          <p className=' mt-2 font-bold text-red-500'>
            To delete or unlink a hard link : <p className='text-violet-600'> unlink link_path </p>
          </p>
          <img src={`${img_base_url}yyumnvcogn8jnbhslurm`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />



        <h2 className=' font-bold text-cyan-500 mt-4'>2. Soft (Symbolic) Link:
        </h2>
        <ul className='ml-4 list-disc'>
          <li className='ml-4'>
            A symbolic link (or soft link) is a separate file that contains the path to the target file or directory.
          </li>
          <li className='ml-4'>
            It is essentially a pointer to another file or directory.
          </li>
          <li className='ml-4'>
            Symbolic links can span file systems and partitions.
          </li>
          <li className='ml-4'>
            If the target file is deleted or moved, the symbolic link becomes broken.
          </li>
        </ul>
        <p className='font-bold mt-2 text-red-500'>
            To create a soft link : <p className='text-violet-600'> ln -s source_path hard_link_name</p>
          </p>
          <img src={`${img_base_url}tyklijzfvadziretv6rr`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />

          <p className='font-bold mt-2 text-red-500'>
            To delete or unlink a soft link : <p className='text-violet-600'> unlink link_path </p>
          </p>
          <img src={`${img_base_url}yyumnvcogn8jnbhslurm`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />


      
      </div>
    </div>
  )
}

export default Link