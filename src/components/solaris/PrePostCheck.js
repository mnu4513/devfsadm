import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const PrePostCheck = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Pre & Post Checks in Solaris`} />
      
      <Text text={`Pre and Post checks are essential in system administration to ensure that the system's health, configurations, and resource utilization are verified before and after making any changes or taking a reboot. `} />
      
      <Text text={`The following are some critical commands used for these checks in Solaris:`}/>
      <Line />
      <Subheading text={`Pre-Check Commands`} />
      <Text text={`These commands help capture the current system state before making any modifications.`} />

      <Supersubheading text={`Disk Usage Check`} />
      <Text text={`The 'df' command displays the disk space usage of mounted file systems.`} />
      <TerminalOutput content={`[root@localhost:~]# df -h`} />
      <Text text={`Adding 'wc -l' helps count the number of mounted filesystems.`} /> 
      <TerminalOutput content={`[root@localhost:~]# df -h | wc -l`} />

      <Supersubheading text={`Disk Partition and Format Check`} />
      <Text text={`The 'format' command lists available disks and their partitioning details.`} />
      <TerminalOutput content={`[root@localhost:~]# echo | format`} />
      <Text text={`Adding 'wc -l' counts the number of disks recognized by the system.`} />
      <TerminalOutput content={`[root@localhost:~]# echo | format | wc -l`} />

      <Supersubheading text={`ZFS Storage Check`} />
      <Text text={`The 'zpool list' command provides an overview of the available ZFS storage pools.`} />
      <TerminalOutput content={`[root@localhost:~]# zpool list`} />
      <Text text={`The 'zpool status' command gives a detailed report on the health of ZFS pools.`} />
      <TerminalOutput content={`[root@localhost:~]# zpool status`} />
      <Text text={`The '-xv' flag provides verbose output, including only the pools with issues.`} />
      <TerminalOutput content={`[root@localhost:~]# zpool status -xv`} />

      <Supersubheading text={`Service Health Check`} />
      <Text text={`The 'svcs -x' command displays services that are in a maintenance state or not running correctly.`} />
      <TerminalOutput content={`[root@localhost:~]# svcs -x`} />
      
      <Supersubheading text={`Fault Management Check`} />
      <Text text={`The 'fmadm faulty' command lists faulty hardware components or system issues detected by FMA (Fault Management Architecture).`} />
      <TerminalOutput content={`[root@localhost:~]# fmadm faulty`} />

      <Supersubheading text={`Network Configuration Check`} />
      <Text text={`The 'ipadm' command shows the current IP configuration on the system.`} />
      <TerminalOutput content={`[root@localhost:~]# ipadm`} />
      <Text text={`The 'ipmpstat -i' and 'ipmpstat -g' commands provide information about IP Multipathing (IPMP).`} />
      <TerminalOutput content={`[root@localhost:~]# ipmpstat -i`} />
      <TerminalOutput content={`[root@localhost:~]# ipmpstat -g`} />
      <Text text={`The 'netstat -nrv' command displays the system’s routing table in a numerical format.`} />
      <TerminalOutput content={`[root@localhost:~]# netstat -nrv`} />

      <Supersubheading text={`System Configuration Checks`} />
      <Text text={`Checking essential system files for network and user configurations.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/resolv.conf`} />
      <Text text={`Displays the DNS resolver configuration.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/passwd`} />
      <Text text={`Lists all system users.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/group`} />
      <Text text={`Shows group memberships.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/hosts`} />
      <Text text={`Displays static hostname-to-IP address mappings.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/system`} />
      <Text text={`Contains kernel tuning parameters and system configurations.`} />
      <TerminalOutput content={`[root@localhost:~]# cat /var/adm/messages`} />
      <Text text={`Logs system messages, errors, and warnings.`} />

      <Line />
      <Subheading text={`Post-Check Validation`} />
      <Text text={`After making changes to the system, repeat the above checks to confirm system health and verify that no new issues have arisen.`} />
    </div>
  );
};

export default PrePostCheck;
