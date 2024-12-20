import React from 'react';
import { Command, Heading, Supersubheading, Text, Subheading, TerminalOutput } from '../utils/Comps';

const UserManagement = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="User Management in Linux" />

            <Subheading text="User" />
            <Text text="A user is a person with a unique identity to access a server machine. The user can operate, configure, and monitor any live server." />
            <Text text="By default, the root user (superuser) is automatically created during installation." />

            <Subheading text="User Related Commands" />
            <Supersubheading text="Adding a New User" />
            <TerminalOutput content={`[root@localhost ~]# useradd nick
[root@localhost ~]# grep nick /etc/passwd
nick:x:1003:1003::/home/nick:/bin/bash
[root@localhost ~]#
`} />
            <Text text="Adds a new user to the system." />

            <Supersubheading text="Modifying User Information" />
            <TerminalOutput content={`[root@localhost ~]# usermod -l furry nick
[root@localhost ~]# grep furry /etc/passwd
furry:x:1003:1003::/home/nick:/bin/bash
[root@localhost ~]#
`} />
            <Text text="Modifies existing user information." />

            <Supersubheading text="Deleting a User" />
            <TerminalOutput content={`[root@localhost ~]# userdel furry
[root@localhost ~]# grep furry /etc/passwd
[root@localhost ~]#
`} />
                        <Text text="Deletes a user from the system." />

            <Supersubheading text="Setting User Password" />
            <TerminalOutput content={`[root@localhost ~]# passwd john
Changing password for user john.
New password:
BAD PASSWORD: The password is shorter than 8 characters
Retype new password:
passwd: all authentication tokens updated successfully.
[root@localhost ~]#
`} />
                        <Text text="Sets or changes the password for a user." />

            <Supersubheading text="Checking User ID and Group IDs" />
            <TerminalOutput content={`[root@localhost ~]# id john
uid=1003(john) gid=1004(john) groups=1004(john)
[root@localhost ~]#
`} />
            <Text text="Displays the user ID (UID) and group IDs (GID) for a user." />

            <Supersubheading text="Listing Groups for a User" />
            <TerminalOutput content={`[root@localhost ~]# groups root
root : root
[root@localhost ~]#
`} />
            <Text text="Lists all groups (primary & secondary) for a specific user." />

            <Supersubheading text="Switching Users" />
            <TerminalOutput content={`[root@localhost ~]# su - john
[john@localhost ~]$
`} />
            <Text text="Switches to another user." />

            <Supersubheading text="Logging Out the Current User" />
            <TerminalOutput content={`[john@localhost ~]$ exit
logout
[root@localhost ~]#
`} />
            <Text text="Logs out the currently logged-in user." />

            <Subheading text="User-Related Information Files" />
            <Supersubheading text="/etc/passwd" />
            <TerminalOutput content={`[root@localhost ~]#
[root@localhost ~]# cat /etc/passwd
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
john:x:1003:1004::/home/john:/bin/bash
[root@localhost ~]#
`} />
            <Text text="This file contains user details with 7 fields separated by a colon (:)." />
            <Text text="Fields include: username, password pointer, UID, GID, comment, home directory, and shell type." />

            <Supersubheading text="/etc/default/useradd" />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/default/useradd
# useradd defaults file
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/skel
CREATE_MAIL_SPOOL=yes

