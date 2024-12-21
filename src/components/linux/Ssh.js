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
            {/* Table: Telnet vs SSH */}
<table className='w-full text-left'>
    <thead>
        <tr className='text-green-400'>
            <th>Feature</th>
            <th>Telnet</th>
            <th>SSH</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Security</td>
            <td>Plain text</td>
            <td>Encrypted</td>
        </tr>
        <tr>
            <td>Port</td>
            <td>23</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Authentication</td>
            <td>Basic</td>
            <td>RSA keys</td>
        </tr>
    </tbody>
</table>

            
            <Line />
            
            <Subheading text={`SSH Server`} />
            {/* Table: SSH Server Details */}
<table className='w-full text-left'>
    <thead>
        <tr className='text-green-400'>
            <th>Attribute</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Package</td>
            <td><code>openssh-server</code></td>
        </tr>
        <tr>
            <td>Daemon</td>
            <td><code>sshd</code></td>
        </tr>
        <tr>
            <td>Port</td>
            <td>22 (default)</td>
        </tr>
        <tr>
            <td>Config File</td>
            <td><code>/etc/ssh/sshd_config</code></td>
        </tr>
        <tr>
            <td>Log File</td>
            <td><code>/var/log/secure</code></td>
        </tr>
    </tbody>
</table>

            <Line />
            
            <Subheading text={`Common Commands`} />
            <Supersubheading text={`1. Login to a server:`} />
            <TerminalOutput content={`[root@localhost ~]# ssh john@192.168.136.135
john@192.168.136.135's password:
Last login: Fri Dec 20 10:27:42 2024
[john@localhost ~]$
`} />
            <Supersubheading text={`2. Run a remote command:`} />
            <TerminalOutput content={`[root@localhost ~]# ssh john@192.168.136.135 ls -latrh
john@192.168.136.135's password:
total 16K
-rw-r--r--. 1 john john 492 Nov  5  2021 .bashrc
-rw-r--r--. 1 john john 141 Nov  5  2021 .bash_profile
-rw-r--r--. 1 john john  18 Nov  5  2021 .bash_logout
-rw-------. 1 john john   6 Dec 20 10:28 .bash_history
drwx------. 2 john john  83 Dec 20 10:28 .
drwxr-xr-x. 7 root root  62 Dec 20 10:41 ..
[root@localhost ~]#
`} />
            <Supersubheading text={`3. Login with GUI:`} />
            <TerminalOutput content={`[root@localhost ~]# ssh -X john@192.168.136.135
john@192.168.136.135's password:
Last login: Sat Dec 21 10:03:35 2024 from 192.168.136.135
[john@localhost ~]$
`} />
            <Supersubheading text={`4. Password-less SSH:`} />
            <TerminalOutput content={`[root@localhost ~]# ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa
Your public key has been saved in /root/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:UiIQv7q9dY9acZm6qiF36mkq9Q6MUZPSh48HH5Cdcxo root@localhost.localdomain
The key's randomart image is:
+---[RSA 3072]----+
|  ++ .           |
| ..*E .          |
|. B ==. .        |
| o B.+ o   o     |
|. . = . S +      |
| +.o   . +       |
|..=.o o +        |
|.  *o* o +       |
| .o=Ooooo .      |
+----[SHA256]-----+
[root@localhost ~]#`} />
            <TerminalOutput content={`[root@localhost ~]# cp john@192.168.136.135
cp: missing destination file operand after 'john@192.168.136.135'
Try 'cp --help' for more information.
[root@localhost ~]# ssh-copy-id john@192.168.136.135
/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/root/.ssh/id_rsa.pub"
/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
john@192.168.136.135's password:

Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'john@192.168.136.135'"
and check to make sure that only the key(s) you wanted were added.

[root@localhost ~]# ssh john@192.168.136.135
Register this system with Red Hat Insights: insights-client --register
Create an account or view all your systems at https://red.ht/insights-dashboard
Last login: Sat Dec 21 10:06:00 2024 from 192.168.136.135
[john@localhost ~]$
`} />
            
            <Line />
            
            <Subheading text={`Key Configurations`} />
            <Supersubheading text={`1. Disable Root Login:`} />
            <Text text={`Edit \`/etc/ssh/sshd_config\`:`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/ssh/sshd_config`} />
            <TerminalOutput content={`PermitRootLogin no`} />
            <Supersubheading text={`2. Allow/Deny Users:`} />
            <Text text={`Add in \`/etc/ssh/sshd_config\`:`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/ssh/sshd_config`} />
            <TerminalOutput content={`AllowUsers john`} />
            <TerminalOutput content={`DenyUsers nick dom`} />
            <Supersubheading text={`3. Change SSH Port:`} />
            <Text text={`Update \`/etc/ssh/sshd_config\`:`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/ssh/sshd_config`} />
            <TerminalOutput content={`Port 2022`} />
            <Text text={`Add port to firewall:`} />
            <TerminalOutput content={`firewall-cmd --permanent --add-port=2022/tcp`} />
            <TerminalOutput content={`firewall-cmd --reload`} />
            
            <Line />
            
            <Subheading text={`Monitoring & Logs`} />
            <Supersubheading text={`1. Logged-in users:`} />
            <TerminalOutput content={`[root@localhost ~]#  who
root     tty1         2024-12-19 09:27
ok       pts/0        2024-12-21 10:16 (192.168.136.1)
[root@localhost ~]# `} />
            <TerminalOutput content={`[root@localhost ~]# w
 10:23:09 up  8:51,  2 users,  load average: 0.00, 0.01, 0.00
USER     TTY        LOGIN@   IDLE   JCPU   PCPU WHAT
root     tty1      Thu09    2days  0.44s  0.44s -bash
ok       pts/0     10:16    1.00s  0.07s  0.03s sshd: ok [priv]
[root@localhost ~]#
`} />
            <Supersubheading text={`2. View SSH logs:`} />
            <TerminalOutput content={`[root@localhost ~]# tail -f /var/log/secure
Dec 21 10:18:19 localhost sshd[3358]: pam_unix(sshd:session): session opened for user john(uid=1003) by (uid=0)
Dec 21 10:18:19 localhost sshd[3375]: Received disconnect from 192.168.136.135 port 34938:11: disconnected by user
Dec 21 10:18:19 localhost sshd[3375]: Disconnected from user john 192.168.136.135 port 34938
Dec 21 10:18:19 localhost sshd[3358]: pam_unix(sshd:session): session closed for user john
Dec 21 10:18:31 localhost sshd[3402]: Accepted publickey for john from 192.168.136.135 port 57940 ssh2: RSA SHA256:UiIQv7q9dY9acZm6qiF36mkq9Q6MUZPSh48HH5Cdcxo
Dec 21 10:18:32 localhost systemd[3406]: pam_unix(systemd-user:session): session opened for user john(uid=1003) by (uid=0)
Dec 21 10:18:32 localhost sshd[3402]: pam_unix(sshd:session): session opened for user john(uid=1003) by (uid=0)
Dec 21 10:19:55 localhost sshd[3416]: Received disconnect from 192.168.136.135 port 57940:11: disconnected by user
Dec 21 10:19:55 localhost sshd[3416]: Disconnected from user john 192.168.136.135 port 57940
Dec 21 10:19:55 localhost sshd[3402]: pam_unix(sshd:session): session closed for user john
`} />
            
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
