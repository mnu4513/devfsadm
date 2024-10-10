import React from 'react';
import { Heading, Subheading, Text, Command, Note } from '../utils/Comps';

const InodePage = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            {/* Heading */}
            <Heading text="Inode Numbers and Links in Linux" />

            {/* Subheading */}
            <Subheading text="What is an Inode Number?" />

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

            {/* Subheading */}
            <Subheading text="Inode Table in the Filesystem" />

            {/* Text */}
            <Text text="The inode table contains all the inodes for a filesystem. The inode number serves as an index into this table, which stores metadata about the file or directory." />

            {/* Subheading */}
            <Subheading text="Useful Commands for Inodes" />

            {/* Commands */}
            <Command command="ls -lai" />
            <Text text="List files/directories with inode numbers." />
            <Command command="ls -i <file/dir_name>" />
            <Text text="Check inode of a specific file or directory." />

            {/* Subheading */}
            <Subheading text="Links in Linux" />

            {/* Text */}
            <Text text="Links in Linux are pointers that reference the inode of a file or directory. There are two primary types of links: Soft Links (Symbolic Links) and Hard Links." />

            {/* Subheading */}
            <Subheading text="1. Soft Link (Symbolic Link)" />

            {/* Text */}
            <Text text="A soft link is a pointer to the pathname of another file or directory. It points to the file name, not the inode, and can span across different filesystems." />

            {/* Subheading */}
            <Subheading text="Characteristics of Soft Links" />

            {/* Text */}
            <ul>
                <li>Points to the target file or directory by name.</li>
                <li>Can reference files on different filesystems.</li>
                <li>Becomes broken if the target file is deleted.</li>
                <li>Has its own inode, separate from the target file's inode.</li>
            </ul>

            {/* Commands */}
            <Command command="ln -s <source_file/dir> <link_name>" />
            <Text text="Create a soft link." />
            <Command command="unlink <link_name>" />
            <Text text="Unlink a soft link." />

            {/* Subheading */}
            <Subheading text="2. Hard Link" />

            {/* Text */}
            <Text text="A hard link is a direct reference to the inode of a file. This means both the original file and the hard link share the same inode, allowing them to act as the same file." />

            {/* Subheading */}
            <Subheading text="Characteristics of Hard Links" />

            {/* Text */}
            <ul>
                <li>Points directly to the inode of the target file.</li>
                <li>Cannot span across different filesystems.</li>
                <li>Remains functional if the original file is deleted.</li>
                <li>Cannot be created for directories (without special flags).</li>
            </ul>

            {/* Commands */}
            <Command command="ln <source_file> <link_name>" />
            <Text text="Create a hard link." />
            <Command command="unlink <link_name>" />
            <Text text="Unlink a hard link." />

            {/* Subheading */}
            <Subheading text="Differences Between Soft and Hard Links" />

            {/* Table */}
            <table className='w-full text-left'>
                <thead>
                    <tr>
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

            {/* Subheading */}
            <Subheading text="Inode Effect on Copy and Move" />

            {/* Subheading */}
            <Subheading text="Inode Effect on Copy (cp)" />

            {/* Text */}
            <Text text="When copying a file, a new inode is created for the copied file. The original and copied files have different inodes." />

            {/* Subheading */}
            <Subheading text="Inode Effect on Move (mv)" />

            {/* Text */}
            <Text text="Within the same filesystem: The inode remains the same, as the file is essentially renamed in the directory structure." />
            <Text text="Across different filesystems: A new inode is created, as the file is copied and then deleted from the original filesystem." />

            {/* Subheading */}
            <Subheading text="Inode Effect on Soft and Hard Links" />

            {/* Text */}
            <Text text="Soft Link: A soft link has its own inode and points to the pathname of the target file." />
            <Text text="Hard Link: A hard link shares the same inode as the original file, making it act as a replica of the original." />
        </div>
    );
};

export default InodePage;
