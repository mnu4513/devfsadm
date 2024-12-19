import React from 'react';
import { Heading, Supersubheading, Text,  Subheading, Line, TerminalOutput } from '../utils/Comps';

const InodePage = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            {/* Heading */}
            <Heading text="Inode Numbers and Links in Linux" />

            {/* Supersubheading */}
            <Subheading text="Inode Number" />

            {/* Text */}
            <Text text="An inode (Index Node) is a data structure on a filesystem that stores information about a file or directory, such as:" />
            <ul>
                <li>File type (regular file, directory, symbolic link, etc.)</li>
                <li>Permissions (read, write, execute)</li>
                <li>Ownership (user and group)</li>
                <li>File size</li>
                <li>Access, modify, and change timestamps</li>
                <li>Location of file blocks on the disk</li>
            </ul>
            <Text text="Each file or directory has a unique inode number within the filesystem." />

            {/* Supersubheading */}
            <Supersubheading text="Inode Table in the Filesystem" />

            {/* Text */}
            <Text text="The inode table contains all the inodes for a filesystem. The inode number serves as an index into this table, which stores metadata about the file or directory." />

            {/* Supersubheading */}
            <Supersubheading text="Useful Commands for Inodes" />

            {/* Commands */}
            
            <TerminalOutput content={`[root@station1 ~]# ls -lai
total 48
25165953 dr-xr-x---.  4 root root 4096 Dec 19 18:59 .
     128 dr-xr-xr-x. 18 root root  235 Dec 19 15:24 ..
25171672 -rw-------.  1 root root 2101 Dec 18 20:58 .bash_history
26579086 -rw-r--r--.  1 root root   18 Aug 10  2021 .bash_logout
26579087 -rw-r--r--.  1 root root  141 Aug 10  2021 .bash_profile
26579088 -rw-r--r--.  1 root root  429 Aug 10  2021 .bashrc
26579089 -rw-r--r--.  1 root root  100 Aug 10  2021 .cshrc
25166537 -rw-r--r--.  1 root root    0 Dec 19 18:24 file-1
25166536 -rw-------.  1 root root   20 Dec 19 17:22 .lesshst
25170258 -rw-r--r--.  1 root root   21 Dec 19 18:59 log.txt
25170062 -rw-------.  1 root root  298 Dec 18 19:53 .mysql_history
25166539 -rw-r--r--.  1 root root   72 Dec 19 19:08 output.txt
  351027 drwx------.  2 root root   48 Dec 19 15:42 .ssh
  595842 drwxr-xr-x.  2 root root   57 Dec 15 14:51 .targetcli
26579090 -rw-r--r--.  1 root root  129 Aug 10  2021 .tcshrc
25170254 -rw-------.  1 root root 1293 Dec 18 20:00 .viminfo
[root@station1 ~]#
`} />
   
            <Text text="List files/directories with inode numbers." />
            <TerminalOutput content={`[root@station1 ~]# ls -li /mnt
total 0
17003530 -rw-r--r--. 1 root root 0 Dec 19 15:40 file-1
16844476 -rw-r--r--. 1 root root 0 Dec 19 15:40 file-2
16983633 -rw-r--r--. 1 root root 0 Dec 19 15:40 file-3
[root@station1 ~]#
`} />
            <Text text="Check inode of a specific file or directory." />

            {/* Supersubheading */}
            <Subheading text="Links in Linux" />

            {/* Text */}
            <Text text="Links in Linux are pointers that reference the inode of a file or directory. There are two primary types of links: Soft Links (Symbolic Links) and Hard Links." />

            {/* Supersubheading */}
            <Supersubheading text="1. Soft Link (Symbolic Link)" />

            {/* Text */}
            <Text text="A soft link is a pointer to the pathname of another file or directory. It points to the file name, not the inode, and can span across different filesystems." />

            {/* Supersubheading */}
            <Supersubheading text="Characteristics of Soft Links" />

            {/* Text */}
            <ul>
                <li>Points to the target file or directory by name.</li>
                <li>Can reference files on different filesystems.</li>
                <li>Becomes broken if the target file is deleted.</li>
                <li>Has its own inode, separate from the target file's inode.</li>
            </ul>

            {/* Commands */}
            <TerminalOutput content={`[root@station1 ~]# ln -s /etc/passwd link-1
[root@station1 ~]# ls -l
total 0
lrwxrwxrwx. 1 root root 11 Dec 19 19:47 link-1 -> /etc/passwd
[root@station1 ~]#
`} />
<Text text="It creates a soft link." />
            
          
            <TerminalOutput content={`[root@station1 ~]# unlink link-1
[root@station1 ~]# ls -l
total 0
[root@station1 ~]#
`} />
            <Text text="It is used to unlink a soft/hard link." />

            {/* Supersubheading */}
            <Supersubheading text="2. Hard Link" />

            {/* Text */}
            <Text text="A hard link is a direct reference to the inode of a file. This means both the original file and the hard link share the same inode, allowing them to act as the same file." />

            {/* Supersubheading */}
            <Supersubheading text="Characteristics of Hard Links" />

            {/* Text */}
            <ul>
                <li>Points directly to the inode of the target file.</li>
                <li>Cannot span across different filesystems.</li>
                <li>Remains functional if the original file is deleted.</li>
                <li>Cannot be created for directories (without special flags).</li>
            </ul>

            {/* Commands */}
            <TerminalOutput content={`[root@station1 ~]# ln /etc/passwd link-1
[root@station1 ~]# ls -li
total 4
17232604 -rw-r--r--. 2 root root 1588 Dec 18 18:49 link-1
[root@station1 ~]#
`} />
            <Text text="It creates a hard link." />
            <TerminalOutput content={`[root@station1 ~]# unlink link-1
[root@station1 ~]# ls -l
total 0
[root@station1 ~]#
`} />
            <Text text="It is used to unlink a soft/hard link." />

            {/* Supersubheading */}
            <Supersubheading text="Differences Between Soft and Hard Links" />

            {/* Table */}
            <table className='w-full text-left'>
                <thead>
                    <tr className='text-green-400'>
                        <th>Feature</th>
                        <th>Soft Link</th>
                        <th>Hard Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Inode</td>
                        <td>Different inode from target file</td>
                        <td>Shares the same inode as target file</td>
                    </tr>
                    <tr>
                        <td>Filesystem</td>
                        <td>Can link across different filesystems</td>
                        <td>Must be on the same filesystem as target</td>
                    </tr>
                    <tr>
                        <td>Directory Linking</td>
                        <td>Can link to directories</td>
                        <td>Cannot link to directories</td>
                    </tr>
                    <tr>
                        <td>Link Integrity</td>
                        <td>Broken if the target file is deleted</td>
                        <td>Functional even if original file is deleted</td>
                    </tr>
                    <tr>
                        <td>Usage</td>
                        <td>Used for shortcuts across filesystems</td>
                        <td>Maintains multiple filenames for the same file</td>
                    </tr>
                </tbody>
            </table>


<Line />
            {/* Supersubheading */}
            <Supersubheading text="Inode Effect on Copy and Move" />
            <Text text="Copy: When copying a file, a new inode is created for the copied file. The original and copied files have different inodes." />

            <Text text="Move: Within the same filesystem: The inode remains the same, as the file is essentially renamed in the directory structure." />
            <Text text="Across different filesystems: A new inode is created, as the file is copied and then deleted from the original filesystem." />

            {/* Supersubheading */}
            <Supersubheading text="Inode Effect on Soft and Hard Links" />

            {/* Text */}
            <Text text="Soft Link: A soft link has its own inode and points to the pathname of the target file." />
            <Text text="Hard Link: A hard link shares the same inode as the original file, making it act as a replica of the original." />
        </div>
    );
};

export default InodePage;