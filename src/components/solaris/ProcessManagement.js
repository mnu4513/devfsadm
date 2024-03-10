import React from 'react';
import { img_base_url } from '../Config';

const ProcessManagement = () => {

  const content = [{
    id: 1,
    title: 'To list all process',
    command: ['ps-ef'],
    image: 'yl036nfkbs61pqrnkpd8.png'
  }, {
    id: 2,
    title: 'To search process',
    command: ['ps -ef | grep -i <process_name>', 'ps -ef | grep -i <PID>', 'ps -ef | grep -i <user_name>'],
    image: 'kx9vh4t5dhbwq8g4vczo.png'
  }, {
    id: 3,
    title: 'To kill a process',
    command: ['kill <PID>'],
    image: 'ytcpeag3hr155k7i3guj.png'
  }, {
    id: 4,
    title: 'To kill a process forcefully',
    command: ['kill -9 <PID>'],
    image: 'typui69pg3nbx7eiaqkt.png'
  }, {
    id: 5,
    title: 'To get childern or parenet process of any process',
    command: ['ptree <PID>'],
    image: 'gsjh6knxsp3pcvp19mkd.png'
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
                <div key={e.id} className='ml-4'>
                  <h2 className=' mr-2 mt-4 font-bold'> {e.id}. {e.title} :-  </h2>
                  {
                    e.command?.map((x) => <p key={x} className='ml-4 font-bold'> {x} </p>)
                  }
                  <img src={`${img_base_url}${e.image}`} alt='' className='mt-3 mb-10 md:w-2xl lg:max-w-5xl' />
                </div>
              )
            })
          }
      </div>
    </div>
  );
};

export default ProcessManagement;