[root@localhost ~]#
`} />
            <Text text="Contains default settings for adding users." />

         
            <Supersubheading text="/etc/shadow" />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/shadow
root:$6$OfGD0pT/JnY.tV0w$akUr3yqN6WRuQJMGpx4ZcMleuwzLyNfP6ezr0O/Q78TtFFXz0BINZByrfpIEH7l2HJbIKzE0eGZuYdF/DxpUR1::0:99999:7:::
bin:*:18849:0:99999:7:::
daemon:*:18849:0:99999:7:::
adm:*:18849:0:99999:7:::
lp:*:18849:0:99999:7:::
sync:*:18849:0:99999:7:::
shutdown:*:18849:0:99999:7:::
halt:*:18849:0:99999:7:::
mail:*:18849:0:99999:7:::
operator:*:18849:0:99999:7:::
games:*:18849:0:99999:7:::
ftp:*:18849:0:99999:7:::
nobody:*:18849:0:99999:7:::
systemd-coredump:!!:20066::::::
dbus:!!:20066::::::
polkitd:!!:20066::::::
tss:!!:20066::::::
clevis:!!:20066::::::
sssd:!!:20066::::::
libstoragemgmt:!!:20066::::::
setroubleshoot:!!:20066::::::
cockpit-ws:!!:20066::::::
cockpit-wsinstance:!!:20066::::::
sshd:!!:20066::::::
chrony:!!:20066::::::
tcpdump:!!:20066::::::
systemd-oom:!*:20066::::::
ok:$6$dDSwfnbC9uvZBdt8$pPbSqpa1J33HMmwmZmyrjTE/IishtuCFCMfJn/PA./oSB7UdyN9ppKUde9pHdN3.a6PZrBSMg7MgFdETQqSSa1:20066:0:99999:7:::
doc:$6$zJre/IUAMdG/eLuD$SRqBeWwt4phLT/kz8jt84oLQUYv5KAGD.vJ5WrTg03EWwtGxzaprh5GeCbwBK9ajuWlMC1k0RLHeKg9.1JpE00:20066:0:99999:7:::
rpc:!!:20066:0:99999:7:::
rpcuser:!!:20066::::::
dom:!!:20076:0:99999:7:::
john:$6$Nnq6VSoLRD9XHRBr$xYwfC73RZFshQTnK.qyYSQdXpv8Si0MP5UVnCxrKJDKRyrb7qxCllTHoN6OojSI4eCPspqDna/5r3D7wHJ48f.:20077:0:99999:7:::
[root@localhost ~]#
`} />
            <Text text="Contains user passwords in encrypted format and includes password policies." />

            <Supersubheading text="/etc/group" />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/group
