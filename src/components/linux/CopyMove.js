import React from 'react'
import { Command, Heading, Subheading, Text, Image, Video, Note } from '../utils/Comps';

const CopyMove = () => {
    return (
        <div className='mx-4 my-4 lg:max-w-4xl lg:mx-auto'>

            <Heading text={`Copy or Move Files and Directories`} />

            <Video videoSrc={'i8Vwtaozp_A'} />


            <Heading text={`Copy Files and Directories Using 'cp' Command`} />

            {/* ===================================================== */}
            {/* cp command  [copy a file] */}
            <div >
                <Subheading text={`Copy a File:`} />
                <Command command={`cp [options] <source> <destination>`} />
                <Text text={`It is use to copy a file to another location.`} />
                <Image imageSrc={'mwesyf4lmdy4mw6ilgr2'} imageAlt={''} />
            </div>

            <Text text={`'-i'  : Interactive mode. Prompts before overwriting files.`} />
            <Text text={`'-r' or '-R' : Recursively copy directories and their contents.`} />
            <Text text={`'-v'  : Verbose mode. Shows detailed output of the copying process.`} />
            <Text text={`'-f'  : Force. Overwrite files without prompting.`} />
            <Text text={`'-p' : Preserve. Maintains the file attributes such as permissions, timestamps, and ownership.`} />

            {/* ===================================================== */}
            {/* cp command  [copy a directory] */}
            <div >
                <Subheading text={`Copy a Directory:`} />
                <Command command={`cp [options] <source> <destination>`} />
                <Text text={`It is use to copy a file to another location.`} />
                <Image imageSrc={'ndarxpsdsanrntnqvewy'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* cp command  [copy multiple files] */}
            <div >
                <Subheading text={`Copy multiple files to a directory:`} />
                <Command command={`cp file1.txt file2.txt /path/to/destination/`} />
                <Text text={`It is use to copy multiple files to a same location.`} />
                <Image imageSrc={'srvnwexnlym4rvscpuox'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            <div >
                <Note text={` If the destination directory does not exist, 'cp' will create it and copy the data inside.`} />
                <Note text={` If the destination is an existing directory, files will be copied into this directory.`} />
            </div>



            <Heading text={`Move Files and Directories Using 'mv' Command`} />
            {/* ===================================================== */}
            {/* mv command  [move a file] */}
            <div >
                <Subheading text={`Move File or Directory:`} />
                <Command command={`mv [options] <source> <destination>`} />
                <Text text={`It is use to move or rename files or directories from one location to another..`} />
                <Image imageSrc={'s8qonwnnlzqoaephqtmw'} imageAlt={''} />
                <Text text={`'-i'  : Interactive mode. Prompts before overwriting files.`} />
                <Text text={`'-v'  : Verbose mode. Shows detailed output of the copying process.`} />
                <Text text={`'-f'  : Force. Overwrite files without prompting.`} />
            </div>

            {/* ===================================================== */}
            {/* mv command  [rename a file] */}
            <div >
                <Subheading text={`Rename a File or a Directory:`} />
                <Command command={`mv <old_name> <new_name>`} />
                <Text text={`It is use to rename a file.`} />
                <Image imageSrc={'i1fmhhnkdjzw048yfnel'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* mv command  [Move multiple files or directories] */}
            <div >
                <Subheading text={`Move multiple files to a directory:`} />
                <Command command={`mv <file1> <file2> <destination>`} />
                <Text text={`It is also use to move multiple files or directories to another location.`} />
                <Image imageSrc={'l4paa7pgyqyynasl26ql'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            <div >
                <Note text={`If the destination is an existing directory, files will be moved into this directory.`} />
                <Note text={`If the destination file already exists, it will be overwritten unless the '- i' option is used.`} />
            </div>



            <Heading text={`Copy Files and Directories Using 'rsync' Command`} />
            <Text text={`Synchronize files and directories between two locations, performing incremental backups.`} />
            {/* ===================================================== */}
            {/* rsync command  [copy file or directories] */}
            <div >
                <Subheading text={`Copy Files or Directories:`} />
                <Command command={`rsync [options] <source> <destination>`} />
                <Text text={`It is use to synchronize files and directories between two locations.`} />
                <Image imageSrc={'apw40qfhpk6xwyvmdzsh'} imageAlt={''} />
            </div>


            <Text text={`'-a'  :  Archive mode. It preserves permissions, timestamps, and other attributes, and recursively copies directories.`} />
            <Text text={`'-v'  : Verbose mode. Shows detailed output of the synchronization process.`} />
            <Text text={`'-r'  : Recursively copy directories (included in '-a').`} />
            <Text text={`'-z'  : Compress file data during transfer (included in '-a').`} />
            <Text text={`'--delete' : Delete files in the destination that are not in the source.`} />

            {/* ===================================================== */}
            {/* rsync command  [Synchronize a directory with another location:] */}
            <div >
                <Subheading text={`Synchronize a directory with another location:`} />
                <Command command={`rsync -av <source> <destination>`} />
                <Text text={`It is use to synchronize a directory with another location.`} />
                <Image imageSrc={'e1odotxypgmuysfysm0u'} imageAlt={''} />
            </div>

            {/* ===================================================== */}
            {/* rsync command  [Synchronize files over a network:] */}
            <div >
                <Subheading text={`Synchronize files over a network:`} />
                <Command command={`rsync -av <source> <user@IP:destination>`} />
                <Text text={`It is use to synchronize the files over a networkn.`} />
                <Image imageSrc={'e1odotxypgmuysfysm0u'} imageAlt={''} />
            </div>


            {/* ===================================================== */}
            <div >
                <Note text={`'rsync' only transfers changes, which makes it efficient for backups and synchronizations.`} />
                <Note text={`It can be used manually, scheduled with 'crontab', or for network transfers.`} />

            </div>

        </div>
    )
}


export default CopyMove;