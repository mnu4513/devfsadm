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
      <TerminalOutput content={`[root@localhost:~]# crontab -l
# Copyright 2007 Sun Microsystems, Inc.  All rights reserved.
# Use is subject to license terms.
#
# The root crontab should be used to perform accounting data collection.
#
#
10 3 * * * /usr/sbin/logadm
15 3 * * 0 [ -x /usr/lib/fs/nfs/nfsfind ] && /usr/lib/fs/nfs/nfsfind
30 3 * * * [ -x /usr/lib/gss/gsscred_clean ] && /usr/lib/gss/gsscred_clean
[root@localhost:~]#
`} />
      <Text text={`This command will display the cron jobs that are scheduled for the current user.`} />

      <Supersubheading text={`To list the Cronjob entry for a particular user:`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -l john
23 14 * * * /usr/bin/echo "Hello World!"
[root@localhost:~]#`} />
      <Text text={`Replace \`username\` with the specific user's name to see their cron jobs.`} />

      <Subheading text={`2. Editing Cron Jobs:`} />
      <Text text={`To modify cron jobs, we use the following commands depending on the user.`} />
      
      <Supersubheading text={`To edit the Crontab file for the currently logged-in user:`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -e
# Copyright 2007 Sun Microsystems, Inc.  All rights reserved.
# Use is subject to license terms.
#
# The root crontab should be used to perform accounting data collection.
#
#
10 3 * * * /usr/sbin/logadm
15 3 * * 0 [ -x /usr/lib/fs/nfs/nfsfind ] && /usr/lib/fs/nfs/nfsfind
30 3 * * * [ -x /usr/lib/gss/gsscred_clean ] && /usr/lib/gss/gsscred_clean
~`} />
      <Text text={`This opens the cron table for the current user in the default text editor, allowing you to add, modify, or remove cron jobs.`} />
      
      <Supersubheading text={`To edit the Crontab file for a particular user:`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -e john
23 14 * * * /usr/bin/echo "Hello World!"
~`} />
      <Text text={`Replace \`username\` with the specific user's name to edit their crontab file.`} />

      <Subheading text={`3. Removing Cron Jobs:`} />
      <Text text={`If you no longer need a cron job, you can remove it using the following commands:`} />
      
      <Supersubheading text={`To remove the Crontab file for the currently logged-in user:`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -r
[root@localhost:~]# crontab -l
crontab: can't open your crontab file.
[root@localhost:~]#`} />
      <Text text={`This will remove all scheduled cron jobs for the current user.`} />
      
      <Supersubheading text={`To remove the Crontab file for a particular user:`} />
      <TerminalOutput content={`[root@localhost:~]# crontab -r john
[root@localhost:~]# crontab -l john
crontab: can't open your crontab file.
[root@localhost:~]#`} />
      <Text text={`Replace \`username\` with the name of the user whose cron jobs you want to remove.`} />

      <Subheading text={`4. Checking Cron Logs:`} />
      <Text text={`You can check cron execution logs to monitor what has been executed in the cron jobs.`} />
      
      <Supersubheading text={`To check the log file of Crontab:`} />
      <TerminalOutput content={`[root@localhost:~]# cat /var/cron/log
! *** cron started ***   pid = 866 Wed Feb 12 21:05:37 2025
! SIGTERM Wed Feb 12 21:42:55 2025
! ******* CRON ABORTED ******** Wed Feb 12 21:42:55 2025
! *** cron started ***   pid = 536 Thu Feb 13 20:17:25 2025
[root@localhost:~]#`} />
      <Text text={`This will show the logs for the cron daemon, including the execution details of all cron jobs.`} />

      <Subheading text={`5. Crontab Files and User Permissions:`} />
      <Text text={`Each user has a crontab file stored in a specific location. Additionally, there are configuration files that determine which users are allowed or denied access to cron jobs.`} />

      <Supersubheading text={`Location of every user's Crontab file:`} />
      <TerminalOutput content={`[root@localhost:~]# cat /var/spool/cron/crontabs/adm
#ident  "%Z%%M% %I%     %E% SMI"        /* SVr4.0 1.2   */
#
# The adm crontab file should contain startup of performance collection if
# the profiling and performance feature has been installed.
#
[root@localhost:~]#`} />
      <Text text={`Replace \`username\` with the specific user's name to see their individual crontab file. Cron jobs for each user are stored in this directory.`} />

      <Supersubheading text={`To list allowed users for Crontab:`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/cron.d/cron.allow
cat: cannot open /etc/cron.d/cron.allow: No such file or directory
[root@localhost:~]#`} />
      <Text text={`This file lists the users who are permitted to use cron jobs. If a user is listed here, they can create and manage cron jobs.`} />

      <Supersubheading text={`To list prohibited users for Crontab:`} />
      <TerminalOutput content={`[root@localhost:~]# cat /etc/cron.d/cron.deny
daemon
bin
nuucp
[root@localhost:~]#`} />
      <Text text={`This file lists users who are prohibited from using cron jobs. If a user is listed here, they cannot create or modify cron jobs.`} />

      <Text text={`To allow a user to access the cron service, remove their entry from the \`cron.deny\` file and add their entry to the \`cron.allow\` file.`} />
      <Text text={`If \`cron.allow\` does not exist on the server, then removing the user from \`cron.deny\` is sufficient to grant them cron access.`} />
    </div>
  );
};


export default Crontab;