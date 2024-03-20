import React from 'react';
import { img_base_url } from '../Config';

const CronJob = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-2'>
          Crontab in Solaris
        </h2>
        <p className='ml-2 mt-3 mb-8'>
          In Solaris, the cron daemon is responsible for executing scheduled commands or scripts at specified intervals. The crontab command is used to manage these scheduled tasks.
        </p>
      </div>

      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <p className='ml-2 mt-8'>
        There are six fileds in a cronjob -
        <ul className='list-decimal ml-7'>
          <li>
            Minute
          </li>
          <li>
            Hour
          </li>
          <li>
            Day of Month
          </li>
          <li>
            Month
          </li>
          <li>
            Day of Week
          </li>
          <li>
            Command
          </li>
        </ul>
      </p>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          1. To list the cronjob entry for currently logged-in user:
        </p>
        <p className=' font-bold'> {`crontab -l`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          2. To list the cronjob entry for a particular user:
        </p>
        <p className=' font-bold'> {`crontab -l <user_name>`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          3. To edit the crontab file of currently logged-in user:
        </p>
        <p className=' font-bold'> {`crontab -e`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          4.  To edit the crontab file of a particular user:
        </p>
        <p className=' font-bold'> {`crontab -e <user_name>`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          5. To remove the crontab file of currently logged-in user:
        </p>
        <p className=' font-bold'> {`crontab -r`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          6. To remove the crontab file of a particular user:
        </p>
        <p className=' font-bold'> {`crontab -r <user_name>`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <hr className='ml-2' />


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          1. To check log file of crontab:
        </p>
        <p className=' font-bold'> {`cat /var/cron/log`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          2. Location of every user's crontab file:
        </p>
        <p className=' font-bold'> {`/var/spool/cron/crontab`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          3. To list down how many users are allowed to user crontab:
        </p>
        <p className=' font-bold'> {`cat /etc/cron.d/cron.allow`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          4. To list down how many users are prohibited to use crontab:
        </p>
        <p className=' font-bold'> {`cat /etc/cron.d/cron.deny`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <p className='ml-2'>
        If we want to give access to a user to use the crontab, we have to remove that user's entry from cron.deny file and will have to add user's entry in cron.allow file.
      </p>
      <p className='ml-2 mt-3 mb-6'>
        In case, if cron.allow is not presence on the server then we have to remove the user's entry from the cron.deny file to give the cron access to a normal user.
      </p>
     


    </div>
  )
}

export default CronJob;