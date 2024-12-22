import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const FTP = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text={`FTP (File Transfer Protocol)`} />

            <Text text={`FTP is used for sharing files over a network. It supports both downloading and uploading operations, but these are subject to user permissions and server configurations.`} />

            <Line />

            <Subheading text={`Theory`} />
            <Text text={`FTP enables user-based sharing and is primarily used for file transfers over a network.`} />

            <Subheading text={`Use Cases`} />
            <Text text={`- To allow users to download and upload data within their permissible areas.`} />

            <Line />

            <Subheading text={`Types of Operations`} />
            <Supersubheading text={`1. GET`} />
            <Text text={`The GET method is used to download data from the FTP server to the FTP client.`} />
            <Text text={`- By default, GET is enabled for valid users but disabled for anonymous users after RHEL-6.`} />

            <Supersubheading text={`2. PUT`} />
            <Text text={`The PUT method is used to upload data from the FTP client to the FTP server.`} />
            <Text text={`- By default, PUT is disabled for all users.`} />
            <Text text={`- To enable uploading, modify the FTP server configuration file:`} />
            <TerminalOutput content={`# vim /etc/vsftpd/vsftpd.conf
write_enable=YES`} />

            <Line />

            <Subheading text={`Types of FTP Users`} />
            <Supersubheading text={`1. Anonymous / FTP User`} />
            <Text text={`- No password is required for access.`} />
            <Text text={`- Default landing directory: /var/ftp.`} />
            <Text text={`- After RHEL-6, downloading and uploading are disabled by default for anonymous users.`} />
            <Text text={`- To enable anonymous user access:`} />
            <TerminalOutput content={`# vim /etc/vsftpd/vsftpd.conf
anonymous_enable=YES`} />

            <Supersubheading text={`2. Valid User`} />
            <Text text={`- Requires a valid username and password for access.`} />
            <Text text={`- Default landing directory: /home/<user_home_dir>.`} />

            <Line />

            <Subheading text={`Server-Side Configuration`} />
            <TerminalOutput content={`Package: vsftpd
Service: vsftpd (start & enable)
Ports: 21 (control connection), 20 (data connection)
Config file: /etc/vsftpd/vsftpd.conf
Log file: /var/log/xferlog
Default directories:
  - Anonymous user: /var/ftp
  - Valid user: /home/<user_home_dir>`} />

            <Line />

            <Subheading text={`Client-Side Configuration`} />
            <TerminalOutput content={`Packages: ftp / lftp
Tools: ftp, lftp, sftp, GUI tools (FileZilla, Firefox)`} />

            <Supersubheading text={`Commands`} />
            <TerminalOutput content={`# ftp <ftp_server_ip>
# ftp -u <user_name> <ftp_server_ip>
To establish a connection with the FTP server.`} />
            <Text text={`Commands after connecting:`} />
            <TerminalOutput content={`ftp > get <file_name>
To download a single file.

ftp > mget <file_1> <file_2>
To download multiple files. Use 'prompt' to disable interaction.`} />
            <TerminalOutput content={`ftp > lcd <path>
To change the local download directory.

ftp > put <file_name>
To upload a file to the server.`} />
            <Text text={`For better usability and tab-completion, use lftp:`} />
            <TerminalOutput content={`# lftp <ftp_server_ip>
# lftp -u <user_name> <ftp_server_ip>`} />

            <Text text={`To establish secure connections, use sftp:`} />
            <TerminalOutput content={`# sftp root@<ftp_server_ip>`} />

            <Line />

            <Subheading text={`Jail Environment for Security`} />
            <Text text={`By default, FTP users can navigate outside their landing directories, which is a security risk.`} />
            <Text text={`To restrict users to their directories (jail environment):`} />
            <TerminalOutput content={`# vim /etc/vsftpd/vsftpd.conf
chroot_local_user=YES
allow_writable_chroot=YES`} />
            <Text text={`Restart the FTP service to apply changes:`} />
            <TerminalOutput content={`# systemctl restart vsftpd`} />

            <Line />
        </div>
    );
};

export default FTP;
