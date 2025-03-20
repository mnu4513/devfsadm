import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const ShellScriptingIntro = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Introduction to Linux Shell and Shell Scripting`} />
      
      <Text text={`A shell is an interface between the user and the operating system that allows users to execute commands and automate tasks using scripts. Shell scripting enables automation, efficient system administration, and complex task execution in Unix-like operating systems.`} />
      
      <Line />
      <Subheading text={`Linux Shell`} />
      <Text text={`A shell is a command-line interpreter that processes commands entered by the user. It provides an interface to interact with the Linux kernel.`} />
      
      <Supersubheading text={`Common Shells in Linux:`} />
      <TerminalOutput content={`1. Bourne Shell (sh)
2. Bourne Again Shell (bash)
3. C Shell (csh)
4. Korn Shell (ksh)
5. Z Shell (zsh)`} />
      
      
      <Supersubheading text={`How to Check the Current Shell?`} />
      <Text text={`To find out which shell you are using, run the following command:`} />
      <TerminalOutput content={`[user@localhost ~]$ echo $SHELL
/bin/bash`} />
<Text text={`We can use an alternate command find out the shell we are using:`} />
<TerminalOutput content={`[user@localhost ~]$ echo $0
-bash`} />

<Supersubheading text={`How to Check available Shells in our machine?`} />
      <Text text={`To find out all the available shells in out machine, run the following command:`} />
      <TerminalOutput content={`[user@localhost ~]$ cat /etc/shells
/bin/sh
/bin/bash
/usr/bin/bash
/bin/rbash
/usr/bin/rbash
/usr/bin/sh
/bin/dash
/usr/bin/dash
/usr/bin/tmux`} />
      
      <Line />
      <Subheading text={`Shell Scripting`} />
      <Text text={`Shell scripting is the process of writing a series of commands in a script file that the shell can execute. It helps automate repetitive tasks, manage system operations, and execute batch jobs.`} />
      
     
      <Supersubheading text={`Why Use Shell Scripting?`} />
      <Text text={`Shell scripting is widely used because it:`} />
      <Text text={`• Automates tasks`} />
      <Text text={`• Saves time and effort`} />
      <Text text={`• Simplifies system administration`} />
      <Text text={`• Supports scripting logic (loops, conditions, functions)`} />
      <Text text={`• Helps in system monitoring and troubleshooting`} />
     
      
      
      <Supersubheading text={`Example: A Simple Shell Script`} />
      <Text text={`Create a script file.`} />
      <TerminalOutput content={`[user@localhost ~]$ vi hello.sh`} />
      <Text text={`Write the script code to print a welcome message.`} />
      <TerminalOutput content={`#!/bin/bash
echo "Hello, Welcome to Shell Scripting!"`} />
      
      <Text text={`Save this file as 'hello.sh' and give it execute permission using:`} />
      <TerminalOutput content={`[user@localhost ~]$ chmod +x hello.sh`} />
      
      <Text text={`Run the script:`} />
      <TerminalOutput content={`[user@localhost ~]$ ./hello.sh
Hello, Welcome to Shell Scripting!`} />
      
      <Line />
      <Text text={`Now that you understand the basics, let's move on to creating your first shell script in the next section.`} />
    </div>
  );
};

export default ShellScriptingIntro;
