import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const LDOMs = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`LDOMs (Oracle VM for SPARC)`} />
      
      <Text text={``} />
      <Text text={`LDOMs, also known as Oracle VM for SPARC, offer full virtualization ccapabilities on SPARC system. Each logical domain acts as a complete virtual machine, equipeed with its own virtual CPUs, memory, storage cryptographic units and console.`} />
      
      <Text text={`Unlike Solaris Zones, LDOMs can run independent operating system instances - even with different kernel patch level. You can install various Solaris versions (8,9,10, or 11) within LDOMs. Each domain comes with its own OpenBoot PROM (OBP), which is not available in zones.`} />
      <Text text={`LDOMs also support dynamic reallocation of resource across domains and allow zones to be configured within them, offering flexibility in system design.`} />
      
      
      <Line/>
      <Subheading text={`🧱 LDOM Architecture Overview`} />
      <Text text={`Oracle VM for SPARC relies on hardware-assisted virtualization through the hypervisor, which runs directly on the SPARC hardware. Understanding a few key domain roles is essential: `} />
      <Supersubheading text={`🔧 Control Domain:`}/>
      <Text text={`This is the management domain where LDOM software is installed. It's responsible for creating, configuring and managing other domains and system resources.`} />
      <Supersubheading text={`🔌 Service Domain`}/>
      <Text text={`Service domian provides virtual services like virtual disks, virtual network switches, and virtual consoles to guest domains. Often, the Control Domain also serves as the Service Domain.`} />
      <Supersubheading text={`⚡ I/O Domain`}/>
      <Text text={`This domain has direct ownership of specific PCI devices or buses. For performance-critical applications, mapping I/O devices directly to a domain (I/O Domain or Root Domain) enhances throughput and efficiency.`} />
      <Supersubheading text={`🧍 Guest Domain`}/>
      <Text text={`Guest domains are consumer domains that simply run operating systems. They don't manage hardware or provide services.`} />

      <Text text={`Note: Control and Service Domain roles can be combined, but you should avoid running user applications on this domain to preserve performance and stability.`} />

