import React from 'react';
import { Heading, Subheading, Text, Command } from '../utils/Comps';

const CrontabAtPage = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Heading */}
      <Heading text="Crontab and AT in Linux" />

      {/* Subheading */}
      <Subheading text="What is Crontab?" />

      {/* Text */}
      <Text text="Crontab is a service in Linux for job scheduling or task scheduling. The term 'cron' refers to the time-based scheduling daemon, and 'tab' refers to the table where the scheduled jobs are stored. Every user can schedule cron jobs based on their permissions. Administrators can set which users are allowed to use crontab." />

      {/* Subheading */}
      <Subheading text="Use of Crontab" />

      {/* Text */}
      <Text text="Crontab is used to schedule tasks at specific times or intervals. It is commonly used for:" />
      <Text text="• Monitoring system health" />
      <Text text="• Running daily backups" />
      <Text text="• Daily server health checks" />

      {/* Subheading */}
      <Subheading text="Requirements for Crontab" />

      {/* Command */}
      <Command command="Package: crontabs" />
      <Command command="rpm -qa crontabs" />
      <Command command="Service: crond" />
      <Command command="systemctl status crond" />

      {/* Subheading */}
      <Subheading text="Crontab Configuration Files" />

      {/* Text */}
      <Text text="• /etc/crontab: Stores the configuration of the crontab service." />
      <Text text="• /var/log/cron: Logs all cron jobs." />
      <Text text="• /var/spool/cron: Contains user-specific cron jobs." />
      <Text text="• /etc/cron.allow: Lists users allowed to use crontab. If present, only users in this file can schedule jobs." />
      <Text text="• /etc/cron.deny: Lists users denied access to crontab. If present, users not listed here can schedule jobs." />

      {/* Subheading */}
      <Subheading text="Crontab Syntax" />

      {/* Text */}
      <Text text="A crontab entry consists of two parts:" />
      <Text text="1. Time Table: Consists of five fields that specify the time to run the task:" />
      <Text text="• Minutes: [0-59]" />
      <Text text="• Hours: [0-23]" />
      <Text text="• Day of the Month: [1-31]" />
      <Text text="• Month: [1-12 or jan-dec]" />
      <Text text="• Day of the Week: [0-6 (0 and 7 for Sunday) or mon-sun]" />
      <Text text="2. Command Field: The command or script to run at the specified time." />

      {/* Subheading */}
      <Subheading text="Special Symbols in Crontab" />

      {/* Text */}
      <Text text="• *: Repeat task for every value in a field." />
      <Text text="• /: Define intervals like */2 to run the task every 2 hours/minutes." />
      <Text text="• -: Define a range of values like 11-15." />
      <Text text="• ,: Define multiple values like 6,7 to specify an AND condition." />

      {/* Subheading */}
      <Subheading text="Crontab Command" />

      {/* Command */}
      <Command command="crontab -l  # List all scheduled cron jobs" />
      <Command command="crontab -e  # Schedule or edit a cron job" />
      <Command command="crontab -r  # Remove all cron jobs" />
      <Command command="crontab -r -i  # Remove cron jobs with confirmation" />
      <Command command="crontab -l -u <user_name>  # List cron jobs for a specific user" />
      <Command command="crontab -e -u <user_name>  # Schedule a cron job for a specific user" />
      <Command command="crontab -r -u <user_name>  # Remove cron jobs for a specific user" />

      {/* Subheading */}
      <Subheading text="What is AT?" />

      {/* Text */}
      <Text text="The AT command is used to schedule tasks to be executed once at a specific time in the future." />

      {/* Subheading */}
      <Subheading text="Requirements for AT" />

      {/* Command */}
      <Command command="Package: at" />
      <Command command="Service: atd" />

      {/* Subheading */}
      <Subheading text="AT Command Configuration Files" />

      {/* Text */}
      <Text text="• /var/spool/at: Contains user-specific scheduled tasks." />
      <Text text="• /etc/at.allow: Allows specific users to use the AT command." />
      <Text text="• /etc/at.deny: Denies specific users from using the AT command." />

      {/* Subheading */}
      <Subheading text="AT Command" />

      {/* Command */}
      <Command command="atq  # List all scheduled tasks" />
      <Command command="at <time>  # Schedule a new task" />
      <Command command="at -c <task_index>  # View task details" />
      <Command command="atrm <task_index>  # Remove a task" />
    </div>
  );
};

export default CrontabAtPage;
