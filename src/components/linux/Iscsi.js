import React from 'react';
import {Heading, Text, TerminalOutput } from '../utils/Comps';

const Iscsi = () => {
  return (
    <div>
      <Heading text={`SCSI & ISCSI Server`}/>
   
      <Text text={`1. Install SCSI server RPMs and all its port into firewall to allow the traffic from client side.`}/>
      <Text text={`Create the partitions form any disk with any size to define it as a netword drive.`}/>
      <Text text={`Define the drive as a network drive using targetcli command pormpt.`}/>

      <TerminalOutput content={`[root@localhost ~]# dnf install targetcli`}/>

      <TerminalOutput content={`[root@localhost ~]# systemctl start target
[root@localhost ~]# systemctl enable target
Created symlink /etc/systemd/system/multi-user.target.wants/target.service → /usr/lib/systemd/system/target.service.
[root@localhost ~]#`}/>

      <TerminalOutput content={`[root@localhost ~]# firewall-cmd --permanent --add-port=3260/tcp
success
[root@localhost ~]#
[root@localhost ~]# firewall-cmd --reload
success
[root@localhost ~]# firewall-cmd --list-ports
3260/tcp
[root@localhost ~]#`}/>


      <TerminalOutput content={`[root@localhost ~]# fdisk /dev/sdb

Welcome to fdisk (util-linux 2.37.4).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x92d98d4e.

Command (m for help): n
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-20971519, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-20971519, default 20971519): +2G

Created a new partition 1 of type 'Linux' and of size 2 GiB.

Command (m for help): p
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x92d98d4e

Device     Boot Start     End Sectors Size Id Type
/dev/sdb1        2048 4196351 4194304   2G 83 Linux

Command (m for help): wq
The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.

[root@localhost ~]#`}/>
<Text text={`Note: No need to format and mount.`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
Warning: Could not load preferences file /root/.targetcli/prefs.bin.
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 0]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 0]
  o- loopback ........................................................................ [Targets: 0]
/>
`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> /backstores/block create my-drive1 /dev/sdb1
Created block storage object my-drive1 using /dev/sdb1.
/>
/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 .................................... [/dev/sdb1 (2.0GiB) write-thru deactivated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 0]
  o- loopback ........................................................................ [Targets: 0]
/>
`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 .................................... [/dev/sdb1 (2.0GiB) write-thru deactivated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 0]
  o- loopback ........................................................................ [Targets: 0]
/> /backstores/block delete my-drive1
Deleted storage object my-drive1.
/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 0]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 0]
  o- loopback ........................................................................ [Targets: 0]
/>
`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 .................................... [/dev/sdb1 (2.0GiB) write-thru deactivated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 0]
  o- loopback ........................................................................ [Targets: 0]
/> /iscsi create iqn.2025-01.com.example:disk1
Created target iqn.2025-01.com.example:disk1.
Created TPG 1.
Global pref auto_add_default_portal=true
Created default portal listening on all IPs (0.0.0.0), port 3260.
/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 .................................... [/dev/sdb1 (2.0GiB) write-thru deactivated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 1]
  | o- iqn.2025-01.com.example:disk1 .................................................... [TPGs: 1]
  |   o- tpg1 .............................................................. [no-gen-acls, no-auth]
  |     o- acls ......................................................................... [ACLs: 0]
  |     o- luns ......................................................................... [LUNs: 0]
  |     o- portals ................................................................... [Portals: 1]
  |       o- 0.0.0.0:3260 .................................................................... [OK]
  o- loopback ........................................................................ [Targets: 0]
/>
`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 .................................... [/dev/sdb1 (2.0GiB) write-thru deactivated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 1]
  | o- iqn.2025-01.com.example:disk1 .................................................... [TPGs: 1]
  |   o- tpg1 .............................................................. [no-gen-acls, no-auth]
  |     o- acls ......................................................................... [ACLs: 1]
  |     | o- iqn.2025-01.com.example:clientacl1 .................................. [Mapped LUNs: 0]
  |     o- luns ......................................................................... [LUNs: 0]
  |     o- portals ................................................................... [Portals: 1]
  |       o- 0.0.0.0:3260 .................................................................... [OK]
  o- loopback ........................................................................ [Targets: 0]
