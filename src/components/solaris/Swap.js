import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from '../utils/Comps';

const Swap = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            {/* Page Heading */}
            <Heading text={`Swap in Solaris`} />

            {/* Introduction */}
            <Text text={`Swap space is an essential part of memory management in Solaris systems. It acts as an overflow area when the system runs out of physical RAM. Swap space can help prevent applications from crashing when the system is under heavy load, but excessive reliance on swap can slow down performance. Solaris uses both swap partitions and swap volumes, which are managed through commands like swap, zfs, and top. This page covers how to view, manage, and manipulate swap space in Solaris.`} />

            <Text text={`In Solaris, you can use the swap command to manage swap files and swap volumes, which are used to extend the system's memory. Solaris provides advanced memory management features, such as the ability to use ZFS volumes for swap.`} />

            {/* To see the swap memory */}
            <Supersubheading text={`To see the swap memory`} />
            <Text text={`The top command is a powerful tool used to view system performance, including CPU and memory usage. To view the swap memory usage, you can use the top command in batch mode (-b) to get a snapshot of the memory and swap usage.`} />
            <TerminalOutput content={`[root@localhost:~]# top -b
last pid: 34233;  load avg:  0.03,  0.02,  0.02;  up 18+05:27:29       20:41:40
90 processes: 89 sleeping, 1 on cpu
CPU states: 99.3% idle,  0.1% user,  0.6% kernel,  0.0% stolen,  0.0% swap
Kernel: 976 ctxsw, 1480 intr, 1164 syscall
Memory: 32G phys mem, 7328M free mem, 4096M total swap, 4096M free swap

   PID USERNAME NLWP PRI NICE  SIZE   RES STATE     TIME    CPU COMMAND
 33300 support     1  53    2 5216K 4688K sleep     0:14  0.18% prstat
 34232 root        1  54    0 4952K 3696K cpu/14    0:00  0.02% top
   571 root       22  59    0  363M  258M sleep   177:12  0.02% sstored
  1163 orarom    116  59    0  527M  486M sleep    58:36  0.01% java
    16 root       34  59    0  113M  111M sleep     5:30  0.00% svc.configd
   346 root       35  59    0   28M   16M sleep     1:19  0.00% nscd
   597 root       53  59    0   79M   60M sleep     0:39  0.00% fmd
   103 root        1  59    0   12M 7712K sleep     0:23  0.00% in.mpathd
   243 root        7  59    0 9280K 7616K sleep     0:13  0.00% svc.periodicd
   651 root        4  59    0 4456K 3576K sleep     0:11  0.00% devchassisd
   533 root        1  59    0   11M 6848K sleep     0:06  0.00% cron
   631 root        4  59    0   13M 9808K sleep     0:05  0.00% inetd
   209 root       19  59    0   21M   17M sleep     0:04  0.00% syseventd
   604 root        5  59    0   12M 8576K sleep     0:04  0.00% automountd
   633 smmsp       1  59    0   15M 4704K sleep     0:03  0.00% sendmail
     1 root        1  59    0 4176K 3048K sleep     0:03  0.00% init
`} />
            <Text text={`In the above example, you can see the memory and swap stats under the 'Memory' section, where 4096MB of total swap is available, and all 4096MB is currently free.`} />

            {/* List the swap space */}
            <Supersubheading text={`List the swap space`} />
            <Text text={`The swap -l command is used to list all active swap devices, including swap files and swap volumes. It provides information like the swap device name, swap size, and how much of it is free.`} />
            <TerminalOutput content={`[root@localhost:~]# swap -l
swapfile                  dev            swaplo      blocks        free encrypted
/dev/zvol/dsk/rpool/swap2 248,5               0     8388608     8388608       yes
[root@localhost:~]#`} />
            <Text text={`This output shows a ZFS swap volume (/dev/zvol/dsk/rpool/swap2) with a total size of 8GB, and the full swap space is free.`} />

            {/* Check the swap status */}
            <Supersubheading text={`Check the swap status`} />
            <Text text={`The swap -s command displays the overall swap usage, including how much swap is allocated, reserved, and available. It provides an overview of the current system's swap activity.`} />
            <TerminalOutput content={`[root@localhost:~]# swap -s
total: 1223072k bytes allocated + 1382976k reserved = 2606048k used, 11217200k available
[root@localhost:~]#`} />
            <Text text={`In this example, the system has a total of 2.6GB of swap used, with 11.2GB of swap still available for use.`} />

            {/* Check the size of the swap volume */}
            <Supersubheading text={`Check the size of the swap volume`} />
            <Text text={`You can check the size of a ZFS swap volume using the zfs get volsize command. This will return the volume size for a given ZFS swap volume.`} />
            <TerminalOutput content={`[root@localhost:~]# zfs get volsize rpool/swap1
NAME         PROPERTY  VALUE  SOURCE
rpool/swap1  volsize   14G     local
[root@localhost:~]#`} />
            <Text text={`Here, we see that the rpool/swap1 volume has a size of 14GB, as shown by the volsize property.`} />

            {/* To create the swap volume */}
            <Supersubheading text={`To create the swap volume`} />
            <Text text={`You can create a new swap volume using the zfs create -V command, followed by the size and the name of the volume. This is typically done when you need additional swap space.`} />
            <TerminalOutput content={`[root@localhost:~]# zfs create -V 2GB rpool/swap2
[root@localhost:~]#`} />
            <Text text={`In this example, we've created a 2GB swap volume called rpool/swap2 on the rpool ZFS pool.`} />

            {/* To list the volumes */}
            <Supersubheading text={`To list the volumes`} />
            <Text text={`To view the available ZFS volumes, including swap volumes, use the zfs list command. This will show all volumes, their used space, available space, and other related information.`} />
            <TerminalOutput content={`[root@localhost:~]# zfs list
NAME                               USED  AVAIL  REFER  MOUNTPOINT
rpool                              261G   130G   384K  /rpool
rpool/ROOT                         195G   130G   288K  none
rpool/ROOT/11.4.59.144.2           128M   130G  3.04G  /
rpool/swap                          14G   130G    14G  -
rpool/swap2                          2G   130G     4G  -
solaris-repo-pool                 36.2G   464G    31K  legacy
solaris-repo-pool/repo            36.2G   164G  36.2G  /repo
[root@localhost:~]#`} />
            <Text text={`This output shows all ZFS volumes, including the rpool/swap (14GB) and rpool/swap2 (2GB) volumes. You can see the volume size and the available space.`} />

            {/* Add swap volume to swap */}
            <Supersubheading text={`Add swap volume to swap`} />
            <Text text={`To activate a swap volume, use the swap -a command followed by the swap volume device path. This will add the volume to the system's active swap space.`} />
            <TerminalOutput content={`[root@localhost:~]# swap -a /dev/zvol/dsk/rpool/swap2
[root@localhost:~]#`} />
            <Text text={`Here, we add the /dev/zvol/dsk/rpool/swap2 volume to the swap pool.`} />

            {/* Delete swap volume from swap */}
            <Supersubheading text={`Delete swap volume from swap`} />
            <Text text={`If you need to remove a swap volume, use the swap -d command followed by the swap volume device path. This will deactivate and remove the swap volume from the active swap pool.`} />
            <TerminalOutput content={`[root@localhost:~]# swap -d /dev/zvol/dsk/rpool/swap2
[root@localhost:~]#`} />
            <Text text={`This command removes the /dev/zvol/dsk/rpool/swap2 swap volume from the swap space.`} />

        </div>
    );
};

export default Swap;