import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const ConditionalStatements = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Conditional Statements in Shell Scripting`} />
      
      <Text text={`Conditional statements allow decision-making in shell scripts. They help execute different commands based on conditions, making scripts dynamic and interactive. The primary conditional constructs in shell scripting are if-else, elif, and case statements.`} />
      
      <Line />
      
      <Subheading text={`If-Else Statement`} />
      <Text text={`The if-else statement evaluates a condition and executes specific commands based on whether the condition is true or false.`} />
      
      <Supersubheading text={`Syntax:`} />
      <TerminalOutput content={`if [ condition ]; then
  # Commands executed if condition is true
else
  # Commands executed if condition is false
fi`} />
      
      <Supersubheading text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
num=10
if [ $num -gt 5 ]; then
  echo "Number is greater than 5"
else
  echo "Number is 5 or less"
fi`} />
      <Text text={`Explanation:
- The script defines a variable \`num\` with a value of 10.
- The \`if\` condition checks if \`num\` is greater than 5.
- If true, it prints "Number is greater than 5"; otherwise, it prints "Number is 5 or less".`} />
      
      <Line />
      
      <Subheading text={`Elif Statement`} />
      <Text text={`The elif statement allows checking multiple conditions sequentially.`} />
      
      <Supersubheading text={`Syntax:`} />
      <TerminalOutput content={`if [ condition1 ]; then
  # Commands for condition1
elif [ condition2 ]; then
  # Commands for condition2
else
  # Commands if none of the conditions match
fi`} />
      
      <Supersubheading text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
num=10
if [ $num -eq 5 ]; then
  echo "Number is 5"
elif [ $num -gt 5 ]; then
  echo "Number is greater than 5"
else
  echo "Number is less than 5"
fi`} />
      <Text text={`Explanation:
- If \`num\` is exactly 5, it prints "Number is 5".
- If \`num\` is greater than 5, it prints "Number is greater than 5".
- Otherwise, it prints "Number is less than 5".`} />
      
      <Line />
      
      <Subheading text={`Case Statement`} />
      <Text text={`The case statement is useful for matching values against multiple patterns efficiently.`} />
      
      <Supersubheading text={`Syntax:`} />
      <TerminalOutput content={`case variable in
  pattern1)
    # Commands for pattern1
    ;;
  pattern2)
    # Commands for pattern2
    ;;
  *)
    # Default case
    ;;
esac`} />
      
      <Supersubheading text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
echo "Enter a number:"
read num
case $num in
  1)
    echo "You entered One";;
  2)
    echo "You entered Two";;
  3)
    echo "You entered Three";;
  *)
    echo "Invalid number";;
esac`} />
      <Text text={`Explanation:
- The script prompts the user to enter a number.
- The case statement matches the entered number against predefined cases.
- If the number is 1, 2, or 3, a corresponding message is displayed; otherwise, it prints "Invalid number".`} />
      
      <Line />
      
      <Subheading text={`Logical Operators`} />
      <Text text={`Logical operators allow combining multiple conditions in conditional statements.`} />
      
      <Supersubheading text={`AND (&&)`} />
      <TerminalOutput content={`if [ condition1 ] && [ condition2 ]; then
  # Commands executed if both conditions are true
fi`} />
      
      <Supersubheading text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
num=10
if [ $num -gt 5 ] && [ $num -lt 20 ]; then
  echo "Number is between 5 and 20"
fi`} />
      
      <Text text={`Explanation:
- This checks if \`num\` is both greater than 5 and less than 20.
- Since \`num\` is 10, both conditions are met, so it prints the message.`} />
      
      <Supersubheading text={`OR (||)`} />
      <TerminalOutput content={`if [ condition1 ] || [ condition2 ]; then
  # Commands executed if at least one condition is true
fi`} />
      
      <Supersubheading text={`Example:`} />
      <TerminalOutput content={`#!/bin/bash
num=10
if [ $num -eq 5 ] || [ $num -eq 10 ]; then
  echo "Number is either 5 or 10"
fi`} />
      
      <Text text={`Explanation:
- This checks if \`num\` is either 5 or 10.
- Since \`num\` is 10, the condition is true, and the message is displayed.`} />
      
      <Line />
      
      <Text text={`Understanding and using conditional statements effectively can make your shell scripts more powerful and adaptable to different scenarios.`} />
    </div>
  );
};

export default ConditionalStatements;
