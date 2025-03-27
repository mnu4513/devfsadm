import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line, Video } from '../utils/Comps';

const VariablesAndUserInput = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Variables and User Input in Shell Scripting`} />
      
      <Text text={`Variables in shell scripting store values and are essential for processing data dynamically. They can be system-defined or user-defined. Variables help scripts become more flexible and reusable by allowing data to be stored and modified during execution.`} />
      
      <Line />
      <Video videoSrc={`QQ5zJzdWPLY`}/>
      <Line/>
      
      <Subheading text={`Variables`} />

      <Supersubheading text={`User-defined Variables`} />
      <Text text={`These variables are created by the user and can store custom values. They do not require a data type declaration and are dynamically typed.`} />
      
      <Text text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
name="John Doe"
echo "Hello, $name!"`} />
      
      <Text text={`In this example, the variable \`name\` is assigned a value and then used in the \`echo\` command. The \`$\` symbol is used to reference the value of the variable.`} />
      
      <Supersubheading text={`Constant Variables`} />
      <Text text={`To define a constant variable, use the \`readonly\` command. Once a variable is made readonly, it cannot be changed.`} />
      
      <Text text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
readonly pi=3.1415
echo "The value of pi is: $pi"
pi=3.14  # This will cause an error`} />
      
      <Text text={`In this script, the \`pi\` variable is made read-only. Any attempt to modify it will result in an error.`} />
      
      <Supersubheading text={`System-defined Variables`} />
      <Text text={`These variables are predefined by the system and store essential environment settings. Examples include:`} />
      
      <TerminalOutput content={`$HOME  # User home directory
$USER  # Current logged-in user
$SHELL # Default shell for the user`} />
      
      <Text text={`These variables are automatically set by the system and can be accessed without explicit declaration.`} />
      
      <Line />
      
      <Subheading text={`Getting User Input using read`} />
      <Text text={`The \`read\` command is used to take user input during script execution. It waits for the user to enter data and stores it in a variable.`} />
      
      <Text text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
echo "Enter your name: "
read user_name
echo "Hello, $user_name!"`} />
      
      <Text text={`This script prompts the user to enter their name and then greets them. The \`read\` command stores the user input in the \`user_name\` variable.`} />

      <Supersubheading text={`Getting User Input in the Same Line`} />
      <Text text={`The \`read -p\` option allows input to be taken in the same line as the prompt.`} />
      
      <Text text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
read -p "Enter your age: " age
echo "You are $age years old."`} />
      
      <Text text={`This script prompts the user for their age in the same line and stores it in the \`age\` variable.`} />
      
      <Line />
      
      <Subheading text={`Using Environment Variables`} />
      <Text text={`Environment variables store configuration settings for the shell and system. These variables can be used in scripts to get system-related information.`} />
      
      <Supersubheading text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
echo "Your home directory is: $HOME"
echo "Your current shell is: $SHELL"`} />
      
      <Text text={`This script displays the user's home directory and current shell using environment variables. These values are dynamically retrieved from the system.`} />
      
      <Line />
      
      <Text text={`Understanding variables and user input handling is crucial for writing effective shell scripts that can interact dynamically with users and perform automated tasks.`} />
    </div>
  );
};

export default VariablesAndUserInput;
