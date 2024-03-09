import React from 'react';
import { img_base_url } from '../Config';

const ProcessManagement = () => {

  const content = [{
    id: 1,
    title: 'To list all process',
    command: ['ps-ef'],
    image: 'xveulprkb9tc2ki2bfrq.png'
  }, {
    id: 2,
    title: 'To search process',
    command: ['ps -ef | grep -i <process_name>', 'ps -ef | grep -i <PID>', 'ps -ef | grep -i <user_name>'],
    image: 'xveulprkb9tc2ki2bfrq.png'
  }, {
    id: 4,
    title: 'To kill a process',
    command: ['kill <PID>'],
    image: 'xveulprkb9tc2ki2bfrq.png'
  }, {
    id: 5,
    title: 'To kill a process forcefully',
    command: ['kill -9 <PID>'],
    image: 'xveulprkb9tc2ki2bfrq.png'
  }, {
    id: 6,
    title: 'To get childern or parenet process of any process',
    command: ['ptree <PID>'],
    image: 'xveulprkb9tc2ki2bfrq.png'
  }];

  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold my-5 ml-4'>Process Management in Solaris</h2>
        <p className='ml-4'>
          In Solaris, process management involves activities related to the creation, execution, and termination of processes. Solaris, being a Unix-based operating system, follows Unix process management principles.
        </p>
      </div>
      <div className='my-6'>
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div >
          {
            content?.map((e) => {
              return (
                <div key={e.id} className='md:px-24'>
                  <h2 className='ml-4 mr-2 mt-4'> {e.id}. {e.title} :-  </h2>
                  {
                    e.command?.map((x) => <p key={x} className='ml-4 font-bold'> {x} </p>)
                  }
                  <img src={`${img_base_url}${e.image}`} alt='' className='mt-5 mb-8 md:w-2xl lg:max-w-5xl' />
                </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default ProcessManagement;