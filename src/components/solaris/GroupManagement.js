import React from 'react';
import { Heading, Subheading, Supersubheading, Text, TerminalOutput } from '../utils/Comps';

const GroupManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      <Heading text={`Group Management in Solaris`} />
      <Text text={`In Solaris, group management is an essential part of system administration. It is handled by several commands related to user and group administration, which allow you to create, modify, delete, and view groups on the system. Understanding group management commands is crucial for ensuring that users are grouped appropriately for resource access and permissions.`} />
      <Text text={`The primary commands for managing groups in Solaris are \`groupadd\`, \`groupmod\`, and \`groupdel\`. These commands allow administrators to manage groups in various ways, ensuring that the system is organized and secure.`} />

      <Subheading text={`Common Group Management Commands:`} />

      <Supersubheading text={`1. Creating a Group:`} />
      <Text text={`The \`groupadd\` command is used to create a new group. Once a group is created, it is listed in the \`/etc/group\` file, which stores all the groups on the system.`} />
      <TerminalOutput content={`[root@localhost ~]# groupadd new_group
[root@localhost ~]# grep new_group /etc/group
new_group:x:1001:
[root@localhost ~]#`} />
      <Text text={`In the above example, the group \`new_group\` was successfully created. The \`grep\` command shows that it now exists in the \`/etc/group\` file with a unique Group ID (GID) of 1001.`} />

      <Supersubheading text={`2. Creating a Group with Custom Group ID:`} />
      <Text text={`You can also specify a custom Group ID (GID) when creating a group using the \`-g\` option with the \`groupadd\` command. This is useful if you want to assign specific GIDs to different groups.`} />
      <TerminalOutput content={`[root@localhost ~]# groupadd -g 1119 group2
[root@localhost ~]# grep group2 /etc/group
group2:x:1119:
[root@localhost ~]#`} />
      <Text text={`In this example, the group \`group2\` is created with a custom GID of 1119. The \`grep\` command verifies that the new group is listed with the assigned GID in the \`/etc/group\` file.`} />

      <Supersubheading text={`3. Changing the Group Name:`} />
      <Text text={`The \`groupmod\` command allows you to modify existing groups. The \`-n\` option lets you change the name of an existing group.`} />
      <TerminalOutput content={`[root@localhost ~]# groupmod -n group4 group2
[root@localhost ~]# grep group2 /etc/group
[root@localhost ~]# grep group4 /etc/group
group4:x:1119:
[root@localhost ~]#`} />
      <Text text={`In this example, the group name \`group2\` was changed to \`group4\`. The \`grep\` command confirms that the old group name \`group2\` no longer exists and the new group name \`group4\` has been updated in the \`/etc/group\` file.`} />

      <Supersubheading text={`4. Changing the Group ID:`} />
      <Text text={`The \`groupmod\` command also allows you to change the Group ID (GID) of an existing group using the \`-g\` option.`} />
      <TerminalOutput content={`[root@localhost ~]# groupmod -g 1120 group4
[root@localhost ~]# grep group4 /etc/group
group4:x:1120:
[root@localhost ~]#`} />
      <Text text={`Here, the GID of the \`group4\` group was changed from 1119 to 1120. The \`grep\` command confirms the updated GID in the \`/etc/group\` file.`} />

      <Supersubheading text={`5. Deleting a Group:`} />
      <Text text={`To remove a group, you can use the \`groupdel\` command. This deletes the group from the system, and it will no longer appear in the \`/etc/group\` file.`} />
      <TerminalOutput content={`[root@localhost ~]# groupdel group4
[root@localhost ~]# grep group4 /etc/group
[root@localhost ~]#`} />
      <Text text={`The group \`group4\` was successfully deleted from the system. As shown by the \`grep\` command, the group is no longer present in the \`/etc/group\` file.`} />

      <Supersubheading text={`6. Getting Details About All Groups:`} />
      <Text text={`To view all groups on the system, the \`cat /etc/group\` command can be used. This will display the contents of the \`/etc/group\` file, which lists all groups, their GIDs, and members.`} />
      <TerminalOutput content={`[root@localhost ~]# cat /etc/group
root:x:0:
daemon:x:1:
bin:x:2:
sys:x:3:
adm:x:4:syslog,test
tty:x:5:
disk:x:6:
lp:x:7:
messagebus:x:101:
syslog:x:102:
systemd-resolve:x:991:
uuidd:x:103:
_ssh:x:104:
landscape:x:105:
polkitd:x:990:
admin:x:106:
netdev:x:107:test
test:x:1000:
docker:x:989:root
rdma:x:108:
new_group:x:1001:
[root@localhost ~]#`} />
      <Text text={`The \`cat /etc/group\` command displays all groups on the system, including \`new_group\`, which was created earlier, as well as other system groups such as \`root\`, \`daemon\`, and \`admin\`. Each group has an associated GID and members listed. Groups that are not directly associated with users (such as \`root\`) manage system-level permissions.`} />
    </div>
  );
};

export default GroupManagement;
