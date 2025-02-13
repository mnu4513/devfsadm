import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from "../utils/Comps";

const NetworkConfiguratin = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Network Configuration in Solaris`} />

      <Text text={`Configuring network settings in Solaris involves using the ipadm and dladm commands. Below are the basic steps to configure network settings in Solaris.`} />

      {/* Checking Network Information */}
      <Subheading text={`1. Checking Network Information:`} />
      
      <Supersubheading text={`To check IP address, net mask, and MAC address:`} />
      <TerminalOutput content={`[root@localhost:~]# ifconfig -a
lo0: flags=2001000849<UP,LOOPBACK,RUNNING,MULTICAST,IPv4,VIRTUAL> mtu 8232 index 1
        inet 127.0.0.1 netmask ff000000
net0: flags=100001004843<UP,BROADCAST,RUNNING,MULTICAST,DHCP,IPv4,PHYSRUNNING> mtu 1500 index 2
        inet 192.168.131.139 netmask ffffff00 broadcast 192.168.131.255
        ether 0:c:29:70:65:29
lo0: flags=2002000849<UP,LOOPBACK,RUNNING,MULTICAST,IPv6,VIRTUAL> mtu 8252 index 1
        inet6 ::1/128
net0: flags=120002004841<UP,RUNNING,MULTICAST,DHCP,IPv6,PHYSRUNNING> mtu 1500 index 2
        inet6 fe80::20c:29ff:fe70:6529/10
        ether 0:c:29:70:65:29
