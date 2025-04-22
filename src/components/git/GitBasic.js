import { Heading, Subheading, Text, TerminalOutput, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function GitBasics() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Git Basics – Getting Started with Version Control`} />

      <Subheading text={`What is Git?`} />
      <Text text={`Git is a distributed version control system used to track changes in source code and coordinate work among developers. It helps you manage your project history, experiment without fear, and collaborate effectively.`} />

      <Line />

      <Subheading text={`Installing Git`} />
      <Text text={`To check if Git is already installed:`} />
      <TerminalOutput content={`git --version`} />
      <Text text={`To install Git:`} />
      <TerminalOutput content={`# On Ubuntu/Debian\nsudo apt update && sudo apt install git\n\n# On RHEL/CentOS\nsudo yum install git\n\n# On macOS (with Homebrew)\nbrew install git`} />

      <Line />

      <Subheading text={`Basic Git Configuration`} />
      <Text text={`Set your identity for commits:`} />
      <TerminalOutput content={`git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"`} />
      <Text text={`You can also check your settings:`} />
      <TerminalOutput content={`git config --list`} />

      <Line />

      <Subheading text={`Creating a Repository`} />
      <Text text={`To start tracking a project with Git:`} />
      <TerminalOutput content={`mkdir my-project\ncd my-project\ngit init`} />
      <Text text={`This creates a '.git' directory that tracks changes in your project.`} />

      <Line />

      <Subheading text={`Tracking Changes`} />
      <Text text={`Add a file to your repo and track it:`} />
      <TerminalOutput content={`echo "Hello Git" > hello.txt\ngit status\ngit add hello.txt\ngit commit -m "Add hello.txt"`} />

      <Text text={`✔️ \`git add\` stages changes. \n✔️ \`git commit\` saves the snapshot with a message.`} />

      <Line />

      <Subheading text={`Checking Logs & History`} />
      <TerminalOutput content={`git log`} />
      <Text text={`View commit history. Use \`--oneline\` for a condensed view:`} />
      <TerminalOutput content={`git log --oneline`} />

      <Line />

      <Subheading text={`Useful Git Commands`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li><code className='text-blue-500'>git status</code> – Shows staged and unstaged changes</li>
        <li><code className='text-blue-500'>git diff</code> – Shows differences not yet staged</li>
        <li><code className='text-blue-500'>git add .</code> – Stages all changes</li>
        <li><code className='text-blue-500'>git rm filename</code> – Deletes and stages removal</li>
        <li><code className='text-blue-500'>git commit -am "msg"</code> – Add & commit tracked files in one step</li>
      </ul>

      <Line />

      <Subheading text={`Good to Know`} />
      <Text text={`✅ Git tracks only what's committed — save often.\n✅ Avoid committing sensitive info like passwords.\n✅ Use clear commit messages to document history.`} />

      <Line />

      <Subheading text={`Next Up`} />
      <Text text={`You're now ready to explore branches and collaboration. In the next lesson, we’ll dive into creating branches, merging, and resolving conflicts.`} />

      <p className='font-cambria'>
        ➡️ Continue to <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/git-github/branching-merging'>Branching & Merging</Link>
        </span>
      </p>
    </div>
  );
}
