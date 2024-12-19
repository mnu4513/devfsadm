import React from 'react';
import {  Heading, Subheading, Text, Supersubheading, TerminalOutput } from '../utils/Comps';

const ChattrCommand = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="File Attribute Control with chattr in Linux" />

            <Subheading text="chattr" />
            <Text text="The `chattr` command allows you to change file or directory attributes, providing an extra layer of protection by preventing unauthorized changes, even from the superuser." />

            <Supersubheading text="Usecases of chattr" />
            <Text text="chattr is used to prevent accidental changes or deletions, and to secure critical files or directories. This command can be useful in safeguarding files from direct and indirect attacks." />

            <Subheading text="chattr Commands" />

            <Supersubheading text="Adding Attributes" />
            <TerminalOutput content={`[root@station1 ~]# chattr +i file-1
[root@station1 ~]# chattr +a file-1
[root@station1 ~]#
`} />
            <Text text="The `+` operator adds an attribute to a file or directory. This action restricts specific changes to the file, and by default, only superusers can apply attributes." />

            <Supersubheading text="Removing Attributes" />
            <TerminalOutput content={`[root@station1 ~]# chattr -i file-1
[root@station1 ~]# chattr -a file-1
[root@station1 ~]#
`} />
            <Text text="The `-` operator removes an attribute from a file or directory. By default, only superusers can remove these attributes." />

            <Subheading text="Important chattr Attributes" />

            <Supersubheading text="Append-Only (a)" />
            <TerminalOutput content={`[root@station1 ~]# chattr +a dir
[root@station1 ~]# touch dir/file
[root@station1 ~]# rm -rf dir/file
rm: cannot remove 'dir/file': Operation not permitted
[root@station1 ~]#
`} />
            <Text text="If the `a` attribute is set, the file can only be read or appended to. You cannot delete, rename, or modify the file's existing content." />

            <Supersubheading text="Immutable (i)" />
            <TerminalOutput content={`[root@station1 ~]# chattr +i file-1
[root@station1 ~]# rm -rf file-1
rm: cannot remove 'file-1': Operation not permitted
[root@station1 ~]#
`} />
            <Text text="When the `i` attribute is set, the file becomes completely immutable, meaning it can only be read or copied, but no changes can be made." />

            <Supersubheading text="Listing Attributes" />
            <TerminalOutput content={`[root@station1 ~]# lsattr file-1
----i----------------- file-1
[root@station1 ~]#
`} />
            <Text text="The `lsattr` command lists the attributes applied to files or directories. Both superusers and regular users can run this command to view the current attributes." />

            <Text text=" Only users with superuser privileges can modify the attributes of files or directories using the `chattr` command." />
        </div>
    );
};

export default ChattrCommand;