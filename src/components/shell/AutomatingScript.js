import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from '../utils/Comps';

const AutomatingScripts = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Automating Scripts with Crontab & at Command`} />

      <Text text={`Automating script execution is essential in system administration. The 'cron' and 'at' commands help schedule tasks efficiently. Crontab is used for recurring tasks, while 'at' is for one-time scheduled executions.`} />

      <Line />
      
      <Subheading text={`Scheduling Scripts Using Crontab`} />
      <Text text={`The crontab command allows users to schedule repetitive tasks. Crontab jobs are stored in a user-specific crontab file.`} />
      
      <Supersubheading text={`View Existing Crontab Jobs`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -l`} />
      
      <Supersubheading text={`Edit Crontab Jobs`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -e`} />
      
      <Supersubheading text={`Crontab Syntax`} />
      <TerminalOutput content={`* * * * * command_to_execute`} />
      <Text text={`Each field represents:
1. Minute (0-59)
2. Hour (0-23)
3. Day of Month (1-31)
4. Month (1-12)
5. Day of Week (0-6, Sunday=0)`} />
      
      <Supersubheading text={`Example: Run Script Every Day at 3 AM`} />
      <TerminalOutput content={`0 3 * * * /home/user/script.sh`} />
      
      <Line />
      
      <Subheading text={`Using 'at' for One-Time Task Execution`} />
      <Text text={`The 'at' command schedules a script to run once at a specific time.`} />
      
      <Supersubheading text={`Schedule a Script for Future Execution`} />
      <TerminalOutput content={`[root@localhost:~]# echo "/home/user/script.sh" | at 4:00 PM`} />
      
      <Supersubheading text={`View Scheduled Jobs`} />
      <TerminalOutput content={`[root@localhost:~]# atq`} />
      
      <Supersubheading text={`Remove a Scheduled Job`} />
      <TerminalOutput content={`[root@localhost:~]# atrm job_id`} />
      
      <Line />
      
      <Text text={`By leveraging Crontab and 'at', you can automate tasks efficiently, reducing manual effort and ensuring timely execution of critical jobs.`} />
    </div>
  );
};

export default AutomatingScripts;
