import HomeAnsible from './AboutTheCourseAnsible';
import IntroToAnsible from './IntroToAnsible';
import AnsibleLabSetup from './LabSetup';


const AnsibleData = [{
    id: 0,
    element: <HomeAnsible/>,
    name: 'Ansible Course Overview',
    link: '/course/ansible'
},{
    id: 1,
    element: <IntroToAnsible />,
    name: 'Intro to Ansible',
    link: '/course/ansible/intro-to-ansible'
}, {
    id: 2, 
    element: <AnsibleLabSetup/>,
    name: 'Ansible Lab Setup',
    link: '/course/ansible/lab-setup'
}];

export default AnsibleData;