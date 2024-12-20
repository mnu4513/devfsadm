
import React from 'react'
import { Heading, Subheading, Text, TerminalOutput, Supersubheading, Line } from '../utils/Comps';

const LocateAndFind = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Locate and Find Command`} />

            <Text text={`Both the 'locate' and 'find' commands are used to locate files or directories in a Linux system, but they serve different purposes and offer varying levels of functionality.`} />

            <Subheading text={`Locate Command`} />
            <Text text={`The 'locate' command is used to quickly find the location of files or directories based on their names. It is a faster option compared to 'find' because it searches through a prebuilt database rather than the entire filesystem.`} />

            {/* ===================================================== */}
            {/* locate command  [basic usage] */}
            <div >
                <Supersubheading text={`Basic Usage:`} />
                <TerminalOutput content={`[root@localhost ~]# locate chrony.conf
/etc/chrony.conf
/usr/share/man/man5/chrony.conf.5.gz
[root@localhost ~]#
`} />
                <Text text={`This command searches for files or directories that match the specified string.`} />

            </div>

            <Text text={`'-i'  : Case-insensitive search. Use the '-i' option to make the search case-insensitive.`} />

            {/* ===================================================== */}
            {/* locate command  [limitations] */}
            <div >
                <Supersubheading text={`Limitations:`} />
                <Text text={`The 'locate' command relies on a database that is periodically updated. If you create a file and try to locate it before the database is updated, 'locate' might not find it.`} />
                <Text text={`Use the 'updatedb' command to manually update the database:`} />
                <TerminalOutput content={`[root@localhost ~]# updatedb
[root@localhost ~]#
`} />
                <Text text={`'locate' does not work on directories like '/tmp' because it is typically excluded from the database.`} />
                <Text text={`'locate' searches the entire filesystem and does not allow you to specify a particular directory.`} />
            </div>

            {/* ===================================================== */}
            {/* Example commands */}
            <div >
                <Supersubheading text={`Example Commands:`} />
                <Text text={`To search file or directory:`} />
                <TerminalOutput content={`[root@localhost ~]# locate useradd
/etc/default/useradd
/usr/sbin/luseradd
/usr/sbin/useradd
/usr/share/bash-completion/completions/luseradd
/usr/share/bash-completion/completions/useradd
/usr/share/man/de/man8/useradd.8.gz
/usr/share/man/fr/man8/useradd.8.gz
`} />
<Text text={`To make case insensitive:`} />
                <TerminalOutput content={`[root@localhost ~]# locate -i UserAdd
/etc/default/useradd
/usr/sbin/luseradd
/usr/sbin/useradd
/usr/share/bash-completion/completions/luseradd
/usr/share/bash-completion/completions/useradd
/usr/share/man/de/man8/useradd.8.gz
/usr/share/man/fr/man8/useradd.8.gz
`} />
<Text text={`To search a newly created file or directory:`} />
                <TerminalOutput content={`[root@localhost ~]# locate newfile.html
[root@localhost ~]# updatedb && locate newfile.html
/root/newfile.html
[root@localhost ~]#
`} />
            </div>



<Line />
            <Subheading text={`Find Command`} />
            <Text text={`The 'find' command is a powerful tool for searching files and directories. Unlike 'locate', 'find' works in real-time and does not rely on a database. It also provides various options for filtering and refining your search.`} />

            {/* ===================================================== */}
            {/* find command  [search by name] */}
            <div >
                <Supersubheading text={`Search by Name:`} />
                <TerminalOutput content={`[root@localhost ~]# find /etc -name chrony
