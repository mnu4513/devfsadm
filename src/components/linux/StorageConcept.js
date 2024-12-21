import React from 'react';
import { Heading, Subheading, Text, TerminalOutput, Line, Supersubheading } from '../utils/Comps';

const StorageConfiguration = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="Storage" />

            <Subheading text="Data" />
            <Text text={`Data refers to the information stored on a disk, which can be categorized into two types:`} />
            <Supersubheading text={`1. OS Defined Data:`}/>
            <Text text={`This type of data is created during the OS installation process.
- It includes files and directories required to run the operating system and additional applications installed by the system.`} />
            <Supersubheading text={`2. User Defined Data:`}/>
            <Text text={`Known as custom data, it is created only after the OS installation.
- It includes files such as documents, images, videos, or any other user-created content.`} />

            <Line />

            <Subheading text="Partition" />
            <Text text={`A partition is a logical division of a physical disk into smaller segments to manage and store data effectively.`} />
            <Supersubheading text={`Purpose of Partitions:`}/>
            <Text text={`They help in organizing data and separating system files from user data.
- Different partitions can have different purposes (e.g., OS, data, backup, etc.).`} />

<Supersubheading text={`Partition Requirements:`}/>
            <Text text={`Windows OS: Requires at least one partition to install the operating system.
- Linux OS: Requires a minimum of two partitions:
  1. / (Root Partition): Stores the OS files and other data.
  2. Swap Partition: Used for virtual memory.`} />

<Supersubheading text={`Recommended Partition for Linux:`}/>
<Text text={`Generally, Linux systems have three partitions: /, swap, and /boot.`} />
            <Text text={`/boot: Stores all the bootable files for the Linux OS.`} />

<Supersubheading text={`Partitioning Methods:`}/>
            <Text text={`
1. Standard Partitioning: A traditional method to create fixed-size partitions.
2. LVM (Logical Volume Manager): A flexible method that allows resizing and managing partitions dynamically.`} />

            <Line />

            <Subheading text="Disk" />
            <Text text={`A disk is a physical storage medium used to store data persistently. Examples include hard disks (HDD), solid-state drives (SSD), and external drives.`} />

            <Line />

            <Subheading text="Mount Point" />
            <Text text={`A mount point is a directory in the Linux file system where a partition is attached to make it accessible for reading and writing.`} />

            <Supersubheading text={`Key Points:`}/>
            <Text text={`In Linux, data cannot be stored directly on a partition.`}/>
            <Text text={`A partition must first be formatted and then mounted to a mount point to enable data storage.`}/>
            <Text text={`The mount point acts as the interface to access the partition.`} />

            <Line />

            <Subheading text="Directory" />
            <Text text={`A directory is a container within the file system used to organize and store files. It acts as a virtual folder and is part of the file system hierarchy.`} />
            <Subheading text="Difference Between Directory and Mount Point" />
            <Text text={`Aspect	Directory	Mount Point
Definition	A logical folder to organize files.	A directory used to attach a formatted partition.
Purpose	Organizes files and other directories.	Provides access to a specific partition.
Dependency	Exists independently in the file system.	Requires a partition to function.`} />

            <Line />

            <Subheading text="Formatting" />
            <Text text={`Formatting is the process of defining a file system on a disk or partition to enable data storage.`} />

            <Supersubheading text={`File System Types:`}/>
            <Text text={`1. Windows File Systems:`}/>
            <Text text={`FAT (File Allocation Table): An older file system with limited features.`}/>
            <Text text={`NTFS (New Technology File System): Advanced file system with improved performance and security.`}/>
            <Text text={`2. Linux File Systems:`}/>
            <Text text={`EXT-2: The first file system used in Linux.`}/>
            <Text text={`EXT-3: Added journaling for better reliability.`}/>
            <Text text={`EXT-4: Improved performance and large file support.`}/>
            <Text text={`XFS: The latest, high-performance file system in Linux.`} />

<Supersubheading text={`Formatting Command:`}/>
            <Text text={`To format a partition in Linux, use the following command:`} />
            <TerminalOutput content={`[root@localhost ~]# mkfs.xfs /dev/sdb2
meta-data=/dev/sdb2              isize=512    agcount=4, agsize=65536 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=262144, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=2560, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
[root@localhost ~]#`} />
        </div>
    );
};

export default StorageConfiguration;
