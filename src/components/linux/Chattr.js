import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const ChattrCommand = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="File Attribute Control with chattr in Linux" />

            <Subheading text="What is chattr?" />
            <Text text="The `chattr` command allows you to change file or directory attributes, providing an extra layer of protection by preventing unauthorized changes, even from the superuser." />

            <Subheading text="Why Use chattr?" />
            <Text text="chattr is used to prevent accidental changes or deletions, and to secure critical files or directories. This command can be useful in safeguarding files from direct and indirect attacks." />

            <Heading text="Using chattr Commands" />

            <Subheading text="Adding Attributes" />
            <Command command="chattr +<attribute> <file/dir_name>" />
            <Text text="The `+` operator adds an attribute to a file or directory. This action restricts specific changes to the file, and by default, only superusers can apply attributes." />

            <Subheading text="Removing Attributes" />
            <Command command="chattr -<attribute> <file/dir_name>" />
            <Text text="The `-` operator removes an attribute from a file or directory. By default, only superusers can remove these attributes." />

            <Heading text="Important chattr Attributes" />

            <Subheading text="Append-Only (a)" />
            <Command command="chattr +a <file_name>" />
            <Text text="If the `a` attribute is set, the file can only be read or appended to. You cannot delete, rename, or modify the file's existing content." />

            <Subheading text="Immutable (i)" />
            <Command command="chattr +i <file_name>" />
            <Text text="When the `i` attribute is set, the file becomes completely immutable, meaning it can only be read or copied, but no changes can be made." />

            <Heading text="Listing Attributes" />
            <Command command="lsattr <file/dir_name>" />
            <Text text="The `lsattr` command lists the attributes applied to files or directories. Both superusers and regular users can run this command to view the current attributes." />

            <Note text="Note: Only users with superuser privileges can modify the attributes of files or directories using the `chattr` command." />
        </div>
    );
};

export default ChattrCommand;
