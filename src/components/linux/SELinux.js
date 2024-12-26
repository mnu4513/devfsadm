import React from 'react';
import { Heading, Subheading, Text, Supersubheading, TerminalOutput, Line } from '../utils/Comps';

const SELinuxCommand = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="SELinux in Linux" />

            <Subheading text="What is SELinux?" />
            <Text text="SELinux (Security-Enhanced Linux) is a security architecture for Linux systems that provides a higher level of control over who can access a system. It was developed by the National Security Agency (NSA) in the United States." />
            <Text text="SELinux was released to the open-source community in 2000, and integrated into the upstream Linux kernel in 2003. It first appeared in RHEL-5 (Red Hat Enterprise Linux 5)." />
            <Text text="SELinux is a mandatory access control (MAC) mechanism, unlike traditional discretionary access control (DAC) used by standard Linux systems. It helps prevent misconfigurations and malicious exploits by enforcing security policies on processes, users, and applications." />
            <Text text="SELinux acts as a security layer, similar to an application firewall, by specifying rules for interactions between applications and system services." />

            <Subheading text="How SELinux Works" />
            <Text text="SELinux enforces access controls on files, processes, and applications. It operates by enforcing security policies that define what can or cannot be accessed." />
            <Text text="In a traditional Linux system, the root user has complete access to the system (via DAC), meaning the root user can access any user’s data and execute any command. SELinux adds an additional layer of access control on top of DAC." />
            <Text text="SELinux operates on the principle of least privilege, allowing the minimal required access for processes and users." />

            <Subheading text="Types of Access Control in Linux" />
            
            <Supersubheading text="DAC (Discretionary Access Control)" />
            <Text text="Traditional Linux access control mechanism where file and resource permissions are set by users, using commands like chmod, chown, chgrp, and ACLs. Users have the discretion to set permissions on their resources." />
            
            <Supersubheading text="MAC (Mandatory Access Control)" />
            <Text text="SELinux uses MAC, where administrators define security policies that override user-specific permissions. Even if a user or process modifies the file permissions (DAC), the SELinux policies will enforce restrictions, preventing unauthorized access." />

            <Subheading text="SELinux Modes" />
            
            <Supersubheading text="Enforcing Mode" />
            <Text text="SELinux security policies are fully enforced. All defined policies are applied, and any action that violates these policies is denied. Logs of denied actions are written to the system's log files." />
            <TerminalOutput content={`[root@localhost ~]# setenforce 1`} />
            <Text text="Code for enforcing mode: 1." />

            <Supersubheading text="Permissive Mode" />
            <Text text="SELinux still logs policy violations, but does not enforce them. It’s useful for troubleshooting and understanding potential issues before enforcing the policies." />
            <TerminalOutput content={`[root@localhost ~]# setenforce 0`} />
            <Text text="Code for permissive mode: 0." />
            
            <Supersubheading text="Disabled Mode" />
            <Text text="SELinux is completely disabled, and no policies are applied. No SELinux-related logs are generated, and the system operates as if SELinux were never installed. Useful if SELinux is not required on the system." />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/selinux/config`}/>
            <TerminalOutput content={`SELINUX=disabled`}/>
            <Text text="Note: Switching between enforcing and permissive modes does not require a reboot. However, switching from disabled to either enforcing or permissive requires a system reboot." />


            <Subheading text="Configuring SELinux" />
            
            <Supersubheading text="SELinux Package" />
            <TerminalOutput content={`[root@localhost ~]# rpm -qa selinux*`}/>
            <Text text="To check if SELinux is installed, if not installed then we have to install it" />
            <TerminalOutput content={`[root@localhost ~]# dnf install selinux*`}/>
            <Text text={`To install selinux`}/>
            
            <Supersubheading text="Configuration Files:" />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/selinux/config`}/>
            <Text text="Primary configuration file" />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/sysconfig/selinux`}/>
            <Text text="Symlink to the main config file" />
            
            <Supersubheading text="Log Files: " />
            <TerminalOutput content="[root@localhost ~]# cat /var/log/audit/audit.log" />




            <Subheading text="SELinux Policies" />
            
            <Supersubheading text="Socket-Based Policies" />
            <Text text="Socket-based policies define the allowed ports and protocols for services." />
            <Text text={`To view added port of a socket service:`}/>
            <TerminalOutput content={`[root@localhost ~]# semanage port -l | grep ssh
ssh_port_t                     tcp      22
[root@localhost ~]#
`} />
<Text text={`To add port of a socket service:`}/>
            <TerminalOutput content={`[root@localhost ~]# semanage port -a -t ssh_port_t -p tcp 1122
[root@localhost ~]# semanage port -l | grep ssh
ssh_port_t                     tcp      1122, 22
[root@localhost ~]#
`} />

            {/* ------------------------------------------ */}
            
            <Supersubheading text="Boolean-Based Policies" />
            <Text text="Boolean-based policies control various system behaviors." />
            <Text text={`To list all booleans of a service:`}/>
            <TerminalOutput content={`[root@localhost ~]# getsebool -a | grep httpd
httpd_anon_write --> off
httpd_builtin_scripting --> on
httpd_can_check_spam --> off
httpd_can_connect_ftp --> off
httpd_can_connect_ldap --> off
httpd_can_connect_mythtv --> off
httpd_can_connect_zabbix --> off
httpd_can_manage_courier_spool --> off
[root@localhost ~]#
`} />
<Text text={`To change value of a boolean:`}/>
            <TerminalOutput content={`[root@localhost ~]# setsebool -P httpd_anon_write on
[root@localhost ~]# getsebool -a | grep httpd
httpd_anon_write --> on
httpd_builtin_scripting --> on
httpd_can_check_spam --> off
httpd_can_connect_ftp --> off
httpd_can_connect_ldap --> off
httpd_can_connect_mythtv --> off
[root@localhost ~]#
`} />
            <Text text="Example: setsebool -P <boolean> <value> to set a policy permanently." />
{/* --------------------------------- */}
            <Supersubheading text="Context-Based Policies" />
            <Text text="Context-based policies define the security contexts for files, directories, and processes." />
            <Text text={`To view context type of a file:`} />
            <TerminalOutput content={`[root@localhost ~]# [root@localhost ~]# ls -lZ file-1
-rw-r--r--. 1 root root unconfined_u:object_r:admin_home_t:s0 0 Dec 19 20:26 file-1
[root@localhost ~]#
`} />
<Text text={`There are 4 fields in context type: User, Role, Type and Sensitivity level.`}/>
            <TerminalOutput content={`[root@localhost ~]# [root@localhost ~]# ls -ldZ dir
drwxr-xr-x. 2 root root unconfined_u:object_r:admin_home_t:s0 18 Dec 19 20:31 dir
[root@localhost ~]#
`} />
<Text text={`To view context type of a service:`} />
            <TerminalOutput content={`[root@localhost ~]# ps -ZC sshd
LABEL                               PID TTY          TIME CMD
system_u:system_r:sshd_t:s0-s0:c0.c1023 859 ?    00:00:00 sshd
system_u:system_r:sshd_t:s0-s0:c0.c1023 4271 ?   00:00:00 sshd
unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023 4287 ? 00:00:00 sshd
[root@localhost ~]#
`} />
<Text text={`To change context type of a fiel or directory:`} />
            <TerminalOutput content={`[root@localhost ~]# [root@localhost ~]# ls -ldZ /public
drwxr-xr-x. 2 root root unconfined_u:object_r:samba_share_t:s0 6 Dec 25 12:53 /public
[root@localhost ~]#`} />
<Text text={`To restore default context type:`} />
            <TerminalOutput content={`[root@localhost ~]# [root@localhost ~]# ls -ldZ /public/
drwxr-xr-x. 2 root root unconfined_u:object_r:default_t:s0 6 Dec 25 12:53 /public/
[root@localhost ~]#
`} />

            

            <Subheading text="Important Commands" />
            <Supersubheading text={`To view SELinux logs in browser:`}/>
            <TerminalOutput content={`[root@localhost ~]# sealert -b`} />
            <Supersubheading text={`To view SELinux logs:`}/>
            <TerminalOutput content={`[root@localhost ~]# tail /var/log/audit/audit.log
type=SERVICE_STOP msg=audit(1735106386.599:91): pid=1 uid=0 auid=4294967295 ses=4294967295 subj=system_u:system_r:init_t:s0 msg='unit=systemd-hostnamed comm="systemd" exe="/usr/lib/systemd/systemd" hostname=? addr=? terminal=? res=success'UID="root" AUID="unset"
`} />
            <Supersubheading text={`To check current SELinux mode:`}/>
            <TerminalOutput content={`[root@localhost ~]# getenforce
Enforcing
[root@localhost ~]#
`} />
            <Supersubheading text={`To check current and permanent SELinux mode:`}/>
            <TerminalOutput content={`[root@localhost ~]# sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Memory protection checking:     actual (secure)
Max kernel policy version:      33
[root@localhost ~]#
`} />
            <Supersubheading text={`Configuration file:`}/>
            <TerminalOutput content={`[root@localhost ~]# cat /etc/selinux/config`} />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/sysconfig/selinux`} />

            <Line/>
            <Text text="SELinux is a powerful security feature of the Linux kernel that significantly enhances system protection by enforcing mandatory access control. It ensures that processes, users, and applications interact only according to predefined security policies, minimizing the risk of misconfigurations and exploits." />
            <Text text="By carefully managing SELinux modes, policies, and contexts, administrators can secure their Linux systems from a wide range of security threats." />
        </div>
    );
};

export default SELinuxCommand;