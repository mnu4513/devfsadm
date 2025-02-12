import React from 'react';
import { Heading, Subheading, Supersubheading, TerminalOutput, Text, Line } from "../utils/Comps";

const Link = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <Heading text={`Soft & Hard Links in Solaris`} />
      
      <Text text={`In Solaris, a link is a connection between a file name and the actual data on the disk. Links enable multiple filenames to be associated with the same file or directory. There are two main types of links in Solaris: hard links and symbolic (soft) links.`} />
      
      <Text text={`With the help of the \`link\` and \`ln\` commands, we can create links for a particular file, making it easier to access the file without needing to provide the full path.`} />

      <Subheading text={`1. Hard Link:`} />
      <Text text={`A hard link is an additional name (directory entry) for an existing file on the disk.`} />
      <Text text={`All hard links to a file share the same inode and disk blocks, meaning that they point directly to the same data on the disk.`} />
      <Text text={`Deleting any link (including the original one) does not remove the actual data until the last link is deleted.`} />
      <Text text={`Hard links cannot span different file systems or partitions. They can only be created within the same file system.`} />

      <Supersubheading text={`1. Create a Hard Link:`} />
      <Text text={`To create a hard link, we use the \`ln\` command, which creates an additional name for an existing file.`} />
      <TerminalOutput content={`[root@localhost ~]# ln original_file hard_link_file
[root@localhost ~]# ls -l
-rw-r--r-- 2 root root 12345 Feb 11 12:34 hard_link_file
-rw-r--r-- 2 root root 12345 Feb 11 12:34 original_file
[root@localhost ~]#`} />
      <Text text={`In this example, we created a hard link \`hard_link_file\` pointing to \`original_file\`. Notice that both files have the same inode number, as shown by the \`ls -l\` command. The number "2" indicates that both filenames are pointing to the same inode.`} />

      <Supersubheading text={`2. Delete a Hard Link:`} />
      <Text text={`To delete a hard link, we can simply use the \`rm\` command to remove the file. Deleting the hard link does not remove the actual data unless it is the last link to the file.`} />
      <TerminalOutput content={`[root@localhost ~]# rm hard_link_file
[root@localhost ~]# ls -l
-rw-r--r-- 1 root root 12345 Feb 11 12:34 original_file
[root@localhost ~]#`} />
      <Text text={`After deleting the \`hard_link_file\`, we can see that \`original_file\` still exists, and the inode count decreased to 1. The data is still accessible via \`original_file\` because it is the last remaining link.`} />

      <Subheading text={`2. Soft (Symbolic) Link:`} />
      <Text text={`A symbolic link (or soft link) is a separate file that contains the path to the target file or directory. It is essentially a pointer to another file or directory.`} />
      <Text text={`Symbolic links are more flexible than hard links, as they can span file systems and partitions.`} />
      <Text text={`If the target file is deleted or moved, the symbolic link becomes broken and no longer points to a valid file.`} />
      
      <Supersubheading text={`1. Create a Soft Link:`} />
      <Text text={`To create a symbolic link, we use the \`ln -s\` command, where the \`-s\` option specifies that it is a symbolic (soft) link.`} />
      <TerminalOutput content={`[root@localhost ~]# ln -s /path/to/original_file symbolic_link_file
[root@localhost ~]# ls -l
lrwxrwxrwx 1 root root 20 Feb 11 12:34 symbolic_link_file -> /path/to/original_file
[root@localhost ~]#`} />
      <Text text={`In this example, we created a symbolic link \`symbolic_link_file\` that points to \`original_file\`. The \`ls -l\` output shows the symbolic link with an arrow indicating the target file it points to.`} />

      <Supersubheading text={`2. Delete a Soft Link:`} />
      <Text text={`To delete a symbolic link, simply use the \`rm\` command. Deleting the symbolic link does not affect the original file or directory.`} />
      <TerminalOutput content={`[root@localhost ~]# rm symbolic_link_file
[root@localhost ~]# ls -l
[root@localhost ~]#`} />
      <Text text={`After deleting the symbolic link \`symbolic_link_file\`, we see that the original file is not affected.`} />
    </div>
  );
}

export default Link;
