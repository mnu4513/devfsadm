import React from 'react';
import { Heading, Supersubheading, Video,  Text, Command, TerminalOutput, Line } from '../utils/Comps';

const BasicMonitoring = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>


            <Heading text={`Basic Linux Commands `} />
            <Video videoSrc={'i8Vwtaozp_A'} />

            {/* ===================================================== */}
            {/* whoami */}
            <div >
                <Supersubheading text={`Username of the currently logged-in user:`} />
                <TerminalOutput content={`[root@localhost ~]# whoami
root
[root@localhost ~]# echo $USER
root
[root@localhost ~]#
`} />
             
                <Text text={`Outputs the username of the current user, command 'whoami' is equivalent to 'echo $USER'.`} />
             
            </div>


            {/* ===================================================== */}
            {/* hostname */}
            <div >
                <Supersubheading text={`Hostname of the machine:`} />
                <TerminalOutput content={`[root@localhost ~]# hostnamectl
 Static hostname: localhost.example.com
       Icon name: computer-vm
         Chassis: vm 🖴
      Machine ID: 851ad2ad17674c0787ab601aa34acc6b
         Boot ID: 925e05743b294db7958ec1f2635ce6b3
  Virtualization: vmware
Operating System: Red Hat Enterprise Linux 9.0 (Plow)
     CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
          Kernel: Linux 5.14.0-70.22.1.el9_0.x86_64
    Architecture: x86-64
 Hardware Vendor: VMware, Inc.
  Hardware Model: VMware20,1
[root@localhost ~]#
`} />
        
                <Text text={`It displays the current hostname of the machine.`} />
          
            </div>

            {/* ===================================================== */}
            {/* change hostname */}
            <div >
                <Supersubheading text={`Update Hostname:`} />
                <TerminalOutput content={`[root@localhost ~]# hostname station3.example.com
[root@localhost ~]# cat /etc/hostname
station2.example.com
[root@localhost ~]#
`} />
                <Text text={`Temporarily changes the hostname until the system is rebooted. For permanent changes, you need to edit configuration files like '/etc/hostname' and '/etc/hosts'.`} />
                <TerminalOutput content={`[root@localhost ~]# hostnamectl set-hostname station2.example.com
[root@localhost ~]# hostnamectl
 Static hostname: station2.example.com
       Icon name: computer-vm
         Chassis: vm 🖴
      Machine ID: 851ad2ad17674c0787ab601aa34acc6b
         Boot ID: 925e05743b294db7958ec1f2635ce6b3
  Virtualization: vmware
Operating System: Red Hat Enterprise Linux 9.0 (Plow)
     CPE OS Name: cpe:/o:redhat:enterprise_linux:9::baseos
          Kernel: Linux 5.14.0-70.22.1.el9_0.x86_64
    Architecture: x86-64
 Hardware Vendor: VMware, Inc.
  Hardware Model: VMware20,1
[root@localhost ~]#
`} />
             <Text text={`It updates hostname permanently in /etc/hostname and in /etc/hosts files also.`} />
         
            </div>

            {/* ===================================================== */}
            {/* pwd */}
            <div >
                <Supersubheading text={`Print Working Directory:`} />
                <TerminalOutput content={`[root@localhost ~]# pwd
/root
[root@localhost ~]#
`} />
              
                <Text text={`It displays the absolute path to the directory you are currently in.`} />
                
            </div>


            {/* ===================================================== */}
            {/* cat */}
            <div >
                <Supersubheading text={`Read Content of Any File:`} />
                <TerminalOutput content={`[root@localhost ~]# cat /etc/hosts
127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

192.168.131.134 localhost.example.com
[root@localhost ~]#
`} />
                
                <Text text={`It displays the content of any file.`} />
            
            </div>

            {/* ===================================================== */}
            {/* ls */}
            <div >
                <Supersubheading text={`List Down Contents:`} />
                <TerminalOutput content={`[root@localhost /]# ls
afs  boot  etc   lib    media  opt   root  sbin  sys  usr
bin  dev   home  lib64  mnt    proc  run   srv   tmp  var
[root@localhost /]#
`} />
              
                <Text text={`It shows the contents of the current directory.`} />
                
            </div>



            {/* ===================================================== */}
            {/* ls with path  */}
            <div >
                <Supersubheading text={`List Down Contents of a Specific Directory:`} />
                <TerminalOutput content={`[root@localhost /]# ls /usr
bin  games  include  lib  lib64  libexec  local  sbin  share  src  tmp
[root@localhost /]#
`} />
            
                <Text text={`It lists contents of the specified directory, e.g., 'ls /home/user/'.`} />
            
            </div>



            {/* ===================================================== */}
            {/* ls -a */}
            <div >
                <Supersubheading text={`List Down Contents with Hidden Contents:`} />
                <TerminalOutput content={`[root@localhost ~]# ls -a
.              .bash_logout   .cshrc          .ssh        .viminfo
..             .bash_profile  .lesshst        .targetcli
.bash_history  .bashrc        .mysql_history  .tcshrc
[root@localhost ~]#
`} />
             
                <Text text={`It lists all files, including hidden ones (files starting with a dot).`} />
             
            </div>



            {/* ===================================================== */}
            {/* ls -ltrh  */}
            <div >
                <Supersubheading text={`Detailed Listing:`} />
                <TerminalOutput content={`[root@localhost usr]# ls -ltrh
total 164K
lrwxrwxrwx.   1 root root   10 Aug 10  2021 tmp -> ../var/tmp
drwxr-xr-x.   2 root root    6 Aug 10  2021 games
drwxr-xr-x.  12 root root  131 Dec  8 18:33 local
drwxr-xr-x.   4 root root   34 Dec  8 18:33 src
dr-xr-xr-x.  38 root root 4.0K Dec 18 18:49 lib
drwxr-xr-x. 122 root root 4.0K Dec 18 18:49 share
drwxr-xr-x.   5 root root   80 Dec 18 18:49 include
dr-xr-xr-x.   2 root root  16K Dec 18 19:55 sbin
dr-xr-xr-x.  61 root root  36K Dec 18 19:55 lib64
dr-xr-xr-x.   2 root root  40K Dec 18 19:56 bin
drwxr-xr-x.  31 root root 4.0K Dec 18 19:56 libexec
[root@localhost usr]#
`} />
                
                <Text text={`It is use to detailed listing of contents. In this listing format we can see permisson, size, owner, group, name and content type.`} />
                
                <Text text={`'-l' : Long format (detailed information)`} />
                <Text text={`'-t' : Sort by modification time, newest first`} />
                <Text text={`'-r' : Reverse the order of the sort`} />
                <Text text={`'-h' : Human-readable sizes (e.g., KB, MB)`} />

            </div>



            {/* ===================================================== */}
            {/* cd <path> */}
            <div >
                <Supersubheading text={`Change Directory: `} />
                <TerminalOutput content={`[root@localhost usr]# cd /home
[root@localhost home]# pwd
/home
[root@localhost home]#
`} />
   
                <Text text={`It changes the current working directory.`} />
  
            </div>


            {/* ===================================================== */}
            {/* cd */}
            <div >
                <Supersubheading text={`Home Directory:`} />
                <TerminalOutput content={`[root@localhost home]# cd
[root@localhost ~]# pwd
/root
[root@localhost ~]#
`} />
             
                <Text text={`It changes to the user’s home directory.`} />
             
            </div>




            {/* ===================================================== */}
            {/* cd .. */}
            <div >
                <Supersubheading text={`Parent Directory:`} />
                <TerminalOutput content={`[root@localhost bin]# pwd
/usr/bin
[root@localhost bin]# cd ..
[root@localhost usr]# pwd
/usr
[root@localhost usr]#
`} />
              
                <Text text={`It moves up one level in the directory tree.`} />
           
            </div>



            {/* ===================================================== */}
            {/* cd - */}
            <div >
                <Supersubheading text={`Previous Directory:`} />
                <TerminalOutput content={`[root@localhost usr]# pwd
/usr
[root@localhost usr]# cd -
/usr/bin
[root@localhost bin]#
`} />
            
                <Text text={`It switches to the previous directory you were in.`} />
           
            </div>



            {/* ===================================================== */}
            {/* mkdir */}
            <div >
                <Supersubheading text={`Create a New Directory:`} />
                <TerminalOutput content={`[root@localhost ~]# mkdir dir-1
[root@localhost ~]# ls -ltrh
total 0
drwxr-xr-x. 2 root root 6 Dec 19 18:23 dir-1
[root@localhost ~]#
`} />
               
                <Text text={`It creates a new directory with the given name.`} />
               
            </div>



            {/* ===================================================== */}
            {/* touch  */}
            <div >
                <Supersubheading text={`Create a New File:`} />
                <TerminalOutput content={`[root@localhost ~]# touch file-1
[root@localhost ~]# ls -ltrh
total 0
-rw-r--r--. 1 root root 0 Dec 19 18:24 file-1
[root@localhost ~]#
`} />
                
                <Text text={`It creates an empty file named 'new_file.txt' if it doesn’t already exist, or updates its modification time if it does.`} />
                
            </div>



            {/* ===================================================== */}
            {/* <command> 2> /dev/null */}
            <div >
                <Supersubheading text={`Suppress Error Messages:`} />
                <TerminalOutput content={`[root@localhost ~]# mkdir outer/inner
mkdir: cannot create directory ‘outer/inner’: No such file or directory
[root@localhost ~]# mkdir outer/inner 2> /dev/null
[root@localhost ~]#
`} />
           
                <Text text={`It redirects error messages to '/dev/null', suppressing them from the terminal output.`} />
             
            </div>



