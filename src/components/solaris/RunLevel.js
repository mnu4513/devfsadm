import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text, Image } from "../utils/Comps";

const RunLevelInSolaris = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Run Levels in Solaris`} />

      <Text text={`In Solaris, run levels define the operational state of the system and determine which services are available. Each run level corresponds to a specific mode, such as multi-user mode or single-user mode, and controls the system's behavior during startup and shutdown.`} />

      <Text text={`Run levels in Solaris are used to control the number of processes running and the configuration of the system at boot. By setting a particular run level, you can ensure the system behaves according to specific needs like maintenance, networking, or multi-user operations.`} />

      <Line />


      <Subheading text={`Solaris Run Levels Overview:`} />

      <Image imageSrc={`sakaqavccz3uv2dkld9z`} imageAlt={`run-level`}/>

      <Supersubheading text={`Run Level 0: System Halt`} />
      <Text text={`Run level 0 is used to halt the system. When this run level is set, Solaris shuts down the system, halts all services, and powers off the machine (or enters a halted state, depending on the configuration).`} />
      <Text text={`This is typically used for system shutdowns, maintenance, or when performing tasks that require the machine to be powered off.`} />
      <TerminalOutput content={`[root@localhost:~]# init 0`} />

      <Supersubheading text={`Run Level 1: Single User Mode`} />
      <Text text={`Run level 1 is used for single-user mode. It starts only the essential system services required for maintenance or repair tasks. In this mode, only one user (root) can access the system and perform administrative functions.`} />
      <Text text={`This mode is typically used for system recovery, diagnostics, or repair work. It ensures that no other users or services are running, which is useful for troubleshooting.`} />
      <TerminalOutput content={`[root@localhost:~]# init 1`} />

      <Supersubheading text={`Run Level 2: Multi-user Mode without NFS`} />
      <Text text={`Run level 2 is a multi-user mode without Network File System (NFS). This level allows multiple users to log in and run applications but does not start the NFS services. This mode is commonly used for environments where file sharing and NFS are not necessary.`} />
      <Text text={`At this run level, the system will start multiple user services and network services, but NFS will not be available.`} />
      <TerminalOutput content={`[root@localhost:~]# init 2`} />

      <Supersubheading text={`Run Level 3: Multi-user Mode with NFS`} />
      <Text text={`Run level 3 is a multi-user mode with NFS enabled. This run level starts all the necessary services, including NFS and other network services, allowing users to access file systems over the network.`} />
      <Text text={`This level is typically used in production environments where file sharing and access to remote file systems are required.`} />
      <TerminalOutput content={`[root@localhost:~]# init 3`} />

      <Supersubheading text={`Run Level 4: Unused`} />
      <Text text={`Run level 4 is not typically used in Solaris. It is reserved for user-defined purposes, such as creating a custom run level to meet specific requirements. It does not have a predefined purpose in Solaris and can be configured for special needs by system administrators.`} />
      <Text text={`If needed, you can configure services to start or stop based on this run level. However, it is not commonly used by default.`} />
      <TerminalOutput content={`[root@localhost:~]# init 4`} />

      <Supersubheading text={`Run Level 5: Multi-user Mode with X Window System`} />
      <Text text={`Run level 5 is similar to run level 3 but with the addition of the X Window System, which is used for graphical user interfaces (GUIs). This mode is suitable for systems that require both multi-user access and a graphical interface.`} />
      <Text text={`In this run level, Solaris will start the graphical environment along with all multi-user and network services.`} />
      <TerminalOutput content={`[root@localhost:~]# init 5`} />

      <Supersubheading text={`Run Level 6: Reboot`} />
      <Text text={`Run level 6 is used to reboot the system. When this run level is set, Solaris performs a clean reboot, stopping all processes, and then restarts the machine.`} />
      <Text text={`This is typically used when you need to reboot the server for maintenance or after applying changes to the system configuration.`} />
      <TerminalOutput content={`[root@localhost:~]# init 6`} />

      <Line />
      <Subheading text={`Changing and Viewing Run Levels`} />

      <Text text={`To check the current run level in Solaris, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# who -r`} />
      <Text text={`This command will display the current run level of the system, along with the time the system entered that level.`} />

      <Text text={`To change the run level, you can use the 'init' command followed by the desired run level number. For example:`} />
      <TerminalOutput content={`[root@localhost:~]# init 3`} />
      <Text text={`This will change the system to run level 3 (multi-user mode with NFS).`} />

      <Text text={`Changing the run level will immediately impact the services running on the system. Always ensure that you understand the implications of switching run levels, especially in production environments, as it may affect system performance and availability.`} />

      <Line />
      <Subheading text={`Customizing Run Levels`} />

      <Text text={`Solaris allows you to customize run levels according to your specific needs. For example, you can modify which services are started at each run level. This is done by editing the initialization files (e.g., /etc/inittab) or using the 'svcadm' command to manage service states.`} />
      <Text text={`For example, to disable or enable a service in a particular run level, you can use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# svcadm disable service_name`} />
      <TerminalOutput content={`[root@localhost:~]# svcadm enable service_name`} />

      <Text text={`You can also add or remove services in specific run levels by modifying service configurations in the Solaris service management framework.`} />

    </div>
  );
};

export default RunLevelInSolaris;
