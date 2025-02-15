import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

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
      <TerminalOutput content={`[root@localhost:~]# uname -a`} />
      <TerminalOutput content={`[root@localhost:~]# df -h`} />

      <Supersubheading text={`Step 2: Downloading Patch Bundle`} />
      <Text text={`After completing the prechecks, the next step is to download the patch bundle for either Base Repo or SRU Repo from Oracle's My Oracle Support (MOS). You will need an active support contract with Oracle to download the patches.`} />
      <Text text={`Once the patches are downloaded, use FTP tools like WinSCP, FileZilla, or any other FTP/SFTP tool to copy the downloaded patch bundle to the Solaris server.`} />

      <Text text={`After transferring the patch bundle, extract the contents of the installation guide.`} />
      <TerminalOutput content={`[root@localhost:~]# unzip installation-guide.zip`} />
      <Text text={`The extracted installation guide contains the script file 'install-sru.ksh', which will uncompress the patch repository files.`} />

      <Text text={`Before running the script, create an empty directory to store the uncompressed Base or SRU repository data:`} />
      <TerminalOutput content={`[root@localhost:~]# mkdir /opt/sru11.4.69`} />
      <Text text={`Once the directory is created, run the installation script and specify the path of the newly created directory to store the uncompressed data.`} />
      <TerminalOutput content={`[root@localhost:~]# ./install-sru.ksh -d /opt/sru11.4.69`} />
      <Text text={`Repeat this process for both the Base and SRU repositories.`} />

      <Supersubheading text={`Step 3: Setting Up Publisher`} />
      <Text text={`Now that the repositories are uncompressed, we need to set up the publisher for the new repository. Publishers are responsible for identifying the patch repositories and providing the OS with the correct path.`} />

      <Text text={`To view the currently available publishers, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg publisher`} />
      <Text text={`Now, to remove any old publisher configurations, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg unset-publisher old_publishers_name`} />
      <Text text={`Next, set the new publisher for both the SRU and Base repositories by providing the correct path to the repository. For example:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg set-publisher -g file:///opt/sru11.4.69 solaris`} />
      <TerminalOutput content={`[root@localhost:~]# pkg set-publisher -g file:///opt/base11.4 solaris`} />

      <Supersubheading text={`Step 4: Dry Run for Patching`} />
      <Text text={`Before performing the actual patching, it’s recommended to perform a dry run. A dry run simulates the patching process without making any changes to the system. It shows which packages will be updated, removed, or added, and provides an overview of the space required and any potential errors.`} />

      <Text text={`To perform a dry run, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg update -nv`} />
      <Text text={`The '-nv' flags stand for "no install" and "verbose," respectively. This allows you to preview the patching actions and confirm if everything looks correct.`} />

      <Supersubheading text={`Step 5: Final Patching Operation`} />
      <Text text={`After confirming that the dry run completed successfully and no errors are found, you can proceed with the actual patching operation. The final patching operation will update the repositories and create a new boot environment.`} />

      <Text text={`To perform the final patching operation, run:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg update --accept`} />
      <Text text={`The '--accept' flag accepts all patch dependencies and proceeds with the update.`} />

      <Supersubheading text={`Step 6: Boot Environment`} />
      <Text text={`After the patching operation, a new boot environment (BE) will be created. The boot environment allows you to revert to a previous configuration if the new patches cause any issues.`} />

      <Text text={`You can view the available boot environments using the command:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm list`} />
      <Text text={`The output will show all the available boot environments and their current status. The 'N' flag indicates the currently running BE, while the 'R' flag indicates the BE that will be activated after a reboot. A 'NR' flag means that the BE is both running and will be active after the next reboot.`} />

      <Text text={`If you want to activate a different boot environment, use:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm activate be_name`} />

      <Supersubheading text={`Step 7: Rebooting the System`} />
      <Text text={`After completing the patching process and confirming the new boot environment is set, a reboot is required to apply the patches. Until the system is rebooted, the new patches won’t be activated.`} />

      <Text text={`To reboot the system, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# init 6`} />
      <Text text={`After the system reboots, it will come up with the new SRU according to the selected boot environment. You can verify the current boot environment again after the reboot:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm list`} />
      <Text text={`You can also check the updated version of the OS by running:`} />
      <TerminalOutput content={`[root@localhost:~]# uname -a`} />
      <TerminalOutput content={`[root@localhost:~]# pkg list avf entire`} />

      <Supersubheading text={`Step 8: Post-patching Checks`} />
      <Text text={`After rebooting, perform a set of post-patching checks to ensure that all packages have been updated successfully and the system is stable. This includes checking system logs, verifying package versions, and confirming the correct operation of critical services.`} />

      <Text text={`For example, you can check the package status using:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg info`} />
      <Text text={`You can also verify that the patches were successfully applied by checking the installed versions or running health checks on the system.`} />

      <Line />
      <Subheading text={`Roll Back to Previous Version`} />
      <Text text={`If you encounter issues with the new patch, or if you want to roll back to the previous version, you can revert to a previous boot environment (BE) using the following steps:`} />

      <Supersubheading text={`Condition 1: If Application Has Issues with New OS Patch`} />
      <Text text={`First, check the previous boot environment status using the command:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm list`} />
      <Text text={`Next, select the previous boot environment and activate it:`} />
      <TerminalOutput content={`[root@localhost:~]# beadm activate be_name`} />
      <Text text={`It will set the flag 'R' on the previous BE. After this, reboot the server to activate the previous BE:`} />
      <TerminalOutput content={`[root@localhost:~]# init 6`} />

      <Supersubheading text={`Condition 2: If the System Is Not Booting or Not Coming Up`} />
      <Text text={`If the system is stuck and is not booting, you can access the system via console login. The system will show the 'ok >' prompt.`} />
      <TerminalOutput content={`ok >`} />
      <Text text={`From here, list down all the available boot environments using the following command:`} />
      <TerminalOutput content={`ok > boot -L`} />
      <Text text={`It will show all available boot environments. You can then choose and boot from the previous boot environment using the following command:`} />
      <TerminalOutput content={`ok > boot BE_name`} />
      <Text text={`This will boot the system with the previously functional BE.`} />

    </div>
  );
};

export default PatchingProcess;
