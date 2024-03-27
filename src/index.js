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
import PatchManagement from './components/solaris/PatchManagement';
import Virtulization from './components/solaris/Virtualization';
import LDOM from './components/solaris/LDOM';
import InterviewPrep from './components/solaris/InetviewPreparation';

import HomeShell from './components/shell_scripting/HomeShell';

import User from './components/user/User';
import CronJob from './components/solaris/CronJob';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Features from './components/Features';
import UploadImage from './components/UploadImage';
import AboutTheCouse from './components/solaris/AboutTheCouse';
import IntroToShell from './components/shell_scripting/IntroToShell';
import TypesOfShell from './components/shell_scripting/TypesOfShell';
import ShellScripting from './components/shell_scripting/ShellScripting';
import CreatingRunnignSS from './components/shell_scripting/CreatingRunnignSS';
import Comments from './components/shell_scripting/Comments';
import Variables from './components/shell_scripting/Variables';
import Arrays from './components/shell_scripting/Arrays';
import String from './components/shell_scripting/String';
import ValuePrompt from './components/shell_scripting/ValuePrompt';
import ArithmeticOp from './components/shell_scripting/ArithmeticOp';
import IfElse from './components/shell_scripting/IfElse';
import SwitchCase from './components/shell_scripting/SwitchCase';
import LogicalOperators from './components/shell_scripting/LogicalOperators';
import ForLoop from './components/shell_scripting/ForLoop';
import WhileLoop from './components/shell_scripting/WhileLoop';
import Functions from './components/shell_scripting/Functions';
import BashVar from './components/shell_scripting/BashVar';
import Automation from './components/shell_scripting/Automation';
import Projects from './components/shell_scripting/Projects';
import ShellInterviewPerp from './components/shell_scripting/ShellInterviewPerp';
import SolarisBlog from './components/blogs/SolarisBlog';

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
        path: '/course/solaris',
        element: <HomeSolaris />,
        children: [{
          path: '/course/solaris/',
          element: < AboutTheCouse />
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
          path: '/course/solaris/zfs',
          element: <ZFS />
        }, {
          path: '/course/solaris/patch-management',
          element: <PatchManagement />
        }, {
          path: '/course/solaris/virtulization',
          element: <Virtulization />
        }, {
          path: '/course/solaris/ldom',
          element: <LDOM />
        }, {
          path: '/course/solaris/cron-job',
          element: <CronJob />
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
          path: '/course/shell/intro-to-shell',
          element: <IntroToShell />
        }, {
          path: '/course/shell/types-of-shell',
          element: <TypesOfShell />
        }, {
          path: '/course/shell/shell-scripting',
          element: <ShellScripting />
        }, {
          path: '/course/shell/running-sh-file',
          element: <CreatingRunnignSS />
        }, {
          path: '/course/shell/comments',
          element: <Comments />
        }, {
          path: '/course/shell/variables',
          element: <Variables />
        }, {
          path: '/course/shell/array',
          element: <Arrays />
        }, {
          path: '/course/shell/string',
          element: <String />
        }, {
          path: '/course/shell/value-prompt',
          element: <ValuePrompt />
        }, {
          path: '/course/shell/arithmetic-operation',
          element: <ArithmeticOp />
        }, {
          path: '/course/shell/if-else',
          element: <IfElse />
        }, {
          path: '/course/shell/switch-case',
          element: <SwitchCase />
        }, {
          path: '/course/shell/logical-operators',
          element: <LogicalOperators />
        }, {
          path: '/course/shell/for-loop',
          element: <ForLoop />
        }, {
          path: '/course/shell/while-loop',
          element: <WhileLoop />
        }, {
          path: '/course/shell/functions',
          element: <Functions />
        }, {
          path: '/course/shell/bash-variables',
          element: <BashVar />
        }, {
          path: '/course/shell/automation',
          element: <Automation />
        }, {
          path: '/course/shell/projects',
          element: <Projects />
        }, {
          path: '/course/shell/interview-preparation',
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