root:x:0:
bin:x:1:
daemon:x:2:
sys:x:3:
adm:x:4:
tty:x:5:
disk:x:6:
lp:x:7:
mem:x:8:
kmem:x:9:
wheel:x:10:
cdrom:x:11:
mail:x:12:
man:x:15:
dialout:x:18:
floppy:x:19:
games:x:20:
tape:x:33:
video:x:39:
ftp:x:50:
lock:x:54:
audio:x:63:
users:x:100:
nobody:x:65534:
utmp:x:22:
utempter:x:35:
input:x:999:
kvm:x:36:
render:x:998:
systemd-journal:x:190:
systemd-coredump:x:997:
dbus:x:81:
polkitd:x:996:
printadmin:x:995:
tss:x:59:clevis
ssh_keys:x:994:
clevis:x:993:
sssd:x:992:
libstoragemgmt:x:991:
setroubleshoot:x:990:
cockpit-ws:x:989:
cockpit-wsinstance:x:988:
sshd:x:74:
chrony:x:987:
slocate:x:21:
tcpdump:x:72:
sgx:x:986:
systemd-oom:x:985:
ok:x:1000:
doc:x:1001:
rpc:x:32:
rpcuser:x:29:
qat:x:984:
docker:x:983:
dom:x:1002:
nick:x:1003:
john:x:1004:
[root@localhost ~]#
`} />
            <Text text="Contains group details divided into 4 fields: group name, password pointer, GID, and list of users in the group." />

            <Supersubheading text="/etc/gshadow" />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/gshadow
root:::
bin:::
daemon:::
sys:::
adm:::
tty:::
disk:::
lp:::
mem:::
kmem:::
wheel:::
cdrom:::
mail:::
man:::
dialout:::
floppy:::
games:::
tape:::
video:::
ftp:::
lock:::
audio:::
users:::
nobody:::
utmp:!::
utempter:!::
input:!::
kvm:!::
render:!::
systemd-journal:!::
systemd-coredump:!::
dbus:!::
polkitd:!::
printadmin:!::
tss:!::clevis
ssh_keys:!::
clevis:!::
sssd:!::
libstoragemgmt:!::
setroubleshoot:!::
cockpit-ws:!::
cockpit-wsinstance:!::
sshd:!::
chrony:!::
slocate:!::
tcpdump:!::
sgx:!*::
systemd-oom:!*::
ok:!::
doc:!::
rpc:!::
rpcuser:!::
qat:!::
docker:!::
dom:!::
nick:!::
john:!::
[root@localhost ~]#
`} />
            <Text text="Contains group information in encrypted format." />

            <Subheading text="UID and GID" />
            <TerminalOutput content={`[root@localhost ~]# id -a john
uid=1003(john) gid=1004(john) groups=1004(john)
[root@localhost ~]#
`} />
            <Supersubheading text="What is UID?" />
            <Text text="UID (User ID) is a unique identifier for each user, which remains constant throughout the user's existence." />

            <Supersubheading text="What is GID?" />
            <Text text="GID (Group ID) represents the user's group. A user can have multiple GIDs, but one primary GID, and Unix-based systems use the User Primary Group (UPG) scheme." />

            <Supersubheading text="Range of UID and GID" />
            <Text text="The range of UID and GID is between 0 and 60000, divided into three parts." />
            <Text text="1. Superuser (root) - UID 0, GID 0 (created by default)." />
            <Text text="2. System or Service Users - UID/GID 1 to 999 (generated automatically)." />
            <Text text="3. Normal Users - UID/GID 1000 to 60000 (created by superusers)." />
            <TerminalOutput content={`[root@localhost ~]# cat /etc/login.defs
#
# Please note that the parameters in this configuration file control the
# behavior of the tools from the shadow-utils component. None of these
# tools uses the PAM mechanism, and the utilities that use PAM (such as the
# passwd command) should therefore be configured elsewhere. Refer to
# /etc/pam.d/system-auth for more information.
#

#
# Delay in seconds before being allowed another attempt after a login failure
# Note: When PAM is used, some modules may enforce a minimum delay (e.g.
#       pam_unix(8) enforces a 2s delay)
#
#FAIL_DELAY             3

# Currently FAILLOG_ENAB is not supported

#
# Enable display of unknown usernames when login(1) failures are recorded.
#
#LOG_UNKFAIL_ENAB       no

# Currently LOG_OK_LOGINS is not supported

# Currently LASTLOG_ENAB is not supported

#
# Limit the highest user ID number for which the lastlog entries should
# be updated.
#
# No LASTLOG_UID_MAX means that there is no user ID limit for writing
# lastlog entries.
#
#LASTLOG_UID_MAX

# Currently MAIL_CHECK_ENAB is not supported

# Currently OBSCURE_CHECKS_ENAB is not supported

# Currently PORTTIME_CHECKS_ENAB is not supported

# Currently QUOTAS_ENAB is not supported

# Currently SYSLOG_SU_ENAB is not supported

#
# Enable "syslog" logging of newgrp(1) and sg(1) activity.
#
#SYSLOG_SG_ENAB         yes

# Currently CONSOLE is not supported

# Currently SULOG_FILE is not supported

# Currently MOTD_FILE is not supported

# Currently ISSUE_FILE is not supported

# Currently TTYTYPE_FILE is not supported

# Currently FTMP_FILE is not supported

# Currently NOLOGINS_FILE is not supported

# Currently SU_NAME is not supported

# *REQUIRED*
#   Directory where mailboxes reside, _or_ name of file, relative to the
#   home directory.  If you _do_ define both, MAIL_DIR takes precedence.
#
MAIL_DIR        /var/spool/mail
#MAIL_FILE      .mail

#
# If defined, file which inhibits all the usual chatter during the login
# sequence.  If a full pathname, then hushed mode will be enabled if the
# user's name or shell are found in the file.  If not a full pathname, then
# hushed mode will be enabled if the file exists in the user's home directory.
#
#HUSHLOGIN_FILE .hushlogin
#HUSHLOGIN_FILE /etc/hushlogins

# Currently ENV_TZ is not supported

# Currently ENV_HZ is not supported

#
# The default PATH settings, for superuser and normal users.
#
# (they are minimal, add the rest in the shell startup files)
#ENV_SUPATH     PATH=/sbin:/bin:/usr/sbin:/usr/bin
#ENV_PATH       PATH=/bin:/usr/bin

#
# Terminal permissions
#
#       TTYGROUP        Login tty will be assigned this group ownership.
#       TTYPERM         Login tty will be set to this permission.
#
# If you have a write(1) program which is "setgid" to a special group
# which owns the terminals, define TTYGROUP as the number of such group
# and TTYPERM as 0620.  Otherwise leave TTYGROUP commented out and
# set TTYPERM to either 622 or 600.
#
#TTYGROUP       tty
#TTYPERM                0600

# Currently ERASECHAR, KILLCHAR and ULIMIT are not supported

# Default initial "umask" value used by login(1) on non-PAM enabled systems.
# Default "umask" value for pam_umask(8) on PAM enabled systems.
# UMASK is also used by useradd(8) and newusers(8) to set the mode for new
# home directories if HOME_MODE is not set.
# 022 is the default value, but 027, or even 077, could be considered
# for increased privacy. There is no One True Answer here: each sysadmin
# must make up their mind.
UMASK           022

# HOME_MODE is used by useradd(8) and newusers(8) to set the mode for new
# home directories.
# If HOME_MODE is not set, the value of UMASK is used to create the mode.
HOME_MODE       0700

# Password aging controls:
#
#       PASS_MAX_DAYS   Maximum number of days a password may be used.
#       PASS_MIN_DAYS   Minimum number of days allowed between password changes.
#       PASS_MIN_LEN    Minimum acceptable password length.
#       PASS_WARN_AGE   Number of days warning given before a password expires.
#
PASS_MAX_DAYS   99999
PASS_MIN_DAYS   0
PASS_WARN_AGE   7

# Currently PASS_MIN_LEN is not supported

# Currently SU_WHEEL_ONLY is not supported

# Currently CRACKLIB_DICTPATH is not supported

#
# Min/max values for automatic uid selection in useradd(8)
#
UID_MIN                  1000
UID_MAX                 60000
# System accounts
SYS_UID_MIN               201
SYS_UID_MAX               999
# Extra per user uids
SUB_UID_MIN                100000
SUB_UID_MAX             600100000
SUB_UID_COUNT               65536

#
# Min/max values for automatic gid selection in groupadd(8)
#
GID_MIN                  1000
GID_MAX                 60000
# System accounts
SYS_GID_MIN               201
SYS_GID_MAX               999
# Extra per user group ids
SUB_GID_MIN                100000
SUB_GID_MAX             600100000
SUB_GID_COUNT               65536

#
# Max number of login(1) retries if password is bad
#
#LOGIN_RETRIES          3

#
# Max time in seconds for login(1)
#
#LOGIN_TIMEOUT          60

# Currently PASS_CHANGE_TRIES is not supported

# Currently PASS_ALWAYS_WARN is not supported

# Currently PASS_MAX_LEN is not supported

# Currently CHFN_AUTH is not supported

#
# Which fields may be changed by regular users using chfn(1) - use
# any combination of letters "frwh" (full name, room number, work
# phone, home phone).  If not defined, no changes are allowed.
# For backward compatibility, "yes" = "rwh" and "no" = "frwh".
#
#CHFN_RESTRICT          rwh

# Currently LOGIN_STRING is not supported

# Currently MD5_CRYPT_ENAB is not supported

#
# If set to MD5, MD5-based algorithm will be used for encrypting password
# If set to SHA256, SHA256-based algorithm will be used for encrypting password
# If set to SHA512, SHA512-based algorithm will be used for encrypting password
# If set to BLOWFISH, BLOWFISH-based algorithm will be used for encrypting password
# If set to DES, DES-based algorithm will be used for encrypting password (default)
#
ENCRYPT_METHOD SHA512

#
# Only works if ENCRYPT_METHOD is set to SHA256 or SHA512.
#
# Define the number of SHA rounds.
# With a lot of rounds, it is more difficult to brute-force the password.
# However, more CPU resources will be needed to authenticate users if
# this value is increased.
#
# If not specified, the libc will choose the default number of rounds (5000).
# The values must be within the 1000-999999999 range.
#
#SHA_CRYPT_MAX_ROUNDS 5000

# Currently SHA_CRYPT_MIN_ROUNDS is not supported

# Currently BCRYPT_MIN_ROUNDS and BCRYPT_MAX_ROUNDS are not supported

# Currently CONSOLE_GROUPS is not supported

#
# Should login be allowed if we can't cd to the home directory?
# Default is yes.
#
#DEFAULT_HOME   yes

# Currently ENVIRON_FILE is not supported

#
# If defined, this command is run when removing a user.
# It should remove any at/cron/print jobs etc. owned by
# the user to be removed (passed as the first argument).
#
#USERDEL_CMD    /usr/sbin/userdel_local

#
# Enables userdel(8) to remove user groups if no members exist.
#
USERGROUPS_ENAB yes

#
# If set to a non-zero number, the shadow utilities will make sure that
# groups never have more than this number of users on one line.
# This permits to support split groups (groups split into multiple lines,
# with the same group ID, to avoid limitation of the line length in the
# group file).
#
# 0 is the default value and disables this feature.
#
#MAX_MEMBERS_PER_GROUP  0

#
# If useradd(8) should create home directories for users by default (non
# system users only).
# This option is overridden with the -M or -m flags on the useradd(8)
# command-line.
#
CREATE_HOME     yes

#
# Force use shadow, even if shadow passwd & shadow group files are
# missing.
#
#FORCE_SHADOW    yes

#
# Select the HMAC cryptography algorithm.
# Used in pam_timestamp module to calculate the keyed-hash message
# authentication code.
#
# Note: It is recommended to check hmac(3) to see the possible algorithms
# that are available in your system.
#
HMAC_CRYPTO_ALGO SHA512
[root@localhost ~]#
`} />
            <Text text="Use this command to view the UID and GID range." />

            <Subheading text="Adding and Modifying Users" />
            <Supersubheading text="Adding a New User with Default Parameters" />
            <TerminalOutput content={`[root@localhost ~]# useradd harry
[root@localhost ~]# grep harry /etc/passwd
harry:x:1004:1005::/home/harry:/bin/bash
[root@localhost ~]#
`} />
            <Text text="Adds a new user with default settings." />

            <Supersubheading text="Adding a New User with Custom Parameters" />
            <TerminalOutput content={`[root@localhost ~]# grep harry /etc/passwd
harry:x:1008:1008::/home/harry:/bin/bash
[root@localhost ~]#
`} />
            <Command command="useradd <options> <value> <user_name>" />
            <Text text="Adds a user with custom parameters such as a custom shell, UID, or GID." />

            <Supersubheading text="Modifying User Information" />
            <TerminalOutput content={`[root@localhost ~]# usermod -u 1010 harry
[root@localhost ~]# grep harry /etc/passwd
harry:x:1010:1008::/home/harry:/bin/bash
[root@localhost ~]#
`} />
            <Text text="Modifies user information, including renaming login names, changing home directories, or updating UID/GID." />

            <Subheading text="Locking and Unlocking User Accounts" />
            <Supersubheading text="Locking a User Account" />
            <TerminalOutput content={`[root@localhost ~]# usermod -L harry
[root@localhost ~]#`} />
            <Text text="Locks a user account by preventing the system from reading the user's password during login." />


            <TerminalOutput content={`[root@localhost ~]# passwd -l harry
Locking password for user harry.
passwd: Success
[root@localhost ~]#
`} />
            <Text text="Locks a user account with an acknowledgment." />

            <Supersubheading text="Unlocking a User Account" />
            <TerminalOutput content={`[root@localhost ~]# passwd -u harry
Unlocking password for user harry.
passwd: Warning: unlocked password would be empty.
passwd: Unsafe operation (use -f to force)
[root@localhost ~]#
`} />
            <Text text="Unlocks a locked user account." />

            <Supersubheading text="Checking Account Status" />
            <TerminalOutput content={`[root@localhost ~]# passwd -S harry
harry LK 2024-12-20 0 99999 7 -1 (Password locked.)
[root@localhost ~]#
`} />
            <Text text="Checks whether the user account is locked (LK) or active (PS)." />

            <Supersubheading text="Deleting a User" />
            <TerminalOutput content={`[root@localhost ~]# userdel harry
[root@localhost ~]# grep harry /etc/passwd
[root@localhost ~]#
`} />
            <Text text="Deletes a user but keeps their home directory and mail." />

            <TerminalOutput content={`[root@localhost ~]# useradd harry
[root@localhost ~]# userdel -rf harry
[root@localhost ~]# ls /home | grep harry
[root@localhost ~]#
`} />
            <Text text="Deletes a user and all associated data (home directory, mail account, etc.)." />

            <Subheading text="Recovering User Bash Profile Files" />
            <Text text="In case of accidental deletion of bash profile files in a user's home directory, you can restore them from the backup at `/etc/skel`. Alternatively, you can check the default backup location in `/etc/default/useradd`." />

            <Subheading text="Creating a User Without `useradd` Command" />
            <Text text="You can manually create a user by following these steps:" />
            <Text text="1. Create a home directory for the user under `/home`." />
            <Text text="2. Add an entry for the user in `/etc/passwd` with the username, UID, GID, home directory, and shell." />
            <Text text="3. Make corresponding entries in `/etc/group` for the user's group." />
            <Text text="4. Set ownership of the home directory to the new user and change the group ownership." />
            <Text text="5. Change the home directory's permissions to 700." />
            <Text text="6. Copy necessary files from `/etc/skel` to the new home directory." />
            <Text text="This process successfully creates a user without the need for the `useradd` command." />

            <Text text="Note: User management is critical for maintaining security and operational efficiency in multi-user environments." />
        </div>
    );
};

export default UserManagement;