[root@localhost:~]#`} />
      <Text text={`The \`ifconfig -a\` command displays the IP address, netmask, and MAC address for all network interfaces.`} />
      
      <Supersubheading text={`To show link name, class, type, and IP:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.139/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe70:6529/10
[root@localhost:~]#
`} />
      <Text text={`The \`ipadm\` command shows network configuration details such as link name, class, type, and IP address.`} />
      
      <Supersubheading text={`To check the link information:`} />
      <TerminalOutput content={`[root@localhost:~]# dladm show-link
LINK                CLASS     MTU    STATE    OVER
net0                phys      1500   up       --
[root@localhost:~]#`} />
      <Text text={`The \`dladm show-link\` command provides information about network interfaces. You can also check for Virtual Network Interface Cards (VNICs).`} />
      
      <Supersubheading text={`To check physical Network Adapter details:`} />
      <TerminalOutput content={`[root@localhost:~]# dladm show-phys
LINK              MEDIA                STATE      SPEED  DUPLEX    DEVICE
net0              Ethernet             up         1000   full      e1000g0
[root@localhost:~]#
`} />
      <Text text={`The \`dladm show-phys\` command lists details about physical network adapters.`} />
      
      <Supersubheading text={`To check the MAC address of physical devices:`} />
      <TerminalOutput content={`[root@localhost:~]# dladm show-phys -m
LINK                SLOT     ADDRESS            INUSE CLIENT
net0                primary  0:c:29:70:65:29    yes   net0
[root@localhost:~]#
`} />
      <Text text={`The \`dladm show-phys -m\` command displays the MAC address of each physical device.`} />
      
      <Supersubheading text={`To check physical device info with location:`} />
      <TerminalOutput content={`[root@localhost:~]# dladm show-phys -L
LINK              DEVICE       LOC
net0              e1000g0      MB
[root@localhost:~]#`} />
      <Text text={`The \`dladm show-phys -L\` command provides information about the physical devices along with their location.`} />
      
      <Line />

      {/* Adding Network Adapters */}
      <Text text={`To add more network interfaces (links), you must add more network adapters to your server. Once added, they will appear in the physical device list.`} />
      <Text text={`After adding network adapters, you need to create a link to use them. Here's how to do it:`} />
      
      <Subheading text={`2. Creating and Managing Links:`} />
      
      <Supersubheading text={`To create a link:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm create-ip net1
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
net1              ip         down         --         --
[root@localhost:~]#`} />
      <Text text={`The \`ipadm create-ip\` command creates a link. By default, this link is created in a "down" state, and an IP address must be assigned to bring it "up."`} />
      
      <Supersubheading text={`To assign an IP address to a link:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm create-addr -T static -a 192.168.131.142 net1
net1/v4
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
net1              ip         ok           --         --
   net1/v4        static     ok           --         192.168.131.142/24
[root@localhost:~]#`} />
      <Text text={`The \`ipadm create-addr\` command assigns an IP address to the link. Once the address is assigned, the link state will change from "down" to "OK."`} />
      
      <Supersubheading text={`To delete an IP address:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm delete-addr net1/v4
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
net1              ip         down         --         --
[root@localhost:~]#`} />
      <Text text={`The \`ipadm delete-addr\` command removes an assigned IP address from a link.`} />
      
      <Supersubheading text={`To delete a link:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm delete-ip net1
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
[root@localhost:~]#`} />
      <Text text={`The \`ipadm delete-ip\` command deletes a link from the system.`} />

      <Line />

      {/* Virtual Network Interface Card (VNIC) */}
      <Text text={`If you have limited network adapters but need more IP addresses, you can create Virtual Network Interface Cards (VNICs). Here's how to manage VNICs:`} />
      
      <Subheading text={`3. Managing VNICs:`} />
      
      <Supersubheading text={`To create a VNIC:`} />
      <TerminalOutput content={`[root@localhost:~]# dladm create-vnic -l net1 vnic0
[root@localhost:~]# dladm show-link
LINK                CLASS     MTU    STATE    OVER
net0                phys      1500   up       --
net1                phys      1500   up       --
vnic0               vnic      1500   up       net1
[root@localhost:~]#
`} />
      <Text text={`The \`dladm create-vnic\` command creates a virtual network interface card (VNIC) associated with a physical link.`} />
      
      <Supersubheading text={`To delete a VNIC:`} />
      <TerminalOutput content={`[root@localhost:~]# dladm delete-vnic vnic0
[root@localhost:~]# dladm show-link
LINK                CLASS     MTU    STATE    OVER
net0                phys      1500   up       --
net1                phys      1500   up       --
[root@localhost:~]#`} />
      <Text text={`The \`dladm delete-vnic\` command deletes a specified VNIC.`} />
      
      <Line />

      {/* IPMP Configuration */}
      <Text text={`When you have multiple network adapters and want to assign a single IP address to all of them, you can create an IPMP (IP Network Multipathing) group. This allows the server to remain operational if one network link goes down.`} />
      
      <Subheading text={`4. Configuring IPMP:`} />
      
      <Supersubheading text={`To create an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm create-ipmp ipmp1
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
ipmp1             ipmp       failed       --         --
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
[root@localhost:~]#`} />
      <Text text={`The \`ipadm create-ipmp\` command creates an IPMP group.`} />
      
      <Supersubheading text={`To add links to an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm add-ipmp -i vnic0 -i net1 ipmp1
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
ipmp1             ipmp       down         --         --
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
net1              ip         ok           ipmp1      --
vnic0             ip         ok           ipmp1      --
[root@localhost:~]#`} />
      <Text text={`The \`ipadm add-ipmp\` command adds network links to an IPMP group.`} />

     
      
      <Supersubheading text={`To assign an IP address to an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm create-addr -T static -a 192.168.131.143 ipmp1
ipmp1/v4
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
ipmp1             ipmp       ok           --         --
   ipmp1/v4       static     ok           --         192.168.131.143/24
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
net1              ip         down         --         --
vnic0             ip         ok           ipmp1      --
[root@localhost:~]#`} />
      <Text text={`The \`ipadm create-addr\` command assigns an IP address to the IPMP group.`} />
      
      <Supersubheading text={`To check IPMP group status:`} />
      <TerminalOutput content={`[root@localhost:~]# ipmpstat -g
GROUP       GROUPNAME   STATE     FDT       INTERFACES
ipmp1       ipmp1       ok        --        net1 vnic0
[root@localhost:~]#`} />
      <Text text={`The \`ipmpstat -g\` command shows the status of the IPMP group.`} />
      
      <Supersubheading text={`To check interface, active status, and flags in an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# ipmpstat -i
INTERFACE   ACTIVE  GROUP       FLAGS     LINK      PROBE     STATE
net1        yes     ipmp1       -------   up        disabled  ok
vnic0       yes     ipmp1       --mbM--   up        disabled  ok
[root@localhost:~]#`} />
      <Text text={`The \`ipmpstat -i\` command shows detailed information about the interfaces in the IPMP group.`} />
      
      <Supersubheading text={`To disable a link in an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# if_mpadm -d vnic0
[root@localhost:~]# ipmpstat -i
INTERFACE   ACTIVE  GROUP       FLAGS     LINK      PROBE     STATE
net1        yes     ipmp1       --mbM--   up        disabled  ok
vnic0       no      ipmp1       -----d-   up        disabled  offline
[root@localhost:~]#`} />
      <Text text={`The \`if_mpadm -d\` command disables a network link in an IPMP group.`} />
      
      <Supersubheading text={`To enable a link in an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# if_mpadm -r vnic0
[root@localhost:~]# ipmpstat -i
INTERFACE   ACTIVE  GROUP       FLAGS     LINK      PROBE     STATE
net1        yes     ipmp1       --mbM--   up        disabled  ok
vnic0       yes     ipmp1       -------   up        disabled  ok
[root@localhost:~]#`} />
      <Text text={`The \`if_mpadm -r\` command enables a previously disabled network link in an IPMP group.`} />
      
      <Supersubheading text={`To remove a link from an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm remove-ipmp -i net1 ipmp1
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
ipmp1             ipmp       down         --         --
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
net1              ip         down         --         --
vnic0             ip         ok           ipmp1      --
[root@localhost:~]#`} />
      <Text text={`The \`ipadm remove-ipmp\` command removes a link from the IPMP group.`} />
      
      <Supersubheading text={`To delete an IPMP group:`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm delete-ipmp ipmp1
[root@localhost:~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.141/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe75:b321/10
[root@localhost:~]#`} />
      <Text text={`The \`ipadm delete-ipmp\` command deletes an IPMP group.`} />
    </div>
  );
};

export default NetworkConfiguratin;