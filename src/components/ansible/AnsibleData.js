import HomeAnsible from './AboutTheCourseAnsible';
import AdHocCommands from './AdHoc';
import AdHocExamples from './AdHocExamples';
import AnsibleModules from './AnsibleModules';
import IntroToAnsible from './IntroToAnsible';
import AnsibleLabSetup from './LabSetup';
import AnsiblePlaybook from './Playbook';
import AnsibleTasks from './PlaybookTasks';
import StaticInventory from './StaticInventory';
import AnsibleVariables from './Variables';


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
}, {
    id: 3, 
    element: <StaticInventory/>,
    name: 'Ansible Static Inventory',
    link: '/course/ansible/inventory'
}, {
    id: 4, 
    element: <AnsibleModules/>,
    name: 'Ansible Modules',
    link: '/course/ansible/modules'
}, {
    id: 5, 
    element: <AdHocCommands/>, 
    name: 'Ad-hoc Command',
    link: '/course/ansible/ad-hoc'
}, {
    id: 6, 
    element: <AdHocExamples/>,
    name: 'Ad-hoc Command Example',
    link: '/course/ansible/ad-hoc-examples'
}, {
    id: 7,
    element: <AnsiblePlaybook/>,
    name: 'Ansible Playbook',
    link: '/course/ansible/playbook'
}, {
    id: 8,
    element: <AnsibleTasks/>,
    name: 'Playbook Tasks',
    link: '/course/ansible/playbook-tasks'
}, {
    id: 9,
    element: <AnsibleVariables/>,
    name: 'Ansible Variables',
    link: '/course/ansible/variables'
}];

export default AnsibleData;