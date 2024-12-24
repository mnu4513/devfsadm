import React from 'react';
import { Heading, Text, Subheading, TerminalOutput, Line } from '../utils/Comps';

const Swap = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            {/* Heading */}
            <Heading text="Swap Partition" />
            <Text text='A swap space is an area of a disk under the control of the Linux kernel memory management subsystem. The kernel uses swap space to supplement the system RAM by holding inactive pages of memory. The combined system RAM plus swap space is called virtual memory.' />

            <Text text='When the memory usage on a system exceeds a defined limit, the kernel searches through RAM looking for idle memory pages assigned to processes. The kernel writes the idle pages to the swap area and reassigns the RAM pages to other processes. If a program requires access to a page on disk, the kernel locates another idle page of memory, writes it to disk, then recalls the needed page from the swap area.' />

            <Text text='Because swap area resides on the disk, swap is slow when compared with RAM. While it is used to augment system RAM, you should not consider swap space as a sustainable solution for insufficient RAM for your workload.' />



            <Subheading text="Sizing the Swap Space" />
            <Text text={`Administrators should size the swap space based on the memory workload on the system. Application vendors sometimes provide recommendations on that subject. The following table provides some guidance based on the total amount of physical memory.`} />
            {/* Table */}
            <table className='w-full text-left'>
                <thead>
                    <tr className='text-green-400'>
                        <th>RAM</th>
                        <th>Swap Space</th>
                        <th>Swap Space for Hibernation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2GB or less</td>
                        <td>Twice the RAM</td>
                        <td>Three times the RAM</td>
                    </tr>
                    <tr>
                        <td>2GB to 8GB</td>
                        <td>Same as RAM</td>
                        <td>Twice the RAM</td>
                    </tr>
                    <tr>
                        <td>8GB to 64GB</td>
                        <td>At least 4GB</td>
                        <td>1.5 times the RAM</td>
                    </tr>
                    <tr>
                        <td>More than 64GB</td>
                        <td>At least 4GB</td>
                        <td>Hibernation is not recommended</td>
                    </tr>
                </tbody>
            </table>




<Line />
            {/* Subheading */}
            <Subheading text="A. Creation of Swap Using fdisk Command" />
            <Text text={`First of all we will cut a partition using fdisk command to use it as a swap partition.`}/>
            <Text text={`Partition type can be primary or extended.`} />

            {/* Commands */}
            <TerminalOutput content={`[root@localhost ~]# fdisk /dev/sdb

Welcome to fdisk (util-linux 2.37.4).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

This disk is currently in use - repartitioning is probably a bad idea.
It's recommended to umount all file systems, and swapoff all swap
partitions on this disk.


Command (m for help): n
Partition type
   p   primary (1 primary, 0 extended, 3 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (2-4, default 2): 2
First sector (4196352-20971519, default 4196352):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (4196352-20971519, default 20971519): +2G

Created a new partition 2 of type 'Linux' and of size 2 GiB.

Command (m for help): p
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x0e68feff

Device     Boot   Start     End Sectors Size Id Type
/dev/sdb1          2048 4196351 4194304   2G 83 Linux
/dev/sdb2       4196352 8390655 4194304   2G 83 Linux

Command (m for help):`} />

<Text text={`After cutting a partition from any disk we will change its ID/label to 'Linux swap / Solaris'`}/>
<Text text={`To change the label we will give code 82 or if code is not supported then we will use 'swap' as code.`} />
           
            <TerminalOutput content={`Command (m for help): t
Partition number (1,2, default 2):
Hex code or alias (type L to list all): 82

Changed type of partition 'Linux' to 'Linux swap / Solaris'.

Command (m for help): p
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x0e68feff

Device     Boot   Start     End Sectors Size Id Type
/dev/sdb1          2048 4196351 4194304   2G 83 Linux
/dev/sdb2       4196352 8390655 4194304   2G 82 Linux swap / Solaris

Command (m for help):W`} />




            <Text text={`After creating the partition and changing the ID, create the filesystem for the swap partition.`} />
            
            <Text text={`This step is optional. It is not required to update the partition ID/label.`}/>

            <TerminalOutput content={`[root@localhost ~]# mkswap /dev/sdb2
Setting up swapspace version 1, size = 2 GiB (2147479552 bytes)
no label, UUID=64409109-a3ed-45d8-9dd2-3be9884f3e38
[root@localhost ~]#`} />
            <Text text={`Add it to the swap table to activate the swap partition:`} />

            <TerminalOutput content={`[root@localhost ~]# swapon /dev/sdb2
[root@localhost ~]# swapon
NAME      TYPE      SIZE USED PRIO
/dev/sda4 partition   2G   0B   -2
/dev/sdb2 partition   2G   0B   -3
[root@localhost ~]#`} />

            <Text text={`Make an entry into the '/etc/fstab' file for permanent use; otherwise, it will be removed from the swap table after reboot. You do not need to format or mount the swap partition on any mount point.`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/fstab`} />
            <TerminalOutput content={`#
# /etc/fstab
# Created by anaconda on Sun Dec  8 13:03:25 2024
#
# Accessible filesystems, by reference, are maintained under '/dev/disk/'.
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info.
#
# After editing this file, run 'systemctl daemon-reload' to update systemd
# units generated from this file.
#
UUID=51871bdc-2bff-4fc1-bf4b-a1dd645cac85 /                       xfs     defaults        0 0
UUID=457f3cc5-768c-4b29-9eef-c00cc0609588 /boot                   xfs     defaults        0 0
/dev/sdb2                                 none                    swap    defaults        0 0
:wq`} />


<Line />
            {/* Subheading */}
            <Subheading text="B. Creation of Swap Using parted Command" />

            {/* Commands */}
            <Text text={`To make a swap partition using 'parted' command is almost same as the 'fdisk' command.`} />
            <Text text={`First of all we will cut a partition from any disk with required size using parted command.`}/>
            <TerminalOutput content={`[root@localhost ~]# parted /dev/sdb
GNU Parted 3.4
Using /dev/sdb
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) print
Model: ATA VMware Virtual S (scsi)
Disk /dev/sdb: 10.7GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags:

