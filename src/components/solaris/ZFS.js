import React from 'react';
import { Heading, TerminalOutput, Supersubheading, Subheading, Line, Text } from '../utils/Comps';

const ZFS = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      
      <Heading text={`ZFS & zpool in Solaris`} />
      
      <Subheading text={`Overview of ZFS`} />
      <Text text={`ZFS (Zettabyte File System) is an advanced file system and volume manager designed by Sun Microsystems (now Oracle). It provides high storage capacities, data integrity verification, automatic repair, snapshots, and easy management.`} />
      
      <Subheading text={`What is a Zpool?`} />
      <Text text={`A zpool is a collection of storage devices that act as the foundation for ZFS file systems. A zpool provides storage to ZFS datasets and maintains data integrity and redundancy.`} />
      
      <Line />
      
      <Supersubheading text={`1. List available zpools`} />
      <TerminalOutput content={`[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]`} />
      <Text text={`Displays a list of all zpools along with their health status, size, and used/free space.`} />
      
      <Supersubheading text={`2. Check detailed status of a pool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool status rpool
  pool: rpool
 state: ONLINE
  scan: none requested
config:

        NAME      STATE     READ WRITE CKSUM
        rpool     ONLINE       0     0     0
          c2t0d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~#]`} />
      <Text text={`Shows detailed information about a zpool, including its health, devices, and any errors.`} />
      
      <Supersubheading text={`3. Find available disks for creating a zpool`} />
      <TerminalOutput content={`[root@localhost:~#] echo | format
Searching for disks...done


AVAILABLE DISK SELECTIONS:
       0. c2t0d0 <VMware,-VMware Virtual S-1.0-16.00GB>
          /pci@0,0/pci15ad,1976@10/sd@0,0
       1. c2t1d0 <VMware,-VMware Virtual S-1.0 cyl 1022 alt 2 hd 64 sec 32>
          /pci@0,0/pci15ad,1976@10/sd@1,0
       2. c2t2d0 <VMware,-VMware Virtual S-1.0 cyl 1022 alt 2 hd 64 sec 32>
          /pci@0,0/pci15ad,1976@10/sd@2,0
Specify disk (enter its number): Specify disk (enter its number):
[root@localhost:~#]`} />
      <Text text={`Lists all available disks that can be used to create a new zpool.`} />
      
      <Supersubheading text={`4. Create a new zpool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool create pool2 c2t1d0
[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
pool2  1008M   112K  1008M   0%  1.00x  ONLINE  -
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]>`} />
      <Text text={`Creates a new zpool using the specified disk. If using multiple disks, specify them separated by spaces.`} />
      
      <Supersubheading text={`5. Destroy a zpool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool destroy pool2
[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]`} />
      <Text text={`Permanently removes a zpool and all associated data. This action is irreversible.`} />
      
      <Supersubheading text={`6. List destroyed zpools`} />
      <TerminalOutput content={`[root@localhost:~#] zpool import -D
      pool: pool2
      id: 3483049889266594694
      state: ONLINE (DESTROYED)
      action: The pool can be imported using its name or numeric identifier.
      config:
      
        pool2     ONLINE
          c2t1d0  ONLINE
          c2t2d0  ONLINE
[root@localhost:~#]`} />
      <Text text={`Displays all the destroyed zpools along with disks and zpool ID.`} />

      <Supersubheading text={`7. Import a destroyed zpool`}/>
      <TerminalOutput content={`[root@localhost:~#] zpool import pool2
[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
pool2  1008M   134K  1008M   0%  1.00x  ONLINE  -
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]`} />
<Text text={`We can import a destroyed zpool only if disks form the zpool are not removed.`}/>


      <Supersubheading text={`8. Export a zpool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool export pool2
[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]`} />
<Text text={`Exporting detaches a zpool from the system.`} />

<Supersubheading text={`6. List exported zpools`} />
      <TerminalOutput content={`[root@localhost:~#] zpool import
      pool: pool2
      id: 3483049889266594694
      state: ONLINE (DESTROYED)
      action: The pool can be imported using its name or numeric identifier.
      config:
      
        pool2     ONLINE
          c2t1d0  ONLINE
          c2t2d0  ONLINE
[root@localhost:~#]`} />
      <Text text={`Displays all the exported zpools along with disks and zpool ID.`} />

<Supersubheading text={`10. Import an exported zpool`}/>
      <TerminalOutput content={`[root@localhost:~#] zpool import pool2
[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
pool2  1008M   134K  1008M   0%  1.00x  ONLINE  -
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]`} />

