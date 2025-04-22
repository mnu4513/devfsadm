import { Heading, Subheading, Text, TerminalOutput, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function GitHubPushPullClone() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Working with GitHub – Push, Pull & Clone`} />

      <Subheading text={`What is GitHub?`} />
      <Text text={`GitHub is a cloud-based hosting platform that lets you store, share, and collaborate on Git repositories. It’s where open-source projects and team codebases live.`} />

      <Line />

      <Subheading text={`Pushing Local Code to GitHub`} />
      <Text text={`To upload your local project to GitHub, follow these steps:`} />
      <TerminalOutput content={`# Step 1: Initialize Git (if not already done)\ngit init\n\n# Step 2: Add remote origin\ngit remote add origin https://github.com/username/repo.git\n\n# Step 3: Add and commit changes\ngit add .\ngit commit -m "Initial commit"\n\n# Step 4: Push to GitHub\ngit push -u origin main`} />
      <Text text={`✅ Your project is now hosted on GitHub.`} />

      <Line />

      <Subheading text={`Cloning a Repository`} />
      <Text text={`To download a repository from GitHub to your local system:`} />
      <TerminalOutput content={`git clone https://github.com/username/repo.git`} />
      <Text text={`✔️ This creates a local copy of the repo including all branches and history.`} />

      <Line />

      <Subheading text={`Pulling Changes from GitHub`} />
      <Text text={`If your teammates push updates to GitHub, use the \`git pull\` command to sync your local copy:`} />
      <TerminalOutput content={`git pull origin main`} />
      <Text text={`🔄 This merges remote changes with your local repository.`} />

      <Line />

      <Subheading text={`Checking Remote URLs`} />
      <TerminalOutput content={`git remote -v`} />
      <Text text={`This shows the current GitHub remote configured for the repo.`} />

      <Line />

      <Subheading text={`Changing the Remote URL`} />
      <Text text={`To update the remote URL (for example, switching from HTTPS to SSH):`} />
      <TerminalOutput content={`git remote set-url origin git@github.com:username/repo.git`} />

      <Line />

      <Subheading text={`Best Practices`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li>Push small, frequent commits instead of large ones.</li>
        <li>Pull before pushing to avoid conflicts.</li>
        <li>Use branches for new features and bug fixes.</li>
        <li>Write clear and meaningful commit messages.</li>
      </ul>

      <Line />

      <Subheading text={`Next Up`} />
      <Text text={`Now that you're connected to GitHub, it's time to learn how to collaborate with others using Pull Requests.`} />

      <p className='font-cambria'>
        ➡️ Continue to <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/git-github/pull-requests'>Collaborating with Pull Requests</Link>
        </span>
      </p>
    </div>
  );
}
