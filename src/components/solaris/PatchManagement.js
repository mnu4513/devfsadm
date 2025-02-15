import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text, Image } from "../utils/Comps";

const PatchingProcess = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Patching Process in Solaris`} />

      <Text text={`Patching in Solaris is a critical procedure used to keep the operating system up-to-date with the latest security patches, bug fixes, and system improvements. The patching process involves using Oracle-provided patch bundles and applying them using commands like 'pkg' to update system packages. There are two main types of patches: Base Repo Patch and SRU (Support Repository Update) Patch.`} />

      <Supersubheading text={`1. Base Repo Patch`} />
      <Text text={`Base Repo Patch refers to the core patch repository, which contains the essential patches for Solaris OS. These patches are usually more general updates to the Solaris environment, such as security updates, kernel fixes, or enhancements.`} />

      <Supersubheading text={`2. SRU Patch`} />
      <Text text={`SRU patches are specific patches that are used for support and stability updates. These patches address particular system components and offer fixes or improvements. They are bundled into SRU files that can be downloaded from Oracle's My Oracle Support (MOS).`}/>

      <Text text={`Before beginning the patching process, we need to perform several preparatory steps, such as checking the system state, identifying the patch versions, and ensuring the server is ready for patching.`} />

      <Line />
      <Subheading text={`Steps to patching process in Solaris:`} />

      <Supersubheading text={`Step 1: Prechecks`} />
      <Text text={`Before applying patches, it’s essential to perform prechecks on the server. This helps ensure that the system is in a good state before proceeding with the patching process. Some of the prechecks include verifying the server’s current version, available disk space, and confirming that the server is running without any critical errors.`} />
      <Text text={`For example, use the following commands to check the current version of Solaris and disk space:`} />
      <TerminalOutput content={`[root@localhost:~]# uname -a
SunOS OEM 5.11 11.4.69.170.2 sun4v sparc sun4v logical-domain
[root@localhost:~]#`} />
      <TerminalOutput content={`[root@localhost:~]# df -h
Filesystem             Size   Used  Available Capacity  Mounted on
/dev                      0      0          0     0%    /dev
fd                        0      0          0     0%    /dev/fd
/devices                  0      0          0     0%    /devices
sharefs                   0      0          0     0%    /etc/dfs/sharetab
mnttab                    0      0          0     0%    /etc/mnttab
proc                      0      0          0     0%    /proc
ctfs                      0      0          0     0%    /system/contract
objfs                     0      0          0     0%    /system/object
swap                  41.3G    11M      41.3G     1%    /system/volatile
swap                  41.3G  1.24M      41.3G     1%    /tmp
rpool                  392G   384K       323G     1%    /rpool
[root@localhost:~]#`} />
<TerminalOutput content={`[root@localhost:~]# zpool list
NAME            SIZE  ALLOC  FREE  CAP  DEDUP  HEALTH  ALTROOT
database        149G  43.4G  106G  29%  1.00x  ONLINE  -
application    99.5G  59.5G   40G  59%  1.00x  ONLINE  -
rpool           398G  67.4G  331G  16%  1.00x  ONLINE  -
[root@localhost:~]#`}/>

      <Supersubheading text={`Step 2: Downloading Patch Bundle`} />
      <Text text={`After completing the prechecks, the next step is to download the patch bundle for either Base Repo or SRU Repo from Oracle's My Oracle Support (MOS). You will need an active support contract with Oracle to download the patches.`} />
      <Text text={`Once the patches are downloaded, use FTP tools like WinSCP, FileZilla, or any other FTP/SFTP tool to copy the downloaded patch bundle to the Solaris server.`} />

      <Image imageSrc={`mypopnykectzb02cwvqv`} imageAlt={`mos_page`}/>
      <Image imageSrc={`nrexg1pfgyx65jyjfh9a`} imageAlt={`installaton_guide`}/>
      <Image imageSrc={`gph6zgiyjynsrzgoaauo`} imageAlt={`ips_repo`}/>

      <Text text={`After transferring the patch bundle, extract the contents of the installation guide.`} />
      <TerminalOutput content={`[root@localhost:~]#  unzip p37322549_1100_SOLARIS64.zip
  Archive:  p37322549_1100_SOLARIS64.zip
  inflating: README-zipped-repo.txt
  inflating: install-repo.ksh
  inflating: sol-11_4_76_182_1-incr-repo_digest.txt
  inflating: sol-11_4_76_182_1-readme.html
  inflating: sol-11_4_76_182_1-readme.txt
[root@localhost:~]#`} />
      <Text text={`The extracted installation guide contains the script file 'install-sru.ksh', which will uncompress the patch repository files.`} />

      <Text text={`Before running the script, create an empty directory to store the uncompressed Base or SRU repository data:`} />
      <TerminalOutput content={`[root@localhost:~]# mkdir /opt/sru11.4.69`} />
      <Text text={`Once the directory is created, run the installation script and specify the path of the newly created directory to store the uncompressed data.`} />
      <TerminalOutput content={`[root@localhost:~]# ./install-repo.ksh -d /opt/sru11.4.69
Using p37322547_1100_SOLARIS64 files for sol-11_4_76_182_1-incr-repo download.
Uncompressing p37322547_1100_SOLARIS64_1of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_2of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_3of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_4of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_5of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_6of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_7of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_8of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_9of10.zip...done.
Uncompressing p37322547_1100_SOLARIS64_10of10.zip...done.
Repository can be found in /opt/SRU11.4.76.
[root@localhost:~]#`} />
      <Text text={`Repeat this process for both the Base and SRU repositories.`} />

      <Supersubheading text={`Step 3: Setting Up Publisher`} />
      <Text text={`Now that the repositories are uncompressed, we need to set up the publisher for the new repository. Publishers are responsible for identifying the patch repositories and providing the OS with the correct path.`} />

      <Text text={`To view the currently available publishers, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg publisher
PUBLISHER                   TYPE     STATUS P LOCATION
solaris                     origin   online F file:///mnt/SRU11.4.69/
[root@localhost:~]#`} />
      <Text text={`Now, to remove any old publisher configurations, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg unset-publisher solaris`} />
      <Text text={`Next, set the new publisher for both the SRU and Base repositories by providing the correct path to the repository. For example:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg set-publisher -g file:///opt/SRU11.4.76 solaris`} />
      <TerminalOutput content={`[root@localhost:~]# pkg set-publisher -g file:///opt/Base11.4 solaris`} />

      <Supersubheading text={`Step 4: Dry Run for Patching`} />
      <Text text={`Before performing the actual patching, it’s recommended to perform a dry run. A dry run simulates the patching process without making any changes to the system. It shows which packages will be updated, removed, or added, and provides an overview of the space required and any potential errors.`} />

      <Text text={`To perform a dry run, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]#~# pkg update -nv
            Packages to update:         3
     Estimated space available: 167.05 GB
Estimated space to be consumed:  77.15 MB
       Create boot environment:        No
Create backup boot environment:       Yes
          Rebuild boot archive:        No

Changed packages:
solaris
  consolidation/ddt/ddt-incorporation
    24.2.24.4.16 -> 24.4.24.10.15
  support/explorer
    24.2.24.4.16 -> 24.4.24.10.15
  system/diagnostic/stackdb
    11.4-11.4.69.0.1.170.2 -> 11.4-11.4.76.0.1.182.1

[root@localhost:~]#~#`} />
      <Text text={`The '-nv' flags stand for "no install" and "verbose," respectively. This allows you to preview the patching actions and confirm if everything looks correct.`} />

      <Supersubheading text={`Step 5: Final Patching Operation`} />
      <Text text={`After confirming that the dry run completed successfully and no errors are found, you can proceed with the actual patching operation. The final patching operation will update the repositories and create a new boot environment.`} />

      <Text text={`To perform the final patching operation, run:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg update --accept`} />
      <Text text={`The '--accept' flag accepts all patch dependencies and proceeds with the update.`} />

      <Supersubheading text={`Step 6: Boot Environment`} />
      <Text text={`After the patching operation, a new boot environment (BE) will be created. The boot environment allows you to revert to a previous configuration if the new patches cause any issues.`} />

      <Text text={`You can view the available boot environments using the command:`} />
      <TerminalOutput content={`[root@localhost:~]#~# beadm list
BE Name       Flags Mountpoint Space   Policy Created
------------- ----- ---------- ------- ------ ----------------
11.4.69.170.2 N     /          138.24G static 2024-03-17 15:37
solaris       -     -          1.48G   static 2024-02-23 17:37
11.4.76.170.1 R     /          138.24G static 2024-12-17 13:31
[root@localhost:~]#~#`} />
      <Text text={`The output will show all the available boot environments and their current status. The 'N' flag indicates the currently running BE, while the 'R' flag indicates the BE that will be activated after a reboot. A 'NR' flag means that the BE is both running and will be active after the next reboot.`} />

      <Text text={`If you want to activate a different boot environment, use:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm activate 11.4.69.170.2`} />

      <Supersubheading text={`Step 7: Rebooting the System`} />
      <Text text={`After completing the patching process and confirming the new boot environment is set, a reboot is required to apply the patches. Until the system is rebooted, the new patches won’t be activated.`} />

      <Text text={`To reboot the system, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# init 6`} />
      <Text text={`After the system reboots, it will come up with the new SRU according to the selected boot environment. You can verify the current boot environment again after the reboot:`} />
      <TerminalOutput content={`[root@localhost:~]#~# beadm list
BE Name       Flags Mountpoint Space   Policy Created
------------- ----- ---------- ------- ------ ----------------
11.4.69.170.2 -     /          138.24G static 2024-03-17 15:37
solaris       -     -          1.48G   static 2024-02-23 17:37
11.4.76.170.1 NR    /          138.24G static 2024-12-17 13:31
[root@localhost:~]#~#`} />
      <Text text={`You can also check the updated version of the OS by running:`} />
      <TerminalOutput content={`[root@localhost:~]# uname -a
SunOS OEM 5.11 11.4.76.170.1 sun4v sparc sun4v logical-domain
[root@localhost:~]#`} />
      <TerminalOutput content={`[root@localhost:~]#~# pkg list avf entire
NAME (PUBLISHER)                                  VERSION                    IFO
entire                                            11.4-11.4.76.0.1.170.1     i--

pkg list: no packages matching the following patterns are installed:
  avf
[root@localhost:~]#~#`} />

      <Supersubheading text={`Step 8: Post-patching Checks`} />
      <Text text={`After rebooting, perform a set of post-patching checks to ensure that all packages have been updated successfully and the system is stable. This includes checking system logs, verifying package versions, and confirming the correct operation of critical services.`} />

      <Text text={`For example, you can check the package status using:`} />
      <TerminalOutput content={`[root@localhost:~]#~# pkg info | more
             Name: archiver/gnu-tar
          Summary: GNU version of the tar archiving utility
      Description: Tar is a program for packaging a set of files as a single
                   archive in tar format.
         Category: Development/GNU
            State: Installed
        Publisher: solaris
          Version: 1.35
           Branch: 11.4.69.0.1.170.1
   Packaging Date: May  3, 2024 at  3:03:27 PM
Last Install Time: January 31, 2024 at  8:27:41 PM
 Last Update Time: June 17, 2024 at 10:16:22 AM
             Size: 2.62 MB
             FMRI: pkg://solaris/archiver/gnu-tar@1.35-11.4.69.0.1.170.1:20240503T150327Z
      Project URL: https://www.gnu.org/software/tar
       Source URL: https://ftp.gnu.org/gnu/tar/tar-1.35.tar.bz2

             Name: audio/audio-utilities
          Summary: Audio Applications
      Description: Audio applications including audioconvert(1), audioplay(1),
                   audiorecord(1) and audiotest(1)
         Category: System/Media
            State: Installed
        Publisher: solaris
          Version: 11.4
           Branch: 11.4.69.0.1.170.2
   Packaging Date: May 17, 2024 at  2:59:37 AM
Last Install Time: June  4, 2024 at  6:07:54 AM
 Last Update Time: June 17, 2024 at 10:16:22 AM
             Size: 913.01 kB
             FMRI: pkg://solaris/audio/audio-utilities@11.4-11.4.69.0.1.170.2:20240517T025937Z

             Name: codec/flac
          Summary: Free Lossless Audio Codec
         Category: System/Multimedia Libraries
            State: Installed
        Publisher: solaris
          Version: 1.4.2
           Branch: 11.4.69.0.1.170.1
   Packaging Date: May  3, 2024 at  3:03:38 PM
Last Install Time: June  4, 2024 at  6:07:54 AM
 Last Update Time: June 17, 2024 at 10:16:22 AM
             Size: 6.80 MB
             FMRI: pkg://solaris/codec/flac@1.4.2-11.4.69.0.1.170.1:20240503T150338Z
       Source URL: http://downloads.xiph.org/releases/flac/flac-1.4.2.tar.xz
[root@localhost:~]#~#`} />
      <Text text={`You can also verify that the patches were successfully applied by checking the installed versions or running health checks on the system.`} />

      <Line />
      <Subheading text={`Roll Back to Previous Version`} />
      <Text text={`If you encounter issues with the new patch, or if you want to roll back to the previous version, you can revert to a previous boot environment (BE) using the following steps:`} />

      <Supersubheading text={`Condition 1: If Application Has Issues with New OS Patch`} />
      <Text text={`First, check the previous boot environment status using the command:`} />
      <TerminalOutput content={`[root@localhost:~]#~# beadm list
BE Name       Flags Mountpoint Space   Policy Created
------------- ----- ---------- ------- ------ ----------------
11.4.69.170.2 N     /          138.24G static 2024-03-17 15:37
solaris       -     -          1.48G   static 2024-02-23 17:37
11.4.76.170.1 R     /          138.24G static 2024-12-17 13:31
[root@localhost:~]#~#`} />
      <Text text={`Next, select the previous boot environment and activate it:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm activate 11.4.69.170.2`} />
      <Text text={`It will set the flag 'R' on the previous BE. After this, reboot the server to activate the previous BE:`} />
      <TerminalOutput content={`[root@localhost:~]# init 6`} />

      <Supersubheading text={`Condition 2: If the System Is Not Booting or Not Coming Up`} />
      <Text text={`If the system is stuck and is not booting, you can access the system via console login. The system will show the 'ok >' prompt.`} />
      <TerminalOutput content={`ok >`} />
      <Text text={`From here, list down all the available boot environments using the following command:`} />
      <TerminalOutput content={`ok > boot -L`} />
      <Text text={`It will show all available boot environments. You can then choose and boot from the previous boot environment using the following command:`} />
      <TerminalOutput content={`ok > boot 11.4.69.170.2`} />
      <Text text={`This will boot the system with the previously functional BE.`} />

    </div>
  );
};

export default PatchingProcess;