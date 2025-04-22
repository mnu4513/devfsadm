import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function AnsibleBlog() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ansible Course Blog – Highlights & Pro Tips`} />

      <Subheading text={`Why Learn Ansible?`} />
      <Text text={`Ansible is one of the most powerful and simple tools for automating configuration management, application deployment, and IT orchestration. It is agentless, uses simple YAML-based playbooks, and scales across infrastructure with ease.`} />

      <Line />

      <Subheading text={`Course Coverage`} />
      <Text text={`This Ansible course is designed for beginners and intermediate users to build strong foundational and practical knowledge. Here's what it covers:`} />

      <ul className='list-disc pl-6 space-y-2 font-cambria '>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible'>Ansible Course Overview</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/intro-to-ansible'>Introduction to Ansible</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/lab-setup'>Lab Setup</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/inventory'>Static Inventory</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/modules'>Ansible Modules</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/ad-hoc'>Ad-hoc Commands</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/ad-hoc-examples'>Ad-hoc Command Examples</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/playbook'>Ansible Playbook</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/playbook-tasks'>Playbook Tasks</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/ansible/variables'>Ansible Variables</Link></li>
      </ul>

      <Line />

      <Subheading text={`What You'll Learn`} />
      <Text text={`✅ How to automate server configuration and software deployment.`} />
      <Text text={`✅ Writing ad-hoc commands and complex playbooks.`} />
      <Text text={`✅ Managing inventories, variables, and roles effectively.`} />
      <Text text={`✅ Applying real-world use cases like deploying NGINX, creating users, setting permissions, and more.`} />

      <Line />

      <Subheading text={`Key Concepts Covered`} />

      <Supersubheading text={`🛠️ Static Inventory Management`} />
      <Text text={`Learn how to define and manage your infrastructure using static inventory files (INI and YAML). Grouping hosts and managing children groups makes scaling easier.`} />

      <Supersubheading text={`⚙️ Ad-Hoc Commands & Modules`} />
      <Text text={`Master quick configuration tasks using ad-hoc commands and Ansible's built-in modules like copy, user, service, yum, apt, etc.`} />

      <Supersubheading text={`📘 Playbooks`} />
      <Text text={`Dive deep into YAML-based playbooks to automate multiple tasks across systems.`} />

      <Supersubheading text={`📦 Variables`} />
      <Text text={`Use variables to make playbooks dynamic. Understand variable types, precedence, and real-world use cases.`} />

      <Line />

      <Subheading text={`Real-World Applications`} />
      <Text text={`🚀 Install and configure web servers like Apache or NGINX.`} />
      <Text text={`🚀 Deploy apps consistently across dev, staging, and prod.`} />
      <Text text={`🚀 Create users, set permissions, and manage services across Linux systems.`} />

      <Line />

      <Subheading text={`Common Mistakes to Avoid`} />
      <Text text={`🔸 Forgetting to test playbooks with --check before running them.`} />
      <Text text={`🔸 Mismanaging indentation in YAML files.`} />
      <Text text={`🔸 Not grouping hosts properly in inventory files.`} />
      <Text text={`🔸 Overwriting variables due to lack of precedence knowledge.`} />

      <Line />

      <Subheading text={`Pro Tips 💡`} />
      <Text text={`✅ Use "--syntax-check" and "--check" to test playbooks.`} />
      <Text text={`✅ Structure your projects using roles for reusability.`} />
      <Text text={`✅ Use Ansible Vault to secure sensitive variables.`} />
      <Text text={`✅ Regularly update your inventory and manage environments (dev/test/prod) separately.`} />

      <Line />

      <Subheading text={`Final Thoughts`} />
      <Text text={`Ansible makes your infrastructure predictable and consistent. Whether you're managing 5 servers or 5000, mastering this tool will save time, prevent errors, and supercharge your DevOps workflow.`} />

      <p className='font-cambria'>
      ➡️ Dive into the course lessons above and start your   <span className='text-blue-400 hover:text-blue-700'>
                <Link to='/course/ansible'>Ansible automation </Link>
              </span> journey today! 🔧🚀
            </p>
    </div>
  );
}
