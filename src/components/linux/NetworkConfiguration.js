import React from 'react';
import { Heading, Subheading, Text, TerminalOutput, Line, Supersubheading } from '../utils/Comps';

const NetworkConfiguration = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="Network Configuration" />

            <Subheading text="Configure Network Between Machines" />
            <Text text={`To configure a network between two or more machines, you need to set up proper IP addresses, subnet masks, and possibly hostname mappings using the /etc/hosts file. This allows the machines to communicate directly or through a network.`} />

            <Subheading text="Requirement to Make Connection Between Machines" />
            <Text text={`The following are the requirements to connect two or more machines:
- Each machine should have a valid IP address.
- The machines should be on the same network or have proper routing configured.
- Hostnames can be mapped using the /etc/hosts file for easier access.

Example of /etc/hosts file entries:
192.168.0.10   machine1.local   machine1
192.168.0.11   machine2.local   machine2`} />

         

            <Subheading text="Till RHEL-6" />

            <Supersubheading text={`To check hostname:`} />
<TerminalOutput content={`[root@localhost ~]# hostnamectl
 Static hostname: localhost.example.com
       Icon name: computer-vm
         Chassis: vm 🖴
      Machine ID: bfb5774d12e34fd09cb44ba184e4ba73
         Boot ID: 1d1ec17a58f04887a385e0396bfbc5f8
  Virtualization: vmware
Operating System: Red Hat Enterprise Linux 9.0 (Plow)
     CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
          Kernel: Linux 5.14.0-70.22.1.el9_0.x86_64
    Architecture: x86-64
 Hardware Vendor: VMware, Inc.
  Hardware Model: VMware Virtual Platform
[root@localhost ~]#`} />
<TerminalOutput content={`[root@localhost ~]# cat /etc/hostname
localhost.example.com
[root@localhost ~]#`} />
<TerminalOutput content={`[root@localhost ~]# hostname
localhost.example.com
[root@localhost ~]#`} />

            <Supersubheading text={`To check IP address:`} />
<TerminalOutput content={`[root@localhost ~]# ifconfig -a
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.136.135  netmask 255.255.255.0  broadcast 192.168.136.255
        inet6 fe80::20c:29ff:fecc:11d6  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:cc:11:d6  txqueuelen 1000  (Ethernet)
        RX packets 22568  bytes 2037735 (1.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 11607  bytes 2062362 (1.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 597  bytes 78884 (77.0 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 597  bytes 78884 (77.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]#
`} />
<TerminalOutput content={`[root@localhost ~]# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:cc:11:d6 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.136.135/24 brd 192.168.136.255 scope global dynamic noprefixroute ens160
       valid_lft 1495sec preferred_lft 1495sec
    inet6 fe80::20c:29ff:fecc:11d6/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
[root@localhost ~]#
`} />
<TerminalOutput content={`[root@localhost ~]# ip address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:cc:11:d6 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.136.135/24 brd 192.168.136.255 scope global dynamic noprefixroute ens160
       valid_lft 1466sec preferred_lft 1466sec
    inet6 fe80::20c:29ff:fecc:11d6/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
[root@localhost ~]#
`} />
            <Text text={`To set IP address:`} />
<TerminalOutput content={`[root@localhost ~]# setup`} />

            <Text text={`Default LAN Card Name:
- eth0, eth1, etc. (renameable)`} />
            <Text text={`Connection name:
- If LAN card name is eth0, then the connection name will be the same (eth0). This is optional and can be renamed.`} />


          




            <Subheading text="In RHEL-7 and Later" />

            <Supersubheading text={`To check hostname:`} />
