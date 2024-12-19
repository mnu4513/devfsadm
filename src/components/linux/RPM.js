import React from 'react';
import { Heading, Supersubheading, Text, Command, Subheading, TerminalOutput } from '../utils/Comps';

const RPMPage = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      
      <Heading text="Red Hat Package Manager (RPM)" />
      
      <Text text="RPM is a package management system used to manage software packages in Linux distributions. It helps in installing, updating, and removing software packages" />
      
      <Supersubheading text="RPM Naming Syntax" />
      <Text text="The naming convention for RPM packages includes the following components:" />
      <Text text="1. RPM Name: The name of the package" />
      <Text text="2. Version: The version number of the package" />
      <Text text="3. Release: Indicates the OS release, such as el5 for RHEL-5, el6, el7, el8, etc" />
      <Text text="4. Architecture: Specifies the architecture, e.g., x86_64 for 64-bit, i686 for 32-bit, or noarch for architecture-independent packages" />
      <Text text="5. Extension: .rpm" />
      
      <Supersubheading text="RPM Installation Tools or Utilities" />
      <Text text="1. rpm: The basic command-line utility for managing RPM packages. It does not resolve dependencies automatically" />
      <Text text="2. yum: A higher-level tool that can automatically resolve dependencies and install them along with the requested package" />
      
      <Supersubheading text="Ways to Obtain RPMs for Linux Machines" />
      <Text text="1. ISO Image: Connect an ISO image and access the available packages" />
      <Text text="2. Red Hat Network (RHN): Download packages from Red Hat's support network" />
      <Text text="3. Third-Party Vendors: Download packages from external sources, such as Nagios or Chrome" />
      <Text text="4. Open Source Repositories: Use repositories like EPEL (Extra Packages for Enterprise Linux) or Flathub" />
      <Text text="5. In-house Packages: Packages developed by an in-house development team" />
      <Text text="In RHEL-7, all RPM packages were found in the Packages directory. In RHEL-8, there are two main directories:" />
      <Text text="• BaseOS: Contains the core operating system packages and repodata" />
      <Text text="• AppStream: Contains additional software packages and repodata" />

      <Subheading text="Package Management: Query, Installation, Removal, Upgradation" />
      
      <Supersubheading text="Query" />
      <Text text="To list all installed packages" />
      <TerminalOutput content={`[root@station1 ~]# rpm -qa
libgcc-11.2.1-9.4.el9.x86_64
linux-firmware-whence-20220209-126.el9_0.noarch
crypto-policies-20220223-1.git5203b41.el9_0.1.noarch
hwdata-0.348-9.3.el9.noarch
tzdata-2022a-1.el9_0.noarch
fonts-filesystem-2.0.5-7.el9.1.noarch
dejavu-sans-fonts-2.37-18.el9.noarch
langpacks-core-font-en-3.0-16.el9.noarch
libreport-filesystem-2.15.2-6.el9.noarch
fuse-common-3.10.2-5.el9.x86_64
dnf-data-4.10.0-5.el9_0.noarch
abattis-cantarell-fonts-0.301-4.el9.noarch
linux-firmware-20220209-126.el9_0.noarch
tracer-common-0.7.5-4.el9.noarch
man-pages-overrides-9.0.0.0-1.el9.noarch
libX11-common-1.7.0-7.el9.noarch
gawk-all-langpacks-5.1.0-6.el9.x86_64
emacs-filesystem-27.2-6.el9.noarch
bind-license-9.16.23-1.el9.noarch
vim-filesystem-8.2.2637-15.el9.noarch
subscription-manager-rhsm-certificates-1.29.26-3.el9_0.x86_64
rhsm-icons-1.29.26-3.el9_0.noarch
redhat-release-eula-9.0-2.17.el9.x86_64
redhat-release-9.0-2.17.el9.x86_64
setup-2.13.7-6.el9.noarch
filesystem-3.16-2.el9.x86_64
efi-filesystem-6-2.el9_0.noarch
basesystem-11-13.el9.noarch
quota-nls-4.06-6.el9.noarch
python3-setuptools-wheel-53.0.0-10.el9.noarch
publicsuffix-list-dafsa-20210518-3.el9.noarch
pkgconf-m4-1.7.3-9.el9.noarch
pcre2-syntax-10.37-3.el9.1.noarch
ncurses-base-6.2-8.20210508.el9.noarch
glibc-gconv-extra-2.34-28.el9_0.x86_64
glibc-langpack-en-2.34-28.el9_0.x86_64
glibc-common-2.34-28.el9_0.x86_64
glibc-2.34-28.el9_0.x86_64
ncurses-libs-6.2-8.20210508.el9.x86_64
bash-5.1.8-4.el9.x86_64
zlib-1.2.11-31.el9.x86_64
popt-1.18-8.el9.x86_64
xz-libs-5.2.5-7.el9.x86_64
libstdc++-11.2.1-9.4.el9.x86_64
libxml2-2.9.13-1.el9.x86_64
libuuid-2.37.4-3.el9.x86_64
libcap-2.48-8.el9.x86_64
libxcrypt-4.4.18-3.el9.x86_64
libcom_err-1.46.5-2.el9.x86_64
bzip2-libs-1.0.8-8.el9.x86_64
libzstd-1.5.1-2.el9.x86_64
libtalloc-2.3.3-1.el9.x86_64
sqlite-libs-3.34.1-5.el9.x86_64
libunistring-0.9.10-15.el9.x86_64
libtevent-0.11.0-1.el9.x86_64
libtdb-1.4.4-1.el9.x86_64
pcre2-10.37-3.el9.1.x86_64
readline-8.1-4.el9.x86_64
elfutils-libelf-0.186-1.el9.x86_64
alternatives-1.20-2.el9.x86_64
jansson-2.14-1.el9.x86_64
libcap-ng-0.8.2-7.el9.x86_64
audit-libs-3.0.7-101.el9_0.2.x86_64
libdhash-0.5.0-51.el9.x86_64
libgpg-error-1.42-5.el9.x86_64
jna-contrib-5.6.0-6.el9.noarch
slf4j-1.7.30-12.el9.noarch
mariadb-java-client-3.0.3-1.el9.noarch
mariadb-server-galera-10.5.13-2.el9.x86_64
mariadb-connector-c-devel-3.2.6-1.el9_0.x86_64
mariadb-connector-odbc-3.1.12-3.el9.x86_64
mariadb-embedded-10.5.13-2.el9.x86_64
[root@station1 ~]#`} />
      <TerminalOutput content={`[root@station1 ~]# rpm -qa | wc -l
711
[root@station1 ~]#
`} />
      
    
      
      <Text text="To check if a specific package is installed" />
      <TerminalOutput content={`[root@station1 ~]# rpm -qa crontabs
crontabs-1.11-27.20190603git.el9_0.noarch
[root@station1 ~]#
`} />
      <TerminalOutput content={`[root@station1 ~]# rpmquery crontabs
crontabs-1.11-27.20190603git.el9_0.noarch
[root@station1 ~]#
`} />
      
      
      <Text text="To search for packages with a specific keyword or string" />
      <TerminalOutput content={`[root@station1 ~]# rpm -qa | grep ssh
libssh-config-0.9.6-3.el9.noarch
libssh-0.9.6-3.el9.x86_64
openssh-8.7p1-8.el9.x86_64
openssh-clients-8.7p1-8.el9.x86_64
openssh-server-8.7p1-8.el9.x86_64
[root@station1 ~]#
`} />
      
      
      <Text text="To check all dependencies of a package before installation" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qa zip-3.0-33.el9.x86_64.rpm
