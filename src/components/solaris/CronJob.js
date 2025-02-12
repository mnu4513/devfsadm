import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput } from '../utils/Comps';

const Crontab = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Crontab in Solaris`} />
      
      <Text text={`In Solaris, the cron daemon is responsible for executing scheduled commands or scripts at specified intervals. The crontab command is used to manage these scheduled tasks, such as creating, modifying, listing, or removing cron jobs.`} />

      <Subheading text={`1. Listing Cron Jobs:`} />
      <Text text={`The crontab command allows users to list their current cron jobs. Here's how to use it:`} />
      
      <Supersubheading text={`To list the Cronjobs entry for the currently logged-in user:`} />
      <TerminalOutput content={`crontab -l`} />
      <Text text={`This command will display the cron jobs that are scheduled for the current user.`} />

      <Supersubheading text={`To list the Cronjob entry for a particular user:`} />
      <TerminalOutput content={`crontab -l -u username`} />
      <Text text={`Replace \`username\` with the specific user's name to see their cron jobs.`} />

      <Subheading text={`2. Editing Cron Jobs:`} />
      <Text text={`To modify cron jobs, we use the following commands depending on the user.`} />
      
      <Supersubheading text={`To edit the Crontab file for the currently logged-in user:`} />
      <TerminalOutput content={`crontab -e`} />
      <Text text={`This opens the cron table for the current user in the default text editor, allowing you to add, modify, or remove cron jobs.`} />
      
      <Supersubheading text={`To edit the Crontab file for a particular user:`} />
      <TerminalOutput content={`crontab -e -u username`} />
      <Text text={`Replace \`username\` with the specific user's name to edit their crontab file.`} />

      <Subheading text={`3. Removing Cron Jobs:`} />
      <Text text={`If you no longer need a cron job, you can remove it using the following commands:`} />
      
      <Supersubheading text={`To remove the Crontab file for the currently logged-in user:`} />
      <TerminalOutput content={`crontab -r`} />
      <Text text={`This will remove all scheduled cron jobs for the current user.`} />
      
      <Supersubheading text={`To remove the Crontab file for a particular user:`} />
      <TerminalOutput content={`crontab -r -u username`} />
      <Text text={`Replace \`username\` with the name of the user whose cron jobs you want to remove.`} />

      <Subheading text={`4. Checking Cron Logs:`} />
      <Text text={`You can check cron execution logs to monitor what has been executed in the cron jobs.`} />
      
      <Supersubheading text={`To check the log file of Crontab:`} />
      <TerminalOutput content={`cat /var/log/cron`} />
      <Text text={`This will show the logs for the cron daemon, including the execution details of all cron jobs.`} />

      <Subheading text={`5. Crontab Files and User Permissions:`} />
      <Text text={`Each user has a crontab file stored in a specific location. Additionally, there are configuration files that determine which users are allowed or denied access to cron jobs.`} />

      <Supersubheading text={`Location of every user's Crontab file:`} />
      <TerminalOutput content={`cat /var/spool/cron/crontabs/username`} />
      <Text text={`Replace \`username\` with the specific user's name to see their individual crontab file. Cron jobs for each user are stored in this directory.`} />

      <Supersubheading text={`To list allowed users for Crontab:`} />
      <TerminalOutput content={`cat /etc/cron.d/cron.allow`} />
      <Text text={`This file lists the users who are permitted to use cron jobs. If a user is listed here, they can create and manage cron jobs.`} />

      <Supersubheading text={`To list prohibited users for Crontab:`} />
      <TerminalOutput content={`cat /etc/cron.d/cron.deny`} />
      <Text text={`This file lists users who are prohibited from using cron jobs. If a user is listed here, they cannot create or modify cron jobs.`} />

      <Text text={`To allow a user to access the cron service, remove their entry from the \`cron.deny\` file and add their entry to the \`cron.allow\` file.`} />
      <Text text={`If \`cron.allow\` does not exist on the server, then removing the user from \`cron.deny\` is sufficient to grant them cron access.`} />
    </div>
  );
};

export default Crontab;
