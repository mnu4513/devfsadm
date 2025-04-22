import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput } from '../utils/Comps';

export default function StaticInventory() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ansible Static Inventory`} />

      <Subheading text={`What is an Inventory in Ansible?`} />
      <Text text={`Ansible uses an inventory to determine which systems it should manage. This file contains a list of managed nodes, either by IP address or hostname, and organizes them into logical groups.`} />
      <Text text={`There are two types of inventories: Static and Dynamic. In this lesson, we focus on static inventory files.`} />

      <Line />

      <Subheading text={`Static Inventory`} />
      <Text text={`A static inventory is a simple text file (usually in INI or YAML format) that explicitly lists all the hosts and groups Ansible should manage. This is the most common starting point for Ansible beginners and small projects.`} />

      <Supersubheading text={`Default Location`} />
      <Text text={`By default, Ansible looks for its inventory file at:`} />
      <TerminalOutput content={`/etc/ansible/hosts`} />

      <Text text={`However, you can also create your own file and specify it manually using the -i flag.`} />
      <TerminalOutput content={`ansible all -m ping -i inventory`} />

      <Line />

      <Subheading text={`INI Format Example`} />
      <Text text={`This is the most common format used in static inventories:`} />
      <TerminalOutput content={`[webservers]\n192.168.1.10\n192.168.1.11\n\n[dbservers]\n192.168.1.20`} />

      <Text text={`You can now target specific groups using commands like:`} />
      <TerminalOutput content={`ansible webservers -m ping -i inventory`} />

      <Line />

      <Subheading text={`Static Inventory with Host Variables`} />
      <Text text={`You can define variables per host as well:`} />
      <TerminalOutput content={`[webservers]\nweb1 ansible_host=192.168.1.10 ansible_user=ubuntu\nweb2 ansible_host=192.168.1.11 ansible_user=ec2-user`} />

      <Text text={`In this example, Ansible connects to web1 using user \`ubuntu\` and web2 using \`ec2-user\`.`} />

      <Line />

      <Subheading text={`Grouping Groups (Group of Groups)`} />
      <Text text={`Ansible allows you to create a group that contains other groups using the \`:children\` suffix. This is useful when you want to run tasks across multiple logical groups in a single go.`} />

      <TerminalOutput content={`[webservers]\n192.168.1.10\n192.168.1.11\n\n[dbservers]\n192.168.1.20\n\n[production:children]\nwebservers\ndbservers`} />

      <Text text={`Now you can run a command against both \`webservers\` and \`dbservers\` using the parent group:`} />
      <TerminalOutput content={`ansible production -m ping -i inventory`} />

      <Line />

      <Subheading text={`YAML Format Inventory (Advanced)`} />
      <Text text={`Ansible also supports YAML format inventories (requires enabling via plugins or using Ansible Collections). Here's how it looks:`} />
      <TerminalOutput content={`all:\n  children:\n    webservers:\n      hosts:\n        web1:\n          ansible_host: 192.168.1.10\n          ansible_user: ubuntu\n        web2:\n          ansible_host: 192.168.1.11\n          ansible_user: ubuntu\n    dbservers:\n      hosts:\n        db1:\n          ansible_host: 192.168.1.20\n          ansible_user: postgres\n    production:\n      children:\n        webservers:\n        dbservers:`} />

      <Line />

      <Subheading text={`Testing the Inventory`} />
      <Text text={`To test connectivity to your nodes using the inventory:`} />
      <TerminalOutput content={`ansible all -m ping -i inventory`} />

      <Text text={`This command uses the ping module to check if Ansible can connect and authenticate with the nodes.`} />

      <Line />

      <Subheading text={`Coming Up Next 🚀`} />
      <Text text={`In the next lesson, we'll use this static inventory to run ad-hoc commands and explore Ansible modules in real-time.`} />
    </div>
  );
}
