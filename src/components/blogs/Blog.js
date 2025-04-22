import { Heading, Subheading, Text, Line } from '../utils/Comps';
import { Link } from 'react-router-dom';

export default function BlogHome() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Tech Blog – Deep Dives & Practical Insights`} />

      <Text text={`Welcome to our curated blog space where we simplify complex tech topics, share practical tips, and help you master tools that power real-world IT infrastructure. Whether you're an aspiring DevOps engineer, a sysadmin, or a curious learner — there's something here for you.`} />

      <Line />

      <Subheading text={`💡 What You'll Find Here`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria'>
        <li><Text text={`Quick guides on OS administration like Linux & Solaris.`} /></li>
        <li><Text text={`Powerful tips for shell scripting and automation.`} /></li>
        <li><Text text={`Deep dives into tools like Ansible, Docker, and Git.`} /></li>
        <li><Text text={`Hands-on use cases and pro-level insights.`} /></li>
      </ul>

      <Line />

      <Subheading text={`📰 Featured Blogs`} />
      <ul className='list-disc pl-6 space-y-2 font-cambria text-blue-500'>
        <li><Link to='/blog/linux' className='hover:underline hover:text-blue-700'>Why Linux Still Rules: Core Skills for Every Engineer</Link></li>
        <li><Link to='/blog/solaris' className='hover:underline hover:text-blue-700'>Solaris Administration Essentials: A Quick Guide</Link></li>
        <li><Link to='/blog/shell-scripting' className='hover:underline hover:text-blue-700'>10 Shell Scripting Tips for Automating Daily Tasks</Link></li>
        <li><Link to='/blog/ansible' className='hover:underline hover:text-blue-700'>Getting Started with Ansible for IT Automation</Link></li>
        <li><Link to='/blog/docker' className='hover:underline hover:text-blue-700'>Master Docker: Containerization for DevOps Engineers</Link></li>
        <li><Link to='/blog/git-github' className='hover:underline hover:text-blue-700'>Essential Git & GitHub Skills for Devs and Sysadmins</Link></li>
      </ul>

      <Line />

      <Subheading text={`✨ Stay Updated`} />
      <Text text={`We regularly update our blogs with new lessons, tool breakdowns, and industry practices. Bookmark this page and follow our course tracks for a complete learning experience.`} />

      <Text text={`➡️ Explore the full course sections via the navigation or start with a blog post that interests you the most.`} />
    </div>
  );
}
