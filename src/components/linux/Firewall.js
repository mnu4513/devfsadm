import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const Firewall = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`Firewall`} />

            <Text text={`It is used to deny or allow any traffic coming to the server side.`} />

        

            <Supersubheading text={`Types of Firewall`} />

            <Text text={`1. Hardware Based Firewall`} />
            <Text text={`2. OS Based Firewall`} />

            <Subheading text={`OS Based Firewall`} />

            <Supersubheading text={`Till RHEL-6`} />
            <Text text={`we had only 2 concepts for the firewall:`}/>

            <Text text={`A. TCP Wrappers`} />
            <Text text={`Files:`} />
            <TerminalOutput content={`- /etc/hosts.allow
- /etc/hosts.deny`} />

            <Text text={`B. IP Tables`} />

            <Supersubheading text={`In RHEL-7`} />
            <Text text={`A new concept got introduced:`}/>

            <Text text={`A. TCP Wrappers`} />
            <Text text={`Files:`} />
            <TerminalOutput content={`- /etc/hosts.allow
- /etc/hosts.deny`} />

            <Text text={`B. IP Tables`} />
            <Text text={`C. Firewalld`} />

            <Supersubheading text={`In RHEL-8`}/>

            <Text text={`TCP Wrappers were removed:`} />

            <Text text={`A. IP Tables`} />
            <Text text={`B. Firewalld (Recommended)`} />

            <Line />

            <Heading text={`TCP Wrappers`} />

            <Text text={`It is an OS-based inbuilt firewall. With the help of TCP Wrappers, we can control any incoming traffic coming to the server.`} />

            <Text text={`We have two files for allow and deny:`} />
            <TerminalOutput content={`- /etc/hosts.allow
- /etc/hosts.deny`} />

            <Text text={`By default, all servers are allowed.`} />

            <Supersubheading text={`Syntax`} />
            <Text text={`In these files, we will add the daemon (service) name and IP address of servers:`} />
            <TerminalOutput content={`<Daemon_name>: <server_IP>             To block/allow a single IP
<Daemon_name>: <server_IP> <server_IP>   To block/allow multiple IPs
<Daemon_name>: 192.168.1.0/24           To block/allow all IPs from this netmask
<Daemon_name>: .example.com             To block/allow all the hostname with .example.com
<Daemon_name>: ALL                      To block/allow all the IPs on this particular service
ALL: <server_IP>                        To block/allow all the services for a particular IP
<Daemon_name>: ALL EXCEPT <server_IP>   To block all IPs except a particular IP
<Daemon_name>: <server_IP> : ALLOW
<Daemon_name>: <server_IP> : DENY`} />

            <Supersubheading text={`Example`} />
            <Text text={`How to block a particular machine from accessing the SSH service?`} />
            <TerminalOutput content={`# vim /etc/hosts.deny
sshd: <server_IP> <server_IP>
:wq

# systemctl restart sshd`} />

            <Line />

            <Heading text={`IP Tables`} />

            <Text text={`It is a software-based firewall. With the help of iptables, we can apply advanced rules compared to TCP Wrappers.`} />

           

            <Text text={`Package: iptables`} />
            <Text text={`Daemon: iptables`} />
            <Text text={`File: /etc/sysconfig/iptables`} />
            <Text text={`Command: iptables`} />

            <Supersubheading text={`Types of Rules`} />
            <Text text={`1. Incoming Rules`} />
            <Text text={`2. Outgoing Rules`} />
            <Text text={`3. Forward-Based Rules`} />

            <Supersubheading text={`Syntax`} />
            <TerminalOutput content={`# iptables -L INPUT -p tcp -s <source_IP> -j ACCEPT
# iptables -I OUTPUT -p udp -d <destination_IP> -j REJECT
# iptables -A FORWARD -p icmp --sport <port> -j DROP
# iptables -R <chain> --dport <port> -j REDIRECT
# iptables -D <chain>
# iptables -F`} />

            <Text text={`Options:`} />
            <TerminalOutput content={`-L: List
-I: Insert
-A: Append
-R: Replace
-D: Delete
-F: Flush
-s: Source IP
-d: Destination IP
--sport: Source port
--dport: Destination port
ACCEPT: Allow traffic
REJECT: Block traffic with an error message
DROP: Block traffic without an error message
REDIRECT: Use in port forwarding`} />

            <Supersubheading text={`Examples`} />

            <Text text={`1. Block incoming traffic using iptables for SSH service from IP address 192.168.1.20:`} />
            <TerminalOutput content={`# iptables -I INPUT -p tcp --dport 22 -s 192.168.1.20 -j REJECT
# service iptables save
# iptables -L`} />

            <Text text={`2. Drop a request from a particular MAC address:`} />
            <TerminalOutput content={`# iptables -I INPUT -m mac --mac-source <mac_address> -j DROP`} />

            <Text text={`3. Redirect traffic to a new port:`} />
            <TerminalOutput content={`# iptables -t nat -A PREROUTING -p tcp --dport <port> -j REDIRECT --to-port <new_port>`} />

            <Text text={`To use port forwarding, either disable SELinux or manually add the new port in SELinux.`} />
            <TerminalOutput content={`# semanage port -l | grep <service_name>
# semanage port -a -t <service_port_type> -p <protocol> <new_port>`} />

         
        </div>
    );
};

export default Firewall;
