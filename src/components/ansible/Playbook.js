import { Heading, Subheading, Supersubheading, Text, Line, TerminalOutput } from '../utils/Comps';

export default function AnsiblePlaybook() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ansible Playbook Format (YAML)`} />
      
      <Subheading text={`What is an Ansible Playbook?`} />
      <Text text={`An Ansible playbook is a file that contains the tasks and operations to be executed on the managed nodes. It allows you to automate tasks like system configuration, application deployment, and orchestrating multiple systems.`} />
      
      <Subheading text={`File Extension and Location`} />
      <Text text={`There is no predefined path for the Ansible playbook file. The location of the playbook depends on the user's permissions to create files. By convention, the file extension of an Ansible playbook is either \`.yml\` or \`.yaml\`.`} />
      
      <Subheading text={`Why YAML?`} />
      <Text text={`Ansible playbooks are written in YAML (YAML Ain't Markup Language), which is a human-readable data serialization format. YAML is commonly used in configuration files and data exchange due to its simplicity and readability. It is similar to JSON or XML but more concise and easy to understand.`} />
      
      <Text text={`YAML is not a programming language but a data format used to write configuration files. It is based on indentation to represent data structures like arrays and dictionaries.`} />

      <Line />

      <Subheading text={`Basic YAML Structure`} />
      <Text text={`YAML uses key-value pairs to represent data. Here’s an example of a simple YAML configuration:`} />
      <TerminalOutput content={`key: value`} />
      
      <Text text={`In YAML, key-value pairs are separated by a colon (:) followed by a space. However, YAML also supports more complex structures like arrays and mappings.`} />

      <Subheading text={`Array Format in YAML`} />
      <Text text={`In case you need to represent multiple values for a key, you can use an array (also called a list) format. Here's an example:`} />
      
      <TerminalOutput content={`key:
  - value1
  - value2
  - value3`} />

      <Text text={`Each item in the array starts with a hyphen (-) and is indented at the same level. YAML uses indentation to define relationships between data structures, so make sure your indentation is consistent.`} />
      
      <Text text={`This format can also be used to represent multiple items under a single key, as shown below:`} />
      
      <TerminalOutput content={`key:
  - value1
  - value2
  - value3`} />
      
      <Line />
      
      <Subheading text={`Mapping Format in YAML`} />
      <Text text={`YAML also supports mapping format, which allows you to define key-value pairs under another key. This is useful when you need to represent more complex data structures. Here's an example:`} />
      
      <TerminalOutput content={`outerkey:
  key1: value
  key2: value
  key3: value`} />
      
      <Text text={`In this format, we are defining a dictionary where each key has a corresponding value. We can also nest another structure under a key, for instance:`} />
      
      <TerminalOutput content={`outerkey:
  key1: value
  key2: value
  key3:
    - value1
    - value2`} />
      
      <Text text={`Notice that the nested values under \`key3\` are indented with two spaces (or more), which indicates they are part of \`key3\` but are themselves an array.`} />

      <Subheading text={`Nested Structures`} />
      <Text text={`YAML allows you to nest arrays and mappings within each other. For example, you could have a mapping that contains an array, which in turn contains other mappings.`} />
      
      <TerminalOutput content={`outerkey:
  key1: value
  key2:
    - subkey1: value1
    - subkey2: value2`} />

      <Text text={`Here, \`key2\` holds an array of mappings. Notice that the subkeys (\`subkey1\`, \`subkey2\`) are indented under \`key2\` and are aligned with the array items.`} />
      
      <Line />

      <Subheading text={`Indentation in YAML`} />
      <Text text={`In YAML, indentation plays a crucial role in indicating relationships between data elements. Proper indentation is essential to ensure the correct representation of nested data.`} />
      
      <Text text={`Here’s a quick guideline for indentation:`} />
      <ul className='font-cambria'>
        <li>✅ Each level of indentation represents a new level of hierarchy.</li>
        <li>✅ YAML uses spaces for indentation. Do not use tabs.</li>
        <li>✅ Typically, two spaces are used for each level of indentation, but the key is consistency.</li>
      </ul>
      <br/>
      
      <Text text={`For example, this structure represents a nested array inside a dictionary:`} />
      
      <TerminalOutput content={`outerkey:
  key1: value
  key2:
    - subkey1: value1
    - subkey2: value2`} />
      
      <Line />

      <Subheading text={`Ansible Playbook Example`} />
      <Text text={`Let’s now look at a simple Ansible playbook written in YAML. Below is an example of a playbook that installs Apache on a group of managed nodes:`} />
      
      <TerminalOutput content={`---
- name: Install Apache Web Server
  hosts: webservers
  become: true
  tasks:
    - name: Install Apache
      yum:
        name: httpd
        state: present
    - name: Start Apache service
      service:
        name: httpd
        state: started`} />
      
      <Text text={`In this playbook:`} />
      <ul className='font-cambria'>
        <li>✅ The `hosts` field defines which hosts this playbook applies to (in this case, `webservers`).</li>
        <li>✅ The `become: true` line indicates that the tasks should be executed with elevated privileges (sudo or root access).</li>
        <li>✅ The `tasks` section contains the tasks to be performed. Each task specifies the module to use (in this case, `yum` and `service`) and the parameters for that module (like the package name or service state).</li>
      </ul>
      
      <Line />

      <Subheading text={`Conclusion`} />
      <Text text={`In summary, an Ansible playbook is a simple yet powerful tool for automating tasks on remote machines. By using YAML to define tasks, configurations, and system states, Ansible makes it easy to manage complex deployments with ease.`} />
    </div>
  );
}
