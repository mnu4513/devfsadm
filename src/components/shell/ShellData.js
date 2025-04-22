import AboutTheCourseShell from './AboutTheCourseShell';
import IntroToShell from './IntroToShell';
import BasicOfLinuxShell from './BasicOfShell';
import VariableUserInput from './VariableUserInput'
import StringAndArray from './StringArray';
import ArithmeticOperations from './Arithmetic';
import ConditionalStatements from './ConditionalStatements';
import LoopsInShell from './LoopsInShell';
import Function from './FunctionsArguments';
import FileHandling from './FileHandlingRedirection';
import AutomatingScript from './AutomatingScript';
import InterviewPrep from './InterviewPrep';

const ShellData = [{
    id: 0,
    element: <AboutTheCourseShell/>,
    name: 'Shell Scripting Course Overview',
    link: '/course/shell'
},{
    id: 1,
    element: <IntroToShell />,
    name: 'Intro to Shell Scripting',
    link: '/course/shell/intro-to-shell'
},  {
    id: 2,
    element: <BasicOfLinuxShell/>,
    name: 'Basic of Linux Shell',
    link: '/course/shell/basic-of-shell'
}, {
    id: 3,
    element: <VariableUserInput/>,
    name: 'Variables and User Input',
    link: '/course/shell/variables-and-user-input'
}, {
    id: 4,
    element: <StringAndArray/>,
    name: 'String and Array',
    link: '/course/shell/string-and-array'
}, {
    id: 5,
    element: <ArithmeticOperations/>,
    name: 'Arithmetic Operations',
    link: '/course/shell/arithmetic-operations'
}, {
    id: 6,
    element: <ConditionalStatements/>,
    name: 'Conditional Statements',
    link: '/course/shell/conditional-statements'
}, {
    id: 7,
    element: <LoopsInShell/>,
    name: 'Loops in Shell Scripting',
    link: '/course/shell/loops-in-shell-scripting'
}, {
    id: 8,
    element: <Function/>,
    name: 'Functions and Arguments',
    link: '/course/shell/functions-and-arguments'
}, {
    id: 9,
    element: <FileHandling/>,
    name: 'File Handling Redirection',
    link: '/course/shell/file-handling-redirection'
}, {
    id: 10,
    element: <AutomatingScript/>,
    name: 'Automating Script',
    link: '/course/shell/script-automation'
},  {
    id: 11,
    element: <InterviewPrep/>,
    name: 'Interview Preparation',
    link: '/course/shell/interview-prep'
}];

export default ShellData;