import React from 'react';
import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';

const NetworkConfiguration = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`Network Configuration in Linux`} />


            <Text text={`A network is a group of interconnected computers and devices that can communicate with each other to share resources, data, and services. Networks can be as small as a local area network (LAN), connecting devices within a single building, or as large as a wide area network (WAN), connecting devices across cities, countries, or even globally.`} />

            <Subheading text={`Network Configuration`} />
            <Text text={`Network configuration refers to the process of setting up a network to ensure that devices can communicate effectively. This involves assigning IP addresses, configuring network interfaces, setting up routing and gateways, and ensuring that devices can connect to and exchange data over the network. Proper network configuration is essential for enabling communication between computers, accessing the internet, and managing network security.`} />

            <Subheading text={`Need of Network Configuration`} />
            <Text text={`To enable communication between two or more computers, we need a network. This communication can occur over a local area network (LAN) or a wide area network (WAN). Proper network configuration ensures that devices can interact effectively, whether they are connected directly (e.g., with a cross cable) or through network devices like hubs or switches.`} />

            <Line />
            <Subheading text={`Network Devices`} />
            <Text text={`There are different types of network devices, each serving a specific function in a network. Here are two common types:`} />
            <Supersubheading text={`1. Hub: `} />
            <Text text={`A hub is a basic network device that connects multiple computers in a network. It operates in half-duplex mode and broadcasts data to all devices connected to it. However, it doesn't generate a MAC table and lacks intelligence in managing data traffic.`} />
            <Supersubheading text={`2. Switch:`} />
            <Text text={`A switch is more advanced than a hub. It operates in full-duplex mode and generates a MAC table, allowing it to send data directly to the intended recipient device without broadcasting to all devices on the network.`} />

            <Line/>
            <Subheading text={`Types of Addresses`} />
            <Text text={`In networking, addresses are used to identify devices and manage communication. There are two main types:`} />
            <Supersubheading text={`1. Physical Address (MAC Address):`} />
            <Text text={`This is a unique identifier assigned to the network interface card (NIC) of a device. It is used for communication within a local network.`} />
            <Supersubheading text={`2. Logical Address (IP Address):`} />
            <Text text={`This is an identifier assigned to a device for communication over a network, such as the internet. IP addresses can be either IPv4 or IPv6.`} />


            <Line/>
            <Subheading text={`IP Address`} />
            <Text text={`An IP address is a unique identifier assigned to a device on a network. There are two versions:`} />
            <Supersubheading text={`1. IPv4: `} />
            <Text text={`Consists of four blocks (octets), each 8 bits in size, represented in decimal format (e.g., 192.168.1.1).`} />
            <Supersubheading text={`2. IPv6: `} />
            <Text text={`Consists of eight blocks, each 16 bits in size, represented in hexadecimal format (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).`} />

            <Subheading text={`Types of IP Addresses`} />
            <Text text={`IP addresses can be categorized into two types:`} />
            <Supersubheading text={`1. Public IP: `} />
            <Text text={`Unique across the internet, used for devices that need to be accessible from outside the local network.`} />
            <Supersubheading text={`2. Private IP: `} />
            <Text text={`Used within a private network, not routable on the internet, meant for internal communication.`} />


            <Line/>
            <Subheading text={`MAC Address`} />
            <Text text={`A MAC (Media Access Control) address is a unique identifier assigned to a network interface card (NIC) for communications on the physical network segment. It consists of six blocks, each 8 bits in size, represented in hexadecimal format (e.g., 00:1A:2B:3C:4D:5E).`} />


            <Line/>
            <Subheading text={`IP Addressing Methods`} />
            <Text text={`There are two main methods of assigning IP addresses to devices:`} />
            <Supersubheading text={`1. Automatically (using DHCP protocol):`} />
            <Text text={`Devices receive an IP address automatically from a DHCP server.`} />
            <Supersubheading text={`2. Manual Configuration (by admin):`} />
            <Text text={`An administrator manually assigns a static IP address and other network settings.`} />


            <Line/>
            <Subheading text={`IANA (Internet Assigned Numbers Authority)`} />
            <Text text={`IANA is the organization responsible for global IP address allocation, autonomous system (AS) numbers allocation, root zone management in DNS (Domain Name System), and other Internet Protocol-related symbols and Internet numbers.`} />


            <Line/>
            <Subheading text={`IP Classes`} />
            <Text text={`IP addresses are divided into classes, which define the range of IP addresses available:`} />
            <Text text={`Class A: 0 to 126 (Used for large networks with many devices)`} />
            <Text text={`Class B: 128 to 191`} />
            <Text text={`Class C: 192 to 223`} />
            <Text text={`Class D: 224 to 239 (Reserved for multicast groups)`} />
            <Text text={`Class E: 240 to 255 (Reserved for experimental purposes)`} />
        </div>
    );
}

export default NetworkConfiguration;
