import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from '../utils/Comps';

const FileHierarchyStructure = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text="File Hierarchy Structure (FHS) in Linux" />
            <Text text="In Linux, the root directory '/' is the top-level directory, often referred to as the parent partition. From this root directory, various subdirectories are used to organize system files and directories. Here’s an overview of the key directories and their purposes:" />
            <TerminalOutput content={`[root@localhost /]# ls
afs  boot  etc   lib    media  opt   root  sbin  sys  usr
bin  dev   home  lib64  mnt    proc  run   srv   tmp  var
[root@station1 /]#
`} />

            <Supersubheading text="/ (Root Directory)" />
            <Text text="The top-level directory in Linux. All other directories and files are contained within this root directory." />

            <Supersubheading text="/root" />
            <Text text="The home directory for the superuser (root). This directory is separate from /home, which is used for regular users." />

            <Supersubheading text="/home" />
            <Text text="The default directory for all normal users' home directories. Each user has a subdirectory under /home for their personal files." />

            <Supersubheading text="/boot" />
            <Text text="Contains files necessary for the system to boot, including the kernel and initial RAM disk images." />

            <Supersubheading text="/etc" />
            <Text text="Contains system-wide configuration files and shell scripts that initialize system settings. This is where administrators configure system-wide settings." />

            <Supersubheading text="/proc" />
            <Text text="A virtual filesystem that provides process and kernel information in real-time. It contains dynamic data about the system and processes, and is not a real filesystem on disk." />
            <Text text="In RHEL 7 and later, the init system is systemd (PID 1). Prior to RHEL 7, the init system was init, also with PID 1." />

            <Supersubheading text="/dev" />
            <Text text="Contains device files. These files represent hardware devices and drivers." />

            <Supersubheading text="/bin" />
            <Text text="Contains essential command binaries that are required for the system to boot and run in single-user mode. These are essential user commands." />

            <Supersubheading text="/sbin" />
            <Text text="Contains system binaries, which are typically used for system administration tasks. These commands are usually used by the system administrator." />

            <Supersubheading text="/usr" />
            <Text text="Contains user-related programs and data. It includes application binaries, libraries, documentation, and manual pages. This directory is split into several subdirectories:" />
            <Text text="• /usr/bin for user binaries" />
            <Text text="• /usr/sbin for system binaries" />
            <Text text="• /usr/lib for libraries" />
            <Text text="• /usr/lib64 for 64-bit libraries" />

            <Supersubheading text="/lib" />
            <Text text="Contains essential shared libraries and kernel modules required by the binaries in /bin and /sbin." />

            <Supersubheading text="/lib64" />
            <Text text="Contains shared libraries and kernel modules specific to 64-bit architecture." />

            <Supersubheading text="/var" />
            <Text text="Contains variable data such as log files, mail spools, and caches. This directory includes files that are expected to grow in size." />

            <Supersubheading text="/tmp" />
            <Text text="A directory for temporary files. These files are typically cleared upon reboot or periodically by system maintenance." />

            <Supersubheading text="/sys" />
            <Text text="A virtual filesystem providing information about the system's hardware and kernel. This directory is primarily used for kernel and hardware-related data." />

            <Supersubheading text="/opt" />
            <Text text="Used for installing optional application software packages. This directory is typically used for third-party applications." />

            <Supersubheading text="/srv" />
            <Text text="Contains data for services provided by the system. For example, files served by a web server might be located here." />

            <Supersubheading text="/media" />
            <Text text="The default mount point for removable media such as CD-ROMs, DVDs, and USB drives. In modern distributions, /media is used for auto-mounted devices." />

            <Supersubheading text="/run" />
            <Text text="A temporary filesystem that stores runtime data, such as information about currently mounted filesystems and active services. It replaces /var/run in newer Linux distributions." />

            <Supersubheading text="/mnt" />
            <Text text="A directory where additional filesystems can be mounted temporarily. It is used for mounting partitions, network shares, and other filesystems." />

        </div>
    );
};

export default FileHierarchyStructure;