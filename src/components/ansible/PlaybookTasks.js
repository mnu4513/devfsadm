import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput } from '../utils/Comps';

export default function AnsibleTasks() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ansible Playbook Tasks`} />
      
      <Subheading text={`Task Overview`} />
      <Text text={`In this section, we will explore several tasks that can be automated using Ansible playbooks. The tasks include creating directories, copying files, installing packages, and managing services on remote nodes.`} />
      <Line/>
      <Subheading text={`Task List`} />
      <Text text={`Here are the tasks that we will automate in our playbook:`} />
      <ul className='font-cambria'>
        <li>✅ Create a directory on each managed node named `/tmp/test`</li>
        <li>✅ Copy the `/etc/fstab` file to all managed nodes</li>
        <li>✅ Install the `httpd` package on all managed nodes</li>
        <li>✅ Start and enable the `httpd` service on all managed nodes</li>
      </ul>
      <br/>
      <Text text={`Here’s a sample Ansible playbook that performs all the above tasks:`} />
      
      <TerminalOutput content={`---
- name: This is description about the project and it is optional
  hosts: web

  tasks:
    - file:
        path: /tmp/test
        state: directory
    - copy:
        src: /etc/fstab
        dest: /tmp/test
    - yum:
        name:
          - httpd
          - vsftpd
        state: installed
    - service:
        name: httpd
        state: started
        enabled: true`} />
      
      <Subheading text={`Running and Checking the Playbook`} />
      <Text text={`To ensure the playbook is correct, we can use various commands to check its syntax, dry run it, or push the tasks to the managed nodes. Here's how you can do that:`} />
      
      <Text text={`To check the syntax of the playbook:`} />
      <TerminalOutput content={`[john@localhost playbooks]$ ansible-playbook --syntax-check first.yml`} />
      
      <Text text={`To perform a dry run (checking the playbook without making changes):`} />
      <TerminalOutput content={`[john@localhost playbooks]$ ansible-playbook first.yml -b --check`} />
      
      <Text text={`To perform the tasks and apply changes to the nodes:`} />
      <TerminalOutput content={`[john@localhost playbooks]$ ansible-playbook first.yml -b`} />
      
      <Text text={`Ansible also includes a "gathering facts" task by default, which collects system information. If you want to skip this task, you can disable it by setting \`gather_facts: false\` in your playbook:`} />
      <TerminalOutput content={`gather_facts: false`} />
      
      <Text text={`To run specific tasks interactively, you can use the following command:`} />
      <TerminalOutput content={`[john@localhost playbooks]$ ansible-playbook first.yml -b --step`} />
      
      <Subheading text={`Playbook Output`} />
      <Text text={`When running a playbook, you will see detailed output for each task. Here's an example of the output after running the playbook:`} />
      
      <TerminalOutput content={`[john@localhost playbooks]$ ansible-playbook first.yml -b

PLAY [This is description about the project and it is optional] ***********************************

TASK [Gathering Facts] ****************************************************************************
ok: [localhost]

TASK [file] ***************************************************************************************
changed: [localhost]

TASK [copy] ***************************************************************************************
changed: [localhost]

TASK [yum] ****************************************************************************************
changed: [localhost]

TASK [service] ************************************************************************************
changed: [localhost]

PLAY RECAP ****************************************************************************************
localhost                  : ok=5    changed=4    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0`} />
      
      <Text text={`The output shows the status of each task (e.g., "changed" or "ok"), and at the end, it provides a summary of the playbook execution.`} />
      
      <Subheading text={`Adding Descriptions to Tasks`} />
      <Text text={`You can add descriptions to your tasks using the \`name\` keyword. This makes the output more readable and helps the user understand the purpose of each task. Here's an example of adding descriptions:`} />
      
      <TerminalOutput content={`---
- name: This is description about the project and it is optional
  hosts:
    - web
    - dev

  tasks:
    - name: "This is task description, here we are using file module to create a directory"
      file:
        path: /tmp/test
        state: directory
    - name: "This is task description, here we are using copy module to copy this file and changing the permission of copied file on destination"
      copy:
        src: /etc/fstab
        dest: /tmp/test
        mode: 0777
    - name: "This is task description, here we are using yum module to install the packages"
      yum:
        name:
          - httpd
          - vsftpd
        state: installed
    - name: "This is task description, here we are using service module to start and enable the services"
      service:
        name: httpd
        state: started
        enabled: true`} />
      
      <Text text={`The output will now include these descriptions, making it easier to understand what each task is doing during execution.`} />
      
      <Subheading text={`Multiple Plays in a Single Playbook`} />
      <Text text={`Ansible allows you to define multiple plays within a single playbook. Each play can target a different group of hosts and perform different tasks. Here's an example:`} />
      
      <TerminalOutput content={`---
- name: This operation is only for web group's servers
  hosts: web
  tasks:
    - name: "Create directory on web servers"
      file:
        path: /tmp/test
        state: directory
    - name: "Copy fstab file to web servers"
      copy:
        src: /etc/fstab
        dest: /tmp/test
        mode: 0777

- name: This play is for the dev group's servers
  hosts: dev
  tasks:
    - name: "Install packages on dev servers"
      yum:
        name:
          - httpd
          - vsftpd
        state: installed
    - name: "Start and enable httpd service on dev servers"
      service:
        name: httpd
        state: started
        enabled: true`} />
      
      <Text text={`This allows you to perform different tasks on different groups of hosts within the same playbook.`} />
      
      <Subheading text={`Running Tasks with Specific Users`} />
      <Text text={`You can specify the user under which the tasks should run using the \`user\` keyword. Additionally, if the tasks require elevated privileges, you can use \`become: true\` to run the tasks as a superuser.`} />
      
      <TerminalOutput content={`---
- name: This operation is only for web group's servers
  hosts: web
  user: john
  become: true

  tasks:
    - name: "Create directory on web servers"
      file:
        path: /tmp/test
        state: directory
    - name: "Copy fstab file to web servers"
      copy:
        src: /etc/fstab
        dest: /tmp/test
        mode: 0777

- name: This play is for the dev group's servers
  hosts: dev
  user: ok
  become: true

  tasks:
    - name: "Install packages on dev servers"
      yum:
        name:
          - httpd
          - vsftpd
        state: installed
    - name: "Start and enable httpd service on dev servers"
      service:
        name: httpd
        state: started
        enabled: true`} />
      
      <Text text={`This ensures that tasks are run with the appropriate user privileges on the managed nodes.`} />
      
      <Subheading text={`Including Secondary Playbooks`} />
      <Text text={`You can include or import another playbook within a playbook using the \`import_tasks\` or \`include_tasks\` keywords. The key difference is that \`import_tasks\` will stop the execution of the parent playbook if there is an error, while \`include_tasks\` allows the parent playbook to continue running even if the secondary playbook encounters an error.`} />
      
      <TerminalOutput content={`- name: Include secondary playbook
  import_tasks: /path/to/secondary_playbook.yml`} />
      
      <Text text={`Use \`include_tasks\` if you want to ensure the primary playbook continues even when the secondary playbook fails.`} />
      
      <Subheading text={`Single-line vs Multi-line Format`} />
      <Text text={`There are different formats for writing tasks in a playbook. The single-line format is concise, while the multi-line and mapping (dictionary) formats provide better readability. The dictionary format is the most commonly used and recommended.`} />
      
      <Supersubheading text={`Single Line Format`} />
      <TerminalOutput content={`- name: <description>
    file: path=/tmp/test state=directory mode=0777 owner=root group=root`} />
      
      <Supersubheading text={`Multi-line Format`} />
      <TerminalOutput content={`- name: <description>
    file: path=/tmp/test
      state=directory
      mode=0777
      owner=root
      group=root`} />
      
      <Supersubheading text={`Mapping (Dictionary) Format`} />
      <TerminalOutput content={`- name: <description>
    file:
      path: /tmp/test
      state: directory
      mode: 0777
      owner: root
      group: root`} />
      
      <Text text={`The dictionary format is the most readable and widely used in modern Ansible playbooks.`} />
    </div>
  );
}
