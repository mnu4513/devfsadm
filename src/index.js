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


import User from './components/user/User';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfServices from './components/TermsOfServices';
import Features from './components/Features';
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
        path: '/blog/solaris',
        element: <SolarisBlog />
      },
      {
        path: '/course/shell',
        element: <HomeShell />,
        children: ShellData.map(child => ({
          path: child.link,
          element: child.element
        }))
      }, {
        path: '/course/ansible',
        element: <HomeAnsible />,
        children: AnsibleData.map(child => ({
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
      }
    ]
  }
])

root.render(<RouterProvider router={appRouter} />);

reportWebVitals();