import { Heading, Subheading, Supersubheading, Text, Line, Video, TerminalOutput } from '../utils/Comps';

export default function IntroToAnsible() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Introduction to Ansible`} />

      <Subheading text={`What is Ansible?`} />
      <Text text={`Ansible is an open-source automation tool used for IT tasks such as configuration management, application deployment, orchestration, and task automation. It allows you to manage infrastructure as code in a simple, agentless way.`} />
      <Text text={`It relies on SSH (or WinRM for Windows) to connect to remote machines and execute commands. Playbooks written in YAML define the desired system state, making Ansible extremely readable and intuitive.`} />

      <Line />

      <Subheading text={`Why Use Ansible?`} />

      <Supersubheading text={`Agentless`} />
      <Text text={`🔹 Ansible does not require any software (agents) to be installed on the systems it manages. It uses existing protocols like SSH, making it lightweight and secure.`} />
      <Text text={`🔹 This reduces overhead and simplifies management.`} />

      <Supersubheading text={`Simple Language`} />
      <Text text={`🔹 Playbooks are written in YAML, which is easy to read and write even for beginners.`} />
      <Text text={`🔹 Example:`} />
      <TerminalOutput content={`- name: Install Nginx\n  apt:\n    name: nginx\n    state: present`} />

      <Supersubheading text={`Idempotent`} />
      <Text text={`🔹 Ansible ensures that executing the same playbook multiple times will not change the system if it's already in the desired state.`} />
      <Text text={`🔹 This means safer automation with predictable outcomes.`} />

      <Supersubheading text={`Scalable`} />
      <Text text={`🔹 Whether you're managing 1 server or 10,000, Ansible scales seamlessly from small environments to enterprise-level infrastructure.`} />

      <Line />

      <Subheading text={`How Ansible Works`} />
      <Text text={`Ansible uses a push-based model. It connects to your target systems (managed nodes) from a central machine (control node) using SSH. It then executes modules, collects results, and exits.`} />
      <Text text={`Tasks are organized into playbooks that define how a system should look and behave. These playbooks are executed in a sequence to automate processes.`} />

      <Video videoSrc={`Uo2ZoC5u5gk`} /> {/* Replace this with your actual intro video ID */}

      <Line />

      <Subheading text={`Core Concepts`} />

      <Supersubheading text={`Control Node`} />
      <Text text={`✅ This is the system where Ansible is installed and from where you run commands and playbooks.`} />
      <Text text={`✅ It is responsible for managing the configuration and automation process.`} />
      <Text text={`✅ Example: Your local machine or a dedicated automation server (e.g., CI/CD runner).`} />
      <TerminalOutput content={`# Your local Ubuntu machine\nsudo apt install ansible`} />

      <Supersubheading text={`Managed Nodes`} />
      <Text text={`✅ These are the servers or devices that Ansible connects to and manages using SSH.`} />
      <Text text={`✅ Ansible does **not** require any software to be installed on these nodes.`} />
      <Text text={`✅ Example: Web servers, database servers, or cloud VMs.`} />
      <TerminalOutput content={`# Connect from Control Node via SSH\nssh user@192.168.1.10`} />

      <Supersubheading text={`Inventory`} />
      <Text text={`✅ A simple file (usually INI or YAML) that lists all managed nodes and groups them logically.`} />
      <Text text={`✅ Can be static or dynamically generated (e.g., from AWS or GCP).`} />
      <Text text={`✅ Example:`} />
      <TerminalOutput content={`[webservers]\n192.168.1.10\n192.168.1.11\n\ndbservers\n192.168.1.20`} />

      <Supersubheading text={`Modules`} />
      <Text text={`✅ These are discrete units of code Ansible uses to perform tasks such as installing packages, creating users, copying files, etc.`} />
      <Text text={`✅ Example:`} />
      <TerminalOutput content={`ansible all -m ping`} />
      <Text text={`This pings all nodes using Ansible's ping module to verify connectivity.`} />

      <Supersubheading text={`Playbooks`} />
      <Text text={`✅ YAML files that define tasks to execute on remote machines.`} />
      <Text text={`✅ Playbooks allow complex task automation in a structured format.`} />
      <Text text={`✅ Example:`} />
      <TerminalOutput content={`- name: Install Nginx on Ubuntu\n  hosts: webservers\n  become: yes\n  tasks:\n    - name: Ensure Nginx is installed\n      apt:\n        name: nginx\n        state: present`} />

      <Supersubheading text={`Roles`} />
      <Text text={`✅ Roles provide a reusable way to organize playbooks, variables, tasks, and templates.`} />
      <Text text={`✅ Great for modular automation across environments and teams.`} />
      <Text text={`✅ Example folder structure:`} />
      <TerminalOutput content={`roles/\n├── webserver/\n│   ├── tasks/\n│   ├── handlers/\n│   ├── templates/\n│   └── vars/`} />

      <Line />

      <Subheading text={`Installation & Setup`} />
      <Text text={`You can install Ansible on most systems quickly:`} />

      <Text text={`🖥️ On Ubuntu/Debian:`} />
      <TerminalOutput content={`sudo apt update\nsudo apt install ansible`} />

      <Text text={`🖥️ On Fedora/CentOS/RHEL:`} />
      <TerminalOutput content={`sudo dnf install ansible`} />

      <Text text={`🖥️ Using Python pip (cross-platform):`} />
      <TerminalOutput content={`pip3 install ansible`} />

      <Text text={`🖥️ On macOS with Homebrew:`} />
      <TerminalOutput content={`brew install ansible`} />

      <Text text={`✅ After installation, verify with:`} />
      <TerminalOutput content={`ansible --version`} />

      <Line />

      <Subheading text={`Coming Up Next`} />
      <Text text={`In the next lesson, you'll set up your first Ansible project, configure an inventory file, and write your first playbook to install and start Nginx on a remote server! 🔧🚀`} />
    </div>
  );
}
