import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const FTP = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`FTP (File Transfer Protocol)`} />

            <Text text={`FTP is used for sharing files over a network. It supports both downloading and uploading operations, but these are subject to user permissions and server configurations.`} />


            <Text text={`FTP enables user-based sharing and is primarily used for file transfers over a network.`} />


            <Text text={`To allow users to download and upload data within their permissible areas.`} />



            <Subheading text={`Types of Operations`} />
            <Supersubheading text={`1. GET`} />
            <Text text={`The GET method is used to download data from the FTP server to the FTP client.`} />
            <Text text={`By default, GET is enabled for valid users but disabled for anonymous users after RHEL-6.`} />

            <Supersubheading text={`2. PUT`} />
            <Text text={`The PUT method is used to upload data from the FTP client to the FTP server.`} />
            <Text text={`By default, PUT is disabled for all users.`} />
            <Text text={`To enable uploading, modify the FTP server configuration file:`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/vsftpd/vsftpd.conf
write_enable=YES`} />

            <Line />
            <Subheading text={`Types of FTP Users`} />
            <Supersubheading text={`1. Anonymous / FTP User`} />
            <Text text={`No password is required for access.`} />
            <Text text={`Default landing directory: /var/ftp.`} />
            <Text text={`After RHEL-6, downloading and uploading are disabled by default for anonymous users.`} />
            <Text text={`To enable anonymous user access:`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/vsftpd/vsftpd.conf
anonymous_enable=YES`} />

            <Supersubheading text={`2. Valid User`} />
            <Text text={`Requires a valid username and password for access.`} />
            <Text text={`Default landing directory: /home/<user_home_dir>.`} />

            <Line />

            <Subheading text={`Server-Side Configuration`} />
            <ul className="list-disc pl-5 space-y-2 pb-3">
                <li>Package: vsftpd</li>
                <li>Service: vsftpd (start & enable)</li>
                <li>Ports: 21 (control connection), 20 (data connection)</li>
                <li>Config file: /etc/vsftpd/vsftpd.conf</li>
                <li>Log file: /var/log/xferlog</li>
                <li>Directory anonymous user: /var/ftp</li>
                <li>Directory valid user: /home/john</li>
            </ul>


            <Subheading text={`Client-Side Configuration`} />
            <ul className="list-disc pl-5 space-y-2 pb-3">
                <li>Package: ftp / lftp</li>
                <li>Tools: ftp, lftp, sftp, GUI tools (FileZilla, Firefox)</li>
            </ul>
            {/* ====================================================================== */}
            <Line />

            <Subheading text={`Login Methods`} />

            <Supersubheading text={`1. Login with anonymous user:`} />
            <TerminalOutput content={`[root@localhost ~]# ftp 192.168.131.134
Connected to 192.168.131.134 (192.168.131.134).
220 (vsFTPd 3.0.3)
Name (192.168.131.134:root): ftp
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>
`} />
            <TerminalOutput content={`[root@localhost ~]# ftp 192.168.131.134
Connected to 192.168.131.134 (192.168.131.134).
220 (vsFTPd 3.0.3)
Name (192.168.131.134:root): anonymous
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>
`} />

            <Text text={`For better usability and tab-completion, use lftp:`} />
            <TerminalOutput content={`[root@localhost ~]# lftp -u ftp 192.168.131.134
Password:
lftp ftp@192.168.131.134:~>`} />
            <Text text={`We can specify the user name with 'lftp' command.`} />
            <TerminalOutput content={`[root@localhost ~]# lftp 192.168.131.134
lftp 192.168.131.134:~> `} />
            <Text text={`If we does not specify user name with lftp command, it will login as anonymous user by default and won't ask for the password.`} />

            <Supersubheading text={`2. Login with a valid user:`} />

            <TerminalOutput content={`[root@localhost ~]# ftp 192.168.131.134
Connected to 192.168.131.134 (192.168.131.134).
220 (vsFTPd 3.0.3)
Name (192.168.131.134:root): john
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> pwd
257 "/home/john" is the current directory
ftp>
`} />
            <Text text={`After login with a valid user, client will land to user's home directory.`} />
            <TerminalOutput content={`[root@localhost ~]# lftp -u john 192.168.131.134
Password:
lftp john@192.168.131.134:~> pwd
ftp://john@192.168.131.134
lftp john@192.168.131.134:~>
`} />
            <Text text={`Note: Command 'ftp' and 'lftp' does not work for super user (root).`} />
            
            <TerminalOutput content={`[root@localhost ~]# ftp 192.168.131.134
Connected to 192.168.131.134 (192.168.131.134).
220 (vsFTPd 3.0.3)
Name (192.168.131.134:root): root
530 Permission denied.
Login failed.
ftp>`} />
<Text text={`This happens because there is a file /etc/vsftpd/ftpusers`}/>
<Text text={`It contains the list of users that are not allowed to login via 'ftp' `}/>
<Text text={`To login the super user via ftp we have to remove entry of 'root' user from the files:`}/>
<TerminalOutput content={`[root@station2 ~]# vim /etc/vsftpd/ftpusers
[root@station2 ~]# vim /etc/vsftpd/user_list
[root@station2 ~]#
`}/>
            <Text text={`To login with super user without removing entry from above fiels, we have to use 'sftp' command.`} />
            <Supersubheading text={`3. Sucure Login:`} />
            <TerminalOutput content={`[root@localhost ~]# sftp 192.168.131.134
root@192.168.131.134's password:
Connected to 192.168.131.134.
sftp> pwd
Remote working directory: /root
sftp>
`} />
            <Text text={`If we do not provide user name with sftp command, it will login as super user (root) by default.`} />
            <Text text={`'sftp' service uses 'openssh-client' packages that is used by 'ssh' service as well.`} />
            <TerminalOutput content={`[root@localhost ~]# sftp john@192.168.131.134
john@192.168.131.134's password:
Connected to 192.168.131.134.
sftp>
`} />
            <TerminalOutput content={``} />



            {/* ================================================================================== */}
            <Line />
            <Subheading text={`Data Manipulation`} />

            <Supersubheading text={`Download single file:`} />
            <TerminalOutput content={`ftp> get file-1.txt
local: file-1.txt remote: file-1.txt
227 Entering Passive Mode (192,168,131,134,240,173).
150 Opening BINARY mode data connection for file-1.txt (0 bytes).
226 Transfer complete.
ftp> bye
221 Goodbye.
[root@localhost ~]# ls
file-1.txt
[root@localhost ~]#
`} />
            <TerminalOutput content={`[root@localhost ~]# lftp 192.168.131.134
lftp 192.168.131.134:~> get file-2.txt
lftp 192.168.131.134:/> bye
[root@localhost ~]# ls
file-1.txt  file-2.txt
[root@localhost ~]#
`} />
            <Text text={`This will be downloaded on the same path, where we were at the login time.`} />


            <Supersubheading text={`Download multiple files at a time:`} />
            <TerminalOutput content={`ftp> mget file-1.txt file-3.txt
mget file-1.txt? yes
227 Entering Passive Mode (192,168,131,134,122,91).
150 Opening BINARY mode data connection for file-1.txt (0 bytes).
226 Transfer complete.
mget file-3.txt? yes
227 Entering Passive Mode (192,168,131,134,152,78).
150 Opening BINARY mode data connection for file-3.txt (0 bytes).
226 Transfer complete.
ftp> bye
221 Goodbye.
[root@localhost ~]#
`} />
            <Text text={`There is a drawback of 'mget' command, it will ask confirmation for every file downloading.`} />
            <Text text={`To prevent this intraction mode, we use 'prompt' command.`} />
            <Supersubheading text={`Off Interactive Mode:`} />
            <TerminalOutput content={`ftp> prompt
Interactive mode off.
ftp>
`} />
            <Text text={`After turnning off interaction mode, it won't ask confirmation to download files using 'mget' command.`} />
            <Supersubheading text={`Change Loacl Directory:`} />
            <TerminalOutput content={`ftp> lcd /tmp
Local directory now /tmp
ftp> get file-1.txt
local: file-1.txt remote: file-1.txt
227 Entering Passive Mode (192,168,131,134,139,168).
150 Opening BINARY mode data connection for file-1.txt (0 bytes).
226 Transfer complete.
ftp> bye
221 Goodbye.
[root@localhost ~]# ls /tmp
file-1.txt
[root@localhost ~]#
`} />

            <Supersubheading text={`Upload File:`} />
            <TerminalOutput content={`ftp> put script.sh
local: script.sh remote: script.sh
227 Entering Passive Mode (192,168,131,134,238,247).
150 Ok to send data.
226 Transfer complete.
ftp> ls
227 Entering Passive Mode (192,168,131,134,94,153).
150 Here comes the directory listing.
-rw-r--r--    1 1000     1000            0 Dec 26 04:23 script.sh
226 Directory send OK.
ftp>
`} />


            {/* ========================================== */}
            <Line />

            <Subheading text={`Jail Environment for Security`} />
            <Text text={`By default, FTP users can navigate outside their landing directories, which is a security risk.`} />
            <Supersubheading text={`Before Creating Jail Environment:`} />
            <TerminalOutput content={`[root@localhost ~]# sftp john@192.168.131.134
john@192.168.131.134's password:
Connected to 192.168.131.134.
sftp> cd /etc
sftp> pwd
Remote working directory: /etc
sftp>
`} />


            <Supersubheading text={`Restrict users to their directories (jail environment):`} />
            <TerminalOutput content={`[root@localhost ~]# vim /etc/vsftpd/vsftpd.conf`} />
            <TerminalOutput content={`chroot_local_user=YES`} />
            <TerminalOutput content={`allow_writable_chroot=YES`} />
            <Text text={`Restart the FTP service to apply changes:`} />
            <TerminalOutput content={`[root@localhost ~]# systemctl restart vsftpd
[root@localhost ~]#`} />

<Supersubheading text={`After Creating Jail Environment:`} />
<TerminalOutput content={`[root@localhost ~]# ftp 192.168.131.134
Connected to 192.168.131.134 (192.168.131.134).
220 (vsFTPd 3.0.3)
Name (192.168.131.134:root): john
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> cd /etc
550 Failed to change directory.
ftp>
`} />
   
        </div>
    );
};

export default FTP;