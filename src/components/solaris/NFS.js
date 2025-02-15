import React from 'react';
import { Heading, Line, Subheading, Supersubheading, TerminalOutput, Text } from "../utils/Comps";

const NFSSolaris = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`NFS (Network File System) in Solaris`} />

      <Text text={`NFS (Network File System) is a protocol that allows a system to share files and directories over a network, enabling remote systems to access them as if they were local files. Solaris provides NFS services to allow file sharing and access between Unix-based systems, facilitating collaboration and data sharing across different machines.`} />

      <Text text={`NFS is essential in a networked environment, particularly when managing files and directories across multiple systems. In Solaris, NFS can be configured to serve files from one machine (NFS server) to others (NFS clients), making it a vital tool for enterprise environments.`} />

      <Line />
      <Subheading text={`Configuring NFS in Solaris`} />

      <Supersubheading text={`Step 1: Install NFS Packages`} />
      <Text text={`Before setting up NFS, make sure that the necessary NFS packages are installed on your Solaris system. Most Solaris systems have these packages by default, but it’s worth checking if they are installed.`} />

      <Text text={`You can check if the NFS packages are installed by using the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg list nfs`} />
      <Text text={`If NFS packages are missing, you can install them using:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg install pkg://solaris/nfs`} />

      <Supersubheading text={`Step 2: Start NFS Services`} />
      <Text text={`Once the NFS packages are installed, you need to start the NFS services on the system. You can enable the NFS service to start automatically at boot time and manually start it with the following commands:`} />
      <TerminalOutput content={`[root@localhost:~]# svcadm enable svc:/network/nfs/server`} />
      <Text text={`This command enables the NFS server service to start automatically during system boot. To start the service immediately, use the following:`} />
      <TerminalOutput content={`[root@localhost:~]# svcadm restart svc:/network/nfs/server`} />

      <Supersubheading text={`Step 3: Configure Shared Directories`} />
      <Text text={`Next, you’ll need to configure the directories you want to share over the network. This is done by editing the NFS exports file, which defines the directories to be shared and the access permissions.`} />
      <Text text={`To edit the NFS exports file, open the file in a text editor:`} />
      <TerminalOutput content={`[root@localhost:~]# vi /etc/dfs/dfstab`} />
      <Text text={`In this file, you’ll add the directories you wish to share. Here’s an example entry for sharing a directory:`} />
      <TerminalOutput content={`share -F nfs -o rw,anon=0 /export/home`} />
      <Text text={`In the example above:
      - The -F nfs option indicates NFS sharing.
      - The -o rw option allows read/write access to the shared directory.
      - The anon=0 option specifies that the access will be as root for anonymous users (you can adjust this based on your needs).
      - /export/home is the directory being shared.`} />

      <Text text={`After modifying the dfstab file, run the following command to apply the changes and share the directories:`} />
      <TerminalOutput content={`[root@localhost:~]# shareall`} />

      <Supersubheading text={`Step 4: Configure Firewall (Optional)`} />
      <Text text={`If you are using a firewall on the Solaris server, you may need to allow NFS traffic. NFS typically uses the following ports:`} />
      <ul>
        <li>Port 2049 for NFS</li>
        <li>Port 111 for RPCBind</li>
        <li>Port 20048 for mountd</li>
      </ul>
      <Text text={`To ensure that NFS traffic is allowed, you can configure the firewall to permit these ports.`} />

      <Line />
      <Subheading text={`NFS Client Configuration`} />

      <Supersubheading text={`Step 1: Install NFS Client Packages`} />
      <Text text={`On the client system, make sure the NFS client packages are installed. Most systems already have these packages installed, but you can verify with the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg list nfs`} />
      <Text text={`If the client packages are not installed, you can install them using:`} />
      <TerminalOutput content={`[root@localhost:~]# pkg install pkg://solaris/nfs`} />

      <Supersubheading text={`Step 2: Mount Remote NFS Share`} />
      <Text text={`Once the NFS client is ready, you can mount the remote NFS share on the client machine. Use the following command to mount the NFS share from the server:`} />
      <TerminalOutput content={`[root@localhost:~]# mount -F nfs <server-ip>:/export/home /mnt`} />
      <Text text={`In the above command:
      - Replace <server-ip> with the IP address of the NFS server.
      - /export/home is the shared directory on the server.
      - /mnt is the local directory on the client where the NFS share will be mounted.`} />

      <Text text={`You can verify the mounted share by using the mount command:`} />
      <TerminalOutput content={`[root@localhost:~]# mount`} />
      <Text text={`The output will display the NFS share that has been mounted.`} />

      <Supersubheading text={`Step 3: Automate Mounting with /etc/vfstab`} />
      <Text text={`To ensure that the NFS share is mounted automatically at boot time, you can add an entry to the /etc/vfstab file. Open the file and add the following line:`} />
      <TerminalOutput content={`<server-ip>:/export/home /mnt nfs - yes rw`} />
      <Text text={`After adding the entry, the NFS share will be automatically mounted every time the client system boots.`} />

      <Line />
      <Subheading text={`Verifying and Managing NFS`} />

      <Supersubheading text={`Verify NFS Share on Server`} />
      <Text text={`To verify the shared directories on the NFS server, you can use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# share`}/>
      <Text text={`This will display a list of all shared directories on the server.`} />

      <Supersubheading text={`Verify NFS Mount on Client`} />
      <Text text={`To verify that the NFS share is mounted on the client, use the mount command:`} />
      <TerminalOutput content={`[root@localhost:~]# mount`} />
      <Text text={`This will display the mounted file systems, including the NFS share.`} />

      <Supersubheading text={`Unmount NFS Share`} />
      <Text text={`To unmount the NFS share on the client, use the following command:`} />
      <TerminalOutput content={`[root@localhost:~]# umount /mnt`} />
      <Text text={`This will unmount the NFS share from the client.`} />

      <Line />
      <Subheading text={`Troubleshooting NFS`} />

      <Supersubheading text={`NFS Service Not Starting`} />
      <Text text={`If the NFS service does not start, check the status of the service with:`} />
      <TerminalOutput content={`[root@localhost:~]# svcs svc:/network/nfs/server`} />
      <Text text={`If the service is not online, try restarting it using:`} />
      <TerminalOutput content={`[root@localhost:~]# svcadm restart svc:/network/nfs/server`} />

      <Supersubheading text={`Unable to Mount NFS Share`} />
      <Text text={`If you are unable to mount the NFS share on the client, ensure that the server is correctly sharing the directory and that the firewall is configured properly. Use showmount to verify shared directories on the server:`} />
      <TerminalOutput content={`[root@localhost:~]# showmount -e <server-ip>`} />
      <Text text={`If the share does not appear, check the /etc/dfs/dfstab file on the server for correctness.`} />

      <Text text={`For more advanced troubleshooting, check the system logs (/var/adm/messages and /var/log/syslog) for NFS-related errors.`} />

    </div>
  );
};

export default NFSSolaris;
