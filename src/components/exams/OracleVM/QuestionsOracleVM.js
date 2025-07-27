const list = [
{
  "id": 1,
  "question": [
    {
      "type": "text",
      "value": "Which three statements describe the benefits and challenges of having multiple storage repositories on separate storage devices?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Both repositories must be of the same type (NFS, iSCSI, or fibre channel)."
    },
    {
      "type": "text",
      "value": "You must allow Oracle to decide where to place guests and virtual disks."
    },
    {
      "type": "text",
      "value": "The second repository will become a mirror of the first."
    },
    {
      "type": "text",
      "value": "There is a chance that space will be over-allocated resulting in wasted space."
    },
    {
      "type": "text",
      "value": "I/O may be distributed across the repositories, potentially providing better performance."
    },
    {
      "type": "text",
      "value": "Multiple repositories can reduce the overall impact of a storage device malfunction."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "There is a chance that space will be over-allocated resulting in wasted space."
    },
    {
      "type": "text",
      "value": "I/O may be distributed across the repositories, potentially providing better performance."
    },
    {
      "type": "text",
      "value": "Multiple repositories can reduce the overall impact of a storage device malfunction."
    }
  ]
}, {
  "id": 2,
  "question": [
    {
      "type": "text",
      "value": "The server hosting the Oracle VM Manager Database Repository has an unscheduled outage.\n\nWhat are two consequences of this outage?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Virtual machines will continue to run, but they will have limited network access until the Repository is restored to service."
    },
    {
      "type": "text",
      "value": "Certain management functions, including template management and VNIC management, may be extremely difficult or impossible to perform."
    },
    {
      "type": "text",
      "value": "Virtual machines will be automatically suspended until the Repository is restored to service."
    },
    {
      "type": "text",
      "value": "The Database Repository should be restored to service as soon as possible, because degradation in the performance and availability of the Oracle VM servers and their guest virtual machines will begin to occur."
    },
    {
      "type": "text",
      "value": "Virtual machines will continue to run, but they cannot be stopped."
    },
    {
      "type": "text",
      "value": "Virtual machines will continue to run, but the Oracle VM Manager will not be functional until the Manager Repository is restored to service."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Certain management functions, including template management and VNIC management, may be extremely difficult or impossible to perform."
    },
    {
      "type": "text",
      "value": "Virtual machines will continue to run, but the Oracle VM Manager will not be functional until the Manager Repository is restored to service."
    }
  ]
}, {
  "id": 3,
  "question": [
    {
      "type": "text",
      "value": "Which driver does a PVM or PVHVM guest use to send block I/O requests to dom0?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "blockfront"
    },
    {
      "type": "text",
      "value": "QEMU driver"
    },
    {
      "type": "text",
      "value": "netfront"
    },
    {
      "type": "text",
      "value": "netbk"
    },
    {
      "type": "text",
      "value": "blockbk"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "blockfront"
    }
  ]
}, {
  "id": 4,
  "question": [
    {
      "type": "text",
      "value": "Which network driver would a hardware virtualized Windows guest, with the paravirtual drivers installed, use?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "netbk"
    },
    {
      "type": "text",
      "value": "blkfront"
    },
    {
      "type": "text",
      "value": "netfront"
    },
    {
      "type": "text",
      "value": "blobk"
    },
    {
      "type": "text",
      "value": "QEMU"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "netfront"
    }
  ]
}, {
  "id": 5,
  "question": [
    {
      "type": "text",
      "value": "You are building new VM templates to distribute application software for installation into Oracle VM environments.\n\nWhich virtualization mode will deliver the best performance on server systems that include hardware virtualization support?"
    }
  ],
  "options": [
    { "type": "text", "value": "Hardware virtualization with paravirtualized drivers (Xen PVHVM)" },
    { "type": "text", "value": "Hypervirtualization" },
    { "type": "text", "value": "OVM Dynamic Virtualization (ODV)" },
    { "type": "text", "value": "Hardware virtualization (Xen HVM)" },
    { "type": "text", "value": "Implementation on physical hardware, virtualized using the P2V utilities" }
  ],
  "answer": [
    { "type": "text", "value": "Hardware virtualization with paravirtualized drivers (Xen PVHVM)" }
  ]
}, {
  "id": 6,
  "question": [
    {
      "type": "text",
      "value": "Which three of the given virtualization technologies are type 1 (bare metal) hypervisor-based?"
    }
  ],
  "options": [
    { "type": "text", "value": "Xen" },
    { "type": "text", "value": "VMware ESXi" },
    { "type": "text", "value": "Solaris Zones" },
    { "type": "text", "value": "Oracle VM VirtualBox" },
    { "type": "text", "value": "VMware Player" },
    { "type": "text", "value": "Oracle VM" }
  ],
  "answer": [
    { "type": "text", "value": "Xen" },
    { "type": "text", "value": "VMware ESXi" },
    { "type": "text", "value": "Oracle VM" }
  ]
}, {
  "id": 7,
  "question": [
    {
      "type": "text",
      "value": "A server pool consists of Oracle VM servers, each with a pair of 4-port 1 GB ethernet interfaces and a pair of 4-port 10 GB ethernet interfaces, for a total of 16 ports. See the exhibit for an illustration of the port and bonding configuration.\n\nThe ports currently are bonded active-backup across interfaces to provide two 1 GB bonds (Bond 1 and Bond 2) and two 10 GB bonds (Bond 3 and Bond 4). Bond 2, which services virtual machine network traffic, is fully saturated during peak loads.\n\nHow can the capacity and throughput of Bond 2 be increased without affecting any of the other network bonds?"
    }
  ],
  "options": [
    { "type": "text", "value": "Change the bonding type of Bond 2 from active-backup to load-balanced." },
    { "type": "text", "value": "Add two more ports from the 1 GB interfaces to Bond 2." },
    { "type": "text", "value": "Add the remaining four ports from the 1 GB interfaces to Bond 2." },
    { "type": "text", "value": "Add two ports from the 10 GB interfaces to the existing definition of Bond 2." },
    { "type": "text", "value": "Redefine Bond 2 so that it utilizes two ports on the 10 GB interfaces instead of the 1 GB interfaces." }
  ],
  "answer": [
    { "type": "text", "value": "Change the bonding type of Bond 2 from active-backup to load-balanced." }
  ]
}, {
  "id": 8,
  "question": [
    {
      "type": "text",
      "value": "An Oracle VM Server system has three networks defined: VM Public Network, VM Private Network, and VM Private Network 2. During the import of a template from another system, you observe the display shown in the exhibit.\n\nWhat are xenbr3 and xenbr2, and what should you do with them to deploy the template properly?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "They are network bridge definitions from an earlier Oracle VM release that generated the template. To avoid problems, press the Back button and delete the network bridge definitions from the template."
    },
    {
      "type": "text",
      "value": "They are network definitions from the system on which the template was created. Move them to the left-hand panel with the << button and then move VM Public Network and VM Private Network into the right-hand panel by selecting each one and pressing the > button."
    },
    {
      "type": "text",
      "value": "They are erroneous network definitions that were brought in with the template. Press the Cancel button and request a corrected template."
    },
    {
      "type": "text",
      "value": "They are aliases for VM Public Network and VM Private Network, respectively. Those are the networks required, so simply click the Next button."
    },
    {
      "type": "text",
      "value": "They are network definitions from an Oracle VM 2 system. They will be ignored by Oracle VM 3, so simply move VM Public Network and VM Private Network into the right-hand panel below xenbr3 and xenbr2, by selecting each one and pressing the > button."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "They are network definitions from the system on which the template was created. Move them to the left-hand panel with the << button and then move VM Public Network and VM Private Network into the right-hand panel by selecting each one and pressing the > button."
    }
  ]
}, {
  "id": 9,
  "question": [
    {
      "type": "text",
      "value": "You have just finished successfully upgrading an Oracle VM server from the VM Manager GUI. When attempting to migrate some of your VMs back to the upgraded server it does not appear in the list of available servers.\n\nWhat is the most likely reason?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "You must update all VMs to re-authorize the upgraded server so that it has permission to run the VMs."
    },
    {
      "type": "text",
      "value": "There is another update available and it should be applied before you can migrate your VMs."
    },
    {
      "type": "text",
      "value": "The server must be moved back into the same server pool as it was prior to the upgrade."
    },
    {
      "type": "text",
      "value": "The server must be taken out of maintenance mode before you can migrate any VMs back to it."
    },
    {
      "type": "text",
      "value": "All other servers in the environment must be upgraded before the VMs can migrated to the updated server."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The server must be taken out of maintenance mode before you can migrate any VMs back to it."
    }
  ]
}, {
  "id": 10,
  "question": [
    {
      "type": "text",
      "value": "Which statement is true regarding setting up a YUM repository from Oracle VM Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "After configuring a YUM repository you must manually copy the configuration to all servers that will use it."
    },
    {
      "type": "text",
      "value": "A YUM repository, once configured, cannot be changed."
    },
    {
      "type": "text",
      "value": "You may set up multiple YUM repositories per server pool, provided only one is assigned to each Oracle VM server."
    },
    {
      "type": "text",
      "value": "Once a YUM repository is configured, Oracle VM Manager automatically distributes the configuration file to all Oracle VM servers."
    },
    {
      "type": "text",
      "value": "Prior to setting up a YUM repository, you must ensure that all Oracle VM servers have the latest patch sets."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Once a YUM repository is configured, Oracle VM Manager automatically distributes the configuration file to all Oracle VM servers."
    }
  ]
}, {
  "id": 11,
  "question": [
    {
      "type": "text",
      "value": "On each Oracle VM server in your environment you have two bonded networks. The first network is used for Server Management, Cluster Heartbeat, and Live Migration, and you have fibre channel storage for your repository.\n\nIn order to run your development, test, and production VMs/networks as securely as possible on the second network, without losing redundancy, which option would you implement?"
    }
  ],
  "options": [
    { "type": "text", "value": "Create a logical network on a single server." },
    { "type": "text", "value": "Create a hybrid network with bonds/ports and VLANs." },
    { "type": "text", "value": "Create a network with VLANs only." },
    { "type": "text", "value": "Split the bond into two separate LANs." },
    { "type": "text", "value": "Create a network with bonds/ports only." }
  ],
  "answer": [
    { "type": "text", "value": "Create a hybrid network with bonds/ports and VLANs." }
  ]
}, {
  "id": 12,
  "question": [
    {
      "type": "text",
      "value": "Which four commands could you include in a health check script that confirms the operation of critical services on an Oracle VM Server using SAN storage?"
    }
  ],
  "options": [
    { "type": "text", "value": "service ovm-consoled status" },
    { "type": "text", "value": "service xend status" },
    { "type": "text", "value": "service ovs-agent status" },
    { "type": "text", "value": "service o2cb status" },
    { "type": "text", "value": "service esx status" },
    { "type": "text", "value": "service oc4j status" }
  ],
  "answer": [
    { "type": "text", "value": "service ovm-consoled status" },
    { "type": "text", "value": "service xend status" },
    { "type": "text", "value": "service ovs-agent status" },
    { "type": "text", "value": "service o2cb status" }
  ]
}, {
  "id": 13,
  "question": [
    {
      "type": "text",
      "value": "Which three situations might result in a total outage of all five servers and their guests in an Oracle VM cluster using an iSCSI Storage Attached Network?"
    }
  ],
  "options": [
    { "type": "text", "value": "A storage repository in the Server Pool is deleted using the Oracle VM Manager." },
    { "type": "text", "value": "A storage repository in the Server Pool is deleted using the command line on one of the servers." },
    { "type": "text", "value": "The Oracle VM Manager Database Repository crashes." },
    { "type": "text", "value": "The only network switch connecting the storage network fails." },
    { "type": "text", "value": "The Server Pool Master agent crashes." },
    { "type": "text", "value": "The Server Pool File System is corrupted." }
  ],
  "answer": [
    { "type": "text", "value": "A storage repository in the Server Pool is deleted using the command line on one of the servers." },
    { "type": "text", "value": "The only network switch connecting the storage network fails." },
    { "type": "text", "value": "The Server Pool File System is corrupted." }
  ]
}, {
  "id": 14,
  "question": [
    {
      "type": "text",
      "value": "Which three statements about the Oracle VM Agent Architecture are accurate?"
    }
  ],
  "options": [
    { "type": "text", "value": "The Oracle VM Manager is capable of communicating with multiple Server Pool Master Servers." },
    { "type": "text", "value": "Multiple Server Pool Master Servers should be running, one active and one standby, in each server pool to provide redundancy and fault tolerance." },
    { "type": "text", "value": "You can specify, using the Oracle VM Manager, which Oracle VM Server system is the Server Pool Master Server." },
    { "type": "text", "value": "All communication from one agent to another agent within a server pool is routed through the Oracle VM Manager." },
    { "type": "text", "value": "The Oracle VM Manager always uses ssh commands directly to Domain 0 on each Oracle VM server when the server agents do not respond." },
    { "type": "text", "value": "The Oracle VM agents are daemon processes that are automatically initiated when an Oracle VM server is booted." }
  ],
  "answer": [
    { "type": "text", "value": "The Oracle VM Manager is capable of communicating with multiple Server Pool Master Servers." },
    { "type": "text", "value": "You can specify, using the Oracle VM Manager, which Oracle VM Server system is the Server Pool Master Server." },
    { "type": "text", "value": "The Oracle VM agents are daemon processes that are automatically initiated when an Oracle VM server is booted." }
  ]
}, {
  "id": 15,
  "question": [
    {
      "type": "text",
      "value": "Examine the exhibit.\n\nImport Template\nRepository: /MyStoragerepository1\nServer: MyServer1\nTemplate URL: http://server1.com/templates/OVM_OL_5\nOVM_OL01A_XML_PVML_10GB.tgz\n\nWhat is the role of the second item (Server: MyServer1) in this scenario, where a template is being imported into a storage repository?"
    }
  ],
  "options": [
    { "type": "text", "value": "It identifies a server with sufficient local disk to store the template content temporarily." },
    { "type": "text", "value": "It identifies the virtual machine server that will be used to clone the imported template." },
    { "type": "text", "value": "It identifies the server pool master, so that the template will be in the proper server pool." },
    { "type": "text", "value": "It identifies the storage server where the template exists." },
    { "type": "text", "value": "It identifies the Oracle VM server assigned to the target repository that will extract the template content and transfer it into the designated storage repository." },
    { "type": "text", "value": "It identifies the default virtual machine server for virtual machines created from the template." }
  ],
  "answer": [
    { "type": "text", "value": "It identifies the Oracle VM server assigned to the target repository that will extract the template content and transfer it into the designated storage repository." }
  ]
}, {
  "id": 16,
  "question": [
    {
      "type": "text",
      "value": "While trying to create a new virtual machine you are receiving an error from Oracle VM Manager.\n\nWhat log file does the Manager write to?"
    }
  ],
  "options": [
    { "type": "text", "value": "Error.log in Oracle VM Manager's bin directory" },
    { "type": "text", "value": "Diagnostics.log in the WebLogic server's logs directory" },
    { "type": "text", "value": "AdminServer.log in the WebLogic server's logs directory" },
    { "type": "text", "value": "server.log in the system's log directory" },
    { "type": "text", "value": "Admin.log in the Xen log directory" }
  ],
  "answer": [
    { "type": "text", "value": "AdminServer.log in the WebLogic server's logs directory" }
  ]
}, {
  "id": 17,
  "question": [
    {
      "type": "text",
      "value": "Oracle VM Manager is showing that server ovs1 is currently offline. You are able to ping ovs1 and log in to ovs1 via ssh, and you have verified that the server has been up for 42 days.\n\nWhat is the most likely problem?"
    }
  ],
  "options": [
    { "type": "text", "value": "The ocfs2 service is down or has failed." },
    { "type": "text", "value": "The ovs-devmon service is down or has failed." },
    { "type": "text", "value": "The ovmwatch service is down or has failed." },
    { "type": "text", "value": "The ovm-consoled service is down or has failed." },
    { "type": "text", "value": "The ovs-agent service is down or has failed." }
  ],
  "answer": [
    { "type": "text", "value": "The ovs-agent service is down or has failed." }
  ]
}, {
  "id": 18,
  "question": [
    {
      "type": "text",
      "value": "What is the purpose of having a separate Storage network?"
    }
  ],
  "options": [
    { "type": "text", "value": "It defines a single network to transmit all types of disk I/O." },
    { "type": "text", "value": "It separates NFS traffic from iSCSI traffic when you have multiple storage repositories." },
    { "type": "text", "value": "It allows Oracle VM Manager to access and manage all network storage arrays." },
    { "type": "text", "value": "It separates virtual disk I/O from other, latency-sensitive network traffic." },
    { "type": "text", "value": "It allows for the separation of fibre channel SAN traffic from the management network." }
  ],
  "answer": [
    { "type": "text", "value": "It separates virtual disk I/O from other, latency-sensitive network traffic." }
  ]
}, {
  "id": 19,
  "question": [
    {
      "type": "text",
      "value": "You are troubleshooting Fibre Channel LUN issues on an Oracle VM Server. Four LUNs are not present on the server and are not discovered when you rescan them using the Oracle VM Manager.\n\nWhich three commands, executed directly on the Oracle VM Server system, provide information that might be useful to diagnose this issue?"
    }
  ],
  "options": [
    { "type": "text", "value": "xm luninfo" },
    { "type": "text", "value": "ls -al /dev/disk/by-uuid" },
    { "type": "text", "value": "cat /proc/partitions" },
    { "type": "text", "value": "mount" },
    { "type": "text", "value": "pvdisplay" },
    { "type": "text", "value": "multipath -ll" }
  ],
  "answer": [
    { "type": "text", "value": "ls -al /dev/disk/by-uuid" },
    { "type": "text", "value": "cat /proc/partitions" },
    { "type": "text", "value": "multipath -ll" }
  ]
}, {
  "id": 20,
  "question": [
    {
      "type": "text",
      "value": "Which four items can be configured from Oracle VM Manager during the creation of a virtual machine?"
    }
  ],
  "options": [
    { "type": "text", "value": "Physical Disks" },
    { "type": "text", "value": "Network Adaptors" },
    { "type": "text", "value": "Non-shareable Virtual Disks" },
    { "type": "text", "value": "Shareable Virtual Disks" },
    { "type": "text", "value": "The VNC port for the virtual console." }
  ],
  "answer": [
    { "type": "text", "value": "Network Adaptors" },
    { "type": "text", "value": "Non-shareable Virtual Disks" },
    { "type": "text", "value": "Shareable Virtual Disks" },
    { "type": "text", "value": "The VNC port for the virtual console." }
  ]
}, {
  "id": 21,
  "question": [
    {
      "type": "text",
      "value": "In your Oracle VM environment you have two shared repositories. The first is an NFS repository named NFS1, and the second is an iSCSI repository named ISCSI2.\n\nBy default, where will your Oracle VM Servers mount these repositories?"
    }
  ],
  "options": [
    { "type": "text", "value": "1)/poolfsmnt/NFS1\n2)/poolfsmnt/ISCSI2" },
    { "type": "text", "value": "1)/var/ovs/mount/NFS1\n2)/var/ovs/mount/ISCSI2" },
    { "type": "text", "value": "1)/OVS/Repositories/NFS1\n2)/OVS/Repositories/ISCSI2" },
    { "type": "text", "value": "1)/OVS/Repositories/NFS/NFS1\n2)/OVS/Repositories/iSCSI/ISCS12" },
    { "type": "text", "value": "1)/usr/share/OVS/NFS1\n2)/usr/share/OVS/NFS2" }
  ],
  "answer": [
    { "type": "text", "value": "1)/OVS/Repositories/NFS1\n2)/OVS/Repositories/ISCSI2" }
  ]
}, {
  "id": 22,
  "question": [
    {
      "type": "text",
      "value": "In your Oracle VM environment you have been troubleshooting intermittent crashes of the Oracle VM servers.\n\nOracle Support has determined that these crashes are caused by network latency and the servers are timing out and rebooting after trying to access the server pool file system. Oracle has recommended that you increase the heartbeat dead threshold from the default of 31 to a value of 61.\n\nWhich file stores this configuration parameter?"
    }
  ],
  "options": [
    { "type": "text", "value": "/etc/ocfs2/manager.conf" },
    { "type": "text", "value": "/etc/sysconfig/esxcluster.conf" },
    { "type": "text", "value": "/etc/myocfs2.conf" },
    { "type": "text", "value": "/etc/sysconfig/o2cb" },
    { "type": "text", "value": "/etc/myovs/o2cb" }
  ],
  "answer": [
    { "type": "text", "value": "/etc/sysconfig/o2cb" }
  ]
}, {
  "id": 23,
  "question": [
    {
      "type": "text",
      "value": "You are preparing for a scheduled outage of an Oracle VM server that hosts four virtual machines. You will be provided with another server intended for live migration of the four virtual machines.\n\nWhich four actions apply to this process?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Place the new server into maintenance mode prior to beginning migration."
    },
    {
      "type": "text",
      "value": "Only one virtual machine at a time will be migrated."
    },
    {
      "type": "text",
      "value": "Publish the new IP addresses for all virtual machines following the migration."
    },
    {
      "type": "text",
      "value": "Add the new server to the existing server pool."
    },
    {
      "type": "text",
      "value": "Verify that both servers involved in the live migration are identical makes and models of hardware."
    },
    {
      "type": "text",
      "value": "Place the server that requires the outage into maintenance mode to begin live migration."
    },
    {
      "type": "text",
      "value": "Create a new server pool in preparation for the live migration."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Only one virtual machine at a time will be migrated."
    },
    {
      "type": "text",
      "value": "Add the new server to the existing server pool."
    },
    {
      "type": "text",
      "value": "Verify that both servers involved in the live migration are identical makes and models of hardware."
    },
    {
      "type": "text",
      "value": "Place the server that requires the outage into maintenance mode to begin live migration."
    }
  ]
}, {
  "id": 24,
  "question": [
    {
      "type": "text",
      "value": "Examine the output from Exhibit 1:\n\n[root@ovall ~] xm list\nName                                 ID   Mem  VCPUs  State   Time(s)\n0004fb000006000041b397779495f2aa     2   4096  2      -b----   6.0\n0004fb000006000002d5e09d9ec70ac4     1   2048  2      -b----   87.4\nDomain-0                             0   821   6      r------  7048.0\n\nIn your production Oracle VM environment you have a non-critical guest that is causing performance issues. You cannot log in to this guest to perform a graceful shutdown and when attempting to shut down the guest using Oracle VM Manager, the guest does not respond.\n\nYou decide to stop the guest manually. The UUID of the guest to be stopped is 0004fb000006000041b397779495f2aa.\n\nWhich command will stop the guest immediately?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "xm reboot 2"
    },
    {
      "type": "text",
      "value": "xm halt 2"
    },
    {
      "type": "text",
      "value": "xm destroy 1"
    },
    {
      "type": "text",
      "value": "xm reboot 1"
    },
    {
      "type": "text",
      "value": "xm halt 1"
    },
    {
      "type": "text",
      "value": "xm destroy 2"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "xm destroy 2"
    }
  ]
}, {
  "id": 25,
  "question": [
    {
      "type": "text",
      "value": "In your development environment you have a single Oracle VM server running multiple guests. You have received a complaint from one of your users that performance within a guest is unacceptable, but you do not know if the performance issues are being caused by this guest or a different one.\n\nWhich command would you use in Dom0 of your Oracle VM server to identify which guest is consuming the most resources?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "xm dmesg"
    },
    {
      "type": "text",
      "value": "xm top"
    },
    {
      "type": "text",
      "value": "top"
    },
    {
      "type": "text",
      "value": "xm monitor"
    },
    {
      "type": "text",
      "value": "xm list"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "xm top"
    }
  ]
}, {
  "id": 26,
  "question": [
    {
      "type": "text",
      "value": "You have recently taken over the management of an Oracle VM environment. When performing an audit of each server, which three steps would you take to ensure the environment is configured optimally?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Reset the Oracle Agent password."
    },
    {
      "type": "text",
      "value": "Ensure the firewall is running and starts at boot time."
    },
    {
      "type": "text",
      "value": "Audit the passwd file to verify that no additional users have been created."
    },
    {
      "type": "text",
      "value": "Enable a log file purge routine to prevent the root file system from filling up."
    },
    {
      "type": "text",
      "value": "Verify that all the servers are running the same patch revision."
    },
    {
      "type": "text",
      "value": "Modify the grub.conf file to set a new password."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Ensure the firewall is running and starts at boot time."
    },
    {
      "type": "text",
      "value": "Enable a log file purge routine to prevent the root file system from filling up."
    },
    {
      "type": "text",
      "value": "Verify that all the servers are running the same patch revision."
    }
  ]
}, {
  "id": 27,
  "question": [
    {
      "type": "text",
      "value": "After reinstalling your entire Oracle VM development environment you are trying to re-create your NFS repository but receive an error message (review Exhibit 1).\n\nMessage\n\tOVMRU_002015E: Cannot create repository at path :, on file system: nfs:/u02/Repository2, as it conflicts with\n\texisting repo at path: Empty_share_path\n\tTue Dec 13 13:13:15 MST 2011\n\t\t\t\t\t\t\t\t\t\tOK\n\nYou know this repository is not being used.\n\nWhich file can you remove from the base NFS directory so that Oracle VM Manager can re-create the repository on this share?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "repo.dat"
    },
    {
      "type": "text",
      "value": ".myrepo.txt"
    },
    {
      "type": "text",
      "value": ".generic_fs_stamp"
    },
    {
      "type": "text",
      "value": "ovsrepo.dat"
    },
    {
      "type": "text",
      "value": ".ovsrepo"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": ".ovsrepo"
    }
  ]
}, {
  "id": 28,
  "question": [
    {
      "type": "text",
      "value": "When would you define the values for Priority and Processor Cap % when using Oracle VM Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "When defining VLAN groups"
    },
    {
      "type": "text",
      "value": "When adding new storage hardware"
    },
    {
      "type": "text",
      "value": "When adding a new server to a server pool"
    },
    {
      "type": "text",
      "value": "When editing a server pool policy"
    },
    {
      "type": "text",
      "value": "When creating a new VM"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "When creating a new VM"
    }
  ]
}, {
  "id": 29,
  "question": [
    {
      "type": "text",
      "value": "What are the minimum components that comprise a template imported by Oracle VM Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "A virtual machine configuration file (vm.cfg), a metadata file (.vix), a bios file (.nvram), and one virtual disk image (.img) file."
    },
    {
      "type": "text",
      "value": "A configuration file (.vmx) and a virtual disk image (.vmdk) file."
    },
    {
      "type": "text",
      "value": "One virtual disk image (.img) file."
    },
    {
      "type": "text",
      "value": "One disk image (.img) containing the root file system and another disk image (.img) containing the boot file system."
    },
    {
      "type": "text",
      "value": "A virtual machine configuration file (vm.cfg) and at least one virtual disk image (.img) file."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "A virtual machine configuration file (vm.cfg) and at least one virtual disk image (.img) file."
    }
  ]
}, {
  "id": 30,
  "question": [
    {
      "type": "text",
      "value": "In order to import a VM template into an Oracle VM 3 storage repository using the Oracle VM Manager, where must the template be staged?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "On a web server supporting HTTP, HTTPS, or FTP protocol"
    },
    {
      "type": "text",
      "value": "In the Import directory of a shared storage repository"
    },
    {
      "type": "text",
      "value": "In the server pool repository"
    },
    {
      "type": "text",
      "value": "On an NFS-mounted file system accessible to the OVM Manager"
    },
    {
      "type": "text",
      "value": "In any directory on the OVM Manager host system"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "On a web server supporting HTTP, HTTPS, or FTP protocol"
    }
  ]
}, {
  "id": 31,
  "question": [
    {
      "type": "text",
      "value": "On your Oracle VM server, which command would you use to list all SAN LUNs with redundant paths, along with their policies?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "dmsetup list"
    },
    {
      "type": "text",
      "value": "df -h"
    },
    {
      "type": "text",
      "value": "multipath -ll"
    },
    {
      "type": "text",
      "value": "service devmapd status"
    },
    {
      "type": "text",
      "value": "mdadm -Q"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "multipath -ll"
    }
  ]
}, {
  "id": 32,
  "question": [
    {
      "type": "text",
      "value": "During which two of the following events is multipathing enabled for a block device on an Oracle VM server?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "When a virtual disk is added to a guest virtual machine"
    },
    {
      "type": "text",
      "value": "When local disks are added"
    },
    {
      "type": "text",
      "value": "When a new NFS repository is added"
    },
    {
      "type": "text",
      "value": "When fiber channel disks are attached"
    },
    {
      "type": "text",
      "value": "When iSCSI disks are attached"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "When fiber channel disks are attached"
    },
    {
      "type": "text",
      "value": "When iSCSI disks are attached"
    }
  ]
}, {
  "id": 33,
  "question": [
    {
      "type": "text",
      "value": "On one Oracle VM server you have five hardware virtualized guests in a running state.\n\nHow many qemu-dm background processes should you see running?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Four: one master and one slave process for CPU emulation, and one master and one slave process for device emulation."
    },
    {
      "type": "text",
      "value": "Two: one to handle CPU emulation and one for device emulation."
    },
    {
      "type": "text",
      "value": "None: qemu-dm background processes aren't used for hardware virtualized guests."
    },
    {
      "type": "text",
      "value": "Five: one for each virtual machine."
    },
    {
      "type": "text",
      "value": "One: it handles all device emulation on this server regardless of how many hardware virtualized guests are running."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Five: one for each virtual machine."
    }
  ]
}, {
  "id": 34,
  "question": [
    {
      "type": "text",
      "value": "Which three statements are true about hardware virtualized guests?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Provide device access using native drivers"
    },
    {
      "type": "text",
      "value": "Require the operating system to be modified in order to be virtualized"
    },
    {
      "type": "text",
      "value": "Require compatible CPUs that use Intel VT or AMD-V technologies"
    },
    {
      "type": "text",
      "value": "Support the same number of NICs and virtual disks as paravirtualized guests"
    },
    {
      "type": "text",
      "value": "Can be used to virtualize any supported, unmodified operating system"
    },
    {
      "type": "text",
      "value": "Provide direct access without the need for emulation drivers"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Require compatible CPUs that use Intel VT or AMD-V technologies"
    },
    {
      "type": "text",
      "value": "Support the same number of NICs and virtual disks as paravirtualized guests"
    },
    {
      "type": "text",
      "value": "Can be used to virtualize any supported, unmodified operating system"
    }
  ]
}, {
  "id": 35,
  "question": [
    {
      "type": "text",
      "value": "Choose the two statements that correctly describe differences between dom0 and domU on Oracle VM Server."
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Each domU console is accessed with the Oracle VM Manager or with VNC while dom0 is accessed using the machine's actual or virtual console."
    },
    {
      "type": "text",
      "value": "Critical services such as DNS name resolution, printer spooling, and window services should be deployed in dom0 instead of domU, because of its superior performance and stability compared to domU."
    },
    {
      "type": "text",
      "value": "The clock on dom0 is always more accurate than the clocks on domU, because dom0 has direct access to the hardware clock."
    },
    {
      "type": "text",
      "value": "You can configure memory allocated to domU, but memory cannot be changed on dom0."
    },
    {
      "type": "text",
      "value": "Management actions from the Oracle VM Manager are always dispatched to an agent in a dom0 network, but never directly to a domU network."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Each domU console is accessed with the Oracle VM Manager or with VNC while dom0 is accessed using the machine's actual or virtual console."
    },
    {
      "type": "text",
      "value": "Management actions from the Oracle VM Manager are always dispatched to an agent in a dom0 network, but never directly to a domU network."
    }
  ]
}, {
  "id": 36,
  "question": [
    {
      "type": "text",
      "value": "Which three statements describe the relationship between dom0 and domU?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "If there is a network problem in dom0, it will not affect domU."
    },
    {
      "type": "text",
      "value": "domU routes all network and block I/O requests to dom0."
    },
    {
      "type": "text",
      "value": "A dom0 crash will also crash domU."
    },
    {
      "type": "text",
      "value": "Both dom0 and domU are restarted after a failure if the High Availability flag is set."
    },
    {
      "type": "text",
      "value": "domU is started by dom0, which constantly monitors its status."
    },
    {
      "type": "text",
      "value": "dom0 and domU communicate over Oracle Clusterware to provide high availability."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "domU routes all network and block I/O requests to dom0."
    },
    {
      "type": "text",
      "value": "A dom0 crash will also crash domU."
    },
    {
      "type": "text",
      "value": "domU is started by dom0, which constantly monitors its status."
    }
  ]
}, {
  "id": 37,
  "question": [
    {
      "type": "text",
      "value": "You are about to finish the disk order edit for an Oracle Linux 5 virtual machine. How would the highlighted disk below, ASM10-3, be referenced on that virtual machine?\n\nEdit Virtual Machine\nEdit Virtual Machine     Networking Options       Storage Options     Disk Order       Boot Options\nEdit Disk Order\n0004760000120000137F30cf18cBaa73.img\n0004f600001200001219e5ba05180\nASM10-1\nASM10-2\nASM10-3\nASM10-4\nASM10-5\n                Cancel Back Next Finish"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "/dev/sdc"
    },
    {
      "type": "text",
      "value": "/disk/ASM10-3"
    },
    {
      "type": "text",
      "value": "/dev/xvde"
    },
    {
      "type": "text",
      "value": "/dev/hde"
    },
    {
      "type": "text",
      "value": "/proc/5"
    },
    {
      "type": "text",
      "value": "/dev/xvd4"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "/dev/xvde"
    }
  ]
}, {
  "id": 38,
  "question": [
    {
      "type": "text",
      "value": "Prior to running runInstaller.sh to install the Oracle VM Manager for Oracle VM 3, which three prerequisite items should be satisfied?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Verify that a MySQL Database is installed."
    },
    {
      "type": "text",
      "value": "Confirm that the network ports to be used are available and that they are accessible through the firewall."
    },
    {
      "type": "text",
      "value": "Verify that all OVM Servers are installed and belong to the proper server pool."
    },
    {
      "type": "text",
      "value": "Make sure that the /u01 directory exists and has adequate space for the installation."
    },
    {
      "type": "text",
      "value": "Ensure that the OS software version meets the minimum requirements for OVM Manager."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Confirm that the network ports to be used are available and that they are accessible through the firewall."
    },
    {
      "type": "text",
      "value": "Make sure that the /u01 directory exists and has adequate space for the installation."
    },
    {
      "type": "text",
      "value": "Ensure that the OS software version meets the minimum requirements for OVM Manager."
    }
  ]
}, {
  "id": 39,
  "question": [
    {
      "type": "text",
      "value": "You have a guest VM on an Oracle VM Server that cannot communicate with the internet. The guest's UUID is 12345.\n\nWhich two commands on the Oracle VM Server will help troubleshoot this issue?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "xm network-list 12345, to get the list of virtual network interfaces attached to the guest."
    },
    {
      "type": "text",
      "value": "ovmm netstat -a, to get the current status of all network connections."
    },
    {
      "type": "text",
      "value": "dom0-system-display-network, to show the status of all network interfaces."
    },
    {
      "type": "text",
      "value": "ifconfig -a, to display a list of network interfaces and their current status."
    },
    {
      "type": "text",
      "value": "esx list -V 12345, to list all virtual network interfaces attached to the guest."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "xm network-list 12345, to get the list of virtual network interfaces attached to the guest."
    },
    {
      "type": "text",
      "value": "ifconfig -a, to display a list of network interfaces and their current status."
    }
  ]
}, {
  "id": 40,
  "question": [
    {
      "type": "text",
      "value": "Which three statements are true about paravirtualization?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The operating system to be installed in the virtual machine needs to be paravirtualization aware."
    },
    {
      "type": "text",
      "value": "Provides device access using native drivers in DomU"
    },
    {
      "type": "text",
      "value": "Requires compatible CPUs that use Intel VT or AMD-V technologies"
    },
    {
      "type": "text",
      "value": "Provides device access without the need for emulation drivers"
    },
    {
      "type": "text",
      "value": "More virtual NICs and virtual disks are supported on paravirtualized virtual machines than on hardware virtualized virtual machines."
    },
    {
      "type": "text",
      "value": "Can be used to virtualize any supported, unmodified operating system"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The operating system to be installed in the virtual machine needs to be paravirtualization aware."
    },
    {
      "type": "text",
      "value": "Provides device access using native drivers in DomU"
    },
    {
      "type": "text",
      "value": "Provides device access without the need for emulation drivers"
    }
  ]
}, {
  "id": 41,
  "question": [
    {
      "type": "text",
      "value": "In a paravirtualized environment, which network drivers are used in dom0 and the guest VM to communicate between one another?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Both the guest and dom0 use emulated drivers."
    },
    {
      "type": "text",
      "value": "The guest uses netfront and dom0 uses netbk."
    },
    {
      "type": "text",
      "value": "Both the guest and dom0 use native drivers."
    },
    {
      "type": "text",
      "value": "The guest uses netbk and dom0 uses netfront."
    },
    {
      "type": "text",
      "value": "The guest uses netfront and dom0 uses native drivers."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The guest uses netfront and dom0 uses netbk."
    }
  ]
}, {
  "id": 42,
  "question": [
    {
      "type": "text",
      "value": "You added a new Oracle VM Server to your production server pool recently. Now you are trying to do a live migration of several guests to this new server, but it does not appear in the list of available Oracle VM Servers.\n\nWhat three reasons could explain this?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The guest does not have the High Availability flag enabled."
    },
    {
      "type": "text",
      "value": "The new server has not been presented to the storage repository containing the guest to be migrated."
    },
    {
      "type": "text",
      "value": "The guest has a virtual CPU pinned to the Oracle VM server's first CPU and it cannot be migrated until this is changed."
    },
    {
      "type": "text",
      "value": "The guest has been assigned an amount of memory greater than the new server's physical memory."
    },
    {
      "type": "text",
      "value": "The new server is in maintenance mode and cannot run any guest in this state."
    },
    {
      "type": "text",
      "value": "The new server does not have IPMI configured yet."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The new server has not been presented to the storage repository containing the guest to be migrated."
    },
    {
      "type": "text",
      "value": "The guest has been assigned an amount of memory greater than the new server's physical memory."
    },
    {
      "type": "text",
      "value": "The new server is in maintenance mode and cannot run any guest in this state."
    }
  ]
}, {
  "id": 43,
  "question": [
    {
      "type": "text",
      "value": "What will happen if the Oracle VM server pool master server crashes?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "A server in the server pool that was assigned the secondary master server role will take over in its place."
    },
    {
      "type": "text",
      "value": "All servers in the server pool will hang until the master server has been brought back up."
    },
    {
      "type": "text",
      "value": "All servers in the server pool will continue to run, but no configuration changes can be made until the master server is back online."
    },
    {
      "type": "text",
      "value": "A server in the server pool will automatically take over in its place."
    },
    {
      "type": "text",
      "value": "A new master server must be assigned through Oracle VM Manager."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "All servers in the server pool will continue to run, but no configuration changes can be made until the master server is back online."
    }
  ]
}, {
  "id": 44,
  "question": [
    {
      "type": "text",
      "value": "What happens to a virtual machine running on a clustered Oracle VM server when the server crashes?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "It is restarted on another server in the server pool regardless of the High Availability flag setting."
    },
    {
      "type": "text",
      "value": "It is live-migrated to another server in the server pool only if the High Availability flag is enabled."
    },
    {
      "type": "text",
      "value": "It is live-migrated to another server in the server pool regardless of the High Availability flag setting."
    },
    {
      "type": "text",
      "value": "It is restarted on another server in the server pool if it has the High Availability flag enabled."
    },
    {
      "type": "text",
      "value": "It remains down until an administrator restarts it on another server in the server pool if the High Availability flag is enabled."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "It is restarted on another server in the server pool if it has the High Availability flag enabled."
    }
  ]
}, {
  "id": 45,
  "question": [
    {
      "type": "text",
      "value": "Examine Exhibit 1.\nOracle VM Manager is showing that server ovs1 is currently offline. You are able to ping ovs1 and log in via ssh, and you have verified the server has been up for 42 days.\n\nWhat is the most likely problem?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The ovm-consoled service is down or has failed."
    },
    {
      "type": "text",
      "value": "The ovs-devmon service is down or has failed."
    },
    {
      "type": "text",
      "value": "The ovs-agent service is down or has failed."
    },
    {
      "type": "text",
      "value": "The ocfs2 service is down or has failed."
    },
    {
      "type": "text",
      "value": "The ovmwatch service is down or has failed."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The ovs-agent service is down or has failed."
    }
  ]
}, {
  "id": 46,
  "question": [
    {
      "type": "text",
      "value": "You are preparing to create several virtual machines from a template for a development team whose members have different needs.\n\nWhich three capabilities can you provide using only Oracle VM Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "A choice of thin cloning, sparse cloning, or non-sparse cloning of a virtual disk"
    },
    {
      "type": "text",
      "value": "Propagation of the target virtual machine to multiple servers in one operation"
    },
    {
      "type": "text",
      "value": "Assignment of storage to physical disks"
    },
    {
      "type": "text",
      "value": "Propagation of the target virtual machine to multiple server pools in one operation"
    },
    {
      "type": "text",
      "value": "Selecting which virtual disks will be cloned"
    },
    {
      "type": "text",
      "value": "Changing Linux packages installed in the target virtual machine"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "A choice of thin cloning, sparse cloning, or non-sparse cloning of a virtual disk"
    },
    {
      "type": "text",
      "value": "Propagation of the target virtual machine to multiple servers in one operation"
    },
    {
      "type": "text",
      "value": "Selecting which virtual disks will be cloned"
    }
  ]
}, {
  "id": 47,
  "question": [
    {
      "type": "text",
      "value": "You have installed Oracle VM Server from a CD image to your local 250 GB hard drive and chosen not to modify the partitioning layout.\n\nAssuming the default partitioning layout is less than 10 GB, what will the installer do with the remaining 240 GB of free space?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Create a software mirror of all default partitions to provide redundancy and leave the remaining space unused"
    },
    {
      "type": "text",
      "value": "Create a partition of 240 GB and mount it as /u01"
    },
    {
      "type": "text",
      "value": "Create a partition with 50% of the free space and use it as a local OCFS2 filesystem and repository"
    },
    {
      "type": "text",
      "value": "Create a partition of 240 GB and use it as a local OCFS2 file system and repository"
    },
    {
      "type": "text",
      "value": "Leave the remaining space unused"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Create a partition of 240 GB and use it as a local OCFS2 file system and repository"
    }
  ]
}, {
  "id": 48,
  "question": [
    {
      "type": "text",
      "value": "Which three statements concerning Oracle Virtual Assembly Builder are correct?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Assemblies are comprised of interrelated software appliances, along with a metadata catalog that describes their relationships."
    },
    {
      "type": "text",
      "value": "Assemblies promote rapid deployment, lower operational costs, component reuse, and simple implementation of best practices."
    },
    {
      "type": "text",
      "value": "External resources, such as mail, printer, identity management, LDAP or SSO servers, must be manually configured after the assembly deployment is complete."
    },
    {
      "type": "text",
      "value": "All components of the Oracle Virtual Assembly Builder are accessible from a tab in Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "Oracle Virtual Assembly Builder manages the full life-cycle of assemblies including introspection, configuration, preparation, and deployment."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Assemblies are comprised of interrelated software appliances, along with a metadata catalog that describes their relationships."
    },
    {
      "type": "text",
      "value": "Assemblies promote rapid deployment, lower operational costs, component reuse, and simple implementation of best practices."
    },
    {
      "type": "text",
      "value": "Oracle Virtual Assembly Builder manages the full life-cycle of assemblies including introspection, configuration, preparation, and deployment."
    }
  ]
}, {
  "id": 49,
  "question": [
    {
      "type": "text",
      "value": "Which four operations can be performed using the cloning facilities of Oracle VM Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Deploy all virtual machines in an assembly in a single step."
    },
    {
      "type": "text",
      "value": "Create a new virtual machine from a template."
    },
    {
      "type": "text",
      "value": "Create a template from an existing virtual machine."
    },
    {
      "type": "text",
      "value": "Create a new virtual machine from an existing virtual machine."
    },
    {
      "type": "text",
      "value": "Display a list of all available clone definitions."
    },
    {
      "type": "text",
      "value": "Create a new, modified template from an existing template."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Create a new virtual machine from a template."
    },
    {
      "type": "text",
      "value": "Create a template from an existing virtual machine."
    },
    {
      "type": "text",
      "value": "Create a new virtual machine from an existing virtual machine."
    },
    {
      "type": "text",
      "value": "Create a new, modified template from an existing template."
    }
  ]
}, {
  "id": 50,
  "question": [
    {
      "type": "text",
      "value": "When registering a file server you are prompted to assign one or more **admin servers**.\n\nExplain the purpose of an **admin server** and what type of server can be assigned this role."
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The Oracle VM Manager server that executes Oracle VM agent transactions"
    },
    {
      "type": "text",
      "value": "An Oracle VM server in the server pool that monitors the status of the Oracle VM Manager"
    },
    {
      "type": "text",
      "value": "A stand-alone server in your environment that monitors the status of the file server shares"
    },
    {
      "type": "text",
      "value": "An Oracle VM server outside of the server pool that monitors the status of the network"
    },
    {
      "type": "text",
      "value": "An Oracle VM server in the server pool that is allowed to execute Oracle VM agent transactions on behalf of the Oracle VM Manager"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "An Oracle VM server in the server pool that is allowed to execute Oracle VM agent transactions on behalf of the Oracle VM Manager"
    }
  ]
}, {
  "id": 51,
  "question": [
    {
      "type": "text",
      "value": "When registering a NFS file server you are required to enter the **Access Host** name or IP address.\n\nWhat is the function of the **Access Host**?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "It is the NFS server that provides access to one or more shares."
    },
    {
      "type": "text",
      "value": "It is the server in the server pool that will perform all I/O operations on the file server."
    },
    {
      "type": "text",
      "value": "It is the admin server for this share."
    },
    {
      "type": "text",
      "value": "It is the security server that will prevent unauthorized server pool members from accessing the share."
    },
    {
      "type": "text",
      "value": "It is the iSCSI server that will manage one or more LUNs."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "It is the NFS server that provides access to one or more shares."
    }
  ]
}, {
  "id": 52,
  "question": [
    {
      "type": "text",
      "value": "Immediately after installing Oracle VM Manager you try to log in to the GUI but receive a \"page cannot be displayed\" error. Which three steps would you use to troubleshoot this issue?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Restart the Server Pool Master server in case there is an IP address conflict."
    },
    {
      "type": "text",
      "value": "Verify that Oracle VM Manager database is up and available."
    },
    {
      "type": "text",
      "value": "Use service ovmm status on the Oracle VM Manager host to verify that the service is running."
    },
    {
      "type": "text",
      "value": "Use ping to verify that the Oracle VM Manager host is responding."
    },
    {
      "type": "text",
      "value": "Try using the Oracle VM Manager's IP address in the URL to verify that DNS is correctly set up."
    },
    {
      "type": "text",
      "value": "Check whether the Oracle VM Agent is running on all Oracle VM servers."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Verify that Oracle VM Manager database is up and available."
    },
    {
      "type": "text",
      "value": "Use service ovmm status on the Oracle VM Manager host to verify that the service is running."
    },
    {
      "type": "text",
      "value": "Use ping to verify that the Oracle VM Manager host is responding."
    }
  ]
}, {
  "id": 53,
  "question": [
    {
      "type": "text",
      "value": "Identify three components of the JeOS toolkit."
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Oracle Linux template system images"
    },
    {
      "type": "text",
      "value": "A predefined YUM repository to customize RPMs"
    },
    {
      "type": "text",
      "value": "Microsoft template system images"
    },
    {
      "type": "text",
      "value": "Red Hat Enterprise Linux template system images"
    },
    {
      "type": "text",
      "value": "A command-line utility to customize and create a system image"
    },
    {
      "type": "text",
      "value": "Scripts used to reconfigure and clean up the template"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Oracle Linux template system images"
    },
    {
      "type": "text",
      "value": "A command-line utility to customize and create a system image"
    },
    {
      "type": "text",
      "value": "Scripts used to reconfigure and clean up the template"
    }
  ]
}, {
  "id": 54,
  "question": [
    {
      "type": "text",
      "value": "Examine Exhibit 1 and identify the three correct statements.\n\nmemory = 2048\ndisk = ['file:/OVS/Repositories/0004fb0000030000Bded2925b616f88d/VirtualDisks/0004fb00001200004a2ae993568910a0.img,xvda,w']\nvif = ['mac=00:21:f6:bb:00:24, bridge=192.168.0.0', 'mac=00:21:f6:bb:00:0d,br1']\nusbdevice = 'tablet'\non_crash = 'restart'\nOVM_description = ''\nname = '0004fb000006000041b397779495f2aa'\nbuilder = 'hvm'\non_poweroff = 'destroy'\nboot = 'c'\nuuid = '0004fb00-0006-0000-41b3-97779495f2aa'\nvfb = ['type=vnc, vncunused=1,vnclisten=127.0.0.1']\non_reboot = 'restart'\nvcpus = 2\ncpu_weight = 27500\nOVM_os_type = 'Other Microsoft Windows'\ncpu_cap = 0\nOVM_high_availability = False\nmaxmem = 4096\nOVM_simple_name = 'guest1'\nguest_os_type = 'windows'"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "This guest has two virtual NICs."
    },
    {
      "type": "text",
      "value": "The guest starts with 2 GB of memory and can automatically grow to a maximum of 4 GB."
    },
    {
      "type": "text",
      "value": "This is a hardware virtualized guest."
    },
    {
      "type": "text",
      "value": "The guest starts with 2 GB of memory and the administrator can dynamically increase it up to 4 GB."
    },
    {
      "type": "text",
      "value": "If the virtual machine is powered off, all associated virtual disks will be removed."
    },
    {
      "type": "text",
      "value": "This is a hardware virtualized guest with paravirtual drivers installed."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "This guest has two virtual NICs."
    },
    {
      "type": "text",
      "value": "This is a hardware virtualized guest."
    },
    {
      "type": "text",
      "value": "The guest starts with 2 GB of memory and the administrator can dynamically increase it up to 4 GB."
    }
  ]
}, {
  "id": 55,
  "question": [
    {
      "type": "text",
      "value": "What is the primary use of a one-time boot script included in a custom template?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "To clean up any temp files left over from the template creation."
    },
    {
      "type": "text",
      "value": "To assign the hostname, IP address, netmask, and software-dependent configuration settings."
    },
    {
      "type": "text",
      "value": "To display any necessary copyright notices and terms-of-use."
    },
    {
      "type": "text",
      "value": "To reset the template to a first-use state so that the /etc/init.d/network script can ask for custom settings."
    },
    {
      "type": "text",
      "value": "To validate the template settings and software to ensure the template meets all requirements."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "To assign the hostname, IP address, netmask, and software-dependent configuration settings."
    }
  ]
}, {
  "id": 56,
  "question": [
    {
      "type": "text",
      "value": "What is the result of improper configuration of IPMI in your Oracle VM environment?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Oracle VM Manager cannot change Server Pool DRS Policies."
    },
    {
      "type": "text",
      "value": "Oracle VM Manager cannot save configuration changes to an Oracle VM server."
    },
    {
      "type": "text",
      "value": "Oracle VM Manager does not display the Oracle VM server that is improperly configured."
    },
    {
      "type": "text",
      "value": "Oracle VM Manager cannot power on an Oracle VM server after powering it off."
    },
    {
      "type": "text",
      "value": "Oracle VM Manager cannot power itself on or off."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Oracle VM Manager cannot power on an Oracle VM server after powering it off."
    }
  ]
}, {
  "id": 57,
  "question": [
    {
      "type": "text",
      "value": "Which two steps would you take to configure IPMI for a server in your Oracle VM environment?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Configure the username, password, and IP address using the Oracle VM Agent."
    },
    {
      "type": "text",
      "value": "Enable automatic power savings in Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "Enable Wake-on-LAN in the server BIOS."
    },
    {
      "type": "text",
      "value": "Configure the username, password, and IP address using the Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "Edit the IPMI.conf file on the Oracle VM server to enable automatic power settings."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Enable Wake-on-LAN in the server BIOS."
    },
    {
      "type": "text",
      "value": "Configure the username, password, and IP address using the Oracle VM Manager."
    }
  ]
}, {
  "id": 58,
  "question": [
    {
      "type": "text",
      "value": "When a virtual machine with the High Availability flag turned on has crashed, which component is responsible for restarting the VM?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The Server Pool Master Server"
    },
    {
      "type": "text",
      "value": "The Oracle VM Manager"
    },
    {
      "type": "text",
      "value": "The OCFS2 service on the Oracle VM Server where the crash occurred"
    },
    {
      "type": "text",
      "value": "The xend service on the Oracle VM server where the crash occurred"
    },
    {
      "type": "text",
      "value": "The xend service on the Oracle VM server that restarts and hosts the VM"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The Server Pool Master Server"
    }
  ]
}, {
  "id": 59,
  "question": [
    {
      "type": "text",
      "value": "Which four steps will make a DVD .iso image available to a virtual machine using Oracle VM Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The storage repository must be changed to be read-only."
    },
    {
      "type": "text",
      "value": "The .iso image must be imported to a storage repository that is accessible to the virtual machine."
    },
    {
      "type": "text",
      "value": "The .iso image must be staged for import on a server using the HTTP, HTTPS, or FTP protocol with a URL accessible by the selected Oracle VM Server."
    },
    {
      "type": "text",
      "value": "The .iso image must be assigned to one or more server pools."
    },
    {
      "type": "text",
      "value": "The .iso image must be mounted with the mount command on the Oracle VM Server hosting the virtual machine."
    },
    {
      "type": "text",
      "value": "The .iso image must be added to the storage configuration of the virtual machine."
    },
    {
      "type": "text",
      "value": "The storage repository must be changed to be shareable."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The .iso image must be imported to a storage repository that is accessible to the virtual machine."
    },
    {
      "type": "text",
      "value": "The .iso image must be staged for import on a server using the HTTP, HTTPS, or FTP protocol with a URL accessible by the selected Oracle VM Server."
    },
    {
      "type": "text",
      "value": "The .iso image must be assigned to one or more server pools."
    },
    {
      "type": "text",
      "value": "The .iso image must be added to the storage configuration of the virtual machine."
    }
  ]
}, {
  "id": 60,
  "question": [
    {
      "type": "text",
      "value": "The primary role of the VNIC Manager is to create virtual NICs that are used by virtual machines. Besides generating MAC addresses for the VNICs, what are three other ways that you might use the VNIC Manager?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "To assign a VNIC MAC address to the Oracle VM Manager"
    },
    {
      "type": "text",
      "value": "To list collisions resulting from duplicated MAC addresses anywhere within the enterprise"
    },
    {
      "type": "text",
      "value": "To assign a VNIC MAC address to ESX Servers"
    },
    {
      "type": "text",
      "value": "To identify the assignment, if any, of a VNIC MAC address to a virtual machine"
    },
    {
      "type": "text",
      "value": "To help avoid collisions resulting from duplicated VNIC MAC addresses managed by this Oracle VM Manager instance"
    },
    {
      "type": "text",
      "value": "To identify the assignment, if any, of a VNIC MAC address to a network"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "To identify the assignment, if any, of a VNIC MAC address to a virtual machine"
    },
    {
      "type": "text",
      "value": "To help avoid collisions resulting from duplicated VNIC MAC addresses managed by this Oracle VM Manager instance"
    },
    {
      "type": "text",
      "value": "To identify the assignment, if any, of a VNIC MAC address to a network"
    }
  ]
}, {
  "id": 61,
  "question": [
    {
      "type": "text",
      "value": "Which statement accurately describes the function of the Oracle VM Agent in Oracle VM 3?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The Oracle VM Agent dispatches e-mail and other notifications to the administrator when its host server is down or malfunctioning."
    },
    {
      "type": "text",
      "value": "The Oracle VM Agent is used exclusively for communication between servers in a server pool, and is the component by which an Oracle Server Master is elected."
    },
    {
      "type": "text",
      "value": "The Oracle VM Agent is a process that receives and processes management requests, and provides event notifications and configuration data to the Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "The Oracle VM Agent is used exclusively by Oracle Enterprise Manager to manage and monitor each Oracle VM Server."
    },
    {
      "type": "text",
      "value": "The Oracle VM Agent is not a process, but is the collection of all device drivers that support paravirtualization on the virtual machines."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The Oracle VM Agent is a process that receives and processes management requests, and provides event notifications and configuration data to the Oracle VM Manager."
    }
  ]
}, {
  "id": 62,
  "question": [
    {
      "type": "text",
      "value": "You are installing the Solaris 11 OVM template downloaded from the Oracle eDelivery site. You have previously imported and installed this template with success on other servers, however when you attempt to start this newly imported machine it throws an error indicating that \"HVM is required for this operation\" and the virtual machine fails to start.\n\nThere are currently two paravirtualized virtual machines already running on the Oracle VM server where the failure is occurring.\n\nWhich two explanations and solutions might remedy this problem?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "This server does not support hardware virtualization. Move or build the Solaris virtual machine on a server that supports hardware virtualization."
    },
    {
      "type": "text",
      "value": "The download is evidently corrupt. Download the template again and attempt the import, or use a copy of a template that worked previously."
    },
    {
      "type": "text",
      "value": "The imported template is not compatible with the Oracle VM server. Locate the vm.cfg file for the Solaris virtual machine, edit the file, and add a line: builder = \"hvm\". Save the file and start the virtual machine."
    },
    {
      "type": "text",
      "value": "Hardware virtualization CPU extensions VT-x or AMD-V are not enabled in the machine BIOS settings. Enable this feature in the BIOS for virtualization support and to enable the virtual machine to start."
    },
    {
      "type": "text",
      "value": "The virtual machine is configured improperly. Navigate to Edit Virtual Machine Settings in the Oracle VM Manager, on the first page change the Domain Type from Xen PVM to Xen HVM using the pull-down menu, then start the virtual machine."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "This server does not support hardware virtualization. Move or build the Solaris virtual machine on a server that supports hardware virtualization."
    },
    {
      "type": "text",
      "value": "Hardware virtualization CPU extensions VT-x or AMD-V are not enabled in the machine BIOS settings. Enable this feature in the BIOS for virtualization support and to enable the virtual machine to start."
    }
  ]
}, {
  "id": 63,
  "question": [
    {
      "type": "text",
      "value": "After configuring a DRS policy in your Oracle VM environment you decide to test it by forcing one of your guests to 100% CPU utilization. After 5 minutes, nothing happens.\n\nList two possible reasons for this."
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Even though the guest CPU utilization is above the DRS CPU threshold it was not enough to bring the VM server's CPU utilization above the threshold."
    },
    {
      "type": "text",
      "value": "You left the monitoring period at the default 10 minutes and Oracle VM Manager has not gathered the second performance sample."
    },
    {
      "type": "text",
      "value": "You have not told Oracle VM Manager to start gathering performance metrics, which is needed to compare future samples against."
    },
    {
      "type": "text",
      "value": "You have not published the policy to all Oracle VM servers yet, so they do not know what the thresholds are."
    },
    {
      "type": "text",
      "value": "The DRS policy you created is in direct conflict with the default DPM policy and you must correct this before continuing."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "Even though the guest CPU utilization is above the DRS CPU threshold it was not enough to bring the VM server's CPU utilization above the threshold."
    },
    {
      "type": "text",
      "value": "You left the monitoring period at the default 10 minutes and Oracle VM Manager has not gathered the second performance sample."
    }
  ]
}, {
  "id": 64,
  "question": [
    {
      "type": "text",
      "value": "Which set of steps should you follow to create a working DPM policy?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "1) Create a new policy for Oracle VM Manager.\n2) Choose a policy type of DRS.\n3) Define the time period and optionally a CPU threshold.\n4) Optionally, set a network and a threshold.\n5) Select Finish."
    },
    {
      "type": "text",
      "value": "1) Edit the default policy for the server pool.\n2) Choose a policy type of DPM.\n3) Define the time period and optionally a CPU threshold.\n4) Select servers for this policy.\n5) Optionally, set a network and a threshold.\n6) Select Finish."
    },
    {
      "type": "text",
      "value": "1) Create a new policy for the server pool.\n2) Choose a policy type of DPM and DRS.\n3) Define the time period and a required CPU threshold.\n4) Optionally, set a network and a threshold.\n5) Select Finish."
    },
    {
      "type": "text",
      "value": "1) Edit the default policy for Oracle VM Manager.\n2) Choose a policy type of Custom.\n3) Define the time period and a required CPU threshold.\n4) Optionally, set a network and a threshold.\n5) Select Finish."
    },
    {
      "type": "text",
      "value": "1) Edit the default policy for each server.\n2) Choose a policy type of DPM.\n3) Define the time period and a mandatory CPU threshold.\n4) Select up to 10 servers for this policy.\n5) Choose the network and required threshold.\n6) Select Finish."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "1) Edit the default policy for the server pool.\n2) Choose a policy type of DPM.\n3) Define the time period and optionally a CPU threshold.\n4) Select servers for this policy.\n5) Optionally, set a network and a threshold.\n6) Select Finish."
    }
  ]
}, {
  "id": 65,
  "question": [
    {
      "type": "text",
      "value": "On one of your Oracle VM servers you are experiencing communication issues with all of the VMs on the same subnet.\n\nAs part of troubleshooting this issue, what command would you use in Domo of the OracleVM server to identify only the network bridges currently configured?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "ifconfig -a -t bridge"
    },
    {
      "type": "text",
      "value": "xenbridge display"
    },
    {
      "type": "text",
      "value": "brctl show"
    },
    {
      "type": "text",
      "value": "esx -a"
    },
    {
      "type": "text",
      "value": "netstat list"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "brctl show"
    }
  ]
}, {
  "id": 66,
  "question": [
    {
      "type": "text",
      "value": "Which network configuration step in Oracle VM Manager results in the automatic creation of a network bridge?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "A network is created or edited and the network bridge check box is selected."
    },
    {
      "type": "text",
      "value": "A network is deleted."
    },
    {
      "type": "text",
      "value": "A network is created or edited and is assigned the Virtual Machine network use type."
    },
    {
      "type": "text",
      "value": "A network is edited and assigned a new name."
    },
    {
      "type": "text",
      "value": "A network is created or edited and is assigned the Storage network use type."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "A network is created or edited and is assigned the Virtual Machine network use type."
    }
  ]
}, {
  "id": 67,
  "question": [
    {
      "type": "text",
      "value": "Which three statements are true about the server pool file system when creating a clustered server pool?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "It is used for the global disk heartbeat."
    },
    {
      "type": "text",
      "value": "It is an OCFS2-formatted partition or container."
    },
    {
      "type": "text",
      "value": "It is a ZFS-formatted partition or container."
    },
    {
      "type": "text",
      "value": "It stores cluster information."
    },
    {
      "type": "text",
      "value": "It must be a local disk partition."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "It is used for the global disk heartbeat."
    },
    {
      "type": "text",
      "value": "It is an OCFS2-formatted partition or container."
    },
    {
      "type": "text",
      "value": "It stores cluster information."
    }
  ]
}, {
  "id": 68,
  "question": [
    {
      "type": "text",
      "value": "What are three benefits of using an Oracle VM template downloaded from Oracle?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "Templates can be imported directly as virtual machines, eliminating the need for cloning."
    },
    {
      "type": "text",
      "value": "Performance is generally better than custom-made templates."
    },
    {
      "type": "text",
      "value": "They reduce the time it takes to go live in production."
    },
    {
      "type": "text",
      "value": "They include the OS, application(s), and configuration needed to run with little or no customization."
    },
    {
      "type": "text",
      "value": "All templates include a free-to-use license for the software included in the template."
    },
    {
      "type": "text",
      "value": "They are fully supported for production deployments."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "They reduce the time it takes to go live in production."
    },
    {
      "type": "text",
      "value": "They include the OS, application(s), and configuration needed to run with little or no customization."
    },
    {
      "type": "text",
      "value": "They are fully supported for production deployments."
    }
  ]
}, {
  "id": 69,
  "question": [
    {
      "type": "text",
      "value": "Which statement is true about the Oracle VM servers in the server pool where a P2V converted virtual machine will be deployed?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "The servers in the server pool must have hardware virtualisation support [have Intel VT-x or AMD-V chip features]."
    },
    {
      "type": "text",
      "value": "The P2V converted virtual machine must have a unique name."
    },
    {
      "type": "text",
      "value": "The servers must have more memory than the host that was converted."
    },
    {
      "type": "text",
      "value": "The servers must be in a clustered server pool."
    },
    {
      "type": "text",
      "value": "The server where the template is deployed must have enough local disk to store the virtual disk images."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "The servers in the server pool must have hardware virtualisation support [have Intel VT-x or AMD-V chip features]."
    }
  ]
}, {
  "id": 70,
  "question": [
    {
      "type": "text",
      "value": "Which server pool type requires the use of NFS shares for its storage repositories?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "A clustered server pool"
    },
    {
      "type": "text",
      "value": "A server pool comprised of servers of different makes and models"
    },
    {
      "type": "text",
      "value": "An unclustered server pool"
    },
    {
      "type": "text",
      "value": "A server pool that supports thin provisioning"
    },
    {
      "type": "text",
      "value": "A server pool with servers that do not have OCFS2 installed"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "An unclustered server pool"
    }
  ]
}, {
  "id": 71,
  "question": [
    {
      "type": "text",
      "value": "After adding multiple iSCSI storage repositories to your Oracle VM environment you are getting out of memory errors in dom0.\n\nWhich file would you edit to increase dom0's memory allocation?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "/etc/xend/vm.cfg"
    },
    {
      "type": "text",
      "value": "/boot/grub/grub.conf"
    },
    {
      "type": "text",
      "value": "/boot/xen-debug.gz"
    },
    {
      "type": "text",
      "value": "/etc/xen.cfg"
    },
    {
      "type": "text",
      "value": "/boot/initrd"
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "/boot/grub/grub.conf"
    }
  ]
}, {
  "id": 72,
  "question": [
    {
      "type": "text",
      "value": "What are four ways that virtual disks are created within a storage repository?"
    }
  ],
  "options": [
    {
      "type": "text",
      "value": "A virtual disk is created as a result of a cloning or template creation operation."
    },
    {
      "type": "text",
      "value": "A virtual disk can be created explicitly from the Server Pools => Repositories tab within Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "A virtual disk is created whenever a storage repository is created."
    },
    {
      "type": "text",
      "value": "A virtual disk is imported into the repository using Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "At least one is automatically created by Oracle VM whenever a virtual machine is created."
    },
    {
      "type": "text",
      "value": "One or more virtual disks can be explicitly created when a virtual machine is created."
    }
  ],
  "answer": [
    {
      "type": "text",
      "value": "A virtual disk is created as a result of a cloning or template creation operation."
    },
    {
      "type": "text",
      "value": "A virtual disk can be created explicitly from the Server Pools => Repositories tab within Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "A virtual disk is imported into the repository using Oracle VM Manager."
    },
    {
      "type": "text",
      "value": "One or more virtual disks can be explicitly created when a virtual machine is created."
    }
  ]
}];

export default list;