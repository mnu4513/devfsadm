import React from 'react';
import { Heading, Supersubheading, Text } from "../utils/Comps";

const ILOM = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text={`ILOM Snapshot in Solaris`} />

     
      <Text text={`ILOM (Integrated Lights Out Manager) is a service processor that provides out-of-band management and monitoring for Oracle servers. It allows administrators to manage hardware remotely, including power management, hardware diagnostics, and system health monitoring.`} />
      <Text text={`An ILOM snapshot captures the current state of the ILOM configuration and system status. It provides valuable diagnostic information to Oracle Support when troubleshooting hardware issues. By creating and sharing an ILOM snapshot, administrators can provide Oracle Support with all necessary information to identify and resolve hardware-related issues more efficiently.`} />

      <Supersubheading text={`Why take an ILOM Snapshot?`} />
      <Text text={`An ILOM snapshot is particularly useful in the following scenarios:`} />
      <ul className="list-disc ml-4">
        <li>When you experience hardware-related issues or errors and need to escalate the issue to Oracle Support.</li>
        <li>To track the configuration and status of ILOM for backup or documentation purposes.</li>
        <li>To capture a baseline configuration for future comparison in case of system changes or issues.</li>
      </ul>
      
      <Supersubheading text={`Process to Take an ILOM Snapshot`} />
      <Text text={`Follow these steps to take an ILOM snapshot from the ILOM web interface:`} />
      
      <ol className="list-decimal ml-4 mb-4">
        <li>Login to the ILOM web interface by entering the ILOM IP address in a web browser.</li>
        <li>You will be prompted to enter a valid username and password. The default username is usually `root`, and the password is the one set during system configuration.</li>
        <li>Once logged in, the ILOM web GUI (Graphical User Interface) will appear.</li>
        <li>Navigate to the `Maintenance` tab in the top menu.</li>
        <li>Under the `Maintenance` tab, look for an option to take a snapshot. This is typically labeled as `Create Snapshot` or similar.</li>
        <li>Select the option to create a snapshot and choose a location or method for downloading the snapshot file (you can save it to your local system or share it directly with Oracle Support if necessary).</li>
        <li>Click the `Run` button to initiate the snapshot creation process.</li>
        <li>The snapshot process will take a few moments. Once completed, the snapshot will be available for download and can be shared with Oracle Support for troubleshooting purposes.</li>
      </ol>

      <Text text={`Once the snapshot is created, you can share it with Oracle Support to help diagnose and resolve any hardware-related issues that may be affecting your system. The snapshot contains important diagnostic information, including hardware status, error logs, and configuration details, making it easier for Oracle Support to pinpoint the root cause of issues.`} />
      <Text text={`Note: It is always a good idea to capture a snapshot periodically or whenever changes are made to the hardware or configuration. This provides an up-to-date reference for troubleshooting in the future.`} />

      <Text text={`ILOM snapshots are invaluable in identifying hardware-level issues such as component failures, power issues, or system crashes that may be difficult to diagnose without detailed logs and configuration data.`} />
    </div>
  );
}

export default ILOM;
