import React from 'react';
import { Heading, Subheading, Text, TerminalOutput, Line, Supersubheading } from '../utils/Comps';

const NFSConfiguration = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="NFS (Network File System)" />

            <Text text={`NFS is a protocol that allows files and directories to be shared across a network, enabling users to access and modify shared data as if it were stored locally.`} />

            <Supersubheading text="Key Concepts" />
            <Text text={`NFS is primarily used for file and directory sharing over a network.`}/>
            <Text text={`With NFS, a shared directory on the server can be mounted on the client machine, making the files accessible across the network.`}/>
            <Text text={`NFS relies on PORTMAP and RPC (Remote Procedure Call) services to establish a virtual communication tunnel between the server and client.`}/>
            <Text text={`Changes made to the shared data on any client machine are immediately reflected across all connected machines that have the mount point.`} />

            <Supersubheading text="Uses of NFS" />
            <Text text={`Sharing data across multiple systems in a network.`}/>
            <Text text={`Synchronizing files and directories between machines.`} />

            <Supersubheading text={``}/>
            <Text text={``}/>
            <Line/>
            <Subheading text="Types of Storage Concepts" />
            <Supersubheading text={`DAS (Direct Attached Storage):`}/>
            <Text text={`Storage devices that are directly connected to a system.`}/> 
            <Text text={`Examples: Floppy disks, CD-ROMs, DVDs, internal hard drives, USB drives.`}/>
            <Supersubheading text={`NAS (Network Attached Storage):`}/>
            <Text text={`Provides file-level data sharing over a network.`}/>
            <Text text={`Examples: NFS servers, SAMBA servers.`}/>
            <Supersubheading text={`SAN (Storage Area Network):`}/>
            <Text text={`Provides block-level storage access.`}/>
            <Text text={`Examples: SCSI, iSCSI, and Fibre Channel devices.`} />

            <Line />

            <Subheading text="NFS Configuration" />

            <Supersubheading text="Server-Side Configuration" />
            <Text text={`Required Package:
- nfs-utils (available for installation via package managers like yum or dnf).`}/>
            <Text text={`Daemon:
- In RHEL 7 and later: nfs-server.
- In RHEL 6 and earlier: nfs.`}/>
<Text text={`Starting the Service:`}/>
<Text text={`RHEL 6 and earlier:`}/>
<TerminalOutput content={`[root@localhost ~]# service nfs-server start
Redirecting to /bin/systemctl start nfs-server.service
[root@localhost ~]#`}/>
<TerminalOutput content={`[root@localhost ~]# chkconfig nfs-server on
Note: Forwarding request to 'systemctl enable nfs-server.service'.
[root@localhost ~]#`}/>
           
           
<Text text={`RHEL 7 and later:`}/>
<TerminalOutput content={`[root@localhost ~]# systemctl start nfs-server
[root@localhost ~]#`}/>
<TerminalOutput content={`[root@localhost ~]# systemctl enable nfs-server
[root@localhost ~]#`}/>


            <Text text={`Configuration Files:
/etc/sysconfig/nfs: Contains NFS-related settings such as port numbers and service configurations.`}/>
<Text text={`/etc/exports: Defines the directories to be shared and access permissions.`}/>
            <Text text={`Log File: /var/log/messages: Logs all NFS-related activities.`}/>
            <Text text={`Port: 2049: NFS service. `} />
