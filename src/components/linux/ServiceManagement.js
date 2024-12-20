import React from 'react';
import { Heading, Subheading, Text, Supersubheading, Line, TerminalOutput } from '../utils/Comps';

const ServiceManagement = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="systemd & systemctl in Linux" />

            
            <Text text="In Linux, services (also referred to as daemons or units) are background processes that perform system functions. The management of these services has evolved over time." />

            <Supersubheading text="Legacy System (Pre-RHEL 7)" />
            <Text text="Parent Process: init (PID: 1)" />
            <Text text="Service Management Commands: 'service' for temporary actions and 'chkconfig' for permanent actions." />

            <Supersubheading text="Modern System (RHEL 7 and Later)" />
            <Text text="Parent Process: systemd (PID: 1)" />
            <Text text="Service Management Command: 'systemctl' for both temporary and permanent actions." />

            <Subheading text="systemd" />
            <Text text="systemd is a system and service manager designed to overcome the limitations of the older init system. It starts services in parallel, reducing boot times and computational overhead, and provides a suite of features to manage services more efficiently." />

            <Subheading text="Differences Between init and systemd" />

            <Supersubheading text="Initialization Process" />
            <Text text="init: Starts services serially, leading to longer boot times." />
            <Text text="systemd: Starts services concurrently, significantly reducing boot times." />

            <Supersubheading text="Service Management" />
            <Text text="init: Uses 'service' and 'chkconfig' for managing services." />
            <Text text="systemd: Uses 'systemctl' for managing both temporary and permanent actions." />

            <Supersubheading text="Service Configuration" />
            <Text text="init: Configured via scripts in /etc/init.d/ and /etc/rc.d/." />
            <Text text="systemd: Configured through unit files located in /etc/systemd/system/ and /lib/systemd/system/." />

            <Supersubheading text="Dependency Management" />
            <Text text="init: Lacks built-in dependency management." />
            <Text text="systemd: Explicitly manages dependencies to ensure services are started in the correct order." />

            <Supersubheading text="Resource Management" />
            <Text text="init: Limited resource management capabilities." />
            <Text text="systemd: Includes advanced features like service monitoring, logging, and resource control (via cgroups)." />

            <Supersubheading text="Service States" />
            <Text text="init: Service states are basic (start/stop)." />
            <Text text="systemd: Provides detailed service states, such as active, inactive, and failed." />



            <Subheading text="Types of Units in systemd" />
            <Text text="Service: Regular system services (e.g., ssh, ntp)." />
            <Text text="Path: Monitors file system paths." />
            <Text text="Socket: Manages network sockets (e.g., SCSI, iSCSI)." />
         

         <Line/>

            <Heading text="Managing Services with systemctl command" />

            <Subheading text="Temporary Actions" />
            <Supersubheading text="Starts a service:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl start chronyd
[root@localhost ~]#
`} />

        
            <Supersubheading text="Stops a service:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl stop chronyd
[root@localhost ~]#
`} />

            <Supersubheading text="Restarts a service:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl restart chronyd
[root@localhost ~]#
`} />
            <Supersubheading text={`Reload a service:`} />
            <TerminalOutput content={`[root@localhost ~]# systemctl reload sshd
[root@localhost ~]#
`} />
<Text text="Reloads a service's configuration without restarting it." />

            
            <Supersubheading text={`Serverice active status:`} />
            <TerminalOutput content={`[root@localhost ~]# systemctl is-active chronyd
active
[root@localhost ~]#
`} />
            <Text text="It checks if a service is active." />

            <Subheading text="Permanent Actions" />
            <Supersubheading text={`Enalbe service:`} />
            <TerminalOutput content={`[root@localhost ~]# systemctl enable chronyd
Created symlink /etc/systemd/system/multi-user.target.wants/chronyd.service → /usr/lib/systemd/system/chronyd.service.
[root@localhost ~]#
`} />
            <Text text="It enables a service to start at boot." />


            <Supersubheading text={`Disable service:`}/>
            <TerminalOutput content={`[root@localhost ~]# systemctl disable chronyd
Removed /etc/systemd/system/multi-user.target.wants/chronyd.service.
[root@localhost ~]#`} />
            <Text text="Disables a service from starting at boot." />

            <Supersubheading text={`Check enable status:`}/>
            <TerminalOutput content={`[root@localhost ~]# systemctl is-enabled chronyd
enabled
[root@localhost ~]#
`} />


            <Subheading text="Check Service Status:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl is-enabled chronyd
