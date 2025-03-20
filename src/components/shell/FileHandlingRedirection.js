import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const FileHandlingRedirection = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`File Handling and Redirection in Shell Scripting`} />

      <Text text={`File handling and redirection are crucial aspects of shell scripting. These operations allow users to create, modify, delete, and manipulate files efficiently while directing input and output streams.`} />

      <Line />
      <Subheading text={`Basic File Operations`} />

      <Supersubheading text={`Create a file`} />
      <TerminalOutput content={`touch myfile.txt`} />
      <Text text={`The 'touch' command creates an empty file named myfile.txt.`} />

      <Supersubheading text={`View file content`} />
      <TerminalOutput content={`cat myfile.txt`} />
      <Text text={`Displays the contents of myfile.txt.`} />

      <Supersubheading text={`Copy a file`} />
      <TerminalOutput content={`cp file1.txt file2.txt`} />
      <Text text={`Copies file1.txt to file2.txt.`} />

      <Supersubheading text={`Move/Rename a file`} />
      <TerminalOutput content={`mv oldname.txt newname.txt`} />
      <Text text={`Renames oldname.txt to newname.txt.`} />

      <Supersubheading text={`Delete a file`} />
      <TerminalOutput content={`rm myfile.txt`} />
      <Text text={`Deletes the file myfile.txt.`} />

      <Line />
      <Subheading text={`Redirection Operators`} />

      <Supersubheading text={`Standard Output Redirection (>)`} />
      <TerminalOutput content={`echo "Hello, World!" > output.txt`} />
      <Text text={`Redirects the output of the echo command to output.txt, overwriting any existing content.`} />

      <Supersubheading text={`Appending Output (>>)`} />
      <TerminalOutput content={`echo "New Line" >> output.txt`} />
      <Text text={`Appends the text "New Line" to output.txt without overwriting its existing content.`} />

      <Supersubheading text={`Standard Input Redirection (<)`} />
      <TerminalOutput content={`sort < input.txt`} />
      <Text text={`Takes input from input.txt and sorts its contents.`} />

      <Supersubheading text={`Redirecting Errors (2>)`} />
      <TerminalOutput content={`ls nonexistentfile 2> error.log`} />
      <Text text={`Redirects error messages to error.log instead of displaying them on the terminal.`} />

      <Supersubheading text={`Redirecting Both Output and Errors (&>)`} />
      <TerminalOutput content={`command &> output.log`} />
      <Text text={`Redirects both standard output and error messages to output.log.`} />

      <Supersubheading text={`Discarding Output (/dev/null)`} />
      <TerminalOutput content={`command > /dev/null 2>&1`} />
      <Text text={`Suppresses both standard output and errors by sending them to /dev/null.`} />

      <Line />
      <Subheading text={`Reading a File Line by Line`} />

      <Text text={`A common requirement in shell scripting is reading a file line by line. This can be done using a while loop.`} />

      <TerminalOutput content={`while IFS= read -r line
do
  echo "Line: $line"
done < input.txt`} />
      <Text text={`This script reads input.txt line by line and prints each line with a prefix "Line: "`}/>
    </div>
  );
};

export default FileHandlingRedirection;
