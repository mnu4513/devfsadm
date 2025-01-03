import React from 'react';
import { img_base_url } from '../Config';

const ServiceManagement = () => {

  const content = [{
    id: 1,
    title: 'To list all services',
    command: 'svcs -a',
    image: 'ra6wmdkxpsx3nhw7inpn.png'
  }, {
    id: 2,
    title: 'To search a service using service name',
    command: 'svcs -a | grep <service_name>',
    image: 'bcpwbll6wdk6xnsocdbb.png'
  }, {
    id: 3,
    title: 'To enable a service',
    command: 'svcs enable <service_name>',
    image: 'vne28rxuhuiwznlmqcod.png'
  }, {
    id: 4,
    title: 'To disable a service',
    command: 'svcadm disable <service_name>',
    image: 'o4aks7hw7gx62nmd98q4.png'
  }, {
    id: 5,
    title: 'To refresh a service',
    command: 'svcadm refresh <service_name>',
    image: 'nxubxlikr1ywtj5obwmo.png'
  }, {
    id: 6,
    title: 'To restart any service',
    command: 'svcadm restart <service_name>',
    image: 'isyosfv78fvu26dxl7q4.png'
  }, {
    id: 7,
    title: 'To list down services',
    command: 'svcs -xv',
    image: 'mtwdzptj8eqxmtew8dre.png'
  }, {
    id: 8,
    title: 'To clear any service from the maintinance',
    command: 'svcadm clear <service_name>',
    image: 'dryypmm9oqasshgq1uea.png'
  }];

  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold my-5 ml-4'>Service Management in Solaris</h2>
        <p className='ml-4'>
          In Solaris, service management involves the management of services, daemons, and system processes. Solaris uses the Service Management Facility (SMF) to manage system services. SMF replaces traditional init scripts and provides a more sophisticated and flexible mechanism for managing services.
        </p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div >
        {
          content?.map((e) => {
            return (
              <div key={e.id} className='ml-4'>
                <h2 className=' mr-2 mt-4 font-bold'> {e.id}. {e.title} :-  </h2>
                
                 <p className=' font-bold'> {e.command} </p>
                
                <img src={`${img_base_url}${e.image}`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ServiceManagement;