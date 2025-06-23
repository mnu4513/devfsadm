import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import Home from './components/Home';
import Error404 from './components/Error404';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Features from './components/Features';

// User: Login & Register
import User from './components/user/User';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';


// Solaris
import HomeSolaris from './components/solaris/HomeSolaris';
import SolarisData from './components/solaris/SolarisData';

// Linux 
import HomeLinux from './components/linux/HomeLinux';
import LinuxData from './components/linux/LinuxData';


// shell
import HomeShell from './components/shell/HomeShell';
import ShellData from './components/shell/ShellData'


// Ansible 
import HomeAnsible from './components/ansible/HomeAnsible';
import AnsibleData from './components/ansible/AnsibleData';

// Git & GitHub
import HomeGit from './components/git/HomeGit';
import GitData from './components/git/GitData';

// Blog 
import HomeBlog from './components/blogs/HomeBlog';
import BlogData from './components/blogs/BlogData';

// Exams 
import SolarisExam from './components/exams/solaris/ExamPageSolaris';
import MySQLExam from './components/exams/mysql/ExamPageMySQL';
import OracleLinuxExam from './components/exams/oracleLinux/ExamPageOracleLinux';
import ExadataExam from './components/exams/exadata/ExamPageExadata';



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
        element: <HomeBlog />,
        children: BlogData?.map(child => ({
          path: child.link,
          element: child.element
        }))
      },
      {
        path: '/course/linux',
        element: <HomeLinux />,
        children: LinuxData?.map(child => ({
          path: child.link,
          element: child.element
        }))
      },
      {
        path: '/course/solaris',
        element: <HomeSolaris />,
        children: SolarisData?.map(child => ({
          path: child.link,
          element: child.element
        }))
      }, {
        path: '/course/shell',
        element: <HomeShell />,
        children: ShellData?.map(child => ({
          path: child.link,
          element: child.element
        }))
      }, {
        path: '/course/ansible',
        element: <HomeAnsible />,
        children: AnsibleData?.map(child => ({
          path: child.link,
          element: child.element
        }))
      }, {
        path: '/course/git-github',
        element: <HomeGit />,
        children: GitData?.map(child => ({
          path: child.link,
          element: child.element
        }))
      }, {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      }, {
        path: '/terms-of-services',
        element: <TermsOfServices />
      }, {
        path: '/features',
        element: <Features />
      }, {
        path: '/exam/solaris-1Z0-821',
        element: <SolarisExam/>
      }, {
        path: '/exam/mysql-1Z0-908', 
        element: <MySQLExam/>
      }, {
        path: '/exam/Oracle-Linux-1Z0-106',
        element: <OracleLinuxExam/>
      }, {
        path: '/exam/exadata',
        element: <ExadataExam/>
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();