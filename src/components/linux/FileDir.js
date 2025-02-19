import React from 'react'
import { Heading, Subheading, Supersubheading, Text,  TerminalOutput, Line } from '../utils/Comps';

const FilesAndDirLinux = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Files and Directories in Linux`} />

            {/* <Video videoSrc={`i8Vwtaozp_A`} /> */}


            <Subheading text={`Files and Directories Creation`} />
            {/* ===================================================== */}
            {/* mkdir command  */}
            <div >
                <Supersubheading text={`Creating a new Directory:`} />
                <TerminalOutput content={`[root@localhost ~]# mkdir dir-1
[root@localhost ~]# ls -l
total 0
drwxr-xr-x. 2 root root 6 Dec 19 16:25 dir-1
[root@localhost ~]#
`} />
            </div>

            {/* ===================================================== */}
            {/* mkdir command multiple directories */}
            <div >
                <Supersubheading text={`Creating Multiple Directories:`} />
                <TerminalOutput content={`[root@localhost ~]# mkdir dir2 dir3 dir4
[root@localhost ~]# ls
dir-1  dir2  dir3  dir4
[root@localhost ~]#
`} />
            </div>


            {/* ===================================================== */}
            {/* mkdir -p command  */}
            <div >
                <Supersubheading text={`Creating Nested Directories:`} />
                < TerminalOutput content={`[root@localhost ~]# mkdir -p outer/inner
[root@localhost ~]#
[root@localhost ~]# ls outer
inner
[root@localhost ~]#
`} />
            </div>

            {/* ===================================================== */}
            {/* touch command  */}
            <div >
                <Supersubheading text={`Create New File:`} />
                <TerminalOutput content={`[root@localhost ~]# touch file
[root@localhost ~]# ls -l
total 0
-rw-r--r--. 1 root root 0 Dec 19 16:33 file
[root@localhost ~]#
`} />
            </div>

            {/* ===================================================== */}
            {/* touch command  multiple files */}
            <div >
                <Supersubheading text={`Create Multiple Files:`} />
                <TerminalOutput content={`[root@localhost ~]# touch file-1 file-2 file-3
[root@localhost ~]# ls
file  file-1  file-2  file-3
[root@localhost ~]#
`} />
            </div>

<Line/>
            <Subheading text={`Files and Directories Deletation`} />
            {/* ===================================================== */}
            {/* rmdir command  */}
            <div >
                <Supersubheading text={`Remove Empty Directory:`} />
                <TerminalOutput content={`[root@localhost ~]# rmdir dir-1
[root@localhost ~]# ls
[root@localhost ~]#
`} />
            </div>

            {/* ===================================================== */}
            {/* rm command */}
            <div >
                <Supersubheading text={`Remove files and directories:`} />
                <TerminalOutput content={`[root@localhost ~]# ls -ltrh
total 0
-rw-r--r--. 1 root root 0 Dec 19 16:36 file-1
drwxr-xr-x. 2 root root 6 Dec 19 16:36 dir-1
[root@localhost ~]# rm -rf file-1 dir-1
[root@localhost ~]# ls -ltrh
total 0
[root@localhost ~]#
`} />
            
                <Text text={` '-i' : Interactive mode. Prompts before each removal.`} />
                <Text text={`'-r' or '-R' : Recursively remove directories and their contents.`} />
                <Text text={`'-v' : Verbose mode. Displays the details of the removal process.`} />
                <Text text={`'-f' : Force. Ignores non-existent files and never prompts.`} />
                
            </div>

            {/* ===================================================== */}
            {/* rm command  */}
            <div >
                <Supersubheading text={`Remove Files:`} />
                <TerminalOutput content={`[root@station1 ~]# ls
file-1  file-2  file-3
[root@station1 ~]# rm file-1 file-2 file-3
rm: remove regular empty file 'file-1'? yes
rm: remove regular empty file 'file-2'? yes
rm: remove regular empty file 'file-3'? yes
[root@station1 ~]# ls
[root@station1 ~]#
`}/>
                <Text text={`Without any option, we can delete a single or multiple files at a time with 'rm' command.`} />
                
            </div>

            {/* ===================================================== */}
            {/* rm  -rf command  */}
            <div >
                <Supersubheading text={`Forcefully remove a file or directory without prompting:`} />
                <TerminalOutput content={`[root@station1 ~]# ls
dir-1  file-1
[root@station1 ~]# rm -rf dir-1 file-1
[root@station1 ~]# ls
[root@station1 ~]#
`} />
                <Text text={`It is use to delete any file or directory forcefully.`} />
                <Text text={`Command 'rm -rf' deletes a directory recursively.`} />
                
                <Text text={`With the help of command 'rm -rf', we can delete multiple files or directories at a time.`} />
            </div>


            {/* ===================================================== */}

            <div>
                <Text text={`The '-rf' option allows you to delete directories and their contents forcefully. Be cautious with this option, as it will not prompt for confirmation and can lead to data loss.`} />
            </div>


        </div>
    )
}

export default FilesAndDirLinux;