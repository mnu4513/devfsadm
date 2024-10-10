import React from 'react';
import { Heading, Subheading, Text, Command, Note } from '../utils/Comps';

const RPMPage = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      
      <Heading text="Red Hat Package Manager (RPM)" />
      
      <Text text="RPM is a package management system used to manage software packages in Linux distributions. It helps in installing, updating, and removing software packages." />
      
      <Subheading text="RPM Naming Syntax" />
      <Text text="The naming convention for RPM packages includes the following components:" />
      <Text text="1. RPM Name: The name of the package." />
      <Text text="2. Version: The version number of the package." />
      <Text text="3. Release: Indicates the OS release, such as el5 for RHEL-5, el6, el7, el8, etc." />
      <Text text="4. Architecture: Specifies the architecture, e.g., x86_64 for 64-bit, i686 for 32-bit, or noarch for architecture-independent packages." />
      <Text text="5. Extension: .rpm" />
      
      <Subheading text="RPM Installation Tools or Utilities" />
      <Text text="1. rpm: The basic command-line utility for managing RPM packages. It does not resolve dependencies automatically." />
      <Text text="2. yum: A higher-level tool that can automatically resolve dependencies and install them along with the requested package." />
      
      <Subheading text="Ways to Obtain RPMs for Linux Machines" />
      <Text text="1. ISO Image: Connect an ISO image and access the available packages." />
      <Text text="2. Red Hat Network (RHN): Download packages from Red Hat's support network." />
      <Text text="3. Third-Party Vendors: Download packages from external sources, such as Nagios or Chrome." />
      <Text text="4. Open Source Repositories: Use repositories like EPEL (Extra Packages for Enterprise Linux) or Flathub." />
      <Text text="5. In-house Packages: Packages developed by an in-house development team." />
      <Text text="In RHEL-7, all RPM packages were found in the Packages directory. In RHEL-8, there are two main directories:" />
      <Text text="• BaseOS: Contains the core operating system packages and repodata." />
      <Text text="• AppStream: Contains additional software packages and repodata." />

      <Heading text="Package Management: Query, Installation, Removal, Upgradation" />
      
      <Subheading text="Query" />
      <Command command="# rpm -qa" />
      <Command command="# rpm -qa | wc -l" />
      <Text text="To list all installed packages." />
      
      <Command command="# rpm -qa <package_name>" />
      <Command command="# rpmquery <package_name>" />
      <Text text="To check if a specific package is installed." />
      
      <Command command="# rpm -qa | grep -i <string>" />
      <Text text="To search for packages with a specific keyword or string." />
      
      <Command command="# rpm -qpR <package.rpm>" />
      <Text text="To check all dependencies of a package before installation." />
      
      <Command command="# rpm -qR <package_name>" />
      <Text text="To check all dependencies of a package after installation." />
      
      <Command command="# rpm -qi <package_name>" />
      <Text text="To get details about an installed package." />
      
      <Command command="# rpm -qd <package_name>" />
      <Text text="To check manual pages and documentation of an installed package." />
      
      <Command command="# rpm -ql <package_name>" />
      <Text text="To list all files installed by a package." />
      
      <Command command="# rpm -qc <package_name>" />
      <Text text="To view the configuration files of a package." />
      
      <Command command="# rpm -qf <file_name>" />
      <Text text="To find the package that provides a specific file." />
      
      <Command command="# rpm -qf </usr/bin/...>" />
      <Text text="To find the package that provides a specific service." />
      
      <Subheading text="Options" />
      <Text text="-q: Query, -a: All, -p: Pre-requisites, -R: Required dependencies, -i: Information, -d: Documentation files, -l: List files, -c: Configuration files." />

      <Subheading text="Removal" />
      <Command command="# rpm -e <package_name>" />
      <Text text="To remove a package." />
      
      <Command command="# rpm -e <package_name> --nodeps" />
      <Text text="To remove a package even if it is a dependency for other packages." />
      
      <Subheading text="Options" />
      <Text text="-e: Erase/remove package, --nodeps: Remove even if it is a dependency for other packages." />

      <Subheading text="Installation" />
      <Command command="# rpm -ivh <package.rpm>" />
      <Text text="To install a package." />
      
      <Subheading text="Options" />
      <Text text="-i: Install the package, -v: Verbose mode, -h: Show progress with hash marks." />

      <Subheading text="Upgradation" />
      <Command command="# rpm -Uvh <package_name>" />
      <Text text="To upgrade a package." />
      
      <Subheading text="Options" />
      <Text text="-U: Upgrade the package." />
      
    </div>
  );
};

export default RPMPage;
