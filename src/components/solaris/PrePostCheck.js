import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const PrePostCheck = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Pre & Post Checks in Solaris`} />
      
      <Text text={`Pre and Post checks are essential in system administration to ensure that the system's health, configurations, and resource utilization are verified before and after making any changes or taking a reboot. `} />
      
      <Text text={`The following are some critical commands used for these checks in Solaris:`}/>
      <Line />
      <Subheading text={`Pre-Check Commands`} />
      <Text text={`These commands help capture the current system state before making any modifications.`} />

      <Supersubheading text={`Disk Usage Check`} />
      <Text text={`The 'df' command displays the disk space usage of mounted file systems.`} />
      <TerminalOutput content={`[root@localhost:~]# df -h
Filesystem             Size   Used  Available Capacity  Mounted on
rpool/ROOT/solaris      15G   2.8G        10G    22%    /
/devices                 0K     0K         0K     0%    /devices
/dev                     0K     0K         0K     0%    /dev
ctfs                     0K     0K         0K     0%    /system/contract
proc                     0K     0K         0K     0%    /proc
mnttab                   0K     0K         0K     0%    /etc/mnttab
swap                   1.7G   1.6M       1.7G     1%    /system/volatile
objfs                    0K     0K         0K     0%    /system/object
swap                   1.7G     4K       1.7G     1%    /tmp
rpool/VARSHARE          15G   2.4M        10G     1%    /var/share
pool2/child1           976M    32K       976M     1%    /child2
rpool/export            15G    32K        10G     1%    /export
rpool/export/home       15G    32K        10G     1%    /export/home
rpool/export/home/ok    15G    35K        10G     1%    /export/home/ok
pool2                  976M    31K       976M     1%    /pool2
rpool                   15G   4.5M        10G     1%    /rpool
rpool/VARSHARE/zones    15G    31K        10G     1%    /system/zones
rpool/VARSHARE/pkg      15G    32K        10G     1%    /var/share/pkg`} />
      <Text text={`Adding 'wc -l' helps count the number of mounted filesystems.`} /> 
      <TerminalOutput content={`[root@localhost:~]# df -h | wc -l
      25
[root@localhost:~]#`} />

      <Supersubheading text={`Disk Partition and Format Check`} />
      <Text text={`The 'format' command lists available disks and their partitioning details.`} />
      <TerminalOutput content={`[root@localhost:~]# echo | format
Searching for disks...done


AVAILABLE DISK SELECTIONS:
       0. c2t0d0 <VMware,-VMware Virtual S-1.0-16.00GB>
          /pci@0,0/pci15ad,1976@10/sd@0,0
       1. c2t1d0 <VMware,-VMware Virtual S-1.0-1.00GB>
          /pci@0,0/pci15ad,1976@10/sd@1,0
       2. c2t2d0 <VMware,-VMware Virtual S-1.0-1.00GB>
          /pci@0,0/pci15ad,1976@10/sd@2,0
Specify disk (enter its number): Specify disk (enter its number):
[root@localhost:~]#`} />
      <Text text={`Adding 'wc -l' counts the number of disks recognized by the system.`} />
      <TerminalOutput content={`[root@localhost:~]# echo | format | wc -l
      11
[root@localhost:~]#`} />

      <Supersubheading text={`ZFS Storage Check`} />
      <Text text={`The 'zpool list' command provides an overview of the available ZFS storage pools.`} />
      <TerminalOutput content={`[root@localhost:~]# zpool list
NAME    SIZE  ALLOC   FREE  CAP  DEDUP  HEALTH  ALTROOT
pool2  1008M   165K  1008M   0%  1.00x  ONLINE  -
rpool  15.6G  5.08G  10.5G  32%  1.00x  ONLINE  -
[root@localhost:~]#`} />
      <Text text={`The 'zpool status' command gives a detailed report on the health of ZFS pools.`} />
      <TerminalOutput content={`[root@localhost:~]# zpool status
  pool: pool2
 state: ONLINE
  scan: scrub repaired 0 in 1s with 0 errors on Thu Feb 13 20:10:53 2025

config:

        NAME        STATE     READ WRITE CKSUM
        pool2       ONLINE       0     0     0
          mirror-0  ONLINE       0     0     0
            c2t1d0  ONLINE       0     0     0
            c2t2d0  ONLINE       0     0     0

errors: No known data errors

  pool: rpool
 state: ONLINE
  scan: none requested
config:

        NAME      STATE     READ WRITE CKSUM
        rpool     ONLINE       0     0     0
          c2t0d0  ONLINE       0     0     0

errors: No known data errors
[root@localhost:~]#`} />
      <Text text={`The '-xv' flag provides verbose output, including only the pools with issues.`} />
      <TerminalOutput content={`[root@localhost:~]# zpool status -xv
all pools are healthy
[root@localhost:~]#`} />

      <Supersubheading text={`Service Health Check`} />
      <Text text={`The 'svcs -x' command displays services that are in a maintenance state or not running correctly.`} />
      <TerminalOutput content={`[root@localhost:~]# svcs -xv
svc:/network/nfs/nlockmgr:default (NFS lock manager)
 State: disabled since February 17, 2025 12:00:21 PM UTC
Reason: Disabled by an administrator.
   See: http://support.oracle.com/msg/SMF-8000-05
   See: man -M /usr/share/man -s 1M lockd
   See: /var/svc/log/network-nfs-nlockmgr:default.log
Impact: 2 dependent services are not running:
        svc:/network/nfs/client:default
        svc:/network/nfs/server:default
[root@localhost:~]#`} />
      
      <Supersubheading text={`Fault Management Check`} />
      <Text text={`The 'fmadm faulty' command lists faulty hardware components or system issues detected by FMA (Fault Management Architecture).`} />
      <TerminalOutput content={`[root@localhost:~]# fmadm faulty
[root@localhost:~]#`} />

      <Supersubheading text={`Network Configuration Check`} />
      <Text text={`The 'ipadm' command shows the current IP configuration on the system.`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
[root@localhost:~]#`} />
      <Text text={`The 'ipmpstat -i' and 'ipmpstat -g' commands provide information about IP Multipathing (IPMP).`} />
      <TerminalOutput content={`[root@localhost:~]# ipmpstat -i
[root@localhost:~]#`} />
      <TerminalOutput content={`[root@localhost:~]# ipmpstat -g
[root@localhost:~]#`} />
      <Text text={`The 'netstat -nrv' command displays the system’s routing table in a numerical format.`} />
      <TerminalOutput content={`[root@localhost:~]# netstat -nrv

IRE Table: IPv4
  Destination             Mask           Gateway          Device  MTU  Ref Flg  Out   In/Fwd
-------------------- --------------- -------------------- ------ ----- --- --- -----  ------
default              0.0.0.0         192.168.131.2        net0    1500   1 UG       0       0
127.0.0.1            255.255.255.255 127.0.0.1            lo0     8232  20 UH     289     289
192.168.131.0        255.255.255.0   192.168.131.141      net0    1500   4 U       25       0

IRE Table: IPv6
  Destination/Mask            Gateway                    If    MTU  Ref Flags  Out    In/Fwd
--------------------------- --------------------------- ----- ----- --- ----- ------  ------
::1                         ::1                         lo0    8252   2 UH         0       0
fe80::/10                   fe80::20c:29ff:fe75:b321    net0   1500   2 U          0       0
[root@localhost:~]#`} />

      <Supersubheading text={`System Configuration Checks`} />
      <Text text={`Checking essential system files for network and user configurations.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/resolv.conf

#
# _AUTOGENERATED_FROM_SMF_V1_
#
# WARNING: THIS FILE GENERATED FROM SMF DATA.
#   DO NOT EDIT THIS FILE.  EDITS WILL BE LOST.
# See resolv.conf(4) for details.

domain  localdomain
nameserver      192.168.131.2
[root@localhost:~]#`} />
      <Text text={`Displays the DNS resolver configuration.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/passwd
root:x:0:0:Super-User:/root:/usr/bin/bash
daemon:x:1:1::/:
bin:x:2:2::/usr/bin:
sys:x:3:3::/:
adm:x:4:4:Admin:/var/adm:
lp:x:71:8:Line Printer Admin:/:
uucp:x:5:5:uucp Admin:/usr/lib/uucp:
nuucp:x:9:9:uucp Admin:/var/spool/uucppublic:/usr/lib/uucp/uucico
ikeuser:x:67:12:IKE Admin:/:
ocm:x:62:12:& User:/usr/lib/ocm:/usr/bin/pfksh
aiuser:x:61:61:AI User:/:
dhcpserv:x:18:65:DHCP Configuration Admin:/:
pkg5srv:x:97:97:pkg(5) server UID:/:
ok:x:100:10::/export/home/ok:/usr/bin/bash
[root@localhost:~]#`} />
      <Text text={`Lists all system users.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/group
root::0:
other::1:root
bin::2:root,daemon
sys::3:root,bin,adm
adm::4:root,daemon
uucp::5:root
mail::6:root
tty::7:root,adm
aiuser::61:
pkg5srv::97:
mlocate::95:
ok::100:ok
[root@localhost:~]#`} />
      <Text text={`Shows group memberships.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/hosts
#
# Copyright 2009 Sun Microsystems, Inc.  All rights reserved.
# Use is subject to license terms.
#
# Internet host table
#
::1 solaris localhost
127.0.0.1 solaris localhost loghost
[root@localhost:~]#`} />
      <Text text={`Displays static hostname-to-IP address mappings.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/system
*
* SYSTEM SPECIFICATION FILE
*

* It is highly recommened not to edit this file directly but instead
* to deliver fragments into files in /etc/system.d/
*
* The recommended naming for files in /etc/system.d/ is to use the IPS
* package name with the '/' converted to a ':' for example:
*       pkg:/mycompany/db-server/hr-db delivers content as
*       /etc/system.d/mycompany:db-server:hr-db
*
* When the system boot archive is generated the contents of /etc/system.d
* are placed into a secondary /etc/system file that the kernel will read
* before it reads /etc/system.



* moddir:
*
*       Set the search path for modules.  This has a format similar to the
*       csh path variable. If the module isn't found in the first directory
*       it tries the second and so on. The default is /kernel /usr/kernel
*
*       Example:
*               moddir: /kernel /usr/kernel /other/modules



* root device and root filesystem configuration:
*
*       The following may be used to override the defaults provided by
*       the boot program:
*
*       rootfs:         Set the filesystem type of the root.
*
*       rootdev:        Set the root device.  This should be a fully
*                       expanded physical pathname.  The default is the
*                       physical pathname of the device where the boot
*                       program resides.  The physical pathname is
*                       highly platform and configuration dependent.
*
*       Example:
*               rootfs:ufs
*               rootdev:/sbus@1,f8000000/esp@0,800000/sd@3,0:a
*
*       (Swap device configuration should be specified in /etc/vfstab.)



* exclude:
*
*       Modules appearing in the moddir path which are NOT to be loaded,
*       even if referenced. Note that 'exclude' accepts either a module name,
*       or a filename which includes the directory.
*
*       Examples:
*               exclude: win
*               exclude: sys/shmsys



* forceload:
*
*       Cause these modules to be loaded at boot time, (just before mounting
*       the root filesystem) rather than at first reference. Note that
*       forceload expects a filename which includes the directory. Also
*       note that loading a module does not necessarily imply that it will
*       be installed.
*
*       Example:
*               forceload: drv/foo



* set:
*
*       Set an integer variable in the kernel or a module to a new value.
*       This facility should be used with caution.  See system(4).
*
*       Examples:
*
*       To set variables in 'unix':
*
*               set nautopush=32
*               set maxusers=40
*
*       To set a variable named 'debug' in the module named 'test_module'
*
*               set test_module:debug = 0x13

[root@localhost:~]#`} />
      <Text text={`Contains kernel tuning parameters and system configurations.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /var/adm/messages
Feb 13 17:30:09 solaris genunix: [ID 540533 kern.notice] ^MSunOS Release 5.11 Version 11.3 64-bit
Feb 13 17:30:09 solaris genunix: [ID 282658 kern.notice] Copyright (c) 1983, 2015, Oracle and/or its affiliates. All rights reserved.
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: lgpg
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: tsc
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: msr
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: mtrr
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: pge
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: de
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: cmov
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: mmx
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: pae
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: cv8
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: pat
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: sep
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: sse
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: sse2
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: asysc
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: nx
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: sse3
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: cx16
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: tscp
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: cpuid
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: ssse3
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: sse4_1
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: sse4_2
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: 1gpg
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: clfsh
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: 64
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: aes
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: pclmulqdq
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: xsave
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: avx
Feb 13 17:30:09 solaris unix: [ID 223955 kern.info] x86_feature: xsaveopt`} />
      <Text text={`Logs system messages, errors, and warnings.`} />

      <Line />
      <Subheading text={`Post-Check Validation`} />
      <Text text={`After making changes to the system, repeat the above checks to confirm system health and verify that no new issues have arisen.`} />
    </div>
  );
};

export default PrePostCheck;
