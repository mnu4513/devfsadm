import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function AdHocExamples() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Commonly Used Ansible Ad-Hoc Command Examples`} />

      <Subheading text={`1. Copy Module`} />
      <Text text={`The \`copy\` module in Ansible allows you to copy files between the control node and the managed nodes. It is similar to the traditional Linux \`cp\` command but is extended to work with remote machines.`} />
      <Text text={`Here are some common examples of the \`copy\` module in action:`} />
      
      <Supersubheading text={`Copy a File to All Managed Nodes`} />
      <Text text={`To copy a file from the control node to all managed nodes:`} />
      <TerminalOutput content={`ansible all -m copy -a 'src=./file dest=/tmp'`} />
      
      <Supersubheading text={`Copy Content to Managed Nodes`} />
      <Text text={`You can also use the \`copy\` module to push a single line of content to a file on managed nodes:`} />
      <TerminalOutput content={`ansible localhost -m copy -a 'content="Hello Ansible!" dest=/tmp/new_file'`} />
      
      <Supersubheading text={`Copy File with Superuser Privileges`} />
      <Text text={`To copy a file using root privileges on all nodes, use the \`-u\` option followed by the root user:`} />
      <TerminalOutput content={`ansible all -m copy -a 'src=./file dest=/opt' -u root -k`} />
      <Text text={`This will prompt you for the root password. Alternatively, if the user has sudo privileges with 'NOPASSWD' option, you can use \`-b\` for privilege escalation without a password prompt:`} />
      <TerminalOutput content={`ansible all -m copy -a 'src=./file dest=/opt' -b`} />
      
      <Line />

      <Subheading text={`2. Command Module`} />
      <Text text={`The \`command\` module is used to run simple commands on the managed nodes. Unlike other modules, it does not use the shell, so it doesn't support features like pipes or redirects.`} />
      
      <Supersubheading text={`Execute a Command on Managed Node`} />
      <Text text={`To check the uptime of a managed node:`} />
      <TerminalOutput content={`ansible web -m command -a 'uptime'`} />
      
      <Supersubheading text={`List Block Devices`} />
      <Text text={`To display the block devices on a managed node, you can use the \`lsblk\` command:`} />
      <TerminalOutput content={`ansible web -m command -a 'lsblk'`} />
      
      <Line />

      <Subheading text={`3. Raw Module`} />
      <Text text={`The \`raw\` module allows you to send raw commands to managed nodes. This is useful when the nodes do not have Python installed, as it bypasses the need for Python to execute the command.`} />
      
      <Supersubheading text={`Run Multiple Commands`} />
      <Text text={`To run multiple commands on a managed node using the \`raw\` module, use the following command:`} />
      <TerminalOutput content={`ansible web -m raw -a 'uptime; who -r'`} />
      
      <Line />

      <Subheading text={`4. Shell Module`} />
      <Text text={`The \`shell\` module runs shell commands, so it supports more complex commands such as pipes and redirects.`} />
      
      <Supersubheading text={`Run Shell Script on Managed Node`} />
      <Text text={`To run a shell script located on a managed node, use the following command:`} />
      <TerminalOutput content={`ansible web -m shell -a '/home/ok/script.sh'`} />
      
      <Line />

      <Subheading text={`5. File Module`} />
      <Text text={`The \`file\` module is used for managing files and directories on managed nodes. You can create, remove, or manipulate file permissions, ownership, and links.`} />
      
      <Supersubheading text={`Create a Directory`} />
      <Text text={`To create a directory on a managed node:`} />
      <TerminalOutput content={`ansible web -m file -a 'path=/tmp/new_dir state=directory'`} />
      
      <Supersubheading text={`Change Permissions of a Directory`} />
      <Text text={`To create a directory with specific permissions and ownership:`} />
      <TerminalOutput content={`ansible web -m file -a 'path=/tmp/dir-2 state=directory mode=0777 owner=john group=john' -b`} />
      
      <Line />

      <Subheading text={`6. Fetch Module`} />
      <Text text={`The \`fetch\` module allows you to fetch files from managed nodes to the control node, which is the reverse of the \`copy\` module.`} />
      
      <Supersubheading text={`Fetch a File from Managed Node`} />
      <Text text={`To fetch a file from a managed node:`} />
      <TerminalOutput content={`ansible web -m fetch -a 'src=/etc/passwd dest=/tmp'`} />
      
      <Line />

      <Subheading text={`7. YUM Module`} />
      <Text text={`The \`yum\` module is used on Red Hat-based systems to manage packages. It can install, remove, or update packages.`} />
      
      <Supersubheading text={`Install a Package`} />
      <Text text={`To install a package like \`ftp\` on managed nodes:`} />
      <TerminalOutput content={`ansible web -m yum -a 'name=ftp state=installed' -b`} />
      
      <Line />

      <Subheading text={`8. APT Module`} />
      <Text text={`The \`apt\` module works similarly to the \`yum\` module but is used on Debian-based systems like Ubuntu.`} />
      
      <Line />

      <Subheading text={`9. Package Module`} />
      <Text text={`The \`package\` module is a general package management module that works with systems like RHEL, Ubuntu, and others, using different package managers (e.g., YUM, APT, DNF).`} />
      
      <Supersubheading text={`Install a Package Using DNF`} />
      <Text text={`To install a package with \`dnf\`, use:`} />
      <TerminalOutput content={`ansible web -m package -a 'name=ftp state=installed use=dnf' -b`} />
      
      <Line />

      <Subheading text={`10. Service Module`} />
      <Text text={`The \`service\` module is used to manage services on a Linux system. It allows you to start, stop, or restart services like \`httpd\` or \`nginx\` on the managed nodes.`} />
      
      <Supersubheading text={`Start a Service`} />
      <Text text={`To start the \`httpd\` service and ensure it is enabled at boot time:`} />
      <TerminalOutput content={`ansible web -m service -a 'name=httpd state=started enabled=true'`} />
      
      <Line />

      <Subheading text={`11. Lineinfile Module`} />
      <Text text={`The \`lineinfile\` module is used to insert, modify, or remove lines in a file. It is useful for configuration management tasks where you need to manage specific lines in a configuration file.`} />
      
      <Supersubheading text={`Insert a Line at the End of a File`} />
      <Text text={`To append a line at the end of a file:`} />
      <TerminalOutput content={`ansible web -m lineinfile -a 'line="hello ansible" dest=/tmp/file'`} />
      
      <Supersubheading text={`Remove a Line from a File`} />
      <Text text={`To remove a line that matches a specific pattern:`} />
      <TerminalOutput content={`ansible web -m lineinfile -a 'regexp=^ram dest=/etc/sudoers state=absent' -b`} />
      
      <Line />

      <Subheading text={`12. get_url Module`} />
      <Text text={`The \`get_url\` module is used to download files from a URL to a specific location on a managed node, similar to the \`wget\` command.`} />
      
      <Supersubheading text={`Download a File`} />
      <Text text={`To download a file from a URL:`} />
      <TerminalOutput content={`ansible web -m get_url -a 'url=https://www.google.com/ dest=/tmp'`} />
      
      <Line />

      <Subheading text={`13. User Module`} />
      <Text text={`The \`user\` module is used to manage user accounts on managed nodes. You can create, modify, or delete users.`} />
      
      <Supersubheading text={`Create a User`} />
      <Text text={`To create a new user:`} />
      <TerminalOutput content={`ansible web -m user -a 'name=tom state=present'`} />
      
      <Supersubheading text={`Delete a User`} />
      <Text text={`To remove a user:`} />
      <TerminalOutput content={`ansible web -m user -a 'name=tom state=absent'`} />
      
      <Line />
<p className='font-cambria'>

      Now that you know how to use Ad-Hoc commands, it's time to explore how Ansible handles automation at scale using <span className='text-blue-400 hover:text-blue-700'>
                      <Link to='/course/ansible/playbook'>Ansible playbook</Link>
                    </span> . You'll learn how to write reusable and structured YAML configurations to manage your infrastructure like a pro. 🛠️
</p>
    </div>
  );
}