<Line/>
      <Subheading text={`📦 Installing LDOM Software`} />
      <Text text={`To set up LDOMs, download the required packages from the Oracle Support portal (login required). Once downloaded, transfer the packages to your Solaris host installed on a supported T-series or M-series SPARC server.`} />
      <Supersubheading text={`Step 1: Required Packages`} />
      <Text text={`Example Files:`} />
      <TerminalOutput content={`OracleVM-Server-for-SPARC-2.0.0_(64-bit).zip
SUNWldomr.v
SUNWldomu.v`} />

      <Supersubheading text={`Step 2: Install Core Packages`} />
      <Text text={`Run the following command to install the necessary packages:`} />
      <TerminalOutput content={`pkgadd -d . SUNWldom*`} />
      <Text text={`You’ll be prompted through the installation process for both SUNWldomr (root package) and SUNWldomu (user package). Follow the prompts to complete the installation.`} />

      <Supersubheading text={`Step 3: Install LDOM Manager`} />
      <Text text={`After unzipping the downloaded package:`} />
      <TerminalOutput content={`cd OVM_Server_SPARC-2_0/Install
./install-ldm`} />
      <Text text={`This script installs the LDOM Manager (SUNWldm), enabling you to create and manage domains. You’ll also be given an option to launch the LDOM Configuration Assistant (ldmconfig) for setting up the initial configuration.`} />
      <Text text={`If you prefer manual configuration later, you can skip the assistant and run it anytime with:`} />
      <TerminalOutput content={`/usr/sbin/ldmconfig`} />

      <Line/>

      <Subheading text={`Configuring the control Domains`}/>
      <Text text={`You need to login to Solaris host where you have installed the ldom software to configure the control domain.`} />
      <Text text={`1.List the logical domain devices using ldm list-device -a command.You can see all the resource has been allocated to the primary domain.`} />
      <TerminalOutput content={`bash-3.2# ldm list-devices -a
CORE
    ID      %FREE   CPUSET
    0       0       (0, 1, 2, 3, 4, 5, 6, 7)
    1       0       (8, 9, 10, 11, 12, 13, 14, 15)
    2       0       (16, 17, 18, 19, 20, 21, 22, 23)
    3       0       (24, 25, 26, 27, 28, 29, 30, 31)
    
VCPU
    PID     %FREE   PM
    0       0       no
    1       0       no
    2       0       no
    3       0       no
    4       0       no
    5       0       no
    6       0       no
    7       0       no
    8       0       no
    9       0       no
    10      0       no
    11      0       no
    12      0       no
    13      0       no
    14      0       no
    15      0       no
    16      0       no
    17      0       no
    18      0       no
    19      0       no
    20      0       no
    21      0       no
    22      0       no
    23      0       no
    24      0       no
    25      0       no
    26      0       no
    27      0       no
    28      0       no
    29      0       no
    30      0       no
    31      0       no
    
MAU
    ID      CPUSET                                  BOUND
    0       (0, 1, 2, 3, 4, 5, 6, 7)                primary
    1       (8, 9, 10, 11, 12, 13, 14, 15)          primary
    2       (16, 17, 18, 19, 20, 21, 22, 23)        primary
    3       (24, 25, 26, 27, 28, 29, 30, 31)        primary
    
MEMORY
    PA                   SIZE            BOUND
    0x0                  512K            _sys_
    0x80000              1536K           _sys_
    0x200000             94M             _sys_
    0x6000000            32M             _sys_
    0x8000000            96M             _sys_
    0xe000000            32544M          primary

IO
    DEVICE           PSEUDONYM        BOUND   OPTIONS
    pci@400          pci_0            yes
    pci@500          pci_1            yes
bash-3.2#`} />
      <Text text={`2.List what are the resources assigned to the primary domain or control domains.`} />
      <TerminalOutput content={`bash-3.2# ldm list-bindings primary
NAME             STATE      FLAGS   CONS    VCPU  MEMORY   UTIL  UPTIME
primary          active     -n-c--  SP      64    32544M   0.1%  9m

UUID
    f063b0a8-8fb0-4e61-cd5b-91826d2c1550

MAC
    00:21:28:57:cd:16

HOSTID
    0x8557cd16

CONTROL
    failure-policy=ignore

DEPENDENCY
    master=

CORE
    CID    CPUSET
    0      (0, 1, 2, 3, 4, 5, 6, 7)
    1      (8, 9, 10, 11, 12, 13, 14, 15)
    2      (16, 17, 18, 19, 20, 21, 22, 23)
    3      (24, 25, 26, 27, 28, 29, 30, 31)

VCPU
    VID    PID    CID    UTIL STRAND
    0      0      0      1.5%   100%
    1      1      0      0.0%   100%
    2      2      0      0.0%   100%
    3      3      0      0.0%   100%
    4      4      0      0.0%   100%
    5      5      0      0.0%   100%
    6      6      0      0.0%   100%
    7      7      0      0.0%   100%
    8      8      1      0.0%   100%
    9      9      1      0.1%   100%
    10     10     1      0.0%   100%
    11     11     1      0.1%   100%
    12     12     1      0.1%   100%
    13     13     1      3.0%   100%
    14     14     1      0.0%   100%
    15     15     1      0.1%   100%
    16     16     2      0.1%   100%
    17     17     2      0.2%   100%
    18     18     2      0.1%   100%
    19     19     2      0.0%   100%
    20     20     2      0.1%   100%
    21     21     2      0.0%   100%
    22     22     2      0.1%   100%
    23     23     2      0.0%   100%
    24     24     3      0.0%   100%
    25     25     3      0.0%   100%
    26     26     3      0.0%   100%
    27     27     3      0.0%   100%
    28     28     3      0.2%   100%
    29     29     3      0.1%   100%
    30     30     3      0.1%   100%
    31     31     3      0.0%   100%

MAU
    ID     CPUSET
    0      (0, 1, 2, 3, 4, 5, 6, 7)
    1      (8, 9, 10, 11, 12, 13, 14, 15)
    2      (16, 17, 18, 19, 20, 21, 22, 23)
    3      (24, 25, 26, 27, 28, 29, 30, 31)

MEMORY
    RA               PA               SIZE
    0xe000000        0xe000000        32544M

IO
    DEVICE           PSEUDONYM        OPTIONS
    pci@400          pci_0
    pci@500          pci_1

VCONS
    NAME             SERVICE                     PORT
    SP

bash-3.2#`} />
      <Text text={`3.Set the resource control for the control domain aka primary domain.So the resource will be freed up for the logical domains / Guest domains.`} />
      <TerminalOutput content={`bash-3.2# ldm set-mau 1 primary
bash-3.2# ldm set-vcpu 8 primary
bash-3.2# ldm set-memory 4G primary
A ldm set-mem 4G command would remove 28448MB, which is not a
multiple of 256MB. Instead, run ldm set-mem 4128M primary
to ensure a 256MB alignment.
bash-3.2# ldm set-memory 3872M primary`} />
      <Text text={`mau – Security Encryption (LDM commands will be sent in encrypted manner.)`} />
      <Text text={`vpcu – Virtual CPU cores`} />
      <Text text={`memory – Physical memory`} />
      <Text text={`4.Now list the devices again to verify the new settings.`} />
      <TerminalOutput content={`bash-3.2# ldm ls-devices -a
CORE
    ID      %FREE   CPUSET
    0       0       (0, 1, 2, 3, 4, 5, 6, 7)
    1       100     (8, 9, 10, 11, 12, 13, 14, 15)     ----------->(1-7) Free CPU cores
    2       100     (16, 17, 18, 19, 20, 21, 22, 23)
    3       100     (24, 25, 26, 27, 28, 29, 30, 31)

VCPU
    PID     %FREE   PM
    0       0       no   ----------These (0-7) CPU is not available since its assigned to primary domain
    1       0       no
    2       0       no
    3       0       no
    4       0       no
    5       0       no
    6       0       no
    7       0       no
    8       100     ---
    9       100     ---
    10      100     ---
    11      100     ---
    12      100     ---
    13      100     ---
    14      100     ---
    15      100     ---
    16      100     ---
    17      100     ---
    18      100     ---
    19      100     ---
    20      100     ---
    21      100     ---
    22      100     ---
    23      100     ---
    24      100     ---
    25      100     ---
    26      100     ---
    27      100     ---
    28      100     ---
    29      100     ---
    30      100     ---
    31      100     ---

MAU
    ID      CPUSET                                  BOUND
    0       (0, 1, 2, 3, 4, 5, 6, 7)                primary
    1       (8, 9, 10, 11, 12, 13, 14, 15)
    2       (16, 17, 18, 19, 20, 21, 22, 23)
    3       (24, 25, 26, 27, 28, 29, 30, 31)

MEMORY
    PA                   SIZE            BOUND
    0x0                  512K            _sys_
    0x80000              1536K           _sys_
    0x200000             94M             _sys_
    0x6000000            32M             _sys_
    0x8000000            96M             _sys_
    0xe000000            32M             primary
    0x10000000           28G   -----------------------------Free Memory
    0x710000000          3840M           primary -----------Allocated to Primary or control Domain

IO
    DEVICE           PSEUDONYM        BOUND   OPTIONS
    pci@400          pci_0            yes
    pci@500          pci_1            yes

bash-3.2#`}/>
      <Text text={`You have successfully configured the control domain.`} />
      <Text text={`Note: Here you haven’t saved the configuration. These are all in-memory configuration. After the power cycle, you will lose the configuration if it’s not saved in sp config profile`} />

      <Line/>

