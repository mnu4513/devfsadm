import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const SystemMonitoring = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`System Monitoring in Solaris`} />
      <Text text={`System monitoring is crucial for system administrators to ensure that a computer system is running efficiently and without issues. It involves tracking and analyzing various system resources, such as CPU, memory, disk usage, and processes. By constantly monitoring these resources, administrators can:`}/>

      <ul className="ml-4 list-disc">
        <li> Identify performance bottlenecks: Detect issues such as high CPU or memory usage that may slow down the system.</li>
        <li> Prevent system failures: Early detection of issues like hardware failures or disk errors allows administrators to address them before they cause a crash.</li>
        <li> Optimize resource usage: By identifying processes that are using excessive resources, administrators can optimize the system’s resource allocation.</li>
        <li>Ensure system stability: Monitoring ensures that critical resources (CPU, memory, disk space, etc.) are available for essential services and processes, avoiding unexpected disruptions.</li>
        <li> Track historical performance: By continuously monitoring and logging system metrics, administrators can track trends over time, helping in capacity planning and troubleshooting.</li>
      </ul>

      {/* Check memory, CPU & swap utilization */}
      <Supersubheading text={`1. Check memory, CPU & swap utilization`} />
      <TerminalOutput content={`[root@localhost:~]# top`} />
      <Text text={`The "top" command provides a real-time overview of system processes and resource utilization. It displays CPU usage, memory usage, swap usage, and other important system metrics. This command is particularly useful for monitoring system health and identifying processes that are consuming excessive resources.`} />

      {/* Check memory & CPU utilization with user process */}
      <Supersubheading text={`2. Check memory & CPU utilization with user process`} />
      <TerminalOutput content={`[root@localhost:~]# prstat`} />
      <Text text={`The "prstat" command is similar to "top" but offers more detailed information about the system's resource usage, broken down by each user process. It provides a snapshot of CPU usage, memory consumption, and other statistics specific to each process. The output is sorted by resource usage to easily identify resource-hungry processes.`} />

      {/* Check memory tuning between kernel & application */}
      <Supersubheading text={`3. Check memory tuning between kernel & application`} />
      <TerminalOutput content={`[root@localhost:~]# echo ::memstat | mdb -k`} />
      <Text text={`The "echo ::memstat | mdb -k" command is used to gather information about the system's memory usage at a low level. It displays memory statistics from both the kernel and application perspectives, which helps diagnose issues like memory leaks or excessive memory usage by certain processes.`} />

      {/* Check disk error (Soft, Hard or transport error) */}
      <Supersubheading text={`4. Check disk error (Soft, Hard or transport error)`} />
      <TerminalOutput content={`[root@localhost:~]# iostat -en`} />
      <Text text={`The "iostat -en" command reports on disk input/output statistics, with a focus on identifying disk errors. It shows information about soft, hard, and transport errors, which are critical for diagnosing potential hardware issues or I/O bottlenecks.`} />

      {/* Check disk error in details */}
      <Supersubheading text={`5. Check disk error in details`} />
      <TerminalOutput content={`[root@localhost:~]# iostat -En`} />
      <Text text={`The "iostat -En" command provides more detailed information about disk errors, including error counts and specifics about which disks are affected. This is useful for identifying failing disks or drives with bad sectors, which might require replacement.`} />

      {/* Check disk I/O statistics */}
      <Supersubheading text={`6. Check disk I/O statistics`} />
      <TerminalOutput content={`[root@localhost:~]# iostat -xnte`} />
      <Text text={`The "iostat -xnte" command provides extended disk I/O statistics, including throughput, response times, and utilization per disk. This information can be used to evaluate the performance of disk subsystems, helping to identify performance issues or bottlenecks.`} />

      {/* Check uptime */}
      <Supersubheading text={`7. Check system uptime`} />
      <TerminalOutput content={`[root@localhost:~]# uptime`} />
      <Text text={`The "uptime" command shows how long the system has been running, along with the current time, number of users logged in, and the system load averages for the past 1, 5, and 15 minutes. This helps assess system stability and can give an idea of when the system was last rebooted.`} />

      {/* Get the memory & CPU utilization by user */}
      <Supersubheading text={`8. Get the memory & CPU utilization user-wise`} />
      <TerminalOutput content={`[root@localhost:~]# prstat -t`} />
      <Text text={`The "prstat -t" command displays memory and CPU utilization broken down by each user process, including the number of threads and CPU usage. This helps in identifying which users or processes are consuming the most resources and allows for better resource management.`} />

      {/* Get mountpoint or directory total utilization size */}
      <Supersubheading text={`9. Get mountpoint or directory total utilization size`} />
      <TerminalOutput content={`[root@localhost:~]# du -sh`} />
      <Text text={`The "du -sh" command provides the total disk usage of the current directory or mount point. The "-s" flag gives the summary (total size) and the "-h" flag makes the output human-readable by converting the size to a more understandable format like KB, MB, GB, etc.`} />

      {/* Get listed mountpoint, directory or files used size */}
      <Supersubheading text={`10. Get listed mountpoint, directory or files used size`} />
      <TerminalOutput content={`[root@localhost:~]# du -sh *`} />
      <Text text={`The "du -sh *" command lists the disk usage of each subdirectory or file in the current directory. The "*" wildcard specifies that the command should include all files and directories within the current directory. This is useful for identifying large files or directories that might need attention.`} />

    </div>
  );
};

export default SystemMonitoring;
