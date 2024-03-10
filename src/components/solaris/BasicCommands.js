import React from 'react';
import { img_base_url } from '../Config';

const BasicCommands = () => {
  return (

    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-4'>Basic Commands in Solaris</h2>
        <p className='ml-4 mt-3'>
          In Solaris, there are some basic commands, those will be very useful in day to day monitoring or to do daily tasks.
        </p>
        <p className='ml-4 my-3'>
          Here are some common basic commands:
        </p>
      </div>
      <div className='mt-10' >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          1. To do friendly session:
        </p>
        <p className=' font-bold ml-5'> {`bash`} </p>
        <img src={`${img_base_url}qfcs2qnw3emi5pxegzx5.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4'>
        <p className='mt-5 font-bold'>
          2. To check command history:
        </p>
        <p className=' font-bold ml-5'> {`history`} </p>
        <img src={`${img_base_url}uomwkaogoici20wqhok5.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          3.To show the date:
        </p>
        <p className=' font-bold ml-5'> {`date`} </p>
        <img src={`${img_base_url}zjm0nlqlivbbi5segvik.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          4. To check the calander:
        </p>
        <p className=' font-bold ml-5'> {`cal`} </p>
        <img src={`${img_base_url}qxod4zxgtxwxslqo3cfs.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          5. To check calander or a particular year :
        </p>
        <p className=' font-bold ml-5'> {`cal 2014`} </p>
        <img src={`${img_base_url}qui2ebwukyrr7qhg70w8.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          6. To Calculate the data:
        </p>
        <p className=' font-bold ml-5'> {`bc`} </p>
        <img src={`${img_base_url}rszcduwt4lguirmz1fet.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          7. To clear the terminal screen:
        </p>
        <p className=' font-bold ml-5'> {`clear`} </p>
        <img src={`${img_base_url}jr5zeqv9311aekofr3t3.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          8. To check present working directory:
        </p>
        <p className=' font-bold ml-5'> {`pwd`} </p>
        <img src={`${img_base_url}h4l8dbf41mqraz2j7dvz.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          9. To change the directory:
        </p>
        <p className=' font-bold ml-5'> {`cd <path_of_dir>`} </p>
        <img src={`${img_base_url}z4huurxquyhpy7ezcuqn.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          10. To go to step back directory:
        </p>
        <p className=' font-bold ml-5'> {`cd ..`} </p>
        <img src={`${img_base_url}ply5vwn44amkjg9z1wbg.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          11. To create a new directory:
        </p>
        <p className=' font-bold ml-5'> {`mkdir new-folder`} </p>
        <img src={`${img_base_url}mf9knkmemkmf8yjewrpj.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          12. To remove file or directory:
        </p>
        <p className=' font-bold ml-5'> {`rm -rf <file_or_dir_path>`} </p>
        <img src={`${img_base_url}dlee5jsa6zj8nrfdux2t.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          13. To chack the directory recursively:
        </p>
        <p className=' font-bold ml-5'> {`ls -R`} </p>
        <img src={`${img_base_url}xp8o4xrishzudhznlb4y.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          14. To check OS details:
        </p>
        <p className=' font-bold ml-5'> {`uname -a`} </p>
        <img src={`${img_base_url}eb7ytarhtqkuwrkbnuri.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          15. To get memory, cpu information process wise:
        </p>
        <p className=' font-bold ml-5'> {`top`} </p>
        <img src={`${img_base_url}xito4bpx68cpjjkv40i1.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          16. To get memory, cpu info user wise and process wise:
        </p>
        <p className=' font-bold ml-5'> {`prstat -a`} </p>
        <img src={`${img_base_url}urieqshyiqu63b9bcuzm.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          17. To list down the terminal:
        </p>
        <p className=' font-bold ml-5'> {`tty`} </p>
        <img src={`${img_base_url}xpiad6kxctron7odcqbf.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          18. To get the command path:
        </p>
        <p className=' font-bold ml-5'> {`which <command_name>`} </p>
        <img src={`${img_base_url}xwbhrgqr9tz6zknk4kwx.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          19. To get the hostname:
        </p>
        <p className=' font-bold ml-5'> {`hostname`} </p>
        <img src={`${img_base_url}i4rkwo5pzkernsxsw6kx.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          20. To change the hostname:
        </p>
        <p className=' font-bold ml-5'> {`hostname <new_name>`} </p>
        <img src={`${img_base_url}v4onbpvjjts9ud1chr6v.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          21. To check system uptime:
        </p>
        <p className=' font-bold ml-5'> {`uptime`} </p>
        <img src={`${img_base_url}uabrcjjaxzz10ls9nygv.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          22. To get user info:
        </p>
        <p className=' font-bold ml-5'> {`who am i`} </p>
        <img src={`${img_base_url}nysejfjofshj6k2bmime.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          23. To check host ID:
        </p>
        <p className=' font-bold ml-5'> {`hostid`} </p>
        <img src={`${img_base_url}jyrex3e1ixzkgh1unrfb.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          24. To check physical cpu:
        </p>
        <p className=' font-bold ml-5'> {`psrinfo -p`} </p>
        <img src={`${img_base_url}c3yfgumagj1mx9zatp8v.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          25. To check both (physical and virtual) cpu:
        </p>
        <p className=' font-bold ml-5'> {`psrinfo -vp`} </p>
        <img src={`${img_base_url}yil27kggkmmtg4afolgk.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          26. To get command's full info:
        </p>
        <p className=' font-bold ml-5'> {`man <any_command>`} </p>
        <img src={`${img_base_url}wnayfgyiibrz0ggf2qhk.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-4 mt-10'>
        <p className='mt-5 font-bold'>
          27. To get the number of lines of output
        </p>
        <p className=' font-bold ml-5'> {`<command> | wc -l`} </p>
        <img src={`${img_base_url}bkwi56lukq9ej9g0jeuh.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
    </div>
  );
};

export default BasicCommands;