<Subheading text={`Save Configuration to SP Config Profile`}/>
      <Text text={`These changes are in-memory only. They will be lost after a reboot unless saved to an SP configuration.`} />
     
      <Supersubheading text={`To save the current configuration:`} />
      <TerminalOutput content={`ldm add-spconfig myLDOMconfig`}/>
      <Supersubheading text={`Verify the saved profile:`} />
      <TerminalOutput content={`ldm ls-spconfig`}/>
      <Supersubheading text={`Output:`} />
      <TerminalOutput content={`factory-default
myLDOMconfig [current]`}/>
      <TerminalOutput content={``}/>
      <TerminalOutput content={``}/>
      <Supersubheading text={``} />
      <Supersubheading text={``} />
      <Supersubheading text={``} />
      <Supersubheading text={``} />
      <Text text={``} />
     

      <Subheading text={`2. Soft (Symbolic) Link:`} />
      <Text text={`A symbolic link (or soft link) is a separate file that contains the path to the target file or directory. It is essentially a pointer to another file or directory.`} />
      <Text text={`Symbolic links are more flexible than hard links, as they can span file systems and partitions.`} />
      <Text text={`If the target file is deleted or moved, the symbolic link becomes broken and no longer points to a valid file.`} />
      
      <Supersubheading text={`1. Create a Soft Link:`} />
      <Text text={`To create a symbolic link, we use the \`ln -s\` command, where the \`-s\` option specifies that it is a symbolic (soft) link.`} />
      <TerminalOutput content={`ln -s /path/to/original_file symbolic_link_file
ls -l
lrwxrwxrwx 1 root root 20 Feb 11 12:34 symbolic_link_file -> /path/to/original_file
[root@localhost ~]#`} />
      <Text text={`In this example, we created a symbolic link \`symbolic_link_file\` that points to \`original_file\`. The \`ls -l\` output shows the symbolic link with an arrow indicating the target file it points to.`} />

      <Supersubheading text={`2. Delete a Soft Link:`} />
      <Text text={`To delete a symbolic link, simply use the \`rm\` command. Deleting the symbolic link does not affect the original file or directory.`} />
      <TerminalOutput content={`rm symbolic_link_file
ls -l
[root@localhost ~]#`} />
      <Text text={`After deleting the symbolic link \`symbolic_link_file\`, we see that the original file is not affected.`} />
    </div>
  );
}

export default LDOMs;
