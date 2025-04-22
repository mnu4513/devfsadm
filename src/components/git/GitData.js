import AboutTheCourseGit from './AboutTheCourseGit';
import GitBranchingMerging from './BranchMerging';
import GitBasics from './GitBasic';
import GitHubPushPullClone from './GitHub';
import GitHubPullRequests from './GitHubPull';
import GitIgnore from './GitIgnore';



const GitData = [{
    id: 0,
    element: <AboutTheCourseGit/>,
    name: 'Git & GitHub Course Overview',
    link: '/course/git-github'
},{
    id: 1,
    element: <GitBasics />,
    name: 'Baisc of Git & GitHub',
    link: '/course/git-github/git-basics'
}, {
    id: 2,
    element: <GitBranchingMerging/>,
    name: 'Git Branching & Merging',
    link: '/course/git-github/branching-merging'
}, {
    id: 3,
    element: <GitHubPushPullClone/>,
    name: 'GitHub (Pull, Push & Clone)',
    link: '/course/git-github/github-push'
}, {
    id: 4,
    element: <GitHubPullRequests/>,
    name: 'Collaborating with Pull Requests',
    link: '/course/git-github/pull-requests'
}, {
    id: 5,
    element: <GitIgnore/>,
    name: 'Managing .gitignore Files',
    link: '/course/git-github/gitignore'
}];

export default GitData;