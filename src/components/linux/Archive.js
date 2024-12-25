import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const ArchiveAndCompression = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Archive and Compression`} />

      <Subheading text={`File Formats`} />

      <Supersubheading text={`Archived Only`} />
      <TerminalOutput content={`file_name.tar`} />
      <Text text={`Whenever we archive files or directory then it use .tar extension.`} />

      <Supersubheading text={`Compressed Only`} />
      <TerminalOutput content={`file_name.bz2`} />
      <TerminalOutput content={`file_name.xz`} />
      <TerminalOutput content={`file_name.gz`} />
      <Text text={`These are different extensions for compressed files.`} />



      <Supersubheading text={`Archived and Compressed`} />
      <TerminalOutput content={`file_name.tar.bz2`} />
      <TerminalOutput content={`file_name.tar.xz`} />
      <TerminalOutput content={`file_name.tar.gz`} />
      <Text text={`These are the file format for archived and compressed files.`} />

      <Line />

      <Heading text={`Compression`} />

      <Text text={`Compression reduces the size of a file for efficient storage and transfer. It does not create a new file but compresses the original file into a smaller version.`} />

      <Subheading text={`Compression Methods and Commands`} />
      <table className='w-full text-left'>
        <thead>
          <tr className='text-green-400'>
            <th>Command</th>
            <th>Format</th>
            <th>Option</th>
            <th>Decompression Command</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gzip</td>
            <td>.gz</td>
            <td>-z</td>
            <td>gunzip</td>
          </tr>
          <tr>
            <td>bzip2</td>
            <td>.bz2</td>
            <td>-j</td>
            <td>bunzip2</td>
          </tr>
          <tr>
            <td>xz</td>
            <td>.xz</td>
            <td>-J</td>
            <td>unxz</td>
          </tr>
        </tbody>
      </table>


      <Subheading text={`Comparison of Compression Methods`} />
      <Supersubheading text={`Speed of Compression:`} />
      <TerminalOutput content={`gzip > bzip2 > xz`} />
      <Supersubheading text={`Compression Ratio:`} />
      <TerminalOutput content={`xz > bzip2 > gzip`} />

      <Subheading text={`1. gzip`} />
      <Text text={`A fast compression method that uses .gz format.`} />

      <Supersubheading text={`Compress a file:`} />
      <TerminalOutput content={`[root@localhost ~]# gzip file.txt
