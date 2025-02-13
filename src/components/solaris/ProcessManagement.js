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
      <TerminalOutput content="ps -ef" />
      <Text text="The `ps -ef` command lists all the processes running on the system, along with detailed information such as Process ID (PID), Parent Process ID (PPID), CPU usage, and the command used to start the process. It is one of the most commonly used commands to get a snapshot of all active processes." />

      {/* Command 2: To search for a process */}
      <Supersubheading text="2. To search for a process" />
      <TerminalOutput content="ps -ef | grep -i <process_name>" />
      <Text text="The `ps -ef | grep -i <process_name>` command allows you to filter the list of processes to find a specific one by its name. The `-i` flag makes the search case-insensitive." />
      
      <TerminalOutput content="ps -ef | grep -i <PID>" />
      <Text text="You can also use the process ID (PID) to search for a specific process. This can be useful if you know the PID but need more details about the process." />

      <TerminalOutput content="ps -ef | grep -i <user_name>" />
      <Text text="Additionally, you can filter processes by the user running them. This command helps in identifying all processes associated with a particular user." />

      {/* Command 3: To kill a process */}
      <Supersubheading text="3. To kill a process" />
      <TerminalOutput content="kill <PID>" />
      <Text text="The `kill <PID>` command is used to terminate a process by sending a signal to the specified process ID (PID). By default, this sends a `TERM` signal, which asks the process to terminate gracefully." />

      {/* Command 4: To kill a process forcefully */}
      <Supersubheading text="4. To kill a process forcefully" />
      <TerminalOutput content="kill -9 <PID>" />
      <Text text="The `kill -9 <PID>` command forcefully kills a process by sending the `KILL` signal. This signal cannot be ignored by the process, making it useful for terminating unresponsive processes." />

      {/* Command 5: To get children or parent process of any process */}
      <Supersubheading text="5. To get children or parent process of any process" />
      <TerminalOutput content="ptree <PID>" />
      <Text text="The `ptree <PID>` command displays the process tree of a given PID, showing its parent and child processes in a hierarchical structure. This is useful for understanding the relationship between processes and identifying which processes are spawned by others." />

    </div>
  );
};

export default ProcessManagement;