<TerminalOutput content={`[root@localhost:~#] zpool import 3483049889266594694
[root@localhost:~#] zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
pool2  1008M   134K  1008M   0%  1.00x  ONLINE  -
rpool  15.6G  5.04G  10.6G  32%  1.00x  ONLINE  -
[root@localhost:~#]`} />
      <Text text={`Importing reattaches it when moved to a new system or rebooted.`} />
      <Text text={`A zpool can be imported with the zpool name or zpool ID.`} />
      
      <Supersubheading text={`11. Add a disk to an existing zpool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool add pool2 c2t2d0
[root@localhost:~#] zpool status pool2
  pool: pool2
 state: ONLINE
  scan: none requested
config:

        NAME      STATE     READ WRITE CKSUM
        pool2     ONLINE       0     0     0
          c2t1d0  ONLINE       0     0     0
          c2t2d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~#]`} />
      <Text text={`Extends the zpool by adding a new disk to increase its storage capacity.`} />
      
      


      
      <Supersubheading text={`12. Create a mirrored zpool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool create pool3 mirror c2t1d0 c2t2d0
[root@localhost:~#] zpool status pool3
  pool: pool3
 state: ONLINE
  scan: none requested
config:

        NAME        STATE     READ WRITE CKSUM
        pool3       ONLINE       0     0     0
          mirror-0  ONLINE       0     0     0
            c2t1d0  ONLINE       0     0     0
            c2t2d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~#]`} />
      <Text text={`Creates a mirrored zpool for redundancy, where each disk maintains an exact copy of the data.`} />
      
      <Supersubheading text={`13. Convert an existing zpool to a mirror`} />
      <TerminalOutput content={`[root@localhost:~#] zpool status pool2
  pool: pool2
 state: ONLINE
  scan: resilvered 64K in 1s with 0 errors on Thu Feb 13 20:06:31 2025

config:

        NAME      STATE     READ WRITE CKSUM
        pool2     ONLINE       0     0     0
          c2t1d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~#] zpool attach pool2 c2t1d0 c2t2d0
[root@localhost:~#] zpool status pool2
  pool: pool2
 state: ONLINE
  scan: resilvered 67K in 1s with 0 errors on Thu Feb 13 20:07:45 2025

config:

        NAME        STATE     READ WRITE CKSUM
        pool2       ONLINE       0     0     0
          mirror-0  ONLINE       0     0     0
            c2t1d0  ONLINE       0     0     0
            c2t2d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~#]`} />
      <Text text={`Adds redundancy by attaching a new disk to an existing single-disk zpool, converting it into a mirror.`} />
      
      <Supersubheading text={`14. Detach a disk from a mirrored zpool`} />
      <TerminalOutput content={`[root@localhost:~#] zpool detach pool2 c2t2d0
[root@localhost:~#] zpool status pool2
  pool: pool2
 state: ONLINE
  scan: resilvered 64K in 1s with 0 errors on Thu Feb 13 20:06:31 2025

config:

        NAME      STATE     READ WRITE CKSUM
        pool2     ONLINE       0     0     0
          c2t1d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~#]`} />
      <Text text={`Removes a disk from a mirror, converting it back into a standalone pool.`} />
      
      <Supersubheading text={`15. Clear zpool errors`} />
      <TerminalOutput content={`[root@localhost:~#] zpool clear pool2
[root@localhost:~#]`} />
      <Text text={`Clears recorded errors in the zpool without affecting data integrity.`} />
      
      <Supersubheading text={`16. View zpool history`} />
      <TerminalOutput content={`[root@localhost:~#] zpool history pool2
History for 'pool2':
2025-02-13.20:06:10 zpool create pool2 c2t1d0
2025-02-13.20:06:36 zpool attach pool2 c2t1d0 c2t2d0
2025-02-13.20:07:22 zpool detach pool2 c2t2d0
2025-02-13.20:07:50 zpool attach pool2 c2t1d0 c2t2d0
2025-02-13.20:09:10 zpool clear pool2

[root@localhost:~#]`} />
      <Text text={`Displays a log of all operations performed on the specified zpool.`} />
      
      <Supersubheading text={`17. Perform a pool integrity check (scrub)`} />
      <TerminalOutput content={`[root@localhost:~#] zpool scrub pool2
[root@localhost:~#]`} />
      <Text text={`Scans and verifies data integrity, repairing any inconsistencies automatically.`} />
      
      <Supersubheading text={`18. Check zpool health`} />
      <TerminalOutput content={`[root@localhost:~#] zpool status -xv
all pools are healthy
[root@localhost:~#]`} />
      <Text text={`Displays the health status of all zpools, listing any issues.`} />
      
      <Subheading text={`Managing ZFS File Systems`} />
      <Supersubheading text={`19. Create a new ZFS file system`} />
      <TerminalOutput content={`[root@localhost:~#] zfs create pool2/child1
[root@localhost:~#] zfs list | grep child1
pool2/child1                       31K   976M    31K  /pool2/child1
[root@localhost:~#]`} />
      <Text text={`Creates a new child filesystem within an existing zpool.`} />

      <Supersubheading text={`20. Destroy a ZFS file system`} />
      <TerminalOutput content={`[root@localhost:~#] zfs destroy pool2/child1
[root@localhost:~#] zfs list | grep child1
[root@localhost:~#]`} />
      <Text text={`Destroy a ZFS filesystem within an existing zpool.`} />
      
      <Supersubheading text={`21. List all ZFS datasets`} />
      <TerminalOutput content={`[root@localhost:~#] zfs list
NAME                              USED  AVAIL  REFER  MOUNTPOINT
pool2                             140K   976M    32K  /pool2
pool2/child1                       31K   976M    31K  /pool2/child1
rpool                            5.10G  10.3G  4.52M  /rpool
rpool/ROOT                       3.03G  10.3G    31K  legacy
rpool/dump                       1.03G  10.3G  1.00G  -
rpool/export                     99.5K  10.3G    32K  /export
rpool/export/home                67.5K  10.3G    32K  /export/home
rpool/export/home/ok             35.5K  10.3G  35.5K  /export/home/ok
rpool/swap                       1.03G  10.3G  1.00G  -
[root@localhost:~#]`} />
      <Text text={`Displays all ZFS datasets, their mount points, and used/free space.`} />

      <Supersubheading text={`22. Change mount point of a ZFS dataset`} />
      <TerminalOutput content={`[root@localhost:~#] zfs set mountpoint=/child2 pool2/child1
[root@localhost:~#] zfs list
NAME                              USED  AVAIL  REFER  MOUNTPOINT
pool2                             149K   976M    31K  /pool2
pool2/child1                       31K   976M    31K  /child2
rpool                            5.10G  10.3G  4.52M  /rpool
rpool/ROOT                       3.03G  10.3G    31K  legacy
rpool/dump                       1.03G  10.3G  1.00G  -
rpool/export                     99.5K  10.3G    32K  /export
rpool/export/home                67.5K  10.3G    32K  /export/home
rpool/export/home/ok             35.5K  10.3G  35.5K  /export/home/ok
rpool/swap                       1.03G  10.3G  1.00G  -
[root@localhost:~#]`} />
      <Text text={`Changes the directory where the ZFS filesystem is mounted.`} />
      
      
      <Supersubheading text={`19. Check file system usage`} />
      <TerminalOutput content={`[root@localhost:~#] df -h
Filesystem             Size   Used  Available Capacity  Mounted on
rpool/ROOT/solaris      15G   2.8G        10G    22%    /
/devices                 0K     0K         0K     0%    /devices
/dev                     0K     0K         0K     0%    /dev
ctfs                     0K     0K         0K     0%    /system/contract
proc                     0K     0K         0K     0%    /proc
mnttab                   0K     0K         0K     0%    /etc/mnttab
swap                   2.1G   1.7M       2.1G     1%    /system/volatile
swap                   2.1G     4K       2.1G     1%    /tmp
rpool/VARSHARE          15G   2.4M        10G     1%    /var/share
rpool/VARSHARE/zones    15G    31K        10G     1%    /system/zones
rpool/export            15G    32K        10G     1%    /export
rpool/export/home       15G    32K        10G     1%    /export/home
rpool                   15G   4.5M        10G     1%    /rpool
/dev/dsk/c1t0d0s2      736M   736M         0K   100%    /media/Oracle_Solaris-11_3-Text-X86
rpool/export/home/ok    15G    35K        10G     1%    /export/home/ok
pool2                  976M    31K       976M     1%    /pool2
pool2/child1           976M    31K       976M     1%    /child2
[root@localhost:~#]`} />
      <Text text={`Shows disk space usage for all mounted filesystems, including ZFS.`} />
    </div>
  );
};

export default ZFS;