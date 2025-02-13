import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from "../utils/Comps";

const UserManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text="User Management in Solaris" />
      
      <Text text="In Solaris, user management involves creating, modifying, and deleting user accounts, as well as managing user attributes." />
      
      {/* Important Files */}
      <Subheading text="Important Files in User Management:" />
      <Text text={`Here are some important files in user management:`} />
      <ul className='ml-5'>
        <li className='font-bold'>/etc/passwd</li>
        <li className='font-bold'>/etc/shadow</li>
      </ul>

      {/* Files Explanation */}
      <Supersubheading text={`1. To get All User's Information:`} />
      <TerminalOutput content={`[root@localhost:~ ]# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
landscape:x:104:105::/var/lib/landscape:/usr/sbin/nologin
polkitd:x:990:990:User for polkitd:/:/usr/sbin/nologin
test:x:1000:1000:,,,:/home/test:/bin/bash
dnsmasq:x:999:65534:dnsmasq:/var/lib/misc:/usr/sbin/nologin
john:x:1001:1002::/home/john:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`/etc/passwd\` file contains essential user information such as username, UID, GID, home directory, and shell.`} />
      
      <Supersubheading text={`2. To get All User's Information in Password encrypted form:`} />
      <TerminalOutput content={`[root@localhost:~ ]# cat /etc/shadow
root:*:20094:0:99999:7:::
daemon:*:20094:0:99999:7:::
bin:*:20094:0:99999:7:::
sys:*:20094:0:99999:7:::
sync:*:20094:0:99999:7:::
games:*:20094:0:99999:7:::
test:$y$j9T$olK.GsTmFcuUPahYNiK4M.$rm28zZ9ZGYD9gq5eXctdnrgpVhzNwSBmNKIqlms6wD.:20126:0:99999:7:::
dnsmasq:!:20130::::::
john:!:20131:0:99999:7:::
[root@localhost:~ ]#`} />
      <Text text={`The \`/etc/shadow\` file stores password information in an encrypted form, as well as the date of the last password change and password expiration details.`} />

      <Supersubheading text={`3. To check Password policy Information:`} />
      <TerminalOutput content={`cat /etc/default/passwd`} />
      <Text text={`The \`/etc/default/passwd\` file contains settings related to password policies like password length and aging.`} />

      <Supersubheading text={`4. To get a copy of Password policy Information:`} />
      <TerminalOutput content={`cat /etc/opasswd`} />
      <Text text={`The \`/etc/opasswd\` file stores a backup copy of the \`/etc/passwd\` file to recover it if deleted by mistake.`} />

      <Supersubheading text={`5. To recover the shadow file:`} />
      <TerminalOutput content={`pwconv`} />
      <Text text={`The \`pwconv\` command is used to recover the \`/etc/shadow\` file if it is lost.`} />
      <Text text={`After recovering the shadow file, reset the root password with \`passwd root\` command.`} />

      <Line />
      
      {/* User Management Commands */}
      <Subheading text="Common Commands for User Management in Solaris:" />

      <Text text={`Here are some common commands for managing users in Solaris:`} />

      <Supersubheading text="1. Creating a User:" />
      <TerminalOutput content={`[root@localhost:~ ]# useradd john
[root@localhost:~ ]# grep john /etc/passwd
john:x:1001:1002::/home/john:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`useradd\` command creates a new user account. Replace \`<user_name>\` with the desired username.`} />

      <Supersubheading text="2. Creating a User with Custom Info:" />
      <TerminalOutput content={`[root@localhost:~ ]# useradd -u 1010 -g 1010 -c "new user" -m -d /home/john2 john
[root@localhost:~ ]# grep john /etc/passwd
john:x:1010:1010:new user:/home/john2:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`useradd\` command with additional options allows you to specify a custom user ID (\`-u\`), group ID (\`-g\`), comment (\`-c\`), home directory (\`-d\`), and create the user's home directory (\`-m\`).`} />

      <Supersubheading text="3. To Modify the User Name:" />
      <TerminalOutput content={`[root@localhost:~ ]# usermod -l dom john
[root@localhost:~ ]# grep dom /etc/passwd
dom:x:1010:1010:new user:/home/john2:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`usermod -l\` command changes the username of an existing account.`} />

      <Supersubheading text="4. To Modify the User ID:" />
      <TerminalOutput content={`[root@localhost:~ ]# usermod -u 1020 dom
[root@localhost:~ ]# grep dom /etc/passwd
dom:x:1020:1010:new user:/home/john2:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`usermod -u\` command allows you to modify the user ID (UID) of an existing user.`} />

      <Supersubheading text="5. To Modify the User's Group:" />
      <TerminalOutput content={`[root@localhost:~ ]# usermod -g 1020 dom
[root@localhost:~ ]# grep dom /etc/passwd
dom:x:1020:1020:new user:/home/john2:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`usermod -g\` command changes the user's primary group.`} />

      <Supersubheading text="6. To Modify the User's Comment:" />
      <TerminalOutput content={`[root@localhost:~ ]# usermod -c "updated comment" dom
[root@localhost:~ ]# grep dom /etc/passwd
dom:x:1020:1020:updated comment:/home/john2:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`usermod -c\` command allows you to modify the comment field for the user, which typically contains the user's full name.`} />

      <Supersubheading text="7. To Modify the User's Home Directory:" />
      <TerminalOutput content={`[root@localhost:~ ]# usermod -d /home/dom2 dom
[root@localhost:~ ]# grep dom /etc/passwd
dom:x:1020:1020:updated comment:/home/dom2:/bin/sh
[root@localhost:~ ]#`} />
      <Text text={`The \`usermod -d\` command changes the user's home directory.`} />

      <Supersubheading text="8. To Modify the User's Shell:" />
      <TerminalOutput content={`[root@localhost:~ ]# usermod -s /bin/bash dom
[root@localhost:~ ]# grep dom /etc/passwd
dom:x:1020:1020:updated comment:/home/dom2:/bin/bash
[root@localhost:~ ]#`} />
      <Text text={`The \`usermod -s\` command changes the user's default shell.`} />

      <Supersubheading text="9. To Delete a User without Home Directory:" />
      <TerminalOutput content={`[root@localhost:~ ]# userdel john
[root@localhost:~ ]# ls -l /home | grep john
drwxr-x--- 2 1001 1001 4096 Feb 13 04:04 john
[root@localhost:~ ]#`} />
      <Text text={`The \`userdel\` command deletes a user account but keeps the user's home directory intact.`} />

      <Supersubheading text="10. To Delete a User along with Home Directory:" />
      <TerminalOutput content={`[root@localhost:~ ]# userdel -r john
[root@localhost:~ ]# ls -l /home | grep john
[root@localhost:~ ]#`} />
      <Text text={`The \`userdel -r\` command removes both the user account and the associated home directory.`} />

      <Supersubheading text="11. To Set or Change a User's Password:" />
      <TerminalOutput content={`[root@localhost:~ ]# passwd john
New password:
Retype new password:
passwd: password updated successfully
[root@localhost:~ ]#`} />
      <Text text={`The \`passwd\` command allows you to set or change the password of a user account.`} />

      <Supersubheading text="12. To Check User's Password Status:" />
      <TerminalOutput content={`[root@localhost:~ ]# passwd -S john
john P 2025-02-13 0 99999 7 -1
[root@localhost:~ ]#`} />
      <Text text={`The \`passwd -S\` command checks the status of a user's password, such as whether it is locked or expired.`} />

      <Supersubheading text="13. To Lock a User Account:" />
      <TerminalOutput content={`[root@localhost:~ ]# passwd -l john
passwd: password changed.
[root@localhost:~ ]# passwd -S john
john L 2025-02-13 0 99999 7 -1
[root@localhost:~ ]#`} />
      <Text text={`The \`passwd -l\` command locks the specified user account, preventing the user from logging in.`} />

      <Supersubheading text="14. To Unlock a User Account:" />
      <TerminalOutput content={`[root@localhost:~ ]# passwd -u john
passwd: password changed.
[root@localhost:~ ]# passwd -S john
john P 2025-02-13 0 99999 7 -1
[root@localhost:~ ]#`} />
      <Text text={`The \`passwd -u\` command unlocks a previously locked user account.`} />

      <Supersubheading text="15. To Delete the Password of a User:" />
      <TerminalOutput content={`[root@localhost:~ ]# passwd -d john
passwd: password changed.
[root@localhost:~ ]# passwd -S john
john NP 2025-02-13 0 99999 7 -1
[root@localhost:~ ]#`} />
      <Text text={`The \`passwd -d\` command removes the password of a user, allowing login without a password (not recommended for regular use).`} />

      <Supersubheading text="16. To Get User Information:" />
      <TerminalOutput content={`[root@localhost:~ ]# id john
uid=1001(john) gid=1001(john) groups=1001(john)
[root@localhost:~ ]#`} />
      <Text text={`The \`id\` command provides information about the user, including UID, GID, and groups.`} />

      <Supersubheading text="17. To Get User Information along with Secondary Groups:" />
      <TerminalOutput content={`[root@localhost:~ ]# id -a john
uid=1001(john) gid=1001(john) groups=1001(john),10(uucp)
[root@localhost:~ ]#`} />
      <Text text={`The \`id -a\` command shows detailed user information, including all groups the user belongs to (primary and secondary).`} />

    </div>
  );
};

export default UserManagement;
