import React from 'react';
import { Heading, Subheading, Supersubheading, Text } from '../utils/Comps';

const DataCreationLinux = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            
            <Heading text="Basic Data Creation in Linux OS" />
            
            <Text text="In Linux, the file system is structured hierarchically with the root directory serving as the top-level directory, often referred to as the parent directory or root partition. This root directory is crucial as it contains all other directories and files on the system." />
            <Text text="During the installation of Linux OS, approximately 20 default subdirectories are automatically created within the root directory. These directories are essential for the management and operation of the Linux OS, each serving a specific purpose according to the system’s defined rules." />
            <Text text="Among these default directories, two are specifically reserved for user home accounts:" />

            <Supersubheading text="1. Home Directory for the Superuser (root)" />
            <Text text="This directory is dedicated to the root user, who has administrative privileges over the entire system." />

            <Supersubheading text="2. Home Directory for Other Users" />
            <Text text="This directory is intended for the normal, non-privileged users of the system." />

            <Subheading text="Types of Data" />
            <Text text="Data in Linux can be categorized into two types:" />
            
            <Supersubheading text="1. Default Data" />
            <Text text="• Also known as service-defined or OS-defined data." />
            <Text text="• This includes data created during the OS installation or generated subsequently by the installation of services or software packages." />
            
            <Supersubheading text="2. Customized Data" />
            <Text text="• Also known as user-defined data." />
            <Text text="• This includes data created by users after the OS installation, including files and directories tailored to the user’s needs." />

            <Subheading text="Data Creation Rules" />
            <Text text="There are two primary locations where data can be created:" />

            <Supersubheading text="1. Personal Home Directory (Private Place)" />
            <Text text="• Each user has their own home directory." />
            <Text text="• Users have default rights to create and modify data within their own home directory." />
            <Text text="• This space is considered private to each user." />

            <Supersubheading text="2. Public Place" />
            <Text text="• Refers to all locations under the root directory ('/') excluding the home directories of individual users." />
            <Text text="• In public areas, every user can create and modify data based on the permissions defined." />
            <Text text="• By default, normal users have read-only access to public places, while the root user has full permissions to create, modify, and delete data in both public and private locations." />

        </div>
    );
};

export default DataCreationLinux;