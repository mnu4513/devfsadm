import React from 'react';
import { Command, Heading, Subheading, Text } from '../utils/Comps';

const LoginModesAndUsers = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            
            <Heading text="Types of Login Modes in a Linux Machine" />

            <Subheading text="GUI Mode (Graphical User Interface)" />
            <Text text="This mode provides a graphical login screen where users can select their username and enter their password to access the system." />

            <Subheading text="CLI Mode (Command Line Interface)" />
            <Text text="This mode uses a terminal or console where users log in by entering their username and password via text-based commands." />

            <Heading text="Types of Login Users in a Linux Machine" />

            <Subheading text="Super User (Root)" />
            <Text text="Root is the superuser with administrative privileges in Linux." />

            <Subheading text="With GUI" />
            <Text text="When logging in as root in GUI mode, the root user is not displayed in the user list. To log in, select 'Not Listed' and manually enter 'root' as the username followed by the root password." />

            <Subheading text="With CLI" />
            <Text text="In CLI mode, log in as root by entering 'root' as the username and then providing the root password." />
            <Command command="[root@localhost ~]#" />

            <Subheading text="Normal User" />
            <Text text="Normal users have limited privileges compared to the root user." />

            <Subheading text="With GUI" />
            <Text text="In GUI mode, a normal user selects their username from the list on the login screen and enters their password. If the username is not listed, select 'Not Listed' to manually enter it." />

            <Subheading text="With CLI" />
            <Text text="In CLI mode, a normal user enters their username and password to log in." />
            <Command command="[user@localhost ~]$" />

            <Heading text="Command Prompt" />

            <Subheading text="Overview of the Command Prompt" />
            <Text text="The command prompt is a text-based interface where users can enter commands to interact with the system. It displays the username, host, current directory, and either a '#' or '$' symbol." />
            <Text text="The format typically looks like this:" />
            <Command command="[<user_name>@<host_name> <current_directory>] <#/$>" />

            <Subheading text="Command Prompt for Normal User" />
            <Command command="[user@localhost ~]$" />
            <Text text="The '$' symbol denotes a normal user with limited privileges." />

            <Subheading text="Command Prompt for Super User" />
            <Command command="[root@localhost ~]#" />
            <Text text="The '#' symbol denotes the superuser (root) with administrative privileges." />
            
        </div>
    );
};

export default LoginModesAndUsers;