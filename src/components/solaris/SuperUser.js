import React from 'react';
import { img_base_url } from '../Config';

const SuperUser = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-2'>Super User in Solaris</h2>
        <p className='ml-2 mt-3'>

          In Solaris, the superuser, also known as the root user, has the highest level of administrative privileges. The superuser has unrestricted access to all files and commands on the system, making it a critical account for system administration tasks.         </p>
        <p className='ml-2 my-3'>
          Here are key points about the superuser in Solaris:
        </p>
        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            1. Username:
          </span>
          The superuser's username is typically "root".
        </p>

        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            2. Access:
          </span>
          The root user has full access to the entire file system and can execute any command with elevated privileges.
        </p>

        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            3. Privileges:
          </span>
          The root user can modify system files, install software, configure system settings, and perform other administrative tasks that regular users cannot.
        </p>

        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            4. Security:
          </span>
          Because of the extensive privileges, it's crucial to use the root account judiciously to avoid accidental system damage.
        </p>

        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            5. Logging In:
          </span>
          You can log in as the root user by using the su (substitute user) command or by logging in directly if you have the root password.
        </p>

        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            6. Command Prefixing:
          </span>
          When executing commands as the root user, it's common to use the sudo (superuser do) command to prefix commands with elevated privileges.
        </p>

        <p className='ml-2 mt-3'>
          <span className='font-bold mr-2'>
            7. Security Concerns:
          </span>
          It's recommended to use the root account sparingly and, when possible, perform administrative tasks using a regular user account with sudo privileges. This adds an additional layer of security.
        </p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          1. Make entry to sudoers file:
        </p>
        <p className=' font-bold ml-5'> {`vi /etc/sudoers`} </p>
        <img src={`${img_base_url}yrf6tlynpn2irmotepui.png`} alt='' className='mt-3 md:w-2xl lg:max-w-5xl' />
        <p className='mt-3'> 
          In this file we will search - <p className='font-bold'> root ALL=(ALL) ALL</p>
        </p>
        <p className='mt-3'> 
          After this line we will make a new entry for another user -<p className='font-bold'> {`<user_name> All=(ALL) ALL`}</p>
        </p>
        <img src={`${img_base_url}yrf6tlynpn2irmotepui.png`} alt='' className='mt-3 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          2. To Switch the User:
        </p>
        <p className=' font-bold ml-5'> {`su - <user_name>`} </p>
        <img src={`${img_base_url}yrf6tlynpn2irmotepui.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          3. To Provide Sudo Privileges:
        </p>
        <p className=' font-bold ml-5'> {`sudo su - `} </p>
        <img src={`${img_base_url}yrf6tlynpn2irmotepui.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

    </div>
  );
};

export default SuperUser;