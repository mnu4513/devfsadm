import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const RunLevelAndTarget = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
            <Heading text={`Run Level and Target`} />
            <Text text={`Run level or target is used to specify the mode in which we want to run the machine. Although run levels and targets serve the same purpose, they differ in their implementation and management.`} />
            <Text text={`Before RHEL-7, run levels were used to control the state of the machine, but in RHEL-7 and later, targets replaced run levels. This shift was part of the transition from the older SysV init system to the newer systemd.`} />
            <Text text={`Run levels and targets both allow for the initialization of the machine in different modes, but they are managed by different programs: run levels by the init program, and targets by the systemd program.`} />

            <Heading text={`Run Levels`} />
            <Text text={`Run levels are specific states that the Linux system can be in. Each run level provides a different set of services, allowing the system to function in different modes, such as single-user mode, multi-user mode, or graphical mode.`} />

            <Subheading text={`Types of Run Levels`} />
            <Text text={`The following are the types of run levels used in older versions of Linux (like RHEL-6 and earlier):`} />
            <Text text={`1. **init 0**: Power off the machine`} />
            <Text text={`2. **init 1, s**: Single user mode or troubleshooting mode`} />
            <Text text={`3. **init 2**: Multi-user mode without network or NFS`} />
            <Text text={`4. **init 3**: Full multi-user mode with network and NFS but only CLI mode`} />
            <Text text={`5. **init 4**: Unused`} />
            <Text text={`6. **init 5**: Full multi-user mode with CLI and GUI (X-windows mode)`} />
            <Text text={`7. **init 6**: Reboot the machine`} />

            <Note text={`Live servers typically run on run level 3 or 5, depending on whether they need a graphical interface.`} />

            <Subheading text={`Checking Current Run Level`} />
            <Command command={`# runlevel`} />
            <Text text={`This command shows the previous and current run levels in the format [Previous Run Level Current Run Level]. If the previous run level is 'n', it means there was no change before shutdown.`} />

            <Command command={`# who -r`} />
            <Text text={`This command displays the current run level, along with the boot-up time, date, and previous run level.`} />

            <Subheading text={`Changing Run Levels`} />
            <Text text={`There are two methods to change run levels:`} />
            <Text text={`1. **Temporary Change**: Use the init command to change the run level temporarily at boot-up or during runtime.`} />
            <Text text={`2. **Permanent Change**: Edit the /etc/inittab file to set the default run level. Note that this method is only applicable in RHEL-6 and earlier.`} />
            <Note text={`In RHEL-7 and later, modifying /etc/inittab has no effect, as systemd manages the boot process.`} />

            <Heading text={`Targets`} />
            <Text text={`In RHEL-7 and later, targets are used instead of run levels to manage the system state. Targets offer more flexibility and better integration with systemd.`} />

            <Subheading text={`Types of Targets`} />
            <Text text={`The following are the main targets used in modern Linux distributions:`} />
            <Text text={`1. **multi-user.target**: Equivalent to init 3, it starts the system in multi-user mode with network and NFS, but without a graphical interface.`} />
            <Text text={`2. **graphical.target**: Equivalent to init 5, it starts the system in multi-user mode with both CLI and GUI.`} />
            <Text text={`3. **reboot.target**: Equivalent to init 6, it reboots the system.`} />
            <Text text={`4. **poweroff.target**: Equivalent to init 0, it powers off the system.`} />

            <Note text={`In systemd, there are no equivalents for init 2 and init 4, as these run levels have been removed.`} />

            <Subheading text={`Entering Single User Mode (Troubleshooting)`} />
            <Text text={`To enter single-user mode or troubleshooting mode (similar to init 1 or init s), use the 'rd.break' command during the boot process.`} />

            <Heading text={`Comparison Between Run Level and Target`} />
            <Subheading text={`Run Level vs Target`} />
            <Text text={`1. **Management Program:** Run levels are managed by the init program, while targets are managed by systemd.`} />
            <Text text={`2. **Compatibility:** Run levels are used in RHEL-6 and earlier, while targets are used in RHEL-7 and later.`} />
            <Text text={`3. **Flexibility:** Targets offer more flexibility, allowing multiple targets to be active at once, whereas only one run level can be active at a time.`} />
            <Text text={`4. **Functionality:** Both run levels and targets define the state of the system, such as whether it is in multi-user mode, single-user mode, or has a graphical interface, but targets integrate better with modern systemd features.`} />
            <Text text={`5. **Customization:** Targets allow for easier customization and can be combined to create specific system states, unlike the more rigid structure of run levels.`} />

        </div>
    )
}

export default RunLevelAndTarget;
