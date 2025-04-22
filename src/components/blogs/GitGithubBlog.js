import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function GitBlog() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Git & GitHub Blog – Mastering Version Control`} />

      <Subheading text={`Why Learn Git & GitHub?`} />
      <Text text={`Git is the most widely used version control system, and GitHub is the platform that brings collaboration to it. Together, they’re foundational for any developer or system administrator. Whether you're writing code, managing configurations, or contributing to open-source – Git & GitHub skills are essential.`} />

      <Line />

      <Subheading text={`Course Coverage`} />
      <Text text={`This Git & GitHub course helps beginners and intermediate users build a practical understanding. Here's what we explore:`} />

      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github'>Git & GitHub Course Overview</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github/git-basics'>Git Basics</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github/branching'>Branching and Merging</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github/remote-repo'>Working with Remote Repositories</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github/github-features'>GitHub Features</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github/collaboration'>Collaboration and Pull Requests</Link></li>
        <li className='text-blue-500 hover:underline hover:text-blue-800'><Link to='/course/git-github/gitignore'>Managing .gitignore Files</Link></li>
      </ul>

      <Line />

      <Subheading text={`What You'll Learn`} />
      <Text text={`✅ Track code changes and revert safely using Git.`} />
      <Text text={`✅ Work with branches for feature development and bug fixes.`} />
      <Text text={`✅ Sync local changes with remote repositories on GitHub.`} />
      <Text text={`✅ Manage open-source contributions and project workflows.`} />

      <Line />

      <Subheading text={`Key Concepts Covered`} />

      <Supersubheading text={`🔄 Git Basics`} />
      <Text text={`Understand repositories, commits, staging, and how Git tracks file changes in your project.`} />

      <Supersubheading text={`🌿 Branching & Merging`} />
      <Text text={`Use branches to isolate features and updates. Learn how to merge changes without breaking production code.`} />

      <Supersubheading text={`🌍 Remote Repositories`} />
      <Text text={`Work with GitHub to push and pull code, handle conflicts, and manage repositories in the cloud.`} />

      <Supersubheading text={`🤝 Collaboration on GitHub`} />
      <Text text={`Explore forks, pull requests, issues, and team workflows – all vital to modern DevOps and development teams.`} />

      <Line />

      <Subheading text={`Real-World Applications`} />
      <Text text={`🚀 Track configuration changes in Ansible or Shell scripts.`} />
      <Text text={`🚀 Collaborate with other developers on codebases via GitHub.`} />
      <Text text={`🚀 Manage project documentation and infrastructure repos.`} />

      <Line />

      <Subheading text={`Common Mistakes to Avoid`} />
      <Text text={`🔸 Forgetting to pull before pushing – causing merge conflicts.`} />
      <Text text={`🔸 Committing sensitive data without using .gitignore or GitHub Secrets.`} />
      <Text text={`🔸 Not writing clear commit messages.`} />
      <Text text={`🔸 Making changes directly to the main branch.`} />

      <Line />

      <Subheading text={`Pro Tips 💡`} />
      <Text text={`✅ Always pull latest changes before starting work.`} />
      <Text text={`✅ Use branches for every new feature or bug fix.`} />
      <Text text={`✅ Leverage GitHub Actions to automate workflows.`} />
      <Text text={`✅ Use descriptive commit messages and squash commits before merging.`} />

      <Line />

      <Subheading text={`Final Thoughts`} />
      <Text text={`Version control is not optional—it's vital. Mastering Git & GitHub will not only make you a better developer or admin, but it will also improve team collaboration, reduce errors, and accelerate project delivery.`} />

      <p className='font-cambria'>
        ➡️ Explore the course lessons and begin your <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/git-github'>Git & GitHub mastery</Link>
        </span> journey today! 🛠️📦
      </p>
    </div>
  );
}
