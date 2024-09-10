import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const ACLPermissions = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="Access Control List (ACL) in Linux" />

            <Subheading text="What is ACL?" />
            <Text text="Access Control Lists (ACLs) provide more fine-grained permissions to files and directories for specific users or groups, extending the basic permission system." />
            <Text text="ACL permissions take precedence over traditional chmod permissions." />

            <Heading text="Using ACL Commands" />
            <Subheading text="Setting ACL Permissions" />
            <Command command="setfacl -m u:<user>:<permission> <file/dir_name>" />
            <Text text="Use setfacl to modify permissions for specific users or groups." />

            <Subheading text="Checking ACL Permissions" />
            <Command command="getfacl <file/dir_name>" />
            <Text text="Use getfacl to view ACL information for files and directories." />

            <Subheading text="Removing ACL Permissions" />
            <Command command="setfacl --remove-all <file/dir_name>" />
            <Text text="Use this command to remove all ACL permissions from a file or directory." />

            <Subheading text="Zero Permissions for Others" />
            <Command command="setfacl -m o:--- <file_name>" />
            <Text text="This command denies all permissions to 'others'." />

            <Heading text="Types of ACL" />
            <Subheading text="Access ACL" />
            <Text text="Access ACL applies to both files and directories but does not affect subdirectories." />

            <Subheading text="Default ACL" />
            <Command command="setfacl -m d:<u/g/o>:<permission> <dir_name>" />
            <Text text="Default ACLs apply to directories and are inherited by all subdirectories and files within." />

            <Note text="Note: ACL provides greater flexibility and control over file and directory permissions, especially in multi-user environments." />
        </div>
    );
};

export default ACLPermissions;
