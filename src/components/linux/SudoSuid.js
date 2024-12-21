import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const SudoSuid = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`SUDO and SUID`} />

            <Subheading text={`SUDO (Super User Do)`} />
            <Text text={`SUDO allows granting specific command execution rights to normal users or groups without giving full root access.`} />
            <Text text={`Commands in \`/bin\` are executable by normal users by default, while most commands in \`/sbin\` require elevated privileges.`} />


            <Supersubheading text={`SUDO User Configuration`} />
            <Text text={`Default Configuration File: \`/etc/sudoers\``} />
            <TerminalOutput content={`[root@localhost ~] # vim /etc/sudoers`} />
            <Text text={`Best Practice: Use a dedicated file in \`/etc/sudoers.d/<username>\` to manage user-specific configurations.`} />

            <Supersubheading text={`Syntax in SUDOERS File:`} />
            <Text text={`1. Grant Full Privileges (Same as Root):`} />
            <TerminalOutput content={`john ALL=(ALL) ALL`} />
            <Text text={`2. Grant Specific Command Access:`} />
            <TerminalOutput content={`john ALL=(ALL) lsblk, partprobe`} />
            <Text text={`3. Restrict Specific Commands:`} />
            <TerminalOutput content={`john ALL=(ALL) ALL !reboot, !parted, ...`} />
            <Text text={`4. Disable Password Prompt for SUDO:`} />
            <TerminalOutput content={`john NOPASSWD=(ALL) ALL`} />
            <Text text={`5. Grant Access to a Group:`} />
            <TerminalOutput content={`%admin ALL=(ALL) ALL`} />


            <Supersubheading text={`Monitoring and Debugging`} />
            <Text text={`Check Logs of SUDO Commands:`} />
            <TerminalOutput content={`[root@localhost ~]# tail -f /var/log/secure
Dec 20 10:41:10 localhost userdel[2600]: removed group 'harry' owned by 'harry'
Dec 20 10:41:10 localhost userdel[2600]: removed shadow group 'harry' owned by 'harry'
Dec 20 11:09:12 localhost sshd[2673]: Accepted password for ok from 192.168.136.1 port 55401 ssh2
Dec 20 11:09:12 localhost sshd[2673]: pam_unix(sshd:session): session opened for user ok(uid=1000) by (uid=0)
Dec 20 11:09:15 localhost sudo[2697]:      ok : TTY=pts/1 ; PWD=/home/ok ; USER=root ; COMMAND=/bin/su -
`} />
            <Text text={`View User’s SUDO Privileges:`} />
            <TerminalOutput content={`[root@localhost ~]# sudo -l
Matching Defaults entries for root on localhost:
    !visiblepw, always_set_home, match_group_by_gid, always_query_group_plugin,
    env_reset, env_keep="COLORS DISPLAY HOSTNAME HISTSIZE KDEDIR LS_COLORS",
    env_keep+="MAIL PS1 PS2 QTDIR USERNAME LANG LC_ADDRESS LC_CTYPE",
    env_keep+="LC_COLLATE LC_IDENTIFICATION LC_MEASUREMENT LC_MESSAGES",
    env_keep+="LC_MONETARY LC_NAME LC_NUMERIC LC_PAPER LC_TELEPHONE",
    env_keep+="LC_TIME LC_ALL LANGUAGE LINGUAS _XKB_CHARSET XAUTHORITY",
    secure_path=/sbin\:/bin\:/usr/sbin\:/usr/bin

User root may run the following commands on localhost:
    (ALL) ALL
[root@localhost ~]#
`} />

            <Line />

            <Subheading text={`SUID (Set User ID)`} />
            <Text text={`SUID allows all users to execute a command with the file owner's (usually root) permissions.`} />
            <Text text={`- Once SUID is set on a command, it shows \`-rwsr-xr-x\` in the output of \`ls -l\`.`} />
            <Text text={`- Without SUID, it appears as \`-rwxr-xr-x\`.`} />

            <Supersubheading text={`How to Set and Remove SUID:`} />
            <Text text={`1. Set SUID on a Command:`} />
            <TerminalOutput content={`[root@localhost ~]# chmod u+s /bin/echo
[root@localhost ~]# ls -l /bin/echo
-rwsr-xr-x. 1 root root 36808 Aug 10  2021 /bin/echo
[root@localhost ~]#
`} />
            <Text text={`2. Remove SUID from a Command:`} />
            <TerminalOutput content={`[root@localhost ~]# chmod u-s /bin/echo
[root@localhost ~]# ls -l /bin/echo
-rwxr-xr-x. 1 root root 36808 Aug 10  2021 /bin/echo
[root@localhost ~]#
`} />

            <Line />

            <Subheading text={`Basic Differences Between SUDO and SUID`} />
           {/* Table: SUDO vs SUID */}
<table className='w-full text-left'>
    <thead>
        <tr className='text-green-400'>
            <th>Aspect</th>
            <th>SUDO</th>
            <th>SUID</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Purpose</td>
            <td>Grants specific privileges to users.</td>
            <td>Executes a command with file owner’s permissions.</td>
        </tr>
        <tr>
            <td>Scope</td>
            <td>User or group-based permissions.</td>
            <td>Command-specific permissions.</td>
        </tr>
        <tr>
            <td>Configuration</td>
            <td>Managed through <code>/etc/sudoers</code>.</td>
            <td>Set using <code>chmod u+s</code>.</td>
        </tr>
        <tr>
            <td>Security Logging</td>
            <td>Tracks command execution in logs.</td>
            <td>No native logging for command usage.</td>
        </tr>
        <tr>
            <td>Usage Example</td>
            <td><code>sudo &lt;command&gt;</code></td>
            <td>Direct execution of the command.</td>
        </tr>
    </tbody>
</table>

        
        </div>
    );
};

export default SudoSuid;
