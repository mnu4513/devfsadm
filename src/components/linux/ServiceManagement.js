import React from 'react';
import { Command, Heading, Subheading, Text, Note } from '../utils/Comps';

const ServiceManagement = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>
            <Heading text="Managing Services with systemctl in Linux" />

            <Subheading text="Overview" />
            <Text text="In Linux, services (also referred to as daemons or units) are background processes that perform system functions. The management of these services has evolved over time." />

            <Subheading text="Legacy System (Pre-RHEL 7)" />
            <Text text="Parent Process: init (PID: 1)" />
            <Text text="Service Management Commands: 'service' for temporary actions and 'chkconfig' for permanent actions." />

            <Subheading text="Modern System (RHEL 7 and Later)" />
            <Text text="Parent Process: systemd (PID: 1)" />
            <Text text="Service Management Command: 'systemctl' for both temporary and permanent actions." />

            <Heading text="What is systemd?" />
            <Text text="systemd is a system and service manager designed to overcome the limitations of the older init system. It starts services in parallel, reducing boot times and computational overhead, and provides a suite of features to manage services more efficiently." />

            <Heading text="Differences Between init and systemd" />

            <Subheading text="Initialization Process" />
            <Text text="init: Starts services serially, leading to longer boot times." />
            <Text text="systemd: Starts services concurrently, significantly reducing boot times." />

            <Subheading text="Service Management" />
            <Text text="init: Uses 'service' and 'chkconfig' for managing services." />
            <Text text="systemd: Uses 'systemctl' for managing both temporary and permanent actions." />

            <Subheading text="Service Configuration" />
            <Text text="init: Configured via scripts in /etc/init.d/ and /etc/rc.d/." />
            <Text text="systemd: Configured through unit files located in /etc/systemd/system/ and /lib/systemd/system/." />

            <Subheading text="Dependency Management" />
            <Text text="init: Lacks built-in dependency management." />
            <Text text="systemd: Explicitly manages dependencies to ensure services are started in the correct order." />

            <Subheading text="Resource Management" />
            <Text text="init: Limited resource management capabilities." />
            <Text text="systemd: Includes advanced features like service monitoring, logging, and resource control (via cgroups)." />

            <Subheading text="Service States" />
            <Text text="init: Service states are basic (start/stop)." />
            <Text text="systemd: Provides detailed service states, such as active, inactive, and failed." />

            <Heading text="Types of Units in systemd" />
            <Text text="Service: Regular system services (e.g., ssh, ntp)." />
            <Text text="Path: Monitors file system paths." />
            <Text text="Socket: Manages network sockets (e.g., SCSI, iSCSI)." />
            <Command command="systemctl <action> <unit_name>" />
            <Text text="Manages units by either their specific type or just their name." />

            <Heading text="Managing Services with systemctl" />

            <Subheading text="Temporary Actions" />
            <Command command="systemctl start <unit_name>" />
            <Text text="Starts a service." />
            <Command command="systemctl stop <unit_name>" />
            <Text text="Stops a service." />
            <Command command="systemctl restart <unit_name>" />
            <Text text="Restarts a service." />
            <Command command="systemctl reload <unit_name>" />
            <Text text="Reloads a service's configuration without restarting it." />
            <Command command="systemctl is-active <unit_name>" />
            <Text text="Checks if a service is active." />

            <Subheading text="Permanent Actions" />
            <Command command="systemctl enable <unit_name>" />
            <Text text="Enables a service to start at boot." />
            <Command command="systemctl disable <unit_name>" />
            <Text text="Disables a service from starting at boot." />

            <Subheading text="Checking Service Status" />
            <Command command="systemctl status <unit_name>" />
            <Text text="Displays the status of a service." />

            <Subheading text="Listing Units" />
            <Command command="systemctl list-units" />
            <Text text="Lists all active units." />
            <Command command="systemctl list-unit-files" />
            <Text text="Lists unit files with their states." />
            <Command command="systemctl list-units --failed" />
            <Text text="Lists failed units." />

            <Subheading text="Masking and Unmasking Services" />
            <Command command="systemctl mask <unit_name>" />
            <Text text="Masks a service to prevent it from being started." />
            <Command command="systemctl unmask <unit_name>" />
            <Text text="Unmasks a service to allow it to be started." />
            <Command command="systemctl list-unit-files | grep masked" />
            <Text text="Lists all masked services." />

            <Subheading text="Commands with Multiple Units" />
            <Command command="systemctl is-active <unit1> <unit2>" />
            <Text text="Checks the active status of multiple services." />
            <Command command="systemctl is-enabled <unit1> <unit2>" />
            <Text text="Checks if multiple services are enabled." />

            <Note text="Note: systemctl provides a unified interface for managing systemd units, offering flexibility and control over service management." />

        </div>
    );
};

export default ServiceManagement;
