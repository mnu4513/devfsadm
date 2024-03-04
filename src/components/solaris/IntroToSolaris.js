import React from 'react';

const IntroToSolaris = () => {

  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <div>
        <h2 className='text-2xl'>Solaris</h2>
        <p> Solaris is a Unix-based operating system (OS) developed by Sun Microsystems, which is now owned by Oracle Corporation. Solaris has a long history and has been widely used in enterprise environments for server applications, especially in areas such as data centers and large-scale computing systems.</p>
      </div>
      <div >
        <iframe className='mt-5 w-full md:h-96 md:px-24 lg:w-4/5' src="https://www.youtube.com/embed/C49Tksl_3J4?si=4GLRa9_QsoRG_LGf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='mt-5'>
        <h2 className='text-2xl'> Key Features </h2>
        <h2 className='text-xl mt-2 ml-2'>1. Scalability </h2>
        <p className='ml-7'>
          Solaris is designed to run on a wide range of hardware platforms, from small servers to large mainframes. It offers scalability to meet the needs of various computing environments.
        </p>
        <h2 className='text-xl mt-2 ml-2'>2. Reliability </h2>
        <p className='ml-7'>
          Solaris is known for its stability and reliability. It includes features such as dynamic tracing (DTrace) and advanced diagnostics tools to help administrators identify and troubleshoot issues.
        </p>
        <h2 className='text-xl mt-2 ml-2'>3. Security </h2>
        <p className='ml-7'>
          Solaris incorporates various security features, including role-based access control (RBAC), cryptographic frameworks, and support for security standards. It is designed to meet the security requirements of enterprise environments.
        </p>
        <h2 className='text-xl mt-2 ml-2'>4. Virtualization </h2>
        <p className='ml-7'>
          Solaris includes built-in support for virtualization technologies such as Oracle VM Server for SPARC/x86 and the Solaris Containers (now called Oracle Solaris Zones), allowing for efficient resource utilization and isolation.
        </p>
        <h2 className='text-xl mt-2 ml-2'>5. File Systems </h2>
        <p className='ml-7'>
          Solaris supports advanced file systems like ZFS (Zettabyte File System), which provides features such as data integrity, snapshotting, and easy administration.
        </p>
        <h2 className='text-xl mt-2 ml-2'>6. Networking </h2>
        <p className='ml-7'>
          Solaris has robust networking capabilities, supporting various network protocols and technologies. It includes features like TCP/IP networking, IPv6 support, and network virtualization.
        </p>
        <h2 className='text-xl mt-2 ml-2'>7. Compatibility </h2>
        <p className='ml-7'>
          Solaris has a long history of compatibility with industry standards, making it suitable for interoperability with other systems and applications.
        </p>

        <p className='text-2xl mt-3 mx-3'> Because of all these fretures, many organizations choose to use Oracle Solaris.
        </p>
      </div>
    </div>
  );
};

export default IntroToSolaris;