import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const SystemMonitoring = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`System Monitoring in Solaris`} />
      <Text text={`System monitoring is crucial for system administrators to ensure that a computer system is running efficiently and without issues. It involves tracking and analyzing various system resources, such as CPU, memory, disk usage, and processes.`}/>
<Text text={` By constantly monitoring these resources, administrators can:`}/>
      <ul className="ml-4 list-disc">
        <li> Identify performance bottlenecks: Detect issues such as high CPU or memory usage that may slow down the system.</li>
        <li> Prevent system failures: Early detection of issues like hardware failures or disk errors allows administrators to address them before they cause a crash.</li>
        <li> Optimize resource usage: By identifying processes that are using excessive resources, administrators can optimize the system’s resource allocation.</li>
        <li>Ensure system stability: Monitoring ensures that critical resources (CPU, memory, disk space, etc.) are available for essential services and processes, avoiding unexpected disruptions.</li>
        <li> Track historical performance: By continuously monitoring and logging system metrics, administrators can track trends over time, helping in capacity planning and troubleshooting.</li>
      </ul>

      {/* Check memory, CPU & swap utilization */}
      <Supersubheading text={`1. Check memory, CPU & swap utilization`} />
      <TerminalOutput content={`[root@localhost:~]# top
last pid:  1025;  load avg:  0.00,  0.00,  0.00;  up 0+01:58:31        13:58:19
59 processes: 58 sleeping, 1 on cpu
CPU states:  100% idle,  0.0% user,  0.0% kernel,  0.0% iowait,  0.0% swap
Kernel: 130 ctxsw, 6 trap, 321 intr, 356 syscall, 6 flt
Memory: 2047M phys mem, 1156M free mem, 1024M total swap, 1024M free swap

   PID USERNAME NLWP PRI NICE  SIZE   RES STATE    TIME    CPU COMMAND
  1024 root        1  52    0 4036K 2564K cpu      0:00  0.30% top
   505 root       31  59    0   16M 4060K sleep    0:00  0.01% nscd
   318 netadm      8  59    0   13M 4944K sleep    0:00  0.01% nwamd
    15 root       24  59    0   21M   20M sleep    0:07  0.01% svc.configd
   230 root        8  59    0   14M 5196K sleep    0:00  0.00% devfsadm
   574 root        4  59    0   10M 1556K sleep    0:00  0.00% automountd
    13 root       13  59    0   25M   18M sleep    0:02  0.00% svc.startd
   654 root       33  59    0   99M   20M sleep    0:01  0.00% fmd
    80 daemon      3  60  -20   10M 1780K sleep    0:00  0.00% kcfd
   162 root        5  60  -20 2760K 1368K sleep    0:00  0.00% zonestatd
   590 root        4  59    0 8480K 6508K sleep    0:00  0.00% hald
  1005 root        1  59    0   19M 6016K sleep    0:00  0.00% sshd
  1004 root        1  59    0   18M 5116K sleep    0:00  0.00% sshd
   561 root        1  59    0   14M 4004K sleep    0:00  0.00% cupsd
   197 root        4  59    0   18M 3824K sleep    0:00  0.00% rad
   179 root        4  59    0   18M 3784K sleep    0:00  0.00% rad
   568 root        3  59    0   12M 3620K sleep    0:00  0.00% inetd
   358 root        4  59    0   11M 3316K sleep    0:00  0.00% picld
    69 netadm      6  59    0 5000K 3204K sleep    0:00  0.00% ipmgmtd
   603 root        1  59    0   14M 3176K sleep    0:00  0.00% sshd
  1006 root        1  59    0   11M 3112K sleep    0:00  0.00% bash
    51 root        5  59    0 4232K 2700K sleep    0:00  0.00% dlmgmtd
    45 netadm      4  59    0   11M 2616K sleep    0:00  0.00% ibmgmtd
    61 root        4  59    0 4040K 2580K sleep    0:00  0.00% svc.periodicd
    41 netcfg      4  59    0 3748K 2516K sleep    0:00  0.00% netcfgd
   593 root        1  59    0 4360K 2432K sleep    0:00  0.00% in.ndpd
   610 root        1  59    0 4236K 2384K sleep    0:00  0.00% hald-addon-acpi
   873 noaccess    2  59    0   10M 2328K sleep    0:00  0.00% asr-notify
   845 root        1  59    0 4692K 2320K sleep    0:00  0.00% rmvolmgr
   609 root        1  59    0 4324K 2284K sleep    0:00  0.00% hald-addon-cpuf`} />
      <Text text={`The "top" command provides a real-time overview of system processes and resource utilization. It displays CPU usage, memory usage, swap usage, and other important system metrics. This command is particularly useful for monitoring system health and identifying processes that are consuming excessive resources.`} />

      {/* Check memory & CPU utilization with user process */}
      <Supersubheading text={`2. Check memory & CPU utilization with user process`} />
      <TerminalOutput content={`[root@localhost:/]# prstat
   PID USERNAME  SIZE   RSS STATE   PRI NICE      TIME  CPU PROCESS/NLWP
  1067 root       11M 3720K cpu0     59    0   0:00:00 0.0% prstat/1
  1027 root       11M 2852K stop     49    0   0:00:00 0.0% prstat/1
   162 root     2760K 1368K sleep    60  -20   0:00:00 0.0% zonestatd/5
   318 netadm     13M 4944K sleep    59    0   0:00:00 0.0% nwamd/8
   159 daemon   2400K  868K sleep    59    0   0:00:00 0.0% utmpd/1
   564 daemon     13M 1748K sleep    59    0   0:00:00 0.0% nfsmapid/3
   554 daemon   3488K 1448K sleep    59    0   0:00:00 0.0% rpcbind/1
   503 root        0K    0K sleep    99  -20   0:00:00 0.0% zpool-pool2
   215 root     3400K 1456K sleep    59    0   0:00:00 0.0% vbiosd/3
   321 root     9556K 1456K sleep    59    0   0:00:00 0.0% dhcpagent/1
   197 root       18M 3824K sleep    59    0   0:00:00 0.0% rad/4
   654 root       99M   12M sleep    59    0   0:00:01 0.0% fmd/34
   603 root       14M 2916K sleep    59    0   0:00:00 0.0% sshd/1
     9 root        0K    0K sleep    99  -20   0:00:00 0.0% postwaittq/1
     8 root        0K    0K sleep    60    -   0:00:00 0.0% vmtasks/2
     7 root        0K    0K sleep    60    -   0:00:00 0.0% intrd/1
Total: 66 processes, 561 lwps, load averages: 0.00, 0.01, 0.00`} />
      <Text text={`The "prstat" command is similar to "top" but offers more detailed information about the system's resource usage, broken down by each user process. It provides a snapshot of CPU usage, memory consumption, and other statistics specific to each process. The output is sorted by resource usage to easily identify resource-hungry processes.`} />

      {/* Check memory tuning between kernel & application */}
      <Supersubheading text={`3. Check memory tuning between kernel & application`} />
      <TerminalOutput content={`[root@localhost:~]# echo ::memstat | mdb -k
Page Summary                 Pages             Bytes  %Tot
----------------- ----------------  ----------------  ----
Kernel                       99811            389.8M   19%
ZFS Metadata                  8807             34.4M    2%
ZFS File Data                72084            281.5M   14%
Anon                         35353            138.0M    7%
Exec and libs                 1675              6.5M    0%
Page cache                    6062             23.6M    1%
Free (cachelist)              8380             32.7M    2%
Free (freelist)             275598              1.0G   53%
Total                       524159              1.9G
[root@localhost:~]#`} />
      <Text text={`The "echo ::memstat | mdb -k" command is used to gather information about the system's memory usage at a low level. It displays memory statistics from both the kernel and application perspectives, which helps diagnose issues like memory leaks or excessive memory usage by certain processes.`} />

      {/* Check disk error (Soft, Hard or transport error) */}
      <Supersubheading text={`4. Check disk error (Soft, Hard or transport error)`} />
      <TerminalOutput content={`[root@localhost:~]# iostat -en
  ---- errors ---
  s/w h/w trn tot device
    0   0   0   0 c2t0d0
    0   0   0   0 c1t0d0
    0   0   0   0 c2t1d0
    0   0   0   0 c2t2d0
[root@localhost:~]#`} />
      <Text text={`The "iostat -en" command reports on disk input/output statistics, with a focus on identifying disk errors. It shows information about soft, hard, and transport errors, which are critical for diagnosing potential hardware issues or I/O bottlenecks.`} />

      {/* Check disk error in details */}
      <Supersubheading text={`5. Check disk error in details`} />
      <TerminalOutput content={`[root@localhost:~]# iostat -En
c2t0d0           Soft Errors: 0 Hard Errors: 0 Transport Errors: 0
Vendor: VMware,  Product: VMware Virtual S Revision: 1.0  Serial No:
Size: 17.18GB <17179869184 bytes>
Media Error: 0 Device Not Ready: 0 No Device: 0 Recoverable: 0
Illegal Request: 6 Predictive Failure Analysis: 0 Non-Aligned Writes: 0
c1t0d0           Soft Errors: 0 Hard Errors: 0 Transport Errors: 0
Vendor: NECVMWar Product: VMware IDE CDR10 Revision: 1.00 Serial No:
Size: 0.77GB <771753984 bytes>
Media Error: 0 Device Not Ready: 0 No Device: 0 Recoverable: 0
Illegal Request: 5 Predictive Failure Analysis: 0 Non-Aligned Writes: 0
c2t1d0           Soft Errors: 0 Hard Errors: 0 Transport Errors: 0
Vendor: VMware,  Product: VMware Virtual S Revision: 1.0  Serial No:
Size: 1.07GB <1073741824 bytes>
Media Error: 0 Device Not Ready: 0 No Device: 0 Recoverable: 0
Illegal Request: 6 Predictive Failure Analysis: 0 Non-Aligned Writes: 0
c2t2d0           Soft Errors: 0 Hard Errors: 0 Transport Errors: 0
Vendor: VMware,  Product: VMware Virtual S Revision: 1.0  Serial No:
Size: 1.07GB <1073741824 bytes>
Media Error: 0 Device Not Ready: 0 No Device: 0 Recoverable: 0
Illegal Request: 6 Predictive Failure Analysis: 0 Non-Aligned Writes: 0
[root@localhost:~]#`} />
      <Text text={`The "iostat -En" command provides more detailed information about disk errors, including error counts and specifics about which disks are affected. This is useful for identifying failing disks or drives with bad sectors, which might require replacement.`} />

      {/* Check disk I/O statistics */}
      <Supersubheading text={`6. Check disk I/O statistics`} />
      <TerminalOutput content={`[root@localhost:~]# iostat -xnte
   tty
 tin tout
   0    3
                            extended device statistics       ---- errors ---
    r/s    w/s   kr/s   kw/s wait actv wsvc_t asvc_t  %w  %b s/w h/w trn tot device
    0.9    0.6   36.9   13.6  0.0  0.0    1.3    4.9   0   0   0   0   0   0 c2t0d0
    0.1    0.0    0.3    0.0  0.0  0.0    0.1    0.9   0   0   0   0   0   0 c1t0d0
    0.0    0.0    0.2    0.0  0.0  0.0    0.2    1.4   0   0   0   0   0   0 c2t1d0
    0.0    0.0    0.2    0.0  0.0  0.0    0.3    1.3   0   0   0   0   0   0 c2t2d0
[root@localhost:~]#`} />
      <Text text={`The "iostat -xnte" command provides extended disk I/O statistics, including throughput, response times, and utilization per disk. This information can be used to evaluate the performance of disk subsystems, helping to identify performance issues or bottlenecks.`} />

      {/* Check uptime */}
      <Supersubheading text={`7. Check system uptime`} />
      <TerminalOutput content={`[root@localhost:~]# uptime
  2:00pm  up 2 hr(s),  1 user,  load average: 0.00, 0.00, 0.00
[root@localhost:~]#`} />
      <Text text={`The "uptime" command shows how long the system has been running, along with the current time, number of users logged in, and the system load averages for the past 1, 5, and 15 minutes. This helps assess system stability and can give an idea of when the system was last rebooted.`} />

      {/* Get the memory & CPU utilization by user */}
      <Supersubheading text={`8. Get the memory & CPU utilization user-wise`} />
      <TerminalOutput content={`[root@localhost:/]# prstat -t
 NPROC USERNAME  SWAP   RSS MEMORY      TIME  CPU
    55 root      165M  111M   5.4%   0:00:12 0.1%
     2 noaccess 1480K 3636K   0.2%   0:00:00 0.0%
     1 smmsp    1672K 4984K   0.2%   0:00:00 0.0%
     3 netadm   5736K   10M   0.5%   0:00:00 0.0%
     4 daemon   4756K 6400K   0.3%   0:00:00 0.0%
     1 netcfg   1232K 3000K   0.1%   0:00:00 0.0%
Total: 66 processes, 561 lwps, load averages: 0.00, 0.00, 0.00`} />
      <Text text={`The "prstat -t" command displays memory and CPU utilization broken down by each user process, including the number of threads and CPU usage. This helps in identifying which users or processes are consuming the most resources and allows for better resource management.`} />

      {/* Get mountpoint or directory total utilization size */}
      <Supersubheading text={`9. Get mountpoint or directory total utilization size`} />
      <TerminalOutput content={`[root@localhost:/]# du -sh
 4.9G   .
[root@localhost:/]#`} />
      <Text text={`The "du -sh" command provides the total disk usage of the current directory or mount point. The "-s" flag gives the summary (total size) and the "-h" flag makes the output human-readable by converting the size to a more understandable format like KB, MB, GB, etc.`} />

      {/* Get listed mountpoint, directory or files used size */}
      <Supersubheading text={`10. Get listed mountpoint, directory or files used size`} />
      <TerminalOutput content={`[root@localhost:/]# du -sh *
   0K   bin
 104M   boot
   2K   cdrom
   3K   child2
 241K   dev
 263K   devices
 102M   etc
  11K   export
   0K   home
  12K   tmp
 2.4G   usr
 226M   var
 386K   zvboot
[root@localhost:/]#`} />
      <Text text={`The "du -sh *" command lists the disk usage of each subdirectory or file in the current directory. The "*" wildcard specifies that the command should include all files and directories within the current directory. This is useful for identifying large files or directories that might need attention.`} />

    </div>
  );
};

export default SystemMonitoring;
