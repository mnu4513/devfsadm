import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput } from "../utils/Comps";

const SuperUser = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Super User in Solaris`} />

      <Text text={`In Solaris, the superuser, also known as the root user, has the highest level of administrative privileges. The superuser has unrestricted access to all files and commands on the system, making it a critical account for system administration tasks.`} />

      <Text text={`Here are key points about the superuser in Solaris:`} />

      <Supersubheading text={`1. Username:`} />
      <Text text={`The superuser's username is typically "root".`} />

      <Supersubheading text={`2. Access:`} />
      <Text text={`The root user has full access to the entire file system and can execute any command with elevated privileges.`} />

      <Supersubheading text={`3. Privileges:`} />
      <Text text={`The root user can modify system files, install software, configure system settings, and perform other administrative tasks that regular users cannot.`} />

      <Supersubheading text={`4. Security:`} />
      <Text text={`Because of the extensive privileges, it's crucial to use the root account judiciously to avoid accidental system damage. The root account should only be used when necessary.`} />

      <Supersubheading text={`5. Logging In:`} />
      <Text text={`You can log in as the root user by using the \`su\` (substitute user) command or by logging in directly if you have the root password.`} />

      <Supersubheading text={`6. Command Prefixing:`} />
      <Text text={`When executing commands as the root user, it's common to use the \`sudo\` (superuser do) command to prefix commands with elevated privileges. This grants temporary root access to execute specific commands without fully logging in as root.`} />

      <Supersubheading text={`7. Security Concerns:`} />
      <Text text={`It's recommended to use the root account sparingly and, when possible, perform administrative tasks using a regular user account with \`sudo\` privileges. This adds an additional layer of security by reducing the risk of accidental or malicious changes.`} />

      

      <Subheading text={`1. Make entry to sudoers file:`} />
      <Text text={`To grant sudo access to a user, you need to modify the sudoers file. This file defines which users can execute commands as the superuser.`} />

      <Supersubheading text={`Command to open the sudoers file:`} />
      <TerminalOutput content={`[root@localhost ~]# vi /etc/sudoers`} />
      
      <Text text={`In this file, you will search for the line:`} />
      <TerminalOutput content={`
# Host alias specification
# User alias specification
# Cmnd alias specification
# User privilege specification
root    ALL=(ALL:ALL) ALL
john    ALL=(ALL:ALL) ALL
# Members of the admin group may gain root privileges
%admin ALL=(ALL) ALL
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
# See sudoers(5) for more information on "@include" directives:
@includedir /etc/sudoers.d`} />

      <Text text={`After this line, you will add a new entry for another user like:`} />
      <TerminalOutput content={`john ALL=(ALL) ALL`} />
      
      <Text text={`This allows the specified user to run any command as the root user.`} />

      

      <Subheading text={`2. To Switch the User:`} />
      <Text text={`The \`su\` (substitute user) command allows you to switch to another user account, including the root user.`} />

      <Supersubheading text={`Command to switch to another user:`} />
      <TerminalOutput content={`[root@localhost ~]# su - john
[john@localhost ~]$`} />
      
      <Text text={`This command allows you to switch to the specified user account. If you switch to the root user, you will be logged in with full administrative privileges.`} />

      

      <Subheading text={`3. To Provide Sudo Privileges:`} />
      <Text text={`To execute commands as the root user, you can prefix the command with \`sudo\`, which grants temporary root privileges.`} />

      <Supersubheading text={`Command to execute as root:`} />
      <TerminalOutput content={`[root@localhost ~]# su - john
[john@localhost ~]$ sudo su -
[sudo] password for john:
[root@localhost ~]#`} />
      
      <Text text={`This command allows you to execute commands with root privileges without fully switching to the root account. After executing \`sudo su -\`, you will be able to execute administrative commands with elevated rights.`} />

    </div>
  );
};

export default SuperUser;
