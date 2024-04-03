import React from 'react';

const IntroToSolaris = () => {

  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl text-red-600 font-bold mt-4 ml-4 mb-3'>Solaris</h2>
        <p className='ml-4'>  Solaris is a Unix-based operating system (OS) developed by Sun Microsystems, which is now owned by Oracle Corporation. Solaris has a long history and has been widely used in enterprise environments for server applications, especially in areas such as data centers and large-scale computing systems.</p>
      </div>
      <div >
        <iframe className='mt-5 h-96 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/aIHWfk8K3G8?si=kesAdg1n1uqB1BKN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='mt-5 ml-4'>
        <h2 className='text-xl font-bold text-red-600 mb-4'> Key Features </h2>
        <span className='text-blue-500 ml-2 font-bold '>1. Scalability </span>
        <p className='ml-7 mb-4'>
          Solaris is designed to run on a wide range of hardware platforms, from small servers to large mainframes. It offers scalability to meet the needs of various computing environments.
        </p>
        <span className='text-blue-500 ml-2 font-bold '>2. Reliability </span>
        <p className='ml-7 mb-4'>
          Solaris is known for its stability and reliability. It includes features such as dynamic tracing (DTrace) and advanced diagnostics tools to help administrators identify and troubleshoot issues.
        </p>
        <span className='text-blue-500 font-bold mt-2 ml-2'>3. Security </span>
        <p className='ml-7 mb-4'>
          Solaris incorporates various security features, including role-based access control (RBAC), cryptographic frameworks, and support for security standards. It is designed to meet the security requirements of enterprise environments.
        </p>
        <span className='text-blue-500 font-bold mt-2 ml-2'>4. Virtualization </span>
        <p className='ml-7 mb-4'>
          Solaris includes built-in support for virtualization technologies such as Oracle VM Server for SPARC/x86 and the Solaris Containers (now called Oracle Solaris Zones), allowing for efficient resource utilization and isolation.
        </p>
        <span className='text-blue-500 font-bold mt-2 ml-2'>5. File Systems </span>
        <p className='ml-7 mb-4'>
          Solaris supports advanced file systems like ZFS (Zettabyte File System), which provides features such as data integrity, snapshotting, and easy administration.
        </p>
        <span className='text-blue-500 font-bold mt-2 ml-2'>6. Networking </span>
        <p className='ml-7 mb-4'>
          Solaris has robust networking capabilities, supporting various network protocols and technologies. It includes features like TCP/IP networking, IPv6 support, and network virtualization.
        </p>
        <span className='text-blue-500 font-bold mt-2 ml-2'>7. Compatibility </span>
        <p className='ml-7 mb-4'>
          Solaris has a long history of compatibility with industry standards, making it suitable for interoperability with other systems and applications.
        </p>

        <p className='text-xl mt-3 mx-3'> Because of all these fretures, many organizations choose to use Oracle Solaris.
        </p>
      </div>
    </div>
  );
};

export default IntroToSolaris;