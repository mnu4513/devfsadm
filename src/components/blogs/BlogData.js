import Blog from './Blog';
import AnsibleBlog from "./AnsibleBlog";
import SolarisBlog from "./SolarisBlog";
import ShellScriptingBlog from "./ShellBlog";
import LinuxBlog from "./LinuxBlog";
import DockerBlog from "./DockerBlog";

const BlogData = [{
    id: 0,
    name: 'Blogs',
    element: <Blog/>,
    link: '/blog'
}, {
    id: 1,
    name: 'Linux Blog',
    element: <LinuxBlog/>,
    link: '/blog/linux'
}, {
    id: 2,
    name: 'Solaris Blog',
    element: <SolarisBlog/>,
    link: '/blog/solaris'
}, {
    id: 3,
    name: 'Shell Scripting',
    element: <ShellScriptingBlog/>,
    link: '/blog/shell-scripting'
}, {
    id: 4,
    name: 'Ansible Blog',
    element: <AnsibleBlog/>,
    link: '/blog/ansible'
}, {
    id: 5,
    name: 'Docker Blog',
    element: <DockerBlog/>,
    link: '/blog/docker'
}];

export default BlogData;