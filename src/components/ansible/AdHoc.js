import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput } from '../utils/Comps';

export default function AdHocCommands() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ad-Hoc Commands in Ansible`} />

      <Subheading text={`What Are Ad-Hoc Commands?`} />
      <Text text={`Ad-hoc commands are simple one-liners used to perform quick tasks on remote machines without writing a full playbook.`} />
      <Text text={`They’re useful for real-time operations like restarting services, copying files, creating users, or gathering system information across multiple hosts.`} />

      <Line />

      <Subheading text={`Why Use Ad-Hoc Commands?`} />
      <Text text={`Ad-hoc commands are perfect when you need to:`} />
      <Text text={`⚡ Perform quick, one-time automation`}/>
      <Text text={`🛠️ Troubleshoot or validate configurations`} />
      <Text text={`📊 Gather system facts across multiple machines`} />
      <Text text={`📦 Run lightweight tasks without creating a YAML playbook`} />

      <Line />

      <Subheading text={`Ad-Hoc Command Syntax`} />
      <TerminalOutput content={`ansible <host-pattern> -m <module> [-a <arguments>] [-i inventory] [-b]`} />
      <Text text={`- \`<host-pattern>\`: Group or host from your inventory file`} />
      <Text text={`- \`-m <module>\`: The module to run (e.g., ping, command)`} />
      <Text text={`- \`-a <arguments>\`: Optional arguments passed to the module`} />
      <Text text={`- \`-i <inventory>\`: The inventory file to use`} />
      <Text text={`- \`-b\`: Use privilege escalation (sudo)`} />

      <Line />

      <Subheading text={`Common Use Cases & Examples`} />

      <Supersubheading text={`1. Test Connectivity Across All Hosts`} />
      <Text text={`The \`ping\` module checks if hosts are reachable and Ansible is properly configured:`} />
      <TerminalOutput content={`ansible all -m ping -i hosts`} />
      <Text text={`✅ Useful after initial setup or inventory changes.`} />

      <Supersubheading text={`2. Check Disk Usage on Webservers`} />
      <Text text={`Use the \`shell\` or \`command\` module to run OS-level commands:`} />
      <TerminalOutput content={`ansible webservers -m shell -a "df -h" -i hosts`} />
      <Text text={`🔍 Good for auditing storage across your fleet.`} />

      <Supersubheading text={`3. Install a Package on Multiple Servers`} />
      <TerminalOutput content={`ansible dbservers -m apt -a "name=postgresql state=present update_cache=yes" -b -i hosts`} />
      <Text text={`📦 Ensures PostgreSQL is installed everywhere it's needed.`} />

      <Supersubheading text={`4. Start or Restart a Service`} />
      <TerminalOutput content={`ansible all -m service -a "name=nginx state=restarted" -b -i hosts`} />
      <Text text={`🔄 Restart services after config changes or deployments.`} />

      <Supersubheading text={`5. Create a User Across Hosts`} />
      <TerminalOutput content={`ansible all -m user -a "name=deploy shell=/bin/bash state=present" -b -i hosts`} />
      <Text text={`👤 Easily ensure system users exist everywhere.`} />

      <Supersubheading text={`6. Gather System Facts`} />
      <TerminalOutput content={`ansible all -m setup -i hosts`} />
      <Text text={`📊 Collects detailed information about remote systems (e.g., OS, IP, CPU).`}/>

      <Line />

      <Subheading text={`Best Practices for Ad-Hoc Commands`} />
      <Text text={`✅ Use them for one-off tasks or quick fixes—not for long-term configuration management.`} />
      <Text text={`✅ Use inventory groups to target specific machines.`} />
      <Text text={`✅ Combine with \`--limit\` or \`--check\` flags for safety and control.`} />
      <Text text={`✅ Always double-check arguments before running with \`-b\` (become/sudo).`} />

      <Line />

      <Subheading text={`Quick Tips`} />
      <Text text={`💡 Use \`-v\` or \`-vvv\` for verbose output during debugging.`} />
      <Text text={`💡 Use \`--diff\` with modules like \`copy\`, \`template\`, and \`lineinfile\` to see what would change.`} />
      <Text text={`💡 Use tags or dynamic inventory to make targeting easier.`} />

      <Line />

      <Subheading text={`Coming Up Next`} />
      <Text text={`Now that you know how to use Ad-Hoc commands, it's time to explore how Ansible handles automation at scale using **Playbooks**. You'll learn how to write reusable and structured YAML configurations to manage your infrastructure like a pro. 🛠️📘`} />
    </div>
  );
}
