import React from 'react'
import { Heading, Supersubheading, Text,  Video,  Subheading, TerminalOutput, Line } from '../utils/Comps';

const GrepEF = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Filter Data Using Grep Command`} />

            <Video videoSrc={'i8Vwtaozp_A'} />


            <Subheading text={`Search Pattern Using 'grep' Command`} />


            {/* ===================================================== */}
            {/* grep command */}
            <div >
                <Supersubheading text={`Search pattern:`} />
                <TerminalOutput content={`[root@localhost ~]# cat /etc/passwd | grep root
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
                or
                <TerminalOutput content={`[root@localhost ~]# grep root /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
                <Text text={`The 'grep' command is used to search for patterns within files or command outputs.`} />
            </div>


            {/* ===================================================== */}
            {/* grep -c command */}
            <div >
                <Supersubheading text={`Count the number of lines that match the pattern:`} />
                <TerminalOutput content={`[root@localhost ~]# grep -c root /etc/passwd
2
[root@localhost ~]#
`} />
                <Text text={`It counts the linux in a file that contain the pattern.`} />
            </div>





            {/* ===================================================== */}
            {/* grep -i command */}
            <div >
                <Supersubheading text={`Ignore Case:`} />
                <TerminalOutput content={`[root@localhost ~]# grep -i RooT /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
                <Text text={`It ignores case when matching the pattern.`} />
            </div>



            {/* ===================================================== */}
            {/* grep -n command */}
            <div >
                <Supersubheading text={`Show line numbers along with matching line:`} />
                <TerminalOutput content={`[root@localhost ~]# grep -n root /etc/passwd
1:root:x:0:0:root:/root:/bin/bash
10:operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
                <Text text={`It displays lines with "pattern" along with their line numbers in a file.`} />
            </div>

            {/* ===================================================== */}
            {/* grep -o command */}
            <div >
                <Supersubheading text={`Show only the matched part of the line:`} />
                <TerminalOutput content={`[root@localhost ~]# grep -o root /etc/passwd
root
root
root
root
[root@localhost ~]#
`} />
                <Text text={`It displays only the "pattern" parts of lines that match, not the entire line.`} />
            </div>

            {/* ===================================================== */}
            {/* grep -v command */}
            <div >
                <Supersubheading text={`Invert Match:`} />
                <TerminalOutput content={`[root@localhost ~]#
[root@localhost ~]# grep -v root /etc/passwd
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin
systemd-coredump:x:999:997:systemd Core Dumper:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
polkitd:x:998:996:User for polkitd:/:/sbin/nologin
tss:x:59:59:Account used for TPM access:/dev/null:/sbin/nologin
clevis:x:997:993:Clevis Decryption Framework unprivileged user:/var/cache/clevis:/usr/sbin/nologin
sssd:x:996:992:User for sssd:/:/sbin/nologin
libstoragemgmt:x:995:991:daemon account for libstoragemgmt:/var/run/lsm:/sbin/nologin
setroubleshoot:x:994:990:SELinux troubleshoot server:/var/lib/setroubleshoot:/sbin/nologin
cockpit-ws:x:993:989:User for cockpit web service:/nonexisting:/sbin/nologin
cockpit-wsinstance:x:992:988:User for cockpit-ws instances:/nonexisting:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/usr/share/empty.sshd:/sbin/nologin
chrony:x:991:987::/var/lib/chrony:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
systemd-oom:x:985:985:systemd Userspace OOM Killer:/:/usr/sbin/nologin
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
dom:x:1002:1002::/home/dom:/bin/bash
[root@localhost ~]#
`} />
                <Text text={`It displays all lines in a file that do not contain the pattern.`} />
            </div>


            {/* ===================================================== */}
            {/* grep -w command */}
            <div >
                <Supersubheading text={`Whole Word:`} />
                <TerminalOutput content={`[root@localhost ~]# grep -w ro /etc/passwd
[root@localhost ~]# grep ro /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
setroubleshoot:x:994:990:SELinux troubleshoot server:/var/lib/setroubleshoot:/sbin/nologin
chrony:x:991:987::/var/lib/chrony:/sbin/nologin
[root@localhost ~]#
`} />
                <Text text={`It finds the pattern as a whole word but not as a part of another word.`} />
            </div>

            {/* ===================================================== */}
            {/* start of line  */}
            <div >
                <Supersubheading text={`Start of Line:`} />
                <TerminalOutput content={`[root@localhost ~]# grep ^r /etc/passwd
root:x:0:0:root:/root:/bin/bash
rpc:x:32:32:Rpcbind Daemon:/var/lib/rpcbind:/sbin/nologin
rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
[root@localhost ~]#
`} />
                <Text text={`It finds lines that start with the pattern.`} />
            </div>

            {/* ===================================================== */}
            {/* end of line */}
            <div >
                <Supersubheading text={`End of Line:`} />
                <TerminalOutput content={`[root@localhost ~]# grep bash$ /etc/passwd
root:x:0:0:root:/root:/bin/bash
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
dom:x:1002:1002::/home/dom:/bin/bash
[root@localhost ~]#
`} />
                <Text text={`It finds lines that end with the pattern.`} />
            </div>


<Line/>
            {/* ======================================================== */}
            <Subheading text={`Search Pattern Using 'egrep' Command`} />
            {/* ===================================================== */}
            {/* egrep command */}
            <div >
                <Supersubheading text={`Search Pattern Using 'egrep' Command:`} />
                <TerminalOutput content={`[root@localhost ~]# egrep -i "root|bash" /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
dom:x:1002:1002::/home/dom:/bin/bash
[root@localhost ~]#
`} />
                or
                <TerminalOutput content={`[root@localhost ~]# grep -E -i "Root|Bash" /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
ok:x:1000:1000::/home/ok:/bin/bash
doc:x:1001:1001::/home/doc:/bin/bash
dom:x:1002:1002::/home/dom:/bin/bash
[root@localhost ~]#
`} />
                or
                <TerminalOutput content={`[root@localhost ~]# cat /etc/passwd | egrep -i "Root|home"
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
dom:x:1002:1002::/home/dom:/bin/bash
[root@localhost ~]#
`} />
                <Text text={`'egrep' is an extended version of 'grep' that supports extended regular expressions (ERE), allowing more complex pattern matching.`} />
                <Text text={`It allows searching for multiple patterns at once using the pipe symbol.`} />
                <Text text={`All options will be same as 'grep' command.`} />
            </div>




<Line/>
            {/* ======================================================== */}
            <Subheading text={`Search Pattern Using 'fgrep' Command`} />
            {/* ===================================================== */}
            {/* fgrep command */}
            <div >
                <Supersubheading text={`Search the exact string:`} />
                <TerminalOutput content={`[root@localhost ~]# fgrep roo /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
                or
                <TerminalOutput content={`[root@localhost ~]# grep -F root /etc/passwd
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`} />
                or
                <TerminalOutput content={`[root@localhost ~]# cat /etc/passwd | fgrep -i rooT
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
[root@localhost ~]#
`}/>
                <Text text={`'fgrep' is used for searching fixed strings, meaning it does not recognize regular expressions and treats the search pattern as a literal string.`} />
                <Text text={`It does not support regular expressions, so '^', '$' and other regex symbols are treated as litral characters.`} />
                <Text text={`'grep -E' is the modern way to use extended refular expressions with 'grep'. It provides the same functionality as 'egrep' and is recomanded since 'egrep' and 'fgrep' are deprecated. `} />
            </div>





        </div>
    )
}

export default GrepEF;