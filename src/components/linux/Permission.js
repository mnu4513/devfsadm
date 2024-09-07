import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const BasicPermissions = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            <Heading text="File Permissions and Ownership in Linux" />

            <Subheading text="Permissions in Linux" />
            <Text text="Linux permissions can be categorized into two main types: File and Directory-Based Permissions, and Command Execution-Based Permissions." />

            <Subheading text="Ways to Manage Permissions" />
            <Text text="Commands to manage file and directory permissions include:" />
            <Text text="• chmod: Change file mode (permissions)" />
            <Text text="• chown: Change file owner and group" />
            <Text text="• chgrp: Change group ownership" />
            <Text text="• setfacl: Set Access Control Lists (ACLs) for more fine-grained permission control" />
            <Text text="• getfacl: Retrieve ACL information" />

            <Heading text="1. File and Directory-Based Permissions" />
            <Text text="Permissions in Linux consist of the following attributes: Read (r) = 4, Write (w) = 2, Execute (x) = 1." />

            <Subheading text="RWX Permissions for Files" />
            <Text text="• r (Read): Allows reading the file using commands like cat or vi." />
            <Text text="• w (Write): Allows editing the file content." />
            <Text text="• x (Execute): Allows executing the file, necessary for scripts like shell scripts or Python files." />

            <Subheading text="RWX Permissions for Directories" />
            <Text text="• r (Read): Allows listing the contents of a directory." />
            <Text text="• w (Write): Allows modifying the contents of a directory." />
            <Text text="• x (Execute): Allows entering the directory using the cd command." />

            <Heading text="Permission Structure" />
            <Text text="Each file or directory has three sets of permissions: Owner, Group, and Others." />

            <Subheading text="Common Permission Sets for Files and Directories" />
            <Text text="Files: 0 = No permissions, 4 = Read-only, 6 = Read and write, 5 = Read and execute, 7 = Read, write, and execute." />
            <Text text="Directories: 0 = No permissions, 5 = Read and execute, 7 = Read, write, and execute." />

            <Subheading text="Default Permissions" />
            <Text text="Root User: Directories default to 755, Files default to 644." />
            <Text text="Normal User: Directories default to 775, Files default to 664." />

            <Heading text="Changing Ownership and Permissions" />
            <Subheading text="Ownership Change" />
            <Command command="chown <user_name> <file_name>" />
            <Command command="chown -R <user_name> <dir_name>" />
            <Command command="chgrp <group_name> <file/dir_name>" />
            <Text text="Use chown to change file ownership and chgrp for group ownership." />

            <Subheading text="Permission Change" />
            <Command command="chmod u+x <file>" />
            <Command command="chmod o-rwx <file>" />
            <Command command="chmod a+x <file>" />
            <Text text="Use chmod to modify permissions for users, groups, and others." />

            <Heading text="Checking Permissions" />
            <Command command="ls -l <file_name>" />
            <Command command="ls -ld <file/dir_name>" />
            <Command command="getfacl <file/dir_name>" />
            <Text text="Use ls -l to list file permissions, and getfacl to view ACL details." />

            <Heading text="umask" />
            <Text text="umask defines the default permissions for newly created files and directories. Default values are 644 for files and 755 for directories." />
        </div>
    );
};

export default BasicPermissions;
