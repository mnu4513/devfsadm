import HomeLinux from './AboutTheCourse'
import IntroToLinux from './IntroToLinux';
import LinuxSetup from './LinuxSetup';
import LoginModes from './LoginModes';
import FHS from './FHS';
import DataCreationRules from './DataCreationRules';
import BasicCommandLinux from './BasicCommands';
import DateTime from './DateTime';
import FilesAndDirLinux from './FileDir';
import CopyMoveLinux from './CopyMove';
import SymbolsLinux from './Symbols';
import GrepLinux from './GrepEF';
import HeadTailLinux from './HeadTailSed';
import LocateFindLinux from './LocateFind';
import ViVim from './ViVim';
import UserManagementLinux from './UserManagement';
import GroupManagementLinux from './GroupManagement';
import SudoSuid from './SudoSuid';
import RunLevelTargetLinux from './RunLevelTarget';
import Permissions from './Permission';
import ACL from './ACL';
import Chattr from './Chattr';
import ArchiveLinux from './Archive';
import InodeLink from './LinkInodes';
import CrontabLinux from './Crontab';
import ServiceManagementLinux from './ServiceManagement';
import BootingProcessPage from './BootingProcess';
import RPM from './RPM';
import YUM from './Yum';
import Network from './Network';
import NetworkConfigurationLinux from './NetworkConfiguration';
import StorageConcept from './StorageConcept';
import StoragePartition from './StoragePartition';
import SwapPartition from './Swap';
import LVM from './LVM';
import Iscsi from './Iscsi';
import SSHLinux from './Ssh';
import Dns from './Dns';
import Ftp from './Ftp';
import Apache from './Apache';
import Dhcp from './Dhcp';
import Nfs from './Nfs';
import Samba from './Samba';
import IPTables from './IPTables';
import Firewall from './Firewall';
import SELinux from './SELinux';

