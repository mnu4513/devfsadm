import React from 'react';
import { Heading, Supersubheading, TerminalOutput, Text } from '../utils/Comps';

const QuotaReservation = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`ZFS Quota and Reservation`} />

      {/* Introduction */}
      <Text text={`In a very simple term, a quota is the maximum size that can be used by a file system. If there is free space available in a file system, sibling or parent file systems can use that space as well. However, the quota ensures that no single file system exceeds its allocated size.`} />
      
      <Text text={`A reservation is the reserved space specifically allocated to a file system. Even though the file system can use space from its parent or sibling file systems when it runs out of space, its reserved space cannot be utilized by any other file system. Reservations guarantee a specific amount of space to a file system.`} />

      {/* Command 1: To check quota details for a file system */}
      <Supersubheading text={`1. To check quota details for a file system`} />
      <TerminalOutput content={`[root@localhost:~]# zfs get quota pool2/child1
NAME                PROPERTY    VALUE   SOURCE
pool2/child1        quota       none    default
[root@localhost:~]#`} />
      <Text text={`The command 'zfs get quota' displays the current quota configuration of the specified file system (in this case, 'pool2/child1'). If the value is 'none', it means no quota has been set for that file system.`} />

      {/* Command 2: To set quota for a file system */}
      <Supersubheading text={`2. To set quota for a file system`} />
      <TerminalOutput content={`[root@localhost:~]# zfs set quota=200M pool2/child1
[root@localhost:~]# zfs get quota pool2/child1
NAME                PROPERTY    VALUE   SOURCE
pool2/child1        quota       200M    default
[root@localhost:~]#`} />
      <Text text={`The command 'zfs set quota=200M' sets a quota of 200MB for the file system 'pool2/child1'. After applying this, the 'zfs get quota' command confirms the newly set quota value.`} />

      {/* Command 3: To unset the quota for a file system */}
      <Supersubheading text={`3. To unset the quota for a file system`} />
      <TerminalOutput content={`[root@localhost:~]# zfs set quota=none pool2/child1
[root@localhost:~]# zfs get quota pool2/child1
NAME                PROPERTY    VALUE   SOURCE
pool2/child1        quota       none    default
[root@localhost:~]#`} />
      <Text text={`The command 'zfs set quota=none' removes the quota from the file system 'pool2/child1'. After executing the command, the quota is no longer applied, and the file system can utilize the available space freely.`} />

      {/* Command 4: To check reservation details for a file system */}
      <Supersubheading text={`4. To check reservation details for a file system`} />
      <TerminalOutput content={`[root@localhost:~]# zfs get reservation pool2/child1
NAME                PROPERTY        VALUE   SOURCE
pool2/child1        reservation    none    default
[root@localhost:~]#`} />
      <Text text={`The command 'zfs get reservation' shows the current reservation configuration of the file system. If the value is 'none', no reservation has been set for the file system.`} />

      {/* Command 5: To set the reservation value for a file system */}
      <Supersubheading text={`5. To set the reservation value for a file system`} />
      <TerminalOutput content={`[root@localhost:~]# zfs set reservation=200M pool2/child1
[root@localhost:~]# zfs get reservation pool2/child1
NAME                PROPERTY        VALUE   SOURCE
pool2/child1        reservation    200M    default
[root@localhost:~]#`} />
      <Text text={`The command 'zfs set reservation=200M' reserves 200MB of space exclusively for the file system 'pool2/child1'. This guarantees that the file system will always have this amount of space, even if other file systems on the same pool need space.`} />

      {/* Command 6: To unset the reservation for a file system */}
      <Supersubheading text={`6. To unset the reservation for a file system`} />
      <TerminalOutput content={`[root@localhost:~]# zfs set reservation=none pool2/child1
[root@localhost:~]# zfs get reservation pool2/child1
NAME                PROPERTY        VALUE   SOURCE
pool2/child1        reservation    none    default
[root@localhost:~]#`} />
      <Text text={`The command 'zfs set reservation=none' removes the reservation from the file system 'pool2/child1'. After executing this, the system will no longer guarantee reserved space, and the file system can use space from its siblings or parent if needed.`} />

    </div>
  );
};

export default QuotaReservation;
