import { Heading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";
import React from 'react';

const BasicCommands = () => {
        return (

                <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

                        <Heading text="Basic Commands in Solaris" />

                        <Text text="In Solaris, there are some basic commands that will be very useful for daily tasks like monitoring and managing your system." />
                        <Text text="Here are some of the most common basic commands:" />

                        <Supersubheading text={"1. Start a friendly session:"} />
                        <TerminalOutput content="[root@localhost ~]# bash
[root@localhost ~]#" />
                        <Text text="This command starts a new Bash shell session, which is more user-friendly and interactive." />


                        <Supersubheading text="2. Check commands history:" />
                        <TerminalOutput content={`[root@localhost ~]# history
    1  clear
    2  apt upgrade
    3  apt install
    4  clear
    5  vim /etc/sudoers
    6  exit
    7  history
[root@localhost ~]#`} />
                        <Text text="This command displays a list of previously executed commands, helping you track your actions." />


                        <Supersubheading text="3. Current date:" />
                        <TerminalOutput content="[root@localhost ~]# date
Wed Feb 12 05:21:57 UTC 2025
[root@localhost ~]#" />
                        <Text text="This command displays the current system date and time." />


                        <Supersubheading text="4. Calendar:" />
                        <TerminalOutput content={`[root@localhost ~]# cal
   February 2025
Su Mo Tu We Th Fr Sa
                   1
 2  3  4  5  6  7  8
 9 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28

[root@localhost ~]#`} />
                        <Text text="This command displays the current month's calendar." />


                        <Supersubheading text="5. Calendar for a Specific Year:" />
                        <TerminalOutput content={`[root@localhost ~]# cal 2024
                            2024
      January               February               March        
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6               1  2  3                  1  2
 7  8  9 10 11 12 13   4  5  6  7  8  9 10   3  4  5  6  7  8  9
14 15 16 17 18 19 20  11 12 13 14 15 16 17  10 11 12 13 14 15 16
21 22 23 24 25 26 27  18 19 20 21 22 23 24  17 18 19 20 21 22 23
28 29 30 31           25 26 27 28 29        24 25 26 27 28 29 30
                                            31                  

       April                  May                   June        
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6            1  2  3  4                     1
 7  8  9 10 11 12 13   5  6  7  8  9 10 11   2  3  4  5  6  7  8
14 15 16 17 18 19 20  12 13 14 15 16 17 18   9 10 11 12 13 14 15
21 22 23 24 25 26 27  19 20 21 22 23 24 25  16 17 18 19 20 21 22
28 29 30              26 27 28 29 30 31     23 24 25 26 27 28 29
                                            30                  

        July                 August              September      
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6               1  2  3   1  2  3  4  5  6  7
 7  8  9 10 11 12 13   4  5  6  7  8  9 10   8  9 10 11 12 13 14
14 15 16 17 18 19 20  11 12 13 14 15 16 17  15 16 17 18 19 20 21
21 22 23 24 25 26 27  18 19 20 21 22 23 24  22 23 24 25 26 27 28

28 29 30 31           25 26 27 28 29 30 31  29 30




      October               November              December

Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa

       1  2  3  4  5                  1  2   1  2  3  4  5  6  7

 6  7  8  9 10 11 12   3  4  5  6  7  8  9   8  9 10 11 12 13 14

13 14 15 16 17 18 19  10 11 12 13 14 15 16  15 16 17 18 19 20 21

20 21 22 23 24 25 26  17 18 19 20 21 22 23  22 23 24 25 26 27 28

27 28 29 30 31        24 25 26 27 28 29 30  29 30 31



[root@localhost ~]#`} />
                        <Text text="This command displays the calendar for a specific year, in this case, 2014." />


                        <Supersubheading text="6. Calculate Data:" />
                        <TerminalOutput content={`[root@localhost ~]# bc
5+5
10
quit
[root@localhost ~]#`} />
                        <Text text="The 'bc' command opens an interactive calculator for performing mathematical calculations." />


                        <Supersubheading text="7. Clear the terminal screen:" />
                        <TerminalOutput content="[root@localhost ~]# clear" />
                        <Text text="This command clears the terminal screen, removing all previous output." />


                        <Supersubheading text="8. Check the present working directory:" />
                        <TerminalOutput content={`[root@localhost ~]# pwd
/root
[root@localhost ~]#`} />
                        <Text text="This command displays the full path of the current working directory." />


                        <Supersubheading text="9. Change the directory:" />
                        <TerminalOutput content={`[root@localhost ~]# cd /usr/bin
[root@localhost /usr/bin]# pwd
/usr/bin
[root@localhost /usr/bin]#`} />
                        <Text text="This command allows you to navigate to a different directory by specifying its path." />


                        <Supersubheading text="10. Go to the previous directory:" />
                        <TerminalOutput content={`[root@localhost /usr/bin]# pwd
/usr/bin
[root@localhost /usr/bin]# cd ..
[root@localhost /usr]# pwd
/usr
[root@localhost /usr]#`} />
                        <Text text="This command navigates to the parent directory (one level up)." />


                        <Supersubheading text="11. Create a new directory:" />
                        <TerminalOutput content={`[root@localhost ~]# mkdir folder1
[root@localhost ~]# ls
folder1
[root@localhost ~]#`} />
                        <Text text="This command creates a new directory with the specified name (in this case, 'folder1')." />


                        <Supersubheading text="12. Remove a file or directory:" />
                        <TerminalOutput content={`[root@localhost ~]# rm -rf folder1/
[root@localhost ~]# ls
[root@localhost ~]#`} />
                        <Text text="This command removes a file or directory. Use with caution, as it permanently deletes files." />


                        <Supersubheading text="13. Check the directory recursively:" />
                        <TerminalOutput content={`[root@localhost ~]# ls -R /root
/root:
folder1

/root/folder1:
[root@localhost ~]#`} />
                        <Text text="This command lists all files and directories recursively within the specified directory." />


                        <Supersubheading text="14. check OS details:" />
                        <TerminalOutput content={`[root@localhost ~]# uname -a
SunOS localhost 5.11 11.3 i86pc i386 i86pc
[root@localhost ~]#`} />
                        <Text text="This command displays detailed information about the operating system." />


                        <Supersubheading text="15. get memory and CPU information process-wise:" />
                        <TerminalOutput content={`[root@localhost ~]# top
top - 05:45:04 up  1:51,  2 users,  load average: 0.00, 0.00, 0.00   Tasks:  35 total,   1 running,  34 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.0 us,  0.1 sy,  0.0 ni, 99.8 id,  0.1 wa,  0.0 hi,  0.0  MiB Mem :  15724.1 total,  14881.3 free,    536.1 used,    419.5 buf
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.  15188.0 ava

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM
    371 root      20   0 2082616  46660  26232 S   0.3   0.3               1 root      20   0   22092  12540   8860 S   0.0   0.1
      2 root      20   0    2732   1888   1760 S   0.0   0.0
      6 root      20   0    2732    116    116 S   0.0   0.0
     53 root      19  -1   66672  18992  17840 S   0.0   0.1
     96 root      20   0   24352   6528   4392 S   0.0   0.0
    109 systemd+  20   0   21364  12404  10204 S   0.0   0.1
    110 systemd+  20   0   90760   6972   6100 S   0.0   0.0
    208 root      20   0    4160   2408   2168 S   0.0   0.0
    209 message+  20   0    9824   4712   3780 S   0.0   0.0
    213 polkitd   20   0  309068   7420   6544 S   0.0   0.0
    217 root      20   0   17916   7856   6824 S   0.0   0.0
    219 root      20   0 1755336  18348   9676 S   0.0   0.1
    224 syslog    20   0  222808   4844   3708 S   0.0   0.0
    227 root      20   0  334724  19304  14796 S   0.0   0.1
    231 root      20   0   16692   5740   4904 S   0.0   0.0
    368 root      20   0  107908  21668  12448 S   0.0   0.1
    374 root      20   0    2732    792    716 S   0.0   0.0
    379 root      20   0    2688    792    716 S   0.0   0.0
    393 root      20   0 2189404  75816  47632 S   0.0   0.5
    661 root      20   0    2740    216     88 S   0.0   0.0
    662 root      20   0    2740    220     88 S   0.0   0.0
    663 test      20   0    5780   4940   3280 S   0.0   0.0
    664 root      20   0    8284   3628   3084 S   0.0   0.0
    715 test      20   0   20152  10804   8744 S   0.0   0.1
    716 test      20   0   22192   3104   1640 S   0.0   0.0
    727 test      20   0    5780   4508   3012 S   0.0   0.0
    749 root      20   0   20160  10804   8744 S   0.0   0.1
    750 root      20   0   22200   3028   1576 S   0.0   0.0
    824 root      20   0   14708   5736   4840 S   0.0   0.0
    825 root      20   0   14708   2320   1356 S   0.0   0.0
    826 root      20   0    7884   3016   2600 S   0.0   0.0
    827 root      20   0    5912   5060   3268 S   0.0   0.0
   1045 root      20   0    4852   3916   3280 S   0.0   0.0
   1195 root      20   0    9076   5168   3044 R   0.0   0.0
`} />
                        <Text text="This command displays a dynamic real-time view of the system’s processes, memory, and CPU usage." />


                        <Supersubheading text="16. get memory and CPU info user-wise and process-wise:" />
                        <TerminalOutput content={`[root@localhost ~]# prstat -a
    15 root       21M   20M sleep    59    0   0:00:08 0.0% svc.configd/28
   568 root     8292K 6352K sleep    59    0   0:00:00 0.0% hald/4
   598 root     3940K 2088K sleep    59    0   0:00:00 0.0% hald-addon-acpi/1
  1011 root     7080K 2132K sleep    59    0   0:00:00 0.0% sendmail/1
   536 root     8936K 1240K sleep    59    0   0:00:00 0.0% cron/1
  1077 daemon   3488K 1988K sleep    59    0   0:00:00 0.0% rpcbind/1
   162 root     3396K 1428K sleep    59    0   0:00:00 0.0% vbiosd/3
    67 netadm   5004K 3204K sleep    59    0   0:00:00 0.0% ipmgmtd/6
     9 root        0K    0K sleep    99  -20   0:00:00 0.0% postwaittq/1
     8 root        0K    0K sleep    60    -   0:00:00 0.0% vmtasks/2
     1 root     3076K 1932K sleep    59    0   0:00:00 0.0% init/1
     _________________________________________________________________________
        NPROC USERNAME  SWAP   RSS     MEMORY      TIME      CPU                        
        54    root      161M   113M    5.5%        0:00:12   0.2%
        2     noaccess  1480K  3952K   0.2%        0:00:00   0.0%
        1     smmsp     1672K  5420K   0.3%        0:00:00   0.0%
        1     netcfg    1232K  3124K   0.1%        0:00:00   0.0%
        4     daemon    4748K  6964K   0.3%        0:00:00   0.0%
        3     netadm    5744K  11M     0.5%        0:00:00   0.0%
`} />
                        <Text text="This command shows process statistics sorted by user, including memory and CPU usage." />


                        <Supersubheading text="17. List down the terminal:" />
                        <TerminalOutput content={`[root@localhost ~]# tty
/dev/pts/2
[root@localhost ~]#`} />
                        <Text text="This command displays the file name of the terminal connected to the user." />


                        <Supersubheading text="18. Get the command path:" />
                        <TerminalOutput content={`[root@localhost ~]# which reboot
/usr/sbin/reboot
[root@localhost ~]#`} />
                        <Text text="This command shows the full path of the specified command." />


                        <Supersubheading text="19. Get the hostname:" />
                        <TerminalOutput content={`[root@localhost ~]# hostname
localhost
[root@localhost ~]#`} />
                        <Text text="This command displays the hostname of the current system." />


                        <Supersubheading text="20. Find out network interface details:" />
                        <TerminalOutput content="[root@localhost ~]# ipadm
NAME              CLASS/TYPE STATE        UNDER      ADDR
lo0               loopback   ok           --         --
   lo0/v4         static     ok           --         127.0.0.1/8
   lo0/v6         static     ok           --         ::1/128
net0              ip         ok           --         --
   net0/v4        dhcp       ok           --         192.168.131.139/24
   net0/v6        addrconf   ok           --         fe80::20c:29ff:fe70:6529/10
[root@localhost ~]#
" />
                        <Text text="This command displays network interface configuration details like IP addresses." />



                </div>
        );
};

export default BasicCommands;