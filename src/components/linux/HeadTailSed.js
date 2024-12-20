import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text } from '../utils/Comps';

const HeadTailSedCommands = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            {/* Main Subheading */}
            <Heading text={`Head, Tail, and Sed Commands in Linux`} />

            {/* Head Command */}
            <Subheading text={`Head Command`} />
            <Text text={`The 'head' command is used to print out a specific number of lines from the top of the output of any command. By default, it returns the first 10 lines.`} />
            <TerminalOutput content={`[root@localhost ~]# head -n 5 /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@localhost ~]#
`} />
            <TerminalOutput content={`[root@localhost ~]# head /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/passwd | head -6
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
[root@localhost ~]#
`} />
            

            {/* Tail Command */}
            <Subheading text={`Tail Command`} />
            <Text text={`The 'tail' command performs a similar operation as 'head', but it returns the output from the bottom of the output instead of the top.`} />
            <TerminalOutput content={`[root@localhost ~]# tail /etc/passwd
sshd:x:74:74:Privilege-separated SSH:/usr/share/empty.sshd:/sbin/nologin
chrony:x:991:987::/var/lib/chrony:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
systemd-oom:x:985:985:systemd Userspace OOM Killer:/:/usr/sbin/nologin
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
dom:x:1002:1002::/home/dom:/bin/bash
john:x:1003:1004::/home/john:/bin/bash
[root@localhost ~]#
`} />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/passwd | tail -n 6
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
dom:x:1002:1002::/home/dom:/bin/bash
john:x:1003:1004::/home/john:/bin/bash
[root@localhost ~]#
`} />
           


            {/* Tail -f Command */}
            <Subheading text={`Tail -f Command`} />
            <Text text={`The 'tail -f' command returns output in real-time, which is particularly useful for reading logs or files that are frequently updated.`} />
            <TerminalOutput content={`[root@localhost ~]# tail -f /etc/passwd
sshd:x:74:74:Privilege-separated SSH:/usr/share/empty.sshd:/sbin/nologin
chrony:x:991:987::/var/lib/chrony:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
systemd-oom:x:985:985:systemd Userspace OOM Killer:/:/usr/sbin/nologin
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
dom:x:1002:1002::/home/dom:/bin/bash
john:x:1003:1004::/home/john:/bin/bash

`} />
           
            <Text text={`This command shows logs in real-time, updating the display as changes occur. It can also read logs from multiple files:`} />
            <TerminalOutput content={`[root@localhost ~]# tail -f -n 4 /etc/passwd /etc/shadow
==> /etc/passwd <==
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
dom:x:1002:1002::/home/dom:/bin/bash
john:x:1003:1004::/home/john:/bin/bash

==> /etc/shadow <==
rpc:!!:20066:0:99999:7:::
rpcuser:!!:20066::::::
dom:!!:20076:0:99999:7:::
john:$6$Nnq6VSoLRD9XHRBr$xYwfC73RZFshQTnK.qyYSQdXpv8Si0MP5UVnCxrKJDKRyrb7qxCllTHoN6OojSI4eCPspqDna/5r3D7wHJ48f.:20077:0:99999:7:::

`} />
       

            <Text text={`While 'head' and 'tail' commands allow capturing output in a specific range, they do not support capturing multiple outputs like an 'and' operator.`} />





<Line/>
            {/* Sed Command */}
            <Subheading text={`Sed Command`} />
            <Text text={`The 'sed' command, also known as a stream editor, is used to print specific lines from a file or command output, and can also perform operations like find and replace, delete, insert, or append lines.`} />
            <TerminalOutput content={`[root@localhost ~]# sed -n '5p' /etc/passwd
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@localhost ~]#
`} />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/passwd | sed -n '4p'
adm:x:3:4:adm:/var/adm:/sbin/nologin
[root@localhost ~]#
`} />
       

       
{/* =============================================================== */}
            {/* Print Operation */}
            <Subheading text={`1. Print Operation`} />
            <Text text={`To print a specific line number:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -n '5p' /etc/passwd
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@localhost ~]#
`} />
           
            <Text text={`To print lines in a given range:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -n '1,4p' /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
[root@localhost ~]#
`} />
<Text text={`To print multiple specific lines:`} />
<TerminalOutput content={`[root@localhost ~]# sed -n '1p;5p' /etc/passwd
root:x:0:0:root:/root:/bin/bash
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@localhost ~]#
`} />
           
            <Text text={`To print multiple line ranges:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -n '1,3p;6,8p' /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
[root@localhost ~]#
`} />
            
            <Text text={`To print the last line:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -n '$p' /etc/passwd
john:x:1003:1004::/home/john:/bin/bash
[root@localhost ~]#
`} />
         