<Line />





            <Heading text={`Basic Monitoring Commands `} />


            {/* ===================================================== */}
            {/* cat /etc/os-release */}
            <div >
                <Supersubheading text={`OS Version and Distribution:`} />
                <TerminalOutput content={`[root@localhost ~]# cat /etc/system-release
Red Hat Enterprise Linux release 9.0 (Plow)
[root@localhost ~]#
`} />
    
                <Command command={`cat /etc/redhat-release`} />
                <TerminalOutput content={`[root@localhost ~]# cat /etc/redhat-release
Red Hat Enterprise Linux release 9.0 (Plow)
[root@localhost ~]#
`} />
             
                <Text text={`These commands provide details about the OS version and distribution.`} />
            </div>



            {/* ===================================================== */}
            {/* cat /etc/system-release */}
            <div >
                <Supersubheading text={`Check OS Information:`} />
                <TerminalOutput content={`[root@localhost ~]# cat /etc/os-release
NAME="Red Hat Enterprise Linux"
VERSION="9.0 (Plow)"
ID="rhel"
ID_LIKE="fedora"
VERSION_ID="9.0"
PLATFORM_ID="platform:el9"
PRETTY_NAME="Red Hat Enterprise Linux 9.0 (Plow)"
ANSI_COLOR="0;31"
LOGO="fedora-logo-icon"
CPE_NAME="cpe:/o:redhat:enterprise_linux:9::baseos"
HOME_URL="https://www.redhat.com/"
DOCUMENTATION_URL="https://access.redhat.com/documentation/red_hat_enterprise_linux/9/"
BUG_REPORT_URL="https://bugzilla.redhat.com/"

REDHAT_BUGZILLA_PRODUCT="Red Hat Enterprise Linux 9"
REDHAT_BUGZILLA_PRODUCT_VERSION=9.0
REDHAT_SUPPORT_PRODUCT="Red Hat Enterprise Linux"
REDHAT_SUPPORT_PRODUCT_VERSION="9.0"
[root@localhost ~]#
`} />
         
                
                <Text text={` This command displays additional information about the OS.`} />
                
            </div>



            {/* ===================================================== */}
            {/* arch */}
            <div >
                <Supersubheading text={`Check System Architecture:`} />
                <TerminalOutput content={`[root@localhost ~]# arch
x86_64
[root@localhost ~]#
`} />
             
                <Text text={`'x86' : Indicates a 32-bit system.`} />
                <Text text={`'x86_64' : Indicates a 64-bit system.`} />
           
            </div>



            {/* ===================================================== */}
            {/* lscpu */}
            <div >
                <Supersubheading text={`Check CPU Architecture:`} />
                <TerminalOutput content={`[root@localhost ~]# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         45 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               GenuineIntel
  BIOS Vendor ID:        GenuineIntel
  Model name:            Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz
    BIOS Model name:     Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz
    CPU family:          6
    Model:               60
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            3
    BogoMIPS:            7183.36
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mc
                         a cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall n
                         x pdpe1gb rdtscp lm constant_tsc arch_perfmon nopl xtop
                         ology tsc_reliable nonstop_tsc cpuid tsc_known_freq pni
                          pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic mov
                         be popcnt tsc_deadline_timer aes xsave avx f16c rdrand
                         hypervisor lahf_lm abm invpcid_single pti ssbd ibrs ibp
                         b stibp fsgsbase tsc_adjust bmi1 avx2 smep bmi2 invpcid
                          xsaveopt arat md_clear flush_l1d arch_capabilities
Virtualization features:
  Hypervisor vendor:     VMware
  Virtualization type:   full
Caches (sum of all):
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    512 KiB (2 instances)
  L3:                    16 MiB (2 instances)
NUMA:
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:
  Itlb multihit:         KVM: Mitigation: VMX unsupported
  L1tf:                  Mitigation; PTE Inversion
  Mds:                   Mitigation; Clear CPU buffers; SMT Host state unknown
  Meltdown:              Mitigation; PTI
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer
                          sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIB
                         P disabled, RSB filling
  Srbds:                 Unknown: Dependent on hypervisor status
  Tsx async abort:       Not affected
[root@localhost ~]#
`} />
              
                <Text text={`This command provides information about the CPU architecture.`} />
        
            </div>



            {/* ===================================================== */}
            {/* cat /proc/cpuinfo */}
            <div >
                <Supersubheading text={`Detailed CPU Information:`} />
                <TerminalOutput content={`[root@localhost ~]# cat /proc/cpuinfo
processor       : 0
vendor_id       : GenuineIntel
cpu family      : 6
model           : 60
model name      : Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz
stepping        : 3
microcode       : 0x27
cpu MHz         : 3591.683
cache size      : 8192 KB
physical id     : 0
siblings        : 1
core id         : 0
cpu cores       : 1
apicid          : 0
initial apicid  : 0
fpu             : yes
fpu_exception   : yes
cpuid level     : 13
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon nopl xtopology tsc_reliable nonstop_tsc cpuid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm invpcid_single pti ssbd ibrs ibpb stibp fsgsbase tsc_adjust bmi1 avx2 smep bmi2 invpcid xsaveopt arat md_clear flush_l1d arch_capabilities
bugs            : cpu_meltdown spectre_v1 spectre_v2 spec_store_bypass l1tf mds swapgs itlb_multihit srbds
bogomips        : 7183.36
clflush size    : 64
cache_alignment : 64
address sizes   : 45 bits physical, 48 bits virtual
power management:

processor       : 1
vendor_id       : GenuineIntel
cpu family      : 6
model           : 60
model name      : Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz
stepping        : 3
microcode       : 0x27
cpu MHz         : 3591.683
cache size      : 8192 KB
physical id     : 2
siblings        : 1
core id         : 0
cpu cores       : 1
apicid          : 2
initial apicid  : 2
fpu             : yes
fpu_exception   : yes
cpuid level     : 13
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon nopl xtopology tsc_reliable nonstop_tsc cpuid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm invpcid_single pti ssbd ibrs ibpb stibp fsgsbase tsc_adjust bmi1 avx2 smep bmi2 invpcid xsaveopt arat md_clear flush_l1d arch_capabilities
bugs            : cpu_meltdown spectre_v1 spectre_v2 spec_store_bypass l1tf mds swapgs itlb_multihit srbds
bogomips        : 7183.36
clflush size    : 64
cache_alignment : 64
address sizes   : 45 bits physical, 48 bits virtual
power management:

[root@localhost ~]#
`} />
              
                <Text text={`  This command shows detailed information about the CPU.`} />
       
            </div>



            {/* ===================================================== */}
            {/* free */}
            <div >
                <Supersubheading text={`Check Memory Information:`} />
                <TerminalOutput content={`[root@localhost ~]# free -h
               total        used        free      shared  buff/cache   available
Mem:           1.7Gi       395Mi       1.1Gi       8.0Mi       255Mi       1.2Gi
Swap:          2.0Gi          0B       2.0Gi
[root@localhost ~]#
`} />
                <Text text={`It displays information about physical (RAM) and virtual (swap) memory.
`} />
              
            </div>


            {/* ===================================================== */}
            {/* cat /proc/meminfo */}
            <div >
                <Supersubheading text={`Detailed Memory Information:`} />
                <TerminalOutput content={`[root@localhost ~]# cat /proc/meminfo
MemTotal:        1790104 kB
MemFree:         1122960 kB
MemAvailable:    1222252 kB
Buffers:            5212 kB
Cached:           210724 kB
SwapCached:            0 kB
Active:           114604 kB
Inactive:         252216 kB
Active(anon):       2352 kB
Inactive(anon):   157416 kB
Active(file):     112252 kB
Inactive(file):    94800 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:       2097148 kB
SwapFree:        2097148 kB
Dirty:                 0 kB
Writeback:             0 kB
AnonPages:        150276 kB
Mapped:            72472 kB
Shmem:              8884 kB
KReclaimable:      45808 kB
Slab:             104920 kB
SReclaimable:      45808 kB
SUnreclaim:        59112 kB
KernelStack:        5760 kB
PageTables:         2320 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:     2992200 kB
Committed_AS:     829020 kB
VmallocTotal:   34359738367 kB
VmallocUsed:       54112 kB
VmallocChunk:          0 kB
Percpu:            67584 kB
HardwareCorrupted:     0 kB
AnonHugePages:     79872 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
FileHugePages:         0 kB
FilePmdMapped:         0 kB
CmaTotal:              0 kB
CmaFree:               0 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB
Hugetlb:               0 kB
DirectMap4k:      189864 kB
DirectMap2M:     1906688 kB
DirectMap1G:     2097152 kB
[root@localhost ~]#
`} />
               
                <Text text={`It shows detailed information about the system’s memory.`} />
               
            </div>


            {/* ===================================================== */}
            {/* du */}
            <div >
                <Supersubheading text={`Check Disk Utilization:`} />
                <TerminalOutput content={`[root@localhost ~]# du
96      ./.targetcli
8       ./.ssh
144     .
[root@localhost ~]#
`} />
               
                <Text text={`It displays disk usage of the current working directory.
`} />
            
            </div>


            {/* ===================================================== */}
            {/* du -h */}
            <div >
                <Supersubheading text={`Disk Utilization in Human-Readable Format:`} />
                <TerminalOutput content={`[root@localhost ~]# du -h
96K     ./.targetcli
8.0K    ./.ssh
144K    .
[root@localhost ~]#
`} />
             
                <Text text={`It shows disk usage in a human-readable format (e.g., KB, MB).
`} />
              
            </div>


            {/* ===================================================== */}
            {/* du -sh */}
            <div >
                <Supersubheading text={`Sum of Disk Utilization:`} />
                <TerminalOutput content={`[root@localhost ~]# du -sh
144K    .
[root@localhost ~]#
`} />
             
                <Text text={`It displays the total disk usage of the current working directory.`} />
        
            </div>


            {/* ===================================================== */}
            {/* du -sh <path_of_dir_or_mount-point> */}
            <div >
                <Supersubheading text={`Disk Utilization of Specific Directory or Mount Point:`} />
                <TerminalOutput content={`[root@localhost ~]# du -sh /etc
22M     /etc
[root@localhost ~]#
`} />
                
                <Text text={`It shows disk usage for a specific directory or mount point.`} />
    
            </div>


            {/* ===================================================== */}
            {/* du -sh * */}
            <div >
                <Supersubheading text={`Size of Each File and Directory:`} />
                <TerminalOutput content={`[root@localhost usr]# du -sh *
159M    bin
0       games
2.6M    include
613M    lib
365M    lib64
46M     libexec
8.0K    local
62M     sbin
357M    share
0       src
0       tmp
[root@localhost usr]#
`} />
          
                <Text text={`It displays the size of each file and directory in the current working directory.`} />
    
            </div>



            {/* ===================================================== */}
            {/* df */}
            <div >
                <Supersubheading text={`Check Disk Utilization of All Mount Points:`} />
                <TerminalOutput content={`[root@localhost usr]# df
Filesystem     1K-blocks    Used Available Use% Mounted on
devtmpfs          876008       0    876008   0% /dev
tmpfs             895052       0    895052   0% /dev/shm
tmpfs             358024    8876    349148   3% /run
/dev/sda3       10475520 2025516   8450004  20% /
/dev/sda2        1038336  211968    826368  21% /boot
/dev/sda1        1046508    7160   1039348   1% /boot/efi
tmpfs             179008       0    179008   0% /run/user/0
[root@localhost usr]#
`} />
             
                <Text text={`It shows disk utilization and free space for all mounted filesystems.`} />
              
            </div>


            {/* ===================================================== */}
            {/* df -h */}
            <div >
                <Supersubheading text={`Disk Utilization in Human-Readable Format:`} />
                <TerminalOutput content={`[root@localhost usr]# df -h
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        856M     0  856M   0% /dev
tmpfs           875M     0  875M   0% /dev/shm
tmpfs           350M  8.7M  341M   3% /run
/dev/sda3        10G  2.0G  8.1G  20% /
/dev/sda2      1014M  207M  807M  21% /boot
/dev/sda1      1022M  7.0M 1015M   1% /boot/efi
tmpfs           175M     0  175M   0% /run/user/0
[root@localhost usr]#
`} />
               
                <Text text={`It displays disk utilization and free space in a human-readable format.`} />
       
            </div>


            {/* ===================================================== */}
            {/* df -h <disk/mount-point/directory> */}
            <div >
                <Supersubheading text={`Disk Utilization for Specific Disk, Mount Point, or Directory:`} />
                <TerminalOutput content={`[root@localhost usr]# df -h /root
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda3        10G  2.0G  8.1G  20% /
[root@localhost usr]#
`} />
              
                <Text text={`It shows the free space percentage for a specific disk, mount point, or directory.`} />
             
            </div>


            {/* ===================================================== */}
            {/* fdisk -l */}
            <div >
                <Supersubheading text={`List All Disks and Partitions:`} />
                <TerminalOutput content={`[root@localhost usr]# fdisk -l
Disk /dev/sda: 20 GiB, 21474836480 bytes, 41943040 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 50565BA1-B2C5-45AA-A6BC-F4BA9CF6D400

Device        Start      End  Sectors Size Type
/dev/sda1      2048  2099199  2097152   1G EFI System
/dev/sda2   2099200  4196351  2097152   1G Linux filesystem
/dev/sda3   4196352 25167871 20971520  10G Linux filesystem
/dev/sda4  25167872 29362175  4194304   2G Linux swap


Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Disk model: VMware Virtual S
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x0e68feff

Device     Boot Start     End Sectors Size Id Type
/dev/sdb1        2048 4196351 4194304   2G 83 Linux
[root@localhost usr]#
`} />
               
                <Text text={`It provides a list of all disks, their sizes, and their partitions.`} />
               
            </div>


        </div>

    );
};

export default BasicMonitoring;