import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from '../utils/Comps';

const ZfsSnapshot = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`ZFS Snapshot`} />

      {/* Introduction */}
      <Text text={`ZFS snapshots are a powerful feature that allows you to create read-only, point-in-time copies of your datasets or volumes. These snapshots are fast, space-efficient, and can be used to create backups, rollbacks, or replicate data across systems. They do not require duplication of the original data but instead track changes to the dataset.`} />

      <Text text={`In this guide, we will explore various ZFS snapshot commands, including how to list, create, roll back, destroy, and send/receive snapshots. ZFS snapshots are a critical part of ZFS-based systems for backup and disaster recovery.`} />

      {/* List available snapshots */}
      <Supersubheading text={`List available snapshots`} />
      <Text text={`To list all available ZFS snapshots, you can use the 'zfs list -t snapshot' command. This command displays the available snapshots along with their size, used space, and the parent dataset.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs list -t snapshot
NAME                             USED  AVAIL  REFER  MOUNTPOINT
pool2/child1@snapshot1              0      -    32K  -
rpool/ROOT/solaris@install      58.3M      -  2.67G  -
rpool/ROOT/solaris/var@install  2.10M      -   220M  -
[root@localhost:~]#`} />
      <Text text={`In this output, we can see snapshots such as pool2/child1@snapshot1, rpool/ROOT/solaris@install, and rpool/ROOT/solaris/var@install, each showing the space they occupy and their parent datasets.`} />

      {/* Create a ZFS snapshot */}
      <Supersubheading text={`Create a ZFS snapshot`} />
      <Text text={`Creating a snapshot in ZFS is done using the 'zfs snapshot' command, followed by the dataset name and snapshot name. This snapshot is read-only and doesn't occupy additional space until changes occur to the dataset.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs snapshot pool2/child1@snapshot1
[root@localhost:~]#`} />
      <Text text={`The snapshot 'pool2/child1@snapshot1' is now created. The dataset 'pool2/child1' is not changed, and the snapshot can be used for backup or restore operations.`} />

      {/* Create a recursive ZFS snapshot */}
      <Supersubheading text={`Create a recursive ZFS snapshot`} />
      <Text text={`To create a snapshot recursively, which includes all child datasets of the given parent dataset, use the '-r' option. This ensures all datasets and volumes under the specified dataset are snapshotted.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs snapshot -r pool2/child1@snapshot1
[root@localhost:~]#`} />
      <Text text={`The command creates a snapshot not only for 'pool2/child1' but also for all of its child datasets. This is useful when you want to capture the state of a complete hierarchy of datasets.`} />

      {/* Rollback a ZFS snapshot */}
      <Supersubheading text={`Rollback a ZFS snapshot`} />
      <Text text={`Rolling back a snapshot will revert the dataset to the state it was in when the snapshot was taken. Any changes made after the snapshot are lost.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs rollback pool2/child1@snapshot1
[root@localhost:~]#`} />
      <Text text={`The dataset 'pool2/child1' has now been reverted to the state it was in when 'snapshot1' was created.`} />

      {/* Destroy a ZFS snapshot */}
      <Supersubheading text={`Destroy a ZFS snapshot`} />
      <Text text={`To delete a snapshot that is no longer needed, use the 'zfs destroy' command. This command removes the snapshot and frees up space. Be cautious, as this action cannot be undone.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs destroy pool2/child1@snapshot1
[root@localhost:~]#`} />
      <Text text={`The snapshot 'pool2/child1@snapshot1' has been successfully destroyed.`} />

      {/* Destroy a recursive ZFS snapshot */}
      <Supersubheading text={`Destroy a recursive ZFS snapshot`} />
      <Text text={`To destroy a snapshot and its child snapshots recursively, use the '-r' option. This ensures that all related snapshots are removed from the parent dataset as well.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs destroy -r pool2/child1@snapshot1
[root@localhost:~]#`} />
      <Text text={`The snapshot 'pool2/child1@snapshot1' and all its recursive snapshots have been deleted.`} />

      {/* Send a ZFS snapshot to a different location */}
      <Supersubheading text={`Send a ZFS snapshot to a different location`} />
      <Text text={`The 'zfs send' command allows you to send a snapshot to a different system or storage location. This is useful for replication and backups. Use the '-R' option for recursive snapshots and '-v' for verbose output.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs send -v pool2/child1@snapshot1 > /tmp/snapshot1.bz2
[root@localhost:~]#`} />
      <Text text={`This command sends the 'pool2/child1@snapshot1' snapshot to a file ('/tmp/snapshot1.bz2'). You could also pipe this to a remote server using SSH or another method for offsite backup.`} />

      {/* Receive a ZFS snapshot from a different location */}
      <Supersubheading text={`Receive a ZFS snapshot from a different location`} />
      <Text text={`To receive a ZFS snapshot from another system or storage location, use the 'zfs receive' command. The '-F' flag forces the operation to overwrite any existing data if necessary.`} />
      <TerminalOutput content={`[root@localhost:~]# zfs receive -F pool2/child1 < /tmp/snapshot1.bz2
[root@localhost:~]#`} />
      <Text text={`This command receives the snapshot from the file '/tmp/snapshot1.bz2' and applies it to the dataset 'pool2/child1'. The '-F' option ensures that it overwrites any existing data in the dataset.`} />

    </div>
  );
};

export default ZfsSnapshot;