enabled
[root@localhost ~]# systemctl status sshd
● sshd.service - OpenSSH server daemon
     Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled; vendor preset: >
     Active: active (running) since Fri 2024-12-20 16:02:16 IST; 24min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
   Main PID: 857 (sshd)
      Tasks: 1 (limit: 10949)
     Memory: 5.6M
        CPU: 168ms
     CGroup: /system.slice/sshd.service
             └─857 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"
`} />



            <Subheading text="Listing Units" />

            <Supersubheading text="Lists all active units:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl list-units
  UNIT                                                                             >
  proc-sys-fs-binfmt_misc.automount                                                >
  sys-devices-pci0000:00-0000:00:11.0-0000:02:01.0-sound-card0-controlC0.device    >
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata3-host2-target2:0:0-2:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata3-host2-target2:0:0-2:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata3-host2-target2:0:0-2:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata3-host2-target2:0:0-2:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata3-host2-target2:0:0-2:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata4-host3-target3:0:0-3:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata5-host4-target4:0:0-4:0:0:0-b>
  sys-devices-pci0000:00-0000:00:11.0-0000:02:03.0-ata5-host4-target4:0:0-4:0:0:0-b>
  sys-devices-pci0000:00-0000:00:15.0-0000:03:00.0-net-ens160.device               >
  sys-devices-platform-serial8250-tty-ttyS0.device                                 >
  sys-devices-platform-serial8250-tty-ttyS1.device                                 >
  sys-devices-platform-serial8250-tty-ttyS2.device                                 >
  sys-devices-platform-serial8250-tty-ttyS3.device                                 >
  sys-devices-virtual-misc-rfkill.device                                           >
  sys-module-configfs.device                                                       >
  sys-module-fuse.device                                                           >
  sys-subsystem-net-devices-ens160.device                                          >
lines 1-20
`} />

            <Supersubheading text="Lists unit files with their states:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl list-unit-files
UNIT FILE                                                                 STATE    >
proc-sys-fs-binfmt_misc.automount                                         static   >
-.mount                                                                   generated>
boot-efi.mount                                                            generated>
boot.mount                                                                generated>
dev-hugepages.mount                                                       static   >
dev-mqueue.mount                                                          static   >
proc-sys-fs-binfmt_misc.mount                                             disabled >
sys-fs-fuse-connections.mount                                             static   >
sys-kernel-config.mount                                                   static   >
sys-kernel-debug.mount                                                    static   >
sys-kernel-tracing.mount                                                  static   >
tmp.mount                                                                 disabled >
insights-client-results.path                                              disabled >
systemd-ask-password-console.path                                         static   >
systemd-ask-password-plymouth.path                                        static   >
systemd-ask-password-wall.path                                            static   >
session-1.scope                                                           transient>
session-3.scope                                                           transient>
arp-ethers.service                                                        disabled >
lines 1-20
`} />



            <Supersubheading text="Lists failed units:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl list-units --failed
  UNIT                  LOAD   ACTIVE SUB    DESCRIPTION
● dnf-makecache.service loaded failed failed dnf makecache

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.
1 loaded units listed.
[root@localhost ~]#
`} />



            <Subheading text="Masking and Unmasking Services" />
            <Supersubheading text={`Mask a service:`} />
            <TerminalOutput content={`[root@localhost ~]# systemctl mask chronyd
Created symlink /etc/systemd/system/chronyd.service → /dev/null.
[root@localhost ~]#
`} />
            <Text text="Masks a service to prevent it from being started." />


            <Supersubheading text={`Unmask a service:`} />
            <TerminalOutput content={`[root@localhost ~]# systemctl unmask chronyd
Removed /etc/systemd/system/chronyd.service.
[root@localhost ~]#
`} />
            <Text text="Unmasks a service to allow it to be started." />

            <Supersubheading text="List all masked services:" />
            <TerminalOutput content={`[root@localhost ~]# systemctl list-unit-files | grep masked
chronyd.service                                                           masked          enabled
[root@localhost ~]#
`} />

            <Subheading text="Commands with Multiple Units" />
            <TerminalOutput content={`[root@localhost ~]# systemctl is-active sshd chronyd
active
inactive
[root@localhost ~]#
`} />
            <Text text="Checks the active status of multiple services." />
            <TerminalOutput content={`[root@localhost ~]# systemctl is-enabled chronyd sshd
disabled
enabled
[root@localhost ~]#
`} />
            <Text text="Checks if multiple services are enabled." />

            <Text text="Note: systemctl provides a unified interface for managing systemd units, offering flexibility and control over service management." />

        </div>
    );
};

export default ServiceManagement;