[root@station1 Packages]#
[root@station1 Packages]# rpm -qpR zip-3.0-33.el9.x86_64.rpm
warning: zip-3.0-33.el9.x86_64.rpm: Header V3 RSA/SHA256 Signature, key ID fd431d51: NOKEY
libc.so.6()(64bit)
libc.so.6(GLIBC_2.14)(64bit)
libc.so.6(GLIBC_2.2.5)(64bit)
libc.so.6(GLIBC_2.3)(64bit)
libc.so.6(GLIBC_2.3.4)(64bit)
libc.so.6(GLIBC_2.33)(64bit)
libc.so.6(GLIBC_2.34)(64bit)
libc.so.6(GLIBC_2.4)(64bit)
libc.so.6(GLIBC_2.7)(64bit)
rpmlib(CompressedFileNames) <= 3.0.4-1
rpmlib(FileDigests) <= 4.6.0-1
rpmlib(PayloadFilesHavePrefix) <= 4.0-1
rpmlib(PayloadIsZstd) <= 5.4.18-1
rtld(GNU_HASH)
unzip
[root@station1 Packages]#`} />
      
      
      <Text text="To check all dependencies of a package after installation" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qR openssh-clients
/bin/sh
/bin/sh
/usr/bin/sh
config(openssh-clients) = 8.7p1-8.el9
crypto-policies >= 20200610-1
libc.so.6()(64bit)
libc.so.6(GLIBC_2.14)(64bit)
libc.so.6(GLIBC_2.15)(64bit)
libc.so.6(GLIBC_2.17)(64bit)
libc.so.6(GLIBC_2.2.5)(64bit)
libc.so.6(GLIBC_2.25)(64bit)
libc.so.6(GLIBC_2.26)(64bit)
libc.so.6(GLIBC_2.3)(64bit)
libc.so.6(GLIBC_2.3.4)(64bit)
libc.so.6(GLIBC_2.33)(64bit)
libc.so.6(GLIBC_2.34)(64bit)
libc.so.6(GLIBC_2.4)(64bit)
libc.so.6(GLIBC_2.7)(64bit)
libc.so.6(GLIBC_2.8)(64bit)
libcrypt.so.2()(64bit)
libcrypto.so.3()(64bit)
libcrypto.so.3(OPENSSL_3.0.0)(64bit)
libedit.so.0()(64bit)
libfido2.so.1()(64bit)
libgssapi_krb5.so.2()(64bit)
libgssapi_krb5.so.2(gssapi_krb5_2_MIT)(64bit)
libselinux.so.1()(64bit)
libselinux.so.1(LIBSELINUX_1.0)(64bit)
libz.so.1()(64bit)
openssh = 8.7p1-8.el9
rpmlib(CompressedFileNames) <= 3.0.4-1
rpmlib(FileDigests) <= 4.6.0-1
rpmlib(PayloadFilesHavePrefix) <= 4.0-1
rpmlib(PayloadIsZstd) <= 5.4.18-1
rtld(GNU_HASH)
[root@station1 Packages]#
`} />
      
      


      <Text text="To get details about an installed package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qi crontabs
Name        : crontabs
Version     : 1.11
Release     : 27.20190603git.el9_0
Architecture: noarch
Install Date: Sun 08 Dec 2024 06:34:13 PM IST
Group       : Unspecified
Size        : 21331
License     : Public Domain and GPLv2
Signature   : RSA/SHA256, Wed 23 Mar 2022 04:57:39 PM IST, Key ID 199e2f91fd431d51
Source RPM  : crontabs-1.11-27.20190603git.el9_0.src.rpm
Build Date  : Wed 23 Mar 2022 03:49:13 PM IST
Build Host  : x86-vm-56.build.eng.bos.redhat.com
Packager    : Red Hat, Inc. <http://bugzilla.redhat.com/bugzilla>
Vendor      : Red Hat, Inc.
URL         : https://github.com/cronie-crond/crontabs
Summary     : Root crontab files used to schedule the execution of programs
Description :
This package is used by Fedora mainly for executing files by cron.

The crontabs package contains root crontab files and directories.
You will need to install cron daemon to run the jobs from the crontabs.
The cron daemon such as cronie or fcron checks the crontab files to
see when particular commands are scheduled to be executed.  If commands
are scheduled, it executes them.

Crontabs handles a basic system function, so it should be installed on
your system.
[root@station1 Packages]#
`} />
   

      
      <Text text="To check manual pages and documentation of an installed package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qd crontabs