/etc/logrotate.d/chrony
[root@localhost ~]#
`} />
                <Text text={`Search for files by name within a specific directory.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [case-insensitive search by name] */}
            <div >
                <Supersubheading text={`Case-Insensitive Search by Name:`} />
                <TerminalOutput content={`[root@localhost ~]# find /etc -iname cHroNy
/etc/logrotate.d/chrony
[root@localhost ~]#
`} />
                <Text text={`Perform a case-insensitive search.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by inode number] */}
            <div >
                <Supersubheading text={`Search by Inode Number:`} />
                <TerminalOutput content={`[root@localhost ~]# find / -inum 17232604
/etc/passwd
[root@localhost ~]#
`} />
                <Text text={`Find files by their inode number.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by file type] */}
            <div >
                <Supersubheading text={`Search by File Type:`} />
                <TerminalOutput content={`[root@localhost ~]# find /usr/libexec -type l
/usr/libexec/gawk
/usr/libexec/arptables-helper
/usr/libexec/sudo/libsudo_util.so
/usr/libexec/sudo/libsudo_util.so.0
/usr/libexec/platform-python
/usr/libexec/platform-python3.9
/usr/libexec/mysqld
[root@localhost ~]#
`} />
                <Text text={`Find files of a specific type (e.g., 'f' for regular files, 'd' for directories, 'l' for symbolic links).`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by file size] */}
            <div >
                <Supersubheading text={`Search by File Size:`} />
                <TerminalOutput content={`[root@localhost ~]# find /etc -size +2M
/etc/selinux/targeted/policy/policy.33
/etc/udev/hwdb.bin
[root@localhost ~]#
`} />
                <Text text={`Find files by size. Sizes can be specified with suffixes like 'k', 'M', or 'G' for kilobytes, megabytes, or gigabytes.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search for empty files or directories] */}
            <div >
                <Supersubheading text={`Search for Empty Files or Directories:`} />
                <TerminalOutput content={`[root@localhost ~]# find /etc/firewalld -empty
/etc/firewalld/helpers
/etc/firewalld/icmptypes
/etc/firewalld/ipsets
/etc/firewalld/services
[root@localhost ~]#
`} />
                <Text text={`Find empty files or directories.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by permissions] */}
            <div >
                <Supersubheading text={`Search by Permissions:`} />
                <TerminalOutput content={`[root@localhost ~]# find /home -perm 644
/home/john/.bash_logout
/home/john/.bash_profile
/home/john/.bashrc
[root@localhost ~]#
`} />
                <Text text={`Find files with specific permissions.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by user] */}
            <div >
                <Supersubheading text={`Search by User:`} />
                <TerminalOutput content={`[root@localhost ~]# useradd john
[root@localhost ~]# find / -user john
find: ‘/proc/1913/task/1913/fd/6’: No such file or directory
find: ‘/proc/1913/task/1913/fdinfo/6’: No such file or directory
find: ‘/proc/1913/fd/5’: No such file or directory
find: ‘/proc/1913/fdinfo/5’: No such file or directory
/var/spool/mail/john
/home/john
/home/john/.bash_logout
/home/john/.bash_profile
/home/john/.bashrc
[root@localhost ~]#
`} />
                <Text text={`Find files owned by a specific user.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by group] */}
            <div >
                <Supersubheading text={`Search by Group:`} />
                <TerminalOutput content={`[root@localhost ~]# find / -group john
find: ‘/proc/1915/task/1915/fd/6’: No such file or directory
find: ‘/proc/1915/task/1915/fdinfo/6’: No such file or directory
find: ‘/proc/1915/fd/5’: No such file or directory
find: ‘/proc/1915/fdinfo/5’: No such file or directory
/home/john
/home/john/.bash_logout
/home/john/.bash_profile
/home/john/.bashrc
[root@localhost ~]#
`} />
                <Text text={`Find files owned by a specific group.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [execute commands on found files] */}
            <div >
                <Supersubheading text={`Execute Commands on Found Files:`} />
                <TerminalOutput content={`[root@localhost ~]# find / -group john -exec cp -rf {} /tmp '\\;'
find: ‘/proc/1921/task/1921/fd/6’: No such file or directory
find: ‘/proc/1921/task/1921/fdinfo/6’: No such file or directory
find: ‘/proc/1921/fd/5’: No such file or directory
find: ‘/proc/1921/fdinfo/5’: No such file or directory
[root@localhost ~]# `} />
                
                <Text text={`Execute a command on each file found. '{}' is a placeholder for the current file, and '\\;' signifies the end of the command.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by access time] */}
            <div >
                <Supersubheading text={`Search by Access Time:`} />
                <TerminalOutput content={`[root@localhost ~]# find /usr/sbin -atime 1
/usr/sbin/alternatives
/usr/sbin/groupadd
/usr/sbin/lvm
/usr/sbin/ping
/usr/sbin/sefcontext_compile
/usr/sbin/sssd
[root@localhost ~]#
`} />
                <Text text={`Find files accessed within a certain number of days.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by modification time] */}
            <div >
                <Supersubheading text={`Search by Modification Time:`} />
                <TerminalOutput content={`[root@localhost ~]# find /usr/include -mtime 1
/usr/include
/usr/include/openssl
/usr/include/mysql
/usr/include/mysql/mariadb
/usr/include/mysql/mysql
[root@localhost ~]#
`} />
                <Text text={`Find files modified within a certain number of days.`} />
            </div>

            {/* ===================================================== */}
            {/* find command  [search by change time] */}
            <div >
                <Supersubheading text={`Search by Change Time:`} />
                <TerminalOutput content={`[root@localhost ~]# find /etc/cockpit -ctime 1
/etc/cockpit/ws-certs.d
/etc/cockpit/ws-certs.d/0-self-signed-ca.pem
/etc/cockpit/ws-certs.d/0-self-signed.cert
/etc/cockpit/ws-certs.d/0-self-signed.key
[root@localhost ~]#
`} />
                <Text text={`Find files whose metadata (like permissions or ownership) changed within a certain number of days.`} />
            </div>


<Line />
            {/* ===================================================== */}
            {/* Summary of key differences */}
            <div >
                <Subheading text={`Key Differences Between 'locate' and 'find' Commands`} />
                <Text text={`'locate' is faster because it uses a prebuilt database, while 'find' searches in real-time.`} />
                <Text text={`'find' offers more options and flexibility, allowing for complex searches and the ability to specify a particular search location.`} />
                <Text text={`'locate' searches the entire filesystem, whereas 'find' can be directed to search in specific directories.`} />
            </div>

        </div>
    )
}

export default LocateAndFind;