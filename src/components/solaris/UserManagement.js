import React from 'react';
import { img_base_url } from '../Config';

const UserManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-4'>Group Management in Solaris</h2>
        <p className='ml-4 mt-3'>
          In Solaris, user management involves creating, modifying, and deleting user accounts, as well as managing user attributes.        </p>
      
      </div>
      <div className='mt-10' >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p> Here are some important files in user management: 
          <li className='font-bold'> /etc/passwd</li>
          <li className='font-bold'> /etc/shadow</li>
        </p>
        <p className='mt-5 font-bold'>
          1. To get All User's Information:
        </p>
        <p className=' font-bold ml-5'> {`cat /etc/passwd`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
       
        <p className='mt-5 font-bold'>
          2. To get All User's Information in Password encrypted form:
        </p>
        <p className=' font-bold ml-5'> {`cat /etc/passwd`} </p>
        <p>
          It contains user management information in Password encrypted format.
        </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />

        <p className='mt-5 font-bold'>
          3. To check Password policy Information:
        </p>
        <p className=' font-bold ml-5'> {`cat /etc/default/passwd`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      
        <p className='mt-5 font-bold'>
          4. To get copy of Password policy Information:
        </p>
        <p className=' font-bold ml-5'> {`cat /etc/opasswd`} </p>
        <p>
          It use to recover <sapn className='font-bold'> /etc/passwd</sapn> file, if deleted by mistake.
        </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      
        <p className='mt-5 font-bold'>
          5. To recover the shadow file:
        </p>
        <p className=' font-bold ml-5'> {`pwconv`} </p>
        <p>
          It use to recover <sapn className='font-bold'> shadow </sapn> file, if deleted by mistake.
        </p>
        <p>
          After recovered the shadow file we have to set the root Password using command <span className='font-bold' >passwd root</span>.
        </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <hr className='my-3 ml-4'/>
      <p className='ml-4 my-3 mt-5 font-bold'>
          Here are some common commands for user management in Solaris:
        </p>
      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          1. Creating a User:
        </p>
        <p className=' font-bold ml-5'> {`useradd <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          2. Creating a User with Custom Info:
        </p>
        <p className=' font-bold ml-5'> {`useradd -u <UID> -g <GID> -c <comment> -m -d <home_dir> <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          3. To Modify the User Name:
        </p>
        <p className=' font-bold ml-5'> {`usermod -l <new_user_name> <old_user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          4. To Modify the User ID:
        </p>
        <p className=' font-bold ml-5'> {`usermod -u <new_ID> <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          5. To Modify the User's Group:
        </p>
        <p className=' font-bold ml-5'> {`usermod -g <new_GID> <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          6. To Modify the User's Comment:
        </p>
        <p className=' font-bold ml-5'> {`usermod -c <new_comment> <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          7. To Modify the User's Home Directory:
        </p>
        <p className=' font-bold ml-5'> {`usermod -d <new_dir> <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          8. To Modify the User's Shell:
        </p>
        <p className=' font-bold ml-5'> {`usermod -c <new_shell> <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          9. To Delete a User without home directory:
        </p>
        <p className=' font-bold ml-5'> {`userdel <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          10. To Delete a User along with Home Directory:
        </p>
        <p className=' font-bold ml-5'> {`userdel -r <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          11. To User's Password:
        </p>
        <p className=' font-bold ml-5'> {`passwd <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          12. To check User's Password Status:
        </p>
        <p className=' font-bold ml-5'> {`passwd -s <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          13. To lock a User:
        </p>
        <p className=' font-bold ml-5'> {`passwd -l <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          14. To unlock a User:
        </p>
        <p className=' font-bold ml-5'> {`passwd -u <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          15. To Delete Password of a User:
        </p>
        <p className=' font-bold ml-5'> {`passwd -d <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          16. To get User Information:
        </p>
        <p className=' font-bold ml-5'> {`id <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          17. To get User Information along with secondary group:
        </p>
        <p className=' font-bold ml-5'> {`id -a <user_name>`} </p>
        <img src={`${img_base_url}y1g57auwa2snlxpd4g6h.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

    </div>
  );
};

export default UserManagement;