/usr/share/man/man4/crontabs.4.gz
/usr/share/man/man4/run-parts.4.gz
[root@station1 Packages]#
`} />
      
      
      <Text text="To list all files installed by a package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -ql crontabs
/etc/cron.daily
/etc/cron.hourly
/etc/cron.monthly
/etc/cron.weekly
/etc/crontab
/etc/sysconfig/run-parts
/usr/bin/run-parts
/usr/share/licenses/crontabs
/usr/share/licenses/crontabs/COPYING
/usr/share/man/man4/crontabs.4.gz
/usr/share/man/man4/run-parts.4.gz
[root@station1 Packages]#
`} />
      

      
      <Text text="To view the configuration files of a package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qc crontabs
/etc/crontab
/etc/sysconfig/run-parts
[root@station1 Packages]#
`} />
      
      
      
      <Text text="To find the package that provides a specific file" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qf /etc/ssh/sshd_config
openssh-server-8.7p1-8.el9.x86_64
[root@station1 Packages]#
`} />
      
      
      <Text text="To find the package that provides a specific service" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qf /usr/bin/echo
coreutils-8.32-31.el9.x86_64
[root@station1 Packages]#
`} />
      

      
      <Supersubheading text="Options" />
      <Text text="-q: Query" />
      <Text text="-a: All" />
      <Text text="-p: Pre-requisites" />
      <Text text="-R: Required dependencies" />
      <Text text="-i: Information" />
      <Text text="-d: Documentation files" />
      <Text text="-l: List files" />
      <Text text="-c: Configuration files" />





      <Supersubheading text="Removal" />
      <Text text="To remove a package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -qa zip
zip-3.0-33.el9.x86_64
[root@station1 Packages]# rpm -e zip
[root@station1 Packages]# rpm -qa zip
[root@station1 Packages]#
`} />
    
      
      <Text text="To remove a package even if it is a dependency for other packages" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -e unzip
