import React from 'react'
import { Heading, Supersubheading, Text,   Subheading, TerminalOutput } from '../utils/Comps';

const GrepEF = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Logical Volume Manager`} />


            <Subheading text={`Checking Physical Volumes`} />
            <Supersubheading text={`All Physical Volumes`}/>
            <TerminalOutput content={`[root@localhost ~]# pvs
PV         VG Fmt  Attr PSize PFree
/dev/sdc1     lvm2 ---  2.00g 2.00g
/dev/sdc2     lvm2 ---  3.00g 3.00g`}/>

            <Supersubheading text={`Specific Physical Volume`}/>
            <TerminalOutput content={`[root@localhost ~]# pvs /dev/sdc1
PV         VG Fmt  Attr PSize PFree
/dev/sdc1     lvm2 ---  2.00g 2.00g`}/>


            <Supersubheading text={`Creating a Physical Volume`}/>
            <TerminalOutput content={`[root@localhost ~]# pvcreate /dev/sdc1
Physical volume "/dev/sdc1" successfully created.
Creating devices file /etc/lvm/devices/system.devices`}/>


            <Subheading text={`Displaying Physical Volume Information`}/>
            <Supersubheading text={`All Physical Volumes`}/>
            <TerminalOutput content={`[root@localhost ~]# pvdisplay
"/dev/sdc1" is a new physical volume of "2.00 GiB"
--- NEW Physical volume ---
PV Name               /dev/sdc1
VG Name
PV Size               2.00 GiB
Allocatable           NO
PE Size               0
Total PE              0
Free PE               0
Allocated PE          0
PV UUID               Ljv3ch-lc7I-F1hu-2nbp-xU2j-ypx9-2rrhFe`}/>

            <Supersubheading text={`Specific Physical Volume`}/>
            <TerminalOutput content={`[root@localhost ~]# pvdisplay /dev/sdc2
"/dev/sdc2" is a new physical volume of "3.00 GiB"
--- NEW Physical volume ---
PV Name               /dev/sdc2
VG Name
PV Size               3.00 GiB
Allocatable           NO
PE Size               0
Total PE              0
Free PE               0
Allocated PE          0
PV UUID               wHSWqM-xLYB-hyIi-gdc9-54C5-gx6M-I3H6RK`}/>

<Subheading text={`Creating a Volume Group`}/>
<Text text={`        To create a new volume group, at least one physical volume is required. By default, the volume group is created with a PE (physical extent) size of 4MB.
`}/>
            <Supersubheading text={`Default PE Size`}/>
            <TerminalOutput content={`[root@localhost ~]# vgcreate myvg1 /dev/sdc1 /dev/sdc2
Volume group "myvg1" successfully created.`}/>

            <Supersubheading text={`Custom PE Size`}/>
            <TerminalOutput content={`[root@localhost ~]# vgcreate -s 8M myvg2 /dev/sdc3
Physical volume "/dev/sdc3" successfully created.
Volume group "myvg2" successfully created.`}/>
<Text text={`Here, the PE size of the volume group is set to 8MB.`}/>

<Subheading text={`Checking Volume Group Status`}/>
            <Supersubheading text={`All Volume Groups`}/>
            <TerminalOutput content={`[root@localhost ~]# vgs
VG    #PV #LV #SN Attr   VSize VFree
myvg1   2   0   0 wz--n- 4.99g 4.99g`}/>

            <Supersubheading text={`Specific Volume Group`}/>
            <TerminalOutput content={`[root@localhost ~]# vgs myvg1
VG    #PV #LV #SN Attr   VSize VFree
myvg1   2   0   0 wz--n- 4.99g 4.99g`}/>

<Subheading text={`Creating a Logical Volume`}/>
            <Supersubheading text={`With Specified Size`}/>
            <TerminalOutput content={`[root@localhost ~]# lvcreate -L +1G -n mylv1 /dev/myvg1
Logical volume "mylv1" created.`}/>

            <Supersubheading text={`With Number of Logical Extents`}/>
            <TerminalOutput content={`[root@localhost ~]# lvcreate -l 100 -n mylv2 /dev/myvg1
Logical volume "mylv2" created.`}/>
<Text text={`This logical volume has a size of 400MB because the logical extent size of VG myvg1 is 4MB.`} />

<Subheading text={`Formatting a Logical Volume`}/>
            <Supersubheading text={`With ext4`}/>
            <TerminalOutput content={`[root@localhost ~]# mkfs.ext4 /dev/myvg1/mylv1
mke2fs 1.46.5 (30-Dec-2021)
Creating filesystem with 262144 4k blocks and 65536 inodes
Filesystem UUID: 9e695f65-06f2-4513-a2ea-a2fde0f1cce5
Superblock backups stored on blocks:
32768, 98304, 163840, 229376
Allocating group tables: done
Writing inode tables: done
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done`}/>

            <Supersubheading text={`With xfs`}/>
            <TerminalOutput content={`[root@localhost ~]# mkfs.xfs /dev/myvg1/mylv2
meta-data=/dev/myvg1/mylv2       isize=512    agcount=4, agsize=25600 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=0
         =                       reflink=1    bigtime=1 inobtcount=1
data     =                       bsize=4096   blocks=102400, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=1368, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0`}/>

            <Subheading text={`Resizing Logical Volumes`}/> 
            <Text text={`        Logical volumes can be resized at runtime, provided there is enough space in the respective volume group. Synchronization with the filesystem is required.
`}/>
<Supersubheading text={`Change Size to a Given Value`}/>
            <TerminalOutput content={`[root@localhost ~]# lvresize -L 900M /dev/myvg1/mylv2
Size of logical volume myvg1/mylv2 changed from 600.00 MiB to 900.00 MiB.`}/>

            <Supersubheading text={`Extend by a Specified Size`}/> 
            <TerminalOutput content={`[root@localhost ~]# lvresize -L +200M /dev/myvg1/mylv2
Size of logical volume myvg1/mylv2 changed from 400.00 MiB to 600.00 MiB.`}/>

        </div>
    )
}

export default GrepEF;