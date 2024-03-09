import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error404 from './components/Error404';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
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
import Virtulization from './components/solaris/Virtulization';
import LDOM from './components/solaris/LDOM';
import InterviewPrep from './components/solaris/InetviewPreparation';

import User from './components/user/User';
import CronJob from './components/solaris/CronJob';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Features from './components/Features';
import UploadImage from './components/UploadImage';

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
        path: '/about',
        element: <About />
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
      },
      {
        path: '/course/solaris',
        element: <HomeSolaris />,
        children: [{
          path: '/course/solaris/',
          element: <IntroToSolaris />
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
