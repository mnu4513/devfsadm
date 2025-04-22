import { Link } from 'react-router-dom';
import { Heading, Subheading, Supersubheading, Text, Line, Video } from '../utils/Comps';

export default function AnsibleHome() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Ansible - From Basics to Automation Expert`} />

      <Supersubheading text={``} />
      <Subheading text={`About the Course`} />
      <Text text={`Welcome to the **Ansible - From Basics to Automation Expert** course!`} />
      <Text text={`🔧 This hands-on course will take you from understanding the fundamentals of Ansible to automating infrastructure like a pro.`} />

      <Line />
      <Video videoSrc={`sJpYQd3e4xM`} /> {/* Replace with your actual video ID */}

      <Supersubheading text={`What You Will Learn?`} />
      <Text text={`✅ Introduction to Configuration Management and Ansible Architecture`} />
      <Text text={`✅ Setting Up Ansible on Control Nodes and Managed Hosts`} />
      <Text text={`✅ Writing and Running Playbooks`} />
      <Text text={`✅ Working with Inventory Files and Variables`} />
      <Text text={`✅ Using Roles and Handlers for Reusability`} />
      <Text text={`✅ Advanced Topics: Jinja2 Templates, Ansible Vault, and Dynamic Inventories`} />
      <Text text={`✅ Real-world Automation Examples and Best Practices`} />

      <Line />
      <Supersubheading text={`Who Should Take This Course?`} />
      <Text text={`🔹 DevOps Engineers & System Administrators`} />
      <Text text={`🔹 Cloud Engineers and Infrastructure Specialists`} />
      <Text text={`🔹 IT Professionals seeking to automate tasks`} />
      <Text text={`🔹 Anyone aspiring to streamline their server management workflows`} />

      <Line />
      <Supersubheading text={`Prerequisites`} />
      <Text text={`👉 Basic understanding of Linux and command-line operations.`} />
      <Text text={`👉 Some familiarity with YAML is helpful but not required.`} />
      <Text text={`👉 Passion to automate and simplify infrastructure! 🤖`} />

      <Line />
      <Supersubheading text={`Why Learn Ansible?`} />
      <Text text={`Ansible is a powerful open-source automation tool that allows you to configure systems, deploy software, and orchestrate more advanced IT tasks easily. With its agentless architecture and simple YAML-based syntax, it's one of the most efficient tools for DevOps and system automation.`} />

      <Line />
      <Subheading text={`Get Started Now! 🚀`} />
      <p className='font-cambria'>
        Click on the <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/ansible/intro-to-ansible'>next lesson</Link>
        </span> (Introduction to Ansible) to begin your journey in Ansible Automation!
      </p>
    </div>
  );
}
