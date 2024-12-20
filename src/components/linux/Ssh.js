import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const SSH = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`SSH (Secure Shell)`} />
            
            <Subheading text={`Overview`} />
            <Text text={`SSH is a protocol for secure remote login and command execution. By default, it provides CLI access, not GUI.`} />
            
            <Line />
            
            <Subheading text={`Telnet vs SSH`} />
            <Text text={`
| **Feature**       | **Telnet**         | **SSH**             |
|--------------------|--------------------|---------------------|
| **Security**       | Plain text         | Encrypted           |
| **Port**           | 23                 | 22                  |
| **Authentication** | Basic              | RSA keys            |
`} />
            
            <Line />
            
            <Subheading text={`SSH Server`} />
            <Text text={`- **Package:** \`openssh-server\``} />
            <Text text={`- **Daemon:** \`sshd\``} />
            <Text text={`- **Port:** 22 (default)`} />
            <Text text={`- **Config File:** \`/etc/ssh/sshd_config\``} />
            <Text text={`- **Log File:** \`/var/log/secure\``} />
            
            <Line />
            
            <Subheading text={`Common Commands`} />
            <Supersubheading text={`1. Login to a server:`} />
            <TerminalOutput content={`ssh <user>@<server_ip>`} />
            <Supersubheading text={`2. Run a remote command:`} />
            <TerminalOutput content={`ssh <user>@<server_ip> <command>`} />
            <Supersubheading text={`3. Login with GUI:`} />
            <TerminalOutput content={`ssh -X <user>@<server_ip>`} />
            <Supersubheading text={`4. Password-less SSH:`} />
            <TerminalOutput content={`ssh-keygen`} />
            <TerminalOutput content={`ssh-copy-id <user>@<server_ip>`} />
            
            <Line />
            
            <Subheading text={`Key Configurations`} />
            <Supersubheading text={`1. Disable Root Login:`} />
            <Text text={`Edit \`/etc/ssh/sshd_config\`:`} />
            <TerminalOutput content={`PermitRootLogin no`} />
            <Supersubheading text={`2. Allow/Deny Users:`} />
            <Text text={`Add in \`/etc/ssh/sshd_config\`:`} />
            <TerminalOutput content={`AllowUsers <user1> <user2>`} />
            <TerminalOutput content={`DenyUsers <user1>`} />
            <Supersubheading text={`3. Change SSH Port:`} />
            <Text text={`Update \`/etc/ssh/sshd_config\`:`} />
            <TerminalOutput content={`Port <port_number>`} />
            <Text text={`Add port to firewall:`} />
            <TerminalOutput content={`firewall-cmd --permanent --add-port=<port_number>/tcp`} />
            <TerminalOutput content={`firewall-cmd --reload`} />
            
            <Line />
            
            <Subheading text={`Monitoring & Logs`} />
            <Supersubheading text={`1. Logged-in users:`} />
            <TerminalOutput content={`who`} />
            <TerminalOutput content={`w`} />
            <Supersubheading text={`2. View SSH logs:`} />
            <TerminalOutput content={`tail -f /var/log/secure`} />
            
            <Line />
            
            <Subheading text={`Security Enhancements`} />
            <Supersubheading text={`1. Block IPs:`} />
            <Text text={`- Pre-RHEL-8: Use \`/etc/hosts.allow\` and \`/etc/hosts.deny\`.`} />
            <Text text={`- RHEL-8+: Use \`firewalld\`.`} />
            <Supersubheading text={`2. Prevent MITM Attacks:`} />
            <Text text={`SSH verifies server identity with \`.ssh/known_hosts\`.`} />
            
        </div>
    );
};

export default SSH;
