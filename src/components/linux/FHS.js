import React from 'react';
import { Heading, Subheading, Text } from '../utils/Comps';

const FileHierarchyStructure = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            
            <Heading text="File Hierarchy Structure (FHS) in Linux" />
            <Text text="In Linux, the root directory '/' is the top-level directory, often referred to as the parent partition. From this root directory, various subdirectories are used to organize system files and directories. Here’s an overview of the key directories and their purposes:" />

            <Subheading text="/ (Root Directory)" />
            <Text text="The top-level directory in Linux. All other directories and files are contained within this root directory." />

            <Subheading text="/root" />
            <Text text="The home directory for the superuser (root). This directory is separate from /home, which is used for regular users." />

            <Subheading text="/home" />
            <Text text="The default directory for all normal users' home directories. Each user has a subdirectory under /home for their personal files." />

            <Subheading text="/boot" />
            <Text text="Contains files necessary for the system to boot, including the kernel and initial RAM disk images." />

            <Subheading text="/etc" />
            <Text text="Contains system-wide configuration files and shell scripts that initialize system settings. This is where administrators configure system-wide settings." />

            <Subheading text="/proc" />
            <Text text="A virtual filesystem that provides process and kernel information in real-time. It contains dynamic data about the system and processes, and is not a real filesystem on disk." />
            <Text text="In RHEL 7 and later, the init system is systemd (PID 1). Prior to RHEL 7, the init system was init, also with PID 1." />

            <Subheading text="/dev" />
            <Text text="Contains device files. These files represent hardware devices and drivers." />

            <Subheading text="/bin" />
            <Text text="Contains essential command binaries that are required for the system to boot and run in single-user mode. These are essential user commands." />

            <Subheading text="/sbin" />
            <Text text="Contains system binaries, which are typically used for system administration tasks. These commands are usually used by the system administrator." />

            <Subheading text="/usr" />
            <Text text="Contains user-related programs and data. It includes application binaries, libraries, documentation, and manual pages. This directory is split into several subdirectories:" />
            <Text text="• /usr/bin for user binaries" />
            <Text text="• /usr/sbin for system binaries" />
            <Text text="• /usr/lib for libraries" />
            <Text text="• /usr/lib64 for 64-bit libraries" />

            <Subheading text="/lib" />
            <Text text="Contains essential shared libraries and kernel modules required by the binaries in /bin and /sbin." />

            <Subheading text="/lib64" />
            <Text text="Contains shared libraries and kernel modules specific to 64-bit architecture." />

            <Subheading text="/var" />
            <Text text="Contains variable data such as log files, mail spools, and caches. This directory includes files that are expected to grow in size." />

            <Subheading text="/tmp" />
            <Text text="A directory for temporary files. These files are typically cleared upon reboot or periodically by system maintenance." />

            <Subheading text="/sys" />
            <Text text="A virtual filesystem providing information about the system's hardware and kernel. This directory is primarily used for kernel and hardware-related data." />

            <Subheading text="/opt" />
            <Text text="Used for installing optional application software packages. This directory is typically used for third-party applications." />

            <Subheading text="/srv" />
            <Text text="Contains data for services provided by the system. For example, files served by a web server might be located here." />

            <Subheading text="/media" />
            <Text text="The default mount point for removable media such as CD-ROMs, DVDs, and USB drives. In modern distributions, /media is used for auto-mounted devices." />

            <Subheading text="/run" />
            <Text text="A temporary filesystem that stores runtime data, such as information about currently mounted filesystems and active services. It replaces /var/run in newer Linux distributions." />

            <Subheading text="/mnt" />
            <Text text="A directory where additional filesystems can be mounted temporarily. It is used for mounting partitions, network shares, and other filesystems." />

        </div>
    );
};

export default FileHierarchyStructure;