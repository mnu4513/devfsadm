import { Heading, Subheading, Text, TerminalOutput, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function GitBranchingMerging() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Git Branching & Merging – Working with Multiple Versions`} />

      <Subheading text={`What are Branches in Git?`} />
      <Text text={`Branches allow you to work on different versions of your project simultaneously. The default branch is usually called \`main\` or \`master\`. Creating new branches is useful for features, experiments, or bug fixes.`} />

      <Line />

      <Subheading text={`Creating and Switching Branches`} />
      <TerminalOutput content={`# Create a new branch\ngit branch feature-xyz\n\n# Switch to the new branch\ngit checkout feature-xyz`} />
      <Text text={`Or you can do both in one command:`} />
      <TerminalOutput content={`git checkout -b feature-xyz`} />

      <Line />

      <Subheading text={`Checking Branches`} />
      <TerminalOutput content={`git branch`} />
      <Text text={`✔️ The current branch is highlighted with an asterisk.`} />

      <Line />

      <Subheading text={`Making Changes in a Branch`} />
      <Text text={`Let’s say you edit a file or add a new one, then:`} />
      <TerminalOutput content={`git add .\ngit commit -m "Update feature"`} />
      <Text text={`Now your changes are committed only in \`feature-xyz\`, not in \`main\`.`} />

      <Line />

      <Subheading text={`Merging a Branch`} />
      <Text text={`Switch to the main branch and merge your feature:`} />
      <TerminalOutput content={`git checkout main\ngit merge feature-xyz`} />
      <Text text={`Git tries to automatically combine the changes. If there are conflicts, Git will alert you.`} />

      <Line />

      <Subheading text={`Resolving Merge Conflicts`} />
      <Text text={`If two branches modify the same part of a file, Git can’t auto-merge and you'll see conflict markers:`} />
      <TerminalOutput content={`<<<<<<< HEAD\nOriginal content\n=======\nConflicting content\n>>>>>>> feature-xyz`} />
      <Text text={`Manually edit the file to keep the correct version, then:`} />
      <TerminalOutput content={`git add <filename>\ngit commit`} />

      <Line />

      <Subheading text={`Deleting a Merged Branch`} />
      <TerminalOutput content={`git branch -d feature-xyz`} />
      <Text text={`Once merged, you can safely delete the feature branch to keep things clean.`} />

      <Line />

      <Subheading text={`Best Practices`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li>Use clear and descriptive branch names (e.g., <code>bugfix-login-error</code>).</li>
        <li>Always pull the latest changes before merging.</li>
        <li>Test before and after merging to avoid regressions.</li>
        <li>Keep branches short-lived and focused on a single purpose.</li>
      </ul>

      <Line />

      <Subheading text={`Next Up`} />
      <Text text={`You're now confident with branching and merging. In the next lesson, we’ll learn how to connect your local project to GitHub and push your work to the cloud.`} />

      <p className='font-cambria'>
        ➡️ Continue to <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/git-github/github-push'>Working with GitHub</Link>
        </span>
      </p>
    </div>
  );
}
