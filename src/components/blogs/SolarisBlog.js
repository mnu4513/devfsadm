import { Heading, Subheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function SolarisBlog() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Solaris Course Blog`} />

      <Subheading text={`Master the Solaris Operating System 🌞`} />
      <Text text={`Solaris is a robust UNIX operating system known for its scalability, performance, and advanced features like ZFS and SMF. Whether you're managing enterprise infrastructure or preparing for Solaris admin roles, this course walks you through every vital concept with clarity.`} />
      <Text text={`This course is ideal for Linux admins looking to expand into Solaris, or IT pros managing SPARC-based systems and Oracle environments.`} />

      <Line />

      <Subheading text={`Course Highlights 📘`} />
      <Text text={`Here's a breakdown of what you'll master:`} />
      
      <ul className='list-disc ml-6 font-cambria'>
        <li><Link to='/course/solaris/intro-to-solaris' className='text-blue-500 hover:text-blue-700 hover:underline'>Introduction to Solaris</Link> – Learn what Solaris is and where it fits in the enterprise landscape.</li>
        <li><Link to='/course/solaris/installation-and-setup' className='text-blue-500 hover:text-blue-700 hover:underline'>Installation and Setup</Link> – Set up Solaris in your lab or VM environment.</li>
        <li><Link to='/course/solaris/basic-commands' className='text-blue-500 hover:text-blue-700 hover:underline'>Basic Commands</Link> – Master essential CLI commands and navigation.</li>
        <li><Link to='/course/solaris/user-management' className='text-blue-500 hover:text-blue-700 hover:underline'>User Management</Link> and <Link to='/course/solaris/group-management' className='text-blue-500 hover:text-blue-700 hover:underline'>Group Management</Link> – Create, modify, and secure users and groups.</li>
        <li><Link to='/course/solaris/files-and-directories' className='text-blue-500 hover:text-blue-700 hover:underline'>Files and Directories</Link> – Navigate and manage files effectively.</li>
        <li><Link to='/course/solaris/vi-editor' className='text-blue-500 hover:text-blue-700 hover:underline'>Vi Editor</Link> – Use vi like a pro for scripting and config changes.</li>
        <li><Link to='/course/solaris/ssh' className='text-blue-500 hover:text-blue-700 hover:underline'>SSH</Link> and <Link to='/course/solaris/super-user' className='text-blue-500 hover:text-blue-700 hover:underline'>Super User</Link> – Connect securely and gain root access responsibly.</li>
        <li><Link to='/course/solaris/zfs-zpool' className='text-blue-500 hover:text-blue-700 hover:underline'>ZFS & zpool</Link>, <Link to='/course/solaris/quota-reservation' className='text-blue-500 hover:text-blue-700 hover:underline'>Quota & Reservation</Link>, <Link to='/course/solaris/zfs-snapshot' className='text-blue-500 hover:text-blue-700 hover:underline'>Snapshot</Link> – Dive deep into Solaris' advanced file system.</li>
        <li><Link to='/course/solaris/patch-management' className='text-blue-500 hover:text-blue-700 hover:underline'>Patch Management</Link> and <Link to='/course/solaris/pre-post-checks' className='text-blue-500 hover:text-blue-700 hover:underline'>Pre & Post Checks</Link> – Keep your system secure and updated.</li>
        <li><Link to='/course/solaris/ldom' className='text-blue-500 hover:text-blue-700 hover:underline'>LDOM</Link>, <Link to='/course/solaris/virtualization' className='text-blue-500 hover:text-blue-700 hover:underline'>Virtualization</Link> – Understand Solaris virtualization for large-scale infra.</li>
        <li><Link to='/course/solaris/interview-preparation' className='text-blue-500 hover:text-blue-700 hover:underline'>Interview Preparation</Link> – Crack interviews with Solaris-focused questions and scenarios.</li>
      </ul>

      <Line />

      <Subheading text={`Why Learn Solaris? 💼`} />
      <Text text={`Solaris still powers mission-critical workloads in banks, telecoms, and Oracle hardware environments. With skills in Solaris, you can:`} />
      <ul className='list-disc ml-6 font-cambria'>
        <li>Manage legacy enterprise systems confidently</li>
        <li>Handle advanced storage setups with ZFS</li>
        <li>Automate system monitoring and recovery</li>
        <li>Gain an edge in system admin job markets</li>
      </ul>

      <Line />

      <Subheading text={`Mistakes Beginners Should Avoid 🚫`} />
      <Text text={`Avoid these common pitfalls when working with Solaris:`} />
      <ul className='list-disc ml-6 font-cambria'>
        <li>Using Linux-style commands where Solaris differs (e.g., `pkg` vs `yum`)</li>
        <li>Forgetting to enable services with SMF (`svcadm` commands)</li>
        <li>Mismanaging ZFS datasets or snapshots</li>
        <li>Improper patching without backups or post-checks</li>
      </ul>

      <Line />

      <Subheading text={`Power Tips 🔧`} />
      <Text text={`✅ Explore all ZFS features like compression, deduplication, and cloning.`} />
      <Text text={`✅ Learn Solaris SMF deeply – it's a powerful way to manage services.`} />
      <Text text={`✅ Document LDOM and networking setups — they're common in interviews.`} />
      <Text text={`✅ Practice patching and rolling back using snapshots — real world lifesaver!`} />

      <Line />

      <Subheading text={`Start Your Solaris Journey 🌐`} />
      <Text text={`Kickstart your Solaris sysadmin journey and stand out in hybrid infrastructure roles.`} />
      <p className='font-cambria'>Head over to 
        <Link to='/course/solaris' className='text-blue-500 hover:text-blue-700 hover:underline'> Solaris Course Overview</Link> to begin your deep dive.
      </p>
    </div>
  );
}