[root@localhost ~]# ls
file.txt.gz
[root@localhost ~]#`} />

      <Supersubheading text={`Decompress a .gz file:`} />
      <TerminalOutput content={`[root@localhost ~]# gzip -d file.txt.gz
[root@localhost ~]# ls
file.txt
[root@localhost ~]#`} />
      <TerminalOutput content={`[root@localhost ~]# gunzip file.txt.gz
[root@localhost ~]# ls
file.txt
[root@localhost ~]#`} />

      <Supersubheading text={`View contents without extracting:`} />
      <TerminalOutput content={`[root@localhost ~]# zcat file.txt.gz
Hello World!
[root@localhost ~]#
`} />


      <Subheading text={`2. bzip2`} />
      <Text text={`A high compression ratio method that uses .bz2 format.`} />


      <Supersubheading text={`Compress a file:`} />
      <TerminalOutput content={`[root@localhost ~]# bzip2 file.txt
[root@localhost ~]# ls
file.txt.bz2
[root@localhost ~]#
`} />
      <Supersubheading text={`Decompress a .bz2 file:`} />
      <TerminalOutput content={`[root@localhost ~]# bzip2 -d file.txt.bz2
[root@localhost ~]# ls
file.txt
[root@localhost ~]#
`} />
      <TerminalOutput content={`[root@localhost ~]# bunzip2 file.txt.bz2
[root@localhost ~]# ls
file.txt
[root@localhost ~]#
`} />
      <Supersubheading text={`View contents without extracting:`} />
      <TerminalOutput content={`[root@localhost ~]# bzcat file.txt.bz2
Hello World!
[root@localhost ~]#
`} />


      <Subheading text={`3. xz`} />
      <Text text={`The highest compression ratio method that uses .xz format.`} />

      <Supersubheading text={`Compress a file:`} />
      <TerminalOutput content={`[root@localhost ~]# xz file.txt
[root@localhost ~]# ls
file.txt.xz
[root@localhost ~]#`} />
      <Supersubheading text={`Decompress an .xz file:`} />
      <TerminalOutput content={`[root@localhost ~]# xz -d file.txt.xz
[root@localhost ~]# ls
file.txt
[root@localhost ~]# `} />
      <TerminalOutput content={`[root@localhost ~]# unxz file.txt.xz
[root@localhost ~]# ls
file.txt
[root@localhost ~]#`} />
      <Supersubheading text={`View contents without extracting:`} />
      <TerminalOutput content={`[root@localhost ~]# xzcat file.txt.xz
Hello World!
[root@localhost ~]#
`} />



      <Line />

      <Heading text={`Archive`} />

      <Text text={`Archiving creates a single file containing multiple files or directories. It does not compress the data, but simply groups it into one file for easier management.`} />

      <Text text={`The tar command is primarily used for archiving files and directories.`} />

      <Subheading text={`Options for tar Command`} />
      <table className='w-full text-left'>
        <thead>
          <tr className='text-green-400'>
            <th>Option</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-c</td>
            <td>Create an archive.</td>
          </tr>
          <tr>
            <td>-v</td>
            <td>Enable verbose mode to list archive content.</td>
          </tr>
          <tr>
            <td>-f</td>
            <td>Specify the archive file name (mandatory).</td>
          </tr>
          <tr>
            <td>-cz</td>
            <td>Create a gzip-compressed archive.</td>
          </tr>
          <tr>
            <td>-cj</td>
            <td>Create a bzip2-compressed archive.</td>
          </tr>
          <tr>
            <td>-cJ</td>
            <td>Create an xz-compressed archive.</td>
          </tr>
          <tr>
            <td>-r</td>
            <td>Append data to an archive (only for .tar).</td>
          </tr>
          <tr>
            <td>-t</td>
            <td>List the contents of an archive.</td>
          </tr>
          <tr>
            <td>-x</td>
            <td>Extract files from an archive.</td>
          </tr>
          <tr>
            <td>-C</td>
            <td>Change extraction directory.</td>
          </tr>
          <tr>
            <td>--delete</td>
            <td>Remove specific files from an archive.</td>
          </tr>
        </tbody>
      </table>


      <Subheading text={`Archiving Commands`} />
      <Supersubheading text={`Create an archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -cvf file.tar file.txt
file.txt
[root@localhost ~]# ls
file.tar  file.txt
[root@localhost ~]#`} />
      <Supersubheading text={`List contents of an archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -tvf file.tar
-rw-r--r-- root/root        13 2024-12-24 19:59 file.txt
[root@localhost ~]#
`} />
      <Supersubheading text={`Append data to an archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -rvf file.tar file-2.sh
file-2.sh
[root@localhost ~]# tar -tvf file.tar
-rw-r--r-- root/root        13 2024-12-24 19:59 file.txt
-rw-r--r-- root/root         0 2024-12-24 20:39 file-2.sh
[root@localhost ~]#`} />
      <Supersubheading text={`Extract files from an archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -xvf file.tar
file.txt
file-2.sh
[root@localhost ~]# ls
file-2.sh  file.tar  file.txt
[root@localhost ~]#
`} />
      <Supersubheading text={`Extract to a specific directory:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -xvf file.tar -C /mnt
file.txt
file-2.sh
[root@localhost ~]# ls /mnt
file-2.sh  file.txt
[root@localhost ~]#
`} />
      <Supersubheading text={`Extract a specific file:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -xvf file.tar --extract file-2.sh
file-2.sh
[root@localhost ~]# ls
file-2.sh  file.tar
[root@localhost ~]#
`} />
      <Supersubheading text={`Remove a file from an archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar --delete -f file.tar file-2.sh
[root@localhost ~]# tar -tvf file.tar
-rw-r--r-- root/root        13 2024-12-24 19:59 file.txt
[root@localhost ~]#
`} />




      <Line />

      <Subheading text={`Archive with Compression`} />

      <Text text={`Combining archiving and compression creates a compressed archive, reducing storage space and simplifying transfer.`} />

      <Supersubheading text={`Create a gzip-compressed archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -czvf home.tar.gz /home
tar: Removing leading '/' from member names
/home/
/home/john/
/home/john/.bash_logout
/home/john/.bash_profile
/home/john/.bashrc
/home/john/.bash_history
[root@localhost ~]# ls
home.tar.gz
[root@localhost ~]#
`} />
      <Supersubheading text={`Create a bzip2-compressed archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -cjvf home.tar.bz2 /home
tar: Removing leading '/' from member names
/home/
/home/john/
/home/john/.bash_logout
/home/john/.bash_profile
/home/john/.bashrc
/home/john/.bash_history
[root@localhost ~]# ls
home.tar.bz2
[root@localhost ~]#
`} />
      <Supersubheading text={`Create an xz-compressed archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -cJvf home.tar.xz /home
tar: Removing leading '/' from member names
/home/
/home/john/
/home/john/.bash_logout
/home/john/.bash_profile
/home/john/.bashrc
/home/john/.bash_history
[root@localhost ~]# ls
home.tar.xz
[root@localhost ~]#
`} />
      <Supersubheading text={`Decompress and extract a gzip-compressed archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -xzvf home.tar.gz -C /mnt
home/
home/john/
home/john/.bash_logout
home/john/.bash_profile
home/john/.bashrc
home/john/.bash_history
[root@localhost ~]# ls /mnt
home
[root@localhost ~]#
`} />
      <Supersubheading text={`Decompress and extract a bzip2-compressed archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -xjvf home.tar.bz2 -C /mnt
home/
home/john/
home/john/.bash_logout
home/john/.bash_profile
home/john/.bashrc
home/john/.bash_history
[root@localhost ~]# ls /mnt
home
[root@localhost ~]#
`} />
      <Supersubheading text={`Decompress and extract an xz-compressed archive:`} />
      <TerminalOutput content={`[root@localhost ~]# tar -xJvf home.tar.xz -C /mnt
home/
home/john/
home/john/.bash_logout
home/john/.bash_profile
home/john/.bashrc
home/john/.bash_history
[root@localhost ~]# ls /mnt
home
[root@localhost ~]#
`} />


    </div>
  );
};

export default ArchiveAndCompression;
