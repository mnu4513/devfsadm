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
import RunLevel from './components/solaris/RunLevel';
import LDOM from './components/solaris/LDOM';
import ILOM from './components/solaris/IlomSnapshot';
import ExplorerLogs from './components/solaris/Explorer';
import InterviewPrep from './components/solaris/InetviewPreparation';
import AboutTheCourse from './components/solaris/AboutTheCouse';
import NFSSolaris from './components/solaris/NFS';
import CronJob from './components/solaris/CronJob';
import BootPhasePage from './components/solaris/BootPhase';
import VirtualizationPage from './components/solaris/Virtualization';
import PrePostCheck from './components/solaris/PrePostCheck';

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

// shell
import HomeShell from './components/shell/HomeShell';
import AboutTheCouseShell from './components/shell/AboutTheCourseShell';
import IntroToShell from './components/shell/IntroToShell';
import BasicOfShell from './components/shell/BasicOfShell';
import VariablesAndUserInput from './components/shell/VariableUserInput';
import StringsAndArrays from './components/shell/StringArray';



import User from './components/user/User';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Features from './components/Features';
import SolarisBlog from './components/blogs/SolarisBlog';
import ArithmeticOperations from './components/shell/Arithmetic';
import ConditionalStatements from './components/shell/ConditionalStatements';
import LoopsInShellScripting from './components/shell/LoopsInShell';
import FunctionsAndArguments from './components/shell/FunctionsArguments';
import FileHandlingRedirection from './components/shell/FileHandlingRedirection';
import AutomatingScripts from './components/shell/AutomatingScript';



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
          path: '/course/solaris/pre-post-checks',
          element: <PrePostCheck/>
        }, {
          path: '/course/solaris/ldom',
          element: <LDOM />
        }, {
          path: '/course/solaris/cron-job',
          element: <CronJob />
        }, {
          path: '/course/solaris/run-level',
          element: <RunLevel/>
        }, {
          path: '/course/solaris/boot-phase',
          element: <BootPhasePage />
        }, {
          path: '/course/solaris/ilom-snapshot',
          element: <ILOM/>
        }, {
          path: '/course/solaris/nfs',
          element: <NFSSolaris/>
        }, {
          path: '/course/solaris/explorer',
          element: <ExplorerLogs/>
        }, {
          path: '/course/solaris/virtualization',
          element: <VirtualizationPage/>
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
          path: '/course/shell/basic-of-shell',
          element: <BasicOfShell/>
        }, {
          path: '/course/shell/variables-and-user-input',
          element: <VariablesAndUserInput/>
        }, {
          path: '/course/shell/string-and-array',
          element: <StringsAndArrays/>
        }, {
          path: '/course/shell/arithmetic-operations',
          element: <ArithmeticOperations/>
        }, {
          path: '/course/shell/conditional-statements',
          element: <ConditionalStatements/>
        }, {
          path: '/course/shell/loops-in-shell-scripting',
          element: <LoopsInShellScripting/>
        }, {
          path: '/course/shell/functions-and-arguments',
          element: <FunctionsAndArguments/>
        }, {
          path: '/course/shell/file-handling-redirection',
          element: <FileHandlingRedirection/>
        }, {
          path: '/course/shell/script-automation',
          element: <AutomatingScripts/>
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