<TerminalOutput content={`[root@localhost ~]# hostnamectl
 Static hostname: localhost.example.com
       Icon name: computer-vm
         Chassis: vm 🖴
      Machine ID: bfb5774d12e34fd09cb44ba184e4ba73
         Boot ID: 1d1ec17a58f04887a385e0396bfbc5f8
  Virtualization: vmware
Operating System: Red Hat Enterprise Linux 9.0 (Plow)
     CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
          Kernel: Linux 5.14.0-70.22.1.el9_0.x86_64
    Architecture: x86-64
 Hardware Vendor: VMware, Inc.
  Hardware Model: VMware Virtual Platform
[root@localhost ~]#`} />
<TerminalOutput content={`[root@localhost ~]# cat /etc/hostname
localhost.example.com
[root@localhost ~]#`} />
<TerminalOutput content={`[root@localhost ~]# hostname
localhost.example.com
[root@localhost ~]#`} />


<Supersubheading text={`To check IP address:`} />
<TerminalOutput content={`[root@localhost ~]# ifconfig -a
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.136.135  netmask 255.255.255.0  broadcast 192.168.136.255
        inet6 fe80::20c:29ff:fecc:11d6  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:cc:11:d6  txqueuelen 1000  (Ethernet)
        RX packets 22568  bytes 2037735 (1.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 11607  bytes 2062362 (1.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 597  bytes 78884 (77.0 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 597  bytes 78884 (77.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]#
`} />
<TerminalOutput content={`[root@localhost ~]# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:cc:11:d6 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.136.135/24 brd 192.168.136.255 scope global dynamic noprefixroute ens160
       valid_lft 1495sec preferred_lft 1495sec
    inet6 fe80::20c:29ff:fecc:11d6/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
[root@localhost ~]#
`} />
<TerminalOutput content={`[root@localhost ~]# ip address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: ens160: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:0c:29:cc:11:d6 brd ff:ff:ff:ff:ff:ff
    altname enp3s0
    inet 192.168.136.135/24 brd 192.168.136.255 scope global dynamic noprefixroute ens160
       valid_lft 1466sec preferred_lft 1466sec
    inet6 fe80::20c:29ff:fecc:11d6/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
[root@localhost ~]#
`} />


            <Supersubheading text={`To set IP address:`} />
            <Text text={`To check connections using nmcli command:`}/>
            <TerminalOutput content={`[root@localhost ~]# nmcli connection show
NAME     UUID                                  TYPE      DEVICE
ens160   f5bb8206-9666-3ea2-92b4-9799bdef7572  ethernet  ens160
docker0  fe4c7bf8-2a1c-4440-a120-cd862d9cbf11  bridge    docker0
[root@localhost ~]#
`} />

<Text text={`To setup connection using nmtui command`}/>
<TerminalOutput content={`[root@localhost ~]# nmtui
[root@localhost ~]#
`} />
            <Text text={`Default LAN Card Name:
- ens33, ens160, etc. (renameable)`} />
            <Text text={`Connection name:
- It will ask for a file name, which is optional.`} />
            

{/* ================================================== */}

            <Line />

            <Subheading text="Setting Up IP Address using nmcli" />

            <Text text={`To check IP address, LAN cards, or network interface cards:`} />
<TerminalOutput content={`[root@localhost ~]# ifconfig -a
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.136.135  netmask 255.255.255.0  broadcast 192.168.136.255
        inet6 fe80::20c:29ff:fecc:11d6  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:cc:11:d6  txqueuelen 1000  (Ethernet)
        RX packets 22568  bytes 2037735 (1.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 11607  bytes 2062362 (1.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 597  bytes 78884 (77.0 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 597  bytes 78884 (77.0 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]#
`} />


            <Text text={`To get details for a particular network interface card:`} />
<TerminalOutput content={`[root@localhost ~]# ifconfig ens160
ens160: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.136.135  netmask 255.255.255.0  broadcast 192.168.136.255
        inet6 fe80::20c:29ff:fecc:11d6  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:cc:11:d6  txqueuelen 1000  (Ethernet)
        RX packets 23534  bytes 2121451 (2.0 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 12211  bytes 2159662 (2.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]#
`} />




