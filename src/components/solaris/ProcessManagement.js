import React from 'react';
import { Heading, Supersubheading, Text, TerminalOutput } from "../utils/Comps";

const ProcessManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text="Process Management in Solaris" />
      
      {/* Introduction */}
      <Text text="In Solaris, process management involves activities related to the creation, execution, and termination of processes. Solaris, being a Unix-based operating system, follows Unix process management principles. This includes commands for viewing, searching, and controlling processes." />

      {/* Command 1: To list all processes */}
      <Supersubheading text="1. To list all processes" />
      <TerminalOutput content={`[root@localhost:~]# ps -ef
     UID   PID  PPID   C    STIME TTY         TIME CMD
    root     0     0   0 20:16:58 ?           0:04 sched
    root     5     0   0 20:16:57 ?           0:03 zpool-rpool
    root     6     0   0 20:16:58 ?           0:00 kmem_task
    root     1     0   0 20:16:58 ?           0:00 /usr/sbin/init
    root     2     0   0 20:16:58 ?           0:00 pageout
    root     3     0   0 20:16:58 ?           0:01 fsflush
    root     7     0   0 20:16:58 ?           0:00 intrd
    root     8     0   0 20:16:58 ?           0:00 vmtasks
    root     9     0   0 20:16:58 ?           0:00 postwaittq
  netadm    67     1   0 20:17:06 ?           0:00 /lib/inet/ipmgmtd
    root    13     1   0 20:17:00 ?           0:02 /lib/svc/bin/svc.startd
    root    15     1   0 20:17:00 ?           0:08 /lib/svc/bin/svc.configd
  daemon    82     1   0 20:17:07 ?           0:00 /lib/crypto/kcfd
  netcfg    44     1   0 20:17:04 ?           0:00 /lib/inet/netcfgd
    root   321     1   0 20:17:17 ?           0:00 /sbin/dhcpagent
   dladm    48     1   0 20:17:04 ?           0:00 /usr/sbin/dlmgmtd
[root@localhost:~]#
`} />
      <Text text="The `ps -ef` command lists all the processes running on the system, along with detailed information such as Process ID (PID), Parent Process ID (PPID), CPU usage, and the command used to start the process. It is one of the most commonly used commands to get a snapshot of all active processes." />

      {/* Command 2: To search for a process */}
      <Supersubheading text="2. To search for a process" />
      <TerminalOutput content={`[root@localhost:~]# ps -ef | grep -i sendmail
    root  1011     1   0 20:18:32 ?           0:00 /usr/lib/inet/sendmail -bl -q15m
   smmsp  1009     1   0 20:18:27 ?           0:00 /usr/lib/inet/sendmail -Ac -q15m
[root@localhost:~]#
`} />
      <Text text="The `ps -ef | grep -i <process_name>` command allows you to filter the list of processes to find a specific one by its name. The `-i` flag makes the search case-insensitive." />
      
      <TerminalOutput content={`[root@localhost:~]# ps -ef | grep 188
    root   188     1   0 20:17:15 ?           0:00 /usr/lib/rad/rad -sp
[root@localhost:~]#
`} />
      <Text text="You can also use the process ID (PID) to search for a specific process. This can be useful if you know the PID but need more details about the process." />

      <TerminalOutput content={`[root@localhost:~]# ps -ef | grep -i netadm
  netadm    67     1   0 20:17:06 ?           0:00 /lib/inet/ipmgmtd
  netadm    45     1   0 20:17:04 ?           0:00 /usr/sbin/ibmgmtd
  netadm   318     1   0 20:17:16 ?           0:00 /lib/inet/nwamd
[root@localhost:~]#`} />
      <Text text="Additionally, you can filter processes by the user running them. This command helps in identifying all processes associated with a particular user." />

      {/* Command 3: To kill a process */}
      <Supersubheading text="3. To kill a process" />
      <TerminalOutput content={`[root@localhost:~]# kill 1011
[root@localhost:~]# ps -ef | grep 1011
[root@localhost:~]#
`} />
      <Text text="The `kill <PID>` command is used to terminate a process by sending a signal to the specified process ID (PID). By default, this sends a `TERM` signal, which asks the process to terminate gracefully." />

      {/* Command 4: To kill a process forcefully */}
      <Supersubheading text="4. To kill a process forcefully" />
      <TerminalOutput content={`[root@localhost:~]# kill -9 1009
[root@localhost:~]# ps -ef | grep 1009
[root@localhost:~]#
`} />
      <Text text="The `kill -9 <PID>` command forcefully kills a process by sending the `KILL` signal. This signal cannot be ignored by the process, making it useful for terminating unresponsive processes." />

      {/* Command 5: To get children or parent process of any process */}
      <Supersubheading text="5. To get children or parent process of any process" />
      <TerminalOutput content={`[root@localhost:~]# ptree 568
568   /usr/lib/hal/hald --daemon=yes
  571   hald-runner
    595   /usr/lib/hal/hald-addon-cpufreq
    598   /usr/lib/hal/hald-addon-acpi
    612   /usr/lib/hal/hald-addon-storage
[root@localhost:~]#`} />
      <Text text="The `ptree <PID>` command displays the process tree of a given PID, showing its parent and child processes in a hierarchical structure. This is useful for understanding the relationship between processes and identifying which processes are spawned by others." />

    </div>
  );
};

export default ProcessManagement;