import { Heading, Subheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function ShellScriptingBlog() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Shell Scripting Course Blog`} />

      <Subheading text={`Master the Art of Shell Scripting 🐚`} />
      <Text text={`Shell scripting is the foundation of Linux system automation. In this course, you'll learn how to interact with the Linux shell, automate tasks, process user input, and write reusable, powerful scripts.`} />

      <Text text={`Whether you're a beginner trying to understand command-line basics or a developer looking to automate your workflows, this course takes you step-by-step into the world of shell scripting.`} />

      <Line />

      <Subheading text={`Course Outline 📘`} />
      <Text text={`Here's what you’ll explore in this hands-on course:`} />

      <ul className='list-disc ml-6 font-cambria'>
        <li><Link to='/course/shell/intro-to-shell' className='text-blue-500 hover:text-blue-700 hover:underline '>Intro to Shell Scripting</Link> – Understand what a shell is, and why scripting makes your life easier.</li>
        <li><Link to='/course/shell/basic-of-shell' className='text-blue-500 hover:text-blue-700 hover:underline '>Basic of Linux Shell</Link> – Learn shell navigation, command structure, and redirection.</li>
        <li><Link to='/course/shell/variables-and-user-input' className='text-blue-500 hover:text-blue-700 hover:underline '>Variables and User Input</Link> – Store data, interact with users, and create dynamic scripts.</li>
        <li><Link to='/course/shell/string-and-array' className='text-blue-500 hover:text-blue-700 hover:underline '>String and Array</Link> – Work with textual data and structured lists effectively.</li>
        <li><Link to='/course/shell/arithmetic-operations' className='text-blue-500 hover:text-blue-700 hover:underline '>Arithmetic Operations</Link> – Do calculations and process numeric data.</li>
        <li><Link to='/course/shell/conditional-statements' className='text-blue-500 hover:text-blue-700 hover:underline '>Conditional Statements</Link> – Add logic to your scripts with if-else, case, and more.</li>
        <li><Link to='/course/shell/loops-in-shell-scripting' className='text-blue-500 hover:text-blue-700 hover:underline '>Loops in Shell Scripting</Link> – Repeat tasks using for, while, and until loops.</li>
        <li><Link to='/course/shell/functions-and-arguments' className='text-blue-500 hover:text-blue-700 hover:underline '>Functions and Arguments</Link> – Modularize code with reusable blocks and arguments.</li>
        <li><Link to='/course/shell/file-handling-redirection' className='text-blue-500 hover:text-blue-700 hover:underline '>File Handling Redirection</Link> – Read from/write to files, redirect output, and process logs.</li>
        <li><Link to='/course/shell/script-automation' className='text-blue-500 hover:text-blue-700 hover:underline '>Automating Script</Link> – Schedule tasks with cron, make scripts executable, and auto-run them.</li>
        <li><Link to='/course/shell/interview-prep' className='text-blue-500 hover:text-blue-700 hover:underline '>Interview Preparation</Link> – Prepare for shell scripting interview rounds with real-world problems.</li>
      </ul>

      <Line />

      <Subheading text={`Real-World Value 💡`} />
      <Text text={`Shell scripting is used everywhere — from DevOps to system admin, automation to CI/CD pipelines. After this course, you’ll be equipped to:`} />

      <ul className='list-disc ml-6 font-cambria'>
        <li>Automate repetitive Linux tasks</li>
        <li>Create interactive command-line utilities</li>
        <li>Process logs and data on the fly</li>
        <li>Write scripts for backups, user management, and more</li>
        <li>Integrate scripting into larger automation projects (e.g., Ansible, Jenkins)</li>
      </ul>

      <Line />

      <Subheading text={`Common Mistakes to Avoid 🚫`} />
      <Text text={`Here are some things beginners often get wrong:`} />
      <ul className='list-disc ml-6 font-cambria'>
        <li>Forgetting to give execute permission to scripts (`chmod +x script.sh`)</li>
        <li>Missing quotes around variables (`"$var"` protects against spaces)</li>
        <li>Using `=` instead of `==` in `[ ]` test conditions</li>
        <li>Not checking for errors with `exit codes`</li>
      </ul>

      <Line />

      <Subheading text={`Pro Tips for Success 🚀`} />
      <Text text={`✅ Practice writing small scripts every day — even a 5-line script improves your skill.`} />
      <Text text={`✅ Test your scripts with edge cases (empty input, wrong paths, etc.).`} />
      <Text text={`✅ Learn how to debug using \`set -x\` and handle errors using \`set -e\`.`} />
      <Text text={`✅ Build a GitHub repo of your scripts — it's a great portfolio!`} />

      <Line />

      <Subheading text={`Ready to start scripting like a pro? 🧠`} />
      <Text text={`Jump into the course and unlock the full power of Linux Shell Scripting!`} />

      <Text text={`👉 Begin with the`} />
      <p className='font-cambria'>Introduction to 
        <Link to='/course/shell' className='text-blue-500 hover:text-blue-700 hover:underline '> Introduction to Shell Scripting</Link> to get started.
      </p>
    </div>
  );
}
