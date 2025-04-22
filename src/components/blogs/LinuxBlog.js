import { Heading, Subheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function LinuxBlog() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Linux Course Blog`} />

      <Subheading text={`Unlock the Power of Linux 🐧`} />
      <Text text={`Linux is the backbone of modern servers, embedded devices, containers, and even supercomputers. Whether you're a beginner or a seasoned sysadmin, mastering Linux opens doors to automation, security, networking, and DevOps.`} />
      <Text text={`This course is structured to help you understand Linux from the ground up — theory to real-world implementation.`} />

      <Line />

      <Subheading text={`Course Highlights 📘`} />
      <Text text={`Explore everything from shell basics to advanced topics:`} />
      
      <ul className='list-disc ml-6 font-cambria'>
        <li><Link to='/course/linux/intro-to-linux' className='text-blue-500 hover:text-blue-700 hover:underline'>Introduction to Linux</Link></li>
        <li><Link to='/course/linux/installation-and-setup' className='text-blue-500 hover:text-blue-700 hover:underline'>Installation and Lab Setup</Link></li>
        <li><Link to='/course/linux/login-modes' className='text-blue-500 hover:text-blue-700 hover:underline'>Login Mode in Linux</Link></li>
        <li><Link to='/course/linux/fhs' className='text-blue-500 hover:text-blue-700 hover:underline'>File Hierarchy Structure</Link></li>
        <li><Link to='/course/linux/data-creation-rules' className='text-blue-500 hover:text-blue-700 hover:underline'>Basic Data Creation Rules</Link></li>
        <li><Link to='/course/linux/basic-commands' className='text-blue-500 hover:text-blue-700 hover:underline'>Basic Commands</Link></li>
        <li><Link to='/course/linux/date-time' className='text-blue-500 hover:text-blue-700 hover:underline'>Date and Time</Link></li>
        <li><Link to='/course/linux/files-and-directories' className='text-blue-500 hover:text-blue-700 hover:underline'>Files and Directories</Link></li>
        <li><Link to='/course/linux/copy-move' className='text-blue-500 hover:text-blue-700 hover:underline'>Copy or Move Data</Link></li>
        <li><Link to='/course/linux/symbols' className='text-blue-500 hover:text-blue-700 hover:underline'>Symbols</Link></li>
        <li><Link to='/course/linux/grep' className='text-blue-500 hover:text-blue-700 hover:underline'>Filter Data Using Grep</Link></li>
        <li><Link to='/course/linux/head-tail-sed' className='text-blue-500 hover:text-blue-700 hover:underline'>Head, Tail & Sed</Link></li>
        <li><Link to='/course/linux/locate-find' className='text-blue-500 hover:text-blue-700 hover:underline'>Locate & Find</Link></li>
        <li><Link to='/course/linux/vi-vim' className='text-blue-500 hover:text-blue-700 hover:underline'>Vi/Vim Editor</Link></li>
        <li><Link to='/course/linux/user-management' className='text-blue-500 hover:text-blue-700 hover:underline'>User Management</Link></li>
        <li><Link to='/course/linux/group-management' className='text-blue-500 hover:text-blue-700 hover:underline'>Group Management</Link></li>
        <li><Link to='/course/linux/sudo-suid' className='text-blue-500 hover:text-blue-700 hover:underline'>Sudo & SUID</Link></li>
        <li><Link to='/course/linux/run-level-target' className='text-blue-500 hover:text-blue-700 hover:underline'>Run Level & Target</Link></li>
        <li><Link to='/course/linux/permissions' className='text-blue-500 hover:text-blue-700 hover:underline'>Basic Permissions</Link></li>
        <li><Link to='/course/linux/acl' className='text-blue-500 hover:text-blue-700 hover:underline'>ACL</Link></li>
        <li><Link to='/course/linux/chattr' className='text-blue-500 hover:text-blue-700 hover:underline'>chattr</Link></li>
        <li><Link to='/course/linux/archive' className='text-blue-500 hover:text-blue-700 hover:underline'>Archive & Compression</Link></li>
        <li><Link to='/course/linux/inode-link' className='text-blue-500 hover:text-blue-700 hover:underline'>Inode & Link</Link></li>
        <li><Link to='/course/linux/crontab' className='text-blue-500 hover:text-blue-700 hover:underline'>Crontab</Link></li>
        <li><Link to='/course/linux/service-management' className='text-blue-500 hover:text-blue-700 hover:underline'>Service Management</Link></li>
        <li><Link to='/course/linux/booting-process' className='text-blue-500 hover:text-blue-700 hover:underline'>Booting Process</Link></li>
        <li><Link to='/course/linux/RPM' className='text-blue-500 hover:text-blue-700 hover:underline'>RPM</Link></li>
        <li><Link to='/course/linux/dnf' className='text-blue-500 hover:text-blue-700 hover:underline'>YUM / DNF</Link></li>
        <li><Link to='/course/linux/network' className='text-blue-500 hover:text-blue-700 hover:underline'>Network</Link></li>
        <li><Link to='/course/linux/network-configuration' className='text-blue-500 hover:text-blue-700 hover:underline'>Network Configuration</Link></li>
        <li><Link to='/course/linux/storage' className='text-blue-500 hover:text-blue-700 hover:underline'>Storage</Link></li>
        <li><Link to='/course/linux/partition' className='text-blue-500 hover:text-blue-700 hover:underline'>Storage Partition</Link></li>
        <li><Link to='/course/linux/swap' className='text-blue-500 hover:text-blue-700 hover:underline'>SWAP</Link></li>
        <li><Link to='/course/linux/lvm' className='text-blue-500 hover:text-blue-700 hover:underline'>LVM</Link></li>
        <li><Link to='/course/linux/iscsi' className='text-blue-500 hover:text-blue-700 hover:underline'>SCSI & ISCSI</Link></li>
        <li><Link to='/course/linux/ssh' className='text-blue-500 hover:text-blue-700 hover:underline'>SSH</Link></li>
        <li><Link to='/course/linux/dns' className='text-blue-500 hover:text-blue-700 hover:underline'>DNS</Link></li>
        <li><Link to='/course/linux/ftp' className='text-blue-500 hover:text-blue-700 hover:underline'>FTP</Link></li>
        <li><Link to='/course/linux/apache' className='text-blue-500 hover:text-blue-700 hover:underline'>Apache Server</Link></li>
        <li><Link to='/course/linux/dhcp' className='text-blue-500 hover:text-blue-700 hover:underline'>DHCP</Link></li>
        <li><Link to='/course/linux/nfs' className='text-blue-500 hover:text-blue-700 hover:underline'>NFS</Link></li>
        <li><Link to='/course/linux/samba' className='text-blue-500 hover:text-blue-700 hover:underline'>Samba</Link></li>
        <li><Link to='/course/linux/ip-tables' className='text-blue-500 hover:text-blue-700 hover:underline'>IP Tables</Link></li>
        <li><Link to='/course/linux/firewall' className='text-blue-500 hover:text-blue-700 hover:underline'>Firewall</Link></li>
        <li><Link to='/course/linux/selinux' className='text-blue-500 hover:text-blue-700 hover:underline'>SELinux</Link></li>
      </ul>

      <Line />

      <Subheading text={`Why Learn Linux? 🚀`} />
      <Text text={`Linux is the foundation for DevOps, cloud, containers, and even Android. It powers servers, workstations, IoT devices, and more.`} />
      <ul className='list-disc ml-6 font-cambria'>
        <li>Manage cloud servers and virtual machines</li>
        <li>Automate tasks using shell and cron</li>
        <li>Secure environments using permissions and firewalls</li>
        <li>Deploy and manage services like Apache, DNS, NFS, Samba</li>
      </ul>

      <Line />

      <Subheading text={`Common Mistakes to Avoid ❌`} />
      <Text text={`Steer clear of these newbie mistakes:`} />
      <ul className='list-disc ml-6 font-cambria'>
        <li>Running destructive commands like <code>rm -rf /</code> without understanding</li>
        <li>Not setting correct file permissions or ignoring ownerships</li>
        <li>Skipping service restarts after configuration changes</li>
        <li>Forgetting to use <code>sudo</code> for privileged operations</li>
      </ul>

      <Line />

      <Subheading text={`Pro Tips 💡`} />
      <Text text={`✅ Learn   'man'   pages and   '--help'   flags for any command.`} />
      <Text text={`✅ Practice real-world tasks in a VM or cloud sandbox.`} />
      <Text text={`✅ Automate backups and cleanup jobs using   'crontab'.`} />
      <Text text={`✅ Explore   'lsof',   'strace', and   'journalctl'   for debugging.`} />

      <Line />

      <Subheading text={`Start Exploring Linux Today ⚙️`} />
      <Text text={`Whether you're going for sysadmin roles, DevOps, or general tech skills — Linux is a must-learn. Jump into the lessons and practice hands-on.`} />
      <p className='font-cambria'>
        Begin here: <Link to='/course/linux' className='text-blue-500 hover:text-blue-700 hover:underline'>Linux Course Overview</Link>
      </p>
    </div>
  );
}
