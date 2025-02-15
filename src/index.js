import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error404 from './components/Error404';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';

// Solaris
import HomeSolaris from './components/solaris/HomeSolaris';
import IntroToSolaris from './components/solaris/IntroToSolaris';
import InstallationAndSetup from './components/solaris/InstallAndSetup';
import BasicCommands from './components/solaris/BasicCommands';
import UserManagement from './components/solaris/UserManagement';
import GroupManagement from './components/solaris/GroupManagement';
import FileAndDir from './components/solaris/FilesAndDir';
import ViEditor from './components/solaris/ViEditor';
import SSH from './components/solaris/SSH';
import SuperUser from './components/solaris/SuperUser';
import ProcessManagement from './components/solaris/ProcessManagement';
import ServiceManagement from './components/solaris/ServiceManagement';
import SystemMonitoring from './components/solaris/SystemMoritoring';
import Archive from './components/solaris/Archive';
import Links from './components/solaris/Link';
import NetworkConfiguration from './components/solaris/NetworkConfiguratin';
import ZFS from './components/solaris/ZFS';
import QuotaReservation from './components/solaris/QuotaReservation';
import ZfsSnapshot from './components/solaris/ZfsSnapshot';
import Swap from './components/solaris/Swap';
import PatchManagement from './components/solaris/PatchManagement';
import LDOM from './components/solaris/LDOM';
import InterviewPrep from './components/solaris/InetviewPreparation';
import ILOM from './components/solaris/IlomSnapshot';
import ExplorerLogs from './components/solaris/Explorer';

// Linux 
import HomeLinux from './components/linux/HomeLinux';
import AboutTheCourseLinux from './components/linux/AboutTheCourse'
import IntroToLinux from './components/linux/IntroToLinux';
import LinuxSetup from './components/linux/LinuxSetup';
import LoginModes from './components/linux/LoginModes';
import FHS from './components/linux/FHS';
import DataCreationRules from './components/linux/DataCreationRules';
import BasicCommandLinux from './components/linux/BasicCommands';
import DateTime from './components/linux/DateTime';
import FilesAndDirLinux from './components/linux/FileDir';
import CopyMoveLinux from './components/linux/CopyMove';
import SymbolsLinux from './components/linux/Symbols';
import GrepLinux from './components/linux/GrepEF';
import HeadTailLinux from './components/linux/HeadTailSed';
import LocateFindLinux from './components/linux/LocateFind';
import ViVim from './components/linux/ViVim';
import UserManagementLinux from './components/linux/UserManagement';
import GroupManagementLinux from './components/linux/GroupManagement';
import SudoSuid from './components/linux/SudoSuid';
import RunLevelTargetLinux from './components/linux/RunLevelTarget';
import Permissions from './components/linux/Permission';
import ACL from './components/linux/ACL';
import Chattr from './components/linux/Chattr';
import ArchiveLinux from './components/linux/Archive';
import InodeLink from './components/linux/LinkInodes';
import CrontabLinux from './components/linux/Crontab';
import ServiceManagementLinux from './components/linux/ServiceManagement';
import BootingProcessPage from './components/linux/BootingProcess';
import RPM from './components/linux/RPM';
import YUM from './components/linux/Yum';
import Network from './components/linux/Network';
import NetworkConfigurationLinux from './components/linux/NetworkConfiguration';
import StorageConcept from './components/linux/StorageConcept';
import StoragePartition from './components/linux/StoragePartition';
import SwapPartition from './components/linux/Swap';
import LVM from './components/linux/LVM';
import Iscsi from './components/linux/Iscsi';
import SSHLinux from './components/linux/Ssh';
import Dns from './components/linux/Dns';
import Ftp from './components/linux/Ftp';
import Apache from './components/linux/Apache';
import Dhcp from './components/linux/Dhcp';
import Nfs from './components/linux/Nfs';
import Samba from './components/linux/Samba';
import IPTables from './components/linux/IPTables';
import Firewall from './components/linux/Firewall';
import SELinux from './components/linux/SELinux';







import HomeShell from './components/shell_scripting/HomeShell';

