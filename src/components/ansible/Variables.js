import {
    Heading,
    Subheading,
    Supersubheading,
    Text,
    Line,
    TerminalOutput,
  } from '../utils/Comps';
  
  export default function AnsibleVariables() {
    return (
      <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
        <Heading text={`Variables in Ansible`} />
        <Text text={`Variables in Ansible are used to manage dynamic values within playbooks, inventory files, and roles. They help make automation more flexible, reusable, and efficient by avoiding hardcoded values.`} />
  
        <Line />
  
        <Subheading text={`Naming Convention of Variables`} />
        <Text text={`🔹 Variable names must start with a letter and can contain letters, numbers, and underscores.`} />
        <Text text={`🔹 Avoid using special characters like dashes (-), periods (.), or spaces.`} />
        <Text text={`🔹 Use snake_case for clarity (e.g., web_pkg, user_name).`} />
  
        <Line />
  
        <Subheading text={`Where Can You Declare Variables?`} />
        <Text text={`✅ Variables in Ansible can be defined in several places, each with different precedence levels:`} />
  
        <Supersubheading text={`1. Playbook Level Variables`} />
        <Text text={`Defined under \`vars:\` in the playbook.`} />
  
        <Supersubheading text={`2. Command Line Variables`} />
        <Text text={`Passed at runtime using the \`-e\` flag (extra-vars).`} />
        <TerminalOutput content={`ansible-playbook site.yml -e "web_pkg=httpd"`} />
  
        <Supersubheading text={`3. Inventory File Variables`} />
        <Text text={`Can be defined in the inventory file under host/group variables.`} />
        <TerminalOutput content={`[webservers]\n192.168.1.10 web_pkg=httpd`} />
  
        <Line />
  
        <Subheading text={`Data Types of Variables`} />
        <Text text={`Ansible supports several variable types:`} />
  
        <Supersubheading text={`🔸 String`}/>
        <TerminalOutput content={`web_pkg: nginx`} />
  
        <Supersubheading text={`🔸 List (Array)`}/>
        <TerminalOutput content={`packages:\n  - httpd\n  - ftp`} />
  
        <Supersubheading text={`🔸 Dictionary (Mapping)`}/>
        <TerminalOutput content={`users:\n  - name: shyam\n    pw: redhat\n    uid: 123\n  - name: ram\n    pw: redhat\n    uid: 124`} />
  
        <Line />
  
        <Subheading text={`Syntax of Using Variables`} />
        <Text text={`Variables are used inside double curly braces: \`{{ variable_name }}\``} />
        <TerminalOutput content={`name: "{{ web_pkg }}"`} />
  
        <Line />
  
        <Subheading text={`Playbook Level Variable Examples`} />
  
        <Supersubheading text={`1. String Type Variable`} />
        <TerminalOutput content={`- name: String variable example\n  hosts: web\n  become: true\n  vars:\n    web_pkg: httpd\n    web_page: /var/www/html\n  tasks:\n    - name: Install the package\n      dnf:\n        name: "{{ web_pkg }}"\n        state: installed\n\n    - name: Start the service\n      service:\n        name: "{{ web_pkg }}"\n        state: started\n        enabled: true\n\n    - name: Create directory\n      file:\n        path: "{{ web_page }}"\n        state: directory\n\n    - name: Create index.html\n      copy:\n        content: "Hello Ansible"\n        dest: "{{ web_page }}/index.html"`} />
  
        <Supersubheading text={`2. List (Array) Type Variable`} />
        <Text text={`Use a loop to install multiple packages:`} />
        <TerminalOutput content={`- name: List variable example\n  hosts: web\n  become: true\n  vars:\n    packages:\n      - httpd\n      - ftp\n  tasks:\n    - name: Install packages\n      dnf:\n        name: "{{ item }}"\n        state: present\n      loop: "{{ packages }}"`} />
  
        <Supersubheading text={`3. Mapping (Dictionary) Type Variable`} />
        <Text text={`Use mappings to create users with specific attributes:`} />
        <TerminalOutput content={`- name: Dictionary variable example\n  hosts: web\n  become: true\n  vars:\n    users:\n      - name: shyam\n        pw: redhat\n        uid: 123\n      - name: ram\n        pw: redhat\n        uid: 124\n  tasks:\n    - name: Create users\n      user:\n        name: "{{ item.name }}"\n        password: "{{ item.pw | password_hash('sha512') }}"\n        uid: "{{ item.uid }}"\n      loop: "{{ users }}"`} />
  
        <Line />
  
        <Subheading text={`Storing Variables in External Files`} />
        <Text text={`Instead of repeating variables in multiple playbooks, store them in separate YAML files and include them when needed.`} />
        
        <Supersubheading text={`Example: vars/web_vars.yml`} />
        <TerminalOutput content={`web_pkg: nginx\nweb_port: 80`} />
  
        <Supersubheading text={`How to include:`} />
        <TerminalOutput content={`- name: Include external variables\n  hosts: web\n  vars_files:\n    - vars/web_vars.yml\n  tasks:\n    - name: Install package\n      dnf:\n        name: "{{ web_pkg }}"\n        state: installed`} />
  
        <Line />
  
        <Subheading text={`Summary`} />
        <Text text={`✅ Variables help make playbooks dynamic and reusable.`} />
        <Text text={`✅ You can use strings, lists, and dictionaries depending on your need.`} />
        <Text text={`✅ Declare them in playbooks, inventories, or external files for better organization.`} />
  
      </div>
    );
  }
  