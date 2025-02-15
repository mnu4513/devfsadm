import React from 'react';
import { Heading, Line, Subheading, Text } from "../utils/Comps";

const BootPhasePage = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Boot Phases in Oracle Solaris`} />

      <Text text={`The boot process in Oracle Solaris is composed of several distinct phases that work together to initialize the system and load the operating system. The boot process has been enhanced in recent releases to improve efficiency and consistency across platforms such as SPARC and x86. In this page, we provide an overview of the different boot phases in Oracle Solaris SPARC platforms.`} />
      
      <Text text={`These phases include the Open Boot PROM, the booter phase, the ramdisk phase, and the kernel phase. The boot process ensures that the system is prepared to run the Oracle Solaris operating system.`} />

      <Line />
      <Subheading text={`1. Open Boot PROM (OBP) Phase`} />
      <Text text={`The first phase of the boot process is the Open Boot PROM (OBP) phase. It starts when the system is powered on, and the system firmware (PROM) executes a power-on self-test (POST) to verify the hardware components.`} />
      
      <Text text={`After successfully completing POST, the firmware checks if the autoboot flag is set in the non-volatile storage. If set, it proceeds to boot the system automatically. The firmware then looks for a boot device (typically a disk or network) to load the system.`} />
      
      <Text text={`If booting from a local disk, the firmware uses the OBP label package to parse the disk’s VTOC label to locate the partition that contains the boot block, reading the necessary data into memory.`} />

      
      <Subheading text={`2. Booter Phase`} />
      <Text text={`In this phase, the boot archive is read and executed. The boot archive is a ramdisk image containing essential files necessary for booting Oracle Solaris.`} />

      <Text text={`The booter phase is the only phase of the boot process that requires knowledge of the boot file system format. The transfer of the boot loader and boot archive can happen over different protocols, including local disk access, NFS, or HTTP, depending on the boot method.`} />

      <Text text={`The boot archive contains kernel modules and other components required for booting Solaris, and during this phase, it is read into the system's memory and executed.`} />

      
      <Subheading text={`3. Ramdisk Phase`} />
      <Text text={`The ramdisk phase is where the system initializes a ramdisk that acts as the root file system during the initial boot process. This ramdisk is created from the boot archive and contains essential files needed to proceed with the booting process.`} />

      <Text text={`In some environments, such as during installation, the ramdisk serves as the root file system for the entire installation process. The use of a ramdisk speeds up the boot process because the system's necessary files are read into memory from the boot media and do not need to be repeatedly fetched from the disk.`} />

      <Text text={`The ramdisk phase is critical for creating an initial environment in which the kernel and other system components can be loaded and initialized.`} />

      
      <Subheading text={`4. Kernel Phase`} />
      <Text text={`The final phase of the boot process is the kernel phase. In this phase, Oracle Solaris is fully initialized. A minimal root file system is mounted on the ramdisk created during the previous phase, and kernel modules are extracted from the boot archive.`} />

      <Text text={`Once the kernel is loaded, it initializes itself, mounts the real root file system, and begins the process of system initialization. At this stage, any remaining primary modules are extracted from the boot archive and the kernel prepares the system for user space.`} />
      
      <Text text={`After the kernel phase is complete, the boot archive is discarded, and the operating system is ready for normal operation.`} />

      
      <Subheading text={`Summary of Boot Phases`} />
      <Text text={`The boot phases of Solaris ensure that the system is initialized in a structured way. The key phases are as follows:`} />

      <Text text={`1. Open Boot PROM Phase - Hardware initialization and firmware booting.`} />
      <Text text={`2. Booter Phase - Loading the boot archive into memory.`} />
      <Text text={`3. Ramdisk Phase - Using a ramdisk as the root file system to load essential files.`} />
      <Text text={`4. Kernel Phase - Finalizing the boot process and initializing the Oracle Solaris operating system.`} />

      
    </div>
  );
};

export default BootPhasePage;
