import React from 'react';
import { Heading, Subheading, Text, Command, TerminalOutput } from '../utils/Comps';

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
      <Text text="Package: crontabs" />
      <TerminalOutput content={`[root@localhost ~]# rpm -qa crontabs
crontabs-1.11-27.20190603git.el9_0.noarch
[root@localhost ~]#`} />
      <Text text='Service: crond' />
      <TerminalOutput content={`[root@localhost ~]# systemctl status crond
● crond.service - Command Scheduler
     Loaded: loaded (/usr/lib/systemd/system/crond.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2024-12-19 09:27:13 IST; 2h 6min ago
   Main PID: 1057 (crond)
      Tasks: 2 (limit: 23422)
     Memory: 1.4M
        CPU: 85ms
     CGroup: /system.slice/crond.service
             ├─1057 /usr/sbin/crond -n
             └─1913 /usr/sbin/anacron -s
`} />


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
      <TerminalOutput content={`SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# For details see man 4 crontabs

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name  command to be executed
`} />


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
      <Text text="List all scheduled cron jobs for currently loggedin user" />
      <TerminalOutput content={`[root@localhost ~]#
[root@localhost ~]# crontab -l
23      14      *       *       *       /usr/bin/echo   hello
[root@localhost ~]#
`} />
      <Text text="Schedule or edit a cron job for currently loggedin user" />
      <TerminalOutput content={`[root@localhost ~]# crontab -e
crontab: no changes made to crontab
[root@localhost ~]#
`} />
      <Text text="Remove all cron jobs" />
      <TerminalOutput content={`[root@localhost ~]# crontab -r
[root@localhost ~]#
[root@localhost ~]# crontab -l
no crontab for root
[root@localhost ~]#
`} />
      <Text text="Remove cron jobs with confirmation" />
      <TerminalOutput content={`[root@localhost ~]#
[root@localhost ~]# crontab -r -i
crontab: really delete root's crontab? yes
no crontab for root
[root@localhost ~]#
`} />
      <Text text="List cron jobs for a specific user" />
      <TerminalOutput content={`[root@localhost ~]#
[root@localhost ~]# crontab -l -u dom
23      14      *       *       *       /bin/echo
[root@localhost ~]#
`} />
      <Text text="Schedule a cron job for a specific user" />
      <TerminalOutput content={`[root@localhost ~]# crontab -e -u dom
crontab: no changes made to crontab
[root@localhost ~]#
`} />
      <Text text="Remove cron jobs for a specific user" />
      <TerminalOutput content={`[root@localhost ~]# crontab -r -u dom
[root@localhost ~]#
[root@localhost ~]# crontab -l -u dom
no crontab for dom

`} />

      {/* Subheading */}
      <Subheading text="What is AT?" />

      {/* Text */}
      <Text text="The AT command is used to schedule tasks to be executed once at a specific time in the future." />

      {/* Subheading */}
      <Subheading text="Requirements for AT" />

      {/* Command */}
      <Text text="Package: crontabs" />
      <TerminalOutput content={`[root@localhost ~]# rpm -qa at
at-3.1.23-10.el9.x86_64
[root@localhost ~]#
`} />
      <Text text="Service: atd" />
      <TerminalOutput content={`[root@localhost ~]#
[root@localhost ~]# systemctl status atd
● atd.service - Deferred execution scheduler
     Loaded: loaded (/usr/lib/systemd/system/atd.service; enabl>
     Active: active (running) since Thu 2024-12-19 09:27:13 IST>
       Docs: man:atd(8)
   Main PID: 992 (atd)
      Tasks: 1 (limit: 23422)
     Memory: 296.0K
        CPU: 9ms
     CGroup: /system.slice/atd.service
             └─992 /usr/sbin/atd -f
`} />


      {/* Subheading */}
      <Subheading text="AT Command Configuration Files" />

      {/* Text */}
      <Text text="• /var/spool/at: Contains user-specific scheduled tasks." />
      <Text text="• /etc/at.allow: Allows specific users to use the AT command." />
      <Text text="• /etc/at.deny: Denies specific users from using the AT command." />

      {/* Subheading */}
      <Subheading text="AT Command" />

      {/* Command */}
      <Text text="List all scheduled tasks" />
        <TerminalOutput content={`[root@localhost ~]# atq
2       Thu Dec 19 13:00:00 2024 a root
[root@localhost ~]#
`} />
<Text text={'Schedule a new task'} />
<TerminalOutput content={`[root@localhost ~]# at 13:00
warning: commands will be executed using /bin/sh
at> /bin/echo hello
at> <EOT>
job 2 at Thu Dec 19 13:00:00 2024
[root@localhost ~]# 
`}/>
   
      <Text text={`View task details`} />
      <TerminalOutput content={`[root@localhost ~]# at -c 2
#!/bin/sh
# atrun uid=0 gid=0
# mail ok 0
umask 22
SHELL=/bin/bash; export SHELL
HISTCONTROL=ignoredups; export HISTCONTROL
HISTSIZE=1000; export HISTSIZE
HOSTNAME=localhost; export HOSTNAME
PWD=/root; export PWD
LOGNAME=root; export LOGNAME
HOME=/root; export HOME
LANG=en_US.UTF-8; export LANG
`} />

      <Text text=" Remove a task" />
      <TerminalOutput content={`[root@localhost ~]# atrm 2
[root@localhost ~]# atq
[root@localhost ~]#
`} />
    </div>
  );
};

export default CrontabAtPage;
