import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const LoopsInShellScripting = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto font-cambria'>
      <Heading text={`Loops in Shell Scripting`} />
      <Text text={`Loops are essential constructs in shell scripting that allow the execution of a block of code multiple times. They help automate repetitive tasks, making scripts efficient and concise. Shell scripting supports three primary types of loops: for, while, and until.`} />
      
      <Line />
      
      <Subheading text={`Why Use Loops?`} />
      <Text text={`Loops are useful in scenarios such as:`} />
      <ul className='list-disc ml-6'>
        <li>Processing a list of files in a directory</li>
        <li>Reading data from a file line by line</li>
        <li>Automating repetitive tasks like backups or log processing</li>
        <li>Monitoring system resources continuously</li>
      </ul>
      
      <Line />
      <Subheading text={`For Loop`} />
      <Text text={`The for loop is used to iterate over a list of values or elements. It executes the commands within the loop body for each item in the list.`} />
      
      <Supersubheading text={`Syntax:`} />
      <TerminalOutput content={`for variable in list
do
  command
 done`} />
      
      <Supersubheading text={`Example: Iterating Over a List`} />
      <TerminalOutput content={`#!/bin/bash
for i in 1 2 3 4 5
do
  echo "Number: $i"
done`} />
      <Text text={`This script iterates through the numbers 1 to 5 and prints each number.`} />
      
      <Supersubheading text={`Example: Processing Files in a Directory`} />
      <TerminalOutput content={`#!/bin/bash
for file in *.txt
do
  echo "Processing $file"
done`} />
      <Text text={`This script iterates over all .txt files in the current directory and performs an action (printing the filename in this case).`} />
      
      <Line />
      
      <Subheading text={`While Loop`} />
      <Text text={`The while loop executes as long as a given condition is true.`} />
      
      <Supersubheading text={`Syntax:`} />
      <TerminalOutput content={`while [ condition ]
do
  command
 done`} />
      
      <Supersubheading text={`Example: Counting Numbers`} />
      <TerminalOutput content={`#!/bin/bash
count=1
while [ $count -le 5 ]
do
  echo "Count: $count"
  ((count++))
done`} />
      <Text text={`This script prints numbers from 1 to 5 by incrementing the counter.`} />
      
      <Supersubheading text={`Example: Reading Lines from a File`} />
      <TerminalOutput content={`#!/bin/bash
while read line
do
  echo "Line: $line"
done < sample.txt`} />
      <Text text={`This script reads each line from sample.txt and prints it.`} />
      
      <Line />
      
      <Subheading text={`Until Loop`} />
      <Text text={`The until loop runs until the given condition becomes true.`} />
      
      <Supersubheading text={`Syntax:`} />
      <TerminalOutput content={`until [ condition ]
do
  command
 done`} />
      
      <Supersubheading text={`Example: Incrementing a Counter`} />
      <TerminalOutput content={`#!/bin/bash
count=1
until [ $count -gt 5 ]
do
  echo "Count: $count"
  ((count++))
done`} />
      <Text text={`This script works similarly to the while loop but stops execution once the count exceeds 5.`} />
      
      <Line />
      
      <Subheading text={`Infinite Loops`} />
      <Text text={`Loops can be intentionally designed to run indefinitely, often requiring manual interruption (Ctrl+C) or a break condition within the script.`} />
      
      <Supersubheading text={`Example: Infinite While Loop`} />
      <TerminalOutput content={`#!/bin/bash
while true
do
  echo "Press Ctrl+C to stop"
  sleep 1
done`} />
      
      <Line />
      
      <Subheading text={`Comparison of Loops`} />
      <table className='w-full text-left border border-gray-300'>
        <thead>
          <tr className='text-green-400 bg-gray-800'>
            <th className='px-4 py-2'>Loop Type</th>
            <th className='px-4 py-2'>Best Used For</th>
            <th className='px-4 py-2'>Condition Check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2'>For Loop</td>
            <td className='px-4 py-2'>Iterating over lists, files, numbers</td>
            <td className='px-4 py-2'>Predefined list of values</td>
          </tr>
          <tr>
            <td className='px-4 py-2'>While Loop</td>
            <td className='px-4 py-2'>Executing until a condition becomes false</td>
            <td className='px-4 py-2'>Condition is checked before each iteration</td>
          </tr>
          <tr>
            <td className='px-4 py-2'>Until Loop</td>
            <td className='px-4 py-2'>Executing until a condition becomes true</td>
            <td className='px-4 py-2'>Condition is checked before each iteration</td>
          </tr>
        </tbody>
      </table>
      
      <Line />
      
      <Text text={`By mastering loops, you can write powerful and efficient shell scripts that automate tasks effectively. Understanding when to use for, while, or until loops will help optimize your scripts for different scenarios.`} />
    </div>
  );
};

export default LoopsInShellScripting;
