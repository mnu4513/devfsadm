import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

export default function GitIgnore() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Managing .gitignore Files`} />

      <Subheading text={`Why Use .gitignore?`} />
      <Text text={`The .gitignore file tells Git which files or directories to skip during version control. This is essential to avoid committing unnecessary or sensitive files (e.g., log files, API keys, OS/system files).`} />

      <Line />

      <Subheading text={`Creating a .gitignore`} />
      <Text text={`You can manually create a .gitignore file in your repository root:`} />
      <TerminalOutput content={`touch .gitignore`} />
      <Text text={`Then add patterns or filenames to exclude:`} />
      <TerminalOutput content={`node_modules/\n.env\n*.log\n.DS_Store`} />

      <Line />

      <Subheading text={`Common Examples`} />
      <Supersubheading text={`🟦 Node.js Projects`} />
      <TerminalOutput content={`node_modules/\n.env\npackage-lock.json`} />
      
      <Supersubheading text={`🐍 Python Projects`} />
      <TerminalOutput content={`__pycache__/\n*.pyc\n.env`} />
      
      <Supersubheading text={`💻 OS Files`} />
      <TerminalOutput content={`.DS_Store\nThumbs.db`} />

      <Line />

      <Subheading text={`Apply .gitignore to Tracked Files`} />
      <Text text={`If a file is already tracked, .gitignore won't remove it automatically. You need to untrack it manually:`} />
      <TerminalOutput content={`git rm --cached filename`} />
      <Text text={`Then commit the change:`} />
      <TerminalOutput content={`git commit -m "Remove tracked file and update .gitignore"`} />

      <Line />

      <Subheading text={`Tips`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li>Use <a className="text-blue-500 hover:text-blue-700" href="https://www.toptal.com/developers/gitignore" target="_blank" rel="noopener noreferrer">gitignore.io</a> to generate .gitignore templates for any language or tool.</li>
        <li>Keep your .gitignore clean and updated with project changes.</li>
        <li>Don’t commit environment files or secrets – always ignore them.</li>
      </ul>


    </div>
  );
}
