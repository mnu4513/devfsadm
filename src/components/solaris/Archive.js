import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const ArchiveAndCompression = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Archive and Compression in Solaris`} />

      <Text text={`Archiving and compression are essential techniques in Linux for managing files efficiently. Archiving combines multiple files into one, while compression reduces file sizes for better storage and transfer. Often, both are used together.`} />

<Line/>
      <Subheading text={`File Formats`} />

      <Supersubheading text={`Archived Only`} />
      <TerminalOutput content={`file_name.tar`} />
      <Text text={`The .tar format is used to archive multiple files and directories into a single file without compression.`} />

      <Supersubheading text={`Compressed Only`} />
      <TerminalOutput content={`file_name.gz`} />
      <TerminalOutput content={`file_name.bz2`} />
      <TerminalOutput content={`file_name.xz`} />
      <Text text={`These formats are used for compression only, reducing file size without combining multiple files.`} />

      <Supersubheading text={`Archived and Compressed`} />
      <TerminalOutput content={`file_name.tar.gz`} />
      <TerminalOutput content={`file_name.tar.bz2`} />
      <TerminalOutput content={`file_name.tar.xz`} />
      <Text text={`These formats combine both archiving and compression, making it easier to manage multiple files while reducing their size.`} />

      <Line />

      <Heading text={`Compression`} />
      <Text text={`Compression reduces the size of files by removing redundant data. This helps in saving disk space and speeding up file transfers.`} />

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
      <Text text={`gzip is the fastest, while xz takes the longest due to higher compression efficiency.`} />

      <Supersubheading text={`Compression Ratio:`} />
      <TerminalOutput content={`xz > bzip2 > gzip`} />
      <Text text={`xz provides the best compression but takes the longest time. gzip is the least efficient but the fastest.`} />

      <Subheading text={`gzip`} />
      <Text text={`A fast compression method using the .gz format.`} />
      <Supersubheading text={`Compress a file:`} />
      <TerminalOutput content={`[root@localhost:~]# gzip file.txt
[root@localhost:~]# ls
file.txt.gz
[root@localhost:~]#
`} />
      <Text text={`This command compresses file.txt and creates file.txt.gz.`} />
      
      <Supersubheading text={`Decompress a .gz file:`} />
      <TerminalOutput content={`[root@localhost:~]# gunzip file.txt.gz
[root@localhost:~]# ls
file.txt
[root@localhost:~]#`} />
      <TerminalOutput content={`[root@localhost:~]# gzip -d file.txt
[root@localhost:~]# ls
file.txt
[root@localhost:~]#
`} />
      <Text text={`Both commands decompress file.txt.gz back to file.txt.`} />

      <Subheading text={`bzip2`} />
      <Text text={`A higher compression ratio method using the .bz2 format.`} />
      <Supersubheading text={`Compress a file:`} />
      <TerminalOutput content={`[root@localhost:~]# bzip2 file.txt
[root@localhost:~]# ls
file.txt.bz2
[root@localhost:~]#`} />
      <Text text={`This compresses file.txt into file.txt.bz2.`} />

      <Supersubheading text={`Decompress a .bz2 file:`} />
      <TerminalOutput content={`[root@localhost:~]# bunzip2 file.txt.bz2
[root@localhost:~]# ls
file.txt
[root@localhost:~]#`} />
      <TerminalOutput content={`[root@localhost:~]# bzip2 -d file.txt.bz2
[root@localhost:~]# ls
file.txt
[root@localhost:~]#`} />

      <Subheading text={`xz`} />
      <Text text={`The highest compression ratio method using the .xz format.`} />
      <Supersubheading text={`Compress a file:`} />
      <TerminalOutput content={`[root@localhost:~]# xz file.txt
[root@localhost:~]# ls
file.txt.xz
[root@localhost:~]#`} />
      <Text text={`This compresses file.txt into file.txt.xz.`} />

      <Supersubheading text={`Decompress an .xz file:`} />
      <TerminalOutput content={`[root@localhost:~]# unxz file.txt.xz
[root@localhost:~]# ls
file.txt
[root@localhost:~]#`} />
      <TerminalOutput content={`[root@localhost:~]# xz -d file.txt.xz
[root@localhost:~]# ls
file.txt
[root@localhost:~]#`} />

      <Line />
      <Heading text={`Archiving`} />
      <Text text={`Archiving combines multiple files into a single file without compression. The tar command is the most commonly used tool for this purpose.`} />

      <Subheading text={`Basic tar Commands`} />
      <Supersubheading text={`Create an archive:`} />
      <TerminalOutput content={`[root@localhost:~]# tar -cvf archive.tar file1 file2
a file1 0K
a file2 0K
[root@localhost:~]# ls
archive.tar  file1        file2
[root@localhost:~]#`} />

      <Supersubheading text={`Extract an archive:`} />
      <TerminalOutput content={`[root@localhost:~]# tar -xvf archive.tar
tar: blocksize = 4
x file1, 0 bytes, 0 tape blocks
x file2, 0 bytes, 0 tape blocks
[root@localhost:~]#`} />

      <Subheading text={`Archive with Compression`} />
      <Supersubheading text={`Create a gzip-compressed archive:`} />
      <TerminalOutput content={`[root@localhost:~]# tar -cjvf archive.tar.gz file1 file2
Compressing 'archive.tar.gz' with '/usr/bin/bzip2'...
a file1 0K
a file2 0K
[root@localhost:~]# ls
archive.tar.gz  file1           file2
[root@localhost:~]#`} />

<Supersubheading text={`See the data of a gzip-compressed archive without extrating:`} />
      <TerminalOutput content={`[root@localhost:~]# tar -tjvf archive.tar.gz
-rw-r--r--   0/0        0 Feb 13 21:08 2025 file1
-rw-r--r--   0/0        0 Feb 13 21:08 2025 file2
[root@localhost:~]#`} />

      <Supersubheading text={`Extract a gzip-compressed archive:`} />
      <TerminalOutput content={`[root@localhost:~]# tar -xjvf archive.tar.gz
x file1, 0 bytes, 0 tape blocks
x file2, 0 bytes, 0 tape blocks
[root@localhost:~]#`} />

      <Text text={`By understanding and using these commands effectively, you can efficiently manage files in Linux using archiving and compression techniques.`} />
    </div>
  );
};

export default ArchiveAndCompression;