import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function GitGithubOverview() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Git & GitHub Course Overview`} />

      <Subheading text={`Welcome to the Git & GitHub Course`} />
      <Text text={`This course is designed to help you master version control using Git and enhance your collaboration skills using GitHub. Whether you're a developer, DevOps engineer, or system administrator, version control is a must-have skill in modern tech workflows.`} />

      <Line />

      <Subheading text={`What You'll Learn`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li>How Git tracks changes with commits and branches</li>
        <li>Creating and managing repositories locally and on GitHub</li>
        <li>Effective collaboration using pull requests and forks</li>
        <li>Resolving merge conflicts and best branching strategies</li>
        <li>GitHub Actions basics for automation</li>
      </ul>

      <Line />

      <Subheading text={`Course Flow`} />
      <Supersubheading text={`1. Git Fundamentals`} />
      <Text text={`Understand the core concepts: repositories, commits, staging, undoing changes, and working with logs and diffs.`} />

      <Supersubheading text={`2. Branching & Merging`} />
      <Text text={`Learn how to create feature branches, merge code, and manage conflicts like a pro.`} />

      <Supersubheading text={`3. Remote Repositories & GitHub`} />
      <Text text={`Push and pull changes to GitHub, set up SSH authentication, and organize work with forks and clones.`} />

      <Supersubheading text={`4. GitHub Collaboration`} />
      <Text text={`Contribute to projects with issues and pull requests. Learn open-source contribution workflows.`} />

      <Supersubheading text={`5. Pro Tips & Tools`} />
      <Text text={`Speed up your workflow with aliases, Git GUIs, GitHub CLI, and explore basic automation with GitHub Actions.`} />

      <Line />

      <Subheading text={`Pre-requisites`} />
      <Text text={`✅ Basic understanding of the command line`}/>
      <Text text={`✅ Familiarity with any programming or scripting language (optional)`} />

      <Line />

      <Subheading text={`Who This Course Is For`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li>Software Developers</li>
        <li>DevOps and SRE Engineers</li>
        <li>Linux Admins managing scripts and configs</li>
        <li>Students and beginners starting with open source</li>
      </ul>

      <Line />

      <Subheading text={`Let's Get Started`} />
      <Text text={`Your journey to mastering Git & GitHub begins now. This course is hands-on, concise, and loaded with real-world examples. Start from the next lesson and follow along with your terminal.`} />

      <p className='font-cambria'>
        ➡️ Head over to the next lesson: <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/git-github/git-basics'>Git Basics</Link>
        </span> 🚀
      </p>
    </div>
  );
}
