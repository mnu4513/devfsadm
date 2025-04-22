import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput,  } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function AnsibleLabSetup() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ansible Lab Setup with VMware`} />

      <Text text={`An Ansible lab gives you a safe, isolated environment to practice writing and executing playbooks without affecting production systems. In this lab, we'll set up one control node and two managed nodes using VMware Workstation or VMware Player.`} />

      <Line />

      <Subheading text={`Requirements`} />
      <Text text={`Before we begin, make sure you have:`} />
      <Text text={`✅ A system with at least 8 GB RAM and 50+ GB free disk space.`} />
      <Text text={`✅ VMware Workstation or VMware Player (free for personal use).`} />
      <Text text={`✅ Ubuntu Server ISO (we’ll use Ubuntu 22.04 for this guide).`} />
      <Text text={`✅ Ansible installed on the control node (we’ll do this during setup).`} />

      <Line />

      <Subheading text={`Step 1: Download Ubuntu Server ISO`} />
      <Text text={`Download Ubuntu Server 22.04 from the official website:`} />
      <a href="https://ubuntu.com/download/server" className="text-blue-500 hover:underline font-cambria hover:text-blue-800" target="_blank" rel="noopener noreferrer">
        https://ubuntu.com/download/server
      </a>

      <Line />

      <Subheading text={`Step 2: Create Virtual Machines`} />
      <Text text={`We'll create 3 VMs:`} />
      <Text text={`- 1 Control Node (Ansible will run here)`} />
      <Text text={`- 2 Managed Nodes (Remote hosts managed by Ansible)`} />

      <Supersubheading text={`VM Settings (for each)`} />
      <Text text={`💾 RAM: 2 GB`}/>
      <Text text={`💽 Disk: 20 GB (Dynamic/Thin provisioning)`}/>
      <Text text={`🖥️ CPU: 1 core`}/>
      <Text text={`📶 Network: NAT (shared with host)`}/>
      <Text text={`🧱 OS: Ubuntu Server 22.04`}/>

      <Supersubheading text={`Suggested Hostnames:`}/>
      <Text text={`- ansible-control`}/>
      <Text text={`- node1`}/>
      <Text text={`- node2`}/>

      <Line />

      <Subheading text={`Step 3: Install Ubuntu on Each VM`} />
      <Text text={`Use the downloaded ISO to install Ubuntu Server on each VM. During installation:`} />
      <Text text={`✅ Set a static IP or note down DHCP-assigned IPs (we’ll need them).`} />
      <Text text={`✅ Create a user (e.g.,  + "ansible" + ) with sudo privileges.`} />
      <Text text={`✅ Enable OpenSSH server if prompted (or install it manually after install).`} />

      <Line />

      <Subheading text={`Step 4: Set Up Hostnames & IPs`} />
      <Text text={`Edit the hostname for each server:`} />
      <TerminalOutput content={`sudo hostnamectl set-hostname ansible-control`} />
      <Text text={`Do the same for node1 and node2. Then add all IPs to the hosts file on the control node:`} />
      <TerminalOutput content={`sudo nano /etc/hosts`} />
      <TerminalOutput content={`192.168.1.10 ansible-control\n192.168.1.11 node1\n192.168.1.12 node2`} />

      <Line />

      <Subheading text={`Step 5: Install Ansible on Control Node`} />
      <Text text={`SSH into your control node or open its terminal:`} />
      <TerminalOutput content={`sudo apt update\nsudo apt install ansible -y`} />
      <TerminalOutput content={`ansible --version`} />

      <Line />

      <Subheading text={`Step 6: Configure SSH Access to Managed Nodes`} />
      <Text text={`From the control node, generate an SSH key:`} />
      <TerminalOutput content={`ssh-keygen`} />
      <Text text={`Then copy it to both managed nodes:`} />
      <TerminalOutput content={`ssh-copy-id ansible@node1\nssh-copy-id ansible@node2`} />
      <Text text={`Test connection:`} />
      <TerminalOutput content={`ssh node1\nssh node2`} />

      <Line />

      <Subheading text={`Step 7: Create Ansible Inventory File`} />
      <Text text={`Create a file named  + "hosts" +  in "/etc/ansible/" or in your own project folder:`} />
      <TerminalOutput content={`[webservers]\nnode1\nnode2`} />
      <Text text={`Now test it:`} />
      <TerminalOutput content={`ansible all -i hosts -m ping`} />

      <Line />

      <Subheading text={`Step 8: Snapshot Your VMs (Optional)`} />
      <Text text={`💡 It's a good idea to create a snapshot of each VM now. That way, if anything breaks, you can revert to a clean state.`} />

      <Line />

      <Subheading text={`Lab Diagram`} />
      <Text text={`Here's how your setup looks:`} />
      <Text text={`\n[Ansible Control Node]\n    |\n  SSH over NAT\n   /   \\\n[node1] [node2]\n`} />

      <Line />

      <Subheading text={`🎉 You're Ready!`} />

      <p className='font-cambria'>
      You now have a fully functional Ansible lab environment using VMware! In the  <span className='text-blue-400 hover:text-blue-700'>
                      <Link to='/course/ansible/modules'>next lesson</Link>
                    </span> (Ansible Modules), we'll see about the Ansible modules in depth. 🔧🚀
                  </p>
    </div>
  );
}
