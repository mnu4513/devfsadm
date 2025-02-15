import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const ExplorerLogs = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`Explorer Logs in Solaris`} />

      <Supersubheading text={`What is Explorer in Solaris?`} />
      <Text text={`The explorer command in Solaris is used to collect system configuration data, performance information, and logs for diagnostic purposes. It is commonly used to capture detailed system information, which can be shared with Oracle support for troubleshooting and system diagnostics.`} />

      <Supersubheading text={`Running the Explorer Command`} />
      <Text text={`To start collecting the logs and configuration data, you can run the explorer command in Solaris. There are two common ways to use this command:`} />

      <Text text={`1. Running explorer normally:`} />
      <TerminalOutput content={`[root@solaris:~]# explorer`} />
      <Text text={`Running the explorer command without the -k option will gather the system's configuration, logs, and other diagnostic information and store them in an output directory, typically /var/explorer/output. This can be used for further analysis or shared with Oracle support for troubleshooting.`} />

      <Text text={`2. Running explorer with the -k option:`} />
      <TerminalOutput content={`[root@solaris:~]# explorer -k`} />
      <Text text={`The -k option runs the explorer command in "keep" mode. It allows the command to gather all the necessary information while retaining the output files in the /var/explorer/output directory. This can be helpful for capturing system logs and configurations over time or if the data needs to be stored for later troubleshooting.`} />

      <Supersubheading text={`Where is the Output Stored?`} />
      <Text text={`By default, the output from the explorer command is stored in the /var/explorer/output directory. The directory contains various files and logs, including:`} />
      <ul className="list-disc ml-6">
        <li><strong>System Configuration:</strong> Files related to system hardware, software configurations, kernel settings, and more.</li>
        <li><strong>Log Files:</strong> System and application log files that may contain error messages, system events, and other useful troubleshooting data.</li>
        <li><strong>Performance Metrics:</strong> Information about system performance, including CPU usage, memory usage, disk IO, and other system statistics.</li>
      </ul>

      <Supersubheading text={`Examining the Output`} />
      <Text text={`After running the explorer command, the output will be saved in /var/explorer/output. You can examine the files in this directory for diagnostic purposes.`} />
      <Text text={`To view the output, navigate to the directory:`} />
      <TerminalOutput content={`cd /var/explorer/output`} />
      <Text text={`In this directory, you will find various logs and configuration files. For example, you can view the system logs using cat, more, or less commands:`} />
      <TerminalOutput content={`cat /var/explorer/output/messages`} />
      <Text text={`You can also look at other files for more specific information, such as performance logs, kernel logs, or configuration files.`} />

      <Supersubheading text={`Example of Output Files`} />
      <Text text={`Here are a few examples of the types of files you can expect to find in the /var/explorer/output directory:`} />
      <ul className="list-disc ml-6">
        <li><strong>messages:</strong> This file contains system messages that are helpful for diagnosing issues related to hardware, software, or system events.</li>
        <li><strong>explorer.log:</strong> This log file provides a detailed overview of the explorer command's execution, including any issues encountered while gathering information.</li>
        <li><strong>cpuinfo:</strong> A file containing information about the system’s CPUs, including architecture, cores, and other details about processor usage and settings.</li>
        <li><strong>memory_info:</strong> A file containing memory usage statistics, which can help identify issues with memory allocation or utilization.</li>
        <li><strong>diskinfo:</strong> A file containing details about disk usage, performance, and configuration settings, which is useful for identifying disk-related issues.</li>
      </ul>

      <Supersubheading text={`Using Explorer Logs for Troubleshooting`} />
      <Text text={`Explorer logs are particularly useful when troubleshooting system issues, especially when the problem is not immediately obvious. Here’s how you can use these logs effectively:`} />
      <ul className="list-disc ml-6">
        <li><strong>System Errors:</strong> Look for any entries in the log files that may indicate hardware failures, kernel panics, or other system errors. These can often point to the root cause of the issue.</li>
        <li><strong>Performance Bottlenecks:</strong> Performance logs provide valuable insights into CPU, memory, and disk usage. Look for spikes in usage or unusual patterns that may indicate a bottleneck.</li>
        <li><strong>Configuration Issues:</strong> Check the system configuration files to see if there are any misconfigurations or settings that could be contributing to the problem. This may include network configurations, storage settings, and more.</li>
      </ul>

      <Supersubheading text={`Sharing the Logs with Oracle Support`} />
      <Text text={`If you're unable to resolve the issue on your own, the logs collected by explorer can be shared with Oracle support. The logs provide them with detailed information about your system, which can help speed up the diagnosis and resolution process.`} />

      <Text text={`To share the logs, simply compress the contents of the /var/explorer/output directory and send them to Oracle support. For example:`} />
      <TerminalOutput content={`tar -czf explorer_logs.tar.gz /var/explorer/output`} />
      <Text text={`This will create a compressed archive of the logs that you can easily share.`} />

      <Supersubheading text={`Cleaning Up Explorer Logs`} />
      <Text text={`After troubleshooting is complete or the logs are no longer needed, you may want to clean up the explorer logs to free up space on the system. You can delete the output directory using the following command:`} />
      <TerminalOutput content={`rm -rf /var/explorer/output`} />
      <Text text={`This command will remove the entire output directory, so be sure that you no longer need the logs before running it.`} />

    </div>
  );
};

export default ExplorerLogs;
