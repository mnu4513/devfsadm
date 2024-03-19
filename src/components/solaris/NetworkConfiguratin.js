import React from 'react';
import { img_base_url } from '../Config';

const NetworkConfiguratin = () => {
  return (

    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl font-bold mt-5 ml-2'>Network Configuratin in Solaris</h2>
        <p className='ml-2 mt-3'>
          Configuring network settings in Solaris involves using the ipadm and dladm commands.
        </p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <p className='ml-2 mt-10 '>
        Here are the basic steps to configure network settings in Solaris:
      </p>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          1. To check IP address / net mask / mac address:
        </p>
        <p className=' font-bold'> {`ifconfig -a`} </p>
        <img src={`${img_base_url}mjwqwh5rzphzytfsjwly.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          2. To show link name, class, type, IP:
        </p>
        <p className=' font-bold'> {`ipadm`} </p>
        <img src={`${img_base_url}oxrvd2vmez4zrg3vfsjz.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          3. To check the link information:
        </p>
        <p className=' font-bold'> {`dladm show-link`} </p>
        <img src={`${img_base_url}yggxttlrfskcaw4wqkxy.png`} alt='' className='mt-3 mb-2 md:w-2xl lg:max-w-5xl' />
        <p className=' mt-2'> With this command we can check vnic (virtual network interface card) as well.</p>
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          4. To check physical Network Adapater details:
        </p>
        <p className=' font-bold'> {`dladm show-phys`} </p>
        <img src={`${img_base_url}iuvt4y9s717kna2m62fm.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          5. To check mac address of physical devices:
        </p>
        <p className=' font-bold'> {`dladm show-phys -m`} </p>
        <img src={`${img_base_url}gst33lmb63rkxluujtbl.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          6. To check physical device info with location:
        </p>
        <p className=' font-bold'> {`dladm show-phys -L`} </p>
        <img src={`${img_base_url}qbkkrmztryhl0sxwaosl.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <hr className='ml-2' />
      <p className='ml-2 mt-6'>
        To add more network interface card (link) we need to add more network adapaters with our server.
        After adding these network adapaters, these will can be find in physical devices list.
      </p>
      <p className='ml-2 mt-3'>
        After adding network adapater, if we want to use this device then we have to use it as a link.
        For that we have to create link with this device.
      </p>
      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          1. To create a link:
        </p>
        <p className=' font-bold'> {`ipadm create-ip <link_name>`} </p>
        <img src={`${img_base_url}kmi7iaeeqkmpa2c4wjby.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        <p>
          By default this link be created in down state.
          To use this link we have assign IP address with this link.
        </p>
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          2. To assign IP address to a link:
        </p>
        <p className=' font-bold'> {`ipadm create-addr -T static -a <IP_address> <link_name>`} </p>
        <img src={`${img_base_url}hbdxq6girmyvosmsdamc.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
        <p className='mb-3'>
          After assigning an IP address to a link, link will come in 'OK' state from 'down' state.
        </p>
        <p>
          Now we can assess this new IP address to access server same as primary link (net0) IP address.
        </p>
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          3. To delete IP address:
        </p>
        <p className=' font-bold'> {`ipadm delete-addr <IP_address_name>`} </p>
        <img src={`${img_base_url}gbes9ufcxiaqrff7iw8k.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          4. To delete a link:
        </p>
        <p className=' font-bold'> {`ipadm delete-ip <link_name>`} </p>
        <img src={`${img_base_url}plue31mogvwrmanhgcy4.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <p className='ml-2'>
        In such case whenever we have limited network adapaters and we need more IP address than the network adapater devices then we need to create vnic (virtual network interface card).
      </p>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          5. To create a vnic:
        </p>
        <p className=' font-bold'> {`dladm create-vnic -l <phys_link_name> <vnic_name> `} </p>
        <img src={`${img_base_url}ipk3hei59rlc2ehssa5m.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          6. To delete a vnic:
        </p>
        <p className=' font-bold'> {`dladm delete-vnic <vnic_name>`} </p>
        <img src={`${img_base_url}ogtdsx9ntass8kl8o3vn.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
      <p className='ml-2'>
        In such case whenever we have more than one physical devices (network adapaters) and we want assign a single IP address to all devices then we will create a IPMP group and we will add all the links to the IPMP group and then we will assign an IP address to that IPMP group.
      </p>
      <p className='mt-3'>
        We create an IPMP group because in some cases if our one goes down due to some reason, then our server will work continue, because we are using same IP address on more than one link.
      </p>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          7. To create an IPMP group:
        </p>
        <p className=' font-bold'> {`ipadm create-ipmp <IPMP_group_name>`} </p>
        <img src={`${img_base_url}l2ckcniz5hhn3m76bwd7.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          8. To add links in an IPMP group
        </p>
        <p className=' font-bold'> {`ipadm add-ipmp -i <first_link> -i <second_link> <IPMP_group_name> `} </p>
        <img src={`${img_base_url}aew0sykwj5cu6xu9pgkl.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>

      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          9. To assign IP address to an IPMP group:
        </p>
        <p className=' font-bold'> {`ipadm create-addr -T <type_of_address> -a <IP_address> <IPMP_group_name>`} </p>
        <img src={`${img_base_url}ce6qawcbstyhhlgozage.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          10. To check IPMP group status:
        </p>
        <p className=' font-bold'> {`ipmpstat -g`} </p>
        <img src={`${img_base_url}uhwsniej6qunkemzdzmb.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          11. To check interface, active status, flags in an IPMP group:
        </p>
        <p className=' font-bold'> {`ipmpstat -i`} </p>
        <img src={`${img_base_url}tpdabmlokj7oeuikqgag.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          12. To disable a link in an IPMP group:
        </p>
        <p className=' font-bold'> {`if_mpadm -d <link_name>`} </p>
        <img src={`${img_base_url}t893pa23eq3uqvdw4srv.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          13. To enable a link in an IPMP group:
        </p>
        <p className=' font-bold'> {`if_mpadm -r <link_name>`} </p>
        <img src={`${img_base_url}jkuxnnqqnmy87tfc91we.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          14. To remove link from an IPMP group:
        </p>
        <p className=' font-bold'> {`ipadm remove-ipmp -i <link_name> <IPMP_group_name>`} </p>
        <img src={`${img_base_url}lfcihye31legqybkpkp9.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>


      <div className='mb-4 ml-2 mt-6'>
        <p className='mt-5 font-bold'>
          15. To delete an IPMP group:
        </p>
        <p className=' font-bold'> {`ipadm delete-ipmp <IPMP_group_name>`} </p>
        <img src={`${img_base_url}thbe73sotsvgyihu86ps.png`} alt='' className='mt-3 mb-8 md:w-2xl lg:max-w-5xl' />
      </div>
    </div>
  );
};

export default NetworkConfiguratin;