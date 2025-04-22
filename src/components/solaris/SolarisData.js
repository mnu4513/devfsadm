import IntroToSolaris from './IntroToSolaris';
import InstallationAndSetup from './InstallAndSetup';
import BasicCommands from './BasicCommands';
import UserManagement from './UserManagement';
import GroupManagement from './GroupManagement';
import FileAndDir from './FilesAndDir';
import ViEditor from './ViEditor';
import SSH from './SSH';
import SuperUser from './SuperUser';
import ProcessManagement from './ProcessManagement';
import ServiceManagement from './ServiceManagement';
import SystemMonitoring from './SystemMoritoring';
import Archive from './Archive';
import Links from './Link';
import NetworkConfiguration from './NetworkConfiguratin';
import ZFS from './ZFS';
import QuotaReservation from './QuotaReservation';
import ZfsSnapshot from './ZfsSnapshot';
import Swap from './Swap';
import PatchManagement from './PatchManagement';
import RunLevel from './RunLevel';
import LDOM from './LDOM';
import ILOM from './IlomSnapshot';
import ExplorerLogs from './Explorer';
import InterviewPrep from './InetviewPreparation';
import AboutTheCourse from './AboutTheCouse';
import NFSSolaris from './NFS';
import CronJob from './CronJob';
import BootPhasePage from './BootPhase';
import VirtualizationPage from './Virtualization';
import PrePostCheck from './PrePostCheck';

const SolarisData= [{
    id: 0,
    element: <AboutTheCourse/>,
    name: 'Solaris Course Overview',
    link: '/course/solaris'
    }, {
        id: 1,
        element: <IntroToSolaris />,
        name: 'Introduction to Solaris',
    link: '/course/solaris/intro-to-solaris',
  }, {
    id: 2,
    name: 'Installation and Setup',
    link: '/course/solaris/installation-and-setup',
    element: <InstallationAndSetup />
  }, {
    id: 3,
    name: 'Basic Commands',
    link: '/course/solaris/basic-commands',
    element: <BasicCommands />
  }, {
    id: 4,
    name: 'User Management',
    link: '/course/solaris/user-management',
    element: <UserManagement />
  }, {
    id: 5,
    name: 'Group Management',
    link: '/course/solaris/group-management',
    element: <GroupManagement />
  }, {
id: 6,
    name: 'Files and Directories',
    link: '/course/solaris/files-and-directories',
    element: <FileAndDir />
  }, {
    id: 7,
    name: 'Vi Editor',
    link: '/course/solaris/vi-editor',
    element: <ViEditor />
  }, {
    id: 8,
    name: 'SSH',
    link: '/course/solaris/ssh',
    element: <SSH />
  }, {
    id: 9,
    name: 'Super User',
    link: '/course/solaris/super-user',
    element: <SuperUser />
  }, {
id: 10,
name: 'Process Management',
    link: '/course/solaris/process-management',
    element: <ProcessManagement />
  }, {
    id: 11,
    name: 'Service Management',
    link: '/course/solaris/service-management',
    element: <ServiceManagement />
  }, {
    id: 12,
    name: 'System Monitoring',
    link: '/course/solaris/system-monitoring',
    element: <SystemMonitoring />
  }, {
id: 13,
    name: 'Archive',
    link: '/course/solaris/archive',
    element: <Archive />
  }, {
    id: 14,
    name: 'Link',
    link: '/course/solaris/link',
    element: <Links />
  }, {
    id: 15, 
    name: 'Nerwork Configuration',
    link: '/course/solaris/network-configuration',
    element: <NetworkConfiguration />
  }, {
    id: 16,
    name: 'ZFS & zpool',
    link: '/course/solaris/zfs-zpool',
    element: <ZFS />
  }, {
    id: 17,
    name: 'ZFS Quota & Reservation',
    link: '/course/solaris/quota-reservation',
    element: <QuotaReservation />
  }, {
    id: 18,
    name: 'ZFS Snapshot',
    link: '/course/solaris/zfs-snapshot',
    element: <ZfsSnapshot/>
  }, {
    id: 19,
    name: 'Swap',
    link: '/course/solaris/swap',
    element: <Swap/>
  }, {
    id: 20,
    name: 'NFS',
        link: '/course/solaris/nfs',
        element: <NFSSolaris/>
  }, {
    id: 21,
    name: 'Patch Management',
    link: '/course/solaris/patch-management',
    element: <PatchManagement />
  }, {
    id: 22,
    name: 'Pre & Post Checks',
    link: '/course/solaris/pre-post-checks',
    element: <PrePostCheck/>
  }, {
    id: 23,
    name: 'LDOM',
    link: '/course/solaris/ldom',
    element: <LDOM />
  }, {
    id: 24,
    name: 'Cron Job',
    link: '/course/solaris/cron-job',
    element: <CronJob />
  }, {
    id: 25,
    name: 'Run Level',
    link: '/course/solaris/run-level',
    element: <RunLevel/>
  }, {
    id: 26,
    name: 'Boot Phase',
    link: '/course/solaris/boot-phase',
    element: <BootPhasePage />
  }, {
    id: 27,
    name: 'ILOM Snapshot',
    link: '/course/solaris/ilom-snapshot',
    element: <ILOM/>
  }, {
id: 28,
    name: 'Explorer',
    link: '/course/solaris/explorer',
    element: <ExplorerLogs/>
  }, {
    id: 29,
    name: 'Virtualization',
    link: '/course/solaris/virtualization',
    element: <VirtualizationPage/>
  }, {
    id: 30,
    name: 'Interview Preparation',
    link: '/course/solaris/interview-preparation',
    element: <InterviewPrep />
  }]

  export default SolarisData;