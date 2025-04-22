import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function AnsibleModules() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Understanding Ansible Modules`} />

      <Subheading text={`What Are Modules in Ansible?`} />
      <Text text={`Modules are the core building blocks of Ansible. Every task you run—whether it's using an ad-hoc command or a playbook—uses one or more modules behind the scenes.`} />
      <Text text={`Modules are small programs Ansible pushes out to remote machines to perform actions like installing software, copying files, creating users, starting services, etc.`} />

      <Line />

      <Subheading text={`How Are Modules Used?`} />
      <Text text={`Modules can be used in two ways:`} />
      <Text text={`1️⃣ **Ad-Hoc Commands** – Quick one-liners to run a module without writing a playbook.`} />
      <Text text={`2️⃣ **Playbooks** – Reusable, declarative YAML files that organize module-based tasks.`} />

      <Line />

      <Subheading text={`Types of Modules`} />
      <Text text={`Ansible comes with hundreds of modules. Here are some popular categories:`} />

      <Supersubheading text={`Package Management`} />
      <Text text={`📦 Install, remove, or update packages.`} />
      <TerminalOutput content={`apt, yum, dnf, pip, npm`} />

      <Supersubheading text={`Service Management`} />
      <Text text={`🧩 Start, stop, restart, or enable services.`} />
      <TerminalOutput content={`service, systemd`} />

      <Supersubheading text={`User & Group Management`} />
      <Text text={`👤 Create or delete users, manage groups and passwords.`} />
      <TerminalOutput content={`user, group`} />

      <Supersubheading text={`File & Directory Management`} />
      <Text text={`📁 Create, copy, move, or delete files and directories.`} />
      <TerminalOutput content={`file, copy, template, unarchive`} />

      <Supersubheading text={`Command Execution`} />
      <Text text={`💻 Run raw shell or command-line tasks.`} />
      <TerminalOutput content={`command, shell, raw`} />

      <Supersubheading text={`Networking & System Info`} />
      <Text text={`🌐 Gather facts, configure networks, or retrieve system information.`} />
      <TerminalOutput content={`setup, get_url, uri, ping`} />

      <Line />

      <Subheading text={`Example: Using Modules with Ad-Hoc Commands`} />

      <Supersubheading text={`1. Ping All Hosts`} />
      <Text text={`Use the built-in \`ping\` module to test connectivity:`} />
      <TerminalOutput content={`ansible all -m ping -i hosts`} />

      <Supersubheading text={`2. Install a Package (e.g., Nginx)`} />
      <Text text={`Use the \`apt\` module on Ubuntu systems:`} />
      <TerminalOutput content={`ansible webservers -m apt -a "name=nginx state=present" -b -i hosts`} />

      <Supersubheading text={`3. Start a Service`} />
      <TerminalOutput content={`ansible webservers -m service -a "name=nginx state=started enabled=yes" -b -i hosts`} />

      <Supersubheading text={`4. Create a User`} />
      <TerminalOutput content={`ansible all -m user -a "name=deploy shell=/bin/bash state=present" -b -i hosts`} />

      <Line />

      <Subheading text={`Best Practices`} />
      <Text text={`✅ Always test your modules using ad-hoc commands before using them in playbooks.`} />
      <Text text={`✅ Use the \`--check\` flag to preview changes.`} />
      <Text text={`✅ Explore modules at:`} />
      <a href="https://docs.ansible.com/ansible/latest/collections/index_module.html" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline hover:text-blue-800 font-cambria'>
        Ansible Module Index
      </a>

      <Line />

      <Subheading text={`Coming Up Next`} />
     
      <p className='font-cambria'>
      Now that you understand modules, in the <span className='text-blue-400 hover:text-blue-700'>
                            <Link to='/course/ansible/ad-hoc'>next lesson</Link>
                          </span> (Ad-hoc Command), you'll learn how to use them in **ad-hoc commands** for quick one-time automation. Let’s get our hands dirty! 💻⚡
                        </p>
    </div>
  );
}
