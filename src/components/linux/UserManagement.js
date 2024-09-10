import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const UserManagement = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="User Management in Linux" />

            <Subheading text="Who is a User?" />
            <Text text="A user is a person with a unique identity to access a server machine. The user can operate, configure, and monitor any live server." />
            <Text text="By default, the root user (superuser) is automatically created during installation." />

            <Heading text="User Related Commands" />
            <Subheading text="Adding a New User" />
            <Command command="useradd <options> <user_name>" />
            <Text text="Adds a new user to the system." />

            <Subheading text="Modifying User Information" />
            <Command command="usermod <options> <user_name>" />
            <Text text="Modifies existing user information." />

            <Subheading text="Deleting a User" />
            <Command command="userdel <options> <user_name>" />
            <Text text="Deletes a user from the system." />

            <Subheading text="Setting User Password" />
            <Command command="passwd <options> <user_name>" />
            <Text text="Sets or changes the password for a user." />

            <Subheading text="Checking User ID and Group IDs" />
            <Command command="id <user_name>" />
            <Text text="Displays the user ID (UID) and group IDs (GID) for a user." />

            <Subheading text="Listing Groups for a User" />
            <Command command="groups <user_name>" />
            <Text text="Lists all groups (primary & secondary) for a specific user." />

            <Subheading text="Switching Users" />
            <Command command="su - <user_name>" />
            <Text text="Switches to another user." />

            <Subheading text="Logging Out the Current User" />
            <Command command="exit" />
            <Text text="Logs out the currently logged-in user." />

            <Heading text="User-Related Information Files" />
            <Subheading text="/etc/passwd" />
            <Text text="This file contains user details with 7 fields separated by a colon (:)." />
            <Text text="Fields include: username, password pointer, UID, GID, comment, home directory, and shell type." />

            <Subheading text="/etc/default/useradd" />
            <Text text="Contains default settings for adding users." />

            <Subheading text="/etc/default/passwd" />
            <Text text="Displays user creation policy and password settings." />

            <Subheading text="/etc/shadow" />
            <Text text="Contains user passwords in encrypted format and includes password policies." />

            <Subheading text="/etc/group" />
            <Text text="Contains group details divided into 4 fields: group name, password pointer, GID, and list of users in the group." />

            <Subheading text="/etc/gshadow" />
            <Text text="Contains group information in encrypted format." />

            <Heading text="UID and GID" />
            <Subheading text="What is UID?" />
            <Text text="UID (User ID) is a unique identifier for each user, which remains constant throughout the user's existence." />

            <Subheading text="What is GID?" />
            <Text text="GID (Group ID) represents the user's group. A user can have multiple GIDs, but one primary GID, and Unix-based systems use the User Primary Group (UPG) scheme." />

            <Subheading text="Range of UID and GID" />
            <Text text="The range of UID and GID is between 0 and 60000, divided into three parts." />
            <Text text="1. Superuser (root) - UID 0, GID 0 (created by default)." />
            <Text text="2. System or Service Users - UID/GID 1 to 999 (generated automatically)." />
            <Text text="3. Normal Users - UID/GID 1000 to 60000 (created by superusers)." />
            <Command command="cat /etc/login.defs" />
            <Text text="Use this command to view the UID and GID range." />

            <Heading text="Adding and Modifying Users" />
            <Subheading text="Adding a New User with Default Parameters" />
            <Command command="useradd <user_name>" />
            <Text text="Adds a new user with default settings." />

            <Subheading text="Adding a New User with Custom Parameters" />
            <Command command="useradd <options> <value> <user_name>" />
            <Text text="Adds a user with custom parameters such as a custom shell, UID, or GID." />

            <Subheading text="Modifying User Information" />
            <Command command="usermod <options> <value> <user_name>" />
            <Text text="Modifies user information, including renaming login names, changing home directories, or updating UID/GID." />

            <Heading text="Locking and Unlocking User Accounts" />
            <Subheading text="Locking a User Account" />
            <Command command="usermod -L <user_name>" />
            <Text text="Locks a user account by preventing the system from reading the user's password during login." />

            <Command command="passwd -l <user_name>" />
            <Text text="Locks a user account with an acknowledgment." />

            <Subheading text="Unlocking a User Account" />
            <Command command="passwd -u <user_name>" />
            <Text text="Unlocks a locked user account." />

            <Subheading text="Checking Account Status" />
            <Command command="passwd -S <user_name>" />
            <Text text="Checks whether the user account is locked (LK) or active (PS)." />

            <Subheading text="Deleting a User" />
            <Command command="userdel <user_name>" />
            <Text text="Deletes a user but keeps their home directory and mail." />

            <Command command="userdel -rf <user_name>" />
            <Text text="Deletes a user and all associated data (home directory, mail account, etc.)." />

            <Heading text="Recovering User Bash Profile Files" />
            <Text text="In case of accidental deletion of bash profile files in a user's home directory, you can restore them from the backup at `/etc/skel`. Alternatively, you can check the default backup location in `/etc/default/useradd`." />

            <Heading text="Creating a User Without `useradd` Command" />
            <Text text="You can manually create a user by following these steps:" />
            <Text text="1. Create a home directory for the user under `/home`." />
            <Text text="2. Add an entry for the user in `/etc/passwd` with the username, UID, GID, home directory, and shell." />
            <Text text="3. Make corresponding entries in `/etc/group` for the user's group." />
            <Text text="4. Set ownership of the home directory to the new user and change the group ownership." />
            <Text text="5. Change the home directory's permissions to 700." />
            <Text text="6. Copy necessary files from `/etc/skel` to the new home directory." />
            <Text text="This process successfully creates a user without the need for the `useradd` command." />

            <Note text="Note: User management is critical for maintaining security and operational efficiency in multi-user environments." />
        </div>
    );
};

export default UserManagement;
