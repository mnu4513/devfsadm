import { Heading, Subheading, Text, TerminalOutput, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function GitHubPullRequests() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Collaborating with Pull Requests`} />

      <Subheading text={`What is a Pull Request?`} />
      <Text text={`A pull request (PR) is a way to propose changes you've made on a branch to be merged into the main codebase. It's GitHub's standard collaboration workflow.`} />
      
      <Line />

      <Subheading text={`Basic Workflow`} />
      <Text text={`1. Create a branch`}/>
      <TerminalOutput content={`git checkout -b feature/login-page`} />
      <Text text={`2. Make changes and commit them`}/>
      <TerminalOutput content={`git add .\ngit commit -m "Added login page"`} />
      <Text text={`3. Push the branch to GitHub`}/>
      <TerminalOutput content={`git push origin feature/login-page`} />
      <Text text={`4. Open a Pull Request on GitHub\n✅ Compare your branch with \`main\` and submit it for review.`} />

      <Line />

      <Subheading text={`Review Process`} />
      <Text text={`Team members can review the PR, add comments, suggest changes, or approve it.`} />
      <Text text={`Once approved, the PR can be merged using GitHub's interface (via merge commit, squash, or rebase).`} />

      <Line />

      <Subheading text={`Merging the PR`} />
      <Text text={`After approvals and tests pass, click "Merge pull request" in GitHub.`} />
      <Text text={`This brings your feature branch into the main branch.`} />

      <Line />

      <Subheading text={`Best Practices`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li>Name your branches clearly (e.g., <code>feature/signup-form</code>, <code>bugfix/api-error</code>).</li>
        <li>Write meaningful PR titles and descriptions.</li>
        <li>Always pull latest changes to avoid conflicts.</li>
        <li>Keep PRs small and focused for easier review.</li>
        <li>Use draft PRs if your work is still in progress.</li>
      </ul>

      <Line />

      <Subheading text={`Tips for Reviewers`} />
      <Text text={`🔍 Review code for logic, readability, and consistency.`} />
      <Text text={`🧪 Ensure tests are added or updated.`} />
      <Text text={`✅ Leave constructive feedback.`} />

      <Line />

      <Subheading text={`Next Up`} />
      <Text text={`Learn how to manage ignored files using .gitignore to keep your repository clean and secure.`} />
      <p className='font-cambria'>
        ➡️ Continue to <span className='text-blue-400 hover:text-blue-700'>
          <Link to='/course/git-github/gitignore'>Managing .gitignore Files</Link>
        </span>
      </p>
    </div>
  );
}
