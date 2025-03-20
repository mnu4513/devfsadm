import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const GettingStartedWithShell = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Basic of Shell Scripts`} />

      <Text text={`A shell script is a sequence of commands written in a file to be executed by the shell. It automates repetitive tasks and simplifies system administration. Shell scripting is widely used for managing servers, automating deployments, and performing routine operations.`} />
      
      <Line />
      
      <Subheading text={`Creating Your First Shell Script`} />
      
      <Text text={`Follow these steps to create and execute a basic shell script:`} />
      
      <Supersubheading text={`Step 1: Create a new script file`} />
      <TerminalOutput content={`[user@localhost ~]$ touch myscript.sh`} />

      <Text text={`This command creates an empty file named myscript.sh.`} />
      
      <Supersubheading text={`Step 2: Add execution permission`} />
      <TerminalOutput content={`[user@localhost ~]$ chmod +x myscript.sh`} />
      
      <Text text={`The chmod +x command grants execute permissions to the script.`} />
      
      <Supersubheading text={`Step 3: Edit the script`} />
      <TerminalOutput content={`[user@localhost ~]$ vi myscript.sh`} />

      <Supersubheading text={`Step 4: Add the following content`} />
      <TerminalOutput content={`#!/bin/bash\necho "Hello, welcome to shell scripting!"`} />
      
      <Text text={`This script starts with a shebang (#!) followed by the path to the bash interpreter. The echo command prints a message.`} />
      
      <Supersubheading text={`Step 5: Run the script`} />
      <TerminalOutput content={`[user@localhost ~]$ ./myscript.sh`} />

      <Text text={`This will output:`} />
      <TerminalOutput content={`Hello, welcome to shell scripting!`} />
      
      <Line />
      
      <Subheading text={`Understanding the Shebang Line`} />
      <Text text={`The first line of a script is the shebang (#!), which tells the system which interpreter to use.`} />
      <TerminalOutput content={`#!/bin/bash`} />
      <Supersubheading text={`Other interpreters include:`} />
      <Text text={`Bourne Shell:`} />
      <TerminalOutput content={`#!/bin/bash`} />
      <Text text={`Python Script:`} />
      <TerminalOutput content={`#!/usr/bin/python3`} />
      <Text text={`Perl Script:`} />
      <TerminalOutput content={`#!/usr/bin/perl`} />
    
      
      <Line />
      
      <Subheading text={`Ways to Run a Shell Script`} />
      <Supersubheading text={`You can run a shell script in multiple ways:`} />
      <Text text={`Execute script directly:`} />
      <TerminalOutput content={`[user@localhost ~]$ ./myscript.sh`} />
      <Text text={`Run script using sh:`} />
      <TerminalOutput content={`[user@localhost ~]$ sh myscript.sh`} />
      <Text text={`Run script using bash:`} />
      <TerminalOutput content={`[user@localhost ~]$ bash myscript.sh`} />
      
      <Line />
      
      <Subheading text={`Adding Comments in Shell Script`} />
      
      <Text text={`Comments are useful for explaining code and improving readability. They are ignored by the shell during execution.`} />
      
      <Supersubheading text={`Single Line Comment:`} />
      <TerminalOutput content={`# This is a single-line comment`} />
      <Text text={`To insert a single line comment into a Shell scripting file, we use # symbol at starting of line.`} />
      
      <Supersubheading text={`Multi-Line Comment:`} />
      <TerminalOutput content={`<<comment \nThis is a multi-line comment. \nIt can span multiple lines in a script. \ncomment`} />
      <Text text={`To insert a multi line comment, we use <<comment keyword before starting the comment and use comment keyword while ending a multi line comment.`} />
      
      <Line />
      <Text text={`With this knowledge, you can start writing and executing shell scripts efficiently.`} />
      
    </div>
  );
};

export default GettingStartedWithShell;
