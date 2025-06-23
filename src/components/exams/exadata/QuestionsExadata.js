const list = [{
  "id": 1,
  "question": [
    { "type": "text", "value": "Which two statements are true about the initial storage configuration after the standard (non-virtualized) deployment of a new Exadata Database Machine with High Capacity storage servers?" }
  ],
  "options": [
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers to configure Exadata Smart Flash Logs." },
    { "type": "text", "value": "There is free space available on the hard disks inside the database servers for possible extension of the /u01 file system." },
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers for possible use for storage indexes." },
    { "type": "text", "value": "The SPARSE_<DBM_NAME> diskgroup is created automatically." },
    { "type": "text", "value": "The DATA_<DBM_Name> and RECO_<DBM_NAME> ASM diskgroups are built on with DATA on the outer-most tracks and RECO on the inner-most tracks of the physical disk." }
  ],
  "answer": [
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers to configure Exadata Smart Flash Logs." },
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers for possible use for storage indexes." }
  ]
}, {
  "id": 2,
  "question": [
    { "type": "text", "value": "Which of the below is NOT a precaution that should be adhered to in order to ensure the site is safe and ready for delivery of an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Be sure that each grounding wire used for Oracle Exadata Rack is used exclusively for Oracle Exadata Rack." },
    { "type": "text", "value": "Do not install Oracle Exadata Rack near a photocopy machine." },
    { "type": "text", "value": "Do not use a flathead screwdriver to disconnect connector locks on LAN cables." },
    { "type": "text", "value": "Do not install Oracle Exadata Rack in a location that is exposed to direct sunlight." },
    { "type": "text", "value": "Do not place anything on top of Oracle Exadata Rack." },
    { "type": "text", "value": "When using shared grounding, the grounding resistance must not be greater than 10 ohms." }
  ],
  "answer": [
    { "type": "text", "value": "Do not use a flathead screwdriver to disconnect connector locks on LAN cables." }
  ]
}, {
  "id": 3,
  "question": [
    { "type": "text", "value": "You are in the process of upgrading your nonvirtualized X9M-2 Database Machine elastic configuration with 4 database servers and 7 HC storage servers with an additional 4 database servers and 7 HC storage servers." },
    { "type": "text", "value": "The new storage servers are called DMOICEL08 through DMOICEL14." },
    { "type": "text", "value": "After creating 96 new griddisks, you issued this SQL statement:" },
    { "type": "code", "value": "ALTER DISKGROUP DATA ADD DISK\n'/0*/DATADMOICEL08*',\n'/0*/DATADMOICEL09*',\n'/0*/DATADMOICEL10*',\n'/0*/DATADMOICEL11*',\n'/0*/DATADMOICEL12*',\n'/0*/DATADMOICEL13*',\n'/0*/DATADMOICEL14*'\nREBALANCE POWER 512;" },
    { "type": "text", "value": "How many failgroups if any, will be added to the DATA diskgroup by executing this SQL statement?" }
  ],
  "options": [
    { "type": "text", "value": "7 consisting of 12 griddisks each" },
    { "type": "text", "value": "0 because the new griddisks will be added to the existing failgroups" },
    { "type": "text", "value": "12 consisting of seven griddisks each" },
    { "type": "text", "value": "1 consisting of all 96 griddisks" },
    { "type": "text", "value": "96 consisting of one griddisk each" }
  ],
  "answer": [
    { "type": "text", "value": "7 consisting of 12 griddisks each" }
  ]
}, {
  "id": 4,
  "question": [
    { "type": "text", "value": "Which three statements are true about Oracle Configuration Manager (OCM) for an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "It is mandatory to install OCM on all database servers." },
    { "type": "text", "value": "Collected configuration information can be uploaded automatically to Oracle." },
    { "type": "text", "value": "It collects configuration information on demand." },
    { "type": "text", "value": "It collects configuration information automatically." },
    { "type": "text", "value": "It is mandatory to install OCM on at least one database server." },
    { "type": "text", "value": "Collected configuration information can be uploaded manually to Oracle." }
  ],
  "answer": [
    { "type": "text", "value": "Collected configuration information can be uploaded automatically to Oracle." },
    { "type": "text", "value": "It collects configuration information automatically." },
    { "type": "text", "value": "Collected configuration information can be uploaded manually to Oracle." }
  ]
}, {
  "id": 5,
  "question": [
    { "type": "text", "value": "You are concerned about the operating temperature of the database servers in your Exadata Full Rack and want to be alerted if the server exceeds 30C.\n\nWhat command should you use to generate alerts for such an event?" }
  ],
  "options": [
    { "type": "text", "value": "dbmcli -e \"set threshold ds_temp comparison='>', critical=30\" on each database server" },
    { "type": "text", "value": "dbmcli -e \"alert metriccurrent ds_temp where metricValue > 30\" on each database server" },
    { "type": "text", "value": "dbmcli -e \"set alert ds_temp> 30\" on each database server" },
    { "type": "text", "value": "dbmcli -e \"create threshold ds_temp comparison='>', critical=30\" on each database server" }
  ],
  "answer": [
    { "type": "text", "value": "dbmcli -e \"create threshold ds_temp comparison='>', critical=30\" on each database server" }
  ]
}, {
  "id": 6,
  "question": [
    { "type": "text", "value": "Which dbmcli command is NOT valid on Exadata X9M?" }
  ],
  "options": [
    { "type": "text", "value": "dbmcli -e \"LIST ALERTHISTORY WHERE ageInMinutes < 15\"" },
    { "type": "text", "value": "dbmcli -e \"LIST METRICHISTORY WHERE name LIKE 'DS_.*'\"" },
    { "type": "text", "value": "dbmcli -e \"LIST IBPORT DETAIL\"" },
    { "type": "text", "value": "dbmcli -e \"LIST METRICCURRENT WHERE name = 'DS_TEMP'\"" }
  ],
  "answer": [
    { "type": "text", "value": "dbmcli -e \"LIST IBPORT DETAIL\"" }
  ]
}, {
  "id": 7,
  "question": [
    { "type": "text", "value": "Which two options can be used to identify a damaged or failing flash card on an X9M-2 Database Machine High Capacity storage server?" }
  ],
  "options": [
    { "type": "text", "value": "hardware monitoring using the storage server ILOM" },
    { "type": "text", "value": "using the CELLCLI CALIBRATE command on the storage server after logging in as the celladmin user" },
    { "type": "text", "value": "using the CELLCLI LIST LUN DETAIL command as the celladmin user" },
    { "type": "text", "value": "using the CELLCLI CALIBRATE command on the storage server after logging in as the root user" }
  ],
  "answer": [
    { "type": "text", "value": "hardware monitoring using the storage server ILOM" },
    { "type": "text", "value": "using the CELLCLI LIST LUN DETAIL command as the celladmin user" }
  ]
}, {
  "id": 8,
  "question": [
    { "type": "text", "value": "Which three statements are true about the EXACLI utility?" }
  ],
  "options": [
    { "type": "text", "value": "It may be used to execute DBMCLI commands on multiple database nodes in parallel." },
    { "type": "text", "value": "It can be used to execute O/S commands on multiple storage servers in parallel." },
    { "type": "text", "value": "It may be run interactively." },
    { "type": "text", "value": "It can be used to execute EXACLI scripts on multiple storage servers in parallel." },
    { "type": "text", "value": "It uses the same security mechanism as the EXACLI command." },
    { "type": "text", "value": "It can be used to execute EXACLI commands on multiple storage servers in parallel." }
  ],
  "answer": [
    { "type": "text", "value": "It may be run interactively." },
    { "type": "text", "value": "It can be used to execute EXACLI scripts on multiple storage servers in parallel." },
    { "type": "text", "value": "It can be used to execute EXACLI commands on multiple storage servers in parallel." }
  ]
}, {
  "id": 9,
  "question": [
    { "type": "text", "value": "Which three statements are true about the CELLCLI CALIBRATE command on an Exadata storage server?" }
  ],
  "options": [
    { "type": "text", "value": "It can be executed with CELLSRV running using the FORCE option." },
    { "type": "text", "value": "It cannot be used on Extreme Performance storage servers." },
    { "type": "text", "value": "It is used to verify write performance of flash devices on the storage server." },
    { "type": "text", "value": "It must be executed by the CELLADMIN user on the storage server." },
    { "type": "text", "value": "It can be executed with CELLSRV stopped." },
    { "type": "text", "value": "It is used to verify write performance of hard disks on the storage server." },
    { "type": "text", "value": "It must be executed by the ROOT user on the storage server." }
  ],
  "answer": [
    { "type": "text", "value": "It can be executed with CELLSRV running using the FORCE option." },
    { "type": "text", "value": "It must be executed by the CELLADMIN user on the storage server." },
    { "type": "text", "value": "It is used to verify write performance of hard disks on the storage server." }
  ]
}, {
  "id": 10,
  "question": [
    { "type": "text", "value": "Which three statements are true concerning the configuration or use of Enterprise Manager Cloud Control to monitor and manage Exadata Database Machine components?" }
  ],
  "options": [
    { "type": "text", "value": "Cloud Control can monitor and manage a Database Machine storage Expansion rack." },
    { "type": "text", "value": "Oracle management agents must only be installed on one storage node in a Database Machine to enable monitoring and management of all storage nodes." },
    { "type": "text", "value": "Compute nodes forward their SNMP traps to the Management Server process on the same compute node." },
    { "type": "text", "value": "Storage nodes forward their SNMP traps to the Management Server process on the same storage node." },
    { "type": "text", "value": "Oracle management agents must only be installed on one compute node in a Database Machine to enable monitoring and management of all compute nodes and storage nodes." },
    { "type": "text", "value": "Cloud Control cannot monitor partitioned Exadata Database Machine systems." }
  ],
  "answer": [
    { "type": "text", "value": "Cloud Control can monitor and manage a Database Machine storage Expansion rack." },
    { "type": "text", "value": "Compute nodes forward their SNMP traps to the Management Server process on the same compute node." },
    { "type": "text", "value": "Storage nodes forward their SNMP traps to the Management Server process on the same storage node." }
  ]
}, {
  "id": 11,
  "question": [
    { "type": "text", "value": "You are planning the monitoring configuration for your Exadata X9M Database Machine.\n\nWhich three components are monitored directly through the use of Exadata-specific Enterprise Manager Plug-Ins?" }
  ],
  "options": [
    { "type": "text", "value": "ASM instances" },
    { "type": "text", "value": "the storage server ILOM" },
    { "type": "text", "value": "Oracle clusterware on the database server" },
    { "type": "text", "value": "Hybrid Columnar Compression (HCC) ratios on Extended (XT) storage servers" },
    { "type": "text", "value": "the Power Distribution Units (PDUs)" },
    { "type": "text", "value": "the RDMA over Converged Ethernet (RoCE) switches" }
  ],
  "answer": [
    { "type": "text", "value": "ASM instances" },
    { "type": "text", "value": "Oracle clusterware on the database server" },
    { "type": "text", "value": "Hybrid Columnar Compression (HCC) ratios on Extended (XT) storage servers" }
  ]
}, {
  "id": 12,
  "question": [
    { "type": "text", "value": "Which two steps comprise the path used to communicate with Enterprise Manager from an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server MS process to the Enterprise Manager agent." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server ILOM to the storage server MS process." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server MS process to the storage server ILOM." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server RS process to the storage server ILOM." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server RS process to the Enterprise Manager agent." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server ILOM to the storage server RS process." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server ILOM to the Enterprise Manager agent." }
  ],
  "answer": [
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server MS process to the Enterprise Manager agent." },
    { "type": "text", "value": "SNMP traps for alerts are sent by the storage server ILOM to the storage server MS process." }
  ]
}, {
  "id": 13,
  "question": [
    { "type": "text", "value": "You are adding a disk expansion kit to a running Exadata X8M Database Machine's Database Servers, and have a filesystem layout that includes:\nFilesystem \t\t\t\t\t\t\t\tMounted on\n/dev/mapper/VGExaDb-LVDbSysl \t\t\t/\n/dev/mapper/VGExaDb-LVDbVarl \t\t\t/var\n/dev/mapper/VGExaDb-LVDbHome \t\t\t/home\n/dev/mapper/VGExaDb-LVDbTmp \t\t\t/tmp\n/dev/mapper/VGExaDb-LVDbVarLog \t\t\t/var/log\n/dev/mapper/VGExaDb-LVDbOral \t\t\t/u01\n/dev/mapper/VGExaDb-LVDbVarLogAudit \t/var/log/audit\n\nAfter running the following commands, which command needs to be run to add 20G of space to the filesystem mounted on /u01?\n\n# parted -s /dev/sda mkpart primary 240132160s 8189439966s\n# parted -s /dev/sda set 3 lvm on\n# lvm pvcreate --force /dev/sda3\n# lvm vgextend VGExaDb /dev/sda3" }
  ],
  "options": [
    { "type": "text", "value": "# lvextend -L +20G --verbose /dev/mapper/VGExaDb-LVDbOral" },
    { "type": "text", "value": "# xfs_growfs /u01 +20G" },
    { "type": "text", "value": "# lvextend -L +20G --verbose /dev/VGExaDb/LVDbOral" },
    { "type": "text", "value": "# resize2fs +20G /dev/VGExaDb/LVDbOral" }
  ],
  "answer": [
    { "type": "text", "value": "# lvextend -L +20G --verbose /dev/mapper/VGExaDb-LVDbOral" }
  ]
}, {
  "id": 14,
  "question": [
    { "type": "text", "value": "What are two recommended configuration best practices for backup and recovery on Exadata?" }
  ],
  "options": [
    { "type": "text", "value": "The internal Recovery Appliance backup and restore processing is optimized when the RMAN FILESPERSET parameter is set to 1 for the level 1 incremental backup set." },
    { "type": "text", "value": "Placing the backup network on dedicated switches installed in the top of the rack (ToR) has the benefits of isolating the backup network from other workloads and providing a greater level of control." },
    { "type": "text", "value": "ZFSSA may connect directly to the Exadata 100Gb RoCE network switches." },
    { "type": "text", "value": "ZFS Snapshots can provide rapid cloning of development and test environment." }
  ],
  "answer": [
    { "type": "text", "value": "The internal Recovery Appliance backup and restore processing is optimized when the RMAN FILESPERSET parameter is set to 1 for the level 1 incremental backup set." },
    { "type": "text", "value": "Placing the backup network on dedicated switches installed in the top of the rack (ToR) has the benefits of isolating the backup network from other workloads and providing a greater level of control." }
  ]
}, {
  "id": 15,
  "question": [
    { "type": "text", "value": "Which two statements are false about backup to ZFS Storage Appliance (ZFSSA)?" }
  ],
  "options": [
    { "type": "text", "value": "Top of Rack (ToR) switches are managed as part of the hardware stack and software levels are upgraded during the patching process." },
    { "type": "text", "value": "When backing up multi-rack systems, sharing Exadata X9M switches is recommended." },
    { "type": "text", "value": "ZFSSA may connect directly to the Exadata 100Gb RoCE network switches." },
    { "type": "text", "value": "ZFS Snapshots can provide rapid cloning of development and test environment." }
  ],
  "answer": [
    { "type": "text", "value": "Top of Rack (ToR) switches are managed as part of the hardware stack and software levels are upgraded during the patching process." },
    { "type": "text", "value": "When backing up multi-rack systems, sharing Exadata X9M switches is recommended." }
  ]
}, {
  "id": 16,
  "question": [
    { "type": "text", "value": "You have been tasked with replacing a memory module of an Exadata Storage Server and need to power off the affected storage server.\n\nWhich two commands must you execute to safely power off the storage server in an Exadata X9M Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "shutdown -h now on the affected storage server" },
    { "type": "text", "value": "CellCLI> LIST GRIDDISK WHERE STATUS != 'inactive' on the affected storage server" },
    { "type": "text", "value": "CellCLI> ALTER CELL SHUTDOWN SERVICES ALL on the affected storage server" },
    { "type": "text", "value": "crsctl stop cluster -all on one of the database servers" },
    { "type": "text", "value": "CellCLI> LIST GRIDDISK ATTRIBUTES NAME WHERE asmdeactivationOutcome != 'Yes' on the affected storage server" },
    { "type": "text", "value": "CellCLI> ALTER GRIDDISK ALL INACTIVE on the affected storage server" }
  ],
  "answer": [
    { "type": "text", "value": "shutdown -h now on the affected storage server" },
    { "type": "text", "value": "CellCLI> ALTER GRIDDISK ALL INACTIVE on the affected storage server" }
  ]
}, {
  "id": 17,
  "question": [
    { "type": "text", "value": "Which two statements are true regarding EXACHK?" }
  ],
  "options": [
    { "type": "text", "value": "EXACHK supports the collection and analysis of all log files." },
    { "type": "text", "value": "EXACHK is automatically installed on an Exadata Database Machine." },
    { "type": "text", "value": "EXACHK must be installed on a separate machine." },
    { "type": "text", "value": "EXACHK results can be sent by email to Oracle Support." },
    { "type": "text", "value": "EXACHK can identify missing Exadata patches on multiple database servers and storage servers." }
  ],
  "answer": [
    { "type": "text", "value": "EXACHK is automatically installed on an Exadata Database Machine." },
    { "type": "text", "value": "EXACHK can identify missing Exadata patches on multiple database servers and storage servers." }
  ]
}, {
  "id": 18,
  "question": [
    { "type": "text", "value": "What does the following command do?\n\nroot@rU16~]# for j in {01..23} ; do ipmitool sunoem cli \"set /SP/network/test ping-192.168.1.16\" ; done" }
  ],
  "options": [
    { "type": "text", "value": "Sets the address for each storage and database server's /SP during installation to enable ping testing from the management network, run from the first database server." },
    { "type": "text", "value": "Sets the test address for the RoCE network for all storage and database servers in a full rack Exadata X9M-2, run from the first database server." },
    { "type": "text", "value": "Verifies that the ILOM management network is working after OEDA configuration has completed for all storage and database servers in a full rack Exadata X9M-2, run from the first database server." },
    { "type": "text", "value": "Verifies that the ILOM management network is working before installation of all storage and database servers in a full rack Exadata X9M-2, run from the first database server." }
  ],
  "answer": [
    { "type": "text", "value": "Verifies that the ILOM management network is working before installation of all storage and database servers in a full rack Exadata X9M-2, run from the first database server." }
  ]
}, {
  "id": 19,
  "question": [
    { "type": "text", "value": "Which two Exadata security features would you configure to control which databases can access which griddisks, when multiple databases share space on your storage servers in an unpartitioned storage grid?" }
  ],
  "options": [
    { "type": "text", "value": "File permissions on the griddisks in each storage server" },
    { "type": "text", "value": "Exadata storage realms using ASM-scoped security mode" },
    { "type": "text", "value": "Using EXADCLE instead of CELLCLI to create the griddisks" },
    { "type": "text", "value": "Exadata storage realms using database-scoped security mode" },
    { "type": "text", "value": "File permissions on the griddisks in each database server" }
  ],
  "answer": [
    { "type": "text", "value": "Exadata storage realms using ASM-scoped security mode" },
    { "type": "text", "value": "Exadata storage realms using database-scoped security mode" }
  ]
}, {
  "id": 20,
  "question": [
    { "type": "text", "value": "How do ASM failure groups provide redundancy?" }
  ],
  "options": [
    { "type": "text", "value": "Failure groups contain all ASM disks in a single storage server preventing mirror copies being written to the same storage server." },
    { "type": "text", "value": "Extended Redundancy mirrors data across data centers providing the highest levels of data protection." },
    { "type": "text", "value": "Failure groups are created for each grid disk to ensure mirror copies are written to the same storage server for faster recovery after a physical disk failure." },
    { "type": "text", "value": "They ensure that the ASM Flex instances are enabled on a maximum of two database servers or VMs per cluster." }
  ],
  "answer": [
    { "type": "text", "value": "Failure groups contain all ASM disks in a single storage server preventing mirror copies being written to the same storage server." }
  ]
}, {
  "id": 21,
  "question": [
    { "type": "text", "value": "Which tool should you use to model an Exadata rack layout?" }
  ],
  "options": [
    { "type": "text", "value": "Oracle Exadata Instantiation Assistant" },
    { "type": "text", "value": "Oracle Exadata Installation Assistant" },
    { "type": "text", "value": "Oracle Exadata Configuration Assistant" },
    { "type": "text", "value": "Oracle Exadata Deployment Assistant" }
  ],
  "answer": [
    { "type": "text", "value": "Oracle Exadata Deployment Assistant" }
  ]
}, {
  "id": 22,
  "question": [
    { "type": "text", "value": "What are the two benefits of using Oracle Exadata Deployment Assistant (OEDA)?" }
  ],
  "options": [
    { "type": "text", "value": "OEDA provides a CLI which supports life cycle management tasks for Exadata systems only." },
    { "type": "text", "value": "OEDA facilitates abstracting hardware." },
    { "type": "text", "value": "OEDA gathers configuration details and creates the Oracle Exadata Rack configuration file." },
    { "type": "text", "value": "OEDA is used for Oracle Exadata Database Machine, Zero Data Loss Recovery Appliance, Private Cloud Appliance, and SuperCluster." },
    { "type": "text", "value": "OEDA Web-based user interface cannot import OEDA XML configuration files created with the Java-based version of OEDA without conversion." }
  ],
  "answer": [
    { "type": "text", "value": "OEDA gathers configuration details and creates the Oracle Exadata Rack configuration file." },
    { "type": "text", "value": "OEDA is used for Oracle Exadata Database Machine, Zero Data Loss Recovery Appliance, Private Cloud Appliance, and SuperCluster." }
  ]
}, {
  "id": 23,
  "question": [
    { "type": "text", "value": "Where should your customer go to find the latest Exadata updates?" }
  ],
  "options": [
    { "type": "text", "value": "the Exadata System Software User's Guide Appendix A - Upgrading Oracle Exadata System Software" },
    { "type": "text", "value": "MyOracle Support for database and server updates, ULN for OS updates, and Cisco for RDMA over Converged Ethernet (RoCE) switch updates" },
    { "type": "text", "value": "the patch database in MyOracle Support" },
    { "type": "text", "value": "MyOracle Support note Exadata Database Machine and Exadata Storage Server Supported Versions (Doc ID - 888828.1)" }
  ],
  "answer": [
    { "type": "text", "value": "MyOracle Support note Exadata Database Machine and Exadata Storage Server Supported Versions (Doc ID - 888828.1)" }
  ]
}, {
  "id": 24,
  "question": [
    { "type": "text", "value": "You are providing oversight for the delivery of a new Exadata Database Machine.\n\n1. Stabilize the Exadata Rack.\n2. Unpack Oracle Exadata Rack.\n3. Review the safety guidelines.\n4. Let the Exadata acclimatize for 24 hours.\n5. Power on Exadata PDU A.\n6. Place Exadata in its allocated space.\n7. Power on Exadata PDU B.\n\nWhat is the correct order of these steps?" }
  ],
  "options": [
    { "type": "text", "value": "3,2,6,4,1,7,5" },
    { "type": "text", "value": "4,3,2,6,1,7,5" },
    { "type": "text", "value": "3,2,6,1,4,7,5" },
    { "type": "text", "value": "2,6,1,4,3,7,5" },
    { "type": "text", "value": "2,3,4,6,1,7,5" }
  ],
  "answer": [
    { "type": "text", "value": "3,2,6,4,1,7,5" }
  ]
}, {
  "id": 25,
  "question": [
    { "type": "text", "value": "Which three statements are true about Automatic Hard Disk Scrubbing and repair on high-capacity storage servers in an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Disk repair may be made from another mirror copy if the corrupt area is part of a Normal or High Redundancy Disk Group." },
    { "type": "text", "value": "Disk repair is performed immediately from Smart Flash Cache for corruption on disk when the corresponding data is dirty in the Smart Flash Cache." },
    { "type": "text", "value": "Hard disks are scanned every two weeks by default but only when disks are idle." },
    { "type": "text", "value": "Hard disks are scanned every two weeks by default in all situations." },
    { "type": "text", "value": "Disk repair is performed immediately from Smart Flash Cache for corruption on disk when the corresponding data is clean in the Smart Flash Cache." }
  ],
  "answer": [
    { "type": "text", "value": "Disk repair may be made from another mirror copy if the corrupt area is part of a Normal or High Redundancy Disk Group." },
    { "type": "text", "value": "Hard disks are scanned every two weeks by default but only when disks are idle." },
    { "type": "text", "value": "Disk repair is performed immediately from Smart Flash Cache for corruption on disk when the corresponding data is clean in the Smart Flash Cache." }
  ]
}, {
  "id": 26,
  "question": [
    { "type": "text", "value": "Which two quarantine types can disable Smart Scan for multiple databases that offload SQL statements to a cell on an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Cell Offload Quarantine" },
    { "type": "text", "value": "SQL Plan Quarantine" },
    { "type": "text", "value": "Disk Region Quarantine" },
    { "type": "text", "value": "Manually created Quarantine" },
    { "type": "text", "value": "Database Quarantine" }
  ],
  "answer": [
    { "type": "text", "value": "Cell Offload Quarantine" },
    { "type": "text", "value": "Database Quarantine" }
  ]
}, {
  "id": 27,
  "question": [
    { "type": "text", "value": "Which three statements are true about Exadata storage server alerts in an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Storage server alerts notifications may be sent using SMTP." },
    { "type": "text", "value": "Storage server alerts notifications may be sent using SNMP." },
    { "type": "text", "value": "A storage server alert is only ever issued as a warning or at a critical situation." },
    { "type": "text", "value": "A threshold-based alert gets cleared automatically when the measured value no longer violates the threshold." },
    { "type": "text", "value": "Storage server alerts are all stateful alerts." },
    { "type": "text", "value": "Storage server alerts are all stateless alerts." }
  ],
  "answer": [
    { "type": "text", "value": "Storage server alerts notifications may be sent using SMTP." },
    { "type": "text", "value": "Storage server alerts notifications may be sent using SNMP." },
    { "type": "text", "value": "A threshold-based alert gets cleared automatically when the measured value no longer violates the threshold." }
  ]
}, {
  "id": 28,
  "question": [
    { "type": "text", "value": "You have been notified by your Network Administrator that an upstream switch has been replaced due to a hardware fault.\n\nWhich command verifies that the client network on your Exadata X9M-2 Database Server is available via both client switches?" }
  ],
  "options": [
    { "type": "text", "value": "netstat -rn" },
    { "type": "text", "value": "/opt/oracle.SupportTools/ibdiagtools/checkbadlinks.pl --all" },
    { "type": "text", "value": "ifconfig -a |egrep \"re0|rel\"" },
    { "type": "text", "value": "cat /proc/net/bonding/bondeth0" }
  ],
  "answer": [
    { "type": "text", "value": "cat /proc/net/bonding/bondeth0" }
  ]
}, {
  "id": 29,
  "question": [
    { "type": "text", "value": "You have been asked to investigate why an Exadata Database Server stopped communicating on the client network for 10 minutes over the past weekend.\n\nWhich command would help investigate this?" }
  ],
  "options": [
    { "type": "text", "value": "/opt/oracle.SupportTools/ibdiagtools/netcheck/runDiagnostics.pm --from <Fridays_Date>_17:00:00 --to <Sundays_Date>_23:59:00" },
    { "type": "text", "value": "/opt/oracle.ExaWatcher/GetExaWatcherResults.sh --from <Fridays_Date>_17:00:00 --to <Sundays_Date>_23:59:00" },
    { "type": "text", "value": "/opt/oracle.SupportTools/exachk/exachk --from <Fridays_Date>_17:00:00 --to<Sundays_Date>_23:59:00" },
    { "type": "text", "value": "$ $ORACLE_HOME}/suptools/tfa/release/tfa_home/bin/tfactl --from <Fridays_Date>_17:00:00 --to <Sundays_Date>_23:59:00" }
  ],
  "answer": [
    { "type": "text", "value": "/opt/oracle.ExaWatcher/GetExaWatcherResults.sh --from <Fridays_Date>_17:00:00 --to <Sundays_Date>_23:59:00" }
  ]
}, {
  "id": 18,
  "question": [
    { "type": "text", "value": "The Exadata architecture is divided into two specific tiers: the database tier and the storage tier.\n\nWhat protocol do these tiers use to communicate with each other?" }
  ],
  "options": [
    { "type": "text", "value": "Fibre Channel Protocol" },
    { "type": "text", "value": "InfiniBand Protocol" },
    { "type": "text", "value": "Secure Direct Protocol" },
    { "type": "text", "value": "Ethernet Protocol" },
    { "type": "text", "value": "Intelligent Database Protocol" }
  ],
  "answer": [
    { "type": "text", "value": "InfiniBand Protocol" }
  ]
}, {
  "id": 31,
  "question": [
    { "type": "text", "value": "Which statement is TRUE about the Persistent Memory Commit Accelerator?" }
  ],
  "options": [
    { "type": "text", "value": "Persistent Memory Commit Accelerator tracks changes to Persistent Memory Data Accelerator to ensure duplicate blocks are not written to Flash." },
    { "type": "text", "value": "Persistent Memory Commit Accelerator contains logging information from all tiers of the software stack for rapid triage and diagnostics." },
    { "type": "text", "value": "Persistent Memory Commit Accelerator reduces redo log write latency by using Persistent Memory and RDMA before flushing to Flash then disk." },
    { "type": "text", "value": "Persistent Memory Commit Accelerator allows the database to issue one-way RDMA writes to PMEM, FLASH, and Disks concurrently, thereby reducing redo log write latency." },
    { "type": "text", "value": "Persistent Memory Commit Accelerator copies redo log data from disk for faster redo apply on Data Guard Standby Databases." }
  ],
  "answer": [
    { "type": "text", "value": "Persistent Memory Commit Accelerator reduces redo log write latency by using Persistent Memory and RDMA before flushing to Flash then disk." }
  ]
}, {
  "id": 32,
  "question": [
    { "type": "text", "value": "An Exadata storage server physical disk on an X9M-2 high-capacity full rack entered the predictive failure state.\n\nWhich two steps must you perform to replace this failed physical disk?" }
  ],
  "options": [
    { "type": "text", "value": "Add the griddisks back into the ASM diskgroup they used to be a member of." },
    { "type": "text", "value": "Replace the failed physical disk." },
    { "type": "text", "value": "Create a new celldisk and new griddisks on the replaced physical disk." },
    { "type": "text", "value": "Identify the griddisks located on the failed physical disk and drop them from the associated ASM diskgroups." },
    { "type": "text", "value": "Verify that the griddisks located on the physical disk have been successfully dropped from the associated ASM diskgroups." },
    { "type": "text", "value": "Rebalance the data on the effected griddisks before performing a manual drop command." }
  ],
  "answer": [
    { "type": "text", "value": "Replace the failed physical disk." },
    { "type": "text", "value": "Create a new celldisk and new griddisks on the replaced physical disk." }
  ]
}, {
  "id": 33,
  "question": [
    { "type": "text", "value": "Which two are true concerning the forwarding of SNMP traps by ILOM on database servers and storage servers in an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "The ILOM SNMP traps on the database servers are sent first to the MS process on the database servers, which forwards those to Enterprise Manager." },
    { "type": "text", "value": "The ILOM SNMP traps on the storage servers are sent directly to Enterprise Manager." },
    { "type": "text", "value": "The ILOM SNMP traps on the database servers are sent directly to Enterprise Manager." },
    { "type": "text", "value": "The ILOM SNMP traps on the storage servers are sent first to the MS process on the storage servers, which forwards those to Enterprise Manager." },
    { "type": "text", "value": "The ILOM SNMP traps on the database servers are sent first to the MMON process on the database servers, which forwards those to Enterprise Manager." }
  ],
  "answer": [
    { "type": "text", "value": "The ILOM SNMP traps on the database servers are sent directly to Enterprise Manager." },
    { "type": "text", "value": "The ILOM SNMP traps on the storage servers are sent first to the MS process on the storage servers, which forwards those to Enterprise Manager." }
  ]
}, {
  "id": 34,
  "question": [
    { "type": "text", "value": "You use Enterprise Manager to monitor all the components of your Exadata Database Machine.\n\nRecently, you discovered that certain asmdisks were offline in one of the diskgroups used by the RAC database called PROD.\n\nIn which two sources would you find diagnostic messages related to this problem?" }
  ],
  "options": [
    { "type": "text", "value": "alert logs for Enterprise Manager" },
    { "type": "text", "value": "alert logs for the PROD database instances" },
    { "type": "text", "value": "alert logs for the ASM instances" },
    { "type": "text", "value": "Enterprise Manager Alerts on the Exadata Storage Server Grid home page" },
    { "type": "text", "value": "Enterprise Manager Alerts on the ILOM home page for cell connectivity problems for the PROD database instances" }
  ],
  "answer": [
    { "type": "text", "value": "alert logs for the PROD database instances" },
    { "type": "text", "value": "alert logs for the ASM instances" }
  ]
}, {
  "id": 35,
  "question": [
    { "type": "text", "value": "Which command outputs all firmware versions of Exadata Storage Servers components for comparison with the manifest in My Oracle Support note 888828.1?" }
  ],
  "options": [
    { "type": "text", "value": "dcli -g storage_cells -r 'Active image version' imageinfo" },
    { "type": "text", "value": "dcli -g storage_cells '/opt/oracle.SupportTools/CheckHwFWProfile -action list'" },
    { "type": "text", "value": "dcli -g storage_cells 'dmesg | grep firmware'" },
    { "type": "text", "value": "dcli -g storage_cells 'cellcli -e ALTER CELL VALIDATE CONFIGURATION'" }
  ],
  "answer": [
    { "type": "text", "value": "dcli -g storage_cells '/opt/oracle.SupportTools/CheckHwFWProfile -action list'" }
  ]
}, {
  "id": 36,
  "question": [
    { "type": "text", "value": "Which two of the following network connection types can be deployed on the client network ports of an Exadata X9M-2 Database Server?" }
  ],
  "options": [
    { "type": "text", "value": "2x 25Gb ports on eth1 and eth2 using SFP28 transceivers and OM4 fiber cable for backup network, and 2x 25Gb ports on eth5 and eth6 using SFP28 transceivers and OM4 fiber cable for client network" },
    { "type": "text", "value": "2x 25Gb ports on eth1 and eth2 using SFP28 transceivers and OM4 fiber cable for backup network, and 2x 10Gb ports on eth3 and eth4 using RJ45 cat6 cable for client network" },
    { "type": "text", "value": "2x 25Gb ports on eth1 and eth2 using SFP28 transceivers and OM4 fibre cable for client network, and 2x 10Gb ports on eth9 and eth10 using RJ45 cat6 cable for backup network" },
    { "type": "text", "value": "2x 10Gb ports on eth1 and eth2 using RJ45 cat6 cable for client network, and 2x 25Gb ports on eth11 and eth12 using SFP28 transceivers and OM4 fiber cable for backup network" }
  ],
  "answer": [
    { "type": "text", "value": "2x 25Gb ports on eth1 and eth2 using SFP28 transceivers and OM4 fiber cable for backup network, and 2x 25Gb ports on eth5 and eth6 using SFP28 transceivers and OM4 fiber cable for client network" },
    { "type": "text", "value": "2x 25Gb ports on eth1 and eth2 using SFP28 transceivers and OM4 fibre cable for client network, and 2x 10Gb ports on eth9 and eth10 using RJ45 cat6 cable for backup network" }
  ]
}, {
  "id": 37,
  "question": [
    { "type": "text", "value": "Which four actions should you take before proceeding with applying updates to your Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Check the Exadata Critical Issues My Oracle Support note 1270094.1 for any issues not added to the latest version of exachk." },
    { "type": "text", "value": "Run patchmgr --all_comp --autofix --autobackup --upgrade --rolling." },
    { "type": "text", "value": "Run the appropriate patchmgr prerequisite check step for each component being updated." },
    { "type": "text", "value": "For database servers, perform a server backup using patchmgr --dbnodes db_list_file --backup --rolling." },
    { "type": "text", "value": "Consult My Oracle Support note 888828.1 to determine the current recommended Exadata software release." },
    { "type": "text", "value": "Run exachk and resolve only WARNINGs that you have not seen before." }
  ],
  "answer": [
    { "type": "text", "value": "Check the Exadata Critical Issues My Oracle Support note 1270094.1 for any issues not added to the latest version of exachk." },
    { "type": "text", "value": "Run the appropriate patchmgr prerequisite check step for each component being updated." },
    { "type": "text", "value": "For database servers, perform a server backup using patchmgr --dbnodes db_list_file --backup --rolling." },
    { "type": "text", "value": "Consult My Oracle Support note 888828.1 to determine the current recommended Exadata software release." }
  ]
}, {
  "id": 38,
  "question": [
    { "type": "text", "value": "Consider the following command:\n\n./patchmgr -cells dm01 -patch -rolling\n\nWhich two actions does this command perform?" }
  ],
  "options": [
    { "type": "text", "value": "upgrades one or more Exadata Storage Servers listed in the dm01 file" },
    { "type": "text", "value": "rolls back one or more Exadata Storage Servers to the previous release" },
    { "type": "text", "value": "upgrades one or more Exadata Storage Servers simultaneously" },
    { "type": "text", "value": "upgrades one or more Exadata Storage Servers and RDMA Fabric Switches" },
    { "type": "text", "value": "upgrades an Exadata Storage Server named dm01" },
    { "type": "text", "value": "upgrades one or more Exadata Storage Servers, one at a time" }
  ],
  "answer": [
    { "type": "text", "value": "upgrades one or more Exadata Storage Servers listed in the dm01 file" },
    { "type": "text", "value": "upgrades one or more Exadata Storage Servers, one at a time" }
  ]
}, {
  "id": 39,
  "question": [
    { "type": "text", "value": "Your customer would like to configure monitoring capabilities alongside Auto Service Request (ASR) on the stand-alone server that was set aside to run ASR Manager.\n\nWhat configuration should you set up for the customer?" }
  ],
  "options": [
    { "type": "text", "value": "Enterprise Manager and ASR Manager on the stand-alone server because ASR is not a monitoring tool." },
    { "type": "text", "value": "ASR Manager with SNMP traps configured to listen for specific alerts triggered by Exadata Intergrated Lights Out Manager (ILOM)." },
    { "type": "text", "value": "Enterprise Manager, Exachk and ASR Manager on the stand-alone server because ASR needs Exachk for continuous Hardware monitoring." },
    { "type": "text", "value": "ASR Manager inside the firewall along with ExaWatcher to monitor Database and Storage Server performance." }
  ],
  "answer": [
    { "type": "text", "value": "Enterprise Manager and ASR Manager on the stand-alone server because ASR is not a monitoring tool." }
  ]
}, {
  "id": 40,
  "question": [
    { "type": "text", "value": "What type of SRs does the ASR Manager generate for Exadata?" }
  ],
  "options": [
    { "type": "text", "value": "operating system components" },
    { "type": "text", "value": "data entry errors" },
    { "type": "text", "value": "hardware assets" },
    { "type": "text", "value": "backup and restore failures" },
    { "type": "text", "value": "software assets" }
  ],
  "answer": [
    { "type": "text", "value": "hardware assets" }
  ]
}, {
  "id": 41,
  "question": [
    { "type": "text", "value": "Which three are available options on an Exadata Database Machine, for staging files that will be loaded as external tables?" }
  ],
  "options": [
    { "type": "text", "value": "a ZFS over NFS file system mounted on a database server where the external table will be accessed" },
    { "type": "text", "value": "on local storage on one or more storage servers that are accessible to the database server where the load will be performed" },
    { "type": "text", "value": "on an ACFS file system stored in a staging database on the Database Machine" },
    { "type": "text", "value": "a DBFS file system stored in a staging database on the Database Machine" },
    { "type": "text", "value": "an Exadata-based ACFS file system on the Database Machine" }
  ],
  "answer": [
    { "type": "text", "value": "a ZFS over NFS file system mounted on a database server where the external table will be accessed" },
    { "type": "text", "value": "a DBFS file system stored in a staging database on the Database Machine" },
    { "type": "text", "value": "an Exadata-based ACFS file system on the Database Machine" }
  ]
}, {
  "id": 42,
  "question": [
    { "type": "text", "value": "Which are two valid reasons for executing an X9M-2 Exadata storage server rescue procedure?" }
  ],
  "options": [
    { "type": "text", "value": "the failure of physical disk 1" },
    { "type": "text", "value": "corruption in a normal or high redundancy ASM diskgroup" },
    { "type": "text", "value": "the failure of physical disk 0 and 11" },
    { "type": "text", "value": "corruption in the / (root) filesystem" },
    { "type": "text", "value": "the failure of both physical M.2 disks" },
    { "type": "text", "value": "moving all disks from one cell to another as part of a chassis-level component failure" },
    { "type": "text", "value": "accidental loss of all data from all griddsks in a storage server" }
  ],
  "answer": [
    { "type": "text", "value": "corruption in the / (root) filesystem" },
    { "type": "text", "value": "the failure of both physical M.2 disks" }
  ]
}, {
  "id": 43,
  "question": [
    { "type": "text", "value": "Assume that the RDBMS and ASM instances are up and you are enabling write-back flash cache in one cell server at a time.\n\nWhich step(s) should you perform before executing the following command on your Exadata X9M-8 Database Machine, which will set the cell flash cache mode to write-back?\n\n> celicli -o alter cell flashCacheMode=WriteBack" }
  ],
  "options": [
    { "type": "text", "value": "Inactivate the grid disks on the cell." },
    { "type": "text", "value": "Drop the existing flash cache on the cell." },
    { "type": "text", "value": "Inactivate all the physical disks on the cell." },
    { "type": "text", "value": "Disable the storage indexes on the cell." },
    { "type": "text", "value": "Create a new flash cache on the cell." },
    { "type": "text", "value": "Shut down the CELLSRV service on the cell." }
  ],
  "answer": [
    { "type": "text", "value": "Drop the existing flash cache on the cell." }
  ]
}, {
  "id": 44,
  "question": [
    { "type": "text", "value": "Which two statements are true about the three types of Exadata X9M-2 storage servers: the High Capacity (HC) storage server, the Extreme Flash (EF) storage server and the Extended (XT) storage server?" }
  ],
  "options": [
    { "type": "text", "value": "The EF storage server contains 8 x 6.4 TB PCIe flash cards, and can be upgraded with 4 more for a total of 12." },
    { "type": "text", "value": "The XT storage server is an all-disk storage server with no flash, containing 12 x 18 TB hard disks, and 1.5 TB Persistent Memory." },
    { "type": "text", "value": "The EF storage server contains 8 x 6.4 TB PCIe flash cards and 756 GB Persistent Memory." },
    { "type": "text", "value": "The EF storage server contains 8 x 6.4 TB PCIe flash cards." },
    { "type": "text", "value": "The HC storage server contains 12 x 18 TB hard disks, 4 x 6.4 TB PCIe flash cards, and 1.5 TB Persistent Memory." }
  ],
  "answer": [
    { "type": "text", "value": "The EF storage server contains 8 x 6.4 TB PCIe flash cards." },
    { "type": "text", "value": "The HC storage server contains 12 x 18 TB hard disks, 4 x 6.4 TB PCIe flash cards, and 1.5 TB Persistent Memory." }
  ]
}, {
  "id": 45,
  "question": [
    { "type": "text", "value": "What is the fastest to slowest access order that data is tiered on the Exadata X9M?" }
  ],
  "options": [
    { "type": "text", "value": "DRAM, Flashcache, PMem, Hard Disk" },
    { "type": "text", "value": "Hard Disk, Flashcache, PMem, DRAM" },
    { "type": "text", "value": "DRAM, PMem, Flashcache, Hard Disk" },
    { "type": "text", "value": "PMem, DRAM, Flashcache, Hard Disk" }
  ],
  "answer": [
    { "type": "text", "value": "DRAM, PMem, Flashcache, Hard Disk" }
  ]
}, {
  "id": 46,
  "question": [
    { "type": "text", "value": "How many Persistent Memory DIMMs are installed in a X9M-2 Storage Server (HC and EF)?" }
  ],
  "options": [
    { "type": "text", "value": "8" },
    { "type": "text", "value": "4" },
    { "type": "text", "value": "32" },
    { "type": "text", "value": "12" },
    { "type": "text", "value": "16" }
  ],
  "answer": [
    { "type": "text", "value": "12" }
  ]
}, {
  "id": 47,
  "question": [
    { "type": "text", "value": "What is the maximum DRAM capacity you can expand an X9M-2 DB Server?" }
  ],
  "options": [
    { "type": "text", "value": "512GB" },
    { "type": "text", "value": "2048GB" },
    { "type": "text", "value": "1536GB" },
    { "type": "text", "value": "384GB" },
    { "type": "text", "value": "1024GB" },
    { "type": "text", "value": "768GB" }
  ],
  "answer": [
    { "type": "text", "value": "2048GB" }
  ]
}, {
  "id": 48,
  "question": [
    { "type": "text", "value": "Which two options describe the flash memory capabilities of the Exadata X9M-2 database and storage servers?" }
  ],
  "options": [
    { "type": "text", "value": "8 x 6.4 TB NVMe flash cards on the Extreme Flash (EF) storage server" },
    { "type": "text", "value": "8 x 6.4 TB NVMe flash cards on the Extended (XT) storage server" },
    { "type": "text", "value": "No flash storage on the database server" },
    { "type": "text", "value": "4 x 6.4 TB NVMe flash cards on the High Capacity (HC) storage server" },
    { "type": "text", "value": "4 x 6.4 TB NVMe flash cards on the database server" }
  ],
  "answer": [
    { "type": "text", "value": "8 x 6.4 TB NVMe flash cards on the Extreme Flash (EF) storage server" },
    { "type": "text", "value": "4 x 6.4 TB NVMe flash cards on the database server" }
  ]
}, {
  "id": 49,
  "question": [
    { "type": "text", "value": "Which two activities are supported on the storage servers in an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "configuring secure shell user equivalency for the cellmonitor user" },
    { "type": "text", "value": "upgrading a device driver for hard disks when inserting a replacement disk after a hard disk failure" },
    { "type": "text", "value": "installing an alternative package manager" },
    { "type": "text", "value": "changing the root password" },
    { "type": "text", "value": "upgrading the Storage Server software package using RPM" }
  ],
  "answer": [
    { "type": "text", "value": "changing the root password" },
    { "type": "text", "value": "upgrading the Storage Server software package using RPM" }
  ]
}, {
  "id": 50,
  "question": [
    { "type": "text", "value": "Which statement is true about the patching features provided in Platinum Services?" }
  ],
  "options": [
    { "type": "text", "value": "Oracle Platinum Service covers Exadata storage software and firmware patching, but customers must perform the database patching." },
    { "type": "text", "value": "The rolling and complete down time approaches are two options to patching." },
    { "type": "text", "value": "Patching is done automatically during business hours." },
    { "type": "text", "value": "Patching services are available for the full software stack up to twice per year." }
  ],
  "answer": [
    { "type": "text", "value": "Patching services are available for the full software stack up to twice per year." }
  ]
}, {
  "id": 51,
  "question": [
    { "type": "text", "value": "Your system administrator reports an amber, non-blinking light on one of your Exadata storage disks.\n\nYou immediately execute the LIST PHYSICALDISK WHERE diskType=HardDisk AND status='failed DETAIL' command on the Exadata storage system and the specified disk is indeed reported as failed.\n\nPlatinum Support has not been enabled for this system. Enterprise Manager Cloud Control is monitoring the system.\n\nWhat is the next step that you should perform before you do anything else?" }
  ],
  "options": [
    { "type": "text", "value": "Ask the system administrator to replace the broken disk with a spare." },
    { "type": "text", "value": "Wait for a blue light to appear on the disk." },
    { "type": "text", "value": "Call Oracle Support and make an appointment so that the drive can be replaced." },
    { "type": "text", "value": "Download and run the latest exadiag tool." },
    { "type": "text", "value": "Wait for the email of the failure that Exadata or Enterprise Manager will send." }
  ],
  "answer": [
    { "type": "text", "value": "Download and run the latest exadiag tool." }
  ]
}, {
  "id": 52,
  "question": [
    { "type": "text", "value": "Which two statements are correct about adding an additional database server to a physical Exadata X9M Database Machine using Oracle Exadata Deployment Assistant (OEDA)?" }
  ],
  "options": [
    { "type": "text", "value": "It is required to install OEDA on the first new database server." },
    { "type": "text", "value": "Executing /opt/oracle.SupportTools/reclaimdisks.sh -free -reclaim on each Exadata X9M Database server is required to reclaim disk space and perform partition reconfiguration." },
    { "type": "text", "value": "The applyElasticConfig.sh script performs network configuration for the new servers. The new servers are restarted at the end of the process." },
    { "type": "text", "value": "In order to configure the servers with Oracle Exadata Deployment Assistant (OEDA), the new server information must be entered in OEDA, and the configuration file must contain existing nodes." },
    { "type": "text", "value": "Do not proceed if the OEDA Validate Configuration File step displays an error message about missing files p688080.zip." }
  ],
  "answer": [
    { "type": "text", "value": "The applyElasticConfig.sh script performs network configuration for the new servers. The new servers are restarted at the end of the process." },
    { "type": "text", "value": "In order to configure the servers with Oracle Exadata Deployment Assistant (OEDA), the new server information must be entered in OEDA, and the configuration file must contain existing nodes." }
  ]
}, {
  "id": 53,
  "question": [
    { "type": "text", "value": "Examine these commands:\n\nExecute \"crsctl stop cluster -all\" as the grid user from one database server.\nExecute \"crsctl stop cluster -all\" as root from one database server.\nPower off all network switches.\nExecute \"crsctl stop cluster\" as root from one database server.\nExecute \"crsctl stop cluster\" as the grid user from one database server.\nPower off the rack using the power switches on the PDUs.\nExecute \"shutdown -h now\" on all database servers.\nExecute \"shutdown -h now\" on all Exadata storage servers.\n\nWhich is the correct order or the required commands to completely power off an Exadata Database Machine in an orderly fashion?" }
  ],
  "options": [
    { "type": "text", "value": "2, 8, 7, 3, and 6" },
    { "type": "text", "value": "4, 7, 8, 3, and 6" },
    { "type": "text", "value": "1, 8, 7, 3 and 6" },
    { "type": "text", "value": "5, 8, 7, and 6" },
    { "type": "text", "value": "2, 7, 8, and 6" }
  ],
  "answer": [
    { "type": "text", "value": "2, 8, 7, 3, and 6" }
  ]
}, {
  "id": 54,
  "question": [
    { "type": "text", "value": "Which are two correct statements about backing up Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "The M.2 disk is hot pluggable and can be replaced when the power is on, but you will have to restore the system data manually." },
    { "type": "text", "value": "Use a snapshot-based backup of an Oracle Exadata Database Machine database server software." },
    { "type": "text", "value": "For high availability, system area can be on the first two disks and M.2 devices." },
    { "type": "text", "value": "Backup of the Oracle Cluster Registry, which also contains Voting Disk information, is automatically maintained on the file system of the first database server." },
    { "type": "text", "value": "Backing up Exadata Storage Server Software is critical for restoration." }
  ],
  "answer": [
    { "type": "text", "value": "Use a snapshot-based backup of an Oracle Exadata Database Machine database server software." },
    { "type": "text", "value": "Backing up Exadata Storage Server Software is critical for restoration." }
  ]
}, {
  "id": 55,
  "question": [
    { "type": "text", "value": "Which three component faults are covered by Oracle Auto Service Request (ASR)?" }
  ],
  "options": [
    { "type": "text", "value": "System Controller (SC)" },
    { "type": "text", "value": "File system unmounted" },
    { "type": "text", "value": "Proactive recommendations for firmware" },
    { "type": "text", "value": "I/O boards" },
    { "type": "text", "value": "RoCE network interface cards" },
    { "type": "text", "value": "Fan trays" }
  ],
  "answer": [
    { "type": "text", "value": "System Controller (SC)" },
    { "type": "text", "value": "I/O boards" },
    { "type": "text", "value": "Fan trays" }
  ]
}, {
  "id": 56,
  "question": [
    { "type": "text", "value": "Which two statements are true about Auto Service Request (ASR) with an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "ASR can upload configuration metadata to support problem resolution." },
    { "type": "text", "value": "ASR Manager must be installed and configured on a dedicated server external to the Database Machine." },
    { "type": "text", "value": "ASR communicates with Oracle support services using HTTPS." },
    { "type": "text", "value": "ASR Manager opens a service request (SR) automatically after sensors detect hardware faults." },
    { "type": "text", "value": "Configuring ASR is mandatory for all Database Machine assets." },
    { "type": "text", "value": "ASR Manager must be installed and configured on one of the database servers." }
  ],
  "answer": [
    { "type": "text", "value": "ASR can upload configuration metadata to support problem resolution." },
    { "type": "text", "value": "ASR Manager opens a service request (SR) automatically after sensors detect hardware faults." }
  ]
}, {
  "id": 57,
  "question": [
    { "type": "text", "value": "Which command should you use to restart a virtual machine?" }
  ],
  "options": [
    { "type": "text", "value": "vm_maker --restart-domain --boot-from-hd virtual_machine_name" },
    { "type": "text", "value": "vm_maker --restart virtual_machine_name" },
    { "type": "text", "value": "vm_maker --reboot virtual_machine_name" },
    { "type": "text", "value": "virsh restart virtual_machine_name" }
  ],
  "answer": [
    { "type": "text", "value": "vm_maker --reboot virtual_machine_name" }
  ]
}, {
  "id": 58,
  "question": [
    { "type": "text", "value": "Which two statements are true about the initial storage configuration after the standard (non-virtualized) deployment of a new Exadata Database Machine with High Capacity storage servers?" }
  ],
  "options": [
    { "type": "text", "value": "The DATA_<DBM_Name> and RECO_<DBM_NAME> ASM diskgroups are built on with DATA on the outer-most tracks and RECO on the inner-most tracks of the physical disk." },
    { "type": "text", "value": "There is free space available on the hard disks inside the database servers for possible extension of the /u01 file system." },
    { "type": "text", "value": "The SPARSE_<DBM_NAME> diskgroup is created automatically." },
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers for possible use for storage indexes." },
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers to configure Exadata Smart Flash Logs." }
  ],
  "answer": [
    { "type": "text", "value": "The DATA_<DBM_Name> and RECO_<DBM_NAME> ASM diskgroups are built on with DATA on the outer-most tracks and RECO on the inner-most tracks of the physical disk." },
    { "type": "text", "value": "There is free space available on flashdisks inside the Exadata storage servers to configure Exadata Smart Flash Logs." }
  ]
}, {
  "id": 59,
  "question": [
    { "type": "text", "value": "Which are two correct statements for managing virtual deployment using Oracle Exadata Deployment Assistant (OEDA)?" }
  ],
  "options": [
    { "type": "text", "value": "OEDA deployment steps include calibrate cells, create cell disks, and resecure machine." },
    { "type": "text", "value": "There is no limit on the number of VMs in an Exadata rack as long as the Exadata rack has adequate resources." },
    { "type": "text", "value": "OEDA sets up key-based authentication for the root user by using the setuprootssh.sh utility included with OEDA." },
    { "type": "text", "value": "OEDA allows customers to have both bare metal (BM) and virtual machine (VM) in an Exadata X9M Quarter Rack." }
  ],
  "answer": [
    { "type": "text", "value": "OEDA deployment steps include calibrate cells, create cell disks, and resecure machine." },
    { "type": "text", "value": "OEDA sets up key-based authentication for the root user by using the setuprootssh.sh utility included with OEDA." }
  ]
}, {
  "id": 60,
  "question": [
    { "type": "text", "value": "In order to support a new application, you are planning to add a RAC VM cluster to an existing Oracle Exadata Machine X9M-2 deployment.\n\nWhich two methods can be considered?" }
  ],
  "options": [
    { "type": "text", "value": "Use domu maker utility." },
    { "type": "text", "value": "Use the OEDA web-based configuration tool." },
    { "type": "text", "value": "Use the xm command." },
    { "type": "text", "value": "Use Oracle VM Manager." },
    { "type": "text", "value": "Use the OEDA Command line interface." }
  ],
  "answer": [
    { "type": "text", "value": "Use the OEDA web-based configuration tool." },
    { "type": "text", "value": "Use the OEDA Command line interface." }
  ]
}, {
  "id": 61,
  "question": [
    { "type": "text", "value": "You have a script with several CELLCLI commands that must be executed on each cell in your\n\nThe script must run on each cell simultaneously.\n\nHow must you achieve this?" }
  ],
  "options": [
    { "type": "text", "value": "Copy and execute the script on all storage servers using the DCLI command." },
    { "type": "text", "value": "Copy the script to all storage servers using the CELLCLI command and execute it on all storage servers in parallel using the DCLI command." },
    { "type": "text", "value": "Copy the script to all storage servers using the DCLI command and manually execute it on each storage server using the DCLI command." },
    { "type": "text", "value": "Copy the script to all storage servers using the DCLI command and manually execute it on all storage servers using the EXACLI command." },
    { "type": "text", "value": "Copy and execute the script on all storage servers using the EXACLI command." }
  ],
  "answer": [
    { "type": "text", "value": "Copy and execute the script on all storage servers using the DCLI command." }
  ]
}, {
  "id": 62,
  "question": [
    { "type": "text", "value": "You have configured a multirack Database Machine with two X9M-8 full racks all in a single cluster and storage grid comprising a total of 4 Database servers and 28 X9M-8 Storage servers.\n\nWhich two options are true regarding the servers on which Enterprise Manager agents must be deployed in order to monitor all components of this multirack configuration?" }
  ],
  "options": [
    { "type": "text", "value": "on all database servers and at least two storage servers in both racks" },
    { "type": "text", "value": "on all database servers in both racks and one storage server in each rack" },
    { "type": "text", "value": "on all database servers in the second rack" },
    { "type": "text", "value": "on at least two storage servers in both racks" },
    { "type": "text", "value": "on only one database server in both racks" },
    { "type": "text", "value": "on all storage servers in both racks" },
    { "type": "text", "value": "on all database servers in the first rack" }
  ],
  "answer": [
    { "type": "text", "value": "on all database servers and at least two storage servers in both racks" },
    { "type": "text", "value": "on all database servers in both racks and one storage server in each rack" }
  ]
}, {
  "id": 63,
  "question": [
    { "type": "text", "value": "What is the total PMem capacity per X9M-2 High Capacity (HC) or Extreme Flash (EF) Storage Server?" }
  ],
  "options": [
    { "type": "text", "value": "512GB" },
    { "type": "text", "value": "2048GB" },
    { "type": "text", "value": "384GB" },
    { "type": "text", "value": "768GB" },
    { "type": "text", "value": "1024GB" },
    { "type": "text", "value": "1536GB" }
  ],
  "answer": [
    { "type": "text", "value": "1536GB" }
  ]
}, {
  "id": 64,
  "question": [
    { "type": "text", "value": "You plan to monitor the status of the motherboard, memory, power, fans, and network cards on the database nodes in your Exadata Database Machine using Enterprise Manager.\n\nWhere must you set the thresholds for these hardware components and why, to assure that sensor readings, faults, and any related alerts, are visible in Enterprise Manager?" }
  ],
  "options": [
    { "type": "text", "value": "No thresholds need to be set because they are preset in the ILOM and in Enterprise Manager." },
    { "type": "text", "value": "No thresholds need to be set because they are preset in the ILOM and these are sufficient for monitoring." },
    { "type": "text", "value": "Set thresholds in ILOM and in Enterprise Manager because they are not preset anywhere and must be set in both places." },
    { "type": "text", "value": "Set thresholds only in ILOM because they are not preset anywhere but need to be set only in ILOM." }
  ],
  "answer": [
    { "type": "text", "value": "No thresholds need to be set because they are preset in the ILOM and in Enterprise Manager." }
  ]
}, {
  "id": 65,
  "question": [
    { "type": "text", "value": "You are updating your Exadata X9M-2 Elastic Database Machine with 6 database servers and 12 High Capacity Storage Servers.\n\nYou will be using patchmgr to apply updates across the entire machine while still maintaining database availability.\n\nAssuming you are driving patchmgr from an external server, which statement is true about the execution phase?" }
  ],
  "options": [
    { "type": "text", "value": "patchmgr will apply patches in component groups consisting of 1 database server and 2 storage servers to minimize disruption." },
    { "type": "text", "value": "patchmgr cannot apply updates in a rolling manner; you must manually apply patches with the dbnodendpdate and cellupdate tools if high availability is required." },
    { "type": "text", "value": "patchmgr must be invoked with the --rolling argument. Each component type must be upgraded independently of the other." },
    { "type": "text", "value": "patchmgr must be invoked with the --rolling argument with all database and storage servers listed in a single input file." }
  ],
  "answer": [
    { "type": "text", "value": "patchmgr must be invoked with the --rolling argument with all database and storage servers listed in a single input file." }
  ]
}, {
  "id": 66,
  "question": [
    { "type": "text", "value": "Which three statements are true about SPARSE griddisks and their use in disk groups on an Exadata Database Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Sparse diskgroups must be created using sparse griddisks." },
    { "type": "text", "value": "Sparse diskgroups are created automatically." },
    { "type": "text", "value": "Sparse diskgroups store changed extents from the underlying Read-Only Test Master updated by the Exadata Snapshot database." },
    { "type": "text", "value": "The virtual size of a sparse griddisk may exceed the physical size of the space occupied by the griddisk." },
    { "type": "text", "value": "The maximum physical size for a sparse grid disk per cell disk is 10TB and the maximum virtual size for the same sparse grid is 100 TB." },
    { "type": "text", "value": "Sparse diskgroups may not be used for database snapshots." }
  ],
  "answer": [
    { "type": "text", "value": "Sparse diskgroups must be created using sparse griddisks." },
    { "type": "text", "value": "Sparse diskgroups store changed extents from the underlying Read-Only Test Master updated by the Exadata Snapshot database." },
    { "type": "text", "value": "The virtual size of a sparse griddisk may exceed the physical size of the space occupied by the griddisk." }
  ]
}, {
  "id": 67,
  "question": [
    { "type": "text", "value": "Which are three customer options for hosting the Platinum Services Advanced Support Gateway?" }
  ],
  "options": [
    { "type": "text", "value": "Install on Oracle Database Appliance." },
    { "type": "text", "value": "Install in Oracle Virtual Machine with required hardware." },
    { "type": "text", "value": "Purchase the recommended x86 64-Bit gateway hardware from Oracle." },
    { "type": "text", "value": "Install on Exadata Engineered System." },
    { "type": "text", "value": "Provide individual x86 64-Bit gateway hardware." }
  ],
  "answer": [
    { "type": "text", "value": "Install in Oracle Virtual Machine with required hardware." },
    { "type": "text", "value": "Purchase the recommended x86 64-Bit gateway hardware from Oracle." },
    { "type": "text", "value": "Provide individual x86 64-Bit gateway hardware." }
  ]
}, {
  "id": 68,
  "question": [
    { "type": "text", "value": "When preparing to install ASR on your customer's Exadata Database Machine, which user account will you use first to configure the Exadata Database Server?" }
  ],
  "options": [
    { "type": "text", "value": "oracle" },
    { "type": "text", "value": "root" },
    { "type": "text", "value": "asruser" },
    { "type": "text", "value": "opc" },
    { "type": "text", "value": "asradmin" },
    { "type": "text", "value": "asmadmin" }
  ],
  "answer": [
    { "type": "text", "value": "root" }
  ]
}, {
  "id": 69,
  "question": [
    { "type": "text", "value": "What is the minimum Oracle Linux version required to support RoCE and Persistent Memory?" }
  ],
  "options": [
    { "type": "text", "value": "Oracle Linux 8.0" },
    { "type": "text", "value": "Oracle Linux 6.9" },
    { "type": "text", "value": "Oracle Linux 7.7" },
    { "type": "text", "value": "Oracle Linux 7.5" }
  ],
  "answer": [
    { "type": "text", "value": "Oracle Linux 7.7" }
  ]
}, {
  "id": 70,
  "question": [
    { "type": "text", "value": "When receiving an Exadata Database Machine rack on site, which of the following statements is INCORRECT?" }
  ],
  "options": [
    { "type": "text", "value": "Pushing on the side panels can tip the rack over." },
    { "type": "text", "value": "Front casters do not turn, you must steer the unit by moving the rear casters." },
    { "type": "text", "value": "Four leveling feet share the load with the casters." },
    { "type": "text", "value": "Push Oracle Exadata Rack from behind when moving into place." },
    { "type": "text", "value": "Reuse the shipping brackets to permanently mount the rack to the floor." }
  ],
  "answer": [
    { "type": "text", "value": "Reuse the shipping brackets to permanently mount the rack to the floor." }
  ]
}, {
  "id": 71,
  "question": [
    { "type": "text", "value": "Which two statements are true in regards to starting the Exadata Virtual Machine?" }
  ],
  "options": [
    { "type": "text", "value": "Use vm_maker --auto-start command to configure a virtual machine to start automatically when the KVM host is started." },
    { "type": "text", "value": "To see Oracle Linux boot messages during guest startup, use --console option with the vm_maker --start-domain command." },
    { "type": "text", "value": "To streamline the diagnosis of virtual machines, one ISO file is used for multiple Oracle Exadata System Software releases." },
    { "type": "text", "value": "Use vm_maker boot-from-iso command to boot a virtual machine." },
    { "type": "text", "value": "Use vm_maker --start-domain to start a virtual machine manually." }
  ],
  "answer": [
    { "type": "text", "value": "To see Oracle Linux boot messages during guest startup, use --console option with the vm_maker --start-domain command." },
    { "type": "text", "value": "Use vm_maker --start-domain to start a virtual machine manually." }
  ]
}]; 

export default list; 