<Supersubheading text={`To see connections:`} />
<TerminalOutput content={`[root@localhost ~]# nmcli connection show
NAME     UUID                                  TYPE      DEVICE
ens160   f5bb8206-9666-3ea2-92b4-9799bdef7572  ethernet  ens160
docker0  fe4c7bf8-2a1c-4440-a120-cd862d9cbf11  bridge    docker0
[root@localhost ~]#
`} />

 <Supersubheading text={`To delete a connections:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection delete docker0
Connection 'docker0' (fe4c7bf8-2a1c-4440-a120-cd862d9cbf11) successfully deleted.
[root@localhost ~]# nmcli connection show
NAME    UUID                                  TYPE      DEVICE
ens160  f5bb8206-9666-3ea2-92b4-9799bdef7572  ethernet  ens160
[root@localhost ~]#
`} />

<Supersubheading text={`To add a new connections:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection add con-name test ifname ens160 type ethernet autoconnect yes ip4 192.168.136.136/24
Connection 'test' (2ea04f90-77f0-4532-b604-38e4c8841259) successfully added.
[root@localhost ~]# nmcli connection show
NAME    UUID                                  TYPE      DEVICE
ens160  f5bb8206-9666-3ea2-92b4-9799bdef7572  ethernet  ens160
test    2ea04f90-77f0-4532-b604-38e4c8841259  ethernet  --
[root@localhost ~]#
`} />
<Supersubheading text={`To modify an existing connections:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection modify ens192 ipv4.address 192.168.136.137/24
[root@localhost ~]# ifconfig ens192
ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.136.136  netmask 255.255.255.0  broadcast 192.168.136.255
        inet6 fe80::9923:3ade:264:e702  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:cc:11:e0  txqueuelen 1000  (Ethernet)
        RX packets 28  bytes 1792 (1.7 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 13  bytes 882 (882.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]#
`} />

<Supersubheading text={`To create a connection with manual DNS and getway:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection add ifname ens192 con-name ens192 autoconnect yes type ethernet ip4 192.168.136.136/24 gw4 192.168.136.1 ipv4.dns 192.168.136.1
Connection 'ens192' (07f0ec78-13c1-4a45-a3c2-7b709c002e58) successfully added.
[root@localhost ~]# ip route
default via 192.168.136.2 dev ens160 proto dhcp metric 100
default via 192.168.136.1 dev ens192 proto static metric 101
192.168.136.0/24 dev ens160 proto kernel scope link src 192.168.136.135 metric 100
192.168.136.0/24 dev ens192 proto kernel scope link src 192.168.136.136 metric 101
[root@localhost ~]# cat /etc/resolv.conf
# Generated by NetworkManager
search localdomain example.com
nameserver 192.168.136.2
nameserver 192.168.136.1
[root@localhost ~]#
`}/>
<Supersubheading text={`Assign IP through DHCP:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection add ifname ens192 con-name ens192 type ethernet autoconnect yes
Connection 'ens192' (1f8e09db-a94f-4c38-a385-7ac42b3645c6) successfully added.
[root@localhost ~]# ifconfig ens192
ens192: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.136.136  netmask 255.255.255.0  broadcast 192.168.136.255
        inet6 fe80::85e6:a479:1400:d60b  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:cc:11:e0  txqueuelen 1000  (Ethernet)
        RX packets 435  bytes 29233 (28.5 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 50  bytes 4206 (4.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

[root@localhost ~]#
`}/>
<Supersubheading text={`To down a connection:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection down ens192
Connection 'ens192' successfully deactivated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/6)
[root@localhost ~]#`}/>

<Supersubheading text={`To up a connection:`}/>
<TerminalOutput content={`[root@localhost ~]# nmcli connection up ens192
Connection successfully activated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/6)
[root@localhost ~]#`}/>




        </div>
    );
};

export default NetworkConfiguration;
