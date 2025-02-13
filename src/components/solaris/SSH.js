import React from 'react';
import { Heading, Subheading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const SSH = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`SSH (Secure Shell) in Solaris`} />

      {/* Introduction */}
      <Text text={`SSH (Secure Shell) is a network protocol that provides a secure method for remote login, remote command execution, and secure file transfers over a potentially insecure network. It is widely used for connecting to remote servers and transferring files securely. In Solaris, SSH is typically used to communicate between servers or between a server and a client to provide remote access, data transfer, or sharing mount points between systems.`} />

      {/* Checking SSH service status */}
      <Text text={`To use SSH for remote access, you must first ensure that the SSH service is running. You can check the status of the SSH service using the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# svcs -a | grep -i ssh`} />
      <Text text={`The command "svcs -a | grep -i ssh" lists the status of the SSH service. It should show 'online' for you to use the service for remote login or file transfers. If the service is not running, you need to enable or start it using the "svcadm enable ssh" command.`} />

      {/* Copying a file or directory using SCP */}
      <Text text={`To copy a file or directory from one server to another using the SSH protocol, you can use the "scp" (Secure Copy Protocol) command. This command works by securely copying files over an encrypted SSH connection.`} />

      <Supersubheading text={`1. To copy a file or directory from one server to another`} />
      <TerminalOutput content={`[root@localhost:~]# scp -r <file/dir_location> username@destination_IP:/location`} />
      <Text text={`The command "scp -r <file/dir_location> username@destination_IP:/location" copies the specified file or directory (<file/dir_location>) from your local machine to a remote server at the specified destination IP (destination_IP). The "-r" flag stands for 'recursive', meaning it copies the entire directory and its contents. You will be prompted to enter the password for the remote server's user (username).`} />

      {/* Copying without specifying a username when logged in as root */}
      <Supersubheading text={`2. To copy without specifying a username (when logged in as root)`} />
      <TerminalOutput content={`[root@localhost:~]# scp -r <file/dir_location> destination_IP:/location`} />
      <Text text={`If you're logged in as the root user on your local machine and you need to copy files or directories to a remote server also running as root, you can omit the username. In this case, the "scp" command will use the root login for both the local and remote systems.`} />

      {/* Starting SSH service if it's not running */}
      <Text text={`If the SSH service is not running, you can start it with the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# svcadm enable ssh`} />
      <Text text={`The "svcadm enable ssh" command enables the SSH service on Solaris. After running this command, the SSH service will start and be available for remote connections. You can verify that the service is running by using "svcs -a | grep -i ssh" again.`} />

      <Supersubheading text={`To take remove server access using SSH`}/>
      <TerminalOutput content={`[root@localhost:~]# ssh 192.168.131.141`}/>
      <TerminalOutput content={`[root@localhost:~]# ssh john@192.168.131.141`}/>

      {/* Securing the SSH service */}
      <Text text={`SSH is a secure method for remote communication, but you should also take additional steps to secure the service itself. Here are a few best practices:`} />
      <ul className="ml-4 list-disc">
        <li>Change the default port for SSH (default is port 22) to avoid brute-force attacks.</li>
        <li>Use key-based authentication instead of password authentication for better security.</li>
        <li>Disable root login through SSH to prevent unauthorized access to the root account.</li>
        <li>Set up a firewall to limit access to the SSH service only from trusted IP addresses.</li>
      </ul>

    </div>
  );
}

export default SSH;