/> /iscsi/iqn.2025-01.com.example:disk1/tpg1/luns create /backstores/block/my-drive1
Created LUN 0.
Created LUN 0->0 mapping in node ACL iqn.2025-01.com.example:clientacl1
/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 ...................................... [/dev/sdb1 (2.0GiB) write-thru activated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 1]
  | o- iqn.2025-01.com.example:disk1 .................................................... [TPGs: 1]
  |   o- tpg1 .............................................................. [no-gen-acls, no-auth]
  |     o- acls ......................................................................... [ACLs: 1]
  |     | o- iqn.2025-01.com.example:clientacl1 .................................. [Mapped LUNs: 1]
  |     |   o- mapped_lun0 ............................................ [lun0 block/my-drive1 (rw)]
  |     o- luns ......................................................................... [LUNs: 1]
  |     | o- lun0 ................................ [block/my-drive1 (/dev/sdb1) (default_tg_pt_gp)]
  |     o- portals ................................................................... [Portals: 1]
  |       o- 0.0.0.0:3260 .................................................................... [OK]
  o- loopback ........................................................................ [Targets: 0]
/>
`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 ...................................... [/dev/sdb1 (2.0GiB) write-thru activated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 1]
  | o- iqn.2025-01.com.example:disk1 .................................................... [TPGs: 1]
  |   o- tpg1 .............................................................. [no-gen-acls, no-auth]
  |     o- acls ......................................................................... [ACLs: 1]
  |     | o- iqn.2025-01.com.example:clientacl1 .................................. [Mapped LUNs: 1]
  |     |   o- mapped_lun0 ............................................ [lun0 block/my-drive1 (rw)]
  |     o- luns ......................................................................... [LUNs: 1]
  |     | o- lun0 ................................ [block/my-drive1 (/dev/sdb1) (default_tg_pt_gp)]
  |     o- portals ................................................................... [Portals: 1]
  |       o- 0.0.0.0:3260 .................................................................... [OK]
  o- loopback ........................................................................ [Targets: 0]
/> /iscsi/iqn.2025-01.com.example:disk1/tpg1/portals/ create 192.168.131.134:3260
Using default IP port 3260
Could not create NetworkPortal in configFS
/>
`}/>


      <TerminalOutput content={`[root@localhost ~]# targetcli
targetcli shell version 2.1.53
Copyright 2011-2013 by Datera, Inc and others.
For help on commands, type 'help'.

/> ls
o- / ........................................................................................ [...]
  o- backstores ............................................................................. [...]
  | o- block ................................................................. [Storage Objects: 1]
  | | o- my-drive1 ...................................... [/dev/sdb1 (2.0GiB) write-thru activated]
  | |   o- alua .................................................................. [ALUA Groups: 1]
  | |     o- default_tg_pt_gp ...................................... [ALUA state: Active/optimized]
  | o- fileio ................................................................ [Storage Objects: 0]
  | o- pscsi ................................................................. [Storage Objects: 0]
  | o- ramdisk ............................................................... [Storage Objects: 0]
  o- iscsi ........................................................................... [Targets: 1]
  | o- iqn.2025-01.com.example:disk1 .................................................... [TPGs: 1]
  |   o- tpg1 .............................................................. [no-gen-acls, no-auth]
  |     o- acls ......................................................................... [ACLs: 1]
  |     | o- iqn.2025-01.com.example:clientacl1 .................................. [Mapped LUNs: 1]
  |     |   o- mapped_lun0 ............................................ [lun0 block/my-drive1 (rw)]
  |     o- luns ......................................................................... [LUNs: 1]
  |     | o- lun0 ................................ [block/my-drive1 (/dev/sdb1) (default_tg_pt_gp)]
  |     o- portals ................................................................... [Portals: 1]
  |       o- 0.0.0.0:3260 .................................................................... [OK]
  o- loopback ........................................................................ [Targets: 0]
/> saveconfig
Configuration saved to /etc/target/saveconfig.json
/> exit
Global pref auto_save_on_exit=true
Configuration saved to /etc/target/saveconfig.json
[root@localhost ~]#
`}/>

{/* ============================================================== */}
      <TerminalOutput content={`[root@localhost ~]# dnf install iscsi-initiator-utils`}/>
      <TerminalOutput content={``}/>
      <TerminalOutput content={``}/>
      <TerminalOutput content={``}/> 
      <TerminalOutput content={``}/> 
      <TerminalOutput content={``}/> 
      <TerminalOutput content={``}/>
      <TerminalOutput content={``}/>
      <TerminalOutput content={``}/>



    </div>
  )
}

export default Iscsi