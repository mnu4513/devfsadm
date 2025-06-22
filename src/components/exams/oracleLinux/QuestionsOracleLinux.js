const list = [
{
  "id": 2,
  "question": [
    {type: 'text', value: 'Examine these Kubernetes components:'},
    { "type": "command", "value": `
Component           Description
1. kubectl          a. Processes and validates requests and performs the operation
2. etcd             b. Determines where containers should be run by availability of resources
3. kubelet          c. Agent that allows nodes to communicate with the API server
4. kube-proxy       d. Command-line interface used to control Kubernetes cluster manager
5. kube-apiserver   e. Performs all of the networking functions and routes network traffic
6. kube-scheduler   f. Stores configuration data relating to the status of the cluster
` },
        {type: 'text', value: 'Which option correctly matches the components with their description?'},
  ],
  "options": [
    { "type": "text", "value": "1-c, 2-f, 3-d, 4-b, 5-e, 6-a" },
    { "type": "text", "value": "1-b, 2-a, 3-e, 4-c, 5-f, 6-d" },
    { "type": "text", "value": "1-a, 2-d, 3-b, 4-c, 5-e, 6-f" },
    { "type": "text", "value": "1-d, 2-f, 3-e, 4-a, 5-c, 6-b" },
    { "type": "text", "value": "1-d, 2-f, 3-c, 4-e, 5-a, 6-b" }
  ],
  "answer": [
    { "type": "text", "value": "1-d, 2-f, 3-c, 4-e, 5-a, 6-b" }
  ]
}, {
  "id": 3,
  "question": [
    { "type": "text", "value": "Examine this udev device naming rule which gets processed successfully." },
    {type: 'command', value: `KERNEL=="hdb", DRIVER=="ide-disk", SYMLINK+="sparedisk"`},
    {type: 'text', value: 'Which two statements are true?'},
  ],
  "options": [
    { "type": "text", "value": "Symbolic link /dev/sparedisk is created for a device named /dev/hdb which has an ide-disk device driver if such a device is discovered." },
    { "type": "text", "value": "The matching device will have the kernel device name /dev/hdb." },
    { "type": "text", "value": "The matching device will be named /dev/sparedisk." },
    { "type": "text", "value": "Symbolic link /dev/sparedisk is created for a device named /dev/hdb or one that has an ide-disk device driver, whichever is discovered first." },
    { "type": "text", "value": "Symbolic link /dev/sparedisk is created linking to /dev/hdb and with an ide-disk device driver, thus overwriting existing symbolic links." }
  ],
  "answer": [
    { "type": "text", "value": "Symbolic link /dev/sparedisk is created for a device named /dev/hdb which has an ide-disk device driver if such a device is discovered." },
    { "type": "text", "value": "The matching device will have the kernel device name /dev/hdb." }
  ]
}, {
  "id": 4,
  "question": [
    { "type": "text", "value": "What is the purpose of /etc/sysconfig/network?" }
  ],
  "options": [
    { "type": "text", "value": "It is used to configure global settings for all network interfaces." },
    { "type": "text", "value": "It maintains a list of manually configured network interfaces." },
    { "type": "text", "value": "It configures the host to use DHCP for IP address assignment." },
    { "type": "text", "value": "It contains a list of devices for NetworkManager to ignore." }
  ],
  "answer": [
    { "type": "text", "value": "It is used to configure global settings for all network interfaces." }
  ]
}, {
  "id": 5,
  "question": [
    { "type": "text", "value": "Which two arguments or flags, when both are specified, cause iostat to run the same report several times?" }
  ],
  "options": [
    { "type": "text", "value": "-t" },
    { "type": "text", "value": "-N" },
    { "type": "text", "value": "-c" },
    { "type": "text", "value": "count" },
    { "type": "text", "value": "interval" }
  ],
  "answer": [
    { "type": "text", "value": "count" },
    { "type": "text", "value": "interval" }
  ]
}, {
  "id": 6,
  "question": [
    { "type": "text", "value": "Where are system journals kept by default?" }
  ],
  "options": [
    { "type": "text", "value": "/etc/systemd/journald/" },
    { "type": "text", "value": "/var/log/journal.log" },
    { "type": "text", "value": "/run/log/journal/" },
    { "type": "text", "value": "/var/log/journal/" }
  ],
  "answer": [
    { "type": "text", "value": "/var/log/journal/" }
  ]
}, {
  "id": 7,
  "question": [
    { "type": "text", "value": "Which two statements are true about firewalld zones?" }
  ],
  "options": [
    { "type": "text", "value": "A zone can apply to only one network interface at a time." },
    { "type": "text", "value": "Zones are managed by using the firewalld command." },
    { "type": "text", "value": "public is the default zone on a fresh install of firewalld." },
    { "type": "text", "value": "Each zone's firewall rules are managed independently." },
    { "type": "text", "value": "Normal users without sudo access can set and get the default zone." }
  ],
  "answer": [
    { "type": "text", "value": "Zones are managed by using the firewalld command." },
    { "type": "text", "value": "Each zone's firewall rules are managed independently." }
  ]
}, {
  "id": 8,
  "question": [
    { "type": "text", "value": "Examine this command:" }, 
    {type: 'command', value: `# ssh-keygen -R 10.10.2.1`},
    { "type": "text", "value": "What happens upon command execution?" }, 
  ],
  "options": [
    { "type": "text", "value": "The SSHFP fingerprint resource record for host 10.10.2.1 is printed." },
    { "type": "text", "value": "A remote forwarded connection to host 10.10.2.1 is generated." },
    { "type": "text", "value": "SSH keys are replaced for host 10.10.2.1." },
    { "type": "text", "value": "SSH keys belonging to host 10.10.2.1 are removed from a known host file." }
  ],
  "answer": [
    { "type": "text", "value": "SSH keys belonging to host 10.10.2.1 are removed from a known host file." }
  ]
}, {
  "id": 9,
  "question": [
    { "type": "text", "value": "Which two statements are true about the augenrules command?" }
  ],
  "options": [
    { "type": "text", "value": "Files without a .rules extension are ignored by the augenrules command." },
    { "type": "text", "value": "The augenrules --load command loads the old or newly built rules into the kernel." },
    { "type": "text", "value": "The augenrules --check command verifies the syntax within the audit.rules file before loading the rules into the kernel." },
    { "type": "text", "value": "Audit rules defined by the augenrules command are not persistent across reboots." },
    { "type": "text", "value": "It concatenates all files found in the /etc/audit/rules.d directory into a single /etc/audit/audit.rules file." }
  ],
  "answer": [
    { "type": "text", "value": "The augenrules --load command loads the old or newly built rules into the kernel." },
    { "type": "text", "value": "It concatenates all files found in the /etc/audit/rules.d directory into a single /etc/audit/audit.rules file." }
  ]
}, {
  "id": 10,
  "question": [
    { "type": "text", "value": "What is the default location that DNF searches for repositories?" }
  ],
  "options": [
    { "type": "text", "value": "/etc/yum.repos.d" },
    { "type": "text", "value": "/etc/dnf/dnf.conf" },
    { "type": "text", "value": "/etc/yum.conf" },
    { "type": "text", "value": "/etc/dnf/modules.d" }
  ],
  "answer": [
    { "type": "text", "value": "/etc/yum.repos.d" }
  ]
}, {
  "id": 11,
  "question": [
    { "type": "text", "value": "Which two directories store PAM authentication modules?" }
  ],
  "options": [
    { "type": "text", "value": "/lib64/security" },
    { "type": "text", "value": "/usr/lib" },
    { "type": "text", "value": "/lib/security" },
    { "type": "text", "value": "/var/lib" },
    { "type": "text", "value": "/etc/pam.d" }
  ],
  "answer": [
    { "type": "text", "value": "/lib64/security" },
    { "type": "text", "value": "/lib/security" }
  ]
}, {
  "id": 12,
  "question": [
    { "type": "text", "value": "Which two statements are true about kernel boot parameters?" }
  ],
  "options": [
    { "type": "text", "value": "Parameters passed to the kernel from the GRUB 2 menu are persistent and apply to all subsequent reboots." },
    { "type": "text", "value": "Boot parameters are defined as values for the GRUB_CMDLINE_LINUX directive in the /etc/default/grub file." },
    { "type": "text", "value": "Parameters passed to the kernel from the GRUB 2 command-line interface are persistent and apply to all subsequent reboots." },
    { "type": "text", "value": "Each kernel version's boot parameters are stored in independent configuration files in /boot/loader/entries." },
    { "type": "text", "value": "Boot parameters are defined as values for the GRUB_BOOT directive in the /etc/default/grub file." }
  ],
  "answer": [
    { "type": "text", "value": "Boot parameters are defined as values for the GRUB_CMDLINE_LINUX directive in the /etc/default/grub file." },
    { "type": "text", "value": "Each kernel version's boot parameters are stored in independent configuration files in /boot/loader/entries." }
  ]
}, {
  "id": 13,
  "question": [
    { "type": "text", "value": "Examine these commands:" }, 
    {type: 'command', value: `# mdadm /dev/md0 --fail /dev/sda1 --remove /dev/sda1; mdadm --add /dev/md0 /dev/sda1`},
    {type: 'text', value: `What happens upon execution?`},
  ],
  "options": [
    { "type": "text", "value": "It fails and removes /dev/sda1 in a single step, then replaces it with a new /dev/sda1." },
    { "type": "text", "value": "It fails and removes /dev/xvda1 in a single step, then returns the physical disk to /dev/md0." },
    { "type": "text", "value": "It removes /dev/sda1, then replaces /dev/sda1 with a new disk." },
    { "type": "text", "value": "It fails /dev/sda1, then adds a new /dev/xvda1 to /dev/md0." },
    { "type": "text", "value": "It fails /dev/xvda1 and removes /dev/md0 in a single step, then creates a new /dev/md0 and adds a new /dev/sda1." },
    { "type": "text", "value": "It fails and removes /dev/md0 in a single step, then returns the same physical disk to the array." }
  ],
  "answer": [
    { "type": "text", "value": "It fails and removes /dev/sda1 in a single step, then replaces it with a new /dev/sda1." }
  ]
}, {
  "id": 14,
  "question": [
    {type: 'text', value: `Examine this command and output:`},
    { "type": "command", "value": `
# mdadm --detail /dev/md0
${` `}
/dev/md0:
                Version : 1.2
          Creation Time : Tue Oct 27 16:53:38 2020
             Raid Level : raid5
             Array Size : 207872 (203.03 MiB 212.86 MB)
          Used Dev Size : 103936 (101.52 MiB 106.43 MB)
           Raid Devices : 3
          Total Devices : 3
            Persistence : Superblock is persistent
            Update Time : Tue Oct 27 16:53:38 2020
                  State : clean, degraded, recovering
         Active Devices : 2
        Working Devices : 3
         Failed Devices : 0
          Spare Devices : 1
                 Layout : left-symmetric
             Chunk Size : 512K
         Rebuild Status : 60% complete
                   Name : ol8.example.com:0 (local to host ol8.example.com)
                   UUID : 7018bd2f:0505d92d:750a781e:c224508d
                 Events : 66
        ${` `}
Number Major Minor RaidDevice State
0      8     49     0          active sync       /dev/sdd1
1      8     65     1          active sync       /dev/sde1
3      8     81     2          spare  rebuilding /dev/sdf1` },
        { "type": "text", "value": "Which two are true?" },
  ],
  "options": [
    { "type": "text", "value": "A new RAID device was just added to replace a failed one." },
    { "type": "text", "value": "An extra device was added to this RAID set to increase its size." },
    { "type": "text", "value": "The RAID set read and write performance is currently sub-optimal." },
    { "type": "text", "value": "A RAID device failed and has returned to normal operating status." },
    { "type": "text", "value": "Only write performance is currently sub-optimal on this RAID set." }
  ],
  "answer": [
    { "type": "text", "value": "A new RAID device was just added to replace a failed one." },
    { "type": "text", "value": "The RAID set read and write performance is currently sub-optimal." }
  ]
}, {
  "id": 15,
  "question": [
    { "type": "text", "value": "As root you configured a file system using AutoFS with default settings." },
    { "type": "text", "value": "In the first session, you changed to a directory under AutoFS control. In a second session, you changed the directory to /etc. Now the idle time for the first session expires." },
    { "type": "text", "value": "Which two statements are true about the status of the file system mounted in the first session?" }
  ],
  "options": [
    { "type": "text", "value": "It remains mounted until you switch to a directory outside the current mount point." },
    { "type": "text", "value": "It was unmounted from the first session when the timer expired." },
    { "type": "text", "value": "It remains mounted until you log out from the first session." },
    { "type": "text", "value": "It was unmounted when the second session began." },
    { "type": "text", "value": "It remains mounted as long as the system is running." }
  ],
  "answer": [
    { "type": "text", "value": "It remains mounted until you switch to a directory outside the current mount point." },
    { "type": "text", "value": "It was unmounted from the first session when the timer expired." }
  ]
}, {
  "id": 16,
  "question": [
    { "type": "text", "value": "Examine this command which executes successfully:" },
    { "type": "command", "value": "# setfacl -m m::rx share_file" },
    { "type": "text", "value": "What is the result?" }
  ],
  "options": [
    { "type": "text", "value": "It removes a group's group entry from the share_file file's ACL." },
    { "type": "text", "value": "It grants user read-execute access to the share_file file." },
    { "type": "text", "value": "It sets the default ACLs for the my_share_file file." },
    { "type": "text", "value": "It revokes write access from all groups and all named users using the effective rights mask." }
  ],
  "answer": [
    { "type": "text", "value": "It revokes write access from all groups and all named users using the effective rights mask." }
  ]
}, {
  "id": 17,
  "question": [
    { "type": "text", "value": "Examine this command, which executes successfully:" }, 
    { "type": "command", "value": "useradd -m -s /bin/bash alice" },
    { "type": "text", "value": "Which statement is true about the account?" }
  ],
  "options": [
    { "type": "text", "value": "It is assigned a home directory and a password." },
    { "type": "text", "value": "It is a member of the wheel group." },
    { "type": "text", "value": "It is not assigned a home directory." },
    { "type": "text", "value": "It is assigned a shell but without a password." }
  ],
  "answer": [
    { "type": "text", "value": "It is assigned a shell but without a password." }
  ]
}, {
  "id": 18,
  "question": [
    { "type": "text", "value": "Which two statements are true about cgroups version 1 and version 2 in Oracle Linux 8?" }
  ],
  "options": [
    { "type": "text", "value": "cgroups version 2 can only be implemented after disabling and removing cgroups version 1." },
    { "type": "text", "value": "Specific controllers can be mounted in cgroups version 2 after disabling them in cgroups version 1." },
    { "type": "text", "value": "cgroups version 1 is the default implementation." },
    { "type": "text", "value": "One cgroups version can be disabled during run time, and the other version enabled after all user processes have been terminated." },
    { "type": "text", "value": "A mounted cgroups filesystem can be completely unmounted even when there are one or more processes in child cgroups." }
  ],
  "answer": [
    { "type": "text", "value": "Specific controllers can be mounted in cgroups version 2 after disabling them in cgroups version 1." },
    { "type": "text", "value": "One cgroups version can be disabled during run time, and the other version enabled after all user processes have been terminated." }
  ]
}, {
  "id": 19,
  "question": [
    { "type": "text", "value": "Which two methods of changing kernel parameters can you use to modify values for the running system?" }
  ],
  "options": [
    { "type": "text", "value": "Issuing the sysctl -w command to write values to specific files in the /sys directory." },
    { "type": "text", "value": "Using the echo command to write values to specific files in the /sys directory." },
    { "type": "text", "value": "Using the echo command to write values to specific files in the /proc/sys directory." },
    { "type": "text", "value": "Adding to or modifying parameters and values in the /etc/systemd/sysctl.conf file followed by issuing the sysctl -p command." },
    { "type": "text", "value": "Issuing the sysctl -w command to write values to specific files in the /proc/sys directory." }
  ],
  "answer": [
    { "type": "text", "value": "Issuing the sysctl -w command to write values to specific files in the /sys directory." },
    { "type": "text", "value": "Using the echo command to write values to specific files in the /proc/sys directory." }
  ]
}, {
  "id": 20,
  "question": [
    { "type": "text", "value": "Examine this command and output:\n\n\n\n" }, 
    { "type": "command", "value": `
# dnf history
${` `}
ID | Command line               | Date and time    | Action(s) | Altered
--------------------------------------------------------------------------
11 | --enable repo=epel install | 2020-02-24 08:19 | Install   | 1
10 | install https://dl.fedora  | 2020-02-24 08:16 | Install   | 1
9  | reinstall nginx -y         | 2020-02-24 08:12 | R         | 2
8  | install nginx -y           | 2020-02-24 08:12 | Install   | 39
7  | remove nginx               | 2020-02-24 08:11 | Removed   | 39
6  | install nginx-1.14.1-9.0   | 2020-02-24 08:10 | Install   | 39
5  | install wget -y            | 2020-02-24 08:07 | Install   | 1
4  | install tmux               | 2020-02-24 08:07 | Install   | 1
3  | remove tmux -y             | 2020-02-10 12:43 | Removed   | 1
2  | install tmux -y            | 2020-02-10 12:43 | Install   | 1
1  |                            | 2020-02-07 10:05 | Install   | 397 EE
` },
    { "type": "text", "value": "Which two commands will uninstall the nginx package?" }
  ],
  "options": [
    { "type": "command", "value": "dnf clean packages" },
    { "type": "command", "value": "dnf downgrade nginx" },
    { "type": "command", "value": "dnf upgrade -x nginx" },
    { "type": "command", "value": "dnf history redo 7" },
    { "type": "command", "value": "dnf remove nginx" }
  ],
  "answer": [
    { "type": "command", "value": "dnf history redo 7" },
    { "type": "command", "value": "dnf remove nginx" }
  ]
}, {
  "id": 21,
  "question": [
    { "type": "text", "value": "Which two statements are true about the GRUB 2 menu?" }
  ],
  "options": [
    { "type": "text", "value": "It allows the installation of a new kernel version to a system." },
    { "type": "text", "value": "It allows the selection of the Red Hat Compatible Kernel to boot." },
    { "type": "text", "value": "It allows the selection of Oracle's Unbreakable Enterprise Kernel to boot." },
    { "type": "text", "value": "It allows the removal of a kernel from a system." },
    { "type": "text", "value": "Its menu configuration settings can be changed in /boot/grub2/grub2.cfg." }
  ],
  "answer": [
    { "type": "text", "value": "It allows the selection of the Red Hat Compatible Kernel to boot." },
    { "type": "text", "value": "It allows the selection of Oracle's Unbreakable Enterprise Kernel to boot." }
  ]
}, {
  "id": 22,
  "question": [
    { "type": "text", "value": "You must add an additional swap device and you add this entry to /etc/fstab:" }, 
    {type: 'command', value: `/swapfile none swap defaults 0 0`},
    {type: 'text', value: `Examine these commands and output:`},
    {type: 'command', value: `
# dd if=/dev/zero of=/swapfile bs=1024 count=1048576
${` `}
1048576+0 records in
1048576+0 records out
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 4.32488 s, 248 MB/s
${` `}
# swapon -a
${` `}
swapon: /swapfile: insecure permissions 0644, 0600 suggested.
swapon: /swapfile: read swap header failed`},
    {type: 'text', value: `Which two actions must you perform to add this swap device?`},
  ],
  "options": [
    { "type": "text", "value": "Initialize the /swapfile file by using the mkswap command." },
    { "type": "text", "value": "Assign a label to the /swapfile file by using the swaplabel command." },
    { "type": "text", "value": "Execute swapon --all." },
    { "type": "text", "value": "Execute swapon -L swapfile /swapfile after adding a label." },
    { "type": "text", "value": "Change default to user in the /etc/fstab entry." },
    { "type": "text", "value": "Use a physical disk partition type of 82 (Linux swap)." }
  ],
  "answer": [
    { "type": "text", "value": "Initialize the /swapfile file by using the mkswap command." },
    { "type": "text", "value": "Execute swapon --all." }
  ]
}, {
  "id": 23,
  "question": [
    { "type": "text", "value": "You must use the cryptsetup command to:" },
    {type: 'text', value: `1. Initialize the LUKS partition`},
    {type: 'text', value: `2. Set the initial key`},
    {type: 'text', value: `Which option does this?`},
  ],
  "options": [
    { "type": "text", "value": "luksAddKey" },
    { "type": "text", "value": "luksAddKey" },
    { "type": "text", "value": "luksOpen" },
    { "type": "text", "value": "luksUUID" },
    { "type": "text", "value": "luksFormat" }
  ],
  "answer": [
    { "type": "text", "value": "luksFormat" }
  ]
}, {
  "id": 24,
  "question": [
    { "type": "text", "value": "Which two components are used for creating a new rsyslog rule?" }
  ],
  "options": [
    { "type": "text", "value": "module" },
    { "type": "text", "value": "security policy" },
    { "type": "text", "value": "action" },
    { "type": "text", "value": "parser" },
    { "type": "text", "value": "filter" }
  ],
  "answer": [
    { "type": "text", "value": "action" },
    { "type": "text", "value": "filter" }
  ]
}, {
  "id": 25,
  "question": [
    { "type": "text", "value": "Examine /etc/anacrontab:" }, 
    {type: 'command', value: `
SHELL=/bin/sh
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root
${` `}
# the maximal random delay added to the base delay of the jobs
RANDOM_DELAY=45
${` `}
# the jobs are started during the following hours only
START_HOURS_RANGE=3-22
${` `}
#period in days   delay in minutes   job-identifier   command
1        5      dailyjob    nice run-parts     /etc/cron.daily
7        25     weeklyjob   nice run-parts     /etc/cron.weekly
@monthly 45     monthlyjob  nice run-parts     /etc/cron.monthly`},
    {type: 'text', value: `Which two statements are true about the jobs scheduled in this file?`},
  ],
  "options": [
    { "type": "text", "value": "Scripts run by the first job are delayed between 11 and 45 minutes." },
    { "type": "text", "value": "Scripts run by the second job are delayed between 31 and 70 minutes." },
    { "type": "text", "value": "Jobs defined in this anacrontab file can be executed between 15:00 and 22:00." },
    { "type": "text", "value": "Jobs defined in this anacrontab file are randomly delayed by up to 51 minutes." },
    { "type": "text", "value": "Scripts run by the third job are delayed between 45 and 90 minutes." }
  ],
  "answer": [
    { "type": "text", "value": "Jobs defined in this anacrontab file can be executed between 15:00 and 22:00." },
    { "type": "text", "value": "Scripts run by the third job are delayed between 45 and 90 minutes." }
  ]
}, {
  "id": 26,
  "question": [
    { "type": "text", "value": "Which statement is true about the crontab command?" }
  ],
  "options": [
    { "type": "text", "value": "If neither /etc/cron.allow nor /etc/cron.deny exists, then only root can use the cron facility." },
    { "type": "text", "value": "If /etc/cron.allow exists, then all users are permitted to use the cron facility unless they are listed in /etc/cron.deny." },
    { "type": "text", "value": "If /etc/cron.deny exists, then any user listed in it is never permitted to use the cron facility." },
    { "type": "text", "value": "If neither /etc/cron.allow nor /etc/cron.deny exists, then all users may use the cron facility." },
    { "type": "text", "value": "If /etc/cron.allow exists, then only users listed in it are permitted to use the cron facility." }
  ],
  "answer": [
    { "type": "text", "value": "If /etc/cron.allow exists, then only users listed in it are permitted to use the cron facility." }
  ]
}, {
  "id": 27,
  "question": [
  { "type": "text", "value": `Examine these requirements for a host with a user oracle:` }, 
  { "type": "text", "value": `1. Network services must run in a confined domain.` },
  { "type": "text", "value": `2. The oracle user must be confined.` },
  { "type": "text", "value": `3. The oracle user must be able to use Mozilla Firefox.` },
  { "type": "text", "value": `4. Access to files and directories must be granted based on SELinux contexts.` },
  { "type": "text", "value": `5. The SELinux configuration must be persistent across system restarts.` },
  { "type": "text", "value": `6. Users must be able to publish private HTML content.` },
  { "type": "text", "value": `Now examine these commands and output:` },
  { "type": "command", "value": `
# sestatus
SELinux status: enabled
SELinuxfs mount: /sys/fs/selinux
SELinux root directory: /etc/selinux
Loaded policy name: targeted
Current mode: permissive
Mode from config file: permissive
Policy MLS status: enabled
Policy deny_unknown status: allowed
Memory protection checking: actual (secure)
Max kernel policy version: 31
${` `}
# setenforce enforcing
# semanage login -a -s guest_u oracle
# setsebool -P httpd_enable_homedirs on`},
  { "type": "text", value: "Which requirements are satisfied?" }
  ],
  "options": [
    { "type": "text", "value": "1, 2, 3, 5, 6" },
    { "type": "text", "value": "1, 2, 3, 4, 5, 6" },
    { "type": "text", "value": "1, 2, 4, 5, 6" },
    { "type": "text", "value": "1, 2, 4, 6" },
    { "type": "text", "value": "1, 2, 3, 6" },
    { "type": "text", "value": "1, 2, 6" }
  ],
  "answer": [
    { "type": "text", "value": "1, 2, 4, 5, 6" }
  ]
}, {
  "id": 28,
  "question": [
    { "type": "text", "value": "Which two statements are true about chrony in Oracle Linux 8?" }
  ],
  "options": [
    { "type": "text", "value": "The chrony daemon depends only on a higher stratum server for time signals from the Global Positioning System or standardized radio broadcasts." },
    { "type": "text", "value": "chrony is a feature that implements NTP to maintain accurate timekeeping on the network." },
    { "type": "text", "value": "chronyd is the command-line interface for the chrony daemon." },
    { "type": "text", "value": "The chrony daemon service replaces ntpd for the management of NTP." },
    { "type": "text", "value": "chronyd requires uninterrupted network access to maintain the system clock where it is implemented." }
  ],
  "answer": [
    { "type": "text", "value": "chrony is a feature that implements NTP to maintain accurate timekeeping on the network." },
    { "type": "text", "value": "The chrony daemon service replaces ntpd for the management of NTP." }
  ]
}, {
  "id": 29,
  "question": [
    { "type": "text", "value": "Examine this command:" },
    {type: 'command', value: `# getfacl wklystatus.txt | setfacl --set-file=- monthlystatus.txt`},
    {type: 'text', value: `What is the result upon execution?`},
  ],
  "options": [
    { "type": "text", "value": "It displays the name, owner, group, and ACL for both wklystatus.txt and monthlystatus.txt." },
    { "type": "text", "value": "It displays the name, owner, group, and ACL for monthlystatus.txt." },
    { "type": "text", "value": "It copies the ACL of wklystatus.txt to monthlystatus.txt." },
    { "type": "text", "value": "It copies the ACL" }
  ],
  "answer": [
    { "type": "text", "value": "It copies the ACL of wklystatus.txt to monthlystatus.txt." }
  ]
}, {
  "id": 30,
  "question": [
    { "type": "text", "value": "Which two are valid list arguments, or filters used by the auditctl -l -a command?" }
  ],
  "options": [
    { "type": "text", "value": "exit" },
    { "type": "text", "value": "proc" },
    { "type": "text", "value": "exclude" },
    { "type": "text", "value": "enter" },
    { "type": "text", "value": "include" }
  ],
  "answer": [
    { "type": "text", "value": "exit" },
    { "type": "text", "value": "exclude" }
  ]
}, {
  "id": 31,
  "question": [
    { "type": "text", "value": "Which is true about the /etc/sysconfig directory in an Oracle Linux 8 system?" }
  ],
  "options": [
    { "type": "text", "value": "Files in this directory hierarchy contain information about system hardware." },
    { "type": "text", "value": "Files in this directory hierarchy contain information about running processes." },
    { "type": "text", "value": "Its contents depend on the packages installed on the system." },
    { "type": "text", "value": "It is used to access device and device driver information." }
  ],
  "answer": [
    { "type": "text", "value": "Its contents depend on the packages installed on the system." }
  ]
}, {
  "id": 32,
  "question": [
    { "type": "text", "value": "Which two actions allow multiple users write access to files in a shared directory by using user private groups?" }
  ],
  "options": [
    { "type": "text", "value": "adding users to the shared directory" },
    { "type": "text", "value": "changing permissions on all individual files and directories" },
    { "type": "text", "value": "changing the shared directory's ownership to root" },
    { "type": "text", "value": "setting the setgid bit on the shared directory" },
    { "type": "text", "value": "executing umask" }
  ],
  "answer": [
    { "type": "text", "value": "changing permissions on all individual files and directories" },
    { "type": "text", "value": "setting the setgid bit on the shared directory" }
  ]
}, {
  "id": 33,
  "question": [
    { "type": "text", "value": "Examine this segment of /etc/rsyslog.conf." }, 
    {type: 'command', value: `
# Log all kernel messages to the console.
# Logging much else clutters up the screen.
kern.* /dev/console
${` `}
# Log anything (except mail) of level info or higher.
# Don't log private authentication messages!
*.info;mail.none;authpriv.none;cron.none                /var/log/messages
${` `}
# The authpriv file has restricted access.
authpriv.* /var/log/secure
${` `}
# Log all the mail messages in one place.
mail.* -/var/log/maillog
${` `}
# Log cron stuff
cron.* /var/log/cron
${` `}
# Everybody gets emergency messages
*.emerg                                                 :omusrmsg:*`},

{ "type": "text", "value": "Now examine this log file output:" },
 {type: 'command', value: `
Nov 9 20:32:16 server02 sudo[4570]: pam_unix(sudo:session): session opened for user root by opc(uid=0)
Nov 9 20:32:17 server02 sudo[4570]: pam_unix(sudo:session): session closed for user root
Nov 9 20:32:24 server02 unix_chkpwd[4661]: password check failed for user (root)
Nov 9 20:32:24 server02 su[4581]: pam_unix(su:auth): authentication failure; logname=opc uid=1000 euid=user=root`},
    {type: 'text', value: `Which setting enabled the reporting of this log file output?`},
  ],
  "options": [
    { "type": "command", "value": "kern.* /dev/sssd/sssd.log" },
    { "type": "command", "value": "cron.* /var/log/cron" },
    { "type": "command", "value": "*.emerg *" },
    { "type": "command", "value": "*.info;mail.none;authpriv.none;cron.none /var/log/messages" },
    { "type": "command", "value": "authpriv.* /var/log/auth" }
  ],
  "answer": [
    { "type": "command", "value": "authpriv.* /var/log/auth" }
  ]
}, {
  "id": 34,
  "question": [
    { "type": "text", "value": "Which two statements are true about systemd system and service manager?" }
  ],
  "options": [
    { "type": "text", "value": "systemd is the first process that starts after the system boots, and is the final process left running before the system shuts down." },
    { "type": "text", "value": "systemd is backward-compatible with the System V init scripts that were used in earlier versions of Oracle Linux." },
    { "type": "text", "value": "systemd reads /etc/systemd to determine which services to start." },
    { "type": "text", "value": "The service command is used to start and stop systemd service units." },
    { "type": "text", "value": "systemd service units expose kernel devices and can be used to implement device-based activation." }
  ],
  "answer": [
    { "type": "text", "value": "systemd is the first process that starts after the system boots, and is the final process left running before the system shuts down." },
    { "type": "text", "value": "systemd is backward-compatible with the System V init scripts that were used in earlier versions of Oracle Linux." }
  ]
}, {
  "id": 35,
  "question": [
    { "type": "text", "value": "Which command configures a VLAN?" }
  ],
  "options": [
    { "type": "command", "value": "nmcli con add type vlan con-name vlan-eth0.100 ifname eth0.100 dev eth0 id 100" },
    { "type": "command", "value": "nmcli con add type vlan ifname eth0.100 dev eth0" },
    { "type": "command", "value": "nmcli add type vlan con-name vlan-eth0.100 ifname eth0.100 id 100" },
    { "type": "command", "value": "nmcli con add type vlan ifname eth0.100 dev id 100" }
  ],
  "answer": [
    { "type": "command", "value": "nmcli con add type vlan con-name vlan-eth0.100 ifname eth0.100 dev eth0 id 100" }
  ]
}, {
  "id": 36,
  "question": [
    { "type": "text", "value": "Which statement is true about slice or scope units?" }
  ],
  "options": [
    { "type": "text", "value": "Processes can be found within a scope or a service." },
    { "type": "text", "value": "Transient user scopes for sessions are found in the system.slice." },
    { "type": "text", "value": "Processes can be found within a slice at the same level as scopes and services." },
    { "type": "text", "value": "Services are found within the user.slice along with specific users logged in to the system." }
  ],
  "answer": [
    { "type": "text", "value": "Processes can be found within a scope or a service." }
  ]
}, {
  "id": 37,
  "question": [
    { "type": "text", "value": "Which two are true about using Ksplice?" }
  ],
  "options": [
    { "type": "text", "value": "yum cannot upgrade a kernel patched by Ksplice." },
    { "type": "text", "value": "The Ksplice client is freely available to all customers." },
    { "type": "text", "value": "Ksplice has two clients; each can run in three different modes." },
    { "type": "text", "value": "It can patch the kernel without shutting down the system." },
    { "type": "text", "value": "Ksplice can be used without a network connection." }
  ],
  "answer": [
    { "type": "text", "value": "It can patch the kernel without shutting down the system." },
    { "type": "text", "value": "Ksplice can be used without a network connection." }
  ]
}, {
  "id": 38,
  "question": [
    { "type": "text", "value": "Which two statements are true about the Secure Boot process?" }
  ],
  "options": [
    { "type": "text", "value": "When shim is authenticated, the GRUB2 bootloader, signed by Oracle and Microsoft, is loaded after being authenticated by shim." },
    { "type": "text", "value": "Secure Boot steps are identical to BIOS booting without Secure Boot, except that components must be signed and authenticated to be loaded and executed." },
    { "type": "text", "value": "GRUB2 validates the kernel signature, signed by Oracle and Microsoft, allowing the kernel to be executed." },
    { "type": "text", "value": "A \"chain of trust\" is established, beginning with a first-stage bootloader, shim, which is signed by Oracle and Microsoft." },
    { "type": "text", "value": "Secure Boot is an optional feature intended to prevent execution of malware during the boot process." }
  ],
  "answer": [
    { "type": "text", "value": "Secure Boot is an optional feature intended to prevent execution of malware during the boot process." },
    { "type": "text", "value": "A \"chain of trust\" is established, beginning with a first-stage bootloader, shim, which is signed by Oracle and Microsoft." }
  ]
}, {
  "id": 39,
  "question": [
    { "type": "text", "value": "Which three statements are true for SELinux?" }
  ],
  "options": [
    { "type": "text", "value": "setenforce 1 permanently changes SELinux to enforcing mode." },
    { "type": "text", "value": "enforcing mode is enabled by setting SELINUX=enforcing in /etc/selinux/semanage.conf." },
    { "type": "text", "value": "enforcing mode is enabled by default." },
    { "type": "text", "value": "Actions denied by SELinux are written to /var/log/audit.log or /var/log/messages." },
    { "type": "text", "value": "setenforce 0 permanently changes SELinux to permissive mode." },
    { "type": "text", "value": "The sealert utility sends email notifications for denied actions." },
    { "type": "text", "value": "enforcing mode denies access based on SELinux policy rules." }
  ],
  "answer": [
    { "type": "text", "value": "Enforcing mode is enabled by default." },
    { "type": "text", "value": "Actions denied by SELinux are written to /var/log/audit.log or /var/log/messages." },
    { "type": "text", "value": "enforcing mode denies access based on SELinux policy rules." }
  ]
}, {
  "id": 40,
  "question": [
    { "type": "text", "value": "Which three directories are included in the /sys file system?" }
  ],
  "options": [
    { "type": "text", "value": "firmware" },
    { "type": "text", "value": "drv" },
    { "type": "text", "value": "hosts" },
    { "type": "text", "value": "ssl" },
    { "type": "text", "value": "fs" },
    { "type": "text", "value": "network-scripts" },
    { "type": "text", "value": "devices" }
  ],
  "answer": [
    { "type": "text", "value": "firmware" },
    { "type": "text", "value": "fs" },
    { "type": "text", "value": "devices" }
  ]
}, {
  "id": 41,
  "question": [
    { "type": "text", "value": "What is the purpose of the authorized_keys file?" }
  ],
  "options": [
    { "type": "text", "value": "It specifies SSH keys created by the user account for which the file is configured." },
    { "type": "text", "value": "It specifies SSH keys that can be used for logging in to the user account for which the file is configured." },
    { "type": "text", "value": "It contains DSA host keys for SSH servers accessed by the user." },
    { "type": "text", "value": "It contains the signed private key used by a server to authenticate a client when connecting to that server." }
  ],
  "answer": [
    { "type": "text", "value": "It specifies SSH keys that can be used for logging in to the user account for which the file is configured." }
  ]
}, {
  "id": 42,
  "question": [
    { "type": "text", "value": "Examine this output:" },
        {type: 'command', value: `5.4.17-2011.7.4.el8uek.x86_64`},
    {type: 'text', value: `Which Ksplice command produces it?`},
  ],
  "options": [
    { "type": "command", "value": "uptrack-uname -r" },
    { "type": "command", "value": "uptrack-show --available" },
    { "type": "command", "value": "uptrack-uname -a" },
    { "type": "command", "value": "uptrack-show --version" },
    { "type": "command", "value": "uptrack-show" }
  ],
  "answer": [
    { "type": "command", "value": "uptrack-uname -r" }
  ]
}, {
  "id": 43,
  "question": [
    { "type": "text", "value": "Examine this command and output:\n\n# grep mnt /etc/fstab\nhost01:/export /mnt nfs noauto,user\n\nWhich statement is true?" }
  ],
  "options": [
    { "type": "text", "value": "The /mnt filesystem is not mounted automatically after a system reboot, even if currently mounted." },
    { "type": "text", "value": "The /mnt filesystem will be mounted with the noexec option when manually mounted by an ordinary user." },
    { "type": "text", "value": "The /mnt filesystem is mounted automatically during system startup." },
    { "type": "text", "value": "The /mnt filesystem is mounted automatically after a system reboot." }
  ],
  "answer": [
    { "type": "text", "value": "The /mnt filesystem is not mounted automatically after a system reboot, even if currently mounted." }
  ]
}, {
  "id": 44,
  "question": [
    { "type": "text", "value": "Which two are true about logwatch?" }
  ],
  "options": [
    { "type": "text", "value": "It automatically analyzes system logs to identify and purge unused log files." },
    { "type": "text", "value": "It is configured by default to run every night and email a report to root." },
    { "type": "text", "value": "It monitors only users' log files and notifies system administrators of anomalies." },
    { "type": "text", "value": "It can be configured to rotate system log files." },
    { "type": "text", "value": "It searches system logs for a given time period and reports on specific areas of interest." }
  ],
  "answer": [
    { "type": "text", "value": "It is configured by default to run every night and email a report to root." },
    { "type": "text", "value": "It searches system logs for a given time period and reports on specific areas of interest." }
  ]
}, {
  "id": 45,
  "question": [
    { "type": "text", "value": "Which two default user account settings are contained in /etc/login.defs?" }
  ],
  "options": [
    { "type": "text", "value": "password aging controls" },
    { "type": "text", "value": "decryption method used to decrypt passwords" },
    { "type": "text", "value": "group hashed passwords" },
    { "type": "text", "value": "user hashed passwords" },
    { "type": "text", "value": "encryption method used to encrypt passwords" }
  ],
  "answer": [
    { "type": "text", "value": "password aging controls" },
    { "type": "text", "value": "encryption method used to encrypt passwords" }
  ]
}, {
  "id": 46,
  "question": [
    { "type": "text", "value": "Which two statements are true about the Logical Volume Manager (LVM) and its components?" }
  ],
  "options": [
    { "type": "text", "value": "You can use LVM to increase a logical volume's capacity by using free space from the volume group." },
    { "type": "text", "value": "LVM is recognizable to users." },
    { "type": "text", "value": "Logical volumes function as partitions that use space on only one physical disk." },
    { "type": "text", "value": "You cannot dynamically increase the size of volume groups or logical volumes after creation." },
    { "type": "text", "value": "Each logical volume is analogous to a standard disk partition." }
  ],
  "answer": [
    { "type": "text", "value": "You can use LVM to increase a logical volume's capacity by using free space from the volume group." },
    { "type": "text", "value": "Each logical volume is analogous to a standard disk partition." }
  ]
}, {
  "id": 47,
  "question": [
    { "type": "text", "value": "The links in a network bond are being monitored with Media Independent Interface (MII) monitoring.\n\nWhich two statements are true?" }
  ],
  "options": [
    { "type": "text", "value": "The carrier state of both the local interface and the remote interface are monitored." },
    { "type": "text", "value": "This is the default option for link monitoring." },
    { "type": "text", "value": "Only the device driver is used to provide carrier state information." },
    { "type": "text", "value": "Only the carrier state of the local interface is monitored." },
    { "type": "text", "value": "A list of ARP targets can be provided for MII monitoring." }
  ],
  "answer": [
    { "type": "text", "value": "This is the default option for link monitoring." },
    { "type": "text", "value": "Only the carrier state of the local interface is monitored." }
  ]
}, {
  "id": 48,
  "question": [
    { "type": "text", "value": "Examine this command, which executes successfully:" }, 
        {type: 'command', value: `# nmcli con add con-name eth2 type ethernet ifname eth2 \\
ipv6.address 2804:14c:110:ab2f:c31b:1212:7917:708a/64 \\
ipv6.gateway 2804:14c:110:ab2f::1003 \\
ipv4.address 192.168.0.5/24 ipv4.gateway 192.168.0.254`},
    {type: 'text', value: `The eth2 connection does not exist.`},
    {type: 'text', value: `Which two statements are true?`},
  ],
  "options": [
    { "type": "text", "value": "A static IP address is assigned to the eth2 connection." },
    { "type": "text", "value": "The configuration is saved in /etc/sysconfig/network." },
    { "type": "text", "value": "Ethernet connection eth2 is created." },
    { "type": "text", "value": "Ethernet interface eth2 is created." },
    { "type": "text", "value": "It configures an automatic IPv6 address." }
  ],
  "answer": [
    { "type": "text", "value": "A static IP address is assigned to the eth2 connection." },
    { "type": "text", "value": "Ethernet connection eth2 is created." }
  ]
}, {
  "id": 49,
  "question": [
    { "type": "text", "value": "The ss command was invoked with options to:" }, 
    {type: 'text', value: `1. limit output to all listening and non-listening tcp ports`},
    {type: 'text', value: `2. display ports instead of the protocols that typically use those ports`},
    {type: 'text', value: `3. display all available internal tcp information`},
    {type: 'text', value: `4. display only connections whose source or destination port is 80.`},
    {type: 'text', value: `Which two results are produced by the command?`},
  ],
  "options": [
    { "type": "text", "value": "icmp6 UNKNOWN 0 0 :::58 *:*" },
    { "type": "text", "value": "UNKNOWN 0 0 [::]:323 [::]:*" },
    { "type": "text", "value": "tcp CLOSE-WAIT 32 0 server.example.com:44732 12.21.0.15:https" },
    { "type": "text", "value": "LISTEN 0 511 *:80 *:* cubic cwnd:10" },
    { "type": "text", "value": "ESTAB 0 0 10.12.78.92:50384 169.254.169.254:80 cubic wscale:9,7 rto:201 rtt:0.226/0.133 ato:40 mss:8948 pmtu:9000 rcvmss:1228 advmss:1228 cwnd:10 bytes_sent:142 bytes_acked:143 bytes_received:1728 segs_out:4 segs_in:7 data_segs_out:1 data_segs_in:1 send 515743362bps lastsnd:11351 lastrcv:11351 lastack:11351 pacing_rate 6334867256bps delivery_rate 504112672bps delivered:2 app_limited rcv_space:62920 rcv_ssthresh:56588 minrtt:0.142" }
  ],
  "answer": [
    { "type": "text", "value": "LISTEN 0 511 *:80 *:* cubic cwnd:10" },
    { "type": "text", "value": "ESTAB 0 0 10.12.78.92:50384 169.254.169.254:80 cubic wscale:9,7 rto:201 rtt:0.226/0.133 ato:40 mss:8948 pmtu:9000 rcvmss:1228 advmss:1228 cwnd:10 bytes_sent:142 bytes_acked:143 bytes_received:1728 segs_out:4 segs_in:7 data_segs_out:1 data_segs_in:1 send 515743362bps lastsnd:11351 lastrcv:11351 lastack:11351 pacing_rate 6334867256bps delivery_rate 504112672bps delivered:2 app_limited rcv_space:62920 rcv_ssthresh:56588 minrtt:0.142" }
  ]
}, {
  "id": 50,
  "question": [
    { "type": "text", "value": "Which two statements are true about the Linux Auditing System?" }
  ],
  "options": [
    { "type": "text", "value": "Auditing can scan for Common Vulnerabilities and Exposures (CVE) and automatically apply needed patches to a system." },
    { "type": "text", "value": "Auditing includes security policies, each of which includes security rules, or checks, which are checked when you run a security scan." },
    { "type": "text", "value": "Auditing rules can log administrator attempts to access user home directories." },
    { "type": "text", "value": "Auditing system call rules can affect system performance depending on the amount of information that is logged." },
    { "type": "text", "value": "Auditing modes include permissive, enforcing, and disabled." }
  ],
  "answer": [
    { "type": "text", "value": "Auditing rules can log administrator attempts to access user home directories." },
    { "type": "text", "value": "Auditing system call rules can affect system performance depending on the amount of information that is logged." }
  ]
}, {
  "id": 51,
  "question": [
    { "type": "text", "value": "Which three are features of the btrfs file system?" }
  ],
  "options": [
    { "type": "text", "value": "general-purpose volume manager" },
    { "type": "text", "value": "cluster file system" },
    { "type": "text", "value": "transparent compression to save disk space" },
    { "type": "text", "value": "copy-on-write metadata" },
    { "type": "text", "value": "block devices mirroring" },
    { "type": "text", "value": "can roll back to a prior, known good state" },
    { "type": "text", "value": "automatic defragmentation" }
  ],
  "answer": [
    { "type": "text", "value": "transparent compression to save disk space" },
    { "type": "text", "value": "can roll back to a prior, known good state" },
    { "type": "text", "value": "Copy-on-write metadata" }
  ]
}, {
  "id": 52,
  "question": [
    { "type": "text", "value": "What contains the rules in an nftable ruleset?" }
  ],
  "options": [
    { "type": "text", "value": "hook" },
    { "type": "text", "value": "chain" },
    { "type": "text", "value": "filter" },
    { "type": "text", "value": "table" }
  ],
  "answer": [
    { "type": "text", "value": "chain" }
  ]
}, {
  "id": 53,
  "question": [
    { "type": "text", "value": "Which two statements are true about container technology?" }
  ],
  "options": [
    { "type": "text", "value": "Podman, Buildah, and Skopeo are independent tools to create, run, and manage container applications across compatible Oracle Linux systems." },
    { "type": "text", "value": "Podman requires a running daemon to function and to enable containers to start and run without root permissions." },
    { "type": "text", "value": "A container application is dependent on the host operating system and kernel version." },
    { "type": "text", "value": "A container application built on a bare metal system cannot run on virtual machines or cloud instances." },
    { "type": "text", "value": "Containers package an application with the individual runtime stack." }
  ],
  "answer": [
    { "type": "text", "value": "Podman, Buildah, and Skopeo are independent tools to create, run, and manage container applications across compatible Oracle Linux systems." },
    { "type": "text", "value": "Containers package an application with the individual runtime stack." }
  ]
}, {
  "id": 54,
  "question": [
    { "type": "text", "value": "Examine this command:" }, 
     {type: 'command', value: `$ podman pull docker.io/library/oraclelinux:8`},
    {type: 'text', value: `Which two statements are true upon execution?`},
  ],
  "options": [
    { "type": "text", "value": "The command requires a registry location." },
    { "type": "text", "value": "The command will pull an image from the Oracle Container Registry when executed." },
    { "type": "text", "value": "The command will pull an image from a registry to a local machine when executed." },
    { "type": "text", "value": "The command will pull a container from a registry to a local machine when executed." },
    { "type": "text", "value": "The command requires a repository tag." }
  ],
  "answer": [
    { "type": "text", "value": "The command requires a registry location." },
    { "type": "text", "value": "The command will pull an image from a registry to a local machine when executed." }
  ]
}, {
  "id": 55,
  "question": [
    { "type": "text", "value": "Examine this command which executes successfully:" }, 
     {type: 'command', value: `$ kubectl run nginx --image=nginx --port=80 --labels=app=nginx --replicas=2`},
    {type: 'text', value: `Which two statements are true?`},
  ],
  "options": [
    { "type": "text", "value": "The command creates a label named nginx." },
    { "type": "text", "value": "The command creates and guarantees the availability of a specified number of identical pods." },
    { "type": "text", "value": "The command creates a pod named nginx." },
    { "type": "text", "value": "The command creates a deployment named nginx." },
    { "type": "text", "value": "The command creates a service on port 80." }
  ],
  "answer": [
    { "type": "text", "value": "The command creates and guarantees the availability of a specified number of identical pods." },
    { "type": "text", "value": "The command creates a deployment named nginx." }
  ]
}, {
  "id": 56,
  "question": [
    { "type": "text", "value": "Which vsftpd.conf directive permits anonymous users to perform write operations other than upload and create directory?" }
  ],
  "options": [
    { "type": "text", "value": "anon_other_write_enable" },
    { "type": "text", "value": "anon_world_readable_only" },
    { "type": "text", "value": "anonymous_enable" },
    { "type": "text", "value": "anon_mkdir_write_enable" },
    { "type": "text", "value": "anon_upload_enable" }
  ],
  "answer": [
    { "type": "text", "value": "anon_other_write_enable" }
  ]
}, {
  "id": 57,
  "question": [
    { "type": "text", "value": "Which two statements are true about fdisk?" }
  ],
  "options": [
    { "type": "text", "value": "fdisk -l displays disk size information for all disks." },
    { "type": "text", "value": "It understands GPT, MBR, and HFS partition tables." },
    { "type": "text", "value": "It can divide logical devices into one or more block disks called partitions." },
    { "type": "text", "value": "It cannot partition disks larger than 2 TB by using a GPT partition table." },
    { "type": "text", "value": "It can partition disks larger than 2 TB by using a GPT partition table." }
  ],
  "answer": [
    { "type": "text", "value": "fdisk -l displays disk size information for all disks." },
    { "type": "text", "value": "It can partition disks larger than 2 TB by using a GPT partition table." }
  ]
}, {
  "id": 58,
  "question": [
    { "type": "text", "value": "A command invoked by either at or batch is executed from the su shell." },
    {type: 'text', value: `Which statement is true?`},
  ],
  "options": [
    { "type": "text", "value": "The owner of the login shell never receives the mail." },
    { "type": "text", "value": "The owner of the login shell receives the mail." },
    { "type": "text", "value": "root is the only recipient of standard error and standard output notification mails." },
    { "type": "text", "value": "The command never retains the current userid." }
  ],
  "answer": [
    { "type": "text", "value": "The owner of the login shell receives the mail." }
  ]
}, {
  "id": 59,
  "question": [
    { "type": "text", "value": "Which command empties the kernel ring buffer and prints its contents?" }
  ],
  "options": [
    { "type": "command", "value": "dmesg -c" },
    { "type": "command", "value": "dmesg -k" },
    { "type": "command", "value": "dmesg -w" },
    { "type": "command", "value": "dmesg -C" }
  ],
  "answer": [
    { "type": "command", "value": "dmesg -c" }
  ]
}, {
  "id": 60,
  "question": [
    { "type": "text", "value": "Which two commands display the IP address of the ens3 interface?" }
  ],
  "options": [
    { "type": "command", "value": "nmcli connection show --active" },
    { "type": "command", "value": "nmcli c s" },
    { "type": "command", "value": "ip link show" },
    { "type": "command", "value": "nmcli dev show" },
    { "type": "command", "value": "ip a" }
  ],
  "answer": [
    { "type": "command", "value": "nmcli dev show" },
    { "type": "command", "value": "ip a" }
  ]
}
];

export default list;