<Text text={`Port: 111: PORTMAP service port (used by RPC).`}/>


            <Supersubheading text="Client-Side Configuration" />
            <Text text={`Checking Shared Mount Points:
List shared directories:
# showmount -e <server_IP>`}/>
            <TerminalOutput content={`[root@localhost ~]# showmount -e 192.168.1.10`} />

            <Text text={`Mounting Shared Directories:
Before mounting, ensure an empty directory exists on the client machine to serve as the mount point.`}/>
            <Text text={`Mounting Methods:

Temporary Mount:
Use the mount command. This mount will not persist after a reboot.`} />
            <TerminalOutput content={`[root@localhost ~]# mount 192.168.1.10:/data /mnt/shared`} />
            <Text text={`Permanent Mount:
Add an entry to the /etc/fstab file for persistent mounting.`} />
<TerminalOutput content={`[root@localhost ~]# vim /etc/fstab`}/>
            <TerminalOutput content={`192.168.1.10:/data /mnt/shared nfs defaults 0 0`} />

            <Subheading text="Exporting Mount Points (Server-Side)" />
            <Text text={`To share a directory using NFS, entries must be added to the /etc/exports file.`} />
            <Text text={`Syntax:
<mount_point> <destination>(<permissions>)`} />
<Text text={`Share a directory with read-write permissions for a specific IP:`}/>
<TerminalOutput content={`/mnt  192.168.135.1(rw)`}/>
<Text text={`Share a directory with read-only permissions for specific rage:`}/>
<TerminalOutput content={`/data  192.168.135.255(ro)`}/>
<Text text={`Share a directory with read-only permissions for all:`}/>
<TerminalOutput content={`/tmp  *(ro)`}/>
<Text text={`Share a directory with read-write permissions for all:`}/>
<TerminalOutput content={`/tmp  *(rw)`}/>
            

            <Text text={`Stopping Sharing:
To stop sharing a directory, remove or comment out its entry in the /etc/exports file.`} />
<TerminalOutput content={`[root@localhost ~]# vim /etc/exports`}/>
            <Text text={`Reloading Exported Mount Points:
Use the following commands to reload shared directories without disrupting active connections.`} />
            <TerminalOutput content={`[root@localhost ~]# exportfs -r`} />

            <Subheading text="Firewall Configuration" />
            <Text text={`If a firewall is enabled, NFS-related services must be allowed explicitly.`} />
            <TerminalOutput content={`[root@localhost ~]# firewall-cmd --permanent --add-service=nfs
success
[root@localhost ~]# firewall-cmd --permanent --add-service=mountd
success
[root@localhost ~]# firewall-cmd --permanent --add-service=rpc-bind
success
[root@localhost ~]# firewall-cmd --reload
success
[root@localhost ~]#
`} />
            <Text text={`Verify added services:`} />
            <TerminalOutput content={`[root@localhost ~]# firewall-cmd --permanent --list-services
cockpit dhcpv6-client mountd nfs rpc-bind ssh
[root@localhost ~]#
`} />

            <Subheading text="Port Verification" />
            <Text text={`Check if NFS and PORTMAP ports are open:`} />
            <TerminalOutput content={`[root@localhost ~]# netstat -tunlp | grep 2049
tcp        0      0 0.0.0.0:2049            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::2049                 :::*                    LISTEN      -
[root@localhost ~]# netstat -tunlp | grep 111
tcp        0      0 0.0.0.0:111             0.0.0.0:*               LISTEN      1/systemd
tcp6       0      0 :::111                  :::*                    LISTEN      1/systemd
udp        0      0 0.0.0.0:111             0.0.0.0:*                           1/systemd
udp6       0      0 :::111                  :::*                                1/systemd
[root@localhost ~]#
`} />
            <Text text={`Check RPC-related ports:`} />
            <TerminalOutput content={`[root@localhost ~]# rpcinfo -p
   program vers proto   port  service
    100000    4   tcp    111  portmapper
    100000    3   tcp    111  portmapper
    100000    2   tcp    111  portmapper
    100000    4   udp    111  portmapper
    100000    3   udp    111  portmapper
    100000    2   udp    111  portmapper
    100024    1   udp  35811  status
    100024    1   tcp  55611  status
    100005    1   udp  20048  mountd
    100005    1   tcp  20048  mountd
    100005    2   udp  20048  mountd
    100005    2   tcp  20048  mountd
    100005    3   udp  20048  mountd
    100005    3   tcp  20048  mountd
    100003    3   tcp   2049  nfs
    100003    4   tcp   2049  nfs
    100227    3   tcp   2049  nfs_acl
    100021    1   udp  34072  nlockmgr
    100021    3   udp  34072  nlockmgr
    100021    4   udp  34072  nlockmgr
    100021    1   tcp  36477  nlockmgr
    100021    3   tcp  36477  nlockmgr
    100021    4   tcp  36477  nlockmgr
[root@localhost ~]#
`} />

            <Subheading text="Listing Exported Mount Points" />
            <Text text={`To list all directories shared by NFS:`} />
            <TerminalOutput content={`[root@localhost ~]# exportfs
/mnt            192.168.135.255
/tmp            <world>
[root@localhost ~]#
`} />
        </div>
    );
};

export default NFSConfiguration;