{/* ==================================================================== */}
            {/* Find and Replace Operation */}
            <Subheading text={`2. Find and Replace Operation`} />
            <Text text={`Find and replace can be performed in two ways:`} />
            <Supersubheading text={`A. Perform operation only on screen:`} />
            <TerminalOutput content={`[root@localhost ~]# sed 's/root/super/' /etc/passwd
super:x:0:0:root:/root:/bin/bash
`} />
            
            <Text text={`To replace all occurrences in a line, use the 'g' (global) option:`} />
            <TerminalOutput content={`[root@localhost ~]# sed 's/root/super/g' /etc/passwd
super:x:0:0:super:/super:/bin/bash
`} />
          
            <Text text={`To replace in a specific line:`} />
            <TerminalOutput content={`[root@localhost ~]# sed '2s/bin/sample/g' /etc/passwd
root:x:0:0:root:/root:/bin/bash
sample:x:1:1:sample:/sample:/ssample/nologin
`} />
            
            <Text text={`To replace in a range of lines:`} />
            <TerminalOutput content={`[root@localhost ~]# sed '1,5s/sbin/sample/g' /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sample/nologin
daemon:x:2:2:daemon:/sample:/sample/nologin
adm:x:3:4:adm:/var/adm:/sample/nologin
lp:x:4:7:lp:/var/spool/lpd:/sample/nologin
sync:x:5:0:sync:/sbin:/bin/sync
`} />
            
            <Text text={`To perform a case-insensitive replacement, use 'i' with 'g':`} />
            <TerminalOutput content={`[root@localhost ~]# sed 's/RooT/super/gi' /etc/passwd
super:x:0:0:super:/super:/bin/bash
`} />



<Text text={`To add a new string at the beginning of a line:`} />
            <TerminalOutput content={`[root@localhost ~]# sed '2s/^/addedText/' /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
addedTextbin:x:1:1:bin:/bin:/sbin/nologin
`} />
           
            <Text text={`To replace multiple targets:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -e 's/adm/ADM/' -e 's/mail/Email/' /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
ADM:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
Email:x:8:12:mail:/var/spool/mail:/sbin/nologin
`} />

            
{/* ------------------------------------- */}
            <Supersubheading text={`B. Perform operation in the data file:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -i 's/root/ROOT/gi' /mnt/passwd
            [root@localhost ~]# cat /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash    `} />
            





{/* =================================================================== */}
            {/* Delete Operation */}
            <Subheading text={`3. Delete Any Line`} />
            <Text text={`Delete operations can also be performed on screen or in the data file:`} />
            <Supersubheading text={`A. Perform operation only on screen:`} />
            <TerminalOutput content={`[root@localhost ~]# sed '2d' /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
Hello
daemon:x:2:2:daemon:/sbin:/sbin/nologin
`} />
            <TerminalOutput content={`[root@localhost ~]# sed '2,6d' /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/ROOT:/sbin/nologin
[root@localhost ~]#
`} />
            <TerminalOutput content={`[root@localhost ~]# cat -n /mnt/passwd | sed '2,5d'
     1  ROOT:x:0:0:ROOT:/ROOT:/bin/bash
     6  adm:x:3:4:adm:/var/adm:/sbin/nologin
     7  lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
     8  sync:x:5:0:sync:/sbin:/bin/sync
     9  shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
    10  halt:x:7:0:halt:/sbin:/sbin/halt
    11  mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
    12  operator:x:11:0:operator:/ROOT:/sbin/nologin
[root@localhost ~]#
`} />


{/* --------------------------------- */}
            <Supersubheading text={`B. Perform operation in original file:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -i '3,9d' /mnt/passwd
[root@localhost ~]# cat /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
SampleText
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/ROOT:/sbin/nologin
[root@localhost ~]#
`} />



{/* =============================================== */}
            {/* Insert Operation */}
            <Subheading text={`4. Insert Any Message Before Any Line`} />
            <Supersubheading text={`A. Perform operation only on screen:`} />
            <TerminalOutput content={`[root@localhost ~]# sed '3iHello' /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
Hello
daemon:x:2:2:daemon:/sbin:/sbin/nologin
`} />
            <TerminalOutput content={`[root@localhost ~]# cat /mnt/passwd | sed '2iHello'
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
Hello
bin:x:1:1:bin:/bin:/sbin/nologin
`} />
           
{/* --------------------------------------------- */}
            <Supersubheading text={`B. Perform operation in original file:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -i '3iHello' /mnt/passwd
[root@localhost ~]# cat /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
Hello
daemon:x:2:2:daemon:/sbin:/sbin/nologin
`} />


{/* ==================================================== */}
            {/* Append Operation */}
            <Subheading text={`5. Append Any Message After Any Line`} />
            <Supersubheading text={`A. Perform operation only on screen:`} />
            <TerminalOutput content={`[root@localhost ~]# sed '1aSmapleText' /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
SmapleText
`} />
            <TerminalOutput content={`[root@localhost ~]# cat /mnt/passwd | sed '1aNewText'
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
NewText
`} />
           

{/* ----------------------------------------------- */}
            <Supersubheading text={`B. Perform operation in original file:`} />
            <TerminalOutput content={`[root@localhost ~]# sed -i '1aSampleText' /mnt/passwd
[root@localhost ~]# cat /mnt/passwd
ROOT:x:0:0:ROOT:/ROOT:/bin/bash
SampleText
`} />

            {/* Options Summary */}
            <Subheading text={`Options Summary`} />
            <Text text={`p -> print`} />
            <Text text={`s -> substitute / replace`} />
            <Text text={`d -> delete`} />
            <Text text={`i -> insert before the line`} />
            <Text text={`a -> append after the line`} />
        </div>
    )
}

export default HeadTailSedCommands;
