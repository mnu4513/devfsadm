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
        <TerminalOutput content={`[root@localhost:~]# svcs -a
STATE          STIME    FMRI
legacy_run     20:17:27 lrc:/etc/rc2_d/S47pppd
legacy_run     20:17:27 lrc:/etc/rc2_d/S81dodatadm_udaplt
legacy_run     20:17:27 lrc:/etc/rc2_d/S89PRESERVE
disabled       20:17:03 svc:/network/ntp:default
disabled       20:17:06 svc:/system/install/server:default
disabled       20:17:06 svc:/system/extended-accounting:flow
disabled       20:17:06 svc:/system/extended-accounting:net
disabled       20:17:06 svc:/system/svc/global:default
disabled       20:17:15 svc:/platform/i86pc/acpihpd:default
disabled       20:17:26 svc:/application/cups/in-lpd:default
online         20:17:58 svc:/system/console-reset:default
online         20:18:51 svc:/network/ssh:default
online         20:29:21 svc:/network/rpc/bind:default
online         20:29:21 svc:/network/nfs/mapid:default
online         20:29:21 svc:/network/rpc/gss:default
online         20:29:21 svc:/system/filesystem/autofs:default
online         20:29:21 svc:/network/inetd:default
online         20:29:21 svc:/network/rpc/smserver:default
online         21:28:44 svc:/network/smtp:sendmail
online         21:29:27 svc:/network/sendmail-client:default
[root@localhost:~]#
`} />
        <Text text="The `svcs -a` command lists all services available on the system, regardless of their current status (online, offline, or maintenance)." />
        

      {/* Command 2: To search a service using service name */}
      
        <Supersubheading text="2. To search a service using service name" />
        <TerminalOutput content={`[root@localhost:~]# svcs -a | grep sendmail
online         21:28:44 svc:/network/smtp:sendmail
online         21:29:27 svc:/network/sendmail-client:default
[root@localhost:~]#
`} />
        <Text text="The `svcs -a | grep <service_name>` command filters the service list to search for a particular service by its name." />
        

      {/* Command 3: To enable a service */}
      
        <Supersubheading text="3. To enable a service" />
        <TerminalOutput content={`[root@localhost:~]# svcadm enable svc:/network/smtp:sendmail
[root@localhost:~]# svcs -a | grep sendmail
online         21:42:41 svc:/network/smtp:sendmail
[root@localhost:~]#
`}/>
        <Text text="The `svcs enable <service_name>` command enables a specific service, allowing it to start automatically on boot or when required." />
        

      {/* Command 4: To disable a service */}
      
        <Supersubheading text="4. To disable a service" />
        <TerminalOutput content={`[root@localhost:~]# svcadm disable svc:/network/smtp:sendmail
[root@localhost:~]# svcs -a | grep sendmail
disabled       21:41:56 svc:/network/smtp:sendmail
[root@localhost:~]#
`} />
        <Text text="The `svcadm disable <service_name>` command disables a service, preventing it from running even if it is triggered." />
        

      {/* Command 5: To refresh a service */}
      
        <Supersubheading text="5. To refresh a service" />
        <TerminalOutput content={`[root@localhost:~]# svcadm refresh svc:/network/smtp:sendmail
[root@localhost:~]#`}/>
        <Text text="The `svcadm refresh <service_name>` command refreshes the state of the service, reloading its configuration and restarting it without needing a full reboot." />
        

      {/* Command 6: To restart any service */}
      
        <Supersubheading text="6. To restart any service" />
        <TerminalOutput content={`[root@localhost:~]# svcadm restart svc:/network/smtp:sendmail
[root@localhost:~]#`}/>
        <Text text="The `svcadm restart <service_name>` command restarts a service. This can be useful to apply changes or resolve issues without rebooting the system." />
        

      {/* Command 7: To list down services with extended information */}
      
        <Supersubheading text="7. To list down services with extended information" />
        <TerminalOutput content={`[root@localhost:~]# svcs -xv
svc:/network/nfs/nlockmgr:default (NFS lock manager)
 State: disabled since February 17, 2025 12:00:21 PM UTC
Reason: Disabled by an administrator.
   See: http://support.oracle.com/msg/SMF-8000-05
   See: man -M /usr/share/man -s 1M lockd
   See: /var/svc/log/network-nfs-nlockmgr:default.log
Impact: 2 dependent services are not running:
        svc:/network/nfs/client:default
        svc:/network/nfs/server:default
[root@localhost:~]#`}/>
        <Text text="The `svcs -xv` command lists all services with detailed status and troubleshooting information, including which services are in maintenance mode and why." />
        

      {/* Command 8: To clear any service from maintenance mode */}
      
        <Supersubheading text="8. To clear any service from maintenance mode" />
        <TerminalOutput content={`[root@localhost:~]# svcadm clear svc:/network/smtp:sendmail
svcadm: Instance "svc:/network/smtp:sendmail" is not in a maintenance or degraded state.
[root@localhost:~]#
`} />
        <Text text="The `svcadm clear <service_name>` command clears a service from maintenance mode and attempts to restart it. This is helpful if the service has encountered an issue and is stuck in maintenance." />
        
        </div>
  );
};

export default ServiceManagement;