Number  Start   End     Size    Type     File system     Flags
 1      1049kB  2149MB  2147MB  primary
 2      2149MB  4296MB  2147MB  primary  linux-swap(v1)
 3      4296MB  5296MB  1000MB  primary  linux-swap(v1)

(parted) mkpart
Partition type?  primary/extended? primary
File system type?  [ext2]? linux-swap
Start? 5296
End? 6320M
(parted) print
Model: ATA VMware Virtual S (scsi)
Disk /dev/sdb: 10.7GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags:

Number  Start   End     Size    Type     File system     Flags
 1      1049kB  2149MB  2147MB  primary
 2      2149MB  4296MB  2147MB  primary  linux-swap(v1)
 3      4296MB  5296MB  1000MB  primary  linux-swap(v1)
 4      5296MB  6320MB  1023MB  primary  linux-swap(v1)  lba

(parted) quit
Information: You may need to update /etc/fstab.

[root@localhost ~]#`} />

<Text text={`After cutting any partition using parted command, we generally sync the partitions:`}/>

            <TerminalOutput content={`[root@localhost ~]# udevadm settle
[root@localhost ~]#
`} />


            <Text text={`Now we have to format is as a swap partition:`} />
    
            <TerminalOutput content={`[root@localhost ~]# mkswap /dev/sdb4
Setting up swapspace version 1, size = 976 MiB (1023406080 bytes)
no label, UUID=3022946f-0e45-47a4-8af4-9860ad56db66
[root@localhost ~]#
`} />

<Text text={`After formatting the partition as a swap partition, we will add it into swap:`}/>
          
            <TerminalOutput content={`[root@localhost ~]# swapon /dev/sdb4
[root@localhost ~]#
`}/>
            <Text text={`To keep this swap partition permanently, we have to make an entry in '/etc/fstab' for permanent use, else this swap partition will be removed after reboot:`} />

            <TerminalOutput content={`[root@localhost ~]# vim /etc/fstab`} />
            <TerminalOutput content={`/dev/sdb4       swap    swap    defaults                0 0`}/>
            <TerminalOutput content={`[root@localhost ~]# systemctl daemon-reload
[root@localhost ~]#`} />


<Line />
            {/* Subheading */}
            <Subheading text="C. Creation of Swap Using dd Command" />

            {/* Text */}
            <Text text={`Creating a swap file using the 'dd' command involves several steps: creating the file, setting up the swap space, and enabling it.`} />

            <Text text={`1. Create the Swap File Using 'dd':`} />
            <TerminalOutput content={`[root@localhost ~]# dd if=/dev/zero of=/swapfile bs=1M count=1024
1024+0 records in
1024+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 11.9034 s, 90.2 MB/s
[root@localhost ~]# ls -l /swapfile
-rw-r--r--. 1 root root 1073741824 Dec 24 10:49 /swapfile
[root@localhost ~]#`} />
<Text text={`To make a swap file, we generally take space from the '/' (root) partition.`}/>

          

            <Text text={`We can replace 'count' with the desired size (e.g., '2048' for 2GB).`} />

            <Text text={`2. Secure the Swap File:`} />
            <TerminalOutput content={`[root@localhost ~]# chmod 600 /swapfile
[root@localhost ~]#
`} />
<Text text={`We change the permission of swap file, because we want to make any changes in this block file. If we make any changes in this file, then it won't work as a swap file.`}/>
    

            <Text text={`3. Set Up the Swap Space:`} />
            <TerminalOutput content={`[root@localhost ~]# mkswap /swapfile
Setting up swapspace version 1, size = 1024 MiB (1073737728 bytes)
no label, UUID=9b1e2299-e74a-4d37-9af5-3ff960340445
[root@localhost ~]#
`} />
            

            <Text text={`4. Enable the Swap File:`} />
            <TerminalOutput content={`[root@localhost ~]# swapon /swapfile
[root@localhost ~]# swapon
NAME      TYPE       SIZE USED PRIO
/dev/sdb2 partition    2G   0B   -2
/swapfile file      1024M   0B   -3
[root@localhost ~]#
`} />
            

            
            <Text text={`Ensure the swap file is active.`} />

            <Text text={`6. Make the Swap File Permanent:`} />
            <Text text={`Add an entry to '/etc/fstab', and run:`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/fstab`} />
            <TerminalOutput content={`/swapfile       none    swap    sw              0 0
`}/>
           

            <TerminalOutput content={`[root@localhost ~]# systemctl daemon-reload
[root@localhost ~]#
`} />
        
        </div>
    );
};

export default Swap;