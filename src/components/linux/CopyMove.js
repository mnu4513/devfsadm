import React from 'react'
import {  Heading, Subheading, Text,   TerminalOutput, Line, Supersubheading } from '../utils/Comps';

const CopyMove = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Copy or Move Files and Directories`} />

            {/* <Video videoSrc={'i8Vwtaozp_A'} /> */}


            <Subheading text={`Copy Files and Directories Using 'cp' Command`} />

            {/* ===================================================== */}
            {/* cp command  [copy a file] */}
            <div >
    

                <Supersubheading text={`Copy a file to another location.`} />
                <TerminalOutput content={`[root@localhost ~]# cp anaconda-ks.cfg /mnt
[root@localhost ~]# ls /mnt/
anaconda-ks.cfg  hgfs
[root@localhost ~]#
`} />
             
            </div>

            <Text text={`'-i'  : Interactive mode. Prompts before overwriting files.`} />
            <Text text={`'-r' or '-R' : Recursively copy directories and their contents.`} />
            <Text text={`'-v'  : Verbose mode. Shows detailed output of the copying process.`} />
            <Text text={`'-f'  : Force. Overwrite files without prompting.`} />
            <Text text={`'-p' : Preserve. Maintains the file attributes such as permissions, timestamps, and ownership.`} />

            {/* ===================================================== */}
            {/* cp command  [copy a directory] */}
            <div >
          
   
                <Supersubheading text={`Copy a directory to another location.`} />
                <TerminalOutput content={`[root@localhost ~]# cp -r  /etc /mnt
[root@localhost ~]# ls /mnt
etc
[root@localhost ~]#
`} />
          
            </div>

            {/* ===================================================== */}
            {/* cp command  [copy multiple files] */}
            <div >
                <Supersubheading text={`Copy multiple files or directory to a location:`} />
<TerminalOutput content={`[root@localhost ~]# cp -r anaconda-ks.cfg /etc /mnt
[root@localhost ~]# ls
anaconda-ks.cfg
[root@localhost ~]# ls /mnt
anaconda-ks.cfg  etc
`} />
            
            </div>


            {/* ===================================================== */}
            <div >
                <Text text={` If the destination directory does not exist, 'cp' will create it and copy the data inside.`} />
                <Text text={` If the destination is an existing directory, files will be copied into this directory.`} />
            </div>

            <Line/>


            <Subheading text={`Move Files and Directories Using 'mv' Command`} />
            {/* ===================================================== */}
            {/* mv command  [move a file] */}
            <div >
                <Supersubheading text={`Move File or Directory:`} />
                <TerminalOutput content={`[root@localhost ~]# mv /mnt/etc /mnt/tmp
[root@localhost ~]# ls
anaconda-ks.cfg
[root@localhost ~]# ls /mnt/tmp
etc
[root@localhost ~]#
`} />
                
                <Text text={`'-i'  : Interactive mode. Prompts before overwriting files.`} />
                <Text text={`'-v'  : Verbose mode. Shows detailed output of the copying process.`} />
                <Text text={`'-f'  : Force. Overwrite files without prompting.`} />
            </div>

            {/* ===================================================== */}
            {/* mv command  [rename a file] */}
            <div >
                <Supersubheading text={`Rename a File or a Directory:`} />
                <TerminalOutput content={`[root@localhost ~]# ls
dir1  file1
[root@localhost ~]# mv file1 new_file
[root@localhost ~]# mv dir1 new_dir
[root@localhost ~]# ls
new_dir  new_file
[root@localhost ~]#
`} />
                
            </div>

            {/* ===================================================== */}
            {/* mv command  [Move multiple files or directories] */}
            <div >
                <Supersubheading text={`Move multiple files to a directory:`} />
                <TerminalOutput content={`[root@localhost ~]# mv file dir-1 /mnt
[root@localhost ~]# ls /mnt
dir-1  file
[root@localhost ~]# ls .
[root@localhost ~]#
`} />
                
            </div>


            {/* ===================================================== */}
            <div >
                <Text text={`If the destination is an existing directory, files will be moved into this directory.`} />
                <Text text={`If the destination file already exists, it will be overwritten unless the '- i' option is used.`} />
            </div>


<Line/>
            <Subheading text={`Copy Files and Directories Using 'rsync' Command`} />
            <Text text={`Synchronize files and directories between two locations, performing incremental backups.`} />
            {/* ===================================================== */}
            {/* rsync command  [copy file or directories] */}
            <div >
                <Supersubheading text={`Copy Files or Directories:`} />
                <TerminalOutput content={`[root@localhost ~]# ls
file-1  file-2
[root@localhost ~]# rsync -v file-1 file-2 /mnt
file-1
file-2

sent 131 bytes  received 54 bytes  370.00 bytes/sec
total size is 0  speedup is 0.00
[root@localhost ~]#
[root@localhost ~]# ls /mnt
file-1  file-2
[root@localhost ~]#
`}/>
                    
            </div>


            <Text text={`'-a'  :  Archive mode. It preserves permissions, timestamps, and other attributes, and recursively copies directories.`} />
            <Text text={`'-v'  : Verbose mode. Shows detailed output of the synchronization process.`} />
            <Text text={`'-r'  : Recursively copy directories (included in '-a').`} />
            <Text text={`'-z'  : Compress file data during transfer (included in '-a').`} />
            <Text text={`'--delete' : Delete files in the destination that are not in the source.`} />

            {/* ===================================================== */}
            {/* rsync command  [Synchronize a directory with another location:] */}
            <div >
                <Supersubheading text={`Synchronize a directory with another location:`} />
                <TerminalOutput content={`[root@localhost ~]# ls /root
file-1  file-2  file-3
[root@localhost ~]# rsync -iv /root/* /mnt
>f..T...... file-1
>f..T...... file-2
>f+++++++++ file-3

sent 187 bytes  received 73 bytes  520.00 bytes/sec
total size is 0  speedup is 0.00
[root@localhost ~]# ls /mnt
file-1  file-2  file-3
[root@localhost ~]#
`} />
                
            </div>

            {/* ===================================================== */}
            {/* rsync command  [Synchronize files over a network:] */}
            <div >
                <Supersubheading text={`Synchronize files over a network:`} />
                <TerminalOutput content={`[root@localhost ~]# rsync -iv /root/* 192.168.131.134:/tmp
root@192.168.131.134's password:
<f+++++++++ file-1
<f+++++++++ file-2
<f+++++++++ file-3

sent 187 bytes  received 73 bytes  34.67 bytes/sec
total size is 0  speedup is 0.00
[root@localhost ~]#
`} />
                
            </div>


            {/* ===================================================== */}
            <div >
                <Text text={`'rsync' only transfers changes, which makes it efficient for backups and synchronizations.`} />
                <Text text={`It can be used manually, scheduled with 'crontab', or for network transfers.`} />

            </div>

        </div>
    )
}


export default CopyMove;