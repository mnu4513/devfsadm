const list = [
  {
    id: 1,
    question: [{
      type: 'text',
      value: `Identify the correct description of an IPS image: `}],
    options: [
      {type: 'text', value: `a location where packages can be installed, for example, your Solaris instance`}, 
      {type: 'text', value: `an ISO image of the Solaris media DVD`}, 
      {type: 'text', value: `an IPS repository`}, 
      {type: 'text', value: `a depot location or source where Solaris packages can be installed from`}
    ],
    answer: [{type: 'text', value: `a location where packages can be installed, for example, your Solaris instance`}]
  }, 
  {
    id: 2,
    question: [
      {type: 'text', value: `Examine this fault Management Resource Identifier (FMRI):`},
      {type: 'command', value: `pkg://solaris/compresss/zip03.0.5.11-0.175.1.0.0.24.0:20120904T170611Z`},
      {type: 'text', value: `What is the version number of this package?`}
    ],
    options: [
      {type: 'text', value: `3.0`},
      {type: 'text', value: `20120904T170611Z`},
      {type: 'text', value: `0.175.1.0.0.24.0:20120904T170611Z`},
      {type: 'text', value: `0.175.1.0.0.24.0`},
      {type: 'text', value: `5.11-0`}
    ],
    answer: [{type: 'text', value: `0.175.1.0.0.24.0`}]
  },
  {
    id: 3,
    question: [
      {type: 'text', value: "Examine this command and its output:"},
      {type: 'command', value: `# svcs sendmail
STATE          STIME       FMRI
maintenance    13:39:35    svc:/network/amtp:sendmail"`},
      {type: 'text', value: "Which two commands can be used to determine the reason for the sendmail service being in the maintenance state?"}
    ],
    options: [
      {type: 'command', value: "svcs -L sendmail"},
      {type: 'command', value: "svcs -Lv sendmail"},
      {type: 'command', value: "svcs -x sendmail"},
      {type: 'command', value: "svcs -v sendmail"}
    ],
    answer: [
      {type: 'command', value: "svcs -Lv sendmail"},
      {type: 'command', value: "svcs -x sendmail"}
    ]
  },
  {
    id: 4,
    question: [
      {type: 'text', value: "You want to update the timezone package on your system because you have knowledge of updates being available."},
      {type: 'text', value: "You execute:"},
      {type: 'command', value: "# pkg update timezone\nNo updates available for this image."},
      {type: 'text', value: "Which command can be used to display the reason for this message?"}
    ],
    options: [
      {type: 'command', value: "pkg verify timezone"},
      {type: 'command', value: "pkg update timezone@latest"},
      {type: 'command', value: "pkg info timezone"},
      {type: 'command', value: "pkg install timezone"}
    ],
    answer: [{type: 'command', value: "pkg info timezone"}]
  },
  {
    id: 5,
    question: [
      {type: 'text', value: "Examine this command and its output:"},
      {type: 'command', value: `$ ipadm show-addr net1/v4
ADDROBJ    TYPE      STATE           ADDR
net1/v4    static    inaccessible    192.168.180.136/24`},
      {type: 'text', value: "Why is the address object net1/v4 marked inaccessible?"}
    ],
    options: [
      {type: 'text', value: "The underlying datalink was deleted using the dladm command."},
      {type: 'text', value: "Its IP interface has failed."},
      {type: 'text', value: "It was taken offline by the system administrator."},
      {type: 'text', value: "It detected another system on the network that uses the same IP address."},
      {type: 'text', value: "It was disabled by the system administrator."}
    ],
    answer: [{type: 'text', value: "The underlying datalink was deleted using the dladm command."}]
  },
  {
    id: 6,
    question: [
      {type: 'text', value: "Which protocol is responsible for routing packets from one network to another?"}
    ],
    options: [
      {type: 'text', value: "Ethernet"},
      {type: 'text', value: "TCP"},
      {type: 'text', value: "IP"},
      {type: 'text', value: "UDP"},
      {type: 'text', value: "ICMP"}
    ],
    answer: [{type: 'text', value: "IP"}]
  },
  {
    id: 7,
    question: [
      {type: 'text', value: "View the exhibit below."},
      {type: 'command', value: "---\n| asci1 name = <ATA.VBOX HARDDISK:1.0-16.000B>\n| bytes/sector = 512\n| sector= 33554331\n| accessible sectors = 33554398\n| Part Tag Flag First Sector Size Last Sector\n| 0    for win 256 15.9908 33538014\n| 1 unassigned win 0 0 0\n| 2 unassigned win 0 0 0\n| 3 unassigned win 0 0 0\n| 4 unassigned win 0 0 0\n| 5 unassigned win 0 0 0\n| 6 unassigned win 0 0 0\n| 8 reserved win 33538015 8.00MB 33554398\n\nformat="},
      {type: 'text', value: "Which is true regarding the disk drive?"}
    ],
    options: [
      {type: 'text', value: "This disk contains an SMI disk label."},
      {type: 'text', value: "This disk configuration could be used as a ZFS root disk."},
      {type: 'text', value: "The disk contains an EFI disk label."},
      {type: 'text', value: "Slice 7 represents the entire disk and cannot be used as a slice for a file system."}
    ],
    answer: [
      {type: 'text', value: "The disk contains an EFI disk label."}
    ]
  },
  {
    id: 8,
    question: [
      {type: 'text', value: "The Oracle Solaris 11 kernel encounters a fatal error, and it results in a system panic."},
      {type: 'text', value: "What type of file does this generate?"}
    ],
    options: [
      {type: 'text', value: "tape dump"},
      {type: 'text', value: "crash dump"},
      {type: 'text', value: "core dump"},
      {type: 'text', value: "objdump"},
      {type: 'text', value: "a.out"}
    ],
    answer: [{type: 'text', value: "crash dump"}]
  },
  {
    id: 9,
    question: [
      {type: 'text', value: "Examine this command and its output:"},
      {type: 'command', value: "$ ps -o pid,s,args\nPID\t\tS\tCOMMAND\n\n8143\tS\t-bash\n13376\tT\tbash cleanup-job\n13378\tO\tps -o pid,s,args\n13375\tR\tbash backup-job"},
      {type: 'text', value: "Which three are true regarding process states in this output?"}
    ],
    options: [
      {type: 'text', value: "Process 8143 is stopped."},
      {type: 'text', value: "Process 13376 is stopped."},
      {type: 'text', value: "Process 8143 is waiting for an event to complete."},
      {type: 'text', value: "Process 13375 is on the run queue."}
    ],
    answer: [
      {type: 'text', value: "Process 13376 is stopped."},
      {type: 'text', value: "Process 8143 is waiting for an event to complete."},
      {type: 'text', value: "Process 13375 is on the run queue."}
    ]
  },
  {
    id: 10,
    question: [
      {type: 'text', value: "Examine these commands and their output:"},
      {type: 'command', value: `# ipadm show-if net3
IFNAME    CLASS    STATE    ACTIVE OVER
net3    ip    ok    yes    --
${` `}
# ipadm show-addr net3
ADDROBJ    TYPE    STATE    ADDR
net3/v4    static	ok    172.16.1.1/16
net3/v6    addrconf ok    fe801:20c:29ff:fe77:7563/10
net3/v6a   static	ok    fdaa:92f:9b63:e2c4:5/64
`},
      {type: 'text', value: "Examine this list of commands:"},
      {type: 'command', value: "1. ipadm delete-addr net3/v4"},
      {type: 'command', value: "2. ipadm delete-addr net3/v6"},
      {type: 'command', value: "3. ipadm delete-addr net3/v6a"},
      {type: 'command', value: "4. ipadm delete-addr net3/*"},
      {type: 'command', value: "5. ipadm delete-ip net3"},
      {type: 'text', value: "Identify the minimum number of commands required in the correct sequence to delete the NET3 interface, and all associated address objects permanently."}
    ],
    options: [
      {type: 'text', value: "commands 4 and 5"},
      {type: 'text', value: "command 4 only"},
      {type: 'text', value: "commands 1, 2, 3 and 5"},
      {type: 'text', value: "command 5 only"},
      {type: 'text', value: "commands 1, 2 and 3"}
    ],
    answer: [{type: 'text', value: "commands 4 and 5"}]
  },
  {
    id: 11,
    question: [
      {type: 'text', value: "Which two commands can be used to report resource utilization of nonglobal zones?"}
    ],
    options: [
      {type: 'command', value: "zonestat"},
      {type: 'command', value: "zonecfg"},
      {type: 'command', value: "fsstat"},
      {type: 'command', value: "zoneadm"},
      {type: 'command', value: "kstat"}
    ],
    answer: [
      {type: 'command', value: "zonestat"},
      {type: 'command', value: "kstat"}
    ]
  },
  {
    id: 12,
    question: [
      {type: 'text', value: "Which two are true regarding the zonestat command?"}
    ],
    options: [
      {type: 'text', value: "It can be run by all users by default."},
      {type: 'text', value: "It can only run from the global zone."},
      {type: 'text', value: "It can report on CPU, memory, networking, and resource control utilization."},
      {type: 'text', value: "It can only run from a non-global zone."}
    ],
    answer: [
      {type: 'text', value: "It can only run from the global zone."},
      {type: 'text', value: "It can report on CPU, memory, networking, and resource control utilization."}
    ]
  },
  {
    id: 13,
    question: [
      {type: 'text', value: "You are installing the Oracle Solaris 11 Operating System by using the Text Installer."},
      {type: 'text', value: "Which two options describe the features associated with the Text Installer?"}
    ],
    options: [
      {type: 'text', value: "You can choose whether root is a role or user account."},
      {type: 'text', value: "It installs gnome as the default user environment on a system capable of displaying a graphical environment."},
      {type: 'text', value: "You can do both automatic and manual configuration of the network."},
      {type: 'text', value: "It can be used to install only SPARC systems."},
      {type: 'text', value: "You can select how to configure the remaining network interfaces."}
    ],
    answer: [
      {type: 'text', value: "You can do both automatic and manual configuration of the network."},
      {type: 'text', value: "You can select how to configure the remaining network interfaces."}
    ]
  },
  {
    id: 14,
    question: [
      {type: 'text', value: "Examine this crontab entry."},
      {type: 'command', value: `# crontab -1 sys
0   6   *   *   6   /usr/lib/sa/sal`},
      {type: 'text', value: "When will /usr/lib/sa/sal run?"}
    ],
    options: [
      {type: 'text', value: "every Saturday at 6 AM"},
      {type: 'text', value: "every Sunday at 00:06"},
      {type: 'text', value: "every day in June at 6 AM"},
      {type: 'text', value: "every sixth day of the month at 6 AM"},
      {type: 'text', value: "every Sunday at 6 AM"}
    ],
    answer: [{type: 'text', value: "every Saturday at 6 AM"}]
  },
  {
    id: 15,
    question: [
      {type: 'text', value: "What is the result of executing the following command?"},
      {type: 'command', value: "svcs -d svc:/network/ssh:default"}
    ],
    options: [
      {type: 'text', value: "displays the services that are dependent on the svc:/network/ssh:default service"},
      {type: 'text', value: "displays the services that svc:/network/ssh:default is dependent on"},
      {type: 'text', value: "disables the svc:/network/ssh:default service"},
      {type: 'text', value: "deletes the svc:/network/ssh:default service"}
    ],
    answer: [{type: 'text', value: "displays the services that svc:/network/ssh:default is dependent on"}]
  },
  {
    id: 16,
    question: [
      {type: 'text', value: "Examine this command and output:"},
      {type: 'command', value: `oracle@serverA:~S svcs -l ssh | egrep 'fmtlenabled(state|depend'
${` `}
fmri:    svc:/network/ssh:default
enabled    true
state    offline
...
dependency    require_all/none svc:/system/cryptosvc (disabled)
...
`},
      {type: 'text', value: "Which is the minimum set of commands to bring svc:/network/ssh:default back online?"}
    ],
    options: [
      {type: 'command', value: "svcadm enable svc:/system/cryptosvc"},
      {type: 'command', value: `svcadm enable svc:/system/cryptosvc
svcadm restart svc:/network/ssh:default`},
      {type: 'command', value: `svcadm enable svc:/system/cryptosvc
svcadm refresh svc:/network/ssh:default`},
      {type: 'command', value: `svcadm enable svc:/system/cryptosvc
svcadm disable svc:/network/ssh:default
svcadm enable svc:/network/ssh:default`}
    ],
    answer: [{type: 'command', value: `svcadm enable svc:/system/cryptosvc
svcadm restart svc:/network/ssh:default`}]
  },
  {
    id: 17,
    question: [
      {type: 'text', value: "Examine this command and its output:"},
      {type: 'command', value: `$ grep user.log /etc/syslog.conf
user.warning    /var/adm/user.log`},
      {type: 'text', value: "Which two will add a message to /var/adm/user.log?"}
    ],
    options: [
      {type: 'command', value: "logger -p local0.warning Level 0 Local Warning Message."},
      {type: 'command', value: "logger -p emerg Emergency condition occurred."},
      {type: 'command', value: "logger -p crit Critical error detected."},
      {type: 'command', value: "logger -p debug Debugging message."}
    ],
    answer: [
      {type: 'command', value: "logger -p emerg Emergency condition occurred."},
      {type: 'command', value: "logger -p crit Critical error detected."}
    ]
  },
  {
    id: 18,
    question: [
      {type: 'text', value: "Identify two differences between the shutdown and init commands."}
    ],
    options: [
      {type: 'text', value: "init does not terminate all services normally. The shutdown command performs a cleaner shutdown of all services."},
      {type: 'text', value: "The shutdown command will shut the system down and turn off power whereas init will only shut the system down."},
      {type: 'text', value: "Only shutdown broadcasts a final shutdown warning to all logged-in users."},
      {type: 'text', value: "Only shutdown sends a shutdown message to any systems that are mounting resources from the system that is being shut down."},
      {type: 'text', value: "The shutdown command can only bring the system to the single-user milestone. The init command must be used to shut the system down to run level 0."}
    ],
    answer: [
      {type: 'text', value: "Only shutdown broadcasts a final shutdown warning to all logged-in users."},
      {type: 'text', value: "Only shutdown sends a shutdown message to any systems that are mounting resources from the system that is being shut down."}
    ]
  },
  {
    id: 19,
    question: [
      {type: 'text', value: "Which best describes the avc:/system/boot-config service?"}
    ],
    options: [
      {type: 'text', value: "It provides the parameters used to set the system to automatically perform a fast or slow reboot."},
      {type: 'text', value: "It is used to set the default run level of the system."},
      {type: 'text', value: "It is used to change the milestone on a system."},
      {type: 'text', value: "When the service is enabled, the system performs a fast reboot by default when it is disabled, the system performs a slow reboot by default."}
    ],
    answer: [{type: 'text', value: "It provides the parameters used to set the system to automatically perform a fast or slow reboot."}]
  },
  {
    id: 20,
    question: [
      {type: 'text', value: "View the Exhibit."},
      {type: 'command', value: `| ADDROBJ    | TYPE     | STATE | ADDR                        |
|------------|----------|-------|-----------------------------|
| 100/v4     | static   | ok    | 127.0.0.1/8                 |
| net0/.b    | dhcp     | ok    | 10.0.2.15/24                |
| net1/.b    | dhcp     | ok    | 10.0.3.15/24                |
| 100/v6     | static   | ok    | ::1/128                     |
| net0/.a    | addrconf | ok    | fe80::a00:27ff:fec5:38b9/10 |
| net1/.a    | addrconf | ok    | fe80::a00:27ff:fe2b:498a/10 |
`},
      {type: 'text', value: "The configuration information in the exhibit is displayed on your system immediately after installing the OS."},
      {type: 'text', value: "Choose the option that describes the selection made during the installation of the OS to obtain this configuration."}
    ],
    options: [
      {type: 'text', value: "The automatic network configuration option was chosen during the installation of the OS."},
      {type: 'text', value: "The DHCP network configuration option was chosen during the installation of the OS."},
      {type: 'text', value: "The network was not configured during the installation of the OS."},
      {type: 'text', value: "The manual network configuration option was chosen during the installation of the OS."}
    ],
    answer: [{type: 'text', value: "The automatic network configuration option was chosen during the installation of the OS."}]
  },     {
      id: 21,
      question: [
        {type: 'text', value: "You log in to the system as user1, then switch user to root by using the `su - command`. After entering the correct password, you enter the following commands:"},
        {type: 'command', value: "whoami;who am i;id"},
        {type: 'text', value: "Which option correctly represents the output?"}
      ],
      options: [
        {type: 'command', value: `uid=0(root) gid=0(root)
root
user1 console Dec 30 20:20`},
        {type: 'command', value: `root
user1 console Dec 30 20:20
uid=0(root) gid=0(root)`},
        {type: 'command', value: `user1 console Dec 30 20:20
root
uid=0(root) gid=0(root)`},
        {type: 'command', value: `uid=0(root) gid=0(root)
user1 console Dec 30 20:20
root`}
      ],
      answer: [{type: 'command', value: `root
user1 console Dec 30 20:20
uid=0(root) gid=0(root)`}]
    },
    {
      id: 22,
      question: [
        {type: 'text', value: "Examine this command and output executed by user `prutser`."},
        {type: 'command', value: `$ crontab -1
crontab: you are not authorized to use cron. sorry.
`},
        {type: 'text', value: "Identify two reasons for this message."}
      ],
      options: [
        {type: 'text', value: "/etc/cron.d/cron.allow exists and the user `prutser` is not in it."},
        {type: 'text', value: "/etc/cron.d/cron.deny exists and the user `prutser` is not in it."},
        {type: 'text', value: "The user `prutser` has no crontab file."},
        {type: 'text', value: "Neither /etc/cron.d/cron.allow nor /etc/cron.d/cron.deny exist."}
      ],
      answer: [
        {type: 'text', value: "/etc/cron.d/cron.allow exists and the user `prutser` is not in it."},
        {type: 'text', value: "Neither /etc/cron.d/cron.allow nor /etc/cron.d/cron.deny exist."}
      ]
    },
    {
      id: 23,
      question: [
        {type: 'text', value: "Oracle Solaris 11 was installed using the Live Media installer. A user account was created when prompted for, by the installer."},
        {type: 'text', value: "Which two statements describe the characteristics of this user account?"}
      ],
      options: [
        {type: 'text', value: "The account is assigned the `root` role."},
        {type: 'text', value: "The password assigned to this account is only assigned to this user."},
        {type: 'text', value: "The account is a role."},
        {type: 'text', value: "A user can log in using this account only after the system boots for the first time."},
        {type: 'text', value: "The password for this account must be reset at the first login."}
      ],
      answer: [
        {type: 'text', value: "The password assigned to this account is only assigned to this user."},
        {type: 'text', value: "The password for this account must be reset at the first login."}
      ]
    },
    {
      id: 24,
      question: [
        {type: 'text', value: "You have been tasked with creating a dedicated virtual network between two local zones within a single system, in order to isolate the network traffic from other zones on that system."},
        {type: 'text', value: "To accomplish this, you will create ______."}
      ],
      options: [
        {type: 'text', value: "a virtual router"},
        {type: 'text', value: "nothing, because a virtual switch is automatically created when the virtual network interfaces are created"},
        {type: 'text', value: "an etherstub"},
        {type: 'text', value: "a virtual network interface"},
        {type: 'text', value: "a virtual bridge"}
      ],
      answer: [{type: 'text', value: "an etherstub"}]
    },
    {
      id: 25,
      question: [
        {type: 'text', value: "Review the information taken from your server:"},
        {type: 'command', value: `rpool@BE1
rpool/ROOT@BE1
rpool/ROOT/solaris@BE1
rpool/ROOT/dump@BE1
rpool/ROOT/export@BE1
rpool/ROOT/export/home@BE1
rpool/ROOT/swap@BE1`},
        {type: 'text', value: "Which option describes the command used to create these snapshots of the root file system?"}
      ],
      options: [
        {type: 'command', value: "zfs snapshot -r BE1 rpool"},
        {type: 'command', value: `zfs snapshot rpool@BE1 rpool/ROOT@BE1 rpool/ROOT/solaris@BE1 \\
rpool/ROOT/dump@BE1 rpool/ROOT/export@BE1 \\
rpool/ROOT/export/home@BE1 rpool/ROOT/swap@BE1`},
        {type: 'command', value: "zfs snapshot rpool BE1"},
        {type: 'command', value: "zfs snapshot -r rpool@BE1"},
        {type: 'command', value: "beadm create -n BE1"}
      ],
      answer: [{type: 'command', value: "zfs snapshot -r rpool@BE1"}]
    },
    {
      id: 26,
      question: [
        {type: 'text', value: "Which two statements are true about authentication services available in Oracle Solaris 11?"}
      ],
      options: [
        {type: 'text', value: "Secure Shell (SHH) can be configured to allow logins across a network to remote servers without transmitting passwords across the network."},
        {type: 'text', value: "Pluggable Authentication Modules (PAM) is used to implement Secure Shell in Oracle Solaris 11."},
        {type: 'text', value: "Pluggable Authentication Modules (PAM) enables various authentication rules and technologies to be plugged in to system services without recomputation of those service executables."},
        {type: 'text', value: "Simple Authentication and Security Layer (SASL) provides a mechanism to authenticate and encrypt access to the local file system data."},
        {type: 'text', value: "Secure Remote Procedure Calls (Secure RPC) provides encryption of data on any IP connection."}
      ],
      answer: [
        {type: 'text', value: "Secure Shell (SHH) can be configured to allow logins across a network to remote servers without transmitting passwords across the network."},
        {type: 'text', value: "Pluggable Authentication Modules (PAM) enables various authentication rules and technologies to be plugged in to system services without recomputation of those service executables."}
      ]
    },
    {
      id: 27,
      question: [
        {type: 'text', value: "To confirm the IP addresses and netmasks have been correctly configured on the network interfaces, which command(s) should you use?"}
      ],
      options: [
        {type: 'command', value: `ipadm show-ip
ipadm show-mask`},
        {type: 'command', value: "ipadm show-nic"},
        {type: 'command', value: `ipadm show-addr
ipadm show-mask`},
        {type: 'command', value: "ipadm show-config"},
        {type: 'command', value: "ipadm show-if"},
        {type: 'command', value: "ipadm show-addr"}
      ],
      answer: [{type: 'command', value: "ipadm show-addr"}]
    },
    {
      id: 28,
      question: [
        {type: 'text', value: "To inspect network interface net3, you enter the following commands:"},
        {type: 'command', value: `$ ipadm show-if | grep net3
net3 ip down no
${` `}
$ sudo ipadm up-addr net3/v4
ipadm: cannot mark the address up: Object not found
`},

        {type: 'text', value: "What problem do you suspect?"},
        {type: 'text', value: "Assume the user is authorized and provided the correct password."}
      ],
      options: [
        {type: 'text', value: "The net3 interface hasn't been enabled yet."},
        {type: 'text', value: "The net3 interface is not attached to a NIC or etherstub."},
        {type: 'text', value: "The net3 vnic hasn't been created."},
        {type: 'text', value: "The net3/v4 ip object hasn't been configured."}
      ],
      answer: [{type: 'text', value: "The net3/v4 ip object hasn't been configured."}]
    },
    {
      id: 29,
      question: [
        {type: 'text', value: "In a default stand-alone installation of Oracle Solaris 11, what is the default minimum length in characters of a user password, and where is the minimum password length defined?"}
      ],
      options: [
        {type: 'text', value: "Default minimum length is 8, and is defined in /etc/default/passwd."},
        {type: 'text', value: "Default minimum length is 8, and is defined in /etc/shadow."},
        {type: 'text', value: "Default minimum length is 8, and is defined in /usr/sadm/defadduser."},
        {type: 'text', value: "Default minimum length is 6, and is defined in /usr/sadm/defadduser."},
        {type: 'text', value: "Default minimum length is 6, and is defined in /etc/shadow"},
        {type: 'text', value: "Default minimum length is 6, and is defined in /etc/default/passwd."}
      ],
      answer: [{type: 'text', value: "Default minimum length is 8, and is defined in /etc/default/passwd."}]
    },
    {
      id: 30,
      question: [
        {type: 'text', value: "Examine these commands and their output:"},
        {type: 'command', value: `# pkg list unzip
pkg list: no packages matching 'unzip' installed
${` `}
# pkg list -af unzip
NAME (PUBLISHER)    VERSION    IFO
compress/unzip    6.0-0.175.2.7.0.4.0    ---
compress/unzip    6.0-0.175.2.6.0.5.0    ---
compress/unzip    6.0-0.175.2.3.0.4.0    ---
compress/unzip    6.0-0.175.2.0.0.42.1    ---
compress/unzip    6.0-0.175.1.0.0.24.0    ---
compress/unzip    6.0-0.175.0.0.0.2.537    ---
${` `}
# pkg list entire
NAME (PUBLISHER)    VERSION    IFO
entire    0.5.11-0.175.1.21.0.4.1    i--
`},
        {type: 'text', value: "Which command can you use to install the latest version of the unzip package that is compatible with the current image?"}
      ],
      options: [
        {type: 'command', value: "pkg install unzip@6.0-0.175.2.7.0.4.0"},
        {type: 'command', value: "pkg update unzip"},
        {type: 'command', value: "pkg update unzip@latest"},
        {type: 'command', value: "pkg install unzip"},
        {type: 'command', value: "pkg install unzip@latest"}
      ],
      answer: [{type: 'command', value: "pkg update unzip"}]
    },       {
          id: 31,
          question: [
              {type: "text", value: "You need to install the solaris-desktop group package. Which command would you use to list the set of packages included in that software group?"}
          ],
          options: [
              {type: "command", value: "pkg info"},
              {type: "command", value: "pkg contents"},
              {type: "command", value: "pkginfo"},
              {type: "command", value: "pkg search"}
          ],
          answer: [{"type": "command", "value": "pkg contents"}]
      },
      {
          id: 32,
          question: [
              {type: "text", value: "User `brain` changes the permissions for `db_data` by using this command:"},
              {type: "command", value: "chmod 4755 db_data"},
              {type: "text", value: "What is true?"}
          ],
          options: [
              {type: "text", value: "db_data must be an ordinary file, because special permissions cannot be set on a directory."},
              {type: "text", value: "db_data now has permissions `rwsr-xr-x` and, if executed, will run with the permissions of user `brian`."},
              {type: "text", value: "db_data now has permissions `rwxr-ar-x` and can be deleted only by members of the group owning it."},
              {type: "text", value: "The permissions for `db_data` cannot be determined, because the permissions prior to the change have not been specified."},
              {type: "text", value: "db_data now has permissions `rwsr-xr-x` and can be deleted only by user `brian`."}
          ],
          answer: [{type: "text", value: "db_data now has permissions `rwsr-xr-x` and, if executed, will run with the permissions of user `brian`."}]
      },
      {
          id: 33,
          question: [
              {type: "text", value: "User jack, whose account is configured to use the korn shell, logs in and examines the value of his PATH environment variable:"},
              {type: "command", value: `jack@solaris: echo $PATH
/usr/gnu/bin:/usr/bin:/usr/sbin:/sbin`},
              {type: "text", value: "There is a shell script in jack's home directory called useradd:"},
              {type: "command", value: "-r-xr-xr-x 2 jack other 1239 2012-01-05 11:42 useradd"},
              {type: "text", value: "While in his home directory, jack attempts to run the script:"},
              {type: "command", value: "jack@solaris: useradd"},
              {type: "text", value: "What will happen, and why?"}
          ],
          options: [
              {type: "text", value: "The command /usr/sbin/useradd will execute, because it is the last match in the search path."},
              {type: "text", value: "He will get a 'file not found' error, because his home directory is not in his search path."},
              {type: "text", value: "He will get a 'file not found' error, because the current directory is not in his search path."},
              {type: "text", value: "The command /usr/sbin/useradd will execute, because it is the first match in the search path."},
              {type: "text", value: "The useradd script will execute, because jack is in the same directory that the script is located in."}
          ],
          answer: [{"type": "text", "value": "He will get a 'file not found' error, because the current directory is not in his search path."}]
      },
      {
          id: 34,
          question: [
              {"type": "text", "value": "Which three statements are true concerning Service Management Facility (SMF) managed services?"}
          ],
          options: [
              {type: "text", value: "They can depend on other SMF managed services."},
              {type: "text", value: "An SMF service's status can reflect the existence of a file or directory."},
              {type: "text", value: "An SMF service's status can reflect the software state of a device or file system."},
              {type: "text", value: "SMF managed services can only be started by users with root privileges."},
              {type: "text", value: "An attempt is made to restart SMF services if they fail."}
          ],
          answer: [
            {type: "text", value: "They can depend on other SMF managed services."},
            {type: "text", value: "An SMF service's status can reflect the software state of a device or file system."},
            {type: "text", value: "An attempt is made to restart SMF services if they fail."}
          ]
      },
      {
          id: 35,
          question: [
              {type: "text", value: "Which two statements are true concerning Service Management Facility (SMF) service states?"}
          ],
          options: [
              {type: "text", value: "A service in the maintenance state is disabled and not able to run."},
              {type: "text", value: "A service in the online state is enabled and running or available to run."},
              {type: "text", value: "A service in the maintenance state is enabled but stopped by an administrator to perform maintenance on that service."},
              {type: "text", value: "The uninitialized state is the initial state for all services."}
          ],
          answer: [
            {type: "text", value: "A service in the online state is enabled and running or available to run."},
            {type: "text", value: "The uninitialized state is the initial state for all services."}
          ]
      },
      {
          id: 36,
          question: [
              {type: "text", value: "The interface net3 should be operating, but is not."},
              {type: "command", value: `ipadm show-addr | grep net3
net3/v4    static    down    192.168.0.200/24`},
              {type: "text", value: "Which command should you enter next?"}
          ],
          options: [
              {type: "command", value: "ipadm enable-if"},
              {type: "command", value: "ipadm show-if"},
              {type: "command", value: "ipadm up-addr"},
              {type: "command", value: "ipadm create-ip"}
          ],
          answer: [{type: "command", value: "ipadm up-addr"}]
      },
      {
          id: 37,
          question: [
              {type: "text", value: "Which two accurately identify features of a solaris10 branded zone?"}
          ],
          options: [
              {type: "text", value: "executes in a Solaris 10 global zone"},
              {type: "text", value: "can be created by importing a Solaris 10 flash archive"},
              {type: "text", value: "enables Linux binary applications to run unmodified"},
              {type: "text", value: "provides a complete runtime environment for Solaris 9 applications"},
              {type: "text", value: "allows a Solaris 10 global zone to be migrated into a Solaris 10 non-global zone on a Solaris 11 system"}
          ],
          answer: [
            {type: "text", value: "can be created by importing a Solaris 10 flash archive"},
            {type: "text", value: "allows a Solaris 10 global zone to be migrated into a Solaris 10 non-global zone on a Solaris 11 system"}
          ]
      },
      {
          id: 38,
          question: [
            {type: "command", value: `jack@solaris:~$ cd
jack@solaris:~$ ls -ld .
drwxr-xr-- 1 jack other 23 2012-01-04 22:12 .
jack@solaris:~$ ls -ld dira
drwxr-xr-x 3 jack other 3 2012-01-06 08:27 dira
jack@solaris:~$ ls -LR dira
dira:
total 2
drwxrwxr-t 2 jack other 3 2012-01-06 08:27 dirb
${` `}
dira/dirb:
total 1
-rw-r-rw-- 1 jack other 8768 2012-01-06 08:28 testfile
-rwxr-xr-x 1 jack other 3398 2011-12-30 12:10 scriptfile
`},
              {"type": "text", "value": "Which three are true?"}
          ],
          "options": [
              {"type": "text", "value": "User jill, a member of the group other, can do a long listing (ls -l) of user jack's home directory."},
              {"type": "text", "value": "User jill, a member of the group other, cannot delete testfile."},
              {"type": "text", "value": "User jill, a member of the group other, can make a copy of testfile in dira."},
              {"type": "text", "value": "User jill, a member of the group other, can edit the data content of testfile."},
              {"type": "text", "value": "User oracle, not a member of the group other, cannot execute the shell script scriptfile."}
          ],
          "answer": [
            {"type": "text", "value": "User jill, a member of the group other, can do a long listing (ls -l) of user jack's home directory."},
            {"type": "text", "value": "User jill, a member of the group other, cannot delete testfile."},
            {"type": "text", "value": "User oracle, not a member of the group other, cannot execute the shell script scriptfile."}
          ]
      },
      {
          "id": 39,
          "question": [
              {"type": "text", "value": "You have been asked to do an orderly shutdown on a process with a PID of 1234, with the kill command. Which command is best?"}
          ],
          "options": [
              {"type": "command", "value": "kill -9 1234"},
              {"type": "command", "value": "kill -1 1234"},
              {"type": "command", "value": "kill -15 1234"},
              {"type": "command", "value": "kill -2 1234"}
          ],
          "answer": [{"type": "command", "value": "kill -15 1234"}]
      },
      {
          id: 40,
          question: [
              {type: "text", value: `Examine these four commands and their output:`},
              {type: "command", value: `# useradd -D
group=staff,10 project=default,3 basedir='export/home
skel='etc/skel shell='/usr/bin/bash inactive=0
expize= authors profiles= roles= limitpriy=
defaultpriy= lock_after_retries=
${` `}
# zfs list rpool/export/home
NAME               USED   AVAIL    REFER  MOUNTPOINT
rpool/export/home  13.9M  3.31G    35K    /export/home
${` `}
# ls -l /export/home
total 21
drwxr-xr-x  16 ocp staff    27 Oct 29 22:47 ocp
${` `}
# logins -u
ocp    430    staff    10    OCP exam developer
`},

{"type": "text", "value": "Next you execute:"},
{type: "command", value: `# useradd -u 500 -g dba oracle`},
           
              {"type": "text", "value": "The command runs successfully but produces no output."},
              {"type": "text", "value": "Which two are true given this scenario?"}
          ],
          "options": [
              {"type": "text", "value": "A user called oracle was created with a UID of 500."},
              {"type": "text", "value": "A user called oracle was created with staff as its primary and dba as its secondary group."},
              {"type": "text", "value": "A user called oracle was created with dba as its primary group."},
              {"type": "text", "value": "A ZFS filesystem was created and mounted on /export/home/oracle."},
              {"type": "text", "value": "A directory called /export/home/oracle was created but no ZFS filesystem was created."}
          ],
          "answer": [
            {"type": "text", "value": "A user called oracle was created with a UID of 500."},
            {"type": "text", "value": "A directory called /export/home/oracle was created but no ZFS filesystem was created."}
          ]
      }, {
          id: 41,
          question: [
            {type: 'text', value: "You are currently working in both your home directory and the system directory /tmp. You are switching back and forth with full path names. Which pair of cd commands will provide you with a shortcut to switch between these two locations?"}
          ],
          options: [
            {type: 'command', value: "cd ~ and cd -"},
            {type: 'command', value: "cd and cd ."},
            {type: 'command', value: "cd - and cd .."},
            {type: 'command', value: "cd ~ and cd"}
          ],
          answer: [{type: 'command', value: "cd ~ and cd -"}]
        },
        {
          id: 42,
          question: [
            {type: 'text', value: "Given:\nfile1 and file2 are text files.\ndir1 and dir2 are directories."},
            {type: 'text', value: "Which two commands will be successful?"}
          ],
          options: [
            {type: 'command', value: "cp file. dir1"},
            {type: 'command', value: "cp file% dir2"},
            {type: 'command', value: "cp file1 file2 dir1"},
            {type: 'command', value: "cp file? dir1"},
            {type: 'command', value: "cp dir1 file1"},
            {type: 'command', value: "cp dir1 dir1"}
          ],
          answer: [
            {type: 'command', value: "cp file1 file2 dir1"},
            {type: 'command', value: "cp file? dir1"}
          ]
        },
        {
          id: 43,
          question: [
            {type: 'text', value: "Examine this command and its output:"},
            {type: 'command', value: `# zfs list -r tank
NAME                     USED AVAIL REFER MOUNTPOINT
tank                     4.0G 863M  32K   /tank
tank/backups             4.0G 863M  33K   /tank/backups
tank/backups/full        3.0G 863M  3.0G  /tank/backups/full
tank/backups/incremental 1.0G 863M  1.0G  /tank/backups/incremental`},
            {type: 'text', value: "Next you execute:"},
            {type: 'command', value: "# zfs destroy -r tank"},
            {type: 'text', value: "What is the result of executing this command?"}
          ],
          options: [
            {type: 'text', value: "It fails because one or more file systems to be destroyed contain data."},
            {type: 'text', value: "It destroys the tank storage pool."},
            {type: 'text', value: "It destroys all children of the /tank file system."},
            {type: 'text', value: "It fails because the /tank file system contains children."}
          ],
          answer: [{type: 'text', value: "It destroys all children of the /tank file system."}]
        },
        {
          id: 44,
          question: [
            {type: 'text', value: "Examine this command and its output:"},
            {type: 'command', value: `$ zfs list -r -t all tank 
| NAME                   | USED  | NVAIL | REFER | MOUNTPOINT     |
| tank                   | 3.00G | 1.84G | 32K   | /tank          |
| tank/database          | 3.00G | 1.84G | 2.00G | /tank/database |
| tank/database@yesterday| 1.00G | -     | 2.00G | -              |`},
            {type: 'text', value: "Which two conclusions can be drawn based on this output?"}
          ],
          options: [
            {type: 'text', value: "The tank/database@yesterday dataset consumes 1 GB of storage that is not shared with its parent."},
            {type: 'text', value: "The tank/database@yesterday dataset consumes 1 GB of storage that is shared with its parent."},
            {type: 'text', value: "The tank/database dataset consumes 2 GB of storage that is not shared with its child."},
            {type: 'text', value: "The tank dataset consumes 3 GB of storage that is not shared with its children."}
          ],
          answer: [
            {type: 'text', value: "The tank/database@yesterday dataset consumes 1 GB of storage that is not shared with its parent."},
            {type: 'text', value: "The tank/database dataset consumes 2 GB of storage that is not shared with its child."}
          ]
        },
        {
          id: 45,
          question: [
            {type: 'text', value: "When issuing the zonestat 2 in 15 command, the following information is displayed:"},
            {type: 'command', value: `SUMMARY    Cpus/online: 1/1    PhygMem: 1023M    VirtMem: 2047M
           ---CPU---    ---PhygMem---  ---VirtMem--- ---PhygMet---
ZONE      USED  %PART   USED   %USED   USED   %USED   PEYTE  %PUSE
[total]   0.09  9.33%   841M   82.1%   951M   46.4%   0      0.00%
[system]  0.02  2.40%   319M   31.2%   577M   28.1%   -      -
global    0.06  6.71%   465M   45.4%   325M   15.8%   0      0.00%
dbzone    0.00  0.21%   56.1M  5.48%   48.7M  2.37%   0      0.00%`},
            {type: 'text', value: "Which two options accurately describe the statistics contained in the output?"}
          ],
          options: [
            {type: 'text', value: "dbzone is using 0.21% of the global zone's total CPU."},
            {type: 'text', value: "The network is being utilized 100% with no physical bandwidth remaining."},
            {type: 'text', value: "dbzone is using 0.21% of the total CPU resource available in the zone's processor set."},
            {type: 'text', value: "dbzone is using 2.37% of the non-global zone's total virtual memory."},
            {type: 'text', value: "dbzone is using 5.48% of the total physical memory that has been allocated to the zone."}
          ],
          answer: [
            {type: 'text', value: "dbzone is using 0.21% of the total CPU resource available in the zone's processor set."},
            {type: 'text', value: "dbzone is using 5.48% of the total physical memory that has been allocated to the zone."}
          ]
        },
        {
          id: 46,
          question: [
            {type: 'text', value: "Examine this command and its output:"},
            {type: 'command', value: `$ grep *CRYPT /etc/security/policy.conf
CRYPT_ALGORITHMS_ALLOW=1,2a,md5,5,6
CRYPT_DEFAULT=5`},
            {type: 'text', value: "Which two are true based on this output?"}
          ],
          options: [
            {type: 'text', value: "Existing passwords will be encrypted using the same encryption algorithm when they are changed by the user."},
            {type: 'text', value: "Existing passwords encrypted with algorithm #6 will be automatically encrypted using algorithm #5 the next time the account is used to log in."},
            {type: 'text', value: "Passwords for new user accounts can be encrypted using any of the allowed algorithms."},
            {type: 'text', value: "Passwords for new user accounts are always encrypted using encryption algorithm #5."}
          ],
          answer: [
            {type: 'text', value: "Existing passwords will be encrypted using the same encryption algorithm when they are changed by the user."},
            {type: 'text', value: "Passwords for new user accounts are always encrypted using encryption algorithm #5."}
          ]
        },
        {
          id: 47,
          question: [
            {type: 'text', value: "The default publisher on your system is:"},
            {type: 'command', value: `
PUBLISHER  TYPE    STATUS  URL
solaris    origin  online  http://pkg.oracle.com/solaris/release`},
            {type: 'text', value: "You want to update the Oracle Solaris 11 environment on your system, but you are not able to connect this system to the Internet to access the default Oracle repository."},
            {type: 'text', value: "A repository has been created on your local network and is named http://server1.example.com."},
            {type: 'text', value: "Which command would you choose to connect your system to the local repository?"}
          ],
          options: [
            {type: 'text', value: "pkg set-publisher to set the stickiness on the http://server1.example.com publisher and unset stickiness for http://pkg.oracle.com/solaris/release"},
            {type: 'text', value: "pkg add-publisher to add the new publisher"},
            {type: 'text', value: "pkg publisher to specify the new publisher"},
            {type: 'text', value: "pkg set-publisher to set the origin for the publisher"}
          ],
          answer: [{type: 'text', value: "pkg set-publisher to set the origin for the publisher"}]
        },
        {
          id: 48,
          question: [
            {type: 'text', value: "Examine this command and its output:"},
            {type: 'command', value: `$ zfs list -r tank
NAME\t\tUSED\t\tAVAIL\tREFER\t  MOUNTPOINT
tank\t\t1.15M\t\t4.84G\t35K\t      /data
tank/grid   32K \t\t4.84G\t32K\t      /data/grid
tank/oracle 33K\t\t    4.84G\t33K\t      /data/oracle`},
            {type: 'text', value: "The next command you execute is:"},
            {type: 'command', value: "# zfs set userguota@oracle=2g tank"},
            {type: 'text', value: "What is the result of executing this command?"}
          ],
          options: [
            {type: 'text', value: "A user quota is set on the tank dataset that affects each of the three tank datasets."},
            {type: 'text', value: "A user quota is set on the tank dataset only."},
            {type: 'text', value: "A user quota is set on each of the three tank datasets."},
            {type: 'text', value: "A user quota is set on the /data file system only."}
          ],
          answer: [{type: 'text', value: "A user quota is set on the tank dataset that affects each of the three tank datasets."}]
        },
        {
          id: 49,
          question: [
            {type: 'text', value: "Review the boot environments displayed on your system:"},
            {type: 'command', value: `
| BE        |Active|Mountpoint|Space   |Policy | Created          |
|-----------|------|----------|--------|-------|------------------|
| oldBE     |  -   |    -     |149.0K  |static | 2011-11-28 15:15 |
| newBE     |  -   |    -     |363.05M |static | 2011-11-28 14:47 |
| solaris   |  -   |    -     |100.68M |static | 2011-11-20 18:09 |
| solaris-1 |  NR  |    /     |19.07G  |static | 2012-01-22 07:23 |`},
            {type: 'text', value: "Which option describes the solaris-1 BE?"}
          ],
          options: [
            {type: 'text', value: "It is active on the next reboot."},
            {type: 'text', value: "It is inactive."},
            {type: 'text', value: "It is active now."},
            {type: 'text', value: "It has been removed and will no longer be available after the next reboot."},
            {type: 'text', value: "It is active now and on reboot."},
            {type: 'text', value: "It is unbootable."}
          ],
          answer: [{type: 'text', value: "It is active now and on reboot."}]
        },
        {
          id: 50,
          question: [
            {type: 'text', value: "User jack makes use of the bash shell; his home directory is /export/home/jack."},
            {type: 'text', value: "What is the correct setting of umask, and where should it be set, to allow jack to create a shell script using the vi_editor, that is executable by default?"}
          ],
          options: [
            {type: 'text', value: "umask value of 0722 set in /export/home/jack/.bashrc"},
            {type: 'text', value: "umask value of 0002 set in /etc/profile"},
            {type: 'text', value: "umask value of 0002 set in /export/home/jack/.bashrc"},
            {type: 'text', value: "umask value of 0722 set in /etc/profile"},
            {type: 'text', value: "It is not possible to make a script executable without using the chmod command."}
          ],
          answer: [{type: 'text', value: "It is not possible to make a script executable without using the chmod command."}]
        },           {
              "id": 51,
              "question": [
                  {"type": "text", "value": "Which statement is true concerning the use of user private ssh protocol version 2 authentication keys to establish a password-less connection?"}
              ],
              "options": [
                  {"type": "text", "value": "Both an RSA and a DSA key pair are required to establish an ssh connection."},
                  {"type": "text", "value": "Either a DSA or an RSA key pair is required to establish an ssh connection."},
                  {"type": "text", "value": "Only an RSA key pair is required to establish an ssh connection."},
                  {"type": "text", "value": "Neither a DSA nor an RSA key pair is required to establish an ssh connection."}
              ],
              "answer": [{"type": "text", "value": "Either a DSA or an RSA key pair is required to establish an ssh connection."}]
          },
          {
              "id": 52,
              "question": [
                  {"type": "text", "value": "Which two are true concerning user accounts or roles on Oracle Solaris 11?"}
              ],
              "options": [
                  {"type": "text", "value": "User accounts are stored in /etc/passwd."},
                  {"type": "text", "value": "A user can always assume the identity of another user if they know the password of that user."},
                  {"type": "text", "value": "Roles are stored in /etc/roles."},
                  {"type": "text", "value": "Either roles or user accounts can be used to log on."}
              ],
              "answer": [
                {"type": "text", "value": "User accounts are stored in /etc/passwd."},
                {"type": "text", "value": "Either roles or user accounts can be used to log on."}
              ]
          },
          {
              "id": 53,
              "question": [
                  {"type": "text", "value": "Which two statements are always true concerning user accounts on Oracle Solaris 11?"}
              ],
              "options": [
                  {"type": "text", "value": "User account passwords can be stored either in /etc/passwd or in /etc/shadow."},
                  {"type": "text", "value": "Each user account must have a primary group that is not shared with other user accounts."},
                  {"type": "text", "value": "Each user account must have an entry in /etc/shadow."},
                  {"type": "text", "value": "Each user account must have a password."}
              ],
              "answer": [
                {"type": "text", "value": "Each user account must have an entry in /etc/shadow."},
                {"type": "text", "value": "Each user account must have a password."}
              ]
          },
          {
              "id": 54,
              "question": [
                  {"type": "text", "value": "Examine this command and its output:"},
                  {"type": "command", value: `$ zomestat 30 1
Collecting data for first interval...
Interval: 1, Duration: 0:00:30
SUMMARY   			 Cpus/Online: 2/2
			  ---CPU---
ZONE        USED    %PART   STIN    %STIN
[total]     1.02    51.0%   42.94M  42949671%
[system]    1.02    51.0%   -       - 
zone1       0.00    0.02%   -       -`},
                  
                  {"type": "text", "value": "Which two outcomes can be deduced from this output?"}
              ],
              "options": [
                  {"type": "text", "value": "51% of the available CPU capacity was used by the kernel."},
                  {"type": "text", "value": "The global zone consumed 51% of the available CPU capacity."},
                  {"type": "text", "value": "This output was captured on a nonglobal zone."},
                  {"type": "text", "value": "51% of the available CPU capacity was used by the global zone, the nonglobal zones, the kernel or a combination of any or all of these."}
              ],
              "answer": [
                {"type": "text", "value": "The global zone consumed 51% of the available CPU capacity."},
                {"type": "text", "value": "This output was captured on a nonglobal zone."},
                ]
          },
          {
              "id": 55,
              "question": [
                  {"type": "text", "value": "When speaking to an Oracle Support Engineer, you are asked to verify the version of the Solaris 11 build currently running on your system. Which command would display the Solaris 11 build version currently running on your system?"}
              ],
              "options": [
                  {"type": "command", "value": "cat /etc/release"},
                  {"type": "command", "value": "cat /etc/update"},
                  {"type": "command", "value": "pkg info all"},
                  {"type": "command", "value": "prtconf"},
                  {"type": "command", "value": "grep -i update"},
                  {"type": "command", "value": "pkg info entire"}
              ],
              "answer": [{"type": "command", "value": "cat /etc/release"}]
          },
          {
              "id": 56,
              "question": [
                  {"type": "text", "value": "Review the ZFS dataset output that is displayed on your system:"},
                  {"type": "command", value: `M F /data/files
- F /data/files
R F /data/files -> /data/files3
+ F /data/files4
`},
                 
                  {"type": "text", "value": "Which four correctly describe the output?"}
              ],
              "options": [
                  {"type": "text", "value": "The link /data/files has been added."},
                  {"type": "text", "value": "/data/files has been added."},
                  {"type": "text", "value": "/data/files (a link) has been removed."},
                  {"type": "text", "value": "/data/files has been modified and is now smaller."},
                  {"type": "text", "value": "/data/files has been renamed to /data/files3."},
                  {"type": "text", "value": "/data/files has been modified and is now larger."},
                  {"type": "text", "value": "/data/files has been modified."},
                  {"type": "text", "value": "/data/files has been deleted."}
              ],
              "answer": [
                {"type": "text", "value": "/data/files has been modified and is now smaller."},
                {"type": "text", "value": "/data/files has been renamed to /data/files3."},
                {"type": "text", "value": "/data/files has been modified."},
                {"type": "text", "value": "/data/files has been deleted."}
              ]
          },
          {
              "id": 57,
              "question": [
                  {"type": "text", "value": "After installing Oracle Solaris 11, you are unable to access the system over the network. You want to verify the host name and the configured network address or addresses from the system console."},
                  {"type": "text", "value": "Which three commands can be used to display this information?"}
              ],
              "options": [
                  {"type": "text", "value": "The ipadm show-if command can be used to display the configured network address or addresses."},
                  {"type": "text", "value": "The ipadm show-addr command can be used to display the host name."},
                  {"type": "text", "value": "The netadm list command can be used to display the configured network address or addresses."},
                  {"type": "text", "value": "The hostname command can be used to display the host name."},
                  {"type": "text", "value": "The uname command can be used to display the host name."},
                  {"type": "text", "value": "The ipadm show-addr command can be used to display the configured network address or addresses."}
              ],
              "answer": [
                {"type": "text", "value": "The hostname command can be used to display the host name."},
                {"type": "text", "value": "The uname command can be used to display the host name."},
                {"type": "text", "value": "The ipadm show-addr command can be used to display the configured network address or addresses."}
            ]
          },
          {
              "id": 58,
              "question": [
                  {"type": "text", "value": "View the Exhibit to inspect the file system configuration on your server."},
                  {"type": "command", value: `
| NAME                | USED  | AVAIL | REFER | MOUNTPOINT        |
|---------------------|-------|-------|-------|-------------------|
| pool                | 134K  | 3.91G | 32K   | /pool             |
| pool1/data          | 31K   | 3.91G | 31K   | /data             |
| remote              | 124K  | 3.91G | 32K   | /remote           |
| remote/backup       | 31K   | 3.91G | 31K   | /remote/backup    |
| rpool               | 11.6G | 4.02G | 34.5K | /rpool            |
| rpool/ROOT          | 9.95G | 4.02G | 31K   | Legacy            |
| rpool/ROOT/solaris  | 9.95G | 4.02G | 9.71G | /                 |
| rpool/dump          | 630M  | 4.04G | 611M  |                   |
| rpool/export        | 6.07M | 4.02G | 32K   | /export           |
| rpool/export/home   | 6.04M | 4.02G | 32K   | /export/home      |
`},
            
                  {"type": "text", "value": "Your department's backup policy is to perform a full backup to a remote system disk on Saturday."},
                  {"type": "text", "value": "On Sunday through Friday, you are to perform a differential backup to the same remote system disk."},
                  {"type": "text", "value": "The server file systems must remain available at all times and can never be taken offline."},
                  {"type": "text", "value": "The backup must not only provide for the recovery of the most recent version of a file but must also allow recovery of previous versions of a file created since Saturday's backup."},
                  {"type": "text", "value": "Following your company policy, which option describes a valid procedure for backing up the /data file system to a remote disk named /remote/backup?"}
              ],
              "options": [
                  {"type": "command", value: `On Saturday:
zfs create snapshot pool1/data@sat  
zfs send pool1/data@sat | zfs recv remote/backup/\`date '+%m%d%y'\`  
${` `}
On each weekday:
Remove the previous daily snapshot.  
zfs create pool1/data@daily  
zfs send -i pool1/data@sat pool1/data@daily | zfs recv remote/backup/\`date '+%m%d%y'\`
`},
                  {"type": "command", value: `On Saturday:
zfs snapshot pool1/data@sat  
zfs send pool1/data@sat > /remote/backup/full
${` `}
On each weekday:
Remove the previous daily snapshot.  
zfs snapshot pool1/data@daily  
zfs send -i pool1/data@sat pool1/data@daily > /remote/backup/full 
`},
                  {"type": "command", value: `On Saturday:
zfs create snapshot pool1/data@sat  
zfs send pool1/data@sat | zfs recv remote/backup 
${` `}
On each weekday:
Remove the previous daily snapshot.  
zfs create -i pool1/data@sat pool1/data@daily  
zfs send pool1/data@daily | zfs recv remote/backup 
`},
                  {"type": "command", value: `On Saturday:
zfs snapshot pool1/data@sat  
zfs send pool1/data@sat > /remote/backup/full  
${` `}
On each weekday:
Remove the previous daily snapshot. 
zfs snapshot pool1/data@daily  
zfs send -i pool1/data@sat pool1/data@daily > /remote/backup/\`date '+%m%d%y'\`
`}
],
"answer": [{"type": "command", value: `On Saturday:
zfs create snapshot pool1/data@sat  
zfs send pool1/data@sat | zfs recv remote/backup/\`date '+%m%d%y'\`  
${` `}
On each weekday:
Remove the previous daily snapshot.  
zfs create pool1/data@daily  
zfs send -i pool1/data@sat pool1/data@daily | zfs recv remote/backup/\`date '+%m%d%y'\`
`}]
},
{
    "id": 59,
    "question": [
        {"type": "text", "value": "A user is unable to log on to the system due to several failed attempts."},
        {"type": "text", "value": "Examine the user1 account status:"},
        {"type": "command", "value": `# logins -x -l user1  
user1    430    staff    10  
         /export/home/user1  
         /usr/bin/bash  
         LK 112416 -1 -1 -1`},
            {"type": "text", "value": "Which action or actions should you take to make the user1 account usable again?"}
    ],
    "options": [
        {"type": "text", "value": "Assign a new password to user1."},
        {"type": "text", "value": "Assign a new password to user1 and unlock the account."},
        {"type": "text", "value": "Unlock the user1 account."},
        {"type": "text", "value": "Remove the password from user1."},
        {"type": "text", "value": "Remove the password from user1 and unlock the account."}
    ],
    "answer": [{"type": "text", "value": "Assign a new password to user1 and unlock the account."}]
},
{
    "id": 60,
    "question": [
        {"type": "text", "value": "You need to connect two nonglobal zones using a private virtual network."},
        {"type": "text", "value": "Identify the network resources required in the global zone to accomplish this."}
    ],
    "options": [
        {"type": "text", "value": "a virtual bridge"},
        {"type": "text", "value": "an etherstub and two virtual network interfaces"},
        {"type": "text", "value": "two virtual network interfaces"},
        {"type": "text", "value": "two etherstubs"}
    ],
    "answer": [{"type": "text", "value": "an etherstub and two virtual network interfaces"}]
},
{
    "id": 61,
    "question": [
        {"type": "text", "value": "Examine this login attempt by the user oracle:"},
        {"type": "command", value: `login: oracle
Password: <password entered>
Login incorrect
`},
        {"type": "text", "value": "What is the reason or reasons for the login failure?"}
    ],
    "options": [
        {"type": "text", "value": "The oracle account exists but the account is locked."},
        {"type": "text", "value": "The oracle account exists but the password is incorrect."},
        {"type": "text", "value": "The oracle account does not exist, or the oracle account is locked, or the password is incorrect."},
        {"type": "text", "value": "The oracle account does not exist."},
        {"type": "text", "value": "Either the oracle account is locked or the password is incorrect."}
    ],
    "answer": [{"type": "text", "value": "The oracle account does not exist, or the oracle account is locked, or the password is incorrect."}]
},             {
      "id": 62,
      "question": [
          {"type": "text", "value": "The following information is displayed for the svc:/network/ssh service:"},
          {"type": "command", value: `fmri         svc:/network/ssh:default  
name         SSH server  
enabled      true  
state        offline  
next_state   none  
state_time   December 31, 2011 07:10:08 AM EST  
logfile      /var/svc/log/network-ssh:default.log  
restarter    svc:/system/svc/restarter:default  
contract_id  321  
manifest     /etc/svc/profile/generic.xml  
manifest     /lib/svc/manifest/network/ssh.xml  
${` `}
dependency   require_all/none svc:/system/filesystem/local (online)  
dependency   optional_all/none svc:/system/filesystem/autofs (online)  
dependency   require_all/none svc:/network/loopback (online)  
dependency   require_all/none svc:/network/physical:default (online)  
dependency   require_all/none svc:/system/cryptosvc (disabled)  
dependency   require_all/none svc:/system/utmp (online)  
dependency   optional_all/error svc:/network/ipfilter:default (disabled)  
dependency   require_all/restart file://localhost/etc/ssh/sshd_config (online)  
svc:/network/ssh:default (SSH server)  
State: offline since January 31, 2012 09:12:45 AM EST  
Reason: Service svc:/system/cryptosvc:default is disabled.  
	See: http://sun.com/msg/SMF-8000-GE  
Path: svc:/network/ssh:default  
	svc:/system/cryptosvc:default  
See: man -M /usr/share/man -s 1M sshd
See: /var/svc/log/network-ssh:default.log
Impact: This service is not running.
`},
               
        {"type": "text", "value": "Which describes the minimum set of commands to be executed to bring the svc:/network/ssh:default service back online?"}
    ],
    "options": [
        {"type": "command", "value": "svcadm restart svc:/system/cryptosvc\nsvcadm restart svc:/network/ipfilter:default\nsvcadm restart svc:/network/ssh:default"},
        {"type": "command", "value": "svcadm enable svc:/system/cryptosvc\nsvcadm enable svc:/network/ipfilter:default\nsvcadm refresh svc:/network/ssh:default"},
        {"type": "command", "value": "svcadm enable svc:/network/ssh:default"},
        {"type": "command", "value": "svcadm enable svc:/system/cryptosvc"},
        {"type": "command", "value": "svcadm refresh svc:/network/ssh:default"},
        {"type": "command", "value": "svcadm restart svc:/network/ssh:default"},
        {"type": "command", "value": "svcadm enable svc:/system/cryptosvc\nsvcadm enable svc:/network/ipfilter:default\nsvcadm enable svc:/network/ssh:default"}
    ],
    "answer": [{"type": "command", "value": "svcadm enable svc:/system/cryptosvc"}]
},
{
    "id": 63,
    "question": [
        {"type": "text", "value": "A user jack, using a bash shell, requests a directory listing as follows:"},
        {"type": "command", value: `jack@solaris:~$ ls
dira dirb dirc diraa dirabc`},
        {"type": "text", "value": "Which three statements are correct?"}
    ],
    "options": [
        {"type": "text", "value": "The pattern dir*b? will expand to dirabc."},
        {"type": "text", "value": "The pattern dir*a will expand to diraa."},
        {"type": "text", "value": "The pattern dir? will expand to dira dirb dirc."},
        {"type": "text", "value": "The pattern dir*a will expand to dira diraa."},
        {"type": "text", "value": "The pattern dir*b? will expand to dirb dirabc."}
    ],
    "answer": [
      {"type": "text", "value": "The pattern dir*b? will expand to dirabc."},
      {"type": "text", "value": "The pattern dir? will expand to dira dirb dirc."},
      {"type": "text", "value": "The pattern dir*a will expand to dira diraa."},
      ]
},
{
    "id": 64,
    "question": [
        {"type": "text", "value": "Which two statements are true concerning ZFS?"}
    ],
    "options": [
        {"type": "text", "value": "Each file in a ZFS file system always has transactionally consistent metadata on disk."},
        {"type": "text", "value": "Redundancy is implemented at the ZFS storage pool level."},
        {"type": "text", "value": "Redundancy is implemented at the ZFS storage pool level or at the file system level."},
        {"type": "text", "value": "A single ZFS file system can use storage from multiple ZFS storage pools."},
        {"type": "text", "value": "The most recently written pieces of data are never lost."}
    ],
    "answer": [
      {"type": "text", "value": "Each file in a ZFS file system always has transactionally consistent metadata on disk."},
      {"type": "text", "value": "Redundancy is implemented at the ZFS storage pool level."},
      ]
},
{
    "id": 65,
    "question": [
        {"type": "text", "value": "You suspect a problem with the openldap package and want to make sure that the files have not been modified or otherwise tampered with."},
        {"type": "text", "value": "Which command would validate all of the files contained in the openldap package and report any problems?"}
    ],
    "options": [
        {"type": "command", "value": "pkginfo openldap"},
        {"type": "command", "value": "pkg not-property signature-policy verify"},
        {"type": "command", "value": "pkg contents openldap"},
        {"type": "command", "value": "pkqchk openldap"},
        {"type": "command", "value": "pkg verify openldap"}
    ],
    "answer": [{"type": "command", "value": "pkg verify openldap"}]
},
{
    "id": 66,
    "question": [
        {"type": "text", "value": "You display the IP interface information with ipmpstat -i."},
        {"type": "text", "value": "Which two characteristics are indicated by characters that may be included in the FLAGS column?"}
    ],
    "options": [
        {"type": "text", "value": "IP forwarding enabled"},
        {"type": "text", "value": "Nominated to send/receive IPv4 multicast for its IPMP group"},
        {"type": "text", "value": "Default route"},
        {"type": "text", "value": "Allocated to global zone"},
        {"type": "text", "value": "Unusable due to being inactive"}
    ],
    "answer": [
      {"type": "text", "value": "Nominated to send/receive IPv4 multicast for its IPMP group"},
      {"type": "text", "value": "Unusable due to being inactive"}
  ]
},
{
    "id": 68,
    "question": [
        {"type": "text", "value": "Before booting testzone, a non-global zone, you want to connect to the zone's console so that you can watch the boot process."},
        {"type": "text", "value": "Choose the command used to connect to testzone's console."}
    ],
    "options": [
        {"type": "command", "value": "zoneadm -C testzone"},
        {"type": "command", "value": "zlogin -C testzone"},
        {"type": "command", "value": "zlogin -z testzone console"},
        {"type": "command", "value": "zlogin -z testzone -C"},
        {"type": "command", "value": "zoneadm -z testzone -C"},
        {"type": "command", "value": "zoneadm -console testzone"}
    ],
    "answer": [{"type": "command", "value": "zlogin -C testzone"}]
},
{
    "id": 69,
    "question": [
        {"type": "text", "value": "You finished installing Oracle Solaris 11 by using the Text Installer. You now want to verify basic system information."},
        {"type": "text", "value": "Which three statements are true?"}
    ],
    "options": [
        {"type": "text", "value": "The cat /etc/release command can be used to display the version of the operating system and the host name."},
        {"type": "text", "value": "The netadm list command can be used to display the configured network devices."},
        {"type": "text", "value": "The uname command can be used to display the version of the operating system."},
        {"type": "text", "value": "The uname command can be used to display the host name."},
        {"type": "text", "value": "The format command can be used to display the available disk drives."}
    ],
    "answer": [
      {"type": "text", "value": "The cat /etc/release command can be used to display the version of the operating system and the host name."},
      {"type": "text", "value": "The uname command can be used to display the version of the operating system."},
      {"type": "text", "value": "The format command can be used to display the available disk drives."}
  ]
},
{
    "id": 70,
    "question": [
        {"type": "text", "value": "You have a ZFS file system named /dbase/oral and you want to guarantee that 10 GB of storage space is available to that dataset for all data, snapshots, and clones."},
        {"type": "text", "value": "Which option would you choose?"}
    ],
    "options": [
        {"type": "command", "value": "zfs set refquota=10g dbase/oral"},
        {"type": "command", "value": "zfs set quota=10g dbase/oral"},
        {"type": "command", "value": "zfs set reservation=10g dbase/oral"},
        {"type": "command", "value": "zfs set refreservation=10g dbase/oral"}
    ],
    "answer": [{"type": "command", "value": "zfs set reservation=10g dbase/oral"}]
},               {
      id: 71,
      question: [
        {type: 'text', value: "Examine this command and its output:"},
        {type: 'command', value: `#logins -s
${` `}
root      0     root     0     Super-User  
daemon    1     other    1  
bin       2     bin      2  
sys       3     sys      3  
adm       4     adm      4     Admin  
...  
noaccess  60002 noaccess 60002 No Access User`},
        {type: 'text', value: "You wish to schedule a weekly job to clean up temporary files."},
        {type: 'text', value: "root is a role on this system."},
        {type: 'text', value: "In which user's crontab should you define this job so that it is guaranteed to work?"}
      ],
      options: [
        {type: 'text', value: "sys"},
        {type: 'text', value: "root"},
        {type: 'text', value: "daemon"},
        {type: 'text', value: "adm"},
        {type: 'text', value: "bin"}
      ],
      answer: [{type: 'text', value: "root"}]
    },
    {
      id: 72,
      question: [
        {type: 'text', value: "Which three of the components could be used in a ZFS storage pool, but are not recommended configurations?"}
      ],
      options: [
        {type: 'text', value: "a Veritas Volume Manager (VxVM) volume"},
        {type: 'text', value: "a file on a UFS file system"},
        {type: 'text', value: "a disk slice from an SMI labeled disk"},
        {type: 'text', value: "a LUN in a hardware RAID array"},
        {type: 'text', value: "an EFI labeled disk"},
        {type: 'text', value: "a Solaris Volume Manager (SVM) volume"}
      ],
      answer: [
        {type: 'text', value: "a Veritas Volume Manager (VxVM) volume"},
        {type: 'text', value: "a file on a UFS file system"},
        {type: 'text', value: "a Solaris Volume Manager (SVM) volume"}
      ]
    },
    {
      id: 73,
      question: [
        {type: 'text', value: "Examine this command and its output:"},
        {type: 'command', value: `
# ipadm
NAME      CLASS/TYPE STATE  UNDER  ADDR
lo0       loopback   ok     --     --
lo0/v4    static     ok     --     127.0.0.1/8
lo0/v6    static     ok     --     ::1/128
net0      ip         ok     --     --
net0/v4   static     ok     --     192.168.40.143/24
net0/v6a  static     ok     --     fdaa:92f:9b63:e2c4::1/64
net1      ip         down   --     --
net1/v4   static     down   --     192.168.180.136/24
net1/v6a  static     down   --     fd88:6068:bd1a:bef6::1/64`},
        {type: 'text', value: "Which command, or commands, should be used to bring the net1 interfaces online?"}
      ],
      options: [
        {type: 'command', value: "# ipadm up-addr net1/*"},
        {type: 'command', value: "# ipadm up-addr net1/v4; ipadm up-addr net1/v6a"},
        {type: 'command', value: "# ipadm refresh-addr net1/v4; ipadm refresh-addr net1/v6a"},
        {type: 'command', value: "# ipadm enable-addr -t net1/v4; ipadm enable-addr -t net1/v6a"},
        {type: 'command', value: "# ipadm enable-if -t net1"}
      ],
      answer: [{type: 'command', value: "# ipadm enable-if -t net1"}]
    },
    {
      id: 74,
      question: [
        {type: 'text', value: "Which best describes the svc:/system/boot-config service?"}
      ],
      options: [
        {type: 'text', value: "It provides the parameters used to set the system to automatically perform a fast or slow reboot."},
        {type: 'text', value: "It is used to change the milestone on a system."},
        {type: 'text', value: "It is used to set the default run level of the system."},
        {type: 'text', value: "When the service is enabled, the system performs a fast reboot by default; when it is disabled, the system performs a slow reboot by default."}
      ],
      answer: [{type: 'text', value: "It provides the parameters used to set the system to automatically perform a fast or slow reboot."}]
    },
    {
      id: 75,
      question: [
        {type: 'text', value: "You are installing the Solaris 11 Operation System by using the Text Installer. A panel prompts you to create a root password and a user account."},
        {type: 'text', value: "Which four describe your options for completing this panel of the installation?"}
      ],
      options: [
        {type: 'text', value: "The root password can be left blank."},
        {type: 'text', value: "If you provide a username, that user is given root privileges."},
        {type: 'text', value: "If you provide a username, root is an account rather than a role."},
        {type: 'text', value: "Creating a user account is optional."},
        {type: 'text', value: "The root password must be set and cannot be blank."},
        {type: 'text', value: "If you provide a username, that user is assigned the root role."},
        {type: 'text', value: "If you do not provide a username, root is an account rather than a role."}
      ],
      answer: [
        {type: 'text', value: "Creating a user account is optional."},
        {type: 'text', value: "The root password must be set and cannot be blank."},
        {type: 'text', value: "If you provide a username, that user is assigned the root role."},
        {type: 'text', value: "If you do not provide a username, root is an account rather than a role."}
      ]
    },
    {
      id: 76,
      question: [
        {type: 'text', value: "Which two options describe how to override the default boot behavior of an Oracle Solaris 11 SPARC system to boot the system to the single-user milestone?"}
      ],
      options: [
        {type: 'command', value: "boot -m milestone=single-user"},
        {type: 'command', value: "boot -milestone=single-user"},
        {type: 'command', value: "boot -s"},
        {type: 'command', value: "boot -m milestone=s"},
        {type: 'command', value: "boot -m milestone/single-user"}
      ],
      answer: [
        {type: 'command', value: "boot -m milestone=single-user"},
        {type: 'command', value: "boot -s"}
      ]
    },
    {
      id: 77,
      question: [
        {type: 'text', value: "To help with your troubleshooting, you need to determine the version of the OBP. Which two commands will provide you with this information?"}
      ],
      options: [
        {type: 'command', value: "printenv"},
        {type: 'command', value: ".version"},
        {type: 'command', value: "value version"},
        {type: 'command', value: "show-devs"},
        {type: 'command', value: "banner"},
        {type: 'command', value: "set-env"}
      ],
      answer: [
        {type: 'command', value: ".version"},
        {type: 'command', value: "banner"}
      ]
    },
    {
      id: 78,
      question: [
        {type: 'text', value: "Which two options accurately describe an Image Packaging System (IPS) repository?"}
      ],
      options: [
        {type: 'text', value: "A mirror is a repository that contains only package content."},
        {type: 'text', value: "An origin is a repository that contains package metadata and package content."},
        {type: 'text', value: "A repository can contain packages from only a single publisher."},
        {type: 'text', value: "The manifest is a listing of all the packages contained in a repository."}
      ],
      answer: [
        {type: 'text', value: "A mirror is a repository that contains only package content."},
        {type: 'text', value: "An origin is a repository that contains package metadata and package content."}
      ]
    },
    {
      id: 79,
      question: [
        {type: 'text', value: "Which two statements are true concerning Image Packaging System (IPS) group packages?"}
      ],
      options: [
        {type: 'text', value: "They are defined by their manifest."},
        {type: 'text', value: "They can specify a set of packages that constitute a single feature or tool."},
        {type: 'text', value: "Their dependencies are always of TYPE=REQUIRE."},
        {type: 'text', value: "Installing a group package does not install any other packages."}
      ],
      answer: [
        {type: 'text', value: "They are defined by their manifest."},
        {type: 'text', value: "They can specify a set of packages that constitute a single feature or tool."}
      ]
    },
    {
      id: 80,
      question: [
        {type: 'text', value: "You plan to install Oracle Solaris 11 on an x86-based system by using the GUI Installer on Live Media."},
        {type: 'text', value: "Which three statements are true?"}
      ],
      options: [
        {type: 'text', value: "By default, it configures the network using DECP."},
        {type: 'text', value: "It deploys the ROOT filesystem on ZFS."},
        {type: 'text', value: "It allows you to select whether the ROOT user is configured as a role or as a regular user."},
        {type: 'text', value: "It does not configure the ROOT user as a role."},
        {type: 'text', value: "It allows you to select which set of packages to install."},
        {type: 'text', value: "it installs a desktop-based set of packages."}
      ],
      answer: [
        {type: 'text', value: "It deploys the ROOT filesystem on ZFS."},
        {type: 'text', value: "It allows you to select whether the ROOT user is configured as a role or as a regular user."},
        {type: 'text', value: "It allows you to select which set of packages to install."}
      ]
  },     {
      "id": 81,
      "question": [
        { "type": "text", "value": "What happens if a process terminates abnormally?" }
      ],
      "options": [
        { "type": "text", "value": "It produces a core file in the home directory of the user who owned the process and it produces a crash file in /var/crash." },
        { "type": "text", "value": "Depending on the system configuration, up to three core files can be produced." },
        { "type": "text", "value": "It always produces one core file in the home directory of the user who owned the process." },
        { "type": "text", "value": "It always produces a crash file in /var/crash." },
        { "type": "text", "value": "By default, it produces two core files." }
      ],
      "answer": [{ "type": "text", "value": "Depending on the system configuration, up to three core files can be produced." }]
    },
    {
      "id": 82,
      "question": [
        { "type": "text", "value": "Examine this command and its output:" },
        { "type": "command", "value": `$ ssh osll
Last login: Wed Oct 29 16:35:20 2014 from osll.example.co
Oracle Corporation 		SunOS 5.11 		11.2 	September 2014
$	
` },
        { "type": "text", "value": "There are no accounts without passwords on the remote system and host-based authentication is not configured.\n\nWhich two conclusions can be drawn based on the output shown?" }
      ],
      "options": [
        { "type": "text", "value": "User equivalency for this user has been configured between the source and destination host." },
        { "type": "text", "value": "A passphrase-protected ssh authentication key was used." },
        { "type": "text", "value": "If a passphrase-protected ssh authentication key was used, then that key was previously loaded into ssh-agent." },
        { "type": "text", "value": "There was no user private ssh authentication key used." }
      ],
      "answer": [
        { "type": "text", "value": "A passphrase-protected ssh authentication key was used." },
        { "type": "text", "value": "If a passphrase-protected ssh authentication key was used, then that key was previously loaded into ssh-agent." }
      ]
    },
    {
      "id": 83,
      "question": [
        { "type": "text", "value": "You are logged in to a Solaris 11 system as user jack. You issue the following sequence of commands:" },
        { "type": "command", "value": `jack@solaris:~$ id
uid=65432(jack) gid=10(staff) groups=10(staff)
jack@sclaris:-$ su
Password:
jack@solaris:~#
` },
        { "type": "text", "value": "Identify two correct statements." }
      ],
      "options": [
        { "type": "text", "value": "Your GID is 10." },
        { "type": "text", "value": "You have the effective privilege of the account root." },
        { "type": "text", "value": "Your home directory is /root." },
        { "type": "text", "value": "You are running the shell specified for the account root." }
      ],
      "answer": [
        { "type": "text", "value": "Your GID is 10." },
        { "type": "text", "value": "You have the effective privilege of the account root." }
      ]
    },
    {
      "id": 84,
      "question": [{ "type": "text", "value": "Which statement is correct about shutdown and init commands?" }],
      "options": [
        { "type": "text", "value": "The shutdown command accepts SMF milestones, init states, or run levels as arguments whereas init accepts only init states or run levels as arguments." },
        { "type": "text", "value": "The shutdown command performs a clean shutdown of all services whereas init does not." },
        { "type": "text", "value": "shutdown broadcasts one or more periodic shutdown warning messages to all logged-in users whereas init issues none." },
        { "type": "text", "value": "The shutdown command brings the system to the single-user milestone by default. The init command must be used to shut the system down to run level 0." }
      ],
      "answer": [{ "type": "text", "value": "shutdown broadcasts one or more periodic shutdown warning messages to all logged-in users whereas init issues none." }]
    },
    {
      "id": 85,
      "question": [{ "type": "text", "value": "Which two commands can be used to gracefully alter a system from the multi-user-server milestone to the single-user milestone?" }],
      "options": [
        { "type": "command", "value": "shutdown h -y" },
        { "type": "command", "value": "init s" },
        { "type": "command", "value": "shutdown -y" },
        { "type": "command", "value": "reboot -q" }
      ],
      "answer": [
        { "type": "command", "value": "init s" },
        { "type": "command", "value": "shutdown -y" }
      ]
    },      {
        "id": 86,
        "question": [
          { "type": "text", "value": "Examine this command and its output:" },
          { "type": "command", "value": ` # svcs -l nfs/client
 ${` `}
fmri         svc:/network/nfs/client:default
name         NFS client
enabled      true
state        online
next_state   none
state_time   May  6, 2015 04:22:58 PM CEST
logfile      /var/svc/log/network-nfs-client:default.log
restarter    svc:/system/svc/restarter:default
manifest     /etc/svc/profile/generic.xml
manifest     /lib/svc/manifest/network/nfs/client.xml
dependency   require_any/error svc:/milestone/network (online)
dependency   require_all/error svc:/network/nfs/nlockmgr (online)
dependency   optional_all/error svc:/network/nfs/cbd (online)
dependency   optional_all/error svc:/network/nfs/mapid (online)
dependency   require_all/restart svc:/network/rpc/bind (online)
dependency   optional_all/none svc:/network/rpc/keyserv (online)
dependency   optional_all/none svc:/network/rpc/gss (online)
dependency   require_all/none svc:/milestone/name-services (online)
` },
          { "type": "text", "value": "Which two statements are true?" }
        ],
        "options": [
          { "type": "text", "value": "Stopping name-services will not stop nfs/client." },
          { "type": "text", "value": "nfs/client will not start until rpc/gss enters the online state." },
          { "type": "text", "value": "Stopping rpc/keyserv will also stop nfs/client." },
          { "type": "text", "value": "Stopping rpc/bind will also stop nfs/client." }
        ],
        "answer": [
          { "type": "text", "value": "Stopping name-services will not stop nfs/client." },
          { "type": "text", "value": "Stopping rpc/bind will also stop nfs/client." }
        ]
      },
      {
        "id": 87,
        "question": [
          { "type": "text", "value": "Examine this command and its output:" },
          { "type": "command", value: `# zpool status tank
            ${` `}
    pool: tank  
    state: DEGRADED  
    status: One or more devices are unavailable in response to persistent errors.  
    Sufficient replicas exist for the pool to continue functioning in a degraded state.  
    ${` `}    
    action: Determine if the device needs to be replaced, and clear the errors  
    using 'zpool clear' or 'fmadm repaired', or replace the device  
    with 'zpool replace'.  
    Run 'zpool status -v' to see device specific details.  
    ${` `}
    scan: resilvered 684M in 0h1m with 0 errors on Tue Feb 24 17:14:31 2015  
    ${` `}
config:  
${` `}
NAME       STATE     READ WRITE CKSUM  
tank       DEGRADED  0    0     0  
  raidz1-0 DEGRADED  0    0     0  
    spare-0 DEGRADED  0    0     0  
      c9t1d0 UNAVAIL  0    0     0  
      c9t5d0 ONLINE   0    0     0  
      c9t2d0 ONLINE   0    0     0  
      c9t3d0 ONLINE   0    0     0  
      c9t4d0 ONLINE   0    0     0  
      ${` `}
spares  
  c9t5d0  INUSE  
  ${` `}
errors: No known data errors  
` },
          { "type": "text", "value": "Which two outcomes can be deduced about the tank storage pool based on this output?" }
        ],
        "options": [
          { "type": "text", "value": "Device c9t1d0 was removed while the system was running and has been replaced with device c9t5d0." },
          { "type": "text", "value": "Device c9t1d0 was taken offline by an administrator and has been replaced with device c9t5d0." },
          { "type": "text", "value": "Device c9t1d0 could not be opened and has been replaced with device c9t5d0." },
          { "type": "text", "value": "Data will remain available if another device fails that belongs to the tank storage pool." },
          { "type": "text", "value": "I/O write performance is degraded." }
        ],
        "answer": [
          { "type": "text", "value": "Device c9t1d0 could not be opened and has been replaced with device c9t5d0." },
          { "type": "text", "value": "I/O write performance is degraded." }
        ]
      },         {
        "id": 88,
        "question": [
          { "type": "text", "value": "Examine this command and its output:" },
          { "type": "command", "value": `# zfs list —r -t all tank

NAME 					USED 	AVAIL 	MOUNTPOINT
tank 					2.00G 	2.84G 	/tank
tank/database 			2.00G 	2.84G 	/tank/database
tank/database@today 	0 		-	 	-
`},
          { "type": "text", "value": "Next you execute:" },
          { "type": "command", "value": "# zfs clone tank/database@today tank/today" },
          { "type": "text", "value": `Which statement is true about the results of executing this command?`}
        ],
        "options": [
          { "type": "text", "value": "The tank/database@today snapshot is converted into a clone and this clone is automatically mounted." },
          { "type": "text", "value": "The tank/database@today snapshot is converted into a clone but this clone is not automatically mounted." },
          { "type": "text", "value": "A clone is created from the tank/database@today snapshot but this clone is not automatically mounted." },
          { "type": "text", "value": "A clone is created from the tank/database@today snapshot and this clone is automatically mounted." },
          { "type": "text", "value": "It fails because you cannot use a snapshot as the source for a clone." }
        ],
        "answer": [{ "type": "text", "value": "A clone is created from the tank/database@today snapshot and this clone is automatically mounted." }]
      },     
      {
     "id": 89,
     "question": [
       { "type": "text", "value": "Examine this command and its output:" },
       { "type": "command", "value": `$ zonestat 30 1
Collecting data for first interval...
Interval: 1, Duration: 0:00:30

SUMMARY          Cpus/Online: 2/2     PhysMem: 4095M     VirtMem: 5119M

          ------------CPU--------------    	---PhysMem---  ---VirtMem---  ---PhysNet---
ZONE      USED  %PART  STLN    %STLN      	USED   %USED   USED   %USED   PBYTE  %PUSE
[total]   1.02  51.0%  42.94M  42949671%    1024M  25.0%   1269M  24.7%   2060   0.00%
[system]  1.02  51.0%  -       -          	943M   23.0%   1198M  23.4%   -      -
zonel     0.00  0.02%  -       -         	80.2M  1.95%   70.1M  1.37%   42     0.00%
` },
       { "type": "text", "value": "Which two outcomes can be deduced from this output?" }
     ],
     "options": [
       { "type": "text", "value": "The global zone consumed 51% of the available CPU capacity." },
       { "type": "text", "value": "This output was captured on a nonglobal zone." },
       { "type": "text", "value": "51% of the available CPU capacity was used by the global zone, the nonglabal zones, the kernel.ar a combination of any or all of these." },
       { "type": "text", "value": "51% of the available CPU capacity was used by the kernel." }
     ],
     "answer": [{ "type": "text", "value": "51% of the available CPU capacity was used by the global zone, the nonglabal zones, the kernel.ar a combination of any or all of these." },
     { "type": "text", "value": "51% of the available CPU capacity was used by the kernel." }
     ]
   },    
          {
        "id": 90,
        "question": [
          { "type": "text", "value": "You are installing Oracle Solaris 11 on a SPARC-based system by using the Text Installer. Which three statements are true?" }
        ],
        "options": [
          { "type": "text", "value": "The set of packages that will be installed are server based." },
          { "type": "text", "value": "The Root user will always be configured as a role." },
          { "type": "text", "value": "The root filesystem will always be located on a local disk." },
          { "type": "text", "value": "The root filesystem will always be deployed on ZFS." },
          { "type": "text", "value": "The network can be configured using DHCP." },
          { "type": "text", "value": "You must always create one regular user when installing the system." },
        ],
        "answer": [
          { "type": "text", "value": "The set of packages that will be installed are server based." },
          { "type": "text", "value": "The root filesystem will always be deployed on ZFS." },
          { "type": "text", "value": "The network can be configured using DHCP." },
        ]
      },      
           {
          "id": 91,
          "question": [
            { "type": "text", "value": "Which utility lists network ports in use by a process?" }
          ],
          "options": [
            { "type": "text", "value": "pargs" },
            { "type": "text", "value": "pflags" },
            { "type": "text", "value": "pfiles" },
            { "type": "text", "value": "pmap" }
          ],
          "answer": [{ "type": "text", "value": "pfiles" }]
        },        {
          "id": 92,
          "question": [
            { "type": "text", "value": "Examine this command and its output:" },
            { "type": "command", value: `# beadm list
BE 			Flags 	Mountpoint Space 	Policy 	Created
0S11.1 		-			-		42.65M 	Static 	2014-09-04
OS11.2 		-			-		49.18M 	static 	2014-09-04
0S11.2-10	N			/		42.08M 	static 	2015-04-27
0S11.2-11 	R 			-		12.79M 	static 	2015-05-12` }, 
{ "type": "text", "value": "You want to create anew Boot Environment (BE) by executing:" },
{ "type": "command", "value": "# beadm create OS11.2-12" },
{ "type": "text", "value": "Which statement is true concerning the outcome of this command?" },
          ],
          "options": [
            { "type": "text", "value": "It creates a new BE called OS11.2-12 by cloning OS11.2-10 and activates the new BE." },
            { "type": "text", "value": "It creates a new BE called OS11.2-12 by cloning OS11.2-10." },
            { "type": "text", "value": "It returns an error because the currently running BE is not the same as the activated BE." },
            { "type": "text", "value": "It creates a new BE called OS11.2-12 by cloning OS11.2-11." },
            { "type": "text", "value": "It creates a new BE called OS11.2-12 by cloning OS11.2-11 and activates the new BE." }
          ],
          "answer": [{ "type": "text", "value": "It creates a new BE called OS11.2-12 by cloning OS11.2-10." }]
        },          {
            "id": 93,
            "question": [
              { "type": "text", "value": "Examine these commands and their output:" },
              { "type": "command", "value": `$ ls -al
total 12
drwxrwxrwx 2  root  sys   4  Nov 24 12:51  .
drwxr-xr-x 39 root  sys   46 Aug 3  12:06  ..
-rw-rw-r-- 1  userl staff 44 Nov 24 12:51  bar
-r--r----- 1  user2 users 44 Nov 24 12:48  foo
${` `}
$ id —a userl
uid=430(userl) gid=10(staff) groups=10 (staff)
${` `}
$ id -—a user2
uid=431 (user2) gid=100 (users) groups=100 (users)
${` `}
$ id -a user3
uid-432(user3) gid-10i(user3) groups—-101 (user3)

` },
              { "type": "text", "value": "Which two are true?" }
            ],
            "options": [
              { "type": "text", "value": "user3 can remove bar." },
              { "type": "text", "value": "user1 can remove foo." },
              { "type": "text", "value": "user2 can remove bar." },
              { "type": "text", "value": "user2 can remove foo." },
              { "type": "text", "value": "user3 can remove foo." },
              { "type": "text", "value": "user1 can remove bar." }
            ],
            "answer": [
              { "type": "text", "value": "user2 can remove foo." },
              { "type": "text", "value": "user1 can remove bar." }
            ]
          },
          {
            "id": 94,
            "question": [
              { "type": "text", "value": "dbzone is currently running on your server.\nWhich two methods would you use to safely and cleanly shut down dbzone and all of its applications?" }
            ],
            "options": [
              { "type": "command", "value": "zoneadm -z dbzone halt" },
              { "type": "command", "value": "zlogin -z dbzone halt" },
              { "type": "command", "value": "zoneadm -z dbzone shutdown i0" },
              { "type": "command", "value": "zoneadm -z dbzone shutdown" },
              { "type": "command", "value": "zlogin dbzone shutdown -i 0" }
            ],
            "answer": [
              { "type": "command", "value": "zoneadm -z dbzone shutdown" },
              { "type": "command", "value": "zlogin dbzone shutdown -i 0" }
            ]
          },
          {
            "id": 95,
            "question": [
              { "type": "text", "value": "____ serves as the interface between the SMF repository and the user to ensure that a consistent picture of the repository is presented to the user." }
            ],
            "options": [
              { "type": "text", "value": "svc.configd" },
              { "type": "text", "value": "repository.db" },
              { "type": "text", "value": "service manifest" },
              { "type": "text", "value": "svc.startd" }
            ],
            "answer": [
              { "type": "text", "value": "svc.configd" }
            ]
          },
          {
            "id": 96,
            "question": [
              { "type": "text", "value": "You need to make sure that all of the software packages on your server are up to date.\nWithout installing any updates, which two commands would display any software updates that are available from the default Oracle repository?" }
            ],
            "options": [
              { "type": "command", "value": "pkg install -nv" },
              { "type": "command", "value": "pkg list -u" },
              { "type": "command", "value": "pkg info -r '*'" },
              { "type": "command", "value": "pkg update -nv '*'" },
              { "type": "command", "value": "pkg verify -u '*'" },
              { "type": "command", "value": "pkg search -u" }
            ],
            "answer": [
              { "type": "command", "value": "pkg list -u" },
              { "type": "command", "value": "pkg update -nv '*'" }
            ]
          },
          {
            "id": 97,
            "question": [
              { "type": "text", "value": "Examine this command and its output:" },
              { "type": "command", "value": `# svcs bind
STATE 			STIME 		FMRI
maintenance 	3:09:15 	svc:/network/rpc/bind:default
`},
              { "type": "text", "value": "Which two commands can be used to list all services that are in the offline state due to the bind service being in the maintenance state?" }
            ],
            "options": [
              { "type": "command", "value": "svcs -D bind" },
              { "type": "command", "value": "svcs -x bind" },
              { "type": "command", "value": "svcs -v bind" },
              { "type": "command", "value": "svcs -d bind" },
              { "type": "command", "value": "svcs -xv bind" }
            ],
            "answer": [
              { "type": "command", "value": "svcs -D bind" },
              { "type": "command", "value": "svcs -xv bind" }
            ]
          },
          {
            "id": 98,
            "question": [
              { "type": "text", "value": "Examine this command and its output:" },
              { "type": "command", "value": `# zpool status tank
	pool: tank
	state: ONLINE
	scan: none requested
	config:
	${` `}
		NAME 		  STATE 	READ  WRITE   CKSUM
		tank 		  ONLINE	0 		 0 	  0
			c9tldO 	  ONLINE  	0 		 0 	  0
			c9t2d0    ONLINE  	0 		 0
${` `}
errors: No known data errors

` },
              { "type": "text", "value": "Next you execute:" },
              { "type": "command", "value": `# zpool add tank mirror c9t3d0 c9t4d0` },
              { "type": "text", value: "What is the outcome of executing this zpool add command?" }
            ],
            "options": [
              { "type": "text", "value": "The nonmirrored tank storage pool is converted into a mirrored storage pool." },
              { "type": "text", "value": "It returns an error." },
              { "type": "text", "value": "The 2-way mirrored tank storage pool is converted to a 4-way mirrored storage pool." },
              { "type": "text", "value": "The mirrored tank storage pool is expanded with a nonmirrored section." }
            ], 
            answer: [
              {type: 'text', value: "The mirrored tank storage pool is expanded with a nonmirrored section."}
            ]
          },
          {
            "id": 99,
            "question": [
              { "type": "text", "value": "You wish to verify which SRU (Support Repository Update) your system is running.\nWhich command would you use?" }
            ],
            "options": [
              { "type": "command", "value": "uname -a" },
              { "type": "command", "value": "pkg info all" },
              { "type": "command", "value": "pkg info entire" },
              { "type": "command", "value": "cat /var/sadm/system/admin/CLUSTER" }
            ],
            "answer": [{ "type": "command", "value": "pkg info entire" }]
          },
          {
            "id": 100,
            "question": [
              { "type": "text", "value": "Examine this command and its output:" },
              { "type": "command", "value": `§ zfs list —r /data
NAME 			USED 	AVATL 	REFER 	MOUNTPOINT
tank 	 		2.27G 	2.57G 	800M 	/data
tank/oracle 	1.49G 	524M 	1.49G 	/data/oracle
` },
              { "type": "text", "value": "Which statement is true?" }
            ],
            "options": [
              { "type": "text", "value": "A group quota has been set on the /data/oracle file system." },
              { "type": "text", "value": "A user quota has been set on the /data/oracle file system." },
              { "type": "text", "value": "A ZFS quota has been set on the /data/oracle file system." },
              { "type": "text", "value": "No quotas have been set on the /data/oracle file system." }
            ], 
            answer: [
              {type: 'text', value: "A ZFS quota has been set on the /data/oracle file system."}
            ]
          },                       {
              "id": 101,
              "question": [
                { "type": "text", "value": "The performance of your quad processor workstation running Oracle Solaris 11 is sluggish." },
                { "type": "text", "value": "You suspect that a recently developed nightly cleanup job, a process that spawns two children, is still running." },
                { "type": "command", "value": `$ pgrep -lf cleanup
13491 bash cleanup-job /data
13490 bash cleanup-job /home
13489 bash do_cleanup
` },
                { "type": "text", "value": "You also confirm that these cleanup processes are consuming large amounts of CPU time:" },
                { "type": "command", "value": `$ ps —o pid,ppeid,time,pcpu,args | grep cleanup
13491 13489 13:40 25.0 bash cleanup-job /data
13490 13489 13:41 25.0 bash cleanup-job /home
13489 8143 13:41 25.0 bash do cleanup
` },
                { "type": "text", "value": "Which two commands can you use to terminate the parent process and its children?" }
              ],
              "options": [
                { "type": "command", "value": "pkill do_cleanup" },
                { "type": "command", "value": "kill 13489" },
                { "type": "command", "value": "kill 13489 13490 13491" },
                { "type": "command", "value": "pkill -f cleanup" }
              ], 
              answer: [
              { "type": "command", "value": "kill 13489" },
                { "type": "command", "value": "pkill -f cleanup" }
            ]
            },
            {
              "id": 102,
              "question": [
                { "type": "text", "value": "Examine these two commands and their output:" },
                { "type": "command", "value": `$ grep ^oracle /etc/passwd
oracle:x:430:10::/export/home/oracle:/usr/bin/bash
${` `}
$ ls -al ~oracle
total 14
drwxr-xr-x 	2	oracle 	staff 	 6 Jan 16 15:46
drwxr-xr-x 	5	root 	root 	 5 Jan 16 15:08 	..
-rw-r--r-- 	1	oracle 	staff 	17 Jan 16 15:47 	.bash login
-rw-r--r--	1	oracle 	staff	19 Jan 16 15:47 	.bash_profile
-rw-r--r-- 	1	oracle 	staff	13 Jan 16 15:47 	.bashre
-rw-r--r-- 	1	oracle 	staff	14 Jan 16 15:47 	.profile
` },
                
                { "type": "text", "value": "You wish to create an alias for a command that is available in each non-login shell.\nIn which file should you add the alias definition?" }
              ],
              "options": [
                { "type": "text", "value": ".bash_profile" },
                { "type": "text", "value": ".bashrc" },
                { "type": "text", "value": ".profile" },
                { "type": "text", "value": ".login" }
              ],
              "answer": [{ "type": "text", "value": ".bashrc" }]
},  {
    "id": 103,
    "question": [
      { "type": "text", "value": "Examine this command:" },
      { "type": "command", "value": "# zonecfg -z zone1 info" },
      { "type": "text", "value": "What is the purpose of running this command?" }
    ],
    "options": [
      { "type": "text", "value": "To display the live configuration of zone1." },
      { "type": "text", "value": "To display the INFO property of zone1." },
      { "type": "text", "value": "To display the persistent configuration of zone1." },
      { "type": "text", "value": "To edit the INFO property of zone1." },
      { "type": "text", "value": "To remove the INFO property of zone1." }
    ],
    "answer": [{ "type": "text", "value": "To display the persistent configuration of zone1." }]
  },
  {
    "id": 104,
    "question": [
      { "type": "text", "value": "A user finds a file named core in their home directory.\nWhat is contained in this file?" }
    ],
    "options": [
      { "type": "text", "value": "A copy of the address space contents of a process that caused a system panic." },
      { "type": "text", "value": "A copy of the address space contents of an abnormally terminated process." },
      { "type": "text", "value": "A copy of the address space contents of a process that was suspended by the shell." },
      { "type": "text", "value": "A copy of the address space contents of the kernel that terminated abnormally." },
      { "type": "text", "value": "A copy of the address space contents of a process that was terminated by sending it SIGKILL." }
    ],
    "answer": [{ "type": "text", "value": "A copy of the address space contents of an abnormally terminated process." }]
  },
  {
    "id": 105,
    "question": [
      { "type": "text", "value": "Examine this remote login attempt by user1:" },
      { "type": "command", "value": `user1@solaris:~$ ssh user2@os11  
Enter passphrase for key '/export/home/user1/.ssh/id_rsa':
` },
      { "type": "text", "value": "Why is the passphrase requested?" }
    ],
    "options": [
      { "type": "text", "value": "To open the user1 SSH encryption keys which are required to encrypt SSH traffic between hosts solaris and os11." },
      { "type": "text", "value": "To open the user1 SSH encryption keys which are required to authenticate user1 both by hosts solaris and os11." },
      { "type": "text", "value": "To authenticate user1 by remote host os11." },
      { "type": "text", "value": "To open the user1 SSH encryption keys which are required to authenticate user1 by remote host os11." },
      { "type": "text", "value": "To open the user1 SSH encryption keys which are required to authenticate user1 by local host solaris." }
    ],
    "answer": [{ "type": "text", "value": "To open the user1 SSH encryption keys which are required to authenticate user1 by remote host os11." }]
  },
  {
    "id": 106,
    "question": [
      { "type": "text", "value": "You have connected a new printer at a fixed IP address.\nIt appears to work correctly most of the time, but at other times does not respond.\nYou suspect that the assigned address may not be unique within the network.\nWhat command will be useful to confirm this?" }
    ],
    "options": [
      { "type": "command", "value": "ipadm show-addr" },
      { "type": "command", "value": "ipadm show-if" },
      { "type": "command", "value": "netstat" },
      { "type": "command", "value": "arp" },
      { "type": "command", "value": "dladm show-addr" }
    ],
    "answer": [{ "type": "command", "value": "arp" }]
  },
  {
    "id": 107,
    "question": [
      { "type": "text", "value": "When speaking to an Oracle Support Engineer, you are asked to verify the version of the Solaris 11 build currently running on your system.\nWhich command would you use?" }
    ],
    "options": [
      { "type": "command", "value": "cat /etc/release" },
      { "type": "command", "value": "pkg info entire" },
      { "type": "command", "value": "grep -i update" },
      { "type": "command", "value": "prtconf" },
      { "type": "command", "value": "cat /etc/update" },
      { "type": "command", "value": "pkg info all" }
    ], 
  answer: [
  { "type": "command", "value": "pkg info entire" }
]
  },
  {
    "id": 108,
    "question": [
      { "type": "text", "value": "Which two options are valid methods of installing a solaris10 branded zone on a system running Oracle Solaris 11?" }
    ],
    "options": [
      { "type": "text", "value": "Use the V2V process to migrate an existing Solaris 10 non-global whole root zone from a Solaris 10 system to a solaris10 branded whole root zone." },
      { "type": "text", "value": "Use the V2V process to migrate an existing Solaris 10 non-global sparse root zone from a Solaris 10 system to a solaris10 branded sparse root zone." },
      { "type": "text", "value": "Install a solaris10 branded zone directly from the Oracle Solaris 10 media." },
      { "type": "text", "value": "Use the V2V process to migrate an existing Solaris 8 or 9 non-global zone from a Solaris 10 system to a solaris10 branded zone." },
      { "type": "text", "value": "Migrate an existing 64-bit Solaris 10 system to a solaris10 branded non-global zone using the P2V process." }
    ], 
  answer: [
  { "type": "text", "value": "Use the V2V process to migrate an existing Solaris 10 non-global whole root zone from a Solaris 10 system to a solaris10 branded whole root zone." },
  { "type": "text", "value": "Migrate an existing 64-bit Solaris 10 system to a solaris10 branded non-global zone using the P2V process." }
]
  },
  {
    "id": 109,
    "question": [
      { "type": "text", "value": "Examine this command and its output:" },
      { "type": "command", "value": `$ zfs list -r /data  
${` `}
NAME           USED  AVAIL  REFER  MOUNTPOINT  
tank           2.27G  2.57G  800M  /data  
tank/oracle    1.49G  524M   1.49G /data/oracle 
` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "No quotas have been set on the /data/oracle file system." },
      { "type": "text", "value": "A group quota has been set on the /data/oracle file system." },
      { "type": "text", "value": "A user quota has been set on the /data/oracle file system." },
      { "type": "text", "value": "A ZFS quota has been set on the /data/oracle file system." }
    ],
    "answer": [{ "type": "text", "value": "A ZFS quota has been set on the /data/oracle file system." }]
}, {
  'id': 110,
  question: [
    {type: 'text', value: `Given the following output of the zpool status command:`},
    {type: 'command', value: `pool: pool1  
state: ONLINE  
scan: none requested  
config:  
${` `}
	NAME          STATE     READ WRITE CKSUM  
	pool1         ONLINE      0     0     0  
		raidz1-0  ONLINE      0     0     0  
		c3t3d0    ONLINE      0     0     0  
		c3t4d0    ONLINE      0     0     0  
		c3t5d0    ONLINE      0     0     0  
		c3t6d0    ONLINE      0     0     0  
`},
    {type: 'text', value: `Identify the correct statement regarding pool1's configuration.`}
  ],"options": [
      { "type": "text", "value": "Data will only be striped across the three disks in the raidz configuration." },
      { "type": "text", "value": "This configuration is a bug in Solaris 11; it cannot be created by an administrator." },
      { "type": "text", "value": "Data written to pool1 will be striped across four disk components." },
      { "type": "text", "value": "The raidz1-0 and c3t6d0 components are submirrors of pool1." }
    ],
    "answer": [{ "type": "text", "value": "Data written to pool1 will be striped across four disk components." }]
},  {
    "id": 111,
    "question": [
      { "type": "text", "value": "A user on the system has started a process, but it needs to be terminated." },
      { "type": "text", "value": "The process ID was determined as follows:" },
      { "type": "command", "value": `pgrep userprogram
15317` },
      { "type": "text", "value": "The user attempted to terminate the program as follows:" },
      { "type": "command", "value": "pkill 15317" },
      { "type": "text", "value": "This command runs without an error message, and the process continues to run.\nWhat is the issue?" }
    ],
    "options": [
      { "type": "text", "value": "You need to run the pkill command with the process name." },
      { "type": "text", "value": "You need to run the ps command to get more information." },
      { "type": "text", "value": "You need to switch to super user to kill the process." },
      { "type": "text", "value": "You need to run the prstat command to get more information." }
    ],
    "answer": [{ "type": "text", "value": "You need to run the pkill command with the process name." }]
  },
  {
    "id": 112,
    "question": [
      { "type": "text", "value": "You need to install the gzip software package on your system.\nWhich command would you use to find the software package in the configured repository?" }
    ],
    "options": [
      { "type": "command", "value": "pkginfo gzip" },
      { "type": "command", "value": "pkg search gzip" },
      { "type": "command", "value": "pkg contents gzip" },
      { "type": "command", "value": "pkg info gzip" },
      { "type": "command", "value": "yum list gzip" }
    ],
    "answer": [{ "type": "command", "value": "pkg search gzip" }]
  },
  {
    "id": 113,
    "question": [
      { "type": "text", "value": "Examine these commands and their output:" },
      { "type": "command", "value": `# pkg list unzip
pkg list: no packages matching 'unzip' installed
${` `}
# pkg list -af unzip
NAME (PUBLISHER)           VERSION                          IFO
compress/unzip             6.0-0.175.2.7.0.4.0              ---
compress/unzip             6.0-0.175.2.6.0.5.0              ---
compress/unzip             6.0-0.175.2.3.0.4.0              ---
compress/unzip             6.0-0.175.2.2.0.0.42.1           ---
compress/unzip             6.0-0.175.1.0.0.24.0             ---
compress/unzip             6.0-0.175.0.0.2.537              ---
${` `}
# pkg list entire
NAME (PUBLISHER)           VERSION                          IFO
entire                     0.5.11-0.175.1.21.0.4.1         i--
` },
   
      { "type": "text", "value": "Which command can you use to install the latest version of the unzip package that is compatible with the current image?" }
    ],
    "options": [
      { "type": "command", "value": "pkg update unzip" },
      { "type": "command", "value": "pkg install unzip" },
      { "type": "command", "value": "pkg install unzip@6.0-0.175.2.7.0.4.0" },
      { "type": "command", "value": "pkg install unzip@latest" }
    ],
    "answer": [{ "type": "command", "value": "pkg install unzip" }]
  },
  {
    "id": 114,
    "question": [
      { "type": "text", "value": "Examine this command and its output:" },
      { "type": "command", "value": `$ zpool status tank
  pool: tank
  state: ONLINE
  scan: none requested
  config:
  ${` `}
    NAME        STATE     READ WRITE CKSUM
    tank        ONLINE       0     0     0
      mirror-0  ONLINE       0     0     0
        c9t1d0  ONLINE       0     0     0
        c9t2d0  ONLINE       0     0     0
      mirror-1  ONLINE       0     0     0
        c9t3d0  ONLINE       0     0     0
        c9t4d0  ONLINE       0     0     0
        ${` `}
errors: No known data errors
` },
      { "type": "text", "value": "Which two statements are true?" }
    ],
    "options": [
      { "type": "text", "value": "Devices c9t1d0 and c9t2d0 are striped with devices c9t3d0 and c9t4d0, respectively." },
      { "type": "text", "value": "Device c9t3d0 is mirrored with device c9t4d0." },
      { "type": "text", "value": "Devices c9t1d0 and c9t2d0 are mirrored with devices c9t3d0 and c9t4d0, respectively." },
      { "type": "text", "value": "Device c9t1d0 is striped with device c9t2d0." }
    ],
    "answer": [
      { "type": "text", "value": "Device c9t3d0 is mirrored with device c9t4d0." },
      { "type": "text", "value": "Devices c9t1d0 and c9t2d0 are mirrored with devices c9t3d0 and c9t4d0, respectively." }
    ]
}, {
    "id": 115,
    "question": [
      { "type": "text", "value": "Which two statements are true concerning Image Packaging System (IPS) group packages?" }
    ],
    "options": [
      { "type": "text", "value": "Their dependencies are always of TYPE=REQUIRE." },
      { "type": "text", "value": "They are defined by their manifest." },
      { "type": "text", "value": "They can specify a set of packages that constitute a single feature or tool." },
      { "type": "text", "value": "Installing a group package does not install any other packages." }
    ],
    "answer": [{ "type": "text", "value": "They are defined by their manifest." },
      { "type": "text", "value": "They can specify a set of packages that constitute a single feature or tool." }]
  },
  {
    "id": 116,
    "question": [
      { "type": "text", "value": "Examine this command and its output:" },
      { "type": "command", "value": `$ dladm show-ether -x net1
        ${` `}
LINK   PTYPE     STATE  AUTO  SPEED-DUPLEX            PAUSE
net1   current   up     yes   1G-f                    bi
--     capable   --     yes   1G-fh,100M-fh,10M-fh    bi
--     adv       --     yes   1G-fh,100M-fh,10M-fh    bi
--     peeradv   --     yes   1G-fh,100M-fh,10M-fh    none
` },
      { "type": "text", "value": "Which three statements are true about the net1 datalink?" }
    ],
    "options": [
      { "type": "text", "value": "It does not support a link speed of 100M." },
      { "type": "text", "value": "The current link state is the result of auto negotiation." },
      { "type": "text", "value": "It is capable of running in full or half duplex mode at three different link speeds." },
      { "type": "text", "value": "It advertises full or half duplex connections at all supported link speeds to its peer." },
      { "type": "text", "value": "It has flow control enabled in both directions." }
    ],
    "answer": [
      { "type": "text", "value": "The current link state is the result of auto negotiation." },
      { "type": "text", "value": "It is capable of running in full or half duplex mode at three different link speeds." },
      { "type": "text", "value": "It has flow control enabled in both directions." }
    ]
  },
  {
    "id": 117,
    "question": [
      { "type": "text", "value": "You suspect a problem with the openldap package and want to make sure that the files have not been modified or otherwise tampered with." },
      { "type": "text", "value": "Which command would validate all of the files contained in the openldap package and report any problems?" }
    ],
    "options": [
      { "type": "command", "value": "pkgchk openldap" },
      { "type": "command", "value": "pkg verify openldap" },
      { "type": "command", "value": "pkg contents openldap" },
      { "type": "command", "value": "pkg set-property signature-policy verify" },
      { "type": "command", "value": "pkginfo openldap" }
    ],
    "answer": [{ "type": "command", "value": "pkg verify openldap" }]
  },
  {
    "id": 118,
    "question": [
      { "type": "text", "value": "How are operating system updates distributed in the Oracle Solaris 11 environment?" }
    ],
    "options": [
      { "type": "text", "value": "Updates are only available to customers with an active support contract. The updates are distributed through the My Oracle Support web portal and installed in a central location.\nAll software packages are then updated manually from the command line using the smpatch command." },
      { "type": "text", "value": "Patches are downloaded from http://support.oracle.com either automatically or manually.\nAll software packages are then updated manually from the command line using the smpatch or patchadd commands." },
      { "type": "text", "value": "Software updates, published as packages to an OS image.\nAll software packages are then updated manually from the command line using the pkg command." },
      { "type": "text", "value": "Software updates are published as packages to a repository.\nAll software packages are then updated manually from the command line using the pkg command." }
    ],
    "answer": [{ "type": "text", "value": "Software updates are published as packages to a repository.\nAll software packages are then updated manually from the command line using the pkg command." }]
  }          
];

export default list;