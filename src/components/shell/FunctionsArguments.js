import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const FunctionsAndArguments = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Functions and Argument Handling in Shell Scripting`} />
      
      <Text text={`Functions in shell scripting allow code reuse, modularization, and better script organization. They group related commands into callable units, improving maintainability and reducing redundancy.`} />
      
      <Line />
      
      <Subheading text={`What are Functions in Shell Scripting?`} />
      <Text text={`A function is a set of commands stored under a name, allowing it to be invoked multiple times within a script. Functions make scripts more efficient and organized.`} />
      
      <Supersubheading text={`Defining and Calling Functions`} />
      <Text text={`A function can be defined using the function keyword or simply with parentheses.`} />
      
      <Supersubheading text={`Syntax`} />
      <TerminalOutput content={`# Method 1
function function_name() {
  commands
}

# Method 2
function_name() {
  commands
}`} />
      
      <Supersubheading text={`Example`} />
      <TerminalOutput content={`#!/bin/bash

greet() {
  echo "Hello, welcome to shell scripting!"
}

greet # Calling the function`} />
      
      <Text text={`This script defines a function named greet and calls it to print a welcome message.`} />
      
      <Line />
      
      <Subheading text={`Passing Arguments to Functions`} />
      <Text text={`Functions accept arguments, which are accessed using positional parameters like $1, $2, etc.`} />
      
      <Supersubheading text={`Example`} />
      <TerminalOutput content={`#!/bin/bash

print_message() {
  echo "Message: $1"
}

print_message "Hello World"`} />
      
      <Text text={`This function takes an argument and prints it. The first argument passed is referenced as $1.`} />
      
      <Line />
      
      <Subheading text={`Using $@ and $* for Multiple Arguments`} />
      <Text text={`Both $@ and $* represent all arguments passed to a function. However, they behave differently:
      
- **$@** treats each argument separately.
- **$*** treats all arguments as a single entity.`} />
      
      <Supersubheading text={`Example`} />
      <TerminalOutput content={`#!/bin/bash

show_arguments() {
  echo "Arguments using \$@:" $@
  echo "Arguments using \$*:" $*
}

show_arguments "one" "two" "three"`} />
      
      <Text text={`Here, both $@ and $* are used to print all arguments, but $@ preserves individual arguments while $* treats them as a single string.`} />
      
      <Line />
      
      <Subheading text={`Returning Values from Functions`} />
      <Text text={`Functions can return values using the return command (limited to numeric values) or by echoing output and capturing it with command substitution.`} />
      
      <Supersubheading text={`Example`} />
      <TerminalOutput content={`#!/bin/bash

add_numbers() {
  result=$(( $1 + $2 ))
  echo $result
}

sum=$(add_numbers 5 10)
echo "Sum: $sum"`} />
      
      <Text text={`Since return only supports numeric values, we use echo and capture the output using command substitution (sum=$(command)).`} />
      
      <Line />
      
      <Subheading text={`Local vs Global Variables in Functions`} />
      <Text text={`Variables inside functions are by default global. To make them local, use the local keyword.`} />
      
      <Supersubheading text={`Example`} />
      <TerminalOutput content={`#!/bin/bash

global_var="Global"

demo_function() {
  local local_var="Local"
  echo "Inside function: $global_var, $local_var"
}

demo_function
echo "Outside function: $global_var, $local_var (not accessible)"`} />
      
      <Text text={`Here, local_var is accessible only inside the function, while global_var is available globally.`} />
      
      <Line />
      
      <Subheading text={`Using Functions in Real-World Scripts`} />
      <Text text={`Functions are useful for:
- Performing repetitive tasks efficiently.
- Modularizing code into reusable units.
- Handling file operations, user inputs, and validations.`} />
      
      <Supersubheading text={`Example: Function to Check If a File Exists`} />
      <TerminalOutput content={`#!/bin/bash

check_file() {
  if [ -f "$1" ]; then
    echo "File $1 exists."
  else
    echo "File $1 does not exist."
  fi
}

check_file "/etc/passwd"`} />
      
      <Text text={`This function takes a filename as an argument and checks if it exists.`} />
      
      <Line />
      
      <Text text={`Understanding functions and argument handling enhances script readability, maintainability, and reusability.`} />
    </div>
  );
};

export default FunctionsAndArguments;
