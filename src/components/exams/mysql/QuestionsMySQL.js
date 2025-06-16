const list = [{
    "id": 1,
    "question": [
      { "type": "text", "value": "Examine this SQL statement:" },
      { "type": "command", "value": `UPDATE world.city
SET Population = Population * 1.1
WHERE CountryCode IN (SELECT Code FROM world.country
WHERE Continent = 'Asia')` },
      { "type": "text", "value": "Which set of privileges will allow Tom to execute this SQL statement?" }
    ],
    "options": [
      { "type": "command", "value": `GRANT ALL PRIVILEGES ON 'world'.'city' TO 'tom'@'%'; 
GRANT SELECT ('code') ON 'world'.'country' TO 'tom'@'%';` },
      { "type": "command", "value": `GRANT UPDATE ON 'world'.* TO 'tom'@'%'; 
GRANT ALL PRIVILEGES ON 'world'.'country' TO 'tom'@'%';` },
      { "type": "command", "value": `GRANT UPDATE ON 'world'.'city' TO 'tom'@'%'; 
GRANT SELECT ON 'world'.* TO 'tom'@'%';` },
      { "type": "command", "value": `GRANT UPDATE ON 'world'.'city' TO 'tom'@'%'; 
GRANT SELECT ON 'world'.'country' TO 'tom'@'%'` }
    ],
    "answer": [{ "type": "command", "value": `GRANT UPDATE ON 'world'.'city' TO 'tom'@'%'; 
GRANT SELECT ON 'world'.'country' TO 'tom'@'%';` }]
}, {
    "id": 2,
    "question": [
      { "type": "text", "value": "Which two MySQL Server accounts are locked by default? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "any user set as DEFINER for stored programs" },
      { "type": "text", "value": "any internal system accounts" },
      { "type": "text", "value": "any new ROLE accounts" },
      { "type": "text", "value": "any user created without a password" },
      { "type": "text", "value": "any user created with a username, but missing the host name" }
    ],
    "answer": [
      { "type": "text", "value": "any internal system accounts" },
      { "type": "text", "value": "any new ROLE accounts" }
    ]
}, {
    "id": 3,
    "question": [
      { "type": "text", "value": "t is a non-empty InnoDB table. Examine these statements, which are executed in one session:" },
      { "type": "command", "value": `BEGIN;
SELECT * FROM t FOR UPDATE;` },
      { "type": "text", "value": "Which is true?" }
    ],
    "options": [
      { "type": "text", "value": "If OPTIMIZE TABLE; is invoked, it will create a table lock on t and force a transaction rollback." },
      { "type": "text", "value": "If OPTIMIZE LOCAL TABLE t; is invoked from another session, it executes normally and returns the status." },
      { "type": "text", "value": "mysqlcheck --analyze --all-databases will execute normally on all tables and return a report." },
      { "type": "text", "value": "If ANALYZE TABLE; is invoked from the same session, it hangs until the transaction is committed or rolled back." }
    ],
    "answer": [
      { "type": "text", "value": "If ANALYZE TABLE; is invoked from the same session, it hangs until the transaction is committed or rolled back." }
    ]
}, {
    "id": 4,
    "question": [
      { "type": "text", "value": "A user wants to connect without entering his or her username and password on the Linux command prompt." },
      { "type": "text", "value": "Which three locations can be used to store the user's MySQL credentials to satisfy this requirement? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "$HOME/.my.cnf file" },
      { "type": "text", "value": "$MYSQL_HOME/my.cnf file" },
      { "type": "text", "value": "DATADIR/mysqld-auto.cnf file" },
      { "type": "text", "value": "$HOME/.mylogin.cnf file" },
      { "type": "text", "value": "$HOME/.mysql/auth/login file" },
      { "type": "text", "value": "/etc/my.cnf file" },
      { "type": "text", "value": "$HOME/.mysqlrc file" }
    ],
    "answer": [
      { "type": "text", "value": "$HOME/.my.cnf file" },
      { "type": "text", "value": "$HOME/.mylogin.cnf file" },
      { "type": "text", "value": "/etc/my.cnf file" }
    ]
}, {
    "id": 5,
    "question": [
      { "type": "text", "value": "Where is the default data directory located after installing MySQL using RPM on Oracle Linux 7?" }
    ],
    "options": [
      { "type": "text", "value": "/usr/mysql" },
      { "type": "text", "value": "/usr/bin" },
      { "type": "text", "value": "/etc/my.cnf" },
      { "type": "text", "value": "/var/lib/mysql" },
      { "type": "text", "value": "/usr" }
    ],
    "answer": [
      { "type": "text", "value": "/var/lib/mysql" }
    ]
}, {
    "id": 6,
    "question": [
      { "type": "text", "value": "Which two statements are true about using backups of the binary log? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Multiple binary logs can be used to restore data." },
      { "type": "text", "value": "Multiple binary logs can be applied in parallel for faster data restoration." },
      { "type": "text", "value": "Binary logs are relatively small, and therefore, excellent for long-term storage and disaster recovery." },
      { "type": "text", "value": "Binary logs can always be used to unapply unwanted schema changes." },
      { "type": "text", "value": "They allow for point-in-time recovery of the data." }
    ],
    "answer": [
      { "type": "text", "value": "Multiple binary logs can be used to restore data." },
      { "type": "text", "value": "They allow for point-in-time recovery of the data." }
    ]
}, {
    "id": 7,
    "question": [
      { "type": "text", "value": "You want to log only the changes made to the database objects and data on the MySQL system." },
      { "type": "text", "value": "Which log will do this by default?" }
    ],
    "options": [
      { "type": "text", "value": "general query log" },
      { "type": "text", "value": "audit log" },
      { "type": "text", "value": "slow query log" },
      { "type": "text", "value": "binary log" },
      { "type": "text", "value": "error log" }
    ],
    "answer": [
      { "type": "text", "value": "binary log" }
    ]
}, {
    "id": 8,
    "question": [
      { "type": "text", "value": "Examine this MySQL client command to connect to a remote database:" },
      { "type": "command", "value": `mysql -h remote.example.org -u root -p --protocol=TCP --ssl-mode=` },
      { "type": "text", "value": "Which two --ssl-mode values will ensure that an X.509-compliant certificate will be used to establish the SSL/TLS connection to MySQL?" }
    ],
    "options": [
      { "type": "text", "value": "REQUIRED" },
      { "type": "text", "value": "VERIFY_CA" },
      { "type": "text", "value": "VERIFY_IDENTITY" },
      { "type": "text", "value": "PREFERRED" },
      { "type": "text", "value": "DISABLED" }
    ],
    "answer": [
      { "type": "text", "value": "VERIFY_CA" },
      { "type": "text", "value": "VERIFY_IDENTITY" }
    ]
}, {
    "id": 9,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `mysqlpump ---user=root --password > full_backup.sql` },
      { "type": "text", "value": "Which two databases will be excluded from this dump? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "information_schema" },
      { "type": "text", "value": "world" },
      { "type": "text", "value": "employee" },
      { "type": "text", "value": "sys" },
      { "type": "text", "value": "mysql" }
    ],
    "answer": [
      { "type": "text", "value": "information_schema" },
      { "type": "text", "value": "sys" }
    ]
}, {
    "id": 10,
    "question": [
      { "type": "text", "value": "What does the binlog dump thread do?" }
    ],
    "options": [
      { "type": "text", "value": "It monitors and schedules the rotation/deletion of the binary logs." },
      { "type": "text", "value": "It reads the relay log and executes the events contained in them." },
      { "type": "text", "value": "It acquires a lock on the binary log for reading each event to be sent to the slave." },
      { "type": "text", "value": "It connects to the master and asks it to send updates recorded in its binary logs." }
    ],
    "answer": [
      { "type": "text", "value": "It connects to the master and asks it to send updates recorded in its binary logs." }
    ]
}, {
    "id": 11,
    "question": [
      { "type": "text", "value": "You plan to take daily full backups, which include the ndbinfo and sys (internal) databases." },
      { "type": "text", "value": "Which command will back up the databases in parallel?" }
    ],
    "options": [
      { "type": "command", "value": `mysqldump --single-transaction > full-backup-$(date +%Y%m%d).sql` },
      { "type": "command", "value": `mysqlpump --include-databases=% > full-backup-$(date +%Y%m$d).sql` },
      { "type": "command", "value": `mysqlpump --all-databases > full-backup-$(date +%Y%m%d).sql` },
      { "type": "command", "value": `mysqldump --all-databases > full_backup-$(date +%Y%m%d).sql` }
    ],
    "answer": [
      { "type": "command", "value": `mysqlpump --all-databases > full-backup-$(date +%Y%m%d).sql` }
    ]
}, {
    "id": 12,
    "question": [
      { "type": "text", "value": "You plan to install MySQL Server by using the RPM download." },
      { "type": "text", "value": "Which two statements are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "You can provide the root password interactively." },
      { "type": "text", "value": "You must manually initialize the data directory." },
      { "type": "text", "value": "The MySQL RPM package installation supports deploying multiple MySQL versions on the same host." },
      { "type": "text", "value": "MySQL uses the RPM relocatable installation target feature." },
      { "type": "text", "value": "The functionality is split among several RPM package files." },
      { "type": "text", "value": "You can find the root password in the error log after the first start." }
    ],
    "answer": [
      { "type": "text", "value": "The functionality is split among several RPM package files." },
      { "type": "text", "value": "You can find the root password in the error log after the first start." }
    ]
}, {
    "id": 13,
    "question": [
      { "type": "text", "value": "Which two statements are true about InnoDB data-at-rest encryption? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "It supports only non-blob datatypes." },
      { "type": "text", "value": "It does not support the transportable tablespaces feature." },
      { "type": "text", "value": "It supports all indexes transparently." },
      { "type": "text", "value": "It decrypts data for use in memory." },
      { "type": "text", "value": "It enforces encryption from disk to memory and over network transmission." }
    ],
    "answer": [
      { "type": "text", "value": "It supports all indexes transparently." },
      { "type": "text", "value": "It decrypts data for use in memory." }
    ]
} ,{
    "id": 14,
    "question": [
      { "type": "text", "value": "Examine these statements and output:" },
      { "type": "command", "value": `UPDATE world.city
SET Population = Population * 1.1
WHERE CountryCode IN (SELECT Code FROM world.country
WHERE Continent = 'Asia')` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "The user is logged in with --user=accounting as an option." },
      { "type": "text", "value": "The user is authenticated as the anonymous proxy user ''@'%'." },
      { "type": "text", "value": "The user is authorized as the accounting@localhost user." },
      { "type": "text", "value": "The user is authorized as the rsmith@localhost user." },
      { "type": "text", "value": "The user failed to define a username and the connecting username defaulted to ''@'%'." }
    ],
    "answer": [
      { "type": "text", "value": "The user failed to define a username and the connecting username defaulted to ''@'%'." }
    ]
} ,{
    "id": 15,
    "question": [
      { "type": "text", "value": "Examine this statement:" },
      { "type": "command", "value": `mysql> DROP ROLE r_role1, r_role2;` },
      { "type": "text", "value": "Which two are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "It fails if any of the roles is specified in the mandatory_roles variable." },
      { "type": "text", "value": "You must revoke r_role1 and r_role2 from all users and other roles before dropping the roles." },
      { "type": "text", "value": "Existing connections can continue to use the roles' privileges until they reconnect." },
      { "type": "text", "value": "You must revoke all privileges from r_role1 and r_role2 before dropping the roles." },
      { "type": "text", "value": "It fails if you do not have the ADMIN OPTION of the roles r_role1 and r_role2." },
      { "type": "text", "value": "It fails if at least one of the roles does not exist." }
    ],
    "answer": [
      { "type": "text", "value": "It fails if any of the roles is specified in the mandatory_roles variable." },
      { "type": "text", "value": "It fails if at least one of the roles does not exist." }
    ]
} ,{
    "id": 16,
    "question": [
      { "type": "text", "value": "Which two MySQL Shell commands are excluded from the InnoDB Cluster creation procedure? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": "dba.configureInstance()" },
      { "type": "command", "value": "cluster.setPrimaryInstance()" },
      { "type": "command", "value": "dba.configureLocalInstance()" },
      { "type": "command", "value": "cluster.forceQuorumUsingPartitionOf()" },
      { "type": "command", "value": "cluster.addInstance()" },
      { "type": "command", "value": "dba.createCluster()" },
      { "type": "command", "value": "dba.checkInstanceConfiguration()" }
    ],
    "answer": [
      { "type": "command", "value": "cluster.setPrimaryInstance()" },
      { "type": "command", "value": "cluster.forceQuorumUsingPartitionOf()" }
    ]
} ,{
    "id": 17,
    "question": [
      { "type": "text", "value": "Which two are contained in the InnoDB system tablespace (ibdata1) by default? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "table data" },
      { "type": "text", "value": "primary indexes" },
      { "type": "text", "value": "user privileges" },
      { "type": "text", "value": "InnoDB Data Dictionary" },
      { "type": "text", "value": "change buffer" },
      { "type": "text", "value": "doublewrite buffer" }
    ],
    "answer": [
      { "type": "text", "value": "InnoDB Data Dictionary" },
      { "type": "text", "value": "change buffer" }
    ]
} ,{
    "id": 18,
    "question": [
      { "type": "text", "value": "You execute this command:" },
      { "type": "command", "value": `shell> mysqlpump --exclude-databases=% --users` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "It creates a logical backup of all MySQL user accounts." },
      { "type": "text", "value": "It creates a logical backup of all metadata, but contains no table data." },
      { "type": "text", "value": "It returns an error because the mysqldump command should have been used." },
      { "type": "text", "value": "It creates a logical backup of only the users database." }
    ],
    "answer": [
      { "type": "text", "value": "It creates a logical backup of all MySQL user accounts." }
    ]
} ,{
    "id": 19,
    "question": [
      { "type": "text", "value": "Which two queries are examples of successful SQL injection attacks? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": `SELECT user,passwd FROM members
WHERE user = '?';INSERT INTO members('user','passwd') VALUES
('bob@example.com','secret');--';` },
      { "type": "command", "value": `SELECT id, name FROM user WHERE user.id=(SELECT members.id FROM members);` },
      { "type": "command", "value": `SELECT id, name FROM user WHERE id=23 OR id=32 OR 1=1;` },
      { "type": "command", "value": `SELECT id, name FROM user WHERE id=23 OR id=32 AND 1=1;` },
      { "type": "command", "value": `SELECT email,passwd FROM members
WHERE email = 'INSERT INTO members('email','passwd') VALUES ('bob@example.com','secret');--';` },
      { "type": "command", "value": `SELECT user, phone FROM customers WHERE name = ';  
DROP TABLE users; --';` }
    ],
    "answer": [
      { "type": "command", "value": `SELECT id, name FROM user WHERE id=23 OR id=32 OR 1=1;` },
      { "type": "command", "value": `SELECT user, phone FROM customers WHERE name = ';  
DROP TABLE users; --';` }
    ]
} ,{
    "id": 20,
    "question": [
      { "type": "text", "value": "Which two are true about binary logs used in asynchronous replication? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "They are pushed from the master to the slave." },
      { "type": "text", "value": "They contain events that describe database changes on the master." },
      { "type": "text", "value": "They contain events that describe all queries run on the master." },
      { "type": "text", "value": "They contain events that describe only administrative commands run on the master." },
      { "type": "text", "value": "They are pulled from the master to the slave." }
    ],
    "answer": [
      { "type": "text", "value": "They contain events that describe database changes on the master." },
      { "type": "text", "value": "They are pulled from the master to the slave." }
    ]
} ,{
    "id": 21,
    "question": [
      { "type": "command", "value": `
mysql> SHOW FULL PROCESSLIST;
${` `}
+----+------------------+-----------+------+---------+------+---------------------------------+-------------------------------+
| Id | User             | Host      | db   | Command | Time | State                           | Info                          |
+----+------------------+-----------+------+---------+------+---------------------------------+-------------------------------+
|  6 | event_scheduler  | localhost | NULL | Daemon  |  123 | Waiting on empty queue          | NULL                          |
| 20 | root             | localhost | test | Query   |    0 | NULL                            | NULL                          |
| 21 | root             | localhost | test | Query   |    0 | NULL                            | NULL                          |
| 22 | root             | localhost | test | Query   |    0 | Waiting for table metadata lock | optimize table test.demo_test |
| 24 | root             | localhost | test | Query   |    0 | Waiting for table metadata lock | select * from test.demo_test  |
| 25 | root             | localhost | NULL | Query   |    0 | starting                        | SHOW FULL PROCESSLIST         |
+----+------------------+-----------+------+---------+------+---------------------------------+-------------------------------+` },
      { "type": "command", "value": `mysql> SELECT object_type, object_schema, object_name, lock_type, lock_status, owner_thread_id, owner_event_id
-> FROM performance_schema.metadata_locks WHERE object_schema != 'performance_schema';
${` `}
+-------------+---------------+-------------+-----------------------+-------------+-----------------+----------------+
| OBJECT_TYPE | OBJECT_SCHEMA | OBJECT_NAME | LOCK_TYPE             | LOCK_STATUS | OWNER_THREAD_ID | OWNER_EVENT_ID |
+-------------+---------------+-------------+-----------------------+-------------+-----------------+----------------+
| TABLE       | test          | demo_test   | SHARED_READ           | GRANTED     | 60              | 7              |
| TABLE       | test          | demo_test   | SHARED_WRITE          | GRANTED     | 60              | 9              |
| SCHEMA      | test          | NULL        | INTENTION_EXCLUSIVE   | GRANTED     | 62              | 6              |
| TABLE       | test          | demo_test   | SHARED_NO_READ_WRITE  | PENDING     | 62              | 6              |
+-------------+---------------+-------------+-----------------------+-------------+-----------------+----------------+` },
      { "type": "command", "value": `mysql> SELECT thread_id, processlist_id, processlist_user, parent_thread_id
-> FROM performance_schema.threads WHERE processlist_user='root';
${` `}
+-----------+----------------+----------------+-----------------+
| THREAD_ID | PROCESSLIST_ID | PROCESSLIST_USER | PARENT_THREAD_ID |
+-----------+----------------+----------------+-----------------+
|        60 |             20 | root           | NULL            |
|        61 |             21 | root           | NULL            |
|        62 |             22 | root           | 1               |
|        64 |             24 | root           | 1               |
|        65 |             25 | root           | NULL            |
+-----------+----------------+----------------+-----------------+` },
      { "type": "text", "value": "Which connection ID is holding the metadata lock?" }
    ],
    "options": [
      { "type": "text", "value": "20" },
      { "type": "text", "value": "24" },
      { "type": "text", "value": "21" },
      { "type": "text", "value": "25" },
      { "type": "text", "value": "22" },
      { "type": "text", "value": "6" }
    ],
    "answer": [
      { "type": "text", "value": "20" }
    ]
} ,{
    "id": 22,
    "question": [
      { "type": "text", "value": "Which statement is true about displaying and retrieving data with MySQL Enterprise Monitor Query Analyzer?" }
    ],
    "options": [
      { "type": "text", "value": "The Query Analyzer graph view range selector can extend to cover the same hour over multiple days." },
      { "type": "text", "value": "It is possible to filter a Query Analyzer view graph by database and by table." },
      { "type": "text", "value": "The Query Analyzer can plot a CPU utilization graph for remote hosts with a MySQL Enterprise Service Manager's built-in Agent installation." },
      { "type": "text", "value": "It is possible to export statements included in a graph selection in CSV format." }
    ],
    "answer": [
      { "type": "text", "value": "It is possible to export statements included in a graph selection in CSV format." }
    ]
} ,{
    "id": 23,
    "question": [
      { "type": "text", "value": "The mysqld instance has the connection control plugin enabled with these settings:" },
      { "type": "command", "value": `connection_control_min_connection_delay=1000
connection_control_max_connection_delay=2000` },
      { "type": "text", "value": "The minimum and maximum delays need to be increased to 3000 and 5000, respectively." },
      { "type": "text", "value": "A command is executed:" },
      { "type": "command", "value": `mysql> SET GLOBAL connection_control_min_connection_delay=3000;` },
      { "type": "text", "value": "What is the result?" }
    ],
    "options": [
      { "type": "text", "value": "The minimum value increases to 3000 and the maximum value increases to 4000." },
      { "type": "text", "value": "Only the minimum connection value is increased to 3000." },
      { "type": "text", "value": "The minimum connection value is changed to 2000." },
      { "type": "text", "value": "An error is returned." }
    ],
    "answer": [
      { "type": "text", "value": "An error is returned." }
    ]
} ,{
    "id": 24,
    "question": [
      { "type": "text", "value": "Which two statements are true about MySQL Enterprise Backup? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "It supports backing up only table structures." },
      { "type": "text", "value": "It can perform hot or warm backups." },
      { "type": "text", "value": "It creates logical backups." },
      { "type": "text", "value": "It supports the creation of incremental backups." },
      { "type": "text", "value": "It supports backup of a remote MySQL system." },
      { "type": "text", "value": "It supports restoring to a remote MySQL system." }
    ],
    "answer": [
      { "type": "text", "value": "It can perform hot or warm backups." },
      { "type": "text", "value": "It supports the creation of incremental backups." }
    ]
} ,{
    "id": 25,
    "question": [
      { "type": "text", "value": "What is the correct syntax for using transparent data encryption with an existing InnoDB table?" }
    ],
    "options": [
      { "type": "command", "value": `ALTER TABLE t1 ADD ENCRYPTED_TABLESPACE = 'Y';` },
      { "type": "command", "value": `ALTER TABLE t1 ENCRYPTION='Y';` },
      { "type": "command", "value": `ALTER TABLE t1 WITH ENCRYPTION USING MASTER KEY;` },
      { "type": "command", "value": `ALTER TABLE t1 SET TDE = 'ON';` }
    ],
    "answer": [
      { "type": "command", "value": `ALTER TABLE t1 ENCRYPTION='Y';` }
    ]
} ,{
    "id": 26,
    "question": [
      { "type": "text", "value": "Your MySQL installation is running low on space due to binary logs. You need to reduce your log space usage urgently." },
      { "type": "text", "value": "Which two sets of actions when completed will accomplish this? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Use SET GLOBAL binlog_expire_logs_seconds=<value> and restart the server." },
      { "type": "text", "value": "Set binlog_expire_logs_seconds in my.cnf." },
      { "type": "text", "value": "Set binlog_expire_logs_seconds = 0 in my.cnf and restart the server." },
      { "type": "text", "value": "Use SET PERSIST binlog_expire_logs_seconds=<value>." },
      { "type": "text", "value": "Use PURGE BINARY LOGS to <binlog_name>." },
      { "type": "text", "value": "Use SET GLOBAL binlog_expire_logs_seconds=<value> and run the FLUSH BINARY LOGS command." }
    ],
    "answer": [
      { "type": "text", "value": "Use PURGE BINARY LOGS to <binlog_name>." },
      { "type": "text", "value": "Use SET GLOBAL binlog_expire_logs_seconds=<value> and run the FLUSH BINARY LOGS command." }
    ]
} ,{
    "id": 27,
    "question": [
      { "type": "text", "value": "Which three requirements must be enabled for group replication? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "slave updates logging" },
      { "type": "text", "value": "semi-sync replication plugin" },
      { "type": "text", "value": "primary key or primary key equivalent on every table" },
      { "type": "text", "value": "binary log checksum" },
      { "type": "text", "value": "binary log ROW format" },
      { "type": "text", "value": "binary log MIXED format" },
      { "type": "text", "value": "replication filters" }
    ],
    "answer": [
      { "type": "text", "value": "slave updates logging" },
      { "type": "text", "value": "primary key or primary key equivalent on every table" },
      { "type": "text", "value": "binary log ROW format" }
    ]
} ,{
    "id": 28,
    "question": [
      { "type": "text", "value": "MySQL programs look for option files in standard locations." },
      { "type": "text", "value": "Which method will show the option files and the order in which they are read?" }
    ],
    "options": [
      { "type": "command", "value": `shell> mysqladmin --debug` },
      { "type": "command", "value": `shell> mysql --print-defaults` },
      { "type": "command", "value": `shell> mysqld --help --verbose` },
      { "type": "command", "value": `mysql> SHOW GLOBAL VARIABLES;` }
    ],
    "answer": [
      { "type": "command", "value": `shell> mysqld --help --verbose` }
    ]
} ,{
    "id": 29,
    "question": [
      { "type": "text", "value": "Your MySQL instance is capturing a huge amount of financial transactions every day in the finance database." },
      { "type": "text", "value": "Company policy is to create a backup every day." },
      { "type": "text", "value": "The main tables being updated are prefixed with transactions-." },
      { "type": "text", "value": "These tables are archived into tables that are prefixed with archives- each month." },
      { "type": "command", "value": `mysqlbackup --optimistic-busy-tables="^finance\\.transactions-.*" backup` },
      { "type": "text", "value": "Which optimization process best describes what happens with the redo logs?" }
    ],
    "options": [
      { "type": "text", "value": "The redo logs are backed up first, then the transaction and archive tables." },
      { "type": "text", "value": "The redo logs are backed up only if there are changes showing for the transactions tables." },
      { "type": "text", "value": "The redo logs are not backed up at all." },
      { "type": "text", "value": "The archive tables are backed up first, then the transaction tables and redo logs." },
      { "type": "text", "value": "The transaction tables are backed up first, then the archive tables and redo logs." }
    ],
    "answer": [
      { "type": "text", "value": "The redo logs are backed up only if there are changes showing for the transactions tables." }
    ]
} ,{
    "id": 30,
    "question": [
      { "type": "text", "value": "Which two are true about differences between logical and physical upgrades of MySQL databases? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Post-upgrade table storage requirements after logical upgrades are usually smaller than that after physical upgrades." },
      { "type": "text", "value": "Physical upgrades are performed for current instances on bare metal deployments, whereas logical upgrades are used for virtual machines or containerized instances." },
      { "type": "text", "value": "Logical upgrades are much faster because they do not require restarting the mysqld process." },
      { "type": "text", "value": "Post-upgrade table storage requirements after physical upgrades are usually smaller than that after logical upgrades." },
      { "type": "text", "value": "Physical upgrades are much faster because they do not require restarting the mysqld process." },
      { "type": "text", "value": "Physical upgrades leave data in place, whereas logical upgrades require data to be restored from mysqldump-type backups taken before the upgrades." }
    ],
    "answer": [
      { "type": "text", "value": "Post-upgrade table storage requirements after logical upgrades are usually smaller than that after physical upgrades." },
      { "type": "text", "value": "Physical upgrades leave data in place, whereas logical upgrades require data to be restored from mysqldump-type backups taken before the upgrades." }
    ]
} ,{
    "id": 31,
    "question": [
      { "type": "text", "value": "Which two storage engines provide a view of the data consistent with the storage system at any moment? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "MyISAM" },
      { "type": "text", "value": "NDB" },
      { "type": "text", "value": "MEMORY" },
      { "type": "text", "value": "ARCHIVE" },
      { "type": "text", "value": "InnoDB" }
    ],
    "answer": [
      { "type": "text", "value": "NDB" },
      { "type": "text", "value": "InnoDB" }
    ]
} ,{
    "id": 32,
    "question": [
      { "type": "text", "value": "Which three are requirements for a secure MySQL Server environment? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "Restrict the number of OS users that have access at the OS level." },
      { "type": "text", "value": "Ensure appropriate file system privileges for OS users and groups." },
      { "type": "text", "value": "Minimize the number of non-MySQL Server-related processes running on the server host." },
      { "type": "text", "value": "Encrypt the file system to avoid needing exact file-system permissions." },
      { "type": "text", "value": "Keep the entire software stack on one OS host." },
      { "type": "text", "value": "Run MySQL server as the root user to prevent incorrect sudo settings." }
    ],
    "answer": [
      { "type": "text", "value": "Restrict the number of OS users that have access at the OS level." },
      { "type": "text", "value": "Ensure appropriate file system privileges for OS users and groups." },
      { "type": "text", "value": "Minimize the number of non-MySQL Server-related processes running on the server host." }
    ]
} ,{
    "id": 33,
    "question": [
      { "type": "text", "value": "Which three are types of information stored in the MySQL data dictionary? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "performance metrics" },
      { "type": "text", "value": "InnoDB buffer pool LRU management data" },
      { "type": "text", "value": "access control lists" },
      { "type": "text", "value": "view definitions" },
      { "type": "text", "value": "server runtime configuration" },
      { "type": "text", "value": "server configuration rollback" },
      { "type": "text", "value": "stored procedure definitions" }
    ],
    "answer": [
      { "type": "text", "value": "access control lists" },
      { "type": "text", "value": "view definitions" },
      { "type": "text", "value": "stored procedure definitions" }
    ]
} ,{
    "id": 34,
    "question": [
      { "type": "text", "value": "Examine this command and output:" },
      { "type": "command", "value": `mysql> SHOW GLOBAL STATUS LIKE 'Firewall%';
${` `}
+---------------------------+-------+
| Variable_name             | Value |
+---------------------------+-------+
| Firewall_access_denied    | 7     |
| Firewall_access_granted   | 4     |
| Firewall_access_suspicious| 3     |
| Firewall_cached_entries   | 11    |
+---------------------------+-------+` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "Firewall_cached_entries is the number of statements found in the query cache for users in DETECTING mode." },
      { "type": "text", "value": "Firewall_access_denied is the number of connection attempts from prohibited hosts that are denied." },
      { "type": "text", "value": "Firewall_access_suspicious is the number of statements logged as suspicious for users in DETECTING mode." },
      { "type": "text", "value": "Firewall_access_granted is the number of connections granted from whitelisted hosts." }
    ],
    "answer": [
      { "type": "text", "value": "Firewall_access_suspicious is the number of statements logged as suspicious for users in DETECTING mode." }
    ]
} ,{
    "id": 35,
    "question": [
      { "type": "text", "value": "Examine this query and its output:" },
      { "type": "command", "value": `mysql> select * from sys.user_summary_by_statement_type 
       where statement in ('select', 'insert', 'Quit');
       ${` `}
+------+----------+--------+---------------+-------------+--------------+-----------+---------------+----------------+-------------+
| user | statement| total  | total_latency | max_latency | lock_latency | rows_sent | rows_examined | rows_affected  | full_scans  |
+------+----------+--------+---------------+-------------+--------------+-----------+---------------+----------------+-------------+
| app  | select   | 919866 | 2.41 h        | 330.01 ms   | 1.52 m       | 542614816 | 542614816     | 0              | 0           |
| app  | insert   | 923070 | 1.66 h        | 287.41 ms   | 1.65 m       | 0         | 0             | 0              | 0           |
| app  | Quit     | 679892 | 9.54 s        | 170.97 ms   | 0 ps         | 0         | 0             | 0              | 0           |
| bob  | select   | 344964 | 53.61 m       | 328.42 ms   | 34.51 s      | 203509545 | 203509542     | 0              | 0           |
| bob  | insert   | 344659 | 37.94 m       | 235.77 ms   | 36.94 s      | 0         | 0             | 0              | 0           |
| bob  | Quit     | 254971 | 3.65 s        |  69.91 ms   | 0 ps         | 0         | 0             | 0              | 0           |
| root | select   | 230621 | 36.88 m       |  21.47 s    | 23.81 s      | 135639074 | 135644067     | 0              | 0           |
| root | insert   | 231585 | 25.86 m       | 364.22 ms   | 31.45 s      | 0         | 0             | 0              | 0           |
| root | Quit     | 170363 | 2.24 s        | 130.14 ms   | 0 ps         | 0         | 0             | 0              | 0           |
+------+----------+--------+---------------+-------------+--------------+-----------+---------------+----------------+-------------+` },
      { "type": "text", "value": "Which two statements are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "The root user had the largest number of modified rows for a SELECT statement." },
      { "type": "text", "value": "User bob had the largest total time waiting for locks." },
      { "type": "text", "value": "The root user had the largest single wait time." },
      { "type": "text", "value": "The app user had the highest total number of rows read from storage engines." },
      { "type": "text", "value": "User bob had a significantly higher ratio of SELECT + INSERT statements to QUIT than both app and root users." }
    ],
    "answer": [
      { "type": "text", "value": "The root user had the largest single wait time." },
      { "type": "text", "value": "The app user had the highest total number of rows read from storage engines." }
    ]
} ,{
    "id": 37,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `cluster.addInstance('@:', {recoveryMethod: 'clone'})` },
      { "type": "text", "value": "Which three statements are true? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "The account used to perform this recovery needs the BACKUP_ADMIN privilege." },
      { "type": "text", "value": "A target instance must exist, then it will be provisioned with data from an instance already in the cluster and joined to the cluster." },
      { "type": "text", "value": "InnoDB tablespaces outside the datadir are able to be cloned." },
      { "type": "text", "value": "It is always slower than {recoveryMethod: 'incremental'}." },
      { "type": "text", "value": "A new instance is installed, initialized, and provisioned with data from an instance already in the cluster and joined to the cluster." },
      { "type": "text", "value": "InnoDB redo logs must not rotate for the duration of the execution; otherwise, the recovery will fail." }
    ],
    "answer": [
      { "type": "text", "value": "The account used to perform this recovery needs the BACKUP_ADMIN privilege." },
      { "type": "text", "value": "A target instance must exist, then it will be provisioned with data from an instance already in the cluster and joined to the cluster." },
      { "type": "text", "value": "A new instance is installed, initialized, and provisioned with data from an instance already in the cluster and joined to the cluster." }
    ]
} ,{
    "id": 38,
    "question": [
      { "type": "text", "value": "A MySQL server is monitored using MySQL Enterprise Monitor's agentless installation." },
      { "type": "text", "value": "Which three features are available with this installation method? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "MySQL Replication monitoring" },
      { "type": "text", "value": "network-related information and network characteristics" },
      { "type": "text", "value": "MySQL Query Analysis data" },
      { "type": "text", "value": "CPU utilization" },
      { "type": "text", "value": "security-related advisor warnings" },
      { "type": "text", "value": "operating system memory utilization" },
      { "type": "text", "value": "disk usage and disk characteristics including disk advisors warnings" }
    ],
    "answer": [
      { "type": "text", "value": "MySQL Replication monitoring" },
      { "type": "text", "value": "MySQL Query Analysis data" },
      { "type": "text", "value": "security-related advisor warnings" }
    ]
} ,{
    "id": 39,
    "question": [
      { "type": "text", "value": "Which three settings control global buffers shared by all threads on a MySQL server? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "sort_buffer_size" },
      { "type": "text", "value": "key_buffer_size" },
      { "type": "text", "value": "table_open_cache" },
      { "type": "text", "value": "read_buffer_size" },
      { "type": "text", "value": "innodb_buffer_pool_size" },
      { "type": "text", "value": "tmp_table_size" }
    ],
    "answer": [
      { "type": "text", "value": "key_buffer_size" },
      { "type": "text", "value": "table_open_cache" },
      { "type": "text", "value": "innodb_buffer_pool_size" }
    ]
} ,{
    "id": 40,
    "question": [
      { "type": "text", "value": "You are using mysqlcheck for server maintenance." },
      { "type": "text", "value": "Which two statements are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "The mysqlcheck --check --all-databases command takes table write locks while performing a series of checks." },
      { "type": "text", "value": "The mysqlcheck --optimize --all-databases command reclaims free space from table files." },
      { "type": "text", "value": "The mysqlcheck --repair --all-databases command can repair an InnoDB corrupted table." },
      { "type": "text", "value": "The mysqlcheck command can be renamed mysqlrepair so that it repairs tables by default." },
      { "type": "text", "value": "The mysqlcheck --analyze --all-databases command performs a series of checks to spot eventual table corruptions." }
    ],
    "answer": [
      { "type": "text", "value": "The mysqlcheck --check --all-databases command takes table write locks while performing a series of checks." },
      { "type": "text", "value": "The mysqlcheck --optimize --all-databases command reclaims free space from table files." }
    ]
} ,{
    "id": 41,
    "question": [
      { "type": "text", "value": "You are considering using file-system snapshots to back up MySQL." },
      { "type": "text", "value": "Which three statements are true? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "They take roughly twice as long as logical backups." },
      { "type": "text", "value": "They allow direct copying of table rows with operating system copy commands." },
      { "type": "text", "value": "They work best for transaction storage engines that can perform their own recovery when restored." },
      { "type": "text", "value": "The backup window is almost zero from the perspective of the application." },
      { "type": "text", "value": "They do not back up views, stored procedures, or configuration files." },
      { "type": "text", "value": "There is a slight performance cost while the snapshot is active." },
      { "type": "text", "value": "They do not use additional disk space." }
    ],
    "answer": [
      { "type": "text", "value": "They work best for transaction storage engines that can perform their own recovery when restored." },
      { "type": "text", "value": "The backup window is almost zero from the perspective of the application." },
      { "type": "text", "value": "There is a slight performance cost while the snapshot is active." }
    ]
} ,{
    "id": 42,
    "question": [
      { "type": "text", "value": "You reconfigure and start a slave that was not replicating for several days." },
      { "type": "text", "value": "The configuration file and CHANGE MASTER command are correct. Examine the GTID information from both master and slave:" },
      { "type": "command", "value": `Master:
gtids_executed: aaaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-321,
                bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb:1-50,
                cccccccc-cccc-cccc-cccc-cccccccccccc:1234-1237
${` `}
gtids_purged:   aaaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-100,
                bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb:1-10,
                cccccccc-cccc-cccc-cccc-cccccccccccc:1234-1237
                ${` `}
Slave:
gtids_executed: aaaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-160,
                cccccccc-cccc-cccc-cccc-cccccccccccc:1234-1237
${` `}
gtids_purged:   aaaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-70,
                cccccccc-cccc-cccc-cccc-cccccccccccc:1234-1237` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "Replication will fail because the slave has purged more aaaaaaaa-aaaa-aaaa-aaaaaaaaaaaaaaaa transactions than the master." },
      { "type": "text", "value": "Replication will fail because the master does not have the required transaction with bbbbbbbbbbbb- bbbb-bbbb-bbbbbbbbbbbb GTIDs in its binary logs." },
      { "type": "text", "value": "Replication will fail because the master has already purged transactions with cccccccc-cccccccc- cccc-cccccccccccc GTIDs." },
      { "type": "text", "value": "Replication will fail because of inconsistent numbers in cccccccc-cccc-cccc-cccc-cccccccccccc GTIDs." },
      { "type": "text", "value": "Replication will work." }
    ],
    "answer": [
      { "type": "text", "value": "Replication will fail because the master does not have the required transaction with bbbbbbbbbbbb- bbbb-bbbb-bbbbbbbbbbbb GTIDs in its binary logs." }
    ]
} ,{
    "id": 43,
    "question": [
      { "type": "text", "value": "You are using an existing server with a new configuration. MySQL Server fails to start." },
      { "type": "text", "value": "Examine this snapshot of the error log:" },
      { "type": "command", "value": `190925 12:49:05 InnoDB: Initializing buffer pool, size = 3.0G
190925 12:49:05 InnoDB: Completed initialization of buffer pool
InnoDB: Error: log file ./ib_logfile0 is of different size 0 5242880 bytes
InnoDB: than specified in the .cnf file 0 26214400 bytes!
190925 12:49:05 [ERROR] Plugin 'InnoDB' init function returned error.
190925 12:49:05 [ERROR] Plugin 'InnoDB' registration as a STORAGE ENGINE failed.
190925 12:49:05 [ERROR] Aborting
190925 12:49:05 [Note] /usr/sbin/mysqld: Shutdown complete` },
      { "type": "text", "value": "Which action would allow the server to start?" }
    ],
    "options": [
      { "type": "text", "value": "Remove ib_logfile0 and ib_logfile1 files from the file system." },
      { "type": "text", "value": "Execute mysqladmin flush-logs." },
      { "type": "text", "value": "First run mysqld --initialize to refresh the Size of ib_logfile." },
      { "type": "text", "value": "Create a new ib_logfile0 file of size 26214400." }
    ],
    "answer": [
      { "type": "text", "value": "Remove ib_logfile0 and ib_logfile1 files from the file system." }
    ]
} ,{
    "id": 44,
    "question": [
      { "type": "text", "value": "You have a MySQL client installed on your Linux workstation with a default installation. You have your admin login credentials to connect to a MySQL server running Microsoft Windows on remote host 192.0.2.1:3306. You wish to connect directly to the world database." },
      { "type": "text", "value": "Which four options need to be specified to complete this task with a single command? (Choose four.)" }
    ],
    "options": [
      { "type": "command", "value": `--shared-memory-base-name=world` },
      { "type": "command", "value": `--protocol=UDP` },
      { "type": "command", "value": `--protocol=pipe` },
      { "type": "command", "value": `--password` },
      { "type": "command", "value": `--user=admin` },
      { "type": "command", "value": `--host=192.0.2.1` },
      { "type": "command", "value": `--socket=/tmp/mysql.sock` },
      { "type": "command", "value": `--port=3306` },
      { "type": "command", "value": `--database=world` }
    ],
    "answer": [
      { "type": "command", "value": `--password` },
      { "type": "command", "value": `--user=admin` },
      { "type": "command", "value": `--host=192.0.2.1` },
      { "type": "command", "value": `--database=world` }
    ]
} ,{
    "id": 45,
    "question": [
      { "type": "text", "value": "Which three actions are effective in capacity planning? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "buying more RAM" },
      { "type": "text", "value": "monitoring OS resources for patterns" },
      { "type": "text", "value": "adding circular replication nodes for increased DML capability" },
      { "type": "text", "value": "buying more CPU" },
      { "type": "text", "value": "buying more disk" },
      { "type": "text", "value": "basing expected growth on an average of the last 3 years" },
      { "type": "text", "value": "consulting the application team about any future projects and use" },
      { "type": "text", "value": "upgrading to the latest application version" }
    ],
    "answer": [
      { "type": "text", "value": "monitoring OS resources for patterns" },
      { "type": "text", "value": "basing expected growth on an average of the last 3 years" },
      { "type": "text", "value": "consulting the application team about any future projects and use" }
    ]
} ,{
    "id": 46,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully on InnoDB Cluster:" },
      { "type": "command", "value": `dba.dropMetadataSchema()` },
      { "type": "text", "value": "Which two statements are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Group Replication will be dissolved and all metadata purged." },
      { "type": "text", "value": "Group Replication is still operational, but InnoDB Cluster must be reimported under MySQL Shell." },
      { "type": "text", "value": "The mysql_innodb_cluster_metadata schema is dropped from the instance where the connection was established." },
      { "type": "text", "value": "The command drops the mysql_innodb_cluster_metadata schema and re-creates it." },
      { "type": "text", "value": "The mysql_innodb_cluster_metadata schema is dropped from all reachable members of the cluster." },
      { "type": "text", "value": "Connections driven by MySQL Router are not affected by the command." }
    ],
    "answer": [
      { "type": "text", "value": "Group Replication is still operational, but InnoDB Cluster must be reimported under MySQL Shell." },
      { "type": "text", "value": "The mysql_innodb_cluster_metadata schema is dropped from the instance where the connection was established." }
    ]
} ,{
    "id": 47,
    "question": [
      { "type": "text", "value": "Which two statements are true about using MySQL Enterprise Monitor Query Analyzer? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "The single query QRTi pie chart in the Query Analyzer view is based on the average execution of all statements." },
      { "type": "text", "value": "It is possible to retrieve a normalized statement, but never the exact statement that was executed." },
      { "type": "text", "value": "It is possible to configure the Query Analysis built-in advisor to get notified about slow query execution." },
      { "type": "text", "value": "It is possible to list and analyze statements in an arbitrary graph range selection from timeseries graphs." },
      { "type": "text", "value": "It is possible to import data into the Query Analyzer from heterogeneous sources, such as CSV." }
    ],
    "answer": [
      { "type": "text", "value": "It is possible to configure the Query Analysis built-in advisor to get notified about slow query execution." },
      { "type": "text", "value": "It is possible to list and analyze statements in an arbitrary graph range selection from timeseries graphs." }
    ]
} ,{
    "id": 48,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `$ mysqlbackup --user=mysqlbackup --password --host=127.0.0.1 \\
              --backup-image=/backups/my.mbi \\
              --backup-dir=/backup-tmp backup-to-image` },
      { "type": "text", "value": "Which two statements are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "A single-file backup is created." },
      { "type": "text", "value": "The backup operation will finish only when backup-and-apply-log is executed." },
      { "type": "text", "value": "The --backup-dir option holds temporary output, status, and metadata files." },
      { "type": "text", "value": "The backup operation will finish only when apply-log is executed." },
      { "type": "text", "value": "A raw backup is created." }
    ],
    "answer": [
      { "type": "text", "value": "A single-file backup is created." },
      { "type": "text", "value": "The --backup-dir option holds temporary output, status, and metadata files." }
    ]
} ,{
    "id": 49,
    "question": [
      { "type": "text", "value": "Examine this statement and output:" },
      { "type": "command", "value": `
+------------------------------------------------------------------+
| Grants for jsmith@%                                              |
+------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'jsmith\`@\`%'                               |
| GRANT UPDATE(Name) ON \`world\`.\`country\` TO \`jsmith\`@\`%\`;         |
+------------------------------------------------------------------+
2 rows in set (0.00 sec)` },
      { "type": "text", "value": "Which two SQL statements can jsmith execute? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": `UPDATE world.country SET Name='all';` },
      { "type": "command", "value": `UPDATE world.country SET Name='one' LIMIT 1;` },
      { "type": "command", "value": `UPDATE world.country SET Name='new' WHERE Name='old';` },
      { "type": "command", "value": `UPDATE world.country SET Name=CONCAT('New ',Name);` },
      { "type": "command", "value": `UPDATE world.country SET Name='first' ORDER BY Name LIMIT;` }
    ],
    "answer": [
      { "type": "command", "value": `UPDATE world.country SET Name='all';` },
      { "type": "command", "value": `UPDATE world.country SET Name='new' WHERE Name='old';` }
    ]
} ,{
    "id": 50,
    "question": [
      { "type": "text", "value": "Your my.cnf file contains these settings:" },
      { "type": "command", "value": `[mysqld]
log_output=FILE
slow_query_log
long_query_time=2.01
log_queries_not_using_indexes` },
      { "type": "text", "value": "You want to log queries that looked at a minimum of 5000 records and either took longer than 5 seconds to run or did not use indexes." },
      { "type": "text", "value": "Which contains all the settings that you need to add to or modify the slow log configuration?" }
    ],
    "options": [
      { "type": "command", "value": `min_examined_row_limit=5000` },
      { "type": "command", "value": `long_query_time=5
log_throttle_queries_not_using_indexes=5` },
      { "type": "command", "value": `log_throttle_queries_not_using_indexes=5
min_examined_row_limit=5000` },
      { "type": "command", "value": `long_query_time=5` },
      { "type": "command", "value": `long_query_time=5
min_examined_row_limit=5000` },
      { "type": "command", "value": `log_throttle_queries_not_using_indexes=5` },
      { "type": "command", "value": `long_query_time=5
log_throttle_queries_not_using_indexes=5
min_examined_row_limit=5000` }
    ],
    "answer": [
      { "type": "command", "value": `long_query_time=5
min_examined_row_limit=5000` }
    ]
} ,{
    "id": 51,
    "question": [
      { "type": "text", "value": "Which two tools are available to monitor the global status of InnoDB locking? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": `SHOW ENGINE INNODB STATUS;` },
      { "type": "command", "value": `INFORMATION_SCHEMA.INNODB_METRICS` },
      { "type": "command", "value": `SHOW TABLE STATUS;` },
      { "type": "command", "value": `INFORMATION_SCHEMA.STATISTICS` },
      { "type": "command", "value": `INFORMATION_SCHEMA.INNODB_TABLESTATS` },
      { "type": "command", "value": `SHOW STATUS;` }
    ],
    "answer": [
      { "type": "command", "value": `SHOW ENGINE INNODB STATUS;` },
      { "type": "command", "value": `INFORMATION_SCHEMA.INNODB_METRICS` }
    ]
} ,{
    "id": 52,
    "question": [
      { "type": "text", "value": "Which two are use cases of MySQL asynchronous replication? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "You can scale writes by creating a replicated mesh." },
      { "type": "text", "value": "It guarantees near real-time replication between a master and a slave." },
      { "type": "text", "value": "You can scale reads by adding multiple slaves." },
      { "type": "text", "value": "MySQL Enterprise Backup will automatically back up from an available slave." },
      { "type": "text", "value": "It allows backup to be done on the slave without impacting the master." }
    ],
    "answer": [
      { "type": "text", "value": "You can scale reads by adding multiple slaves." },
      { "type": "text", "value": "It allows backup to be done on the slave without impacting the master." }
    ]
} ,{
    "id": 53,
    "question": [
      { "type": "text", "value": "Which two commands will display indexes on the parts table in the manufacturing schema? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": `DESCRIBE manufacturing.parts;` },
      { "type": "command", "value": `SELECT * FROM information_schema.statistics WHERE table_schema='manufacturing' AND TABLE_NAME='parts';` },
      { "type": "command", "value": `SHOW INDEXES FROM manufacturing.parts;` },
      { "type": "command", "value": `SELECT * FROM information_schema.COLUMN_STATISTICS;` },
      { "type": "command", "value": `EXPLAIN SELECT INDEXES FROM manufacturing.parts;` }
    ],
    "answer": [
      { "type": "command", "value": `SELECT * FROM information_schema.statistics WHERE table_schema='manufacturing' AND TABLE_NAME='parts';` },
      { "type": "command", "value": `SHOW INDEXES FROM manufacturing.parts;` }
    ]
} ,{
    "id": 54,
    "question": [
      { "type": "text", "value": "You recently upgraded your MySQL installation to MySQL 8.0." },
      { "type": "text", "value": "Examine this client error:" },
      { "type": "command", "value": `ERROR 2059 (HY000): Authentication plugin 'caching_sha2_password' cannot be loaded: /usr/local/mysql/lib/plugin/caching_sha2_password.so: cannot open shared object file: No such file or directory` },
      { "type": "text", "value": "Which option will allow this client to connect to MySQL Server?" }
    ],
    "options": [
      { "type": "command", "value": `[mysqld] default_authentication_plugin=sha256_password` },
      { "type": "command", "value": `ALTER USER user - IDENTIFIED WITH mysql_native_password BY 'password';` },
      { "type": "command", "value": `[mysqld] default_authentication_plugin=caching_sha2_password` },
      { "type": "command", "value": `ALTER USER user - IDENTIFIED WITH caching_sha2_password BY 'password';` },
      { "type": "command", "value": `ALTER USER user - IDENTIFIED WITH sha256_password - BY 'password';` },
      { "type": "command", "value": `[mysqld] default_authentication_plugin=mysql_native_password` }
    ],
    "answer": [
      { "type": "command", "value": `ALTER USER user - IDENTIFIED WITH mysql_native_password BY 'password';` }
    ]
} ,{
    "id": 55,
    "question": [
      { "type": "text", "value": "Examine this output:" },
      { "type": "command", "value": `mysql> SELECT FORMAT_BYTES(@@global.innodb_buffer_pool_size) AS BufferPoolSize,
    ->        @@global.innodb_buffer_pool_instances AS NumInstances,
    ->        FORMAT_BYTES(@@global.innodb_buffer_pool_chunk_size) AS ChunkSize;
+----------------+--------------+------------+
| BufferPoolSize | NumInstances | ChunkSize  |
+----------------+--------------+------------+
| 12.00 GiB      | 8            | 128.00 MiB |
+----------------+--------------+------------+
${` `}
mysql> SELECT * FROM sys.metrics WHERE Variable_name LIKE 'Threads%';
+------------------+----------------+---------------+---------+
| Variable_name    | Variable_value | Type          | Enabled |
+------------------+----------------+---------------+---------+
| threads_cached   | 4              | Global Status | YES     |
| threads_connected| 32             | Global Status | YES     |
| threads_created  | 112            | Global Status | YES     |
| threads_running  | 16             | Global Status | YES     |
+------------------+----------------+---------------+---------+
4 rows in set (0.06 sec)` },
      { "type": "text", "value": "Which change should optimize the number of buffer pool instances for this workload?" }
    ],
    "options": [
      { "type": "text", "value": "Increase the number of buffer pool instances to 16." },
      { "type": "text", "value": "Increase the number of buffer pool instances to 32." },
      { "type": "text", "value": "Decrease the number of buffer pool instances to 1." },
      { "type": "text", "value": "Increase the number of buffer pool instances to 12." },
      { "type": "text", "value": "Decrease the number of buffer pool instances to 4." }
    ],
    "answer": [
      { "type": "text", "value": "Decrease the number of buffer pool instances to 4." }
    ]
} ,{
    "id": 56,
    "question": [
      { "type": "text", "value": "An attempt to recover an InnoDB Cluster fails." },
      { "type": "text", "value": "Examine this set of messages and responses:" },
      { "type": "command", "value": `host3:3377 ssl JS > dba.rebootClusterFromCompleteOutage() Reconfiguring the default cluster from complete outage...

The instance 'host1:3377'' was part of the cluster configuration. Would you like to rejoin it to the cluster? [y/N]: y

The instance 'host2:3377' was part of the cluster configuration. Would you like to rejoin it to the cluster? [y/N]: y

Dba.rebootClusterFromCompleteOutage: The active session instance isn't the most updated in comparison with the ONLINE instances of the Cluster's metadata.
Please use the most up-to-date instance: 'host1:3377'. (RuntimeError)` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "The instance deployed on host3 must be rebuilt with a backup from the primary instance." },
      { "type": "text", "value": "The cluster is running and there is at least one ONLINE instance." },
      { "type": "text", "value": "The instance deployed on host3 must be synchronized from a donor deployed on host1 by using the command cluster.addInstance('host1:3377')." },
      { "type": "text", "value": "It is possible to determine the most up-to-date instance by comparing different global transaction identifier (GTID) sets with GTID_SUBSET(set1,set2)." },
      { "type": "text", "value": "The active session instance is invalid and must be re-created by using the command shell.connect ('host3:3377')." }
    ],
    "answer": [
      { "type": "text", "value": "The cluster is running and there is at least one ONLINE instance." }
    ]
} ,{
    "id": 57,
    "question": [
      { "type": "text", "value": "MySQL is installed on a Linux server with this configuration:" },
      { "type": "command", "value": `[mysqld]
user=mysql
datadir=/data/mysql` },
      { "type": "text", "value": "Which method sets the default authentication to SHA-256 hashing for authenticating user account passwords?" }
    ],
    "options": [
      { "type": "text", "value": "Set validate-user-plugins=caching_sha2_password in the configuration file." },
      { "type": "text", "value": "Define CREATE USER ''@'%' IDENTIFIED WITH sha256_password in the MySQL instance." },
      { "type": "text", "value": "Add default_authentication_plugin=mysql_native_password in the configuration file." },
      { "type": "text", "value": "Add default_authentication_plugin=sha256_password in the configuration file." }
    ],
    "answer": [
      { "type": "text", "value": "Add default_authentication_plugin=sha256_password in the configuration file." }
    ]
} ,{
    "id": 58,
    "question": [
      { "type": "text", "value": "All MySQL Server instances belonging to InnoDB Cluster have SSL configured and enabled." },
      { "type": "text", "value": "You must configure InnoDB Cluster to use SSL for group communication." },
      { "type": "text", "value": "Which two statements are true? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "SSL group communication must be enabled at cluster creation time by specifying createCluster ({memberSslMode: 'REQUIRED'})." },
      { "type": "text", "value": "Configuring SSL group communication also configures SSL distributed recovery." },
      { "type": "text", "value": "An existing InnoDB Cluster must be dissolved and created from scratch to enable SSL for group communication." },
      { "type": "text", "value": "SSL group communication can be enabled for an existing cluster, one instance at a time, by setting group_replication_ssl_mode." },
      { "type": "text", "value": "If only some InnoDB Cluster members are enabled for SSL group communication, and --ssl-mode=PREFERRED, communication will fall back to unencrypted connection." },
      { "type": "text", "value": "SSL group communication requires the use of an additional set of parameters group_replication_recovery_*." }
    ],
    "answer": [
      { "type": "text", "value": "SSL group communication must be enabled at cluster creation time by specifying createCluster ({memberSslMode: 'REQUIRED'})." },
      { "type": "text", "value": "SSL group communication can be enabled for an existing cluster, one instance at a time, by setting group_replication_ssl_mode." }
    ]
} ,{
    "id": 59,
    "question": [
      { "type": "text", "value": "You have an installation of MySQL 8 on Oracle Linux." },
      { "type": "text", "value": "Consider the outputs:" },
      { "type": "command", "value": `mysql> SHOW GLOBAL VARIABLES
    WHERE Variable_name = 'tmpdir'
    OR Variable_name = 'tmp_table_size';
+---------------+------------+
| Variable_name  |  Value    |
+---------------+------------+
| tmp_table_size |  16777216 |
| tmpdir         |  /tmp     |
+---------------+------------+
2 rows in set (0.01 sec)
${` `}
shell> cd /var/lib/mysql
shell> ls -l | grep temp 
drwxr-x---. 2 mysql mysql 4096 Dec 11 14:05 #innodb_temp` },
      { "type": "text", "value": "Which statement is true about disk temporary tables for this installation?" }
    ],
    "options": [
      { "type": "text", "value": "Only internal temporary tables from the optimizer will be created in tmpdir." },
      { "type": "text", "value": "Temporary tables will use the InnoDB temporary tablespace located in datadir." },
      { "type": "text", "value": "Temporary tables are created in tmpdir only if configured to use MyISAM." },
      { "type": "text", "value": "Temporary tables are created in tmpdir only after they reach tmp_tabie_size." },
      { "type": "text", "value": "Temporary tables will use the InnoDB temporary tablespace located in /tmp." }
    ],
    "answer": [
      { "type": "text", "value": "Temporary tables will use the InnoDB temporary tablespace located in datadir." }
    ]
} ,{
    "id": 60,
    "question": [
      { "type": "text", "value": "You have replication configured, which consists of one master and one slave on different hosts with an asynchronous replication channel between them." },
      { "type": "text", "value": "Your goal is to decrease the amount of data that is transferred between these two hosts." },
      { "type": "text", "value": "It is confirmed that the slave instance does not need to have data from the example database." },
      { "type": "text", "value": "Which replication filter contributes to your goal?" }
    ],
    "options": [
      { "type": "command", "value": `on slave: --replicate-wild-ignore=example.%` },
      { "type": "command", "value": `on slave: --replicate-ignore-db=example` },
      { "type": "command", "value": `on master: --replicate-ignore-db=example` },
      { "type": "command", "value": `on master: --binlog-ignore-db=example` },
      { "type": "command", "value": `on slave: --binlog-ignore-db=example` }
    ],
    "answer": [
      { "type": "command", "value": `on master: --binlog-ignore-db=example` }
    ]
} ,{
    "id": 61,
    "question": [
      { "type": "text", "value": "You have configured MySQL Enterprise Monitor to monitor your MySQL server." },
      { "type": "text", "value": "Which four features are available? (Choose four.)" }
    ],
    "options": [
      { "type": "text", "value": "starting and stopping the MySQL instance" },
      { "type": "text", "value": "tracing import and export with mysqidump" },
      { "type": "text", "value": "deploying the MySQL agent on supported target operating system" },
      { "type": "text", "value": "creating e-mail alerts and SNMP traps for MySQL warnings" },
      { "type": "text", "value": "monitoring the availability of the MySQL instance" },
      { "type": "text", "value": "analyzing executed MySQL queries" },
      { "type": "text", "value": "monitoring of NDB Cluster API nodes" }
    ],
    "answer": [
      { "type": "text", "value": "deploying the MySQL agent on supported target operating system" },
      { "type": "text", "value": "creating e-mail alerts and SNMP traps for MySQL warnings" },
      { "type": "text", "value": "monitoring the availability of the MySQL instance" },
      { "type": "text", "value": "analyzing executed MySQL queries" }
    ]
} ,{
    "id": 62,
    "question": [
      { "type": "text", "value": "You have a MySQL system with 500 GB of data that needs frequent backups." },
      { "type": "text", "value": "You use a mix of MyISAM and InnoDB storage engines for your data." },
      { "type": "text", "value": "Examine your backup requirement:" },
      { "type": "text", "value": "The MySQL system being backed up can never be unavailable or locked to the client applications." },
      { "type": "text", "value": "The recovery from the backup must work on any system." },
      { "type": "text", "value": "Only 1 hour of data can be lost on recovery of the backup." },
      { "type": "text", "value": "Which option fulfills all backup requirements?" }
    ],
    "options": [
      { "type": "text", "value": "Take a physical backup of the MySQL system." },
      { "type": "text", "value": "Use the Clone Plugin to copy the data to another MySQL system." },
      { "type": "text", "value": "Take a logical backup of the MySQL system." },
      { "type": "text", "value": "Take your backup from a slave of the MySQL system." }
    ],
    "answer": [
      { "type": "text", "value": "Take your backup from a slave of the MySQL system." }
    ]
} ,{
    "id": 63,
    "question": [
      { "type": "text", "value": "Examine this command and output:" },
      { "type": "command", "value": `root@dbhost:/var/lib/mysql# ls -al
total 540
drwxrwxr-x  1 mysql mysql   4096 Aug 22 14:07 .
drwxr-xr-x  1 root  root    4096 May 22 00:42 ..
-rw-r-----  1 mysql mysql     56 Aug 20 13:58 auto.cnf
drwxr-xr-x  1 mysql mysql   4096 Aug 21 10:28 accounting
-rw-r--r--  1 mysql mysql   1112 Aug 20 13:58 ca.pem
-rw-r-----  1 mysql mysql 172040 Aug 22 14:07 ib_buffer_pool
-rw-r-----  1 mysql mysql 12582919 Aug 22 14:07 ibdata1
-rw-r-----  1 mysql mysql 50331648 Aug 22 14:07 ib_logfile0
-rw-r-----  1 mysql mysql 50331648 Aug 20 13:47 ib_logfile1
-rw-r-----  1 mysql mysql 292292 Aug 22 14:07 ibtmp1
drwxr-x---  1 mysql users    4096 Aug 20 13:59 mysql
-rw-r--r--  1 mysql mysql   64064 Aug 22 15:18 mysql-error.log
drwxr-x---  1 mysql mysql    4096 Aug 20 13:59 performance_schema
-rw-r-----  1 mysql mysql   1680 Aug 20 13:59 private_key.pem
-rw-r--r--  1 mysql mysql    452 Aug 20 13:59 public_key.pem
-rw-r--r--  1 mysql mysql   1112 Aug 20 13:58 server-cert.pem
-rw-r--r--  1 mysql mysql   1680 Aug 20 13:58 server-key.pem
drwxr-x---  1 mysql mysql    4096 Aug 20 13:59 sys` },
      { "type": "text", "value": "Which two options will improve the security of the MySQL instance? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Remove group read/write privileges from the private_key.pem file." },
      { "type": "text", "value": "Remove world read privileges from the server-cert.pem certificate file." },
      { "type": "text", "value": "Change the group ownership of the mysql directory to the mysql user group." },
      { "type": "text", "value": "Remove world read privileges from the public_key.pem file." },
      { "type": "text", "value": "Change the parent directory owner and group to mysql." },
      { "type": "text", "value": "Remove the world read/execute privilege from the accounting directory." }
    ],
    "answer": [
      { "type": "text", "value": "Remove group read/write privileges from the private_key.pem file." },
      { "type": "text", "value": "Remove the world read/execute privilege from the accounting directory." }
    ]
} ,{
    "id": 64,
    "question": [
      { "type": "text", "value": "You want to check the values of the sort_buffer_size session variables of all existing connections." },
      { "type": "text", "value": "Which performance_schema table can you query?" }
    ],
    "options": [
      { "type": "command", "value": `user_variables_by_thread` },
      { "type": "command", "value": `global_variables` },
      { "type": "command", "value": `variables_by_thread` },
      { "type": "command", "value": `session_variables` }
    ],
    "answer": [
      { "type": "command", "value": `variables_by_thread` }
    ]
} ,{
    "id": 65,
    "question": [
      { "type": "text", "value": "Examine this parameter setting:" },
      { "type": "command", "value": `audit_log=FORCE_LOG_PERMANENT` },
      { "type": "text", "value": "What effect does this have on auditing?" }
    ],
    "options": [
      { "type": "text", "value": "It will force the load of the audit plugin even in case of errors at server start." },
      { "type": "text", "value": "It causes the audit log to be created if it does not exist." },
      { "type": "text", "value": "It prevents the audit plugin from being removed from the running server." },
      { "type": "text", "value": "It prevents the audit log from being removed or rotated." }
    ],
    "answer": [
      { "type": "text", "value": "It prevents the audit plugin from being removed from the running server." }
    ]
} ,{
    "id": 66,
    "question": [
      { "type": "text", "value": "Examine this partial output for InnoDB Cluster status:" },
      { "type": "command", "value": `"topology": {
  "host1:3377": {
    "address": "host1:3377",
    "mode": "R/W",
    [...]
    "status": "ONLINE",
    "version": "8.0.18"
  },
  "host2:3377": {
    "address": "host2:3377",
    "mode": "R/O",
    [...]
    "status": "(MISSING)"
  },
  "host3:3377": {
    "address": "host3:3377",
    "mode": "R/O",
    [...]
    "status": "ONLINE",
    "version": "8.0.18"
  }
}` },
      { "type": "text", "value": "Which statement explains the state of the instance deployed on host2?" }
    ],
    "options": [
      { "type": "text", "value": "It can be recovered from a donor instance on host3 by cloning using the command cluster.rejoinInstance ('<user>@host3:3377')." },
      { "type": "text", "value": "It can rejoin the cluster by using the command cluster.addInstance('<user>@host3:3377')." },
      { "type": "text", "value": "It has been removed from the cluster by using the command STOP GROUP_REPLICATION." },
      { "type": "text", "value": "It can rejoin the cluster by using the command dba.rebootClusterFromCompleteOutage()." },
      { "type": "text", "value": "It has been expelled from the cluster because of a transaction error." }
    ],
    "answer": [
      { "type": "text", "value": "It can be recovered from a donor instance on host3 by cloning using the command cluster.rejoinInstance ('<user>@host3:3377')." }
    ]
} ,{
    "id": 67,
    "question": [
      { "type": "text", "value": "An existing asynchronous replication setup is running MySQL 8." },
      { "type": "text", "value": "Which two steps are a part of implementing GTID replication? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": `Enable GTID by executing this on the master and the slave: SET GLOBAL GTID_ENABLED=on;` },
      { "type": "command", "value": `Execute this on the slave to enable GTID: START SLAVE IO_THREAD WITH GTID;` },
      { "type": "command", "value": `Restart MySQL (master and slave) with these options enabled: 
--gtid_mode=ON
--log-bin
--log-slave-updates
--enforce-gtid-consistency` },
      { "type": "command", "value": `Execute this on the slave to enable GTID: RESET SLAVE; START SLAVE GTID_NEXT=AUTOMATIC;` },
      { "type": "command", "value": `On the slave, alter the MySQL master connection setting with: ALTER channel CHANGE MASTER TO MASTER_AUTO_POSITION = 1;` },
      { "type": "command", "value": `On the slave, alter the MySQL master connection setting with: CHANGE MASTER TO MASTER_AUTO_POSITION = 1;` }
    ],
    "answer": [
      { "type": "command", "value": `Restart MySQL (master and slave) with these options enabled: 
--gtid_mode=ON
--log-bin
--log-slave-updates
--enforce-gtid-consistency` },
      { "type": "command", "value": `On the slave, alter the MySQL master connection setting with: CHANGE MASTER TO MASTER_AUTO_POSITION = 1;` }
    ]
} ,{
    "id": 68,
    "question": [
      { "type": "text", "value": "You have an InnoDB Cluster configured with three servers." },
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `mysqldump -uroot -p -d mydatabase > mydatabase_backup.sql` },
      { "type": "text", "value": "Due to data loss, the cluster is initialized and a restore is attempted resulting in this error:" },
      { "type": "command", "value": `ERROR 13176 (HY000) at line 23: Cannot update GTID_PURGED with the Group Replication plugin running` },
      { "type": "text", "value": "Which two actions, either one of which, can fix this error and allow a successful restore of the cluster? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Stop all instances except the primary read/write master instance and run the restore." },
      { "type": "text", "value": "Remove the @@GLOBAL.gtid_purged statement from the dump file." },
      { "type": "text", "value": "Create the backup by using the --set-gtid-purged=OFF option." },
      { "type": "text", "value": "Remove the group replication plugin from each instance before restoring." },
      { "type": "text", "value": "Remove the @@GLOBAL.gtid_executed statement from the dump file." },
      { "type": "text", "value": "Restore using the --set-gtid-purged=OFF option." }
    ],
    "answer": [
      { "type": "text", "value": "Remove the @@GLOBAL.gtid_purged statement from the dump file." },
      { "type": "text", "value": "Create the backup by using the --set-gtid-purged=OFF option." }
    ]
} ,{
    "id": 69,
    "question": [
      { "type": "text", "value": "Examine these statements, which execute successfully:" },
      { "type": "command", "value": `CREATE ROLE r_world_rd;
GRANT SELECT ON world.* TO r_world_rd;
CREATE USER john IDENTIFIED BY 'P@ssw0rd';
GRANT r_world_rd TO john;` },
      { "type": "text", "value": "Examine these statements issued by user John:" },
      { "type": "command", "value": `mysql> SHOW GRANTS;
+---------------------------------------+
| Grants for john@%                     |
+---------------------------------------+
| GRANT USAGE ON *.* TO 'john'@'%'      |
| GRANT 'r_world_rd'@'%' TO 'john'@'%'  |
+---------------------------------------+
2 rows in set (0.01 sec)
${` `}
mysql> SELECT * FROM world.city;
ERROR 1142 (42000): SELECT command denied to user 'john'@'localhost' for table 'city'` },
      { "type": "text", "value": "What is the reason for the error?" }
    ],
    "options": [
      { "type": "text", "value": "The statement was blocked by MySQL Firewall." },
      { "type": "text", "value": "John has not activated the role." },
      { "type": "text", "value": "John needs to reconnect to the database." },
      { "type": "text", "value": "The DBA needs to execute FLUSH PRIVILEGES." }
    ],
    "answer": [
      { "type": "text", "value": "John has not activated the role." }
    ]
} ,{
    "id": 70,
    "question": [
      { "type": "text", "value": "Which two commands will display indexes on the parts table in the manufacturing schema? (Choose two.)" }
    ],
    "options": [
      { "type": "command", "value": `DESCRIBE manufacturing.parts;` },
      { "type": "command", "value": `SELECT * FROM information_schema.statistics WHERE table_schema='manufacturing' AND TABLE_NAME='parts';` },
      { "type": "command", "value": `SHOW INDEXES FROM manufacturing.parts;` },
      { "type": "command", "value": `SELECT * FROM information_schema.COLUMN_STATISTICS;` },
      { "type": "command", "value": `EXPLAIN SELECT INDEXES FROM manufacturing.parts;` }
    ],
    "answer": [
      { "type": "command", "value": `SELECT * FROM information_schema.statistics WHERE table_schema='manufacturing' AND TABLE_NAME='parts';` },
      { "type": "command", "value": `SHOW INDEXES FROM manufacturing.parts;` }
    ]
} ,{
    "id": 71,
    "question": [
      { "type": "text", "value": "Examine this statement, which executes successfully:" },
      { "type": "command", "value": `CREATE TABLE world.city (
    ID int NOT NULL AUTO_INCREMENT,
    Name char(35) NOT NULL DEFAULT '',
    CountryCode char(3) NOT NULL DEFAULT '',
    District char(20) NOT NULL DEFAULT '',
    Population int NOT NULL DEFAULT '0',
    PRIMARY KEY (ID),
    KEY CountryCode (CountryCode)
) ENGINE=InnoDB;` },
      { "type": "text", "value": "You want to improve the performance of this query:" },
      { "type": "command", "value": `SELECT Name
FROM world.city
WHERE Population BETWEEN 1000000 AND 2000000;` },
      { "type": "text", "value": "Which change enables the query to succeed while accessing fewer rows?" }
    ],
    "options": [
      { "type": "command", "value": `ALTER TABLE world.city ADD SPATIAL INDEX (Name);` },
      { "type": "command", "value": `ALTER TABLE world.city ADD SPATIAL INDEX (Population);` },
      { "type": "command", "value": `ALTER TABLE world.city ADD INDEX (Population);` },
      { "type": "command", "value": `ALTER TABLE world.city ADD INDEX (Name);` },
      { "type": "command", "value": `ALTER TABLE world.city ADD FULLTEXT INDEX (Name);` },
      { "type": "command", "value": `ALTER TABLE world.city ADD FULLTEXT INDEX (Population);` }
    ],
    "answer": [
      { "type": "command", "value": `ALTER TABLE world.city ADD INDEX (Population);` }
    ]
} ,{
    "id": 72,
    "question": [
      { "type": "text", "value": "Which three are characteristics of a newly created role? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "It can be dropped using the DROP ROLE statement." },
      { "type": "text", "value": "It is stored in the mysql.role table." },
      { "type": "text", "value": "It is created as a locked account." },
      { "type": "text", "value": "It can be renamed using the RENAME ROLE statement." },
      { "type": "text", "value": "It can be granted to user accounts." },
      { "type": "text", "value": "It can be protected with a password." }
    ],
    "answer": [
      { "type": "text", "value": "It can be dropped using the DROP ROLE statement." },
      { "type": "text", "value": "It is created as a locked account." },
      { "type": "text", "value": "It can be granted to user accounts." }
    ]
} ,{
    "id": 73,
    "question": [
      { "type": "text", "value": "You have configured GTID-based asynchronous replication with one master and one slave. A user accidentally updated some data on the slave. To fix this, you stopped replication and successfully reverted the accidental changes." },
      { "type": "text", "value": "Examine the current GTID information:" },
      { "type": "command", "value": `
Master:
UUID: aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa
gtids_executed: aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10300
gtids_purged: aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-3820
${` `}
Slave: 
UUID: bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb
gtids_executed: aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10167, bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb:1-9
gtids_purged: aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-2312
${` `}
Goal: 
Fix the GTID sets on the slave to avoid replicating unwanted transactions in case of failover.` },
      { "type": "text", "value": "Which set of actions would allow the slave to continue replicating without erroneous transactions?" }
    ],
    "options": [
      { "type": "command", "value": `RESET MASTER;
SET GLOBAL gtid_purged=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10167;` },
      { "type": "command", "value": `SET GLOBAL gtid_purged=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-2312,bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb:1-9;
SET GLOBAL gtid_executed=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10167;` },
      { "type": "command", "value": `RESET SLAVE;
SET GLOBAL gtid_purged=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-3820;
SET GLOBAL gtid_executed=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10300;` },
      { "type": "command", "value": `RESET MASTER;
SET GLOBAL gtid_purged=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-2312;
SET GLOBAL gtid_executed=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10167;` },
      { "type": "command", "value": `RESET SLAVE;
SET GLOBAL gtid_purged=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10167;` }
    ],
    "answer": [
      { "type": "command", "value": `RESET SLAVE;
SET GLOBAL gtid_purged=aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa:1-10167;` }
    ]
} ,{
    "id": 74,
    "question": [
      { "type": "text", "value": "The data in this instance is transient; no backup or replication will be required. It is currently underperforming." },
      { "type": "text", "value": "The database size is static and including indexes is 19G. Total system memory is 32G." },
      { "type": "text", "value": "After profiling the system, you highlight these MySQL status and global variables:" },
      { "type": "command", "value": `Com_rollback: 85,408,355
Com_commit: 1,242,342
Innodb_buffer_pool_pages_free: 163,840
${` `}
[mysqld]
buffer_pool_size=20G
innodb_flush_log_at_trx_commit=2
disable-log-bin` },
      { "type": "text", "value": "The OS metrics indicate that disk is a bottleneck." },
      { "type": "text", "value": "Other variables retain their default values." },
      { "type": "text", "value": "Which three changes will provide the most benefit to the instance? (Choose three.)" }
    ],
    "options": [
      { "type": "command", "value": `innodb_flush_log_at_trx_commit=1` },
      { "type": "command", "value": `buffer_pool_size=24G` },
      { "type": "command", "value": `innodb_log_file_size=1G` },
      { "type": "command", "value": `sync_binlog=0` },
      { "type": "command", "value": `innodb_doublewrite=0` },
      { "type": "command", "value": `max_connections=10000` },
      { "type": "command", "value": `innodb_undo_directory=/dev/shm` }
    ],
    "answer": [
      { "type": "command", "value": `buffer_pool_size=24G` },
      { "type": "command", "value": `innodb_log_file_size=1G` },
      { "type": "command", "value": `innodb_doublewrite=0` }
    ]
} ,{
    "id": 75,
    "question": [
      { "type": "text", "value": "Which statement is true about InnoDB persistent index statistics?" }
    ],
    "options": [
      { "type": "text", "value": "Updating index statistics is an I/O expensive operation." },
      { "type": "text", "value": "Index statistics are calculated from pages buffered in the buffer pool for tables with InnoDB storage engine." },
      { "type": "text", "value": "Setting innodb_stats_auto_recalc=ON causes statistics to be updated automatically when a new index is created." },
      { "type": "text", "value": "Execution plans based on transient index statistics improve precision when innodb_stats_persistent_sample_pages is increased." },
      { "type": "text", "value": "Increasing innodb_stats_persistent_sample_pages determines higher pages scanning speed, at the cost of increased memory usage." },
      { "type": "text", "value": "Tables are scanned and index statistics recalculated when an instance is restarted." }
    ],
    "answer": [
      { "type": "text", "value": "Updating index statistics is an I/O expensive operation." }
    ]
} ,{
    "id": 76,
    "question": [
      { "type": "text", "value": "Which two are features of MySQL Enterprise Firewall? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "Recording incoming SQL statements to facilitate the creation of a whitelist of permitted commands." },
      { "type": "text", "value": "Blocking of potential threats by configuring pre-approved whitelists." },
      { "type": "text", "value": "Modifying SQL statements dynamically with substitutions." },
      { "type": "text", "value": "Automatic locking of user accounts who break your firewall." },
      { "type": "text", "value": "Provides stateless firewall access to TCP/3306." }
    ],
    "answer": [
      { "type": "text", "value": "Recording incoming SQL statements to facilitate the creation of a whitelist of permitted commands." },
      { "type": "text", "value": "Blocking of potential threats by configuring pre-approved whitelists." }
    ]
} ,{
    "id": 77,
    "question": [
      { "type": "text", "value": "Examine the modified output:" },
      { "type": "command", "value": `mysql> SHOW SLAVE STATUS\\G
*************************** 1. row ***************************
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
        Seconds_Behind_Master: 1612` },
      { "type": "text", "value": "Seconds_Behind_Master value is steadily growing." },
      { "type": "text", "value": "What are two possible causes? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "The master is most probably too busy to transmit data and the slave needs to wait for more data." },
      { "type": "text", "value": "One or more large tables do not have primary keys." },
      { "type": "text", "value": "This value shows only I/O latency and is not indicative of the size of the transaction queue." },
      { "type": "text", "value": "The master is producing a large volume of events in parallel but the slave is processing them serially." },
      { "type": "text", "value": "The parallel slave threads are experiencing lock contention." }
    ],
    "answer": [
      { "type": "text", "value": "The master is producing a large volume of events in parallel but the slave is processing them serially." },
      { "type": "text", "value": "The parallel slave threads are experiencing lock contention." }
    ]
} ,{
    "id": 78,
    "question": [
      { "type": "text", "value": "You must configure the MySQL command-line client to provide the highest level of trust and security when connecting to a remote MySQL Server." },
      { "type": "text", "value": "Which value of --ssl-mode will do this?" }
    ],
    "options": [
      { "type": "command", "value": `PREFERRED` },
      { "type": "command", "value": `VERIFY_CA` },
      { "type": "command", "value": `REQUIRED` },
      { "type": "command", "value": `VERIFY_IDENTITY` }
    ],
    "answer": [
      { "type": "command", "value": `VERIFY_IDENTITY` }
    ]
} ,{
    "id": 79,
    "question": [
      { "type": "text", "value": "Which statement is true about MySQL Enterprise Transparent Data Encryption (TDE)?" }
    ],
    "options": [
      { "type": "text", "value": "Lost tablespace encryption keys can be regenerated only if the master database key is known or present in the Key Vault specification." },
      { "type": "text", "value": "MySQL TDE uses an appropriate keyring plugin to store the keys in a centralized location." },
      { "type": "text", "value": "Both MyISAM and InnoDB tables can be encrypted by setting the keyring_engine = ALL variable in the MySQL configuration file." },
      { "type": "text", "value": "TDE can encrypt InnoDB and MyISAM tables only when the tables are stored in the SYSTEM tablespace." }
    ],
    "answer": [
      { "type": "text", "value": "MySQL TDE uses an appropriate keyring plugin to store the keys in a centralized location." }
    ]
} ,{
    "id": 80,
    "question": [
      { "type": "text", "value": "Which three requirements must be enabled for group replication? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "semi-sync replication plugin" },
      { "type": "text", "value": "primary key or primary key equivalent on every table" },
      { "type": "text", "value": "binary log MIXED format" },
      { "type": "text", "value": "replication filters" },
      { "type": "text", "value": "binary log ROW format" },
      { "type": "text", "value": "binary log checksum" },
      { "type": "text", "value": "slave updates logging" }
    ],
    "answer": [
      { "type": "text", "value": "primary key or primary key equivalent on every table" },
      { "type": "text", "value": "binary log ROW format" },
      { "type": "text", "value": "slave updates logging" }
    ]
} ,{
    "id": 81,
    "question": [
      { "type": "text", "value": "Which condition is true about the use of the hash join algorithm?" }
    ],
    "options": [
      { "type": "text", "value": "At least one of the tables in the join must have a hash index." },
      { "type": "text", "value": "The smallest of the tables in the join must fit in memory as set by join_buffer_size." },
      { "type": "text", "value": "No index can be used for the join." },
      { "type": "text", "value": "The query must access no more than two tables." }
    ],
    "answer": [
      { "type": "text", "value": "The smallest of the tables in the join must fit in memory as set by join_buffer_size." }
    ]
} ,{
    "id": 82,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `cluster.addInstance('<user>@<host>:<port>', {recoveryMethod: 'clone'})` },
      { "type": "text", "value": "Which three statements are true? (Choose three.)" }
    ],
    "options": [
      { "type": "text", "value": "A new instance is installed, initialized, and provisioned with data from an instance already in the cluster and joined to the cluster." },
      { "type": "text", "value": "It is always slower than {recoveryMethod: 'incremental'}." },
      { "type": "text", "value": "InnoDB redo logs must not rotate for the duration of the execution; otherwise, the recovery will fail." },
      { "type": "text", "value": "The account used to perform this recovery needs the BACKUP_ADMIN privilege." },
      { "type": "text", "value": "A target instance must exist, then it will be provisioned with data from an instance already in the cluster and joined to the cluster." },
      { "type": "text", "value": "InnoDB tablespaces outside the datadir are able to be cloned." }
    ],
    "answer": [
      { "type": "text", "value": "A new instance is installed, initialized, and provisioned with data from an instance already in the cluster and joined to the cluster." },
      { "type": "text", "value": "The account used to perform this recovery needs the BACKUP_ADMIN privilege." },
      { "type": "text", "value": "A target instance must exist, then it will be provisioned with data from an instance already in the cluster and joined to the cluster." }
    ]
} ,{
    "id": 83,
    "question": [
      { "type": "text", "value": "You wish to store the username and password for a client connection to MySQL server in a file on a local file system." },
      { "type": "text", "value": "Which is the best way to encrypt the file?" }
    ],
    "options": [
      { "type": "text", "value": "Use mysql_config_editor to create an encrypted file." },
      { "type": "text", "value": "Use mysql_secure_installation to encrypt stored login credentials." },
      { "type": "text", "value": "Use the AES_ENCRYPT() MySQL function on the option file." },
      { "type": "text", "value": "Use a text editor to create a new defaults file and encrypt it from Linux prompt." }
    ],
    "answer": [
      { "type": "text", "value": "Use mysql_config_editor to create an encrypted file." }
    ]
} ,{
    "id": 84,
    "question": [
      { "type": "text", "value": "Which two statements are true about InnoDB data-at-rest encryption? (Choose two.)" }
    ],
    "options": [
      { "type": "text", "value": "It supports all indexes transparently." },
      { "type": "text", "value": "It does not support the transportable tablespaces feature." },
      { "type": "text", "value": "It decrypts data for use in memory." },
      { "type": "text", "value": "It supports only non-blob datatypes." },
      { "type": "text", "value": "It enforces encryption from disk to memory and over network transmission." }
    ],
    "answer": [
      { "type": "text", "value": "It supports all indexes transparently." },
      { "type": "text", "value": "It decrypts data for use in memory." }
    ]
} ,{
    "id": 85,
    "question": [
      { "type": "text", "value": "Examine this parameter setting:" },
      { "type": "command", "value": `audit_log_FORCE_LOG_PERMANENT` },
      { "type": "text", "value": "What effect does this have on auditing?" }
    ],
    "options": [
      { "type": "text", "value": "It will force the load of the audit plugin even in case of errors at server start." },
      { "type": "text", "value": "It prevents the audit plugin from being removed from the running server." },
      { "type": "text", "value": "It prevents the audit log from being removed or rotated." },
      { "type": "text", "value": "It causes the audit log to be created if it does not exist." }
    ],
    "answer": [
      { "type": "text", "value": "It prevents the audit plugin from being removed from the running server." }
    ]
} ,{
    "id": 86,
    "question": [
      { "type": "text", "value": "You must find the number of examined rows for queries that have completed." },
      { "type": "text", "value": "All relevant configurations are enabled for recording the information." },
      { "type": "text", "value": "Which are two of the sources containing the number of examined rows?" }
    ],
    "options": [
      { "type": "text", "value": "The slow query log." },
      { "type": "text", "value": "The Performance Schema." },
      { "type": "text", "value": "The error log." },
      { "type": "text", "value": "The Information Schema." },
      { "type": "text", "value": "The general query log." }
    ],
    "answer": [
      { "type": "text", "value": "The slow query log." },
      { "type": "text", "value": "The Performance Schema." }
    ]
} ,{
    "id": 87,
    "question": [
      { "type": "text", "value": "Your current system has users with accounts used for development on a MySQL Server host." },
      { "type": "text", "value": "The development team requests access without passwords, but this violates company policy." },
      { "type": "text", "value": "Which plugin would allow access without passwords while still remaining secure?" }
    ],
    "options": [
      { "type": "text", "value": "MySQL firewall plugin" },
      { "type": "text", "value": "Socket authentication plugin" },
      { "type": "text", "value": "Native LDAP authentication plugin" },
      { "type": "text", "value": "PAM authentication plugin" },
      { "type": "text", "value": "Connection control plugin" }
    ],
    "answer": [
      { "type": "text", "value": "Socket authentication plugin" }
    ]
} ,{
    "id": 88,
    "question": [
      { "type": "text", "value": "Which statement is true about the my.ini file on a Windows platform while MySQL server is running?" }
    ],
    "options": [
      { "type": "text", "value": "Using SET PERSIST will update the my.ini file." },
      { "type": "text", "value": "MySQL server does not use the my.ini option file for server configuration options." },
      { "type": "text", "value": "The option file is read by the MySQL server service only at start up." },
      { "type": "text", "value": "Editing the file will immediately change the running server configuration." }
    ],
    "answer": [
      { "type": "text", "value": "The option file is read by the MySQL server service only at start up." }
    ]
}, {
    "id": 89,
    "question": [
      { "type": "text", "value": "Which two authentication plugins require the plaintext client plugin for authentication to work?" }
    ],
    "options": [
      { "type": "text", "value": "MySQL Native Password" },
      { "type": "text", "value": "PAM authentication" },
      { "type": "text", "value": "Windows Native authentication" },
      { "type": "text", "value": "SHA256 authentication" },
      { "type": "text", "value": "LDAP SASL authentication" },
      { "type": "text", "value": "LDAP authentication" }
    ],
    "answer": [
      { "type": "text", "value": "SHA256 authentication" },
      { "type": "text", "value": "LDAP authentication" }
    ]
},{
    "id": 90,
    "question": [
      { "type": "text", "value": "What does the replica (slave) I/O thread do?" }
    ],
    "options": [
      { "type": "text", "value": "Reads and executes events contained in the relay log." },
      { "type": "text", "value": "Requests updates from the master that are recorded in its binary logs." },
      { "type": "text", "value": "Monitors and schedules I/O calls to the relay log subsystem." },
      { "type": "text", "value": "Acquires a lock on the master binary log to read each event that is sent to the slave." }
    ],
    "answer": [
      { "type": "text", "value": "Requests updates from the master that are recorded in its binary logs." }
    ]
} ,{
    "id": 91,
    "question": [
      { "type": "text", "value": "Which are two of the actions that will secure a MySQL server from network-based attacks?" }
    ],
    "options": [
      { "type": "text", "value": "Use MySQL Router to proxy connections to the MySQL server." },
      { "type": "text", "value": "Use network file system (NFS) for storing data." },
      { "type": "text", "value": "Construct a perimeter network to allow public traffic." },
      { "type": "text", "value": "Allow connections from the application server only." },
      { "type": "text", "value": "Change the listening port to 3307." }
    ],
    "answer": [
      { "type": "text", "value": "Use MySQL Router to proxy connections to the MySQL server." },
      { "type": "text", "value": "Allow connections from the application server only." }
    ]
} ,{
    "id": 92,
    "question": [
      { "type": "text", "value": "Which are three functions of MySQL Enterprise Monitor?" }
    ],
    "options": [
      { "type": "text", "value": "Centrally managing users." },
      { "type": "text", "value": "Creating customized alerts and providing notification alerts." },
      { "type": "text", "value": "Starting and stopping MySQL Server." },
      { "type": "text", "value": "Analyzing query performance." },
      { "type": "text", "value": "Starting MySQL Enterprise backups." },
      { "type": "text", "value": "Centrally managing server configurations." },
      { "type": "text", "value": "Starting logical backups." },
      { "type": "text", "value": "Determining the availability of monitored MySQL servers." }
    ],
    "answer": [
      { "type": "text", "value": "Creating customized alerts and providing notification alerts." },
      { "type": "text", "value": "Analyzing query performance." },
      { "type": "text", "value": "Determining the availability of monitored MySQL servers." }
    ]
} ,{
    "id": 93,
    "question": [
      { "type": "text", "value": "Examine this SQL statement:" },
      { "type": "command", "value": `mysql> GRANT r_read@localhost TO mark WITH ADMIN OPTION;` },
      { "type": "text", "value": "Which two are true?" }
    ],
    "options": [
      { "type": "text", "value": "Mark can revoke the r_read@localhost role from another role." },
      { "type": "text", "value": "ADMIN OPTION causes the role to be activated by default." },
      { "type": "text", "value": "ADMIN OPTION allows Mark to drop the role." },
      { "type": "text", "value": "Mark can grant the r_read@localhost role to another user." },
      { "type": "text", "value": "Mark can grant the privileges assigned to the r_read@localhost role to another user." },
      { "type": "text", "value": "Mark must connect from localhost to activate the r_read@localhost role." }
    ],
    "answer": [
      { "type": "text", "value": "Mark can revoke the r_read@localhost role from another role." },
      { "type": "text", "value": "Mark can grant the r_read@localhost role to another user." }
    ]
} ,{
    "id": 94,
    "question": [
      { "type": "text", "value": "A MySQL system containing 500 GB of data requires frequent backups." },
      { "type": "text", "value": "A mix of MyISAM and InnoDB storage engines are used." },
      { "type": "text", "value": "Examine these backup requirements:" },
      { "type": "text", "value": "- The MySQL system being backed up can never be unavailable or locked to the client applications." },
      { "type": "text", "value": "- Recovery from backups must work on any system." },
      { "type": "text", "value": "- Only 1 hour of data can be lost on recovery of backups." },
      { "type": "text", "value": "Which option fulfills all these backup requirements?" }
    ],
    "options": [
      { "type": "text", "value": "Taking a logical backup of the MySQL system." },
      { "type": "text", "value": "Using the Clone Plugin to copy data to another MySQL system." },
      { "type": "text", "value": "Taking a physical backup of the MySQL system." },
      { "type": "text", "value": "Taking your backup from a slave of the MySQL system." }
    ],
    "answer": [
      { "type": "text", "value": "Taking your backup from a slave of the MySQL system." }
    ]
} ,{
    "id": 95,
    "question": [
      { "type": "text", "value": "Which are two of the methods that display the complete table definition of an InnoDB table?" }
    ],
    "options": [
      { "type": "command", "value": `hexdump -v -C table.frm` },
      { "type": "command", "value": `Query the Information Schema.` },
      { "type": "command", "value": `REPAIR TABLE table USE_FRM` },
      { "type": "command", "value": `mysqldump --no-data schema table` },
      { "type": "command", "value": `SELECT * FROM table \\G` }
    ],
    "answer": [
      { "type": "command", "value": `Query the Information Schema.` },
      { "type": "command", "value": `mysqldump --no-data schema table` }
    ]
} ,{
    "id": 96,
    "question": [
      { "type": "text", "value": "Which two are types of InnoDB tablespaces?" }
    ],
    "options": [
      { "type": "text", "value": "Temporary table tablespaces." },
      { "type": "text", "value": "Redo tablespaces." },
      { "type": "text", "value": "Undo tablespaces." },
      { "type": "text", "value": "Encryption tablespaces." },
      { "type": "text", "value": "Schema tablespaces." }
    ],
    "answer": [
      { "type": "text", "value": "Temporary table tablespaces." },
      { "type": "text", "value": "Undo tablespaces." }
    ]
} ,{
    "id": 97,
    "question": [
      { "type": "text", "value": "Which two can minimize security risks when creating user accounts?" }
    ],
    "options": [
      { "type": "text", "value": "Avoid the use of wildcards in usernames." },
      { "type": "text", "value": "Require the use of mixed case usernames." },
      { "type": "text", "value": "Do not allow accounts without passwords." },
      { "type": "text", "value": "Avoid the use of wildcards in host names." },
      { "type": "text", "value": "Require users to have the FIREWALL_USER privilege defined." }
    ],
    "answer": [
      { "type": "text", "value": "Do not allow accounts without passwords." },
      { "type": "text", "value": "Avoid the use of wildcards in host names." }
    ]
} ,{
    "id": 98,
    "question": [
      { "type": "text", "value": "After installing MySQL 8.0 on Oracle Linux 7, you initialize the data directory with the mysqld --initialize command." },
      { "type": "text", "value": "Which two will assist in locating the root password?" }
    ],
    "options": [
      { "type": "text", "value": "As root, executing the SHOW PASSWORD command by using the SHA-256 password encryption plugin." },
      { "type": "text", "value": "The root_pw variable stored in the mysql.install table." },
      { "type": "text", "value": "The root password inserted in the error log set by the --log-error=[file_name] variable." },
      { "type": "text", "value": "The root password displayed on the screen via a [Warning] message." },
      { "type": "text", "value": "The root password written to the /root/.my.cnf file." }
    ],
    "answer": [
      { "type": "text", "value": "The root password inserted in the error log set by the --log-error=[file_name] variable." },
      { "type": "text", "value": "The root password displayed on the screen via a [Warning] message." }
    ]
} ,{
    "id": 99,
    "question": [
      { "type": "text", "value": "Examine this command:" },
      { "type": "command", "value": `shell> mysqldump --no-create-info --all-databases --result-file=dump.sql` },
      { "type": "text", "value": "Which statement is true?" }
    ],
    "options": [
      { "type": "text", "value": "It will not write CREATE LOGFILE GROUP statements." },
      { "type": "text", "value": "It will not write CREATE DATABASE statements." },
      { "type": "text", "value": "It will not write CREATE TABLESPACE statements." },
      { "type": "text", "value": "It will not write CREATE TABLE statements." }
    ],
    "answer": [
      { "type": "text", "value": "It will not write CREATE TABLE statements." }
    ]
}, {
    "id": 100,
    "question": [
      { "type": "text", "value": "You must export data from a set of tables in the world_x database." },
      { "type": "text", "value": "Examine this set of tables:" },
      { "type": "text", "value": "Tables (country, countryinfo, location)" },
      { "type": "text", "value": "Which two options will export data into one or more files?" }
    ],
    "options": [
      { "type": "command", "value": `mysql> SELECT * INTO OUTFILE '/output/country.txt' FROM world_x.country;
mysql> SELECT * INTO OUTFILE '/output/countryinfo.txt' FROM world_x.countryinfo;
mysql> SELECT * INTO OUTFILE '/output/location.txt' FROM world_x.location;` },
      { "type": "command", "value": `shell> mysql -batch world_x.country world_x.countryinfo world_x.location > mydump.sql` },
      { "type": "command", "value": `shell> mysqlexport world_x country countryinfo location > mydump.sql` },
      { "type": "command", "value": `shell> mysqldump world_x country countryinfo location > mydump.sql` },
      { "type": "command", "value": `mysql> CLONE LOCAL DATA DIRECTORY = '/var/lib/mysql/world_x/country';
mysql> CLONE LOCAL DATA DIRECTORY = '/var/lib/mysql/world_x/countryinfo';
mysql> CLONE LOCAL DATA DIRECTORY = '/var/lib/mysql/world_x/location!';` }
    ],
    "answer": [
      { "type": "command", "value": `mysql> SELECT * INTO OUTFILE '/output/country.txt' FROM world_x.country;
mysql> SELECT * INTO OUTFILE '/output/countryinfo.txt' FROM world_x.countryinfo;
mysql> SELECT * INTO OUTFILE '/output/location.txt' FROM world_x.location;` },
      { "type": "command", "value": `shell> mysqldump world_x country countryinfo location > mydump.sql` }
    ]
}, {
    "id": 101,
    "question": [
      { "type": "text", "value": "Mary connects to a Linux MySQL Server from a client on a Windows machine." },
      { "type": "text", "value": "Examine this statement and output:" },
      { "type": "command", "value": `mysql> SELECT USER(), CURRENT_USER();
+-------------------+-----------------+
| USER()            | CURRENT_USER()  |
+-------------------+-----------------+
| mary@192.0.2.101  | mary@%          |
+-------------------+-----------------+
1 row in set (0.00 sec)` },
      { "type": "text", "value": "Which two are true?" }
    ],
    "options": [
      { "type": "text", "value": "Mary has the privileges of account mary@%." },
      { "type": "text", "value": "Mary connected from a client machine whose IP address is 192.0.2.101." },
      { "type": "text", "value": "Mary authenticated to the account mary@192.0.2.101." },
      { "type": "text", "value": "Mary connected to the database server whose IP address is 192.0.2.101." },
      { "type": "text", "value": "Mary connected using a UNIX socket." }
    ],
    "answer": [
      { "type": "text", "value": "Mary has the privileges of account mary@%." },
      { "type": "text", "value": "Mary connected from a client machine whose IP address is 192.0.2.101." }
    ]
}, {
    "id": 102,
    "question": [
      { "type": "text", "value": "Which two methods allow a DBA to reset a user's password?" }
    ],
    "options": [
      { "type": "text", "value": "GRANT statement" },
      { "type": "text", "value": "SET PASSWORD statement" },
      { "type": "text", "value": "mysqladmin client program" },
      { "type": "text", "value": "ALTER USER statement" },
      { "type": "text", "value": "mysql_secure_installation utility" }
    ],
    "answer": [
      { "type": "text", "value": "SET PASSWORD statement" },
      { "type": "text", "value": "ALTER USER statement" }
    ]
}, {
    "id": 103,
    "question": [
      { "type": "text", "value": "You have configured a working MySQL InnoDB Cluster in single-primary mode." },
      { "type": "text", "value": "What happens when the primary instance goes down due to a network problem?" }
    ],
    "options": [
      { "type": "text", "value": "The cluster will continue to function with read-only members." },
      { "type": "text", "value": "The cluster detects network partitioning and shuts down to remain consistent." },
      { "type": "text", "value": "A new primary is automatically elected." },
      { "type": "text", "value": "The cluster goes into wait mode until a new member is manually promoted as primary." },
      { "type": "text", "value": "All remaining members in the cluster are automatically set to read-write mode." }
    ],
    "answer": [
      { "type": "text", "value": "A new primary is automatically elected." }
    ]
}, {
    "id": 104,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `$ mysqlrouter --bootstrap user@hostname:port --directory=directory_path` },
      { "type": "text", "value": "Which activity is performed?" }
    ],
    "options": [
      { "type": "text", "value": "MySQL Router is restarted." },
      { "type": "text", "value": "MySQL Router configures itself based on the information retrieved from the InnoDB cluster metadata server." },
      { "type": "text", "value": "MySQL Router configures all the cluster nodes based on the information retrieved from the InnoDB cluster metadata server." },
      { "type": "text", "value": "MySQL Router is configured based on the information in files in directory_path." }
    ],
    "answer": [
      { "type": "text", "value": "MySQL Router configures itself based on the information retrieved from the InnoDB cluster metadata server." }
    ]
}, {
    "id": 105,
    "question": [
      { "type": "text", "value": "You have replication configured, with one master and one slave on different hosts and an asynchronous replication channel between them." },
      { "type": "text", "value": "You must decrease the volume of data transferred between these hosts." },
      { "type": "text", "value": "The slave instance does not require data from the example database." },
      { "type": "text", "value": "Which replication filter meets these requirements?" }
    ],
    "options": [
      { "type": "text", "value": "On slave: --replicate-wild-ignore-table=example.%." },
      { "type": "text", "value": "On slave: --binlog-ignore-db=example." },
      { "type": "text", "value": "On slave: --replicate-ignore-db=example." },
      { "type": "text", "value": "On master: --binlog-ignore-db=example." },
      { "type": "text", "value": "On master: --replicate-ignore-db=example." }
    ],
    "answer": [
      { "type": "text", "value": "On slave: --replicate-ignore-db=example." }
    ]
}, {
    "id": 106,
    "question": [
      { "type": "text", "value": "Which are two of the settings that control global buffers shared by all threads on a MySQL server?" }
    ],
    "options": [
      { "type": "text", "value": "sort_buffer_size" },
      { "type": "text", "value": "read_buffer_size" },
      { "type": "text", "value": "table_open_cache" },
      { "type": "text", "value": "innodb_buffer_pool_size" },
      { "type": "text", "value": "tmp_table_size" }
    ],
    "answer": [
      { "type": "text", "value": "table_open_cache" },
      { "type": "text", "value": "innodb_buffer_pool_size" }
    ]
}, {
    "id": 107,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully:" },
      { "type": "command", "value": `shell> mysqldump --master-data=2 --single-transaction --result-file=dump.sql mydb` },
      { "type": "text", "value": "Which two statements are true?" }
    ],
    "options": [
      { "type": "text", "value": "It executes flush tables with read lock." },
      { "type": "text", "value": "The backup created is a consistent data dump." },
      { "type": "text", "value": "It is a cold backup." },
      { "type": "text", "value": "This option uses the READ COMMITTED transaction isolation mode." },
      { "type": "text", "value": "It enforces consistent backups for all storage engines." }
    ],
    "answer": [
      { "type": "text", "value": "The backup created is a consistent data dump." },
      { "type": "text", "value": "It enforces consistent backups for all storage engines." }
    ]
}, {
    "id": 108,
    "question": [
      { "type": "text", "value": "Which two actions can obtain information about deadlocks?" }
    ],
    "options": [
      { "type": "text", "value": "Run the SHOW ENGINE INNODB STATUS command from the mysql client." },
      { "type": "text", "value": "Enable the innodb_status_output_locks global parameter." },
      { "type": "text", "value": "Enable the innodb_print_all_deadlocks global parameter." },
      { "type": "text", "value": "Run the SHOW ENGINE INNODB MUTEX command from the mysql client." },
      { "type": "text", "value": "Use the sys.innodb_lock_waits view." }
    ],
    "answer": [
      { "type": "text", "value": "Run the SHOW ENGINE INNODB STATUS command from the mysql client." },
      { "type": "text", "value": "Enable the innodb_print_all_deadlocks global parameter." }
    ]
}, {
    "id": 109,
    "question": [
      { "type": "text", "value": "What is the correct syntax for using transparent data encryption with an InnoDB table?" }
    ],
    "options": [
      { "type": "command", "value": "ALTER TABLE t1 SET TDE = 'ON';" },
      { "type": "command", "value": "ALTER TABLE t1 ENCRYPTION='Y';" },
      { "type": "command", "value": "ALTER TABLE t1 ADD ENCRYPTED_TABLESPACE = 'Y';" },
      { "type": "command", "value": "ALTER TABLE t1 WITH ENCRYPTION USING MASTER KEY;" }
    ],
    "answer": [
      { "type": "command", "value": "ALTER TABLE t1 ENCRYPTION='Y';" }
    ]
}, {
    "id": 110,
    "question": [
      { "type": "text", "value": "Which statement is true about MySQL Enterprise Transparent Data Encryption (TDE)?" }
    ],
    "options": [
      { "type": "text", "value": "Both MyISAM and InnoDB tables can be encrypted by setting the keyring_engine = ALL variable in the MySQL configuration file." },
      { "type": "text", "value": "Lost tablespace encryption keys can be regenerated only if the master database key is known or present in the Key Vault specification." },
      { "type": "text", "value": "TDE can encrypt InnoDB and MyISAM tables only when the tables are stored in the SYSTEM tablespace." },
      { "type": "text", "value": "MySQL TDE uses an appropriate keyring plugin to store the keys in a centralized location." }
    ],
    "answer": [
      { "type": "text", "value": "MySQL TDE uses an appropriate keyring plugin to store the keys in a centralized location." }
    ]
}, {
    "id": 111,
    "question": [
      { "type": "text", "value": "Examine this snippet from the binary log file named binlog.000036:" },
      { "type": "command", "value": `# at 500324
#191120 14:55:16 server id 1  end_log_pos 500453 CRC32 0x98159515
Query thread_id=9 exec_time=2
SET TIMESTAMP=1574222116/*!*/;
DROP TABLE \`rental\` /*!*/;
/*!*/;` },
      { "type": "text", "value": "The rental table was accidentally dropped, and you must recover the table." },
      { "type": "text", "value": "You have restored the last backup, which corresponds to the start of the binlog.000036 binary log." },
      { "type": "text", "value": "Which command will complete the recovery?" }
    ],
    "options": [
      { "type": "command", "value": `mysqlbinlog --stop-position=500324 binlog.000036 | mysql` },
      { "type": "command", "value": `mysqlbinlog --stop-datetime='2019-11-20 14:55:18' binlog.000036 | mysql` },
      { "type": "command", "value": `mysqlbinlog --stop-datetime='2019-11-20 14:55:16' binlog.000036 | mysql` },
      { "type": "command", "value": `mysqlbinlog --stop-position=500453 binlog.000036 | mysql` }
    ],
    "answer": [
      { "type": "command", "value": `mysqlbinlog --stop-position=500324 binlog.000036 | mysql` }
    ]
}, {
    "id": 112,
    "question": [
      { "type": "text", "value": "Which two are true about binary logs used in asynchronous replication?" }
    ],
    "options": [
      { "type": "text", "value": "They contain events that describe database changes on the master." },
      { "type": "text", "value": "They are transferred by the master after connecting to the slave." },
      { "type": "text", "value": "They contain events that describe all queries run on the master." },
      { "type": "text", "value": "They contain events that describe only administrative commands run on the master." },
      { "type": "text", "value": "They are pulled from the master to the slave." }
    ],
    "answer": [
      { "type": "text", "value": "They contain events that describe database changes on the master." },
      { "type": "text", "value": "They are pulled from the master to the slave." }
    ]
}, {
    "id": 113,
    "question": [
      { "type": "text", "value": "Which two statements are true about using backups of the binary log?" }
    ],
    "options": [
      { "type": "text", "value": "They allow for point-in-time recovery of the data." },
      { "type": "text", "value": "Binary logs are relatively small, and therefore, excellent for long-term storage and disaster recovery." },
      { "type": "text", "value": "Multiple binary logs can be used to restore data." },
      { "type": "text", "value": "Binary logs can always be used to unapply unwanted schema changes." },
      { "type": "text", "value": "Multiple binary logs can be applied in parallel for faster data restoration." }
    ],
    "answer": [
      { "type": "text", "value": "They allow for point-in-time recovery of the data." },
      { "type": "text", "value": "Multiple binary logs can be used to restore data." }
    ]
}, {
    "id": 114,
    "question": [
      { "type": "text", "value": "Examine these settings for the mysqld instance:" },
      { "type": "text", "value": "connection_control_min_connection_delay=1000" },
      { "type": "text", "value": "connection_control_max_connection_delay=2000" },
      { "type": "text", "value": "The minimum and maximum delays must be increased to 3000 and 5000, respectively." },
      { "type": "text", "value": "Now examine this command which is invoked:" },
      { "type": "command", "value": `mysql> SET GLOBAL connection_control_min_connection_delay=3000;` },
      { "type": "text", "value": "What is the result?" }
    ],
    "options": [
      { "type": "text", "value": "An error is returned." },
      { "type": "text", "value": "Only the minimum connection value is increased to 3000." },
      { "type": "text", "value": "The minimum value increases to 3000 and the maximum value increases to 4000." },
      { "type": "text", "value": "The minimum connection value is changed to 2000." }
    ],
    "answer": [
      { "type": "text", "value": "An error is returned." }
    ]
}, {
    "id": 115,
    "question": [
      { "type": "text", "value": "Which two statements are true about the data dictionary object cache?" }
    ],
    "options": [
      { "type": "text", "value": "All dictionary object caches have a hard-coded size." },
      { "type": "text", "value": "tablespace_definition_cache sets the number of tablespace objects that can be stored in the dictionary object cache." },
      { "type": "text", "value": "If the dictionary object cache becomes full, MySQL server will be unable to create any more tables/objects." },
      { "type": "text", "value": "Character set and collation definition objects are not cached." },
      { "type": "text", "value": "The dictionary object caches use a Least Recently Used (LRU) algorithm to manage entries in each cache." }
    ],
    "answer": [
      { "type": "text", "value": "tablespace_definition_cache sets the number of tablespace objects that can be stored in the dictionary object cache." },
      { "type": "text", "value": "The dictionary object caches use a Least Recently Used (LRU) algorithm to manage entries in each cache." }
    ]
}, {
    "id": 116,
    "question": [
      { "type": "text", "value": "You wish to protect your MySQL database against SQL injection attacks." },
      { "type": "text", "value": "Which solution fails to do this?" }
    ],
    "options": [
      { "type": "text", "value": "Using stored procedures for any database access." },
      { "type": "text", "value": "Using PREPARED STATEMENTS." },
      { "type": "text", "value": "Avoiding concatenation of SQL statements and user-supplied values in an application." },
      { "type": "text", "value": "Installing and configuring the Connection Control plugin." }
    ],
    "answer": [
      { "type": "text", "value": "Installing and configuring the Connection Control plugin." }
    ]
}, {
    "id": 117,
    "question": [
      { "type": "text", "value": "You have appropriate privileges and are about to shut down a running MySQL server process on Oracle Linux 7." },
      { "type": "text", "value": "Which three are valid methods that will shut down the MySQL server?" }
    ],
    "options": [
      { "type": "command", "value": "kill mysqld_safe" },
      { "type": "command", "value": `mysql> SHUTDOWN;` },
      { "type": "command", "value": "mysqld_safe --shutdown" },
      { "type": "command", "value": `systemctl stop mysqld` },
      { "type": "command", "value": `mysql -S /tmp/mysql.sock --shutdown` },
      { "type": "command", "value": `mysqld_safe -S /tmp/mysql.sock SHUTDOWN` },
      { "type": "command", "value": `mysqladmin shutdown` }
    ],
    "answer": [
      { "type": "command", "value": `mysql> SHUTDOWN;` },
      { "type": "command", "value": `systemctl stop mysqld` },
      { "type": "command", "value": `mysqladmin shutdown` }
    ]
}, {
    "id": 118,
    "question": [
      { "type": "text", "value": "Which feature is provided by multi-source replication?" }
    ],
    "options": [
      { "type": "text", "value": "Providing a common source for the same data to be replicated to other servers." },
      { "type": "text", "value": "Allowing multiple servers to back up to one server." },
      { "type": "text", "value": "Managing conflicts between two sets of the same data." },
      { "type": "text", "value": "Providing multi-source replication where all servers act as the master." }
    ],
    "answer": [
      { "type": "text", "value": "Allowing multiple servers to back up to one server." }
    ]
}, {
    "id": 119,
    "question": [
      { "type": "text", "value": "You must run multiple instances of MySQL Server on a single host." },
      { "type": "text", "value": "Which are two of the methods that are supported?" }
    ],
    "options": [
      { "type": "text", "value": "Run mysqld with ---datadir defined for each instance." },
      { "type": "text", "value": "Use system tools to lock each instance to its own CPU." },
      { "type": "text", "value": "Run MySQL Server docker containers." },
      { "type": "text", "value": "Use systemd with different settings for each instance." },
      { "type": "text", "value": "Use resource groups to lock different instances on separate CPUs." }
    ],
    "answer": [
      { "type": "text", "value": "Run mysqld with ---datadir defined for each instance." },
      { "type": "text", "value": "Run MySQL Server docker containers." }
    ]
}, {
    "id": 120,
    "question": [
      { "type": "text", "value": "Which two are characteristics of snapshot-based backups?" }
    ],
    "options": [
      { "type": "text", "value": "A separate physical copy must be made before releasing the snapshot backup." },
      { "type": "text", "value": "The frozen file system can be cloned to another virtual machine immediately into active service." },
      { "type": "text", "value": "Snapshot backups can be used only in virtual machines." },
      { "type": "text", "value": "There is no need for InnoDB tables to perform its own recovery when restoring from the snapshot backup." },
      { "type": "text", "value": "Snapshot-based backups greatly reduce time during which the database and applications are unavailable." }
    ],
    "answer": [
      { "type": "text", "value": "The frozen file system can be cloned to another virtual machine immediately into active service." },
      { "type": "text", "value": "Snapshot-based backups greatly reduce time during which the database and applications are unavailable." }
    ]
}, {
    "id": 121,
    "question": [
      { "type": "text", "value": "Which two storage engines provide a view of the data consistent with the storage system at any moment?" }
    ],
    "options": [
      { "type": "text", "value": "MyISAM" },
      { "type": "text", "value": "NDB" },
      { "type": "text", "value": "MEMORY" },
      { "type": "text", "value": "ARCHIVE" },
      { "type": "text", "value": "InnoDB" }
    ],
    "answer": [
      { "type": "text", "value": "NDB" },
      { "type": "text", "value": "InnoDB" }
    ]
}, {
    "id": 122,
    "question": [
      { "type": "text", "value": "Which three are types of information stored in the MySQL data dictionary?" }
    ],
    "options": [
      { "type": "text", "value": "Stored procedure definitions" },
      { "type": "text", "value": "Server configuration rollback" },
      { "type": "text", "value": "InnoDB buffer pool LRU management data" },
      { "type": "text", "value": "Performance metrics" },
      { "type": "text", "value": "Server runtime configuration" },
      { "type": "text", "value": "Access control lists" },
      { "type": "text", "value": "View definitions" }
    ],
    "answer": [
      { "type": "text", "value": "Stored procedure definitions" },
      { "type": "text", "value": "Access control lists" },
      { "type": "text", "value": "View definitions" }
    ]
}, {
    "id": 123,
    "question": [
      { "type": "text", "value": "User account baduser@hostname on your MySQL instance has been compromised." },
      { "type": "text", "value": "Which two commands stop any new connections using the compromised account?" }
    ],
    "options": [
      { "type": "command", "value": "ALTER USER baduser@hostname DEFAULT ROLE NONE;" },
      { "type": "command", "value": "ALTER USER baduser@hostname ACCOUNT LOCK;" },
      { "type": "command", "value": "ALTER USER baduser@hostname MAX_USER_CONNECTIONS 0;" },
      { "type": "command", "value": "ALTER USER baduser@hostname PASSWORD DISABLED;" },
      { "type": "command", "value": "ALTER USER baduser@hostname IDENTIFIED WITH mysql_no_login;" }
    ],
    "answer": [
      { "type": "command", "value": "ALTER USER baduser@hostname ACCOUNT LOCK;" },
      { "type": "command", "value": "ALTER USER baduser@hostname IDENTIFIED WITH mysql_no_login;" }
    ]
}, {
    "id": 124,
    "question": [
      { "type": "text", "value": "Which three sets of item information are visible in the mysql system database?" }
    ],
    "options": [
      { "type": "text", "value": "Time zone information and definitions" },
      { "type": "text", "value": "Performance monitoring information" },
      { "type": "text", "value": "Rollback segments" },
      { "type": "text", "value": "Audit log events" },
      { "type": "text", "value": "Help topics" },
      { "type": "text", "value": "Information about table structures" },
      { "type": "text", "value": "Plugins" }
    ],
    "answer": [
      { "type": "text", "value": "Time zone information and definitions" },
      { "type": "text", "value": "Help topics" },
      { "type": "text", "value": "Plugins" }
    ]
}, {
    "id": 125,
    "question": [
      { "type": "text", "value": "The languages table uses InnoDB and the countries table uses the MyISAM storage engine. Both tables are empty." },
      { "type": "text", "value": "Examine these statements:" },
      { "type": "command", "value": `BEGIN;
INSERT INTO languages(lang) VALUES("Italian");
INSERT INTO countries(country) VALUES("Italy");
ROLLBACK;` },
      { "type": "text", "value": "What is the content of both tables after executing these statements?" }
    ],
    "options": [
      { "type": "text", "value": "Both tables are empty." },
      { "type": "text", "value": "Both tables have one row." },
      { "type": "text", "value": "Languages has one row, countries has none." },
      { "type": "text", "value": "Countries has one row, languages has none." }
    ],
    "answer": [
      { "type": "text", "value": "Countries has one row, languages has none." }
    ]
}, {
    "id": 126,
    "question": [
      { "type": "text", "value": "Examine this command, which executes successfully on InnoDB Cluster:" },
      { "type": "command", "value": `sql
dba.dropMetadataSchema()` },
      { "type": "text", "value": "Which two statements are true?" }
    ],
    "options": [
      { "type": "text", "value": "The mysql_innodb_cluster_metadata schema is dropped from the instance where the connection was established." },
      { "type": "text", "value": "Group Replication will be dissolved and all metadata purged." },
      { "type": "text", "value": "The command drops the mysql_innodb_cluster_metadata schema and re-creates it." },
      { "type": "text", "value": "Group Replication is still operational, but InnoDB Cluster must be reimported under MySQL Shell." },
      { "type": "text", "value": "Connections driven by MySQL Router are not affected by the command." },
      { "type": "text", "value": "The mysql_innodb_cluster_metadata schema is dropped from all reachable members of the cluster." }
    ],
    "answer": [
      { "type": "text", "value": "The mysql_innodb_cluster_metadata schema is dropped from the instance where the connection was established." },
      { "type": "text", "value": "Group Replication is still operational, but InnoDB Cluster must be reimported under MySQL Shell." }
    ]
}, {
    "id": 127,
    "question": [
      { "type": "text", "value": "You must increase the maximum number of connections of your MySQL Server to 200." },
      { "type": "text", "value": "The change should take effect immediately and retain the value 200 after the server restarts." },
      { "type": "text", "value": "Which statement does this?" }
    ],
    "options": [
      { "type": "command", "value": "SET SESSION max_connections=200;" },
      { "type": "command", "value": "SET PERSIST max_connections=200;" },
      { "type": "command", "value": "SET GLOBAL PERSIST max_connections=200;" },
      { "type": "command", "value": "SET GLOBAL max_connections=200;" },
      { "type": "command", "value": "SET PERSIST_ONLY max_connections=200;" }
    ],
    "answer": [
      { "type": "command", "value": "SET PERSIST max_connections=200;" }
    ]
}, {
    "id": 128,
    "question": [
      { "type": "text", "value": "A MySQL server is monitored using MySQL Enterprise Monitor's agentless installation." },
      { "type": "text", "value": "Which are two of the features that are available with this installation method?" }
    ],
    "options": [
      { "type": "text", "value": "CPU utilization" },
      { "type": "text", "value": "Operating system memory utilization" },
      { "type": "text", "value": "Disk usage and disk characteristics including disk advisors warnings" },
      { "type": "text", "value": "MySQL Replication monitoring" },
      { "type": "text", "value": "Security-related advisor warnings" }
    ],
    "answer": [
      { "type": "text", "value": "MySQL Replication monitoring" },
      { "type": "text", "value": "Security-related advisor warnings" }
    ]
}, 
]

export default list;