const LinuxData = [{
    id: 0,
    name: 'Linux Course Overview',
    link: '/course/linux',
    element: <HomeLinux />
  }, {
    id: 1,
    name: 'Introduction to Linux',
    link: '/course/linux/intro-to-linux',
    element: <IntroToLinux />
  }, {
    id: 2,
    name: 'Installation and Lab Setup',
    link: '/course/linux/installation-and-setup',
    element: <LinuxSetup/> 
  }, {
    id: 3,
    name: 'Login Mode in Linux',
    link: '/course/linux/login-modes',
    element: <LoginModes/>
  }, {
    id: 4,
    name: 'File Hierarchy Structure',
    link: '/course/linux/fhs',
    element: <FHS/>
  }, {
    id: 5,
    name: 'Basic Data Creation Rules',
    link: '/course/linux/data-creation-rules',
    element: <DataCreationRules/>
  }, {
    id: 6,
    name: 'Basic Commands',
    link: '/course/linux/basic-commands',
    element: <BasicCommandLinux />
  }, {
    id: 7,
    name: 'Date and Time',
    link: '/course/linux/date-time',
    element: <DateTime />
  }, {
    id: 8,
    name: 'Files and Directories',
    link: '/course/linux/files-and-directories',
    element: <FilesAndDirLinux />
  }, {
    id: 9,
    name: 'Copy or Move Data',
    link: '/course/linux/copy-move',
    element: <CopyMoveLinux />
  }, {
    id: 10,
    name: 'Symbols',
    link: '/course/linux/symbols',
    element: <SymbolsLinux />
  }, {
    id: 11,
    name: 'Filter Data Using Grep Command',
    link: '/course/linux/grep',
    element: <GrepLinux />
  }, {
    id: 12,
    name: 'Head, Tail & Sed Commands',
    link: '/course/linux/head-tail-sed',
    element: <HeadTailLinux />
  }, {
    id: 13,
    name: 'Locate & Find Commands',
    link: '/course/linux/locate-find',
    element: <LocateFindLinux />
  }, {
    id: 14,
    name: 'Vi Editor',
    link: '/course/linux/vi-vim',
    element: <ViVim/>
  }, {
    id: 15,
    name: 'User Management',
    link: '/course/linux/user-management',
    element: <UserManagementLinux />
  }, {
    id: 16,
    name: 'Group Management',
    link: '/course/linux/group-management',
    element : <GroupManagementLinux />
  }, {
    id: 17,
    name: 'Sudo & SUID',
    link: '/course/linux/sudo-suid',
    element: <SudoSuid />
  }, {
    id: 18,
    name: 'Run Level & Target',
    link: '/course/linux/run-level-target',
    element: <RunLevelTargetLinux />
  }, {
    id: 19,
    name: 'Basic Permissions',
    link: '/course/linux/permissions',
    element: <Permissions/>
  }, {
    id: 20,
    name: 'ACL',
    link: '/course/linux/acl',
    element: <ACL/>
  }, {
    id: 21,
    name: 'chattr',
    link: '/course/linux/chattr',
    element: <Chattr/>
  }, {
    id: 22,
    name: 'Archive & Compression',
    link: '/course/linux/archive',
    element: <ArchiveLinux/>
  }, {
    id: 23,
    name: 'Inode & Link',
    link: '/course/linux/inode-link',
    element: <InodeLink/>
  }, {
    id: 24,
    name: 'Crontab',
    link: '/course/linux/crontab',
    element: <CrontabLinux/>
  }, {
    id: 25,
    name: 'Service Management',
    link: '/course/linux/service-management',
    element: <ServiceManagementLinux/>
  }, {
    id: 26,
    name: 'Booting Process',
    link: '/course/linux/booting-process',
    element: <BootingProcessPage />
  }, {
    id: 27,
    name: 'RPM',
    link: '/course/linux/RPM',
    element: <RPM/>
  }, {
    id: 28,
    name: 'YUM Repos',
    link: '/course/linux/dnf',
    element: <YUM/>
  }, {
    id: 29,
    name: 'Network',
    link: '/course/linux/network',
    element: <Network/>
  }, {
    id: 30,
    name: 'Network Configuration', 
    link: '/course/linux/network-configuration',
    element: <NetworkConfigurationLinux />
  }, {
    id: 31,
    name: 'Storage',
    link: '/course/linux/storage',
    element: <StorageConcept />
  }, {
    id: 32,
    name: 'Storage Partition',
    link: '/course/linux/partition',
    element: <StoragePartition />
  }, {
    id: 33,
    name: 'SWAP',
    link: '/course/linux/swap',
    element: <SwapPartition />
  }, {
    id: 34,
    name: 'LVM', 
    link: '/course/linux/lvm',
    element: <LVM />
  }, {
    id: 35,
    name: 'SCSI & ISCSI',
    link: '/course/linux/iscsi',
    element: <Iscsi />
  }, {
    id: 36,
    name: 'SSH',
    link: '/course/linux/ssh',
    element: <SSHLinux/>
  }, {
    id: 37,
    name: 'DNS',
    link: '/course/linux/dns',
    element: <Dns/>
  }, {
    id: 38,
    name: 'FTP',
    link: '/course/linux/ftp',
    element: <Ftp />
  }, {
    id: 39,
    name: 'Apache Server',
    link: '/course/linux/apache',
    element: <Apache/>
  }, {
    id: 40,
    name: 'DHCP',
    link: '/course/linux/dhcp',
    element: <Dhcp/>
  }, {
    id: 41,
    name: 'NFS',
    link: '/course/linux/nfs',
    element: <Nfs/>
  }, {
    id: 42,
    name: 'Samba',
    link: '/course/linux/samba',
    element: <Samba />
  }, {
    id: 43,
    name: 'IP Tables',
    link: '/course/linux/ip-tables',
    element: <IPTables/>
  }, {
    id: 44,
    name: 'Firewall',
    link: '/course/linux/firewall',
    element: <Firewall />
  }, {
    id: 45,
    name: 'SELinux',
    link: '/course/linux/selinux',
    element: <SELinux />
  }]

export default LinuxData;