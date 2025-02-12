import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from "../utils/Comps";

const FilesAndDir = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Files and Directories in Solaris`} />

      <Text text={`In Solaris, managing files and directories involves various commands for creation, modification, listing, and removal. Here we will look at the essential commands for working with files and directories in Solaris.`} />

      {/* Files */}
      <Subheading text={`1. Working with Files:`} />
      <Text text={`Here are some basic commands used for managing files in Solaris:`} />

      <Supersubheading text={`To create an empty file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# touch file.txt
[root@localhost:~ ]# ls
file.txt
[root@localhost:~ ]#`} />
      <Text text={`The \`touch\` command creates an empty file or updates the timestamp of an existing file.`} />

      <Supersubheading text={`To create a file of a specified size:`} />
      <TerminalOutput content={`mkfile <file_size> <file_name>`} />
      <Text text={`The \`mkfile\` command creates a file with the specified size (e.g., \`mkfile 1g myfile.txt\` creates a 1 GB file).`} />

      <Supersubheading text={`To create a text file in editor mode:`} />
      <TerminalOutput content={`[root@localhost:~ ]# vi file3`} />
      <Text text={`The \`vi\` command opens a file in the vi editor, allowing you to create and modify text files interactively.`} />

      <Supersubheading text={`To read the contents of a text file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# cat file.txt
Hello world!
[root@localhost:~ ]#`} />
      <Text text={`The \`cat\` command displays the contents of the file in the terminal.`} />

      <Supersubheading text={`To list files in the current directory:`} />
      <TerminalOutput content={`[root@localhost:~ ]# ls
file.txt  file3
[root@localhost:~ ]#`} />
      <Text text={`The \`ls\` command lists all files and directories in the current directory.`} />

      <Supersubheading text={`To list all files, including hidden ones:`} />
      <TerminalOutput content={`[root@localhost:~ ]# ls -la
total 68
drwx------  6 root root  4096 Feb 12 18:38 .
drwxr-xr-x 23 root root  4096 Feb 12 03:42 ..
-rw-------  1 root root  8887 Feb 12 03:44 .bash_history
-rw-r--r--  1 root root  3106 Apr 22  2024 .bashrc
drwx------  2 root root  4096 Feb  7 13:49 .cache
-rw-r--r--  1 root root    13 Feb 12 18:39 file.txt
-rw-r--r--  1 root root     4 Feb 12 18:38 file3
[root@localhost:~ ]#`} />
      <Text text={`The \`-la\` option shows all files, including hidden ones (those starting with a dot), and provides detailed information like file permissions.`} />

      <Supersubheading text={`To list files with permissions and size in human-readable format:`} />
      <TerminalOutput content={`[root@localhost:~ ]# ls -larth
total 68K
-rw-r--r--  1 root root  161 Apr 22  2024 .profile
-rw-r--r--  1 root root 3.1K Apr 22  2024 .bashrc
drwx------  2 root root 4.0K Jan  6 20:16 .ssh
-rw-r--r--  1 root root    4 Feb 12 18:38 file3
-rw-------  1 root root 9.9K Feb 12 18:38 .viminfo
drwx------  6 root root 4.0K Feb 12 18:38 .
-rw-r--r--  1 root root   13 Feb 12 18:39 file.txt
[root@localhost:~ ]#`} />
      <Text text={`The \`-larth\` option shows files sorted by modification time, with human-readable file sizes and detailed permissions.`} />

      <Supersubheading text={`To remove a file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# rm file3
[root@localhost:~ ]# ls
file.txt
[root@localhost:~ ]#`} />
      <Text text={`The \`rm\` command removes a specified file from the filesystem.`} />

      <Supersubheading text={`To forcefully remove a file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# rm -rf file.txt
[root@localhost:~ ]# ls
[root@localhost:~ ]#`} />
      <Text text={`The \`-rf\` option forces the removal of the file or directory without confirmation (use with caution).`} />

      <Supersubheading text={`To remove multiple files at once:`} />
      <TerminalOutput content={`[root@localhost:~ ]# ls
file1  file2  file3
[root@localhost:~ ]# rm -rf file1 file2 file3
[root@localhost:~ ]# ls
[root@localhost:~ ]#`} />
      <Text text={`You can delete multiple files simultaneously by specifying each file separated by a space.`} />

      <Supersubheading text={`To copy a file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# cp file.txt /tmp
[root@localhost:~ ]# ls /tmp
file.txt
[root@localhost:~ ]#`} />
      <Text text={`The \`cp\` command copies a file from the source to the destination.`} />

      <Supersubheading text={`To move a file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# mv file.txt /tmp/
[root@localhost:~ ]# ls /tmp/
file.txt
[root@localhost:~ ]# ls
[root@localhost:~ ]#`} />
      <Text text={`The \`mv\` command moves a file from one location to another. It can also be used to rename files.`} />

      <Supersubheading text={`To rename a file:`} />
      <TerminalOutput content={`[root@localhost:~ ]# ls
file1
[root@localhost:~ ]# mv file1 file2
[root@localhost:~ ]# ls
file2
[root@localhost:~ ]#`} />
      <Text text={`To rename a file, use the \`mv\` command, specifying the current filename and the new name.`} />

     <Line/>

      {/* Directories */}
      <Subheading text={`2. Working with Directories:`} />
      <Text text={`Now, let's look at some basic directory commands used for managing directories in Solaris:`} />

      <Supersubheading text={`To create a directory:`} />
      <TerminalOutput content={`[root@localhost:~ ]# mkdir folder
[root@localhost:~ ]# ls
folder
[root@localhost:~ ]#`} />
      <Text text={`The \`mkdir\` command creates a new directory with the specified name.`} />

      <Supersubheading text={`To create parent directories:`} />
      <TerminalOutput content={`[root@localhost:~ ]# mkdir -p folder1/folder2
[root@localhost:~ ]# ls
folder1
[root@localhost:~ ]# ls folder1/
folder2
[root@localhost:~ ]#`} />
      <Text text={`The \`-p\` option allows creating nested directories (parent and child directories) in a single command.`} />

      <Supersubheading text={`To delete an empty directory:`} />
      <TerminalOutput content={`[root@localhost:~ ]# rmdir folder
[root@localhost:~ ]# ls
[root@localhost:~ ]#`} />
      <Text text={`The \`rmdir\` command removes an empty directory.`} />

      <Supersubheading text={`To delete a non-empty directory:`} />
      <TerminalOutput content={`[root@localhost:~ ]# rm -rf folder1
[root@localhost:~ ]# ls
[root@localhost:~ ]#`} />
      <Text text={`To delete a non-empty directory and its contents, use \`rm -rf\` (use with caution).`} />
    </div>
  );
};

export default FilesAndDir;