error: Failed dependencies:
        unzip is needed by (installed) zip-3.0-33.el9.x86_64
[root@station1 Packages]# rpm -e unzip --nodeps
[root@station1 Packages]# rpm -qa unzip
[root@station1 Packages]#
`} />
      
      
      <Supersubheading text="Options" />
      <Text text="-e: Erase/remove package" />
      <Text text={`--nodeps: Remove even if it is a dependency for other packages`} />






      <Supersubheading text="Installation" />
      <Text text="To install a package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -ivh unzip-6.0-56.el9.x86_64.rpm
warning: unzip-6.0-56.el9.x86_64.rpm: Header V3 RSA/SHA256 Signature, key ID fd431d51: NOKEY
Verifying...                          ################################# [100%]
Preparing...                          ################################# [100%]
Updating / installing...
   1:unzip-6.0-56.el9                 ################################# [100%]
[root@station1 Packages]#
`} />
      <Command command="# rpm -ivh <package.rpm>" />
      
      <Supersubheading text="Options" />
      <Text text="-i: Install the package" />
      <Text text="-v: Verbose mode" />
      <Text text="--h: Show progress with hash marks" />





      <Supersubheading text="Upgradation" />
      <Text text="To upgrade a package" />
      <TerminalOutput content={`[root@station1 Packages]# rpm -Uvh unzip-6.0-56.el9.x86_64.rpm
warning: unzip-6.0-56.el9.x86_64.rpm: Header V3 RSA/SHA256 Signature, key ID fd431d51: NOKEY
Verifying...                          ################################# [100%]
Preparing...                          ################################# [100%]
        package unzip-6.0-56.el9.x86_64 is already installed
[root@station1 Packages]#
`} />
    
      
      <Supersubheading text="Options" />
      <Text text="-U: Upgrade the package" />
      
    </div>
  );
};

export default RPMPage;