import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput, Line } from "../utils/Comps";

const UserManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-7xl lg:mx-auto'>
      <Heading text="User Management in Solaris" />
      
      <Text text="In Solaris, user management involves creating, modifying, and deleting user accounts, as well as managing user attributes." />
      
      {/* Important Files */}
      <Subheading text="Important Files in User Management:" />
      <Text text={`Here are some important files in user management:`} />
      <ul className='ml-5'>
        <li className='font-bold'>/etc/passwd</li>
        <li className='font-bold'>/etc/shadow</li>
      </ul>

      <Line />
      
      {/* Files Explanation */}
      <Text text={`1. To get All User's Information:`} />
      <TerminalOutput content={`cat /etc/passwd`} />
      <Text text={`The \`/etc/passwd\` file contains essential user information such as username, UID, GID, home directory, and shell.`} />
      
      <Text text={`2. To get All User's Information in Password encrypted form:`} />
      <TerminalOutput content={`cat /etc/shadow`} />
      <Text text={`The \`/etc/shadow\` file stores password information in an encrypted form, as well as the date of the last password change and password expiration details.`} />

      <Text text={`3. To check Password policy Information:`} />
      <TerminalOutput content={`cat /etc/default/passwd`} />
      <Text text={`The \`/etc/default/passwd\` file contains settings related to password policies like password length and aging.`} />

      <Text text={`4. To get a copy of Password policy Information:`} />
      <TerminalOutput content={`cat /etc/opasswd`} />
      <Text text={`The \`/etc/opasswd\` file stores a backup copy of the \`/etc/passwd\` file to recover it if deleted by mistake.`} />

      <Text text={`5. To recover the shadow file:`} />
      <TerminalOutput content={`pwconv`} />
      <Text text={`The \`pwconv\` command is used to recover the \`/etc/shadow\` file if it is lost.`} />
      <Text text={`After recovering the shadow file, reset the root password with \`passwd root\` command.`} />

      <Line />
      
      {/* User Management Commands */}
      <Subheading text="Common Commands for User Management in Solaris:" />

      <Text text={`Here are some common commands for managing users in Solaris:`} />

      <Supersubheading text="1. Creating a User:" />
      <TerminalOutput content={`useradd <user_name>`} />
      <Text text={`The \`useradd\` command creates a new user account. Replace \`<user_name>\` with the desired username.`} />

      <Supersubheading text="2. Creating a User with Custom Info:" />
      <TerminalOutput content={`useradd -u <UID> -g <GID> -c <comment> -m -d <home_dir> <user_name>`} />
      <Text text={`The \`useradd\` command with additional options allows you to specify a custom user ID (\`-u\`), group ID (\`-g\`), comment (\`-c\`), home directory (\`-d\`), and create the user's home directory (\`-m\`).`} />

      <Supersubheading text="3. To Modify the User Name:" />
      <TerminalOutput content={`usermod -l <new_user_name> <old_user_name>`} />
      <Text text={`The \`usermod -l\` command changes the username of an existing account.`} />

      <Supersubheading text="4. To Modify the User ID:" />
      <TerminalOutput content={`usermod -u <new_ID> <user_name>`} />
      <Text text={`The \`usermod -u\` command allows you to modify the user ID (UID) of an existing user.`} />

      <Supersubheading text="5. To Modify the User's Group:" />
      <TerminalOutput content={`usermod -g <new_GID> <user_name>`} />
      <Text text={`The \`usermod -g\` command changes the user's primary group.`} />

      <Supersubheading text="6. To Modify the User's Comment:" />
      <TerminalOutput content={`usermod -c <new_comment> <user_name>`} />
      <Text text={`The \`usermod -c\` command allows you to modify the comment field for the user, which typically contains the user's full name.`} />

      <Supersubheading text="7. To Modify the User's Home Directory:" />
      <TerminalOutput content={`usermod -d <new_dir> <user_name>`} />
      <Text text={`The \`usermod -d\` command changes the user's home directory.`} />

      <Supersubheading text="8. To Modify the User's Shell:" />
      <TerminalOutput content={`usermod -s <new_shell> <user_name>`} />
      <Text text={`The \`usermod -s\` command changes the user's default shell.`} />

      <Supersubheading text="9. To Delete a User without Home Directory:" />
      <TerminalOutput content={`userdel <user_name>`} />
      <Text text={`The \`userdel\` command deletes a user account but keeps the user's home directory intact.`} />

      <Supersubheading text="10. To Delete a User along with Home Directory:" />
      <TerminalOutput content={`userdel -r <user_name>`} />
      <Text text={`The \`userdel -r\` command removes both the user account and the associated home directory.`} />

      <Supersubheading text="11. To Set or Change a User's Password:" />
      <TerminalOutput content={`passwd <user_name>`} />
      <Text text={`The \`passwd\` command allows you to set or change the password of a user account.`} />

      <Supersubheading text="12. To Check User's Password Status:" />
      <TerminalOutput content={`passwd -s <user_name>`} />
      <Text text={`The \`passwd -s\` command checks the status of a user's password, such as whether it is locked or expired.`} />

      <Supersubheading text="13. To Lock a User Account:" />
      <TerminalOutput content={`passwd -l <user_name>`} />
      <Text text={`The \`passwd -l\` command locks the specified user account, preventing the user from logging in.`} />

      <Supersubheading text="14. To Unlock a User Account:" />
      <TerminalOutput content={`passwd -u <user_name>`} />
      <Text text={`The \`passwd -u\` command unlocks a previously locked user account.`} />

      <Supersubheading text="15. To Delete the Password of a User:" />
      <TerminalOutput content={`passwd -d <user_name>`} />
      <Text text={`The \`passwd -d\` command removes the password of a user, allowing login without a password (not recommended for regular use).`} />

      <Supersubheading text="16. To Get User Information:" />
      <TerminalOutput content={`id <user_name>`} />
      <Text text={`The \`id\` command provides information about the user, including UID, GID, and groups.`} />

      <Supersubheading text="17. To Get User Information along with Secondary Groups:" />
      <TerminalOutput content={`id -a <user_name>`} />
      <Text text={`The \`id -a\` command shows detailed user information, including all groups the user belongs to (primary and secondary).`} />

    </div>
  );
};

export default UserManagement;
