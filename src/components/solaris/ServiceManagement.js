import React from 'react';
import { Heading, Supersubheading, Text, TerminalOutput } from "../utils/Comps";

const ServiceManagement = () => {
  return (
    <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
      {/* Page Heading */}
      <Heading text="Service Management in Solaris" />

      {/* Introduction */}
      <Text text="In Solaris, service management involves the management of services, daemons, and system processes. Solaris uses the Service Management Facility (SMF) to manage system services. SMF replaces traditional init scripts and provides a more sophisticated and flexible mechanism for managing services." />
      

      {/* Command 1: To list all services */}
      
        <Supersubheading text="1. To list all services" />
        <TerminalOutput content="svcs -a" />
        <Text text="The `svcs -a` command lists all services available on the system, regardless of their current status (online, offline, or maintenance)." />
        

      {/* Command 2: To search a service using service name */}
      
        <Supersubheading text="2. To search a service using service name" />
        <TerminalOutput content="svcs -a | grep <service_name>" />
        <Text text="The `svcs -a | grep <service_name>` command filters the service list to search for a particular service by its name." />
        

      {/* Command 3: To enable a service */}
      
        <Supersubheading text="3. To enable a service" />
        <TerminalOutput content="svcs enable <service_name>" />
        <Text text="The `svcs enable <service_name>` command enables a specific service, allowing it to start automatically on boot or when required." />
        

      {/* Command 4: To disable a service */}
      
        <Supersubheading text="4. To disable a service" />
        <TerminalOutput content="svcadm disable <service_name>" />
        <Text text="The `svcadm disable <service_name>` command disables a service, preventing it from running even if it is triggered." />
        

      {/* Command 5: To refresh a service */}
      
        <Supersubheading text="5. To refresh a service" />
        <TerminalOutput content="svcadm refresh <service_name>" />
        <Text text="The `svcadm refresh <service_name>` command refreshes the state of the service, reloading its configuration and restarting it without needing a full reboot." />
        

      {/* Command 6: To restart any service */}
      
        <Supersubheading text="6. To restart any service" />
        <TerminalOutput content="svcadm restart <service_name>" />
        <Text text="The `svcadm restart <service_name>` command restarts a service. This can be useful to apply changes or resolve issues without rebooting the system." />
        

      {/* Command 7: To list down services with extended information */}
      
        <Supersubheading text="7. To list down services with extended information" />
        <TerminalOutput content="svcs -xv" />
        <Text text="The `svcs -xv` command lists all services with detailed status and troubleshooting information, including which services are in maintenance mode and why." />
        

      {/* Command 8: To clear any service from maintenance mode */}
      
        <Supersubheading text="8. To clear any service from maintenance mode" />
        <TerminalOutput content="svcadm clear <service_name>" />
        <Text text="The `svcadm clear <service_name>` command clears a service from maintenance mode and attempts to restart it. This is helpful if the service has encountered an issue and is stuck in maintenance." />
        
        </div>
  );
};

export default ServiceManagement;