import User from './components/user/User';
import CronJob from './components/solaris/CronJob';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Features from './components/Features';
import UploadImage from './components/UploadImage';
import AboutTheCourse from './components/solaris/AboutTheCouse';
import IntroToShell from './components/shell_scripting/IntroToShell';
import SetupEnv from './components/shell_scripting/SetupEnv';
import ScriptingConcept from './components/shell_scripting/ScriptingConcept';
import Control from './components/shell_scripting/Control';
import TextProcessing from './components/shell_scripting/TextProcessing';
import Functions from './components/shell_scripting/Functions';
import ErrorHandling from './components/shell_scripting/ErrorHandling';
import AdvanceTopics from './components/shell_scripting/AdvanceTopics';
import Projects from './components/shell_scripting/Projects';
import ShellInterviewPerp from './components/shell_scripting/ShellInterviewPerp';
import SolarisBlog from './components/blogs/SolarisBlog';
import AboutTheCouseShell from './components/shell_scripting/AboutTheCourseShell';
import FilesAndDirShell from './components/shell_scripting/FilesAndDirShell';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/image',
        element: <UploadImage />
      }, {
        path: '/about-us',
        element: <AboutUs />
      }, {
        path: '/contact-us',
        element: <ContactUs />
      }, {
        path: '/user',
        element: <User />,
        children: [{
          path: '/user',
          element: <Login />
        }, {
          path: '/user/login',
          element: <Login />
        }, {
          path: '/user/register',
          element: <Register />
        }, {
          path: '/user/forgot-password',
          element: <ForgotPassword />
        },]
      }, {
        path: '/blog',
        element: <SolarisBlog />,
        children: [{
          path: '/blog/solaris',
          element: <SolarisBlog />
        }]
      },
      {
        path: '/course/linux',
        element: <HomeLinux />,
        children: [{
          path: '/course/linux',
          element: <AboutTheCourseLinux />
        }, {
          path: '/course/linux/intro-to-linux',
          element: <IntroToLinux />
        }, {
          path: '/course/linux/installation-and-setup',
          element: <LinuxSetup/> 
        }, {
          path: '/course/linux/login-modes',
          element: <LoginModes/>
        }, {
          path: '/course/linux/fhs',
          element: <FHS/>
        }, {
          path: '/course/linux/data-creation-rules',
          element: <DataCreationRules/>
        }, {
          path: '/course/linux/basic-commands',
          element: <BasicCommandLinux />
        }, {
          path: '/course/linux/date-time',
          element: <DateTime />
        }, {
          path: '/course/linux/files-and-directories',
          element: <FilesAndDirLinux />
        }, {
          path: '/course/linux/copy-move',
          element: <CopyMoveLinux />
        }, {
          path: '/course/linux/symbols',
          element: <SymbolsLinux />
        }, {
          path: '/course/linux/grep',
          element: <GrepLinux />
        }, {
          path: '/course/linux/head-tail-sed',
          element: <HeadTailLinux />
        }, {
          path: '/course/linux/locate-find',
          element: <LocateFindLinux />
        }, {
          path: '/course/linux/vi-vim',
          element: <ViVim/>
        }, {
          path: '/course/linux/user-management',
          element: <UserManagementLinux />
        }, {
          path: '/course/linux/group-management',
          element : <GroupManagementLinux />
        }, {
          path: '/course/linux/sudo-suid',
          element: <SudoSuid />
        }, {
          path: '/course/linux/run-level-target',
          element: <RunLevelTargetLinux />
        }, {
          path: '/course/linux/permissions',
          element: <Permissions/>
        }, {
          path: '/course/linux/acl',
          element: <ACL/>
        }, {
          path: '/course/linux/chattr',
          element: <Chattr/>
        }, {
          path: '/course/linux/archive',
          element: <ArchiveLinux/>
        }, {
          path: '/course/linux/inode-link',
          element: <InodeLink/>
        }, {
          path: '/course/linux/crontab',
          element: <CrontabLinux/>
        }, {
          path: '/course/linux/service-management',
          element: <ServiceManagementLinux/>
        }, {
          path: '/course/linux/booting-process',
          element: <BootingProcessPage />
        }, {
          path: '/course/linux/RPM',
          element: <RPM/>
        }, {
          path: '/course/linux/dnf',
          element: <YUM/>
        }, {
          path: '/course/linux/network',
          element: <Network/>
        }, {
          path: '/course/linux/network-configuration',
          element: <NetworkConfigurationLinux />
        }, {
          path: '/course/linux/storage',
          element: <StorageConcept />
        }, {
          path: '/course/linux/partition',
          element: <StoragePartition />
        }, {
          path: '/course/linux/swap',
          element: <SwapPartition />
        }, {
          path: '/course/linux/lvm',
          element: <LVM />
        }, {
          path: '/course/linux/iscsi',
          element: <Iscsi />
        }, {
          path: '/course/linux/ssh',
          element: <SSHLinux/>
        }, {
          path: '/course/linux/dns',
          element: <Dns/>
        }, {
          path: '/course/linux/ftp',
          element: <Ftp />
        }, {
          path: '/course/linux/apache',
          element: <Apache/>
        }, {
          path: '/course/linux/dhcp',
          element: <Dhcp/>
        }, {
          path: '/course/linux/nfs',
          element: <Nfs/>
        }, {
          path: '/course/linux/samba',
          element: <Samba />
        }, {
          path: '/course/linux/ip-tables',
          element: <IPTables/>
        }, {
          path: '/course/linux/firewall',
          element: <Firewall />
        }, {
          path: '/course/linux/selinux',
          element: <SELinux />
        }]
      },
      {
        path: '/course/solaris',
        element: <HomeSolaris />,
        children: [{
          path: '/course/solaris/',
          element: < AboutTheCourse />
        }, {
          path: '/course/solaris/intro-to-solaris',
          element: <IntroToSolaris />
        }, {
          path: '/course/solaris/installation-and-setup',
          element: <InstallationAndSetup />
        }, {
          path: '/course/solaris/basic-commands',
          element: <BasicCommands />
        }, {
          path: '/course/solaris/user-management',
          element: <UserManagement />
        }, {
          path: '/course/solaris/group-management',
          element: <GroupManagement />
        }, {
          path: '/course/solaris/files-and-directories',
          element: <FileAndDir />
        }, {
          path: '/course/solaris/vi-editor',
          element: <ViEditor />
        }, {
          path: '/course/solaris/ssh',
          element: <SSH />
        }, {
          path: '/course/solaris/super-user',
          element: <SuperUser />
        }, {
          path: '/course/solaris/process-management',
          element: <ProcessManagement />
        }, {
          path: '/course/solaris/service-management',
          element: <ServiceManagement />
        }, {
          path: '/course/solaris/system-monitoring',
          element: <SystemMonitoring />
        }, {
          path: '/course/solaris/archive',
          element: <Archive />
        }, {
          path: '/course/solaris/link',
          element: <Links />
        }, {
          path: '/course/solaris/network-configuration',
          element: <NetworkConfiguration />
        }, {
          path: '/course/solaris/zfs-zpool',
          element: <ZFS />
        }, {
          path: '/course/solaris/quota-reservation',
          element: <QuotaReservation />
        }, {
          path: '/course/solaris/zfs-snapshot',
          element: <ZfsSnapshot/>
        }, {
          path: '/course/solaris/swap',
          element: <Swap/>
        }, {
          path: '/course/solaris/patch-management',
          element: <PatchManagement />
        }, {
          path: '/course/solaris/ldom',
          element: <LDOM />
        }, {
          path: '/course/solaris/cron-job',
          element: <CronJob />
        }, {
          path: '/course/solaris/ilom-snapshot',
          element: <ILOM/>
        }, {
          path: '/course/solaris/explorer',
          element: <ExplorerLogs/>
        }, {
          path: '/course/solaris/interview-preparation',
          element: <InterviewPrep />
        }]
      }, {
        path: '/blog/solaris',
        element: <SolarisBlog />
      },
      {
        path: '/course/shell',
        element: <HomeShell />,
        children: [{
          path: '/course/shell/',
          element: <AboutTheCouseShell />
        }, {
          path: '/course/shell/intro-to-shell',
          element: <IntroToShell />
        }, {
          path: '/course/shell/setup-env',
          element: <SetupEnv />
        }, {
          path: '/course/shell/scripting-concept',
          element: <ScriptingConcept />
        }, {
          path: '/course/shell/control',
          element: <Control />
        }, {
          path: '/course/shell/files-and-dir',
          element: <FilesAndDirShell />
        }, {
          path: '/course/shell/text-processing',
          element: <TextProcessing />
        }, {
          path: '/course/shell/functions',
          element: <Functions />
        }, {
          path: '/course/shell/error-handling',
          element: <ErrorHandling />
        }, {
          path: '/course/shell/advance-topics',
          element: <AdvanceTopics />
        }, {
          path: '/course/shell/projects',
          element: <Projects />
        }, {
          path: '/course/shell/interview-prep',
          element: <ShellInterviewPerp />
        }]
      }, {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      }, {
        path: '/terms-of-services',
        element: <TermsOfServices />
      }, {
        path: '/features',
        element: <Features />
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();