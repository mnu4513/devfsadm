import { Link } from 'react-router-dom';
import { Heading, Subheading, Supersubheading, Text, Line } from '../utils/Comps';
// import YouTubeEmbed from '@/components/ui/YouTubeEmbed';

export default function ShellScriptingHome() {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
        <Heading text={`Shell Scripting - Zero to Hero`}/>
      
      <Supersubheading text={``}/>
      <Subheading text={`About the Course`}/>
      {/* <YouTubeEmbed videoId="YOUR_VIDEO_ID" /> */}
      <Text text={`Welcome to the **Shell Scripting - Zero to Hero** course!`}/>
      <Text text={`🚀 This course is designed for absolute beginners and professionals looking to enhance their scripting skills.`}/>
     
      
      <Line />
      <Supersubheading text={`What You Will Learn?`}/>
      <Text text={`✅ Basics of Shell Scripting (Syntax, Execution, and Structure)`}/>
      <Text text={`✅ Variables, User Input, and Data Handling`}/>
      <Text text={`✅ Conditional Statements and Loops`}/>
      <Text text={`✅ Functions and Script Automation`}/>
      <Text text={`✅ File Handling, Logging, and Debugging Techniques`}/>
      <Text text={`✅ Real-world Shell Scripting Use Cases`}/>

      
      
      <Line />
      <Supersubheading text={`Who Should Take This Course?`}/>
      <Text text={`🔹 System Administrators`}/>
      <Text text={`🔹 DevOps Engineers`}/>
      <Text text={`🔹 Linux Enthusiasts`}/>
      <Text text={`🔹 Software Developers`}/>
      <Text text={`🔹 Anyone interested in automation and scripting`}/>
     
      
      <Line />
      <Supersubheading text={`Prerequisites`}/>
      <Text text={`👉 Basic knowledge of Linux commands is helpful but not mandatory.`}/>
      <Text text={`👉 Enthusiasm to learn automation using Shell Scripting! 😊`}/>
     
      
      <Line />
      <Supersubheading text={`Why Learn Shell Scripting?`}/>
      <Text text={`Shell scripting is a powerful skill for automating repetitive tasks, managing systems efficiently, and enhancing productivity. It is widely used in system administration, DevOps, and software development.`}/>
    
      
      <Line />
      <Subheading text={`Get Started Now! 🚀`}/>
      <p className='font-cambria'>Click on the <sapn className='text-blue-400 hover:text-blue-700'><Link to='/course/shell/intro-to-shell'>next lesson</Link></sapn> to begin your journey in Shell Scripting!</p>
   